import { Card, Button } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux'
import { deleteTweetAction } from '../redux/actions/tweetsAction';

export default function TweetsList() {
    const tweets = useSelector(state => state.tweets.tweets);
    console.log(tweets);

    return (
        tweets.map(tweet => (
            <Tweet key={tweet.id} tweet={tweet}/>
        ))
    )
}

function Tweet(props) {
    const { tweet } = props;
    const dispatch = useDispatch();
    const deleteTweet = id => dispatch(deleteTweetAction(id));

    return (
        <Card className='my-3'>
            <Card.Body>
                <Card.Title>{tweet.name}</Card.Title>
                <Card.Text>{tweet.tweet}</Card.Text>
                <Button variant='danger' onClick={() => deleteTweet(tweet.id)}>Delete</Button>
            </Card.Body>
        </Card>
    )
}