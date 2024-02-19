import './App.css';
import Header from './Components/Header';
import DateTime from './Components/DateTime';
import Counter from './Components/Counter';
import Ternery from './Components/Ternery';
import SimpleForm from './Components/SimpleForm';
function App() {
  return (
    
    <div className="App" data="dark">
      <Header name='nishmal' time={DateTime} />
      <Counter />
      <Ternery name='athul' />
      <SimpleForm />
    </div>
  );
}

export default App;
