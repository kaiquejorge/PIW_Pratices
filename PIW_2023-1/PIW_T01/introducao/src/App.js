import './App.css';
//import HelloWorld from './components/00HelloWorld';
//import Calculadora from './components/01Calculadora';
import MyProps from './components/02MyProps';

function App() {
  return (
     <div>
      <MyProps nome = "Kaique Jorge" 
      idade = {27}
      curso = "Design Digital"
      />
    </div>
  );
}

export default App;
