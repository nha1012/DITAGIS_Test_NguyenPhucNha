import React, { useEffect } from "react";
import { useSelector } from "react-redux";

import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import ShoppingCartItem from "./ShoppingCartItem";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { Typography } from "@material-ui/core";
import { formatPrice } from "../helper/formatPrice";
import { withRouter } from "react-router-dom";
const useStyles = makeStyles((theme) => ({
  container: {
    padding: 0,
  },
  pannel: {
    padding: theme.spacing(0, 2),
    ...theme.mixins.toolbar,
  },
  pagar: {
    width: "100%",
    marginTop: 20,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
}));

const Cart = (props) => {
  const classes = useStyles();
  const cartItem = useSelector((state) => state.cartReducer.items);
  const totalCart = Object.values(cartItem).reduce((sum, item) => {
    return sum + parseInt(item.quantity) * parseInt(item.price);
  }, 0);
  return (
    <Container className={classes.container}>
      <Grid container className={classes.pannel}>
        <Grid item style={{ width: "100%" }}>
          {Object.values(cartItem).map((item, index) => {
            return (
              <>
                <ShoppingCartItem key={index} product={item} />
              </>
            );
          })}
        </Grid>
        <Grid item className={classes.pagar}>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              width: "100%",
            }}
          >
            <Typography variant="overline">Tổng cộng </Typography>
            <Typography variant="h6">{formatPrice(totalCart)} VND</Typography>
          </div>
          <Button
            style={{ width: "60%", marginTop: 10 }}
            variant="contained"
            color="secondary"
          >
            Chi tiết giỏ hàng
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
};

export default withRouter(Cart);
