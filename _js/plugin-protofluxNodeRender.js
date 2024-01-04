const regexGet = /<!-- ProtofluxNode:start -->(.*?)<!-- ProtofluxNode:end -->/gs;

const regexReplace = /<!-- ProtofluxNode:start -->(.*?)<!-- ProtofluxNode:end -->/s;

const leftConnector = `
    <svg width="16" height="32">
      <path d="M 0 1 H 15 V 31 H 0"/>
    </svg>
`;

const rightConnector = `
    <svg width="16" height="32">
      <path d="M 32 31 H 1 V 1 H 32"/>
    </svg>
`;

const triggerConnector = `
    <svg width="16" height="32">
      <polygon style="stroke-width: 1px;" points="0.5,0 0.5,32 16,16" />
    </svg>
`;

const addTitle = (title) => `
<table class="PFN">
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

const connectorInputRegular = (data) => `
<tr>
  <td class="PFN-Connector PFN-${data.type}" rowspan="2">
    ${data.type.startsWith('Trigger') ? triggerConnector : leftConnector}
  </td>
  <td class="PFN-LabelLeft PFN-${data.type}" colspan="2">${data.label}</td>
`;

const connectorOutputRegular = (data) => `
  <td class="PFN-Connector PFN-${data.type}" rowspan="2">
    ${data.type.startsWith('Trigger') ? triggerConnector : rightConnector}
  </td>
</tr>
<tr>
  <td class="PFN-LabelRight PFN-${data.type}">${data.label}</td>
</tr>
`;

const connectorOutputEnd = (data) => `
<tr>
  <td rowspan="2"></td>
  <td class="PFN-Connector PFN-${data.type}" rowspan="2">
    ${data.type.startsWith('Trigger') ? triggerConnector : rightConnector}
  </td>
</tr>
<tr>
  <td></td>
  <td class="PFN-LabelRight PFN-${data.type}" colspan="2">${data.label}</td>
</tr>
`;

const connectorInputEnd = (data) => `
<tr>
  <td class="PFN-Connector PFN-${data.type}" rowspan="2">
  ${data.type.startsWith('Trigger') ? triggerConnector : leftConnector}
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
    if (!regexGet.test(content)) return;
    const data = content.match(regexGet);
    data.forEach((dataTable, i) => {
      const connectors = tableToJson(createElementFromHTML(dataTable));
      const nodeTitle = connectors.shift()[0];
      const nodeType = connectors.pop()[0];

      let table = addTitle(nodeTitle);

      connectors.forEach((connector, i) => {
        // write out out data
        const connectorData = {
          connectorType: connector[0],
          type: connector[1],
          label: connector[2],
        };
        if (connectorData.type.includes('\'')) return console.warn(`Forbidden char in type. ${connectorData.label}: "${connectorData.type}"`);
        if (connectorData.type.includes('"')) return console.warn(`Forbidden char in type. ${connectorData.label}: "${connectorData.type}"`);
        // FIXME: Edge case with only one output is not working
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

      content = content.replace(regexReplace, table);
    });
    return content;
  });
}
// Add plugin to docsify's plugin array
window.$docsify = window.$docsify || {};
$docsify.plugins = [protofluxNodeRender, ...($docsify.plugins || [])];
