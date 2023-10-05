import React from 'react'
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Box from '@mui/material/Box';
import logo from '../logo.svg'

const Nav = () => {
  const navigate = useNavigate();
  return (
    <header>
      <nav>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-around',
            bgcolor: 'darkblue',
            '& > *': {
              m: 1,
            }
          }}
        >
          <img id='navLogo' src={logo} alt='logo' height='50px' width='50px' float='left' onClick={() => navigate('/')}/>
          <ButtonGroup variant='text' size='large' aria-label='text button group' sx={{
            flexDirection: 'row',
            justifySelf: 'center',
            alignSelf: 'center',
            bgcolor: 'darkblue',
            color: 'white',
          }}>
            <Button onClick={() => navigate('/dashboard')}>dashboard</Button>
            <Button onClick={() => navigate('/login')}>login</Button>
            <Button onClick={() => navigate('/signup')}>sign up</Button >
            <Button onClick={() => navigate('/test')}>HQ Team</Button >
          </ButtonGroup>
        </Box>
      </nav>
    </header>
  )
}

export default Nav;