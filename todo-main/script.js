// Получаем элементы формы и списка
const form = document.getElementById('todo-form');
const input = document.getElementById('todo-text');
const todoList = document.getElementById('todo-list');

// Массив для хранения задач
let todos = [];

// Функция для отображения задач
function renderTodos() {
    // Очищаем список задач перед отрисовкой
    todoList.innerHTML = '';

    // Проходим по массиву задач и добавляем каждую задачу в список
    todos.forEach((todo, index) => {
        const todoItem = document.createElement('li');
        todoItem.classList.add('list-group-item', 'todo-item');
        todoItem.innerHTML = `
            ${todo.text}
            <button type="button" class="btn btn-danger btn-sm float-right delete-btn" data-index="${index}">Удалить</button>
        `;
        todoList.appendChild(todoItem);
    });

    // Получаем все кнопки удаления и добавляем обработчики событий
    const deleteButtons = document.querySelectorAll('.delete-btn');
    deleteButtons.forEach(button => {
        button.addEventListener('click', function() {
            const index = parseInt(button.getAttribute('data-index'));
            todos.splice(index, 1); // Удаляем задачу из массива
            renderTodos(); // Повторно отрисовываем список задач
        });
    });
}

// Обработчик события для добавления новой задачи
form.addEventListener('submit', function(event) {
    event.preventDefault();
    
    const todoText = input.value.trim();
    
    if (todoText !== '') {
        const newTodo = {
            text: todoText
        };
        todos.push(newTodo); // Добавляем новую задачу в массив
        input.value = ''; // Очищаем поле ввода
        renderTodos(); // Повторно отрисовываем список задач
    }
});

