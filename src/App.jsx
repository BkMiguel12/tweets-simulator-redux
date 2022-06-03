import { Container } from 'react-bootstrap';

import Menu from './components/Menu';
import Modal from './components/Modal';
import FormAddTweet from './components/FormAddTweet';

// Redux
import store from './redux/store';
import { Provider } from 'react-redux';

function App() {
  return (
    <Provider store={store}>
      <Menu />
      <Container className='mt-5'>
        <h1 className='text-center'>Tweets!</h1>
      </Container>
      <Modal>
        <FormAddTweet />
      </Modal>
    </Provider>
  )
}

export default App
