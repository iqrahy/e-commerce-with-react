import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";

const Cart = (props) => {
  const { open, toggleDrawer } = props;
  const [cartItems, setCartItems] = useState([]);

  console.log(cartItems);
  

  useEffect(() => {
    const cartItemArr = localStorage.getItem('cartItems')
    setCartItems(cartItemArr);
    
  }, []);

  return (
    <>
      <Drawer open={open} onClose={toggleDrawer(false)}>
        <Box
          sx={{ width: 350 }}
          role="presentation"
          onClick={toggleDrawer(false)}
        ></Box>
      </Drawer>
    </>
  );
};

export default Cart;
