import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import './App.css';
import Buttons from './Button';

function Home() {
  return (
    <div className="App">

      <div className='pagecontent'>
        <div className='leftpart'>
        <p className='online'>ONLINE</p>
        <p className='edu'>EDUCATION</p>
        <div className='para'>
        <p className='para'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters</p>
        </div>
        
        <div className='morebtn'>
        <Link className='navlink' to="/learn_more">
          <Button variant="rect"   sx={{ 
          width: "max-content",
          cursor: "pointer",
          backgroundColor: "#0095A4",
          color: "white",
          height: "20px",
          borderRadius: "20px",
          padding: "19px",
          textDecoration: "none", }}>
                Learn More
              </Button>
          </Link></div>

        
        
        </div>
      <img src="undraw_mathematics_-4-otb.svg" alt="logo" />
      </div>
        
    </div>
  );
}

export default Home;
