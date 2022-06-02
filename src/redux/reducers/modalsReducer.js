const initialProps = {
    addTweetModalState: false
}

export default function(state = initialProps, action) {
    switch (action.type) {
        case 'ADD_TWEET_MODAL_OPEN':
            return {
                ...state,
                addTweetModalState: action.payload
            }
    
        default:
            return state;
    }
}