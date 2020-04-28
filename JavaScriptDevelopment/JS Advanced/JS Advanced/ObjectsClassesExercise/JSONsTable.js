function solve(input) {
    let output = '<table>\n';
    input.forEach(function (element) {
        let currentObj = JSON.parse(element);
        output += '\t<tr>\n';

        Object.entries(currentObj).forEach(function (element) {
            output += `\t\t<td>${escapeHtml(element[1])}</td>\n`;
        });
        output += '\t</tr>\n';
    });

    output += '</table>';

    console.log(output);

    function escapeHtml(unsafe) {
        unsafe = unsafe.toString();
        return unsafe
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/"/g, "&quot;")
            .replace(/'/g, "&#39;");
    }
}
solve(['{"name":"Pesho","position":"Promenliva","salary":100000}',
    '{"name":"Teo","position":"Lecturer","salary":1000}',
    '{"name":"Georgi","position":"Lecturer","salary":1000}']
);