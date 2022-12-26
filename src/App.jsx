import './App.css'
import TodoBlock from './components/TodoBlock'

function App() {
  return (
    <div className="todo_block__wrapper">
			<h1>React todos</h1>
			<h2>by <a href="http://roman-blinov.epizy.com"><span>Blinov</span> <span>Roman</span></a></h2>
		<TodoBlock></TodoBlock>
    </div>
  );
}

export default App;
