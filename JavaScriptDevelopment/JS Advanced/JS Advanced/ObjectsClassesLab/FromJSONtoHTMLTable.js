function fromJSONToHTMLTable(input) {
    let output = '<table>\n';
    input = JSON.parse(input);
    let keys = Object.keys(input[0]);
    output += '<tr>';
    for (let i = 0; i < keys.length; i++) {
        output += `<th>${keys[i]}</th>`;
    }
    output += '</tr>\n';
    for (let row of input) {
        output += `    <tr>`;
        for (let i = 0; i < keys.length; i++) {
            output += `<td>${escapeHtml(row[keys[i]])}</td>`;
        }
        output += `</tr>\n`;
    }

    output += '</table>';
    return output;

    function escapeHtml(unsafe) {
        return unsafe.toString()
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/"/g, "&quot;")
            .replace(/'/g, "&#39;");
    }
}