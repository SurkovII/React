
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
// import './App.css';
import HomePage from './components/HomePage';
import AboutPage from './components/AboutPage';
import s from './App.module.css'
import Main from './components/main';


const array = [
  {id: 1, title: "Xiaoimi", price: "10000"},
  {id: 2, title: "Samsung", price: "11000"},
  {id: 3, title: "Iphone", price: "12000"},
  {id: 4, title: "Sony", price: "13000"},
  {id: 5, title: "Hp", price: "14000"},
]

function App() {
  const styleActiveLink = ({isActive}) => {
    return isActive ? `${s.link} ${s.active}` : s.link }
  return (
    <BrowserRouter>
      <nav className={s.nav}>
        <NavLink className={styleActiveLink} to='/'>Главная</NavLink>
        <NavLink className={styleActiveLink} to='/about'>О нас</NavLink>
        <NavLink className={styleActiveLink} to='/main'>Main</NavLink>
        <NavLink className={styleActiveLink} to='/goods'>Продукты</NavLink>
      </nav>
      <Routes>
        <Route exact path='/' element={(<HomePage />)}/>
        <Route path='/about' element={(<AboutPage />)}/>
        <Route path='/main' element={(<Main />)}/>
        <Route path='/goods' element={(<DetailPage products={array} />)}/>
      </Routes>
    </BrowserRouter>

  );
}

export default App;
