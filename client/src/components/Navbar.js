// imports
import React from "react";
import {
  AppBar,
  Box,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  Toolbar,
  Typography,
} from "@mui/material";
import { FaUserCircle, FaShoppingCart } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
// end of imports

const Navbar = () => {
  const navigate = useNavigate()
  return (
    <AppBar position="sticky">
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography variant="h6">Shadow Shop</Typography>
        <List sx={{display: 'flex'}}>
          <ListItem>
            <ListItemButton onClick={()=> navigate("/")}>Home</ListItemButton>
          </ListItem>
          <ListItem>
            <ListItemButton onClick={()=> navigate("/shop")}>Products</ListItemButton>
          </ListItem>
          <ListItem>
            <ListItemButton onClick={()=> navigate("/contact")}>About</ListItemButton>
          </ListItem>
        </List>
        <Box>
          <IconButton>
            <FaUserCircle />
          </IconButton>
          <IconButton>
            <FaShoppingCart />
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
