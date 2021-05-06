import React, { useContext, memo } from 'react'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import Checkbox from '@material-ui/core/Checkbox'
import IconButton from '@material-ui/core/IconButton'
import DeleteIcon from '@material-ui/icons/Delete'
import EditIcon from '@material-ui/icons/Edit'
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction'
import useToggleState from './hooks/useToggleState'
import EditTodoForm from './EditTodoForm'
import { DispatchContext } from './context/todos.context'

function Todo({ id, task, completed }) {
  const dispatch = useContext(DispatchContext)
  const [isEditing, toggleIsEditing] = useToggleState(false)
  return (
    <ListItem style={{ height: '64px' }}>
      {isEditing ? (
        <EditTodoForm id={id} task={task} toggleIsEditing={toggleIsEditing} />
      ) : (
        <>
          <Checkbox
            tabIndex={-1}
            checked={completed}
            onClick={() => dispatch({ type: 'TOGGLE', id: id })}
          />
          <ListItemText
            style={{ textDecoration: completed ? 'line-through' : 'none' }}
          >
            {task}
          </ListItemText>
          <IconButton aria-label='Edit' onClick={() => toggleIsEditing()}>
            <EditIcon />
          </IconButton>
        </>
      )}
      <ListItemSecondaryAction>
        <IconButton
          aria-label='Delete'
          onClick={() => dispatch({ type: 'REMOVE', id: id })}
        >
          <DeleteIcon />
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
  )
}
export default memo(Todo)
