import { useNavigate } from "react-router"
import AddNewProduct from "../Components/AddNewProduct"


const ProductInfo = () => {
    const navigate = useNavigate();
    const handleBack = () => {
        navigate("/")
    }
    const handleContinue = () => {
        navigate("/company")
    }
    return (
        <div>
            <AddNewProduct />
            <button>+Add New Product</button>
            <button onClick={()=> hanldeBack()}>Back</button>
            <button>Finish</button>
        </div>
    )
}

export default ProductInfo;