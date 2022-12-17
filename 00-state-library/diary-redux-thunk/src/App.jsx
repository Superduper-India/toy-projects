
import './main.css';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AddPage from './pages/PostPage';
import EditPage from './pages/EditPage';
import DetailPage from './pages/DetailPage';
import LoginPage from './pages/LoginPage';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/post" element={<AddPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/edit/:id" element={<EditPage />} />
      <Route path="/detail/:id" element={<DetailPage />} />
    </Routes>
  );
}
