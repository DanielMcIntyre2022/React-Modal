import './app.css';
import { useState } from 'react';
import { Modal } from './components/Modal';

function App() {

  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(prev => !prev)
  };

  return (
    <div className="App">
      <div className="modal-container">
        <button onClick={openModal} className='modal-button'>Modal</button>
        <Modal showModal={showModal} setShowModal={setShowModal} />
      </div>
    </div>
  );
}

export default App;
