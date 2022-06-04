import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import SectionOne from './components/SectionOne';
import SectionTwo from './components/SectionTwo';

function App() {
  return (
    <div className='bg-gray-100 overflow-hidden'>
    <Header />
    <SectionOne />
    <SectionTwo />
    </div>
  );
}

export default App;
