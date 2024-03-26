import "./App.css";
import  { Routes, Route, Link} from 'react-router-dom';
import { Layout, Typography, Space } from 'antd';
import { Navbar } from './components';

function App() {
  return (
    <div className="app">
      <div className="navbar">
          <Navbar />
      </div>
      <div className="main">
        {/* <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes> */}
      </div>
      <div className="footer">

      </div>
    </div>
  );
}

export default App;
