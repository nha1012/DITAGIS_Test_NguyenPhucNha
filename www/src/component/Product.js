import React from "react";
import { withRouter } from 'react-router-dom'
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import Button from "@material-ui/core/Button";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    width: 200,
    margin: 8,
    display: "flex",
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
  const classes = useStyles();
  return (
    <div className="col-sm-2">
      <Card className={classes.root}>
        <CardActionArea
          className={classes.info}
          onClick={_ => {
            props.history.push({
                pathname: `product/${props.details.name.trim()}_${props.details.id.trim()}`,
                state: props.details
            })
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
              {props.details.price}
            </Typography>
          </div>
        </CardActionArea>
        <Button
          color="primary"
          size="small"
          className={classes.button}
          startIcon={<AddShoppingCartIcon />}
        >
          Add to cart
        </Button>

        <Snackbar autoHideDuration={1500}>
          <Alert severity="success">El producto fue agregado al carro.</Alert>
        </Snackbar>
      </Card>
    </div>
  );
};
export default withRouter(Product);
