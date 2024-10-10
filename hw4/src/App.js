
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import s from './App.module.css';
import HomePage from './components/HomePage';
import AboutPage from './components/AboutPage';
import Products from './components/Products';
import DetailPage from './components/DetaiPage';
const array = [
  { id: 1, title: "Xiaoimi", price: "10000" },
  { id: 2, title: "Samsung", price: "11000" },
  { id: 3, title: "Iphone", price: "12000" },
  { id: 4, title: "Sony", price: "13000" },
  { id: 5, title: "Hp", price: "14000" }
]
function App() {
  return (
    <BrowserRouter>
      <nav className={s.nav}>
        <NavLink to={'/'}>Главная</NavLink>
        <NavLink to={'/about'}>О нас</NavLink>
        <NavLink to={'/products'}>Товары</NavLink>
      </nav>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='/products' element={<Products products={array} />} />
        <Route path='/products/:productId' element={<DetailPage products={array} />} />

      </Routes>
    </BrowserRouter>
  )
}

export default App;
