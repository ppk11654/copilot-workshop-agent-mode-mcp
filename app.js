// 儲存鍵名
const STORAGE_KEY = 'todos';

// 待辦清單資料,每筆包含 id、文字、完成狀態
let todos = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];

// DOM 元素
const inputEl = document.getElementById('todo-input');
const addBtnEl = document.getElementById('add-btn');
const listEl = document.getElementById('todo-list');
const emptyEl = document.getElementById('empty-msg');
const countEl = document.getElementById('count');

// 將資料寫入 localStorage
function save() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
}

// 重新渲染清單
function render() {
  listEl.innerHTML = '';

  const uncompleted = todos.filter(t => !t.completed).length;
  countEl.textContent = uncompleted;

  if (todos.length === 0) {
    emptyEl.style.display = 'block';
  } else {
    emptyEl.style.display = 'none';
    todos.forEach(todo => {
      const li = document.createElement('li');
      li.className = `todo-item${todo.completed ? ' completed' : ''}`;

      li.innerHTML = `
        <div class="content">
          <input type="checkbox" ${todo.completed ? 'checked' : ''}>
          <span>${escapeHtml(todo.text)}</span>
        </div>
        <button class="delete-btn" data-id="${todo.id}">刪除</button>
      `;

      const checkbox = li.querySelector('input[type="checkbox"]');
      checkbox.addEventListener('change', () => toggleTodo(todo.id));

      const deleteBtn = li.querySelector('.delete-btn');
      deleteBtn.addEventListener('click', () => deleteTodo(todo.id));

      listEl.appendChild(li);
    });
  }
}

// 新增待辦
function addTodo() {
  const text = inputEl.value.trim();
  if (text === '') {
    return; // 輸入空白內容時不新增
  }

  const newTodo = {
    id: Date.now(),
    text: text,
    completed: false
  };

  todos.push(newTodo);
  save();
  render();
  inputEl.value = '';
  inputEl.focus();
}

// 切換完成狀態
function toggleTodo(id) {
  const todo = todos.find(t => t.id === id);
  if (todo) {
    todo.completed = !todo.completed;
    save();
    render();
  }
}

// 刪除待辦
function deleteTodo(id) {
  todos = todos.filter(t => t.id !== id);
  save();
  render();
}

// 簡單的 HTML 轉義,避免 XSS
function escapeHtml(text) {
  const div = document.createElement('div');
  div.textContent = text;
  return div.innerHTML;
}

// 綁定事件
addBtnEl.addEventListener('click', addTodo);

inputEl.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    addTodo();
  }
});

// 初始化渲染
render();