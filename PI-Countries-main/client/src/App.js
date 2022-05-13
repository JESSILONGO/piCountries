import {Route} from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import Home from '../src/components/Home/Home';
import LandingPage from './components/LandingPage/LandingPage';
import {Routes} from 'react-router-dom';
import Form from './components/Form/Form';
import Details from './components/Details/Details';
import Delete from './components/Delete/delete';




//componenete contenedor, le puedo pasar un unico elemento, por eso englobo
function App() {
  return (
    <BrowserRouter>
    <div>
      <Routes>
      <Route exact path='/' element={<LandingPage />}/>
      <Route exact path='/home' element={<Home />}/>
      <Route path='/activity' element={<Form />}/>
      <Route path='/countries/:id' element={<Details />}/>
      <Route path='/delete' element={<Delete />} />
      </Routes>
    </div>
    </BrowserRouter>
  );
};

export default App;
