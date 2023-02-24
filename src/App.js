import React from 'react';
import Table from './components/Table';
import Header from './components/Header';
import './css/App.css'
import './css/form.css'
import './css/Card.css'
import './css/done.css'

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
      <div className='main-div'>
        <Table/>
      </div>
      </div>
    );
  }
}

export default App;
