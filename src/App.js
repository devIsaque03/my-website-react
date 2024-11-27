import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import Login from './components/pages/login.js';
import Home from './components/pages/Home';
import Academy from './components/pages/Academy';
import Financial from './components/pages/Financial';
import Goals from './components/pages/Goals';
import Tasks from './components/pages/Tasks';
import Timeline from './components/pages/Timeline';

import Container from './components/layout/Container.js';

function App() {
  return (
    <Router class="containerMain">
      <div>
        <Link to="/home">Home</Link>
        <Link to="/academy">Academy</Link>
        <Link to="/financial">Financial</Link>
        <Link to="/goals">Goals</Link>
        <Link to="/tasks">Tasks</Link>
        <Link to="/timeline">Timeline</Link>
      </div>
      
      <Container customClass="min-height">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/academy" element={<Academy />} />
          <Route path="/financial" element={<Financial />} />
          <Route path="/goals" element={<Goals />} />
          <Route path="/tasks" element={<Tasks />} />
          <Route path="/timeline" element={<Timeline />} />
        </Routes>
      </Container>

      <p>Footer</p>
    </Router>
  );
}

export default App;
