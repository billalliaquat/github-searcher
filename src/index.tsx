import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './index.css';
import reportWebVitals from './reportWebVitals';
import 'antd/dist/antd.css';
import SearchPage from './pages/SearchPage';

function Header() {
  return (
    <div className="App">
      <img src='/logo.png' className='App-logo' alt='logo'/>
      <h3 id='Search-heading'>
        Github Searcher
      </h3>
      <p id='Search-text'>
        Search users or repositories below
      </p>
    </div>
  ); 
}

function render() {

  ReactDOM.render(
    <React.StrictMode>
      <Header />
      <SearchPage/>
    </React.StrictMode>,
    document.getElementById('root')
  );
}

render();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
