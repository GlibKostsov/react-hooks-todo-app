import React, { useContext } from 'react'
import TextField from '@material-ui/core/TextField'
import useInputState from './hooks/useInputState'
import { DispatchContext } from './context/todos.context'

export default function EditTodoForm({ id, task, toggleIsEditing }) {
  const dispatch = useContext(DispatchContext)
  const [value, handleChange, reset] = useInputState(task)
  return (
    <form
      style={{ marginLeft: '1rem', width: '60%' }}
      onSubmit={(e) => {
        e.preventDefault()
        dispatch({ type: 'EDIT', id: id, newTask: value })
        reset()
        toggleIsEditing()
      }}
    >
      <TextField
        margin='normal'
        value={value}
        onChange={handleChange}
        fullWidth
        autoFocus
      />
    </form>
  )
}
