import React, { useState, useEffect } from 'react';
import TodoForm from './TodoForm';
import Todo from './Todo';
import { addTask, deleteTask, getTasks, updateTask } from '../services/apiServices';
import useAuth from "../hooks/useAuth";
import useFolder from '../hooks/useFolder';
import { GoTasklist } from 'react-icons/go';
import { BiArrowBack } from 'react-icons/bi';
import { useNavigate } from 'react-router-dom';


function TodoList() {
  
  const [todos, setTodos] = useState([]);
  const { currentFolder } = useFolder();
  const { auth } = useAuth();
  const navigate = useNavigate()

  

  useEffect(() => {
    tasks();
  },[]);

  const tasks = async() => {
        console.log(auth.accessToken)
        const response = await getTasks(auth.accessToken, currentFolder.id)
        console.log(response)
        const taskes = response.data
        console.log("DATOSSSS")
        console.log(taskes)
        setTodos(taskes)
    }
  const addTodo = async (todo) => {
    if (!todo.task || /^\s*$/.test(todo.task)) {
      return;
    } 

    await addTask({ task:todo.task, folderId:currentFolder.id }, auth.accessToken )
    console.log("ACCA BRO")
    const response = await getTasks(auth.accessToken, currentFolder.id)
    console.log(response)
    const data = await response.data
    const lastTask = data[data.length - 1]
    console.log(lastTask)
    const newTodos = [lastTask, ...todos];

    setTodos(newTodos);
    console.log(...todos);
  };

  const updateTodo = (todoId, newValue) => {
    /**
     * the next if is to get rid of all the unnecessary blank spaces on the name of the task 
     */
    if (!newValue.task || /^\s*$/.test(newValue.task)) {
      return;
    }
    updateTask(todoId,{ "task":newValue.task, "completed":"false" }, auth.accessToken)
    const newActVal = {
      _id:todoId,
      task:newValue.task,

    }

    setTodos(prev => prev.map(item => (item._id === todoId ? newActVal : item)));
    console.log("ded",newValue)
    console.log("ACTUAL VALUE", newActVal)
    
  };

  const removeTodo = id => {
    deleteTask(id, auth.accessToken)
    const removedArr = [...todos].filter(todo => todo._id !== id);

    setTodos(removedArr);
  };

  const completeTodo = id => {
    let updatedTodos = todos.map(todo => {
      if (todo._id === id) {
        todo.completed = !todo.completed;
        const completedSwitch = {
          "completed":todo.completed
        }
        updateTask(todo._id,completedSwitch, auth.accessToken)
      }
      
      return todo;
    });
    setTodos(updatedTodos);
  };

  const back = async () => {

    navigate('/folderlist');
}




  return (
    <>
   
    <button className="go-back" onClick={back} ><BiArrowBack className='back-button'/></button>
     
    <div>
      <h1>{currentFolder.fol} <GoTasklist/></h1>
      <h3>What's the plan for today {auth?.user}?</h3>
      <TodoForm onSubmit={addTodo} />
      <Todo
        todos={todos}
        completeTodo={completeTodo}
        removeTodo={removeTodo}
        updateTodo={updateTodo}
      />
    </div>
    </>
  );
}

export default TodoList;