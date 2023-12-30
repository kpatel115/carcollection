import { useEffect } from 'react'
import { useNavigate} from 'react-router-dom'
import { onAuthStateChanged, signInWithPopup, GoogleAuthProvider } from 'firebase/auth'
import { auth, Providers} from '../auth/firebase'

const AuthChecker = ({ children }) => {
    const navigate = useNavigate();

    useEffect(() => {
      const checkAuth = async () => {

        const user = auth.currentUser;
        if (user) {
          return;
        }
        const unsubscribe = onAuthStateChanged(auth, (user) =>{
          if (user) {
            navigate('/dashboard')
          }
        })
        // if (!auth.currentUser) {
        //   navigate("../dashboard");
        try {
          await signInWithPopup(auth, Providers.google);
        } catch (error) {
            // Handle authentication error if needed
          console.error('Authentication error:', error);
          }
          finally {
            unsubscribe();
          }
        };
      
  
      checkAuth();
    }, [navigate]);

    
  
    return <>{children}</>;
  };
  
  export default AuthChecker;