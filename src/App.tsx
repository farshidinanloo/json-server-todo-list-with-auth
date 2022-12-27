import axios from 'axios';
import { useEffect } from 'react';

function App() {
	function login() {
		axios
			.post('http://localhost:8000/auth/register', {
				email: 'a@gmail.com',
				password: '123456',
			})
			.then((res) => {
				console.log(res.data);
			});
	}

	function addTodoHandler() {
		axios
			.post(
				'http://localhost:8000/todos',
				{
					text: 'test todo 3',
					userId: 3,
				},
				{
					headers: {
						Authorization:
							'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRlc3RAZ21haWwuY29tIiwicGFzc3dvcmQiOiIxMjM0NTYiLCJ1c2VySWQiOiI5ZjdiOTM5ZC1kMzg0LTQ0ZGUtYmMxOC03MGY5YmMxOWRiMDYiLCJpYXQiOjE2NzIxNDE1OTYsImV4cCI6MTY3MjE0NTE5Nn0.R0KouSoTe70B9JovnJwrhCIDTzgSmFmt5OlHf_WpPVU',
					},
				}
			)
			.then((res) => {
				console.log(res.data);
			});
	}

	function getTodos() {
		axios
			.get('http://localhost:8000/todos', {
				headers: {
					Authorization:
						'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRlc3RAZ21haWwuY29tIiwicGFzc3dvcmQiOiIxMjM0NTYiLCJ1c2VySWQiOiI5ZjdiOTM5ZC1kMzg0LTQ0ZGUtYmMxOC03MGY5YmMxOWRiMDYiLCJpYXQiOjE2NzIxNDE1OTYsImV4cCI6MTY3MjE0NTE5Nn0.R0KouSoTe70B9JovnJwrhCIDTzgSmFmt5OlHf_WpPVU',
				},
			})
			.then((res) => {
				console.log(res.data);
			});
	}

	function deleteTodoHandler() {
		axios
			.delete(
				'http://localhost:8000/todos/5a16f8ea-63bc-49ec-a480-1422d8a217fe',
				{
					headers: {
						Authorization:
							'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRlc3RAZ21haWwuY29tIiwicGFzc3dvcmQiOiIxMjM0NTYiLCJ1c2VySWQiOiI5ZjdiOTM5ZC1kMzg0LTQ0ZGUtYmMxOC03MGY5YmMxOWRiMDYiLCJpYXQiOjE2NzIxNDE1OTYsImV4cCI6MTY3MjE0NTE5Nn0.R0KouSoTe70B9JovnJwrhCIDTzgSmFmt5OlHf_WpPVU',
					},
				}
			)
			.then((res) => {
				console.log(res.data);
			});
	}

	function editTodoHandler() {
		axios
			.patch(
				'http://localhost:8000/todos/d255607d-664f-4dc4-b220-73a82ae3be4c',
				{
					text: 'edit todo',
				},
				{
					headers: {
						Authorization:
							'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRlc3RAZ21haWwuY29tIiwicGFzc3dvcmQiOiIxMjM0NTYiLCJ1c2VySWQiOiI5ZjdiOTM5ZC1kMzg0LTQ0ZGUtYmMxOC03MGY5YmMxOWRiMDYiLCJpYXQiOjE2NzIxNDE1OTYsImV4cCI6MTY3MjE0NTE5Nn0.R0KouSoTe70B9JovnJwrhCIDTzgSmFmt5OlHf_WpPVU',
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
