import './App.css';
import './assets/output.css'
import SignIn from './components/SignIn/SignIn';
import Navbar from './components/Navbar/Navbar';
import Avatar from './components/Avatar/Avatar';
import Button from './components/Button/Button';
import Card from './components/Card/Card';
import NewUsr from './components/NewUsr/NewUsr';
import Profile from './components/Profile/Profile';
import Radio from './components/Radio/Radio';
import Team from './components/Team/Team';



function App() {
  return (
    <div className="App">
      <Navbar />
      <SignIn />
    </div>
  );
}

export default App;
