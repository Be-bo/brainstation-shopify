import { Routes, Route, BrowserRouter} from 'react-router-dom';
import Partnerships from './components/Partnerships';
import AddPartnership from './components/AddPartnerships';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <div>
       <BrowserRouter>
        <div className='app'>
          <Navbar/>
        <Routes>
          <Route path="/" element={<Partnerships />}></Route>
          <Route path='/add-partnership' element={<AddPartnership />}></Route>
        </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
