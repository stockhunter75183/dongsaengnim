import { BrowserRouter, Routes, Route } from 'react-router-dom';
import IntroPage from './pages/IntroPage';
import TestPage from './pages/TestPage';
import LoadingPage from './pages/LoadingPage';
import ResultPage from './pages/ResultPage';
import ResultDetailPage from './pages/ResultDetailPage';
import MatchPage from './pages/MatchPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<IntroPage />} />
        <Route path="/test" element={<TestPage />} />
        <Route path="/loading" element={<LoadingPage />} />
        <Route path="/result" element={<ResultPage />} />
        <Route path="/result/detail" element={<ResultDetailPage />} />
        <Route path="/match" element={<MatchPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
