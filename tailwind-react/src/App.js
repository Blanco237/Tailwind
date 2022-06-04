import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import SectionOne from './components/SectionOne';
import SectionTwo from './components/SectionTwo';
import SectionThree from './components/SectionThree';
import SectionFour from './components/SectionFour';

function App() {
  return (
    <div className='bg-gray-100 overflow-x-hidden'>
    <Header />
    <SectionOne />
    <SectionTwo />
    <SectionThree />
    <SectionFour />
    </div>
  );
}

export default App;
