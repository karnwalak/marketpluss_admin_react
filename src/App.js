import './App.css';
import Header from './component/Header';
import {Todos} from './component/Todos';
import {Footer} from './component/Footer';

function App() {
  let todos = [
    {
      id: 1,
      title: 'Todo One',
      description: 'This is Todo One!'
    },
    {
      id: 2,
      title: 'Todo Two',
      description: 'This is Todo Two!'
    },
    {
      id: 3,
      title: 'Todo Three',
      description: 'This is Todo Three!'
    }
  ];
  return (
    <>
    <Header title="My First React Application" searchBar={true}/>
    <Todos todos={todos}/>
    <Footer/>
    </>
  );
}

export default App;
