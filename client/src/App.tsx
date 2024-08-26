import '@/styles/tailwind.css';
import { AuthContextProvider } from '@/auth/contexts/AuthContext';
import { Home } from '@/home/Home';
import { Footer } from '@/layout/Footer/Footer';
import { MenuContextProvider } from '@/layout/Header/contexts/MenuContext';
import { Header } from '@/layout/Header/Header';

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
