import { Container, Navbar, Button } from 'react-bootstrap';
import LogoRedux from '../assets/img/redux.png';

import { useDispatch } from 'react-redux';
import { toggleAddTweetModalAction } from '../redux/actions/modalsActions';

export default function Menu() {

    const dispatch = useDispatch();
    const toggleAddModal = (state) => dispatch(toggleAddTweetModalAction(state));

    const openModal = () => {
        toggleAddModal(true);
    }

    return(
        <Navbar bg='dark' variant="dark">
            <Container>
                <Navbar.Brand>
                    <img 
                        src={LogoRedux} 
                        alt="Tweets Simulator Redux"
                        width="30"
                        height="30"
                        className="d-inline-block align-top me-3"
                    />
                    Tweets Simulator Redux
                </Navbar.Brand>
                <Button variant="outline-info" onClick={openModal}>New Tweet</Button>
            </Container>
        </Navbar>
    );
}