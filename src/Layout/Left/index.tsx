import ProductImage from 'components/Product/ProductImage'
import bgImage from "../../assets/images/bg.png";

const Left = () => {
    return (
        <div className='product product-image'>
            <ProductImage src={bgImage} alt="Product Image" />
        </div>
    )
}

export default Left