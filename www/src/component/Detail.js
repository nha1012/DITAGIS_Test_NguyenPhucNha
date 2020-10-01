import React, { useEffect, useState } from "react";
import { withRouter } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

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

const useStyles = makeStyles((theme) => ({
  paper: {
    margin: "20px",
  },
  container: {
    padding: "20px",
    display: "flex",
    flexDirection: "row",
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
const Details = (props) => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const detail = props.location.state;
  const [quantity, setQuantity] = useState(1);
  const handleAddCart = () => {
    dispatch(AddToCart({items:"test"}));
  };
  return (
    <Paper elevation={0} className={classes.paper}>
      <Container className={classes.container}>
        <Grid container style={{ flexGrow: 1, width: "100%" }} spacing={2}>
          <Grid item className={classes.image} style={{ flexGrow: 1 }}>
            <img height="280" src={detail.image} />
          </Grid>
          <Grid item style={{ flexGrow: 1 }}>
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
            <div style={{ display: "flex", alignItems: "center" }}>
              <Typography variant="body1">
                <strong>Product Detail:</strong>
              </Typography>
              <Typography variant="body1">&nbsp;{detail.details}</Typography>
            </div>
            <Typography variant="h6" className={classes.price}>
              <strong>{detail.price} VND</strong>
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
                onClick={(e) => {
                  handleAddCart();
                }}
              >
                Add To Cart
              </Button>
            </div>
          </Grid>
        </Grid>
      </Container>
    </Paper>
  );
};

export default withRouter(Details);
