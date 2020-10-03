import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import { useDispatch } from "react-redux";

import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";
import { AddToCart } from "../redux/action/cart";
import {formatPrice} from '../helper/formatPrice'
const useStyles = makeStyles((theme) => ({
  paper: {
    margin: "20px",
  },
  container: {
    padding: "20px",
    display: "flex",
    flexDirection: "column",
  },
  image: {
    display: "flex",
    justifyContent: "center",
  },
  price: {
    marginTop: "20px",
    color: "#dc004e",
  },
  quantity: {
    maxWidth: "80px",
    marginRight: 10,
  },
}));
const Alert = (props) => {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
};
const Details = (props) => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const detail = props.location.state;
  const [quantity, setQuantity] = useState(1);
  const [open, setOpen] = useState(false);
  const handleAddCart = () => {
    let item = detail
    item.quantity = quantity
    dispatch(AddToCart(item));
    setOpen(true);
  };
  const handleCloseAlert = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  return (
    <>
      <Paper elevation={0} className={classes.paper}>
        <Container className={classes.container}>
            <Grid className={classes.image} style={{ flexGrow: 1 }}>
              <img height="280" src={detail.image} alt={detail.name}/>
            </Grid>
            <Grid style={{ flexGrow: 1 }}>
              <div
                style={{ display: "flex", alignItems: "center", marginTop: 40 }}
              >
                <Typography variant="body1">
                  <strong>Personaje:</strong>
                </Typography>
                <Typography variant="body1">&nbsp;{detail.name}</Typography>
              </div>
              <div style={{ display: "flex", alignItems: "center" }}>
                <Typography variant="body1">
                  <strong>Title:</strong>
                </Typography>
                <Typography variant="body1">&nbsp;{detail.title}</Typography>
              </div>
              <div style={{  alignItems: "center" }}>
                <Typography variant="body1">
                  <strong>Product Detail:</strong>
                </Typography>
                <Typography variant="body1">&nbsp;{detail.details}</Typography>
              </div>
              <Typography variant="h6" className={classes.price}>
                <strong>{formatPrice(detail.price)} VND</strong>
              </Typography>
              <div
                style={{ display: "flex", alignItems: "center", marginTop: 20 }}
              >
                <TextField
                  className={classes.quantity}
                  label="Cantidad"
                  type="number"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  value={quantity}
                  onChange={(e) => {
                    setQuantity(e.target.value);
                  }}
                />
                <Button
                  variant="contained"
                  color="secondary"
                  onClick={() => {
                    handleAddCart();
                  }}
                >
                  Add To Cart
                </Button>
              </div>
            </Grid>
          <Snackbar
            open={open}
            autoHideDuration={1500}
            onClose={handleCloseAlert}
          >
            <Alert onClose={handleCloseAlert} severity="success">
              Add to cart success.
            </Alert>
          </Snackbar>
        </Container>
      </Paper>
    </>
  );
};

export default withRouter(Details);
