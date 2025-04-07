import { Routes, Route } from 'react-router-dom';
import './App.css';
import { Home } from './pages/Home';
import { CollectionDetail } from './pages/CollectionDetail';
import collectionData from './assets/book-data.json';


function App() {

  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path=":id" element={<CollectionDetail data={collectionData} />}/>
    </Routes>
  )
}

export default App;
