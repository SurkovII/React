import {  Box, Button } from '@mui/material';
import { useNavigate, useParams } from 'react-router-dom';
function DetailPage({ products }) {

    const { productId } = useParams();
    const navigate = useNavigate();
    const product = products.find(product => product.id === parseInt(productId, 10))
    const goBack = () => {
        navigate('/products')
    }
    return (
        <div>
            <Button variant="contained" onClick={goBack}>Назад</Button>
            <Box component="section" sx={{ p: 2, border: '1px dashed grey' }}>
            <div>
                <h2>{product.title}</h2>
                <p>Стоимость - {product.price}</p>
            </div>
            </Box>
        </div>
    )
}

export default DetailPage;