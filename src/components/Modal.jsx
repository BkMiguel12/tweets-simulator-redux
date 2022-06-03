import { Modal as BootstrapModal, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { toggleAddTweetModalAction } from '../redux/actions/modalsActions';

export default function Modal(props) {
    const { children } = props;

    const dispatch = useDispatch();
    const closeModal = () => dispatch(toggleAddTweetModalAction(false));

    const isOpen = useSelector((state) => state.modal.addTweetModalState);

    return (
        <BootstrapModal
            show={isOpen}
            onHide={closeModal}
            size="lg"
            centered
        >
            { children }
        </BootstrapModal>
    )
}