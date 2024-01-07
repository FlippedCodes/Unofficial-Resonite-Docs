const PFNregexGet = /<!-- ProtofluxNode:start -->(.*?)<!-- ProtofluxNode:end -->/gs;

const PFNregexReplace = /<!-- ProtofluxNode:start -->(.*?)<!-- ProtofluxNode:end -->/s;

const PFNregexCheckForVector = /(?<!\dx)\d$/;

const triggerTypes = [
  'SyncOperation',
  'AsyncOperation',
  'Continuation',
  'Call',
  'AsyncCall',
  'SyncResumption',
  'AsyncResumption',
  'SyncOperation',
  'AsyncOperation'
];

const leftConnector = [
  // empty array so array index represents amount of lines in connector
  '',
  `
  <svg width="32" height="64">
  <path style="stroke-width: 4px" d="M 0 2 H 30 V 62 H 0"/>
  /svg>
  `,
  `
  <svg width="32" height="64">
    <path style="stroke-width: 4px" d="M 0 2 H 30 V 62 H 0"/>
    <path style="stroke-width: 2px" d="M 0 32 H 30"/>
  </svg>
  `,
  `
  <svg width="32" height="64">
    <path style="stroke-width: 4px" d="M 0 2 H 30 V 62 H 0"/>
    <path style="stroke-width: 2px" d="M 0 22.166 H 30"/>
    <path style="stroke-width: 2px" d="M 0 41.833 H 30"/>
  </svg>
  `,
  `
  <svg width="32" height="64">
    <path style="stroke-width: 4px" d="M 0 2 H 30 V 62 H 0"/>
    <path style="stroke-width: 2px" d="M 0 17.5 H 30"/>
    <path style="stroke-width: 2px" d="M 0 32 H 30"/>
    <path style="stroke-width: 2px" d="M 0 46.5 H 30"/>
  </svg>
  `,
];

const rightConnector = [
  // empty array so array index represents amount of lines in connector
  '',
  `
  <svg width="32" height="64">
    <path style="stroke-width: 4px" d="M 32 2 H 2 V 62 H 32"/>
  </svg>
  `,
  `
  <svg width="32" height="64">
    <path style="stroke-width: 4px" d="M 32 2 H 2 V 62 H 32"/>
    <path style="stroke-width: 2px" d="M 2 32 H 32"/>
  </svg>
  `,
  `
  <svg width="32" height="64">
    <path style="stroke-width: 4px" d="M 32 2 H 2 V 62 H 32"/>
    <path style="stroke-width: 2px" d="M 2 22.166 H 32"/>
    <path style="stroke-width: 2px" d="M 2 41.833 H 32"/>
  </svg>
  `,
  `
  <svg width="32" height="64">
    <path style="stroke-width: 4px" d="M 32 2 H 2 V 62 H 32"/>
    <path style="stroke-width: 2px" d="M 2 17.5 H 32"/>
    <path style="stroke-width: 2px" d="M 2 32 H 32"/>
    <path style="stroke-width: 2px" d="M 2 46.5 H 32"/>
  </svg>
  `,
];

const triggerConnector = `
    <svg width="32" height="64">
      <polygon style="stroke-width: 2px;" points="0.5,0 0.5,64 32,32" />
    </svg>
`;

const addTitle = (title, path) => `
<table class="PFN" id="${path}">
  <thead>
    <tr>
      <th class="PFN-Title" colspan="4">${title}</th>
    </tr>
  </thead>
  <tbody>
`;

const addType = (type) => `
    <tr>
      <td class="PFN-NodeType" colspan="4">${type}</td>
    </tr>
  </tbody>
</table>
`;

const connectorOutputStart = (data, connectorRank) => `
<tr>
  <td colspan="3"></td>
  <td class="PFN-Connector PFN-${data.type}" rowspan="2">
    ${triggerTypes.includes(data.type) ? triggerConnector : rightConnector[connectorRank]}
  </td>
</tr>
<tr>
  <td colspan="1"></td>
  <td class="PFN-LabelRight PFN-${data.type}">${data.label}</td>
</tr>
`

const connectorInputRegular = (data, connectorRank) => `
<tr>
  <td class="PFN-Connector PFN-${data.type}" rowspan="2">
    ${triggerTypes.includes(data.type) ? triggerConnector : leftConnector[connectorRank]}
  </td>
  <td class="PFN-LabelLeft PFN-${data.type}" colspan="2">${data.label}</td>
`;

