const todoInput = document.getElementById('todo-input');
const addBtn = document.getElementById('add-btn');
const todoList = document.getElementById('todo-list');
let a = [];
a=JSON.parse(localStorage.getItem('data'));
addBtn.addEventListener('click', () => {
    const taskText = todoInput.value.trim();
    if (taskText !== '') {
        a.push(taskText);
        localStorage.setItem('data', JSON.stringify(a));
        addTodo();
    }
    todoInput.value = '';
});
todoInput.addEventListener('keypress',(e)=>{
    if (e.key=="Enter"){
        const taskText = todoInput.value.trim();
        if (taskText !== '') {
            a.push(taskText);
            localStorage.setItem('data', JSON.stringify(a));
            addTodo();
        }
        todoInput.value='';
}
})

function addTodo() {
    todoList.innerHTML = '';
    a.forEach((ele, index) => {
        const todoItem = document.createElement('li');
        todoItem.className = 'todo-item';
        todoItem.innerHTML = `
            <span id="span">${ele}</span>
            <p></p>
            <button id='btn' >Delete</button>
        `;
        todoItem.querySelector('span').addEventListener('click', () => {
            todoItem.classList.toggle('completed');
            // alert("<input></input>");
        });

        todoItem.querySelector('button').addEventListener('click', () => {
            a.splice(index, 1);
            localStorage.setItem('data', JSON.stringify(a));
            addTodo();
        });
        todoList.appendChild(todoItem);
    });
}



window.addEventListener('load', () => {
    addTodo();
});


// let time = new Date();
// console.log(time);
// let hour =time.getHours();
// console.log(hour);
// let min 