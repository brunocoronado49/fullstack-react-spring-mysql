import { Route } from 'wouter';
import { Home, MainProductPage, Create } from './pages/index';
import { Navbar, Footer } from './components/index';
import './App.css';

function App() {
  return (
    <>
    <Navbar />
    <Route path='/' component={ Home } />
    <Route path='/products' component={ MainProductPage } />
    <Route path='/create' component={ Create } />
    {/* <Footer /> */}
    </>
  );
}

export default App
