import logo from './logo.svg';
import './App.css';
import "./Timer.css";
import Timer from './components/Timer';

function App() {
  const eventDate = new Date("2024-05-17T00:00:00").getTime();
  return (
    <>
      <Timer eventDate={eventDate}/>
    </>
  );
}

export default App;
