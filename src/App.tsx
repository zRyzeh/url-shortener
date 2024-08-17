import './App.css';
import Header from './Components/Header/Header';
import Footer from './Components/Footer';

const App = () => {
  return (
    <div className='overflow-hidden'>
      <Header />
      <div className='h-[200vh] bg-[#1D1F26]'>
        <h1>Rsbuild with React</h1>
        <p>Start building amazing things with Rsbuild.</p>
      </div>

      <Footer />
    </div>
  )
}

export default App;
