import React from "react";
import CartItem from "./CartItem";
import Section from "../blocks/Section";
import Box from "../blocks/Box";
import Summary from "./Summary";
import H1 from "../elements/H1";
import H2 from "../elements/H2";
import { RootState } from "../../store";
import { useSelector} from "react-redux";


const Cart = () => {
  const { cart } = useSelector((state: RootState) => state.cart);
  const items = cart.length;
  return (
    <Section className="justify-evenly">
      <Box className="flex-col h-3/4">
      <H1>CART</H1>
        {!items ? (
          <H2>Your Cart Is Empty</H2>
        ) : (
          cart.map((item: any, i: number) => {
            return <CartItem key={i} {...item} />;
          })
        )}
      </Box>
      <Summary/>
    </Section>
  );
};

export default Cart;
