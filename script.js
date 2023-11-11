const inputBox = document.getElementById('input-box')
const listContainer = document.getElementById('list-container')

function addTask() {
    if (inputBox.value === '') {
        alert('You must name your task!')
    } else {
        let li = document.createElement('li'); //create new list item
        li.innerText = inputBox.value;

        let span1 = document.createElement('span');
        span1.innerHTML = '\u00d7'

        let span2 = document.createElement('span');
        span2.innerHTML = '\u2713'

        //appendthe li to the listcontainer
        listContainer.appendChild(li);

        //append both span element to the
        li.appendChild(span1);
        li.appendChild(span2);

        inputBox.value = ''; //set input value back to an empty string
    }
    saveData();
}

listContainer.addEventListener('click', function(e){
    if (e.target.tagName === 'SPAN'){
        let listItem = e.target.parentElement;

        if (e.target.innerHTML === '\u00d7'){
            listItem.remove();
        } else if (e.target.innerHTML === '\u2713'){
            listItem.style.textDecoration = 'line-through';
        }

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