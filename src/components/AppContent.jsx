import React from 'react'
import { useSelector } from 'react-redux'
import ToDoItem from './ToDoItem';
import styles from '../styles/modules/app.module.scss'

function AppContent() {
  // get todos from localstorage
  const todoList = useSelector(state => state.todo.todoList);

  // get filter status from redux store
  const filterStatus = useSelector((state)=>state.todo.filterStatus);
  const sortedTodoList = [...todoList];
  sortedTodoList.sort((a,b) => new Date(b.time) - new Date(a.time));

  const filteredTodoList = sortedTodoList.filter(item =>{
    if(filterStatus === 'all'){
      return true;
    }
    return item.status === filterStatus;
  })

  console.log(todoList);
  return (
    <div className={styles.content__wrapper}>
      {filteredTodoList && filteredTodoList.length > 0 ? 
       filteredTodoList.map((todo)=><ToDoItem key={todo.id} todo={todo}/>)
      : 'no to do found'}
    </div>
  )
}

export default AppContent