import axios from 'axios';
import { useState } from 'react';

const baseURL = 'http://localhost:8000';

function App() {
	const [accessToken, setAccessToken] = useState('');

	function login() {
		axios
			.post(`${baseURL}/auth/register`, {
				email: 'test@gmail.com',
				password: '123456',
			})
			.then((res) => {
				setAccessToken(res.data.access_token);
			});
	}

	function addTodoHandler() {
		axios
			.post(
				`${baseURL}/todos`,
				{
					text: 'test todo 3',
					userId: 3,
				},
				{
					headers: {
						Authorization: `Bearer ${accessToken}`,
					},
				}
			)
			.then((res) => {
				console.log(res.data);
			});
	}

	function getTodos() {
		axios
			.get(`${baseURL}/todos`, {
				headers: {
					Authorization: `Bearer ${accessToken}`,
				},
			})
			.then((res) => {
				console.log(res.data);
			});
	}

	function deleteTodoHandler() {
		axios
			.delete(`${baseURL}/todos/5a16f8ea-63bc-49ec-a480-1422d8a217fe`, {
				headers: {
					Authorization: `Bearer ${accessToken}`,
				},
			})
			.then((res) => {
				console.log(res.data);
			});
	}

	function editTodoHandler() {
		axios
			.patch(
				`${baseURL}/todos/d255607d-664f-4dc4-b220-73a82ae3be4c`,
				{
					text: 'edit todo',
				},
				{
					headers: {
						Authorization: `Bearer ${accessToken}`,
					},
				}
			)
			.then((res) => {
				console.log(res.data);
			});
	}

	return (
		<div>
			<button onClick={login}>sign up</button>
			<button onClick={addTodoHandler}>add todo</button>
			<button onClick={getTodos}>get todos</button>
			<button onClick={deleteTodoHandler}>delete todo</button>
			<button onClick={editTodoHandler}>edit todo</button>
		</div>
	);
}

export default App;
