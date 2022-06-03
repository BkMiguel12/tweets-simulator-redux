import { useState } from 'react';
import { Button, Form, Alert } from 'react-bootstrap';
import { v4 as uuid } from 'uuid';
import moment from 'moment';

// Redux
import { useDispatch, useSelector } from 'react-redux';
import { validationFormTweetAction } from '../redux/actions/validationFormAction';
import { addTweetAction } from '../redux/actions/tweetsAction';
import { toggleAddTweetModalAction } from '../redux/actions/modalsActions';

export default function FormAddTweet() {
    const [formValue, setFormValue] = useState({
        name: '',
        tweet: ''
    });

    // Init dispatch and set state
    const dispatch = useDispatch();
    const setErrorValidation = state => dispatch(validationFormTweetAction(state));
    const saveTweet = state => dispatch(addTweetAction(state));

    // Get error state
    const isInvalidForm = useSelector(state => state.validationForm.isInvalidTweetForm);

    // Close modal
    const closeModal = () => dispatch(toggleAddTweetModalAction(false));

    const onChange = e => {
        setFormValue({
            ...formValue,
            [e.target.name]: e.target.value
        });
    }

    const onSubmit = e => {
        e.preventDefault();
        const { name, tweet } = formValue;

        if(!name || !tweet) {
            setErrorValidation(true);
            console.log('Todos los campos son obligatorios');
        } else {
            setErrorValidation(false);
            saveTweet({
                id: uuid(),
                name,
                tweet,
                date: moment()
            });
            closeModal();
            
        }
    }

    return (
        <Form className='m-3' onChange={onChange} onSubmit={onSubmit}>
            <Form.Group className='text-center'>
                <h1>New Tweet</h1>
            </Form.Group>

            <Form.Group className='my-3'>
                <Form.Control 
                    type='text' 
                    name='name' 
                    placeholder='Write your name...' 
                />
            </Form.Group>
            <Form.Group className='my-3'>
                <Form.Control 
                    as='textarea' 
                    rows='3'
                    name='tweet' 
                    placeholder='What do you thinking?' 
                />
            </Form.Group>

            <Button variant='success' type='submit'>Send Tweet</Button>

            {
                isInvalidForm && (
                    <Alert variant='danger' className='mt-3'>
                        All fields are required
                    </Alert>
                )
            }
        </Form>
    )
}