export default function createStore(reducer) {
	let state = reducer(state, '@@INIT');

	function dispatch(action) {
		state = reducer(state, action)
		render()
	}

	function getState() {
		return state
	}

	return {
		dispatch,
		getState
	}
}

function render() {
	const container = document.getElementById('container');
}
