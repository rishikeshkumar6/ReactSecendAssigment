import logo from './logo.svg';
import './App.css';
import { Invitation } from './Invitation/invitation';

function App() {
  const subject=<p style={{color: "red"}}>Birthday Party Invitation</p>
  const name=<p style={{color: "red"}}>jaGdish</p>
  const mail=<p style={{color: "red"}}>jaGdish@gmail.com</p>
  const friends=<p style={{color: "red"}}>Ritu Saurav Kartik</p>
  return (
    <div className="App">
        <Invitation name={name} subject={subject} mail={mail} friends={friends}/>

    </div>
  );
}

export default App;
