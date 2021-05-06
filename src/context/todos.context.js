import React, { createContext, useReducer } from 'react'
import useTodoState from '../hooks/useTodoState'
import todoReducer from '../reducers/todo.reducer'

const defaultTodos = [
  { id: 1, task: 'Go fish a daurade', completed: false },
  { id: 2, task: 'Cook a soupe', completed: false },
]

export const TodosContext = createContext()

export function TodosProvider(props) {
  const [todos, dispatch] = useReducer(todoReducer, defaultTodos)

  return (
    <TodosContext.Provider value={{ todos, dispatch }}>
      {props.children}
    </TodosContext.Provider>
  )
}
