import './App.css'
import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage.jsx'
import GameDetail from './pages/GameDetails.jsx';
import AboutPage from './pages/AboutPage.jsx'
import NotFoundPage from './pages/NotFoundPage.jsx'
import Layout from './components/Layout.jsx'
import AddGamePage from './pages/AddGamePage.jsx'
import FavoritesPage from './pages/FavoritesPage.jsx'

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="favorites" element={<FavoritesPage />} />
        <Route path="/game/:id" element={<GameDetail />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="add" element={<AddGamePage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  )
}

export default App
