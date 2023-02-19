import './App.css';
import AuthLayout from './pages/Authentication/AuthLayout';
import { Route,Routes } from 'react-router-dom';

function App() {
  return (

    <div className='App'>
      <Routes>
          <Route path='/*' element={ <AuthLayout/> } />
      </Routes>
    </div>
  );
}

export default App;
