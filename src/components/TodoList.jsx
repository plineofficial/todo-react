import React from 'react'
import TodoItem from './TodoItem'
import './styles/TodoList.css'

const TodoList = ({todo, setViewEditHandler, removeFunc, changeTaskStatus}) => {
	return(
		<div className='todo_list'>
			{todo.map(item => {
				return (
				<TodoItem 
					item={item} 
					removeFunc={removeFunc}
					setViewEditHandler={setViewEditHandler} 
					changeTaskStatus={changeTaskStatus}
					key={'_todo_'+item.id}
				/>)
			})}
		</div>
	)
}

export default TodoList