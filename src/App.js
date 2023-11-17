
import { Routes, Route, BrowserRouter} from 'react-router-dom';
import Partnerships from './components/Partnerships';
import AddPartnership from './components/AddPartnerships';
// import Topbar from './components/Topbar/Topbar';
// import Leftbar from './components/Leftbar/Leftbar';
import "./App.scss"

function App() {
  return (
    <div>
       <BrowserRouter>
        <div className='app'>
          {/* <Topbar/>
          <div className='mainbody'>
            <Leftbar/>
            <div className='mainbody__content'></div>
          </div> */}
        <Routes>
          <Route path="/" element={<Partnerships />}></Route>
          <Route path="/add-partnership" element={<AddPartnership />}></Route>
        </Routes>

        </div>
      </BrowserRouter>

    </div>
  );
}

export default App;
