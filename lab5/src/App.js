import { Routes, Route, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import logo from './logo.svg';
import './App.css';
import Home from './Page/Home';
import News from './Page/News';
import Contact from './Page/Contact';

function App() {
  return (
    <div>
      <nav class="navbar navbar-expand-lg bg-light">
        <div class="container-fluid">
          <Link class="navbar-brand" to="/">Home</Link>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item">
                <Link class="nav-link" to="/">About</Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/News">News</Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/">Quiz</Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/Contact">Contact</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/News" element={<News />} />
        <Route path="/Contact" element={<Contact/>}/>
      </Routes>
    </div>
  );
}

export default App;
