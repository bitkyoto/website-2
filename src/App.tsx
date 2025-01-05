import './App.css'
import MainPage from './pages/MainPage'
import LatestPostsPage from './pages/LatestPostsPage'
import AboutPage from './pages/AboutPage'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<MainPage/>}/>
          <Route path='/episodes' element={<LatestPostsPage/>}/>
          <Route path='/about' element={<AboutPage/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
