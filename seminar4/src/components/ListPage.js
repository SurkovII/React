import {Link} from 'react-router-dom'
import {useParams} from 'react-router-dom'

function ListPage({prducts}) {
    return (
        <>
        <Link to='/'>На главную</Link>
        <h1>Страница списка</h1>
        <ul>
            {products.map((product) => <li key={product.id}>
                <Link to={`/goods/${product.id}`}>{product.title}</Link></li>)}
        </ul>
        </>
    )
}

export default ListPage;