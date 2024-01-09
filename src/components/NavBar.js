import React from 'react'
import { Link } from 'react-router-dom';
import { useNavigate} from 'react-router-dom'
import { signInWithPopup, signOut, GoogleAuthProvider } from 'firebase/auth';
import { auth } from '../auth/firebase';

const Nav = () => {
  const navigate = useNavigate();

  const handleLogin = async () => {
    
    const provider = new GoogleAuthProvider();
    try {
      // Sign in with Google Popup
      await signInWithPopup(auth, provider);
      // User is logged in, redirect to the dashboard
      navigate('/dashboard');
    } catch (error) {
      // Handle authentication error
      console.error('Authentication error:', error);
    }
  };

  const handleLogout = async () => {

    try {
      // Sign out the user
      await signOut(auth);
      // User is logged out, redirect to the login page
      navigate('/');
    } catch (error) {
      // Handle logout error
      console.error('Logout error:', error);
    }
  };

  // const signOutOnClick = () => {
  //   signOut(auth)
  //   window.location.reload();
  // }

  // const signInOnClick =  async () => {
  //   const response = await signInWithPopup(auth, Providers.google);
  //   if ( response.user ) {
  //     window.location.reload();
  //   }
  // }


  return (
    <div className='nav'>
        <h1>Car Collection</h1>
        <ul>
           <li><a href='/about'>About</a></li> 
           {

            !auth.currentUser ? 
            <button>
              <div>
                <Link to='/' onClick={handleLogin}>
                  Login
                </Link>
              </div>
            </button>
            : 
            <button>
              <div>
                <Link to='/' onClick={handleLogout}>
                  Logout
                </Link>
              </div>
            </button>

           }
        </ul>
    </div>
  )
}

export default Nav