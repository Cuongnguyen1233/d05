import { Routes, Route, Link, Outlet } from 'react-router-dom'
import './App.css';
import ComputerView from './pages/computer-view.js';
import ComputerEdit from './pages/computer-edit.js';
import Contact from './pages/contact.js';
import data from './data.json'
import evl from './pages/1dd959fe5a5f1442cdde8123f3f0d86c.jpg';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={evl} className="evl-logo" alt="evl" /> 
        <h3 className='mt-5'>Computers Control Panel</h3>
        <nav>
          <Link to='/'>Home</Link>
          <Link to='/computer-view' className='menuItem'> View </Link>
          <Link to='/contact' className="menuItem"> Contact </Link>
        </nav>
      </header>
      <section>
        <Routes>
          <Route path='/computer-view' element={<ComputerView dbs={data} />} />
          <Route path='/computer-edit/:id' element={<ComputerEdit dbs={data} />} />
          <Route path='/contact' element={<Contact dbs={data}/>} />
        </Routes>
        <Outlet />
      </section>
    </div>
  );
}

export default App;
