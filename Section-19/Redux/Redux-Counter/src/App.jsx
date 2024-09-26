import { useSelector } from 'react-redux';

import Header from './components/Header.jsx'
import Counter from './components/Counter.jsx';
import Auth from './components/Auth.jsx'
import UserProfile from './components/UserProfile.jsx'

function App() {

  const isAuth = useSelector(state => state.auth.isAuthenticated);

  return (
    <>
      <Header />
      {!isAuth && <Auth />}
      {isAuth && <UserProfile />}
      <Counter />
    </>
  );
}

export default App;
