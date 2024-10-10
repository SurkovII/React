
import {useParams} from 'react-router-dom';
function DetailPage({products}) {
    
    const {productId} = useParams();
    const navigate =useNavigate();
    const product = products.find(product => product.id === parseInt(productId, 10))
    const goBack = () => {
        navigate('/goods')
    }
    return (
        <>
        <botton onClick={goBack}></botton>
  
        <p>{product.title}</p>
        <p>{product.price}</p>
        </>
    )
}

export default DetailPage;