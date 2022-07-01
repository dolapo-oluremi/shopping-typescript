import { Button, Modal } from "react-bootstrap";
import { UseShoppingCart } from "../context/ShoppingCartContext";

type ModalProps = {
  onHide: any
  show: boolean
}
function ModalComp(props: ModalProps, id: number) {
  const { cartQuantity, openCart } = UseShoppingCart()
  const quantity = cartQuantity
  const hide = props.onHide;

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Body>
        {quantity > 0 ? (<div>
          <h4>Hello, Welcome Back!</h4>
          <p>You Have {quantity} Items In Your Cart</p>
        </div>
        ) : (<div>
          <h4>Hello, Welcome Back!</h4>
          <p>Welcome To Hollistics and Natural Products</p>
        </div>)}
      </Modal.Body>
      <Modal.Footer>
        {quantity > 0 && <Button onClick={() => { openCart(); hide() }}>View Cart</Button>}
        <Button onClick={hide}>Shop</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ModalComp