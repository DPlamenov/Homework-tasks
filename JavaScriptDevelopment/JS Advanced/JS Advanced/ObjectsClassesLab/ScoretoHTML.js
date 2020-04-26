function solve(input) {
    console.log('<table>');
    console.log('<tr><th>name</th><th>score</th></tr>');

    input = JSON.parse(input);
    for (let player of input) {
        console.log(`<tr><td>${escapeHtml(player.name)}</td><td>${(player.score)}</td></tr>`);
    }
    console.log('</table>');

    function escapeHtml(unsafe) {
        return unsafe
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/"/g, "&quot;")
            .replace(/'/g, "&#39;");
    }
}
