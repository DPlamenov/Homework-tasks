function f(radius, height) {
    let volume = (1 / 3.0) * Math.PI * radius * radius * height;
    let c = height * height + radius * radius;
    c = Math.sqrt(c);
    let area = (radius + c) * radius * Math.PI;
    volume = volume.toFixed(4);
    area = area.toFixed(4);

    console.log("volume = " + volume);
    console.log("area = " + area);
}
