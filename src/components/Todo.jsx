import React, { useEffect, useRef, useState } from 'react'
import { MdCalendarToday } from "react-icons/md";
import TodoItems from './TodoItems';
const Todo = () => {

  const InputRef = useRef() ;

  const [todoList, setTodoList] = useState(localStorage.getItem("todos") ? JSON.parse(localStorage.getItem("todos")) : []) ;

  const add = () =>{
    const inputText = InputRef.current.value.trim() ;
    
    if(inputText === "") {
      return null ;
    }



    const newTodo = {
      id:Date.now(),
      text:inputText,
      isComplete : false,
    }

    setTodoList((prev) => [...prev , newTodo]) ;
    InputRef.current.value = "" ;

  }

  const deleteTodo = (id) =>{
    setTodoList((prevTodos) =>{
      return prevTodos.filter((todo) => todo.id !== id)
    })
  }

  const toggle = (id) =>{
    setTodoList((prevTodo) =>{
      return prevTodo.map((todo) =>{
        if(todo.id === id) {
          return {
            ...todo,
            isComplete : !todo.isComplete,
          }
          
        }
        return todo ;
      })
    })
  }

  useEffect(() =>{
      localStorage.setItem("todos" , JSON.stringify(todoList)) 
  } , [todoList]) ;



  return (
    <div id='scroll' className='bg-white overflow-y-scroll place-self-center w-11/12 max-w-md flex flex-col p-7 h-[550px] rounded-xl'>
      
      {/* here we will add title */}

      <div className='flex justify-center  items-center mt-7 gap'>


        <MdCalendarToday className='text-4xl text-blue-500' />
        {/* here we will add title */}
        
        <h1 className='text-3xl font-semibold'>Todo List</h1>

         
      </div>

      {/* here we will add input field and button */}

      <div className='flex items-center my-7 bg-gray-200 rounded-full'>
          <input ref={InputRef}  placeholder='Add Your Task' className='bg-transparent border-0 outline-none flex-1 h-14 pl-6 pr-2 placeholder:text-slate-600' type="text" />
          <button onClick={add} className='border-none rounded-full bg-orange-600 w-32 h-14 text-white text-lg cursor-pointer '>Add Todo</button>
      </div>

      {/* here we will add todo list */}

      <div>
        {
          todoList.map((item , index) => {
            return <TodoItems key={index} title={item.text} id = {item.id} isComplete = {item.isComplete} deleteTodo = {deleteTodo} toggle = {toggle}  />
          })
        }
        
      </div>





    </div>
  )
}

export default Todo