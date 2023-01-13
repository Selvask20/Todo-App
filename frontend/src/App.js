import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Form from './component/Form'
import Edittable from './component/Edittable'
import Update from './component/Update'
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Form></Form>}></Route>
       <Route path='/table' element={ <Edittable></Edittable>}></Route>
        <Route path='/edit/:id' element={ <Update></Update>}></Route>
     
      </Routes>
       </BrowserRouter>
      
      
      
      
    
      

    </div>
  );
}

export default App;
