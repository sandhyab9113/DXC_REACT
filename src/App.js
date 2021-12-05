import './App.css';
import Greet from './components/Greet';
import Welcome from './components/Welcome';
import Message from './components/Message';

function App() {
  return (
    <div className="App">
      <Message />
      <Greet name="Sandy" college="IIT">
        <p> this is children property</p>
      </Greet>
      <Greet name="Sandy" college="Oxford">
        <button>click me</button>
      </Greet>
      <Greet />
      <Welcome name="San" alias="San" />
    </div>
  );
}
export default App;