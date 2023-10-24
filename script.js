const inputBox = document.getElementById('input-box')
const listContainer = document.getElementById('list-container')

function addTask() {
    if (inputBox.value === '') {
        alert('You must name your task!')
    } else {
        let li = document.createElement('li'); //create new list item

        let checkBox = document.createElement('input'); //create new input
        checkBox.setAttribute('type','checkbox'); //give it new attribute type and set it to checkbox

        let label = document.createElement('label');//create new label
        label.innerText = inputBox.value;

        let span = document.createElement('span');
        span.innerHTML = '\u00d7'

        //append the checkbox and label to the li
        li.appendChild(checkBox);
        li.appendChild(label);
        li.appendChild(span);


        listContainer.appendChild(li); //append the li with child element checkbox and label

        inputBox.value = ''; //set input value back to an empty string
    }
    saveData();
}

listContainer.addEventListener('click', function(e){
    if (e.target.tagName === 'INPUT'){
        let label = e.target.nextElementSibling;
        label.style.textDecoration = 'line-through';
        saveData();
    } else if (e.target.tagName === 'SPAN'){
        e.target.parentElement.remove();
        saveData();
    }
}, false);

function saveData(){
    localStorage.setItem('data', listContainer.innerHTML)
}
function showTask(){
    listContainer.innerHTML = localStorage.getItem('data');
}
showTask();