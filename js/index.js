const addText = () =>{
    const inputText = document.getElementById('input-text');
    const inputValue = inputText.value ;
    const container = document.getElementById('container');
    if(inputValue == ''){
        alert('Please Add something')
    }
    else{
        const div = document.createElement('div');
        div.classList.add('text');
        div.innerHTML = `
            <p>${inputValue}</p>
            <button class='remove btn btn-accent'>Delete</button>
        `
        container.appendChild(div)
        inputText.value = ''
        const remove = document.getElementsByClassName('remove');
        for(const rmv of remove){
            rmv.onclick = function(){
                rmv.parentNode.remove()
            }
        }
    }
}