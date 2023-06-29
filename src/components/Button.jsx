import './styles/Button.css'


const Button = ({func=()=>{}, args, children='', styles}) => {
	return(
		<button style={styles} className='button_todo__component' onClick={() => func(...args)}>
			{children}
		</button>
	)
}

export default Button