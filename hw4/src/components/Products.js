import { Link } from "react-router-dom";

function Products({ products }) {
    return (
        <>
            <h2>Список товаров</h2>
            {products.map((product) => (
                <li key={product.id}>
                    <Link to={`/products/${product.id}`}>
                        {product.title}</Link>
                </li>)
            )}
        </>
    );
}

export default Products;