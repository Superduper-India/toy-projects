
import './main.css';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
// import PostPage from './pages/PostPage';
import CommentPage from './pages/CommentPage';
// import LoginPage from './pages/LoginPage';
// import SignupPage from './pages/SignupPage';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      {/* <Route path="/post" element={<PostPage />} /> */}
      {/* <Route path="/edit/:id" element={<PostPage />} /> */}
      {/* <Route path="/sign_up" element={<SignupPage />} /> */}
      {/* <Route path="/sign_in" element={<LoginPage />} /> */}
      <Route path="/comment/:id" element={<CommentPage />} />
    </Routes>
  );
}
