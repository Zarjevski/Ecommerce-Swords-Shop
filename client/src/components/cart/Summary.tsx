import React from "react";
import H1 from "../elements/H1";
import Card from "../blocks/Card";
import Row from "../blocks/Row";
import Button from "../buttons/Button";
import NavigationButton from "../buttons/NavigationButton";
import accept from "../../assets/accept.png"
import { clearCart } from "../../features/shop/cartSlice";
import { AppDispatch, RootState } from "../../store";
import { useDispatch, useSelector } from "react-redux";

const Summary = () => {
  const { loggedIn } = useSelector((state: RootState) => state.auth);
  const { cart } = useSelector((state: RootState) => state.cart);
  const totalPrice = cart.reduce(
    (acc: number, current: { price: number }) => acc + current.price,
    0
  );
  const dispatch: AppDispatch = useDispatch();
  return (
    <Card className="rounded-none flex-col">
      <H1>Summary</H1>
      <Row>
        <h6>items:</h6>
      </Row>
      <Row>
        <h6>vat: $0</h6>
      </Row>
      <Row>
        <h6>total: ${totalPrice}</h6>
      </Row>
      <div>
      <Button type={"text"} onClick={() => dispatch(clearCart())}>
        CLEAR CART
      </Button>
      {loggedIn ? (
        <Button type={"text"}>CHECKOUT</Button>
      ) : (
        <NavigationButton to={"/login"} text={"PLEASE LOGIN"} />
      )}
      </div>
        <h6>we accept:</h6>
        <img src={accept} alt="we accept" className="h-8 mt-5" />
    </Card>
  );
};

export default Summary;
