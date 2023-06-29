import { useEffect, useState } from 'react'
import Button from './Button'
import './styles/TodoModal.css'

const TodoModal = ({setAddFunc, setEditFunc, isEdit, addItemFunc, editItemFunc, changeTodo, removeFunc}) => {

	const [todoValue, setTodoValue] = useState({name: '', body: ''})

	useEffect(() => {
		if (isEdit){
			setTodoValue({name: changeTodo.name, body: changeTodo.body})
		}else {
			setTodoValue({name: '', body: ''})
		}
	}, [isEdit, changeTodo.name, changeTodo.body])
	
	return(
		<div className='todo_add'>
			<input type="text"  value={todoValue.name} onChange={e => setTodoValue({...todoValue, name: e.target.value})} placeholder='Название задачи' />
			<textarea type="text" value={todoValue.body} onChange={e => setTodoValue({...todoValue, body: e.target.value})} placeholder='Описание задачи' />
			<div className='todo_add__btns'>
				{!isEdit && <Button func={addItemFunc} args={[todoValue]}>Создать</Button>}
				{isEdit && <Button func={editItemFunc} args={[todoValue]} styles={{background: '#af57ff'}}>Изменить</Button>}
				{isEdit && <Button func={removeFunc} args={[changeTodo]} styles={{background: '#e13333'}}>Удалить</Button>}
				<Button func={isEdit ? setEditFunc : setAddFunc} args={[changeTodo]} styles={{background: '#00d9ff'}}>Отмена</Button>
			</div>
		</div>
	)
}

export default TodoModal