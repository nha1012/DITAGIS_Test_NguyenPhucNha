import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import { UpdateToCart } from "../redux/action/cart";
import { useDispatch } from "react-redux";
const useStyles = makeStyles((theme) => ({
  item: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingTop: 10,
    paddingBottom: 10,
    width: "100%",
  },
  details: {
    display: "flex wrap",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    marginLeft: 15,
    marginRight: 15,
  },
  actions: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    height: "100%",
    width: 75,
  },
  quantity: {
    maxWidth: "80px",
    marginTop: 10,
  },
  lefthalf: {
    display: "flex",
    flexFlow: "row nowrap",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  remove: {
    fontSize: 11,
    marginTop: 6,
  },
}));

const ShoppingCartItem = (props) => {
  const classes = useStyles();
  let product = props.product;
  const [quantity, setQuantity] = useState(product.quantity);
  const dispatch = useDispatch();
  return (
    <div className={classes.item}>
      <div className={classes.lefthalf}>
        <div>
          <img width="40" src={product.image} />
        </div>
        <div className={classes.details}>
          <Typography variant="button" display="block" gutterBottom>
            <strong>{product.name}</strong>
          </Typography>
          <span style={{ fontSize: 11 }}>PRECIO UNIDAD</span>
          <Typography variant="body1" color="secondary">
            <strong>{product.price}</strong>
          </Typography>
        </div>
      </div>
      <div className={classes.actions}>
        <TextField
          className={classes.quantity}
          label="Cantidad"
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
          variant="outlined"
          value={quantity}
          size="small"
          onChange={(event) => {
            product.quantity = parseInt(event.target.value);
            setQuantity(event.target.value);
            dispatch(UpdateToCart(product));
          }}
        />
        <Button size="small" className={classes.remove}>
          Eliminar
        </Button>
      </div>
    </div>
  );
};

export default ShoppingCartItem;
