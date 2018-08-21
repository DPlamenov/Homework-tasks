function start(){
    let title = document.getElementById("title");
    let text = document.getElementById("text");
    title.innerText = "You click the button";
    title.innerText += "!";
    title.style.color = "red";
    let num = prompt("Enter a digit");
    for(let i = 1; i <= num; i++){
        if(i % 2 === 0){
            text.innerHTML += "<p style='color: red'>" + i + "</p>";
        }else {
            text.innerHTML += "<p style='color: blue'>" + i + "</p>";
        }
    }

}
