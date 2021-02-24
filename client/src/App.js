import './App.css';
import './assets/output.css'
import SignIn from './components/SignIn/SignIn';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <SignIn />
    </div>
  );
}

export default App;
