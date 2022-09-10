import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import AlertMessage from "../components/AlertMessage";
import { Link, useParams, useLocation, useNavigate } from "react-router-dom";
import { addToCart, removeFromCart } from "../redux/cartActions";
import {
  Row,
  Col,
  Image,
  ListGroup,
  Card,
  Button,
  ListGroupItem,
  Form,
} from "react-bootstrap";

function CartScreen() {
  const { id } = useParams(); //use this get the user ID in the url
  const navigate = useNavigate();
  const locate = useLocation();
  const qty = locate.search ? Number(locate.search.split("=")[1]) : 1;
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  console.log(cartItems);

  useEffect(() => {
    if (id) {
      dispatch(addToCart(id, qty));
    }
  }, [dispatch, id, qty]);

  const removeFromCartHandler = (id) => {
    dispatch(removeFromCart(id));
  };
  const checkoutHandler = () => {
    navigate("/shipping");
  };

  return (
    <Row>
      <Col md={8}>
        <h1>Shopping Cart</h1>
        {cartItems.length === 0 ? (
          <AlertMessage>
            <span className="cart-error-message">Your cart is empty</span>
            <Link to="/" className="back-to-prod">
              <i className="fa-solid fa-arrow-left-long"></i>back to products
            </Link>
          </AlertMessage>
        ) : (
          <ListGroup className="cart-item-card" variant="flush">
            {cartItems.map((item) => (
              <ListGroupItem key={item.product}>
                <Row>
                  <Col md={2}>
                    <Image src={item.image} alt={item.name} fluid rounded />
                  </Col>
                  <Col md={3}>
                    <Link to={`/product/${item.product}`}>{item.name}</Link>
                  </Col>
                  <Col md={2}>{item.price}</Col>
                  <Col md={2}>
                    <Form.Control
                      as="select"
                      value={item.qty}
                      onChange={(e) =>
                        dispatch(
                          addToCart(item.product, Number(e.target.value))
                        )
                      }
                    >
                      {[...Array(item.countInStock).keys()].map((x) => (
                        <option key={x + 1} value={x + 1}>
                          {x + 1}
                        </option>
                      ))}
                    </Form.Control>
                  </Col>
                  <Col md={2}>
                    <Button
                      type="button"
                      variant="light"
                      onClick={() => removeFromCartHandler(item.product)}
                    >
                      <i className="fas fa-trash"></i>
                    </Button>
                  </Col>
                </Row>
              </ListGroupItem>
            ))}
          </ListGroup>
        )}
      </Col>
      <Col md={4}>
        <Card className="card-subtotal">
          <ListGroup variant="flush">
            <h2>
              Subtotal: $
              {cartItems
                .reduce((acc, item) => acc + item.qty * item.price, 0)
                .toFixed(2)}
            </h2>
            <p>
              Total items: {cartItems.reduce((acc, item) => acc + item.qty, 0)}
            </p>
          </ListGroup>
          <ListGroup>
            <Button
              type="button"
              className="btn-block"
              disabled={cartItems.length === 0}
              onClick={checkoutHandler}
            >
              Proceed To Checkout
            </Button>
          </ListGroup>
        </Card>
      </Col>
    </Row>
  );
}

export default CartScreen;
