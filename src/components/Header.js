import React from 'react';
import '../css/Header.css'
import gitHubImg from '../media/github-purple.png'
import linkedinImg from '../media/linkedin.png'

class Header extends React.Component {
  render() {

    return (
      <div className='header-div'>
        <div className="social-div">
        <button
          className="github-btn"
          type="button"
          onClick={() => window.open('https://github.com/caiobacode/')} 
          >
            <img className="github-img" alt="github-img" src={gitHubImg}/>
        </button>
          <button
          className="linkedin-btn"
          type="button"
          onClick={() => window.open('https://www.linkedin.com/in/caio-oliveira-de-sousa/')} 
          >
            <img 
              className="linkedin-img"
              alt="linkedin-img" 
              src={linkedinImg}
              />
          </button>
        </div>
        <h1 className='header-title'>Muscle Mastery</h1>
        <div className="btn-div">
        <button 
        className='btn-mui'
        onClick={() => window.open('https://github.com/caiobacode/Tryunfo-Trybe')}>
          Acessar repositório
        </button>
        </div>
      </div>
    )
  }
}

export default Header