import './App.css';
import { Header } from './components/Header';
import { HomePage } from './components/HomePage';
import { SNSPage } from './components/SNSPage';
import { WorkPage } from './components/WorkPage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />

        <Routes>
          <Route path="/home" element={ <HomePage /> } />
          <Route path="/work" element={ <WorkPage /> } />
          <Route path="/sns" element={ <SNSPage /> } />
        </Routes>

      </div>
    </Router>
  );
}

export default App;
