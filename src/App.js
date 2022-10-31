import React from 'react';
import Profile from './images/profile.jpg'
import Slack from './images/slack.png'
import Github from './images/github.png'
import './App.css'



function App(){


  return(
    
    <div className='main-section'>
      <div className='profile'>
        <img src={Profile} alt='profile-img' id='profile_img' className='profile-img'></img>
        <h1 className='profile-text'>Olusoga Adebayo</h1>
      </div>
      <div className='button'>
        <button id=''> <a href='https://twitter.com/olu_sogzy'> Twitter Link</a></button>
        <button id='btn_zuri'> <a href='https://training.zuri.team/'> Zuri Team</a></button>
        <button id='books'> <a href='http://books.zuri.team'> Zuri Books</a></button>
        <button id='book_python'> <a href='https://books.zuri.team/python-for-beginners?ref_id=<yourslackname>'> Python Books</a></button>
        <button id='pitch'> <a href='https://background.zuri.team'> Background Check For Coders</a></button>
        <button id='book_design'> <a href='https://books.zuri.team/design-rules'> Design Books </a></button>
      </div>
      <div className='icon-container'>
        <img src={Slack} alt='Slack-img' className='icon'></img>
        <img src={Github} alt='github-img'></img>
      </div>
      
    </div>
  
  )
}

export default App;