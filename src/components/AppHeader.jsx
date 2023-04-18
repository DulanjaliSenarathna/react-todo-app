import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Button, { SelectButton } from './Button';
import styles from '../styles/modules/app.module.scss'
import ToDoModal from './ToDoModal';
import { updateFilterStatus } from '../slices/todoSlice';

// eslint-disable-next-line arrow-body-style
const AppHeader = () => {

  const [modalOpen, setModalOpen] = useState(false);

  // get initial filter status(all)
  const filterStatus = useSelector((state)=>state.todo.filterStatus);

  const dispatch = useDispatch();

  const updateFilter = (e) =>{
    dispatch(updateFilterStatus(e.target.value))
  }

  return (
    <div className={styles.appHeader}>
        
        <Button varient='primary' onClick={()=> setModalOpen(true)}>Add Task</Button>
        <SelectButton id="status" value={filterStatus} onChange={updateFilter}>
            <option value="all">ALL</option>
            <option value="incomplete">Incomplete</option>
            <option value="complete">Complete</option>
        </SelectButton>
        <ToDoModal type='add' modalOpen={modalOpen} setModalOpen={setModalOpen}/>
    </div>
  )
}

export default AppHeader