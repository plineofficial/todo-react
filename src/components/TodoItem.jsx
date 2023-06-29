import { useState, useRef } from "react"
import './styles/TodoItem.css'

const TodoItem = ({item, removeFunc, setViewEditHandler, changeTaskStatus}) =>{
	const [check, setCheck] = useState(item.isCompleted)
	const [viewBody, setViewBody] = useState(false)
	const pBodyRef = useRef()

	const viewBodyHandler = (e) => {
		if(e.target.tagName === 'BUTTON'){
			return
		}
		setViewBody(!viewBody)
	}
	
	return(
		<div className={viewBody ? 'todo__item active' : 'todo__item'}>
			<div className="todo__item_head" onClick={viewBodyHandler}>
				<label htmlFor={'_todo_check_'+item.id}>
					<input type="checkbox" id={'_todo_check_'+item.id}  checked={check} onChange={() => {
						setCheck(!check)
						changeTaskStatus({id: item.id, isCompleted: item.isCompleted})
						}}/>
					<div>
						<span></span>
						{item.name}
					</div>
				</label>
				<div className="todo__item_tools">
					<button className="todo__item_tools_edit" onClick={() => setViewEditHandler(item)}><img alt="edit" src={require('../assets/img/edit.png')}/></button>
					<button className="todo__item_tools_edit" onClick={() => removeFunc(item)}><img alt="delete" src={require('../assets/img/delete.png')}/></button> 
					<img src={require('../assets/img/arrow.png')} alt="open/close" />
				</div>
			</div>
			
			<p ref={pBodyRef} style={ viewBody ? {'height': `${pBodyRef.current.scrollHeight}px`} : {}}>{item.body || 'Описания пока нет!'}</p>
		</div> 
		
	)
}

export default TodoItem