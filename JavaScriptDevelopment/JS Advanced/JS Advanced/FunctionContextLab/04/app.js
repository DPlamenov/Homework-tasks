function solve() {
    let dropDownButton = document.querySelector('#dropdown');
    let dropdownUl = document.querySelector('#dropdown-ul');
    const boxElement = document.querySelector('#box');
    dropDownButton.addEventListener('click', dropDown);
    dropdownUl.addEventListener('click', dropDownChangeColor);


    function dropDown() {
        if(dropdownUl.style.display === 'none' || dropdownUl.style.display === ''){
            dropdownUl.style.display = 'block';
        } else{
            boxElement.style.backgroundColor = 'black';
            boxElement.style.color = 'white';
            dropdownUl.style.display = 'none';

        }
    }

    function dropDownChangeColor(e) {
        let target = e.target;
        boxElement.style.backgroundColor = target.innerText;
        boxElement.style.color = 'black';
        console.log(target.innerText);
    }
}