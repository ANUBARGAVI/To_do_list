
let button = document.getElementById('add')
let todolist = document.getElementById('todolist')
let input = document.getElementById('input');

let list =[];

button.addEventListener('click',()=>{
    const userInput = input.value.trim();

    if (userInput) {
        const confirmation = confirm('You entered:\n' + userInput + '\nDo you want to proceed?');
        if (confirmation) {
            list.push(userInput);
            addtodo(userInput);
            input.value = '';
        } else {
            alert('Todo not added.');
        }
    } else {
        alert('No text entered.');
    }
});
function addtodo(todo){
    let content = document.createElement('p');
      content.innerText=todo;
       todolist.appendChild(content)

       content.addEventListener('click',()=>{
        content.style.textDecoration='line-through'
        remove(todo)
       })
       content.addEventListener('dblclick', () => {
        alert('You double-clicked on: ' + todo); 
        const confirmDelete = confirm('Are you sure you want to delete this todo? \n If Yes click Ok');
        if (confirmDelete) {
            todolist.removeChild(content);
            remove(todo);
            alert('Todo deleted.');
        } else {
            alert('Todo not deleted.');
        }
    });
}

function remove(todo){
    let index =list.indexOf(todo)
    if (index > -1){
        list.splice(index,1);
    }
}
