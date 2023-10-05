import React from 'react';
import { useNavigate } from 'react-router-dom';
import LoginForm from '../components/LoginForm';
import Typography from '@mui/material/Typography';

/*
StartingPageButtons
Sets the buttons that show on the
default page ('/').
*/
const Starter = () => {
  const navigate = useNavigate();
  return (
    <section>
    <div id='starterPage'>
      <div class='leftHalf'>
        <img src='https://www.waldenu.edu/media/4752/seo-1154-bs-online-teacher-on-tablet-monit-367694974-1200x675' height='180px' width='360px' alt='cartoonImg'/>
        <div class='imgButtons'>
          <img src='https://cutewallpaper.org/24/book-logo-png/book-logo-blue-png-image-with-transparent-background-toppng.png' class='imgButton' alt='bookBtn' onClick={() => navigate('/resources')}/>
          <img src='https://www.clker.com/cliparts/x/m/6/X/e/Z/blue-laptop-icon.svg.hi.png' class='imgButton' alt='laptopBtn' onClick={() => navigate('/lessons')}/>
          <img src='https://i.pinimg.com/originals/a8/a7/b2/a8a7b2f15d5a34424b27eb5804e3af8a.png' class='imgButton' alt='clockBtn' onClick={() => navigate('/appointments')}/>
          <img src='https://freepngimg.com/thumb/business/83615-blue-icons-symbol-telephone-computer-logo.png' class='imgButton' alt='phoneBtn' onClick={() => navigate('/contact')}/>
        </div>
      </div>
      <div class='rightHalf'>
        <Typography id="transition-modal-description" sx={{ mt: 2}}>
          <>Login</>
        </Typography>
        <LoginForm />
        <Typography id="transition-modal-description" sx={{ mt: 2}}>
          <>Don't have an account?
          <Typography id="transition-modal-description" onClick={() => navigate('/signup')} sx={{ mt: 2, color: 'blue', textDecoration: 'underline'}}>Sign up!</Typography>
          </>
        </Typography>
      </div>
    </div>
    </section>
  )
}

export default Starter;
