import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from "./components/layout/Navbar"
import Dashboard from './components/dashboard/Dashboard'
import ProjectDetails from './components/projects/ProjectDetails';
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';
import CreateProject from './components/projects/CreateProject';

/* 
  Route means when user loads '/' then load in Dashboard inside the app
*/
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Routes>
          <Route exact path='/' element={ <Dashboard /> } /> 
          <Route path='/project/:id' element={ <ProjectDetails/> } />
          <Route path='/signin' element={ <SignIn />} />
          <Route path='/signup' element={ <SignUp />} />
          <Route path='/create' element={ <CreateProject />} />
        </Routes>
      </div>
    </BrowserRouter>
    );
}

export default App;
