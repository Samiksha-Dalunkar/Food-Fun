import { useParams } from "react-router-dom"
import { addItem,delItem } from "../redux/action"
import { useDispatch } from "react-redux"
import { useState } from "react";
import menu from "../data"
import "../Styles/Productdetail.css"
import { Link } from "react-router-dom";
                                                         
function ProductDetail(){
    const [cartBtn, setCartBtn] = useState("Add to Cart")
    const{id}=useParams();                     
    const products=menu.filter(x=>x.id==id)
    const item=products[0]                     
    console.log(item)                          
    
// Quntity

const [quantity, setQuantity] = useState(1);
const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const increaseQuantity = () => {
    setQuantity(quantity + 1);

  };

 const dispatch=useDispatch()
    const handleCart = (menu) => {
        if (cartBtn === "Add to Cart") {
            dispatch(addItem(menu))
            setCartBtn("Remove from Cart")
        }
        else{
            dispatch(delItem(menu))
            setCartBtn("Add to Cart")
        }
      }
   return<>
<div className="Main">
<div className="left">
<img src={'../'+item.img} alt={item.title}  />
</div>
<div className="right">
<h1>{item.title}</h1>
<div className="menu_icon">
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star-half-stroke"></i>
            </div>
<p>{item.desc}</p>
<div className="right_item">
<h2>Rs {item.price}</h2>
<div className="quantity">
     <button className="decrease" onClick={decreaseQuantity}>-</button>
     <input type="text" className="quantity-input" value={quantity} readOnly />
     <button className="increase" onClick={increaseQuantity}>+</button>
     </div>
    </div>
    <div className="Lorem">
<button  onClick={()=>handleCart(item)}>{cartBtn}</button>
                                                                         
<Link className="Show" to="/checkout">Buy Now</Link>
</div>
</div>

</div>

</>
    
}
export default ProductDetail;

