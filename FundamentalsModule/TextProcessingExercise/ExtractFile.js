function solve(filePath) {
    let lastIndexOf = filePath.lastIndexOf('\\');
    let file = filePath.substring(lastIndexOf + 1);
    let split = file.split('.');
    let fileExt = split.pop();
    let fileName = split.join('.');

    console.log(`File name: ${fileName}`);
    console.log(`File extension: ${fileExt}`);
}

solve('C:\\Internal\\training\\internal\\Tem.rplate.pptx');