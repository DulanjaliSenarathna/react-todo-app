import { createSlice } from '@reduxjs/toolkit';

const getInitialToDo = ()=>{
    const localToDoList = window.localStorage.getItem('todoList');
    if(localToDoList){
        return JSON.parse(localToDoList)
    }
    window.localStorage.setItem('todoList',JSON.stringify([]));
    return [];
}

const initialValue = {
    todoList: getInitialToDo(),
}

export const todoSlice = createSlice({
    name:'todo',
    initialState: initialValue,
    reducers:{
        addTodo: (state,action)=>{
            state.todoList.push(action.payload);
            // get todolist from localstorage
            const todoList = window.localStorage.getItem('todoList');

            // if todolist exists, pass it in to array
            if(todoList){
                const todoListArr = JSON.parse(todoList);
                // push new to do item to that array
                todoListArr.push({...action.payload});

                // setting back todolist in localstorage
                window.localStorage.setItem('todoList',JSON.stringify(todoListArr))
            }
            // if local storage has not already todoList 
            else{
                window.localStorage.setItem('todoList',JSON.stringify([{...action.payload}]))
            }
        },
        deleteTodo : (state, action) => {

            // get todollist items from local storage
            const todoList = window.localStorage.getItem('todoList');
            if(todoList){
                const todoListArr = JSON.parse(todoList);
                todoListArr.forEach((todo,index)=>{
                    if(todo.id === action.payload){
                        todoListArr.splice(index,1);
                    }
                });
                // set back todolist items to local storage
                window.localStorage.setItem('todoList', JSON.stringify(todoListArr));
                // update the state with new array
                state.todoList = todoListArr;
    
            }
        },
        updateTodo: (state, action) =>{
           // get todollist items from local storage
           const todoList = window.localStorage.getItem('todoList');

           if(todoList){
            const todoListArr = JSON.parse(todoList);
            todoListArr.forEach((todo,index)=>{
                if(todo.id === action.payload.id){ // searching for an id

                    // updating todo
                    todo.title = action.payload.title;
                    todo.status = action.payload.status;
                }
            });
            // set back todolist items to local storage
            window.localStorage.setItem('todoList', JSON.stringify(todoListArr));
            state.todoList = todoListArr;
           }
        }
    },
   
});

export const {addTodo, deleteTodo, updateTodo}= todoSlice.actions;
export default todoSlice.reducer;