const connectorOutputRegular = (data, connectorRank) => `
  <td class="PFN-Connector PFN-${data.type}" rowspan="2">
    ${triggerTypes.includes(data.type) ? triggerConnector : rightConnector[connectorRank]}
  </td>
</tr>
<tr>
  <td class="PFN-LabelRight PFN-${data.type}">${data.label}</td>
</tr>
`;

const connectorOutputEnd = (data, connectorRank) => `
<tr>
  <td colspan="3"></td>
  <td class="PFN-Connector PFN-${data.type}" rowspan="2">
    ${triggerTypes.includes(data.type) ? triggerConnector : rightConnector[connectorRank]}
  </td>
</tr>
<tr>
  <td class="PFN-LabelRight PFN-${data.type}" colspan="2">${data.label}</td>
</tr>
`;

const connectorInputEnd = (data, connectorRank) => `
<tr>
  <td class="PFN-Connector PFN-${data.type}" rowspan="2">
  ${triggerTypes.includes(data.type) ? triggerConnector : leftConnector[connectorRank]}
  </td>
  <td class="PFN-LabelLeft PFN-${data.type}" colspan="2">${data.label}</td>
</tr>
<tr></tr>
`; 

function createElementFromHTML(htmlString) {
  var div = document.createElement('div');
  div.innerHTML = htmlString.trim();
  return div.children[0];
}

function tableToJson(table) {
  const data = Object.values(table.rows).map((row) => {
    return Object.values(row.cells).map((cell) => cell.innerHTML);
  });
  return data;
}

function protofluxNodeRender(hook, vm) {
  hook.afterEach((content) => {
    if (!PFNregexGet.test(content)) return;
    const data = content.match(PFNregexGet);
    data.forEach((dataTable) => {
      const connectors = tableToJson(createElementFromHTML(dataTable));
      const nodeTitle = connectors.shift()[0];
      const nodeTypePath = connectors.pop();
      const nodePath = nodeTypePath[1];
      const nodeType = nodeTypePath[0].split('/').at(-1);

      let table = addTitle(nodeTitle, nodePath);

      connectors.forEach((connector, i) => {
        // write out out data
        const connectorData = {
          connectorType: connector[0],
          type: connector[1],
          label: connector[2],
        };
        const connectorRankArr = connectorData.type.match(PFNregexCheckForVector);
        let connectorRank = 1;
        if (connectorRankArr) connectorRank = connectorRankArr[0];
        // TEMP: Converts
        connectorData.connectorType = connectorData.connectorType.replace('list', '');
        connectorData.connectorType = connectorData.connectorType.replace('reference', 'input');
        if (connectorData.connectorType === 'inputbuttons' ||
            connectorData.connectorType === 'outputbuttons') return;

        if (connectorData.type.includes('\'')) return console.warn(`Forbidden char in type. ${connectorData.label}: "${connectorData.type}"`);
        if (connectorData.type.includes('"')) return console.warn(`Forbidden char in type. ${connectorData.label}: "${connectorData.type}"`);
        // check if first one is a output
        if (i === 0 && connectorData.connectorType === 'output') {
          return table += connectorOutputStart(connectorData, connectorRank);
        }
        // check if previous entry was the same connector type -> only connectors left on that side
        if (i !== 0 && connectorData.connectorType === connectors[i-1][0]) {
          if (connectorData.connectorType === 'input') return table += connectorInputEnd(connectorData, connectorRank);
          if (connectorData.connectorType === 'output') return table += connectorOutputEnd(connectorData, connectorRank);
        }
        // check if last entry on left side with prev on the left
        if (i !== connectors.length - 1 && connectorData.connectorType === connectors[i+1][0]) {
          if (connectorData.connectorType === 'input') return table += connectorInputEnd(connectorData, connectorRank);
        }
        // check if last entry on the left with prev. on the right
        if (i === connectors.length - 1) {
          if (connectorData.connectorType === 'input') return table += connectorInputEnd(connectorData, connectorRank);
        }
        // normal cases
        if (connectorData.connectorType === 'input') return table += connectorInputRegular(connectorData, connectorRank);
        if (connectorData.connectorType === 'output') return table += connectorOutputRegular(connectorData, connectorRank);

        console.warn(`Unknown connector type. ${connectorData.label}: "${connectorData.connectorType}"`);
      });

      table += addType(nodeType);

      content = content.replace(PFNregexReplace, table);
    });
    return content;
  });
}
// Add plugin to docsify's plugin array
window.$docsify = window.$docsify || {};
$docsify.plugins = [protofluxNodeRender, ...($docsify.plugins || [])];
