import { ActionTypes } from "../constants/actionTypes";


const initialState = {
	chatAi:[],
	imageAi:[],
	isLoading:false
}

const chatReducer = (state=initialState, action)=>{
	switch (action.type) {
		case ActionTypes.GET_DATA_START:
			return {
				...state,
				isLoading:true
			};

		case ActionTypes.GET_ANSWER:
			return {
				...state,
				chatAi:[...state.chatAi, action.payload],
				isLoading:false
			}

		case ActionTypes.GET_IMAGE:
			return {
				...state,
				imageAi:[...state.imageAi, action.payload],
				isLoading:false
			}
	
		default:
			return state;
	}
}

export default chatReducer