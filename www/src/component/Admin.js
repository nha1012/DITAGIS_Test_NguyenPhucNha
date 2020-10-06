import React, { useState } from "react";
import {
  Grid,
  Typography,
  TextField,
  Button,
  Snackbar,
} from "@material-ui/core";
import MuiAlert from "@material-ui/lab/Alert";
import SaveIcon from "@material-ui/icons/Save";
import { postProduct } from "../api/restApi";
function Admin(props) {
  const [open, setOpen] = useState(false);
  const [item, setItem] = useState({
    name: "",
    price: "",
    image: "",
    detail: "",
    title: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setItem((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    postProduct(item)
      .then(() => {
        setOpen(true);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const Alert = (props) => {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
  };
  const handleCloseAlert = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  return (
    <div className="admin">
      <h2 style={{ textAlign: "center", marginBottom: 30 }}>Đăng Sản Phẩm</h2><p></p>
      <Grid
        style={{ display: "flex" }}
        container
        spacing={2}
        direction="row"
        justify="center"
      >
        <Grid item xs={2}>
          <Typography style={{ marginBottom: 30 }}>Tên sản phẩm</Typography>
          <Typography style={{ marginBottom: 30 }}>Giá</Typography>
          <Typography style={{ marginBottom: 30 }}>Tiêu đề</Typography>
          <Typography style={{ marginBottom: 30 }}>Đường dẫn ảnh</Typography>
          <Typography style={{ marginBottom: 30 }}>Mô tả sản phẩm</Typography>
        </Grid>
        <form onSubmit={(event) => handleSubmit(event)}>
          <Grid direction="column" item xs={5}>
            <Grid>
              <TextField
                style={{ width: 500, marginBottom: 12 }}
                label="Tên sản phẩm"
                id="outlined-size-small"
                variant="outlined"
                name="name"
                size="small"
                required
                onChange={(event) => handleChange(event)}
              />
            </Grid>
            <Grid item>
              <TextField
                style={{ width: 500, marginBottom: 12 }}
                label="Giá"
                id="outlined-size-small"
                variant="outlined"
                name="price"
                size="small"
                required
                onChange={(event) => handleChange(event)}
              />
            </Grid>
            <Grid item>
              <TextField
                style={{ width: 500, marginBottom: 12 }}
                label="Tiêu đề"
                id="outlined-size-small"
                variant="outlined"
                size="small"
                required
                name="title"
                onChange={(event) => handleChange(event)}
              />
            </Grid>
            <Grid item>
              <TextField
                style={{ width: 500, marginBottom: 12 }}
                label="Đường dẫn ảnh"
                id="outlined-size-small"
                variant="outlined"
                size="small"
                required
                name="image"
                onChange={(event) => handleChange(event)}
              />
            </Grid>
            <Grid item>
              <TextField
                style={{ width: 500, marginBottom: 12 }}
                label="Mô tả"
                id="outlined-size-small"
                variant="outlined"
                size="small"
                name="detail"
                required
                onChange={(event) => handleChange(event)}
              />
            </Grid>
            <Button
              type="submit"
              style={{ width: 500 }}
              variant="contained"
              color="primary"
              startIcon={<SaveIcon />}
            >
              Save
            </Button>
          </Grid>
        </form>
      </Grid>
      <Snackbar open={open} autoHideDuration={1500} onClose={handleCloseAlert}>
        <Alert onClose={handleCloseAlert} severity="success">
          Đã thêm sản phẩm thành công.
        </Alert>
      </Snackbar>
    </div>
  );
}

export default Admin;
