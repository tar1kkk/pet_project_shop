import './App.css';
import MyInput from "./components/UI/input/MyInput";
import MyButton from "./components/UI/button/MyButton"
import { useState } from 'react';
import AddNewPurch from './components/AddNewPurch';

function App() {
  const [purchase, setPurchase] = useState([]);
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState('');

  function addNewPurchase() {
    if (title && price) {
      const newPurchase = {
        title,
        price,
        id: Date.now()
      }
      setPurchase([newPurchase, ...purchase])
      setTitle('')
      setPrice('')
    }

  }

  return (
    <div className="App" >

      <MyInput value={title} onChange={e => setTitle(e.target.value)} type='text' placeholder='Purchase' />
      <MyInput value={price} onChange={e => setPrice(e.target.value)} type='number' placeholder="Price" />
      <MyButton onClick={() => { addNewPurchase() }} >Создать пост</MyButton>
      <AddNewPurch purchase={purchase} />
    </div >
  );
}

export default App;
