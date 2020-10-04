import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import { UpdateToCart, RemoveCartItem } from "../redux/action/cart";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogTitle from "@material-ui/core/DialogTitle";
import {formatPrice} from '../helper/formatPrice'
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
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
  let product = { ...props.product };
  const [quantity, setQuantity] = useState(parseInt(product.quantity));
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();
  const handleClose = () => {
    setOpen(false);
  };
  const agreeRemoveItem = () => {
    setOpen(false);
    dispatch(RemoveCartItem(`${product.id}_${product.name}`));
  };

  useEffect(() => {
    if (quantity == 0) {
      setOpen(true);
      setQuantity(1);
      product.quantity = 1;
      dispatch(UpdateToCart(product));
    }
  }, [product]);

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
          <Typography variant="body1" color="secondary">
            <strong>{formatPrice(product.price)} VND</strong>
          </Typography>
        </div>
      </div>
      <div className={classes.actions}>
        <TextField
          className={classes.quantity}
          label="Số lượng"
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
          variant="outlined"
          value={product.quantity}
          size="small"
          onChange={(event) => {
            if (quantity >= 1) {
              product.quantity = parseInt(event.target.value);
              setQuantity(event.target.value);
              dispatch(UpdateToCart(product));
            }
          }}
        />
        <Button
          onClick={() => {
            setOpen(true);
          }}
          size="small"
          className={classes.remove}
        >
          Xóa
        </Button>
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="responsive-dialog-title"
        >
          <DialogTitle id="responsive-dialog-title">
            {"Bạn có đồng ý xóa sản phẩm này!"}
          </DialogTitle>
          <DialogActions>
            <Button autoFocus onClick={handleClose} color="primary">
              Disagree
            </Button>
            <Button onClick={agreeRemoveItem} color="primary" autoFocus>
              Agree
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    </div>
  );
};

export default ShoppingCartItem;
