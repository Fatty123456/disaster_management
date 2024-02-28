import { CSSTransition } from 'react-transition-group';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Login from './login/login';
import Signup from './signup/signup';
import AddDisaster from './Disaster/Disaster';
import DisasterList from './DisasterList/DisasterList';

const App = () => {
  return (
    <Router>
      <CSSTransition in={true} appear={true} timeout={500} classNames="page-transition">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />}/>
          <Route path="/add-disaster" element={<AddDisaster />} />
          <Route path="/disaster-list" element={<DisasterList />} />
        </Routes>
      </CSSTransition>
    </Router>
  );
}

// Add CSS animation styles
const pageAnimations = {
  enter: {
    opacity: 0,
    transform: 'translateX(-100%)',
  },
  enterActive: {
    opacity: 1,
    transform: 'translateX(0)',
    transition: 'all 500ms ease-in',
  },
  exit: {
    opacity: 1,
    transform: 'translateX(0)',
  },
  exitActive: {
    opacity: 0,
    transform: 'translateX(100%)',
    transition: 'all 500ms ease-out',
  },
};

export default App;