const initialProps = {
    isInvalidTweetForm: false
}

export default function (state = initialProps, action) {
    switch (action.type) {
        case 'VALIDATION_TWEET_FORM':
            return {
                ...state,
                isInvalidTweetForm: action.payload
            }
    
        default:
            return state;
    }
}