import React, { useEffect, useState } from 'react'
import TodoList from './TodoList'
import './styles/TodoBlock.css'
import TodoModal from './TodoModal'
import { LocalStorage } from '../services/LocalStorage/LocalStorage.service'


const TodoBlock = () => {
	const [addItemView, setAddItemView] = useState(false)
	const [isEdit, setIsEdit] = useState(false)
	const [editTodo, setEditTodo] = useState({})
	const [todo, setTodo] = useState([]) 

	useEffect(() => {
		const todos = LocalStorage.get('tasks')
		if (todos) setTodo(todos)
	}, [])
	
	console.log('Todo start: ', todo)
	const setAddItemViewHandler = () => setAddItemView(!addItemView) 
	const setEditHandler = item => {
		setIsEdit(!isEdit)
		setEditTodo(item)
	} 
	const addTodoHandler = todoValue => {
		if(todoValue.name.length >= 1){
			const newTodo = {
				id: Date.now(),
				name: todoValue.name,
				body: todoValue.body,
				isCompleted: false
			}
			setTodo([...todo, newTodo])
			console.log('Todos from state: ',todo)
			LocalStorage.set('tasks', [...todo, newTodo])

			setAddItemViewHandler()
		}
	}
	const removeTodoHandler = item => {
		const required_todos = todo.filter(e => e.id !== item.id)
		setTodo(required_todos)
		LocalStorage.set('tasks', required_todos)
		setIsEdit(false)
	}
	const editTodoHandler = (data) => {
		const changed_todos = todo.map(item => {
			if (item.id === editTodo.id){
				return {
					...item,
					name: data.name,
					body: data.body,
				}
			}	
			return item
		})
		setTodo(changed_todos)
		LocalStorage.set('tasks', changed_todos)
		setIsEdit(false)
	}

	const changeTaskStatus = (data) => {
		const changed_todos = todo.map(item => {
			if (item.id === data.id){
				return {
					...item,
					isCompleted: !item.isCompleted
				}
			}	
			return item
		})
		setTodo(changed_todos)
		LocalStorage.set('tasks', changed_todos)
		setIsEdit(false)
	}

	return(
		<div className={addItemView || isEdit ? "todo_block add_active" : "todo_block"}>
			<TodoModal 
				setAddFunc={setAddItemViewHandler} 
				setEditFunc={setEditHandler}
				isEdit={isEdit} 
				addItemFunc={addTodoHandler}
				editItemFunc={editTodoHandler}
				changeTodo={editTodo}
				removeFunc={removeTodoHandler}
			/>
			<TodoList todo={todo} removeFunc={removeTodoHandler} setViewEditHandler={setEditHandler} changeTaskStatus={changeTaskStatus}/>
			<button className="todo__btn" onClick={isEdit ? setEditHandler : setAddItemViewHandler}></button>
		</div>
	)
}

export default TodoBlock