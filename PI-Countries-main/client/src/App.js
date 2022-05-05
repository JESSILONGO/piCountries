import {Route} from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import Home from '../src/components/Home/Home';
import LandingPage from './components/LandingPage/LandingPage';
import {Routes} from 'react-router-dom';
import Form from './components/Form/Form';
import Details from './components/Details/Details';

//componenete contenedor, le puedo pasar un unico elemento, por eso englobo
function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Routes>
      <Route exact path='/' element={<LandingPage />}/>
      <Route exact path='/home' element={<Home />}/>
      <Route path='/activity' element={<Form />}/>
      <Route path='/countries/:id' element={<Details />}/>
      </Routes>
    </div>
    </BrowserRouter>
  );
};

export default App;
