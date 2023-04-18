import React, { useEffect, useState } from 'react';
import { format } from 'date-fns';
import {MdDelete, MdEdit} from 'react-icons/md';
import {motion, useMotionValue, useTransform} from 'framer-motion';
import { useDispatch } from 'react-redux';
import { toast } from 'react-hot-toast';
import { deleteTodo, updateTodo } from '../slices/todoSlice';
import styles from '../styles/modules/todoItem.module.scss'
import { getClasses } from '../utils/getClasses';
import ToDoModal from './ToDoModal';
import CheckButton from './CheckButton';

const child = {
  hidden: {y:20, opacity:0},
  visible:{
    y: 0,
    opacity:1
  }
}

function ToDoItem({todo}) {

// get the dispatch
const dispatch = useDispatch();

const [checked, setChecked] = useState(false);

// create state for modalopen
const [updateModalOpen, setUpdateModalOpen] = useState(false);

useEffect(()=>{
  if(todo.status === 'complete'){
    setChecked(true);
  }else{
    setChecked(false);
  }
},[todo.status])

  const handleDelete = () =>{
    dispatch(deleteTodo(todo.id));
    toast.success('ToDo Deleted Successfully')
  };

  const handleUpdate = () =>{
    setUpdateModalOpen(true);
  };

  const handleCheck = () =>{
    setChecked(!checked);
    dispatch(updateTodo({
      ...todo,
      status:checked ? 'incomplete' : 'complete'
    }));
  }

  return (
    <>
     <motion.div className={styles.item} variants={child}>
        <div className={styles.todoDetails}>
            <CheckButton checked={checked} handleCheck={handleCheck}/>
            <div className={styles.texts}>
                <p className={getClasses([styles.todoText, todo.status === 'complete' && styles['todoText--completed']])}>{todo.title}</p>
                <p className={styles.time}>{format(new Date(todo.time), 'p, MM/dd/yyyy')}</p>
            </div>
        </div>
        <div className={styles.todoActions} >
          <div className={styles.icon} onClick={handleDelete} onKeyDown={handleDelete} role='button' tabIndex={0}>
            <MdDelete/>
          </div>
          <div className={styles.icon} onClick={handleUpdate} onKeyDown={handleUpdate} role='button' tabIndex={0}>
            <MdEdit/>
          </div>
        </div>
    </motion.div>
    <ToDoModal todo={todo} type='update' modalOpen={updateModalOpen} setModalOpen={setUpdateModalOpen}/>
    </>
   
  );
}

export default ToDoItem