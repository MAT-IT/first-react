

import './App.css';
import Formm from './COMPONENTS/Form';
import IdPropsDrilling from './COMPONENTS/IdPropsDrilling';
import Selam from './COMPONENTS/Selamla';


function App() {
  return (
    <div className="App">
    <Selam/>
    <Formm/>
    <IdPropsDrilling 
    name=" Mat"
    surname=" IT"
    />
    <IdPropsDrilling name="Nahid" surname="IT"><h2>CHILDREN</h2></IdPropsDrilling>

    </div>
  );
}

export default App;
