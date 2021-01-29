const SEND_MESSAGE = 'SEND_MESSAGE';

let initialState = {
    messages: [
        {id: 1, message: 'Hi, how are you?'},
        {id: 2, message: 'It\'s my first message'},
        {id: 3, message: 'YoYoYo'},
        {id: 4, message: 'Hi'}
    ],
    users: [
        {id: 1, name: 'Vlad'},
        {id: 2, name: 'Alex'}
    ]
};

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_MESSAGE: {
            let newMessage = {
                id: 5,
                message: action.newText
            }
            return {
                ...state,
                messages: [...state.messages, newMessage]
            }
        }
        default:
            return state;
    }
}

export const sendMessage = (newText) => ({type: SEND_MESSAGE, newText})

export default dialogsReducer;