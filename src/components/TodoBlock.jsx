import React, { useState } from 'react'
import TodoList from './TodoList'
import './styles/TodoBlock.css'
import TodoAddItem from './TodoAddItem'


const TodoBlock = () => {
	const [addItemView, setAddItemView] = useState(false)
	const [isEdit, setIsEdit] = useState(false)
	const [editTodo, setEditTodo] = useState({})
	const [todo, setTodo] = useState([
		{
			id: 1,
			name: 'First todo',
			body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat',
			active: false
		},
		{
			id: 2,
			name: 'Second todo',
			body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat',
			active: true
		},
		{
			id: 3,
			name: 'Last todo',
			body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat',
			active: true
		}
	]) 

	
	console.log('Todo start: ', todo)
	const setAddItemViewHandler = () => setAddItemView(!addItemView) 
	const setEditHandler = item => {
		setIsEdit(!isEdit)
		setEditTodo(item)
	} 
	const addTodoHandler = todoValue => {
		if(todoValue.name.length >= 1){
			setTodo([...todo, {
				id: Date.now(),
				name: todoValue.name,
				body: todoValue.body,
				active: false
			}])
			setAddItemViewHandler()
		}
	}
	const removeTodoHandler = item => {
		console.log(1)
		setTodo(todo.filter(e => e.id !== item.id))
		setIsEdit(false)
	}
	const editTodoHandler = (changeTodo) => {
		setTodo(todo.map(item => {
			if (item.id === editTodo.id){
				return {
					id: changeTodo.id, 
					name: changeTodo.name,
					body: changeTodo.body,
					active: changeTodo.active
				}
			}	
			return item
		}))
		setIsEdit(false)
	}
	return(
		<div className={addItemView || isEdit ? "todo_block add_active" : "todo_block"}>
			<TodoAddItem 
				setAddFunc={setAddItemViewHandler} 
				setEditFunc={setEditHandler}
				isEdit={isEdit} 
				addItemFunc={addTodoHandler}
				editItemFunc={editTodoHandler}
				changeTodo={editTodo}
				removeFunc={removeTodoHandler}
			/>
			<TodoList todo={todo} removeFunc={removeTodoHandler} setViewEditHandler={setEditHandler}/>
			<button className="todo__btn" onClick={isEdit ? setEditHandler : setAddItemViewHandler}></button>
		</div>
	)
}

export default TodoBlock