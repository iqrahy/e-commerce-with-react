import React from 'react'
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";

const Cart = (props) => {

    const { open, toggleDrawer } = props;

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
  )
}

export default Cart
