import './App.css';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import { Routes,Route} from 'react-router-dom'
import Task from './Components/Task'
import Wallet from './Components/Wallet'
import Me from './Components/Me'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/task' element={<Task />} />
        <Route path='/wallet' element={<Wallet />} />
        <Route path='/me' element={<Me />} />

      </Routes>
      <Navbar />
    </div>
  );
}

export default App;
