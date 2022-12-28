import './cart-dropdown.scss'
import Button from '../components/button/button.component';
const CartDropdown = () =>{
   return(
    <div className='cart-dropdown-container'>
        <div className='cart-items'></div>
        <Button>GO TO CHECHKOUT</Button>
    </div>
   )
}

export default CartDropdown;