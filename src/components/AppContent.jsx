import React from 'react'
import { useSelector } from 'react-redux'
import ToDoItem from './ToDoItem';

function AppContent() {
  // get todos from localstorage
  const todoList = useSelector(state => state.todo.todoList);
  const sortedTodoList = [...todoList];
  sortedTodoList.sort((a,b) => new Date(b.time) - new Date(a.time));
  console.log(todoList);
  return (
    <div>
      {sortedTodoList && sortedTodoList.length > 0 ? 
       sortedTodoList.map((todo)=><ToDoItem key={todo.id} todo={todo}/>)
      : 'no to do found'}
    </div>
  )
}

export default AppContent