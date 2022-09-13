import './App.css';
import {Routes, Route} from 'react-router-dom'
import Menu from './components/Menu'
import StudyMainMenu from './components/StudyComponents/StudyMainMenu'
import PracticeMainMenu from './components/PracticeComponents/PracticeMainMenu'


function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Menu/>}/>
        <Route path='/study' element={<StudyMainMenu/>}/>
        <Route path='/practice' element={<PracticeMainMenu/>}/>
      </Routes>
      
    </div>
  );
}

export default App;
