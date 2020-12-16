import React from "react"

import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "./App.css"


import { useState } from "react"

function App () {

  const [todos, setTodos] = useState([])
  const [todoId, setTodoId] = useState(0)

  const addInput = (evt) => {
    if (evt.keyCode === 13 && evt.target.value.trim()) {

      const newTodo = {
        id: todoId + 1,
        title: evt.target.value.trim(),
        completed: false,
      }

      setTodoId(todoId + 1)

      if(document.getElementById('important-work').checked) {
        setTodos([newTodo, ...todos])
      }else {
        setTodos([...todos, newTodo])
      }

      evt.target.value = ""
    }
  }


  return (
    
    <div className="container">
      <h1 className="font-weight-bold text-center my-5">todos</h1>


      <div className="d-flex">
      <input onKeyUp={addInput} className="w-50 mx-auto d-block form-control" id="stringInput" type="text" placeholder="Vazifani kiriting brat:)"/>
      </div>

      <div className="custom-control custom-switch my-2 text-center">
        <input className="custom-control-input" id="important-work" type="checkbox" />
        <label className="custom-control-label font-weight-bold" htmlFor="important-work">Muhim ish</label>
      </div>


      <ul className="list-group w-50 mx-auto">
        {
          todos.map(todo => {

            return (
              <li id={todo.id} className="list-group-item d-flex justify-content-between align-items-center bg-success" key={todo.id}>
                <div className="d-flex align-items-center">
                  <input id="complated-checkbox" className="mr-1 complated-cheskbox" type="checkbox" onChange={
                    (evt) => {
                      if(evt.target.closest('LI')) {
                        todo.completed = !todo.completed
                        console.log(todo.completed);
                      }
                    }
                  }/>
                  <span htmlFor="complated-checkbox" className="todo-text">{todo.id}){todo.title}</span>
                </div>
                <button type="submit" 
                onClick={
                  () => {
                    setTodos(todos.filter(t => t.id !== todo.id))
                  }
                }
                className="btn btn-danger btn-sm">x</button>
              </li>
            )
          })
        }
      </ul>
    </div>

  )

}

export default App