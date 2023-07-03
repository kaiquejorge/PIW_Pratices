import './App.css';
//import HelloWorld from './components/00HelloWorld';
//import Calculadora from './components/01Calculadora';
//import MyProps from './components/02MyProps';
//import MeusDados from './components/Atividade00/01MeusDados';
//import MeusDados from './components/Atividade00/02MeusDados';
//import MeusDados from './components/Atividade00/03Temperatura';
//import Pai from './components/Atividade01/questao01/01Pai';
//import * as PC from './components/Atividade01/questao01/02MeuPc';
//import * as Batalha from './components/Atividade01/questao01/03Batalha';
//import PokemonAxios from './components/Atividade00/10Axios/PokemonAxios';
//import Signin from './components/13MUI/01Signin/Signin';
//import MyMenu from './components/13MUI/02CRUD/MyMenuV1';
//import MainPage from './components/13MUI/02CRUD/MainPage';
import MeuIndex from './components/11Redux/v2/MeuIndex';

function App() {
  return (
    <MeuIndex />
  );
}

/*function App() {
  return (
     <div>
      <MeusDados 
        nome = "Kaique Jorge"
        curso = "Design Digital"
        universidade= "UFC"
      />
    </div>
  );
}*/

/*function App() {
  return (
     <div>
      <Pai />
      <hr />
      <PC.PlacaDeVideo nome="GTX 1050" preco={1000.00} />
      <PC.PlacaMae nome="Gigabyte" preco={1440.00} />
      <PC.Memoria nome="DDR 4" preco={1200.00} />
      <hr />
      <Batalha.World>
        <Batalha.Arena name ="Castelão" />
        <Batalha.Arena name ="Abilhão" />
      </Batalha.World>
      <hr />
      <Batalha.World>
        <Batalha.Arena2 name ="Castelão" >
        <Batalha.Hero name="Super Aragas" />
        <Batalha.Enemy emy name="Super Fulana" />
        </Batalha.Arena2>
      </Batalha.World>
    </div>
  );
}*/

export default App;
