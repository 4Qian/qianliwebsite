import React, { useState } from 'react';
import Home from './components/pages/Home';
import Contact from './components/pages/Contact';
import Nav from './components/pages/Nav';
import Projects from './components/pages/Projects';
import AboutMe from './components/pages/AboutMe';
import MyContactLinks from './components/pages/MyContactLinks';
import Blog from './components/pages/blog/Blog';
import PrivacyPolicy from './components/privacyPolicy/PrivacyPolicy';
import BlogOne from './components/pages/blog/BlogOne';
import BlogTwo from './components/pages/blog/BlogTwo';
import './css/App.css';

function App() {
  const [page, setPage] = useState('HOME');
  const [loggedInUser, setLoggedInUser] = useState("");
  const [contactMessages, setContactMessages] = useState({});

  return (
    <div className="app">
      <header>
        <Nav setPage={setPage} loggedInUser={loggedInUser} />
      </header>

      <main>
        {page === 'HOME' && <Home setPage={setPage} />}
        {page === 'ABOUT ME' && <AboutMe />}
        {page === 'PROJECTS' && <Projects setPage={setPage} />}
        {page === 'CONTACT' &&
          <Contact
            setPage={setPage}
            contactMessages={contactMessages}
            setContactMessages={setContactMessages} />}
        {page === 'BLOG' &&
          <Blog
            setPage={setPage}
            loggedInUser={loggedInUser}
            setLoggedInUser={setLoggedInUser} />}
        {page === 'BLOGONE' && <BlogOne setPage={setPage} />}
        {page === 'BLOGTWO' && <BlogTwo setPage={setPage} />}
      </main>

      <footer>
        {page === 'POLICY' && <PrivacyPolicy setPage={setPage} />}
        <MyContactLinks setPage={setPage} />
      </footer>
    </div>
  );
}

export default App;
