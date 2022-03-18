import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import MyContext from './MyContext';
import './index.css';

const Main = () => {

	const [tasks, setTasks] = useState([]);
	const [text, setText] = useState('');
	const [currentTask, setCurrentTask] = useState({});
	const [inputText, setInputText] = useState(text);

	return (
		<BrowserRouter>
			<MyContext.Provider value={{
				tasks,
				setTasks,
				text,
				setText,
				currentTask,
				setCurrentTask,
				inputText,
				setInputText
			}}>
				<App />
			</MyContext.Provider>
		</BrowserRouter>
	)

}

ReactDOM.render(
	<Main />,
	document.getElementById('root')
);

reportWebVitals();