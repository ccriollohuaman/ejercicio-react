import logo from './logo.svg';
import './App.css';
import { Contact } from './models/contact.class';
import ContactComponent from './components/pure/contact';
import ClockClass from './components/pure/clock';
import ClockFunction from './components/pure/clockF';

function App() {

  // const defaultContact = new Contact('Name', 'LastName', 'name@email.com',false)

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* Componente de Contact */}
        {/* <ContactComponent contact={defaultContact}></ContactComponent> */}

        {/* Tarea de sesiones 4,5 y 6 - Transformación del componente a funcional */}
        <ClockFunction></ClockFunction>
      </header>
    </div>
  );
}

export default App;
