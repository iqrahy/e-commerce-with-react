import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";
import CardActions from "@mui/material/CardActions";
import Product1 from "./imgs/img1.webp";
import Product2 from "./imgs/img2.webp";
import Product3 from "./imgs/img3.jpg";
import Product4 from "./imgs/img4.jpg";
import { Box } from "@mui/material";
import ShareIcon from "@mui/icons-material/Share";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Divider from "@mui/material/Divider";

const products = [
  {
    id: 1,
    img: Product1,
    name: "Yums",
    price: 10,
  },
  {
    id: 2,
    img: Product2,
    name: "Chicken soup",
    price: 120,
  },
  {
    id: 3,
    img: Product3,
    name: "Juice",
    price: 95,
  },
  {
    id: 4,
    img: Product4,
    name: "Olpers",
    price: 220,
  },
];

const Products = () => {


    const [cartList, setCartList] = useState([])

    console.log(cartList);
    

  const cartHandler = (product) => {
    setCartList([product])
    
  };

  return (
    <Box sx={{ backgroundColor: "#FAFAFA", height: "88vh" }}>
      <Box className="d-flex justify-content-between p-5">
        {products?.map((product, index) => {
          return (
            <Card key={index}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  sx={{ width: "270px" }}
                  image={product.img}
                  alt={`${product.name}`}
                />
                <CardContent className="d-flex justify-content-between align-items-center">
                  <Typography gutterBottom variant="h5" component="div">
                    {product.name}
                  </Typography>
                  <Typography variant="inherit" component="div">
                    ${product.price}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <Divider sx={{ borderColor: "gray" }} />
              <CardActions>
                <Box className="d-flex justify-content-between align-items-center w-100 py-1 ">
                  <ShareIcon
                    className="fs-1 py-1 rounded-1"
                    sx={{
                      cursor: "pointer",
                      border: "1px solid #7FBA00",
                      color: "#7FBA00",
                    }}
                  />
                  <ShoppingCartIcon
                    sx={{
                      cursor: "pointer",
                      backgroundColor: "#7FBA00",
                      color: "#fff",
                    }}
                    className="w-50 fs-1 py-1 rounded-1"
                    onClick={()=>{
                        cartHandler(product)
                    }}
                  />
                  <FavoriteBorderIcon
                    className="rounded-1 fs-1 py-1"
                    sx={{
                      cursor: "pointer",
                      border: "1px solid #7FBA00",
                      color: "#7FBA00",
                    }}
                  />
                </Box>
              </CardActions>
            </Card>
          );
        })}
      </Box>
    </Box>
  );
};

export default Products;
