import Navbar from './components/Navbar';
import {BrowserRouter as Router, Routes,Route} from 'react-router-dom'
import Home from './components/Home';
import About from './components/About';
import NotFound from './components/NotFound';
import { CocktailProvider } from './context/ContextApi';
import DetailPage from './components/DetailPage';

function App() {

  return (
 

    <CocktailProvider>

    <div className="App">
    <Router>
      <Navbar/>
   
      <Routes>
        
        <Route exact path='/' element={<Home/>} />
        <Route  path='/about' element={<About/>} />
        <Route  path='/*' element={<NotFound/>} />
        <Route  path='/detail/:id' element={<DetailPage/>} />
      </Routes>
      </Router>
    </div>

    </CocktailProvider>
  );
}

export default App;
