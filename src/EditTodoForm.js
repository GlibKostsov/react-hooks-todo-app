import React from 'react'
import TextField from '@material-ui/core/TextField'
import useInputState from './hooks/useInputState'

export default function EditTodoForm({ id, task, editTodo, toggleIsEditing }) {
  const [value, handleChange, reset] = useInputState(task)
  return (
    <form
      style={{ marginLeft: '1rem', width: '60%' }}
      onSubmit={(e) => {
        e.preventDefault()
        editTodo(id, value)
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
