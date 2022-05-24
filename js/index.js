const todosNode = document.querySelector(".js-todos");
const inputNode = document.querySelector(".js-input");
const buttonNode = document.querySelector(".js-button");

let todos = [];

function addTodo(text) {
    const todo = {
        text,
        done: false,
        id: `${Math.random()}`
    };
    
    todos.push(todo);
}

function deleteTodo(id) {
    todos.forEach(todo => {
        if (todo.id === id) {
            todo.done = true;
        }
    })
}

function render() {
    console.log(todos);
    
    let html = '';

    todos.forEach(todo => {
        if(todo.done) {
            return;
        };

        html += `
        <div class="todo__item">
            <button class="button-checked" data-id="${todo.id}"></button>
            ${todo.text}
        </div>
        `;
        
    })

    todosNode.innerHTML = html;
}

buttonNode.addEventListener('click', () => {
    const text = inputNode.value;

    addTodo(text);

    inputNode.value = "";

    render();
});

// так как кнопка создана динамически (сначала нет), событие обрабатывается на родительском контейнере

todosNode.addEventListener('click', (event) => {
    if (event.target.tagName !== "BUTTON") {
        return;
    }

    const id = event.target.dataset.id;

    deleteTodo(id);

    render();
});

render();