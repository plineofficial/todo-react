import { useState } from "react"
import './styles/TodoItem.css'

const TodoItem = ({item, removeFunc, setViewEditHandler }) =>{
	const [check, setCheck] = useState(item.active)
	const [viewBody, setViewBody] = useState(false)
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
					<input type="checkbox" id={'_todo_check_'+item.id}  checked={check} onChange={() => setCheck(!check)}/>
					<div>
						<span></span>
						{item.name}
					</div>
				</label>
				<div className="todo__item_tools">
					<button className="todo__item_tools_edit" onClick={() => setViewEditHandler(item)}><img alt="edit" src={require('../img/edit.png')}/></button>
					<button className="todo__item_tools_edit" onClick={() => removeFunc(item)}><img alt="delete" src={require('../img/delete.png')}/></button> 
					<img src={require('../img/arrow.png')} alt="open/close" />
				</div>
			</div>
			
			<p>{item.body || 'Описания пока нет!'}</p>
		</div>
		
	)
}

export default TodoItem