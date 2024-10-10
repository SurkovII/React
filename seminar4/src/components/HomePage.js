import {Link} from 'react-router-dom'
function HomePage() {
    return (
      <>
        <Link to='/about'>О нас<Link>
        <Link to='/goods'>Товары<Link>
        <h1>Главная страница</h1>
        <p>Много всего</p>
      </>
      );
}

export default HomePage;