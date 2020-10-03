import React,{useState} from "react";
import { withRouter } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import Button from "@material-ui/core/Button";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";
import { AddToCart } from "../redux/action/cart";
import { useDispatch } from "react-redux";
import {formatPrice} from '../helper/formatPrice'
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    width: 200,
    margin: 8,
    flexDirection: "column",
    justifyContent: "space-between",
  },
  info: {
    padding: 10,
  },
  content: {
    padding: 0,
    paddingTop: 16,
    paddingBottom: "0px",
  },
  cover: {
    height: 180,
    width: "auto",
    backgroundSize: "contain",
  },
  button: {
    marginTop: "10px",
    paddingBottom: 15,
  },
  title: {
    fontSize: "16px",
    lineHeight: "18px",
  },
  subtitle: {
    fontSize: "13px",
    lineHeight: "15px",
  },
  price: {
    marginTop: "5px",
    color: "#dc004e",
  },
}));

const Alert = (props) => {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
};

const Product = (props) => {
  const dispatch = useDispatch();
  const [open, setOpen] = useState()
  const classes = useStyles();

  const addCartHandle = () => {
    let itemCart = props.details
    itemCart.quantity = 1
    dispatch(AddToCart(itemCart))
    setOpen(true)
  };
  const handleCloseAlert = (event, reason) => {
    if (reason === 'clickaway') {
        return;
    }
    setOpen(false);
};

  return (
    <div className="col-lg-2 col-sm-1 col-md-4 col-xs-6">
      <Card className={classes.root}>
        <CardActionArea
          className={classes.info}
          onClick={(_) => {
            props.history.push({
              pathname: `product/${props.details.name.trim()}_${props.details.id.trim()}`,
              state: props.details,
            });
          }}
        >
          <CardMedia
            className={classes.cover}
            title="picture"
            image={props.details.image}
          />
          <div className={classes.content}>
            <Typography className={classes.title}>
              <strong>{props.details.name}</strong>
            </Typography>
            <Typography className={classes.subtitle}>
              {props.details.title}
            </Typography>
            <Typography className={classes.price}>
              {formatPrice(props.details.price)} VND
            </Typography>
          </div>
        </CardActionArea>
        <Button
          color="primary"
          size="small"
          className={classes.button}
          startIcon={<AddShoppingCartIcon />}
          onClick={() => addCartHandle()}
        >
          Add to cart
        </Button>

         <Snackbar open={open} autoHideDuration={1500} onClose={handleCloseAlert}>
                <Alert onClose={handleCloseAlert} severity="success">
                    Add to cart success.
                </Alert>
          </Snackbar>
      </Card>
    </div>
  );
};
export default withRouter(Product);
