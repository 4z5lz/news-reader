import C from '../../constants';

const initialState = {
	hasReceivedData: false,
	errorMessage: '',
	data: {},
	status: {},
};

export default (state, action) => {
	let newstate;
	switch (action.type) {
		case C.ARTICLES_RECEIVE_DATA:
			return Object.assign({}, state, {
				hasReceivedData: true,
				data: action.data,
				errorMessage: ''
			});
		case C.ARTICLES_RECEIVE_DATA_ERROR:
			return Object.assign({}, state, {
				data: null,
				errorMessage: action.message
			});
		default: return state || initialState;
	}
};
