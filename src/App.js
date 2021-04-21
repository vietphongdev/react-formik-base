import './App.css';
import LoginForm from './components/Form/LoginForm';
import RegistrationForm from './components/Form/RegistrationForm';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <LoginForm /> */}
        <RegistrationForm />
      </header>
    </div>
  );
}

export default App;
