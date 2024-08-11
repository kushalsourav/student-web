import logo from './logo.svg';
import './App.css';
import ContextProvider from './contexts/ContextProvider';
import Main from './router/main';

function App() {
  return (
    <div className="App">
     <ContextProvider>
      <h1>Hello world</h1>
      <Main />
     </ContextProvider>
    </div>
  );
}

export default App;
