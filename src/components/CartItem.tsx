import { Button, Stack } from "react-bootstrap";
import { UseShoppingCart } from "../context/ShoppingCartContext";
import storeItems from '../data/items.json'
import CurrencyFormat from "../utils/CurrencyFormat";

type CartItemProps = {
    id: number
    quantity: number
}

const CartItem = ({ id, quantity }: CartItemProps) => {
    const { removeItem } = UseShoppingCart()
    const item = storeItems.find(i => i.id === id)
    if (item == null) return null

    return (
        <Stack direction="horizontal" gap={2} className="d-flex align-items-center">
            <img src={item.imageURL} style={{ width: '120px', height: '70px', objectFit: 'cover' }} />
            <div className="me-auto">
                <div>
                    {item.name} &nbsp; {quantity > 1 && <span className="text-muted" style={{ fontSize: '12px' }}>x{quantity}</span>}
                </div>
                <div style={{fontSize:'12px'}}>{CurrencyFormat(item.price)}</div>
            </div>
            <div style={{fontSize:'12px'}}>{CurrencyFormat(item.price * quantity)}</div>
            <Button variant='outline-danger' size='sm' onClick={() => removeItem(id)}>&times;</Button>
        </Stack>
    )
}

export default CartItem