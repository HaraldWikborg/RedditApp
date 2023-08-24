
import './App.css';
import Nav from './components/nav/Nav';
import React from 'react';
import Feed from './components/feed/Feed';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Categories from './components/categories/Categories';
import Search from './components/search/Search';
import Settings from './components/settings/Settings';

function App() {
  return (
    <div className="App">
      <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Feed />} />
        <Route path="/popular" element={<Feed />} />
        <Route path="/categories"  element={<Categories />} />
        <Route path="/search"  element={<Search />} />
        <Route path="/settings"  element={<Settings />} />
      </Routes>
      </Router>
    </div>
  );
}


/* When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar */
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  const width = window.innerWidth;
  if (width < 600) {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navBar").style.top = "0.5em";
  } else {
    document.getElementById("navBar").style.top = "-6em";
  }
  prevScrollpos = currentScrollPos;
} else {
    document.getElementById("navBar").style.top = "5em";
}
}
export default App;
