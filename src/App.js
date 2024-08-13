
import './App.css';
import ContextProvider from './contexts/ContextProvider';
import Main from './router/main';

function App() {
  return (
    <div className="App">
     <ContextProvider>
      <Main />
     </ContextProvider>
    </div>
  );
}

export default App;
