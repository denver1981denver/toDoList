'use strict';

const todoControl = document.querySelector('.todo-control'),
      headerInput = document.querySelector('.header-input'),
      todoList = document.querySelector('.todo-list'),
      todoCompleted = document.querySelector('.todo-completed'),
      todoData = JSON.parse(localStorage.getItem('todoList')) || [];

const render = function() {
  todoList.textContent = '';
  todoCompleted.textContent = '';
  
todoData.forEach(function(item, i) {
  const li = document.createElement('li');
  li.classList.add('todo-item'); 
  li.innerHTML = '<span class="text-todo">' + item.value + '</span>' + '<div class="todo-buttons">' + '<button class="todo-remove"></button>' + '<button class="todo-complete"></button>' + '</div>';
       
  if (item.completed){
      todoCompleted.append(li);
  } else {
      todoList.append(li);
  };
     
const btnTodoComplete = li.querySelector('.todo-complete');
      
  btnTodoComplete.addEventListener('click', function(){
    item.completed = !item.completed;
    localStorage.setItem('todoList', JSON.stringify(todoData));
    render();
    });
const btnTodoRemove = li.querySelector('.todo-remove');
  
  btnTodoRemove.addEventListener('click', function() {
    todoData.splice(i, 1);
    localStorage.setItem('todoList', JSON.stringify(todoData));
    render();
  });
  }); 
};
  
todoControl.addEventListener('submit', function(event) {
  event.preventDefault();
if (headerInput.value.trim() != '') {
  const newTodo = {
    value: headerInput.value,
    completed: false
  };

  headerInput.value = "";
  todoData.push(newTodo);
  localStorage.setItem('todoList', JSON.stringify(todoData));
  render();
  } else {
  headerInput.value = '';
  };
  });
 
  render();


