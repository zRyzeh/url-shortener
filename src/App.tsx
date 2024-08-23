import './styles/tailwind.css';
import { Header } from './layout/Header/Header';
import { Footer } from './layout/Footer/Footer';
import { Home } from './home/Home';
import { AuthContextProvider } from './auth/contexts/AuthContext';
import { MenuContextProvider } from './layout/Header/contexts/MenuContext';

const App = () => {
  return (
    <section className='overflow-hidden grid grid-rows-[auto_1fr_auto] min-h-screen bg-secondary dark:bg-secondary-dark'>
      <AuthContextProvider>
        <MenuContextProvider>
          <Header />
        </MenuContextProvider>
      </AuthContextProvider>
      <Home />
      <Footer />
    </section>
  )
}

export default App;
