import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet';
import Welcome from './components/Welcome';

function App() {
  return (
    <div className="App">
      <Greet name="sandy" college="IIT">
        <p> this is children property</p>
      </Greet>
      <Greet name="sandhya" college="Oxford" />
      <Greet name="tanveer" />

      <Welcome />

      <Greet />
      <Greet />    </div>
  );
}

export default App;
