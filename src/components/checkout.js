import { useSelector } from "react-redux";
import "../Styles/checkout.css";
import pc2 from "../Assets/cartage.png"
function Checkout(){
const state = useSelector((state) => state.addItem);
var total=0;

const itemList = (item) => {
total = total + item.price;
return (
 <li key={item.id} >
                <div>
                    <h6 >{item.title}</h6>
                </div>
                <span >Rs {item.price}</span>
            </li>
        );
    };

    return<>
    <div className="dog">
        <img src={pc2}></img>
    <div className="horn">
    <h1>Your Cart ({state.length})</h1>
    <ul>
        {state.map(itemList)}
        <li><span>Total:  </span><strong>{total}</strong></li>
    </ul>
    </div>
    
     </div>
     <div className="Haze">
            <button>Checkout</button>

     </div>
    </>
}
export default Checkout;