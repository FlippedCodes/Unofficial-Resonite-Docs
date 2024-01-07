const PFNregexGet = /<!-- ProtofluxNode:start -->(.*?)<!-- ProtofluxNode:end -->/gs;

const PFNregexReplace = /<!-- ProtofluxNode:start -->(.*?)<!-- ProtofluxNode:end -->/s;

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

const leftConnector = `
    <svg width="32" height="64">
      <path d="M 0 1 H 31 V 63 H 0"/>
    </svg>
`;

const rightConnector = `
    <svg width="32" height="64">
      <path d="M 64 63 H 1 V 1 H 63"/>
    </svg>
`;

const triggerConnector = `
    <svg width="32" height="64">
      <polygon style="stroke-width: 1px;" points="0.5,0 0.5,64 32,32" />
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

const connectorOutputStart = (data) => `
<tr>
  <td colspan="3"></td>
  <td class="PFN-Connector PFN-${data.type}" rowspan="2">
    ${triggerTypes.includes(data.type) ? triggerConnector : rightConnector}
  </td>
</tr>
<tr>
  <td colspan="1"></td>
  <td class="PFN-LabelRight PFN-${data.type}">${data.label}</td>
</tr>
`

const connectorInputRegular = (data) => `
<tr>
  <td class="PFN-Connector PFN-${data.type}" rowspan="2">
    ${triggerTypes.includes(data.type) ? triggerConnector : leftConnector}
  </td>
  <td class="PFN-LabelLeft PFN-${data.type}" colspan="2">${data.label}</td>
`;

const connectorOutputRegular = (data) => `
  <td class="PFN-Connector PFN-${data.type}" rowspan="2">
    ${triggerTypes.includes(data.type) ? triggerConnector : rightConnector}
  </td>
</tr>
<tr>
  <td class="PFN-LabelRight PFN-${data.type}">${data.label}</td>
</tr>
`;

const connectorOutputEnd = (data) => `
<tr>
  <td colspan="3"></td>
  <td class="PFN-Connector PFN-${data.type}" rowspan="2">
    ${triggerTypes.includes(data.type) ? triggerConnector : rightConnector}
  </td>
</tr>
<tr>
  <td class="PFN-LabelRight PFN-${data.type}" colspan="2">${data.label}</td>
</tr>
`;

const connectorInputEnd = (data) => `
<tr>
  <td class="PFN-Connector PFN-${data.type}" rowspan="2">
  ${triggerTypes.includes(data.type) ? triggerConnector : leftConnector}
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
        // TEMP: Converts
        connectorData.connectorType = connectorData.connectorType.replace('list', '');
        connectorData.connectorType = connectorData.connectorType.replace('reference', 'input');
        if (connectorData.connectorType === 'inputbuttons' ||
            connectorData.connectorType === 'outputbuttons') return;

        if (connectorData.type.includes('\'')) return console.warn(`Forbidden char in type. ${connectorData.label}: "${connectorData.type}"`);
        if (connectorData.type.includes('"')) return console.warn(`Forbidden char in type. ${connectorData.label}: "${connectorData.type}"`);
        // check if first one is a output
        if (i === 0 && connectorData.connectorType === 'output') {
          return table += connectorOutputStart(connectorData);
        }
        // check if previous entry was the same connector type -> only connectors left on that side
        if (i !== 0 && connectorData.connectorType === connectors[i-1][0]) {
          if (connectorData.connectorType === 'input') return table += connectorInputEnd(connectorData);
          if (connectorData.connectorType === 'output') return table += connectorOutputEnd(connectorData);
        }
        // check if last entry on left side with prev on the left
        if (i !== connectors.length - 1 && connectorData.connectorType === connectors[i+1][0]) {
          if (connectorData.connectorType === 'input') return table += connectorInputEnd(connectorData);
        }
        // check if last entry on the left with prev. on the right
        if (i === connectors.length - 1) {
          if (connectorData.connectorType === 'input') return table += connectorInputEnd(connectorData);
        }
        // normal cases
        if (connectorData.connectorType === 'input') return table += connectorInputRegular(connectorData);
        if (connectorData.connectorType === 'output') return table += connectorOutputRegular(connectorData);

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
