import { Button, Card } from "react-bootstrap";
import { UseShoppingCart } from "../context/ShoppingCartContext";
import CurrencyFormat from "../utils/CurrencyFormat";

type StoreCardProps = {
  id: number
  name: string
  price: number
  image: string
}

const StoreCard = ({ id, name, price, image }: StoreCardProps) => {
const {getItemQuantity, increaseQuantity, decreaseQuantity, removeItem} = UseShoppingCart();
  const quantity = getItemQuantity(id)
 
  
  return (
    <Card style={{ marginBottom: '20px'}}>
      <Card.Img variant="top" src={image} height='300px' style={{ objectFit: "cover" }} />
      <Card.Body className="d-flex flex-column">
        <Card.Title className="d-flex justify-content-between align-items-baseline mb-4">
          <span className="fs-2">{name}</span>
          <span className="ms-2 text-muted">{CurrencyFormat(price)}</span>
        </Card.Title>
        <div className="mt-auto">
          {quantity === 0 ?
            (<Button className="w-100" onClick={() => increaseQuantity(id)}>Add To Cart</Button>)
            :
            <div className="d-flex flex-column align-items-center" style={{gap: '1rem'}}>
              <div className="d-flex align-items-center justify-content-center"  style={{gap: '1rem'}}>
                <Button  onClick={() => decreaseQuantity(id)}>-</Button>
               <div>
               <span className="fs-3">{quantity}</span>
               </div>
                <Button  onClick={() => increaseQuantity(id)}>+</Button>
              </div>
            <Button variant="danger" size="sm"  onClick={() => removeItem(id)}>Remove</Button>
            </div>}
        </div>
      </Card.Body>
    </Card>
  
  )
}

export default StoreCard