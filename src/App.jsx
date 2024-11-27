import { useState } from 'react';
import './App.css';
import Form from './components/Form';
import Result from './components/Result';

function App() {
  const [data, setData] = useState({});

  return (
    <>
      <Form handler={(value) => setData(value)}/>
      <Result data={data} />
    </>
  )
}

export default App;
