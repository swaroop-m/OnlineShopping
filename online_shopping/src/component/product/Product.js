import React, { Component } from "react";
import { Card, Form, Button, Col, InputGroup, Image } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSave, faPlusSquare, faUndo, faList, faEdit } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import AddProductSuccessToast from "./AddProductSuccessToast";

class Product extends Component {
  constructor(props) {
    super(props);
    this.state = this.initialState;
    this.state.show = false;        // this show vaiable is used for showing the toast, while adding, updating and deleting produts.
    this.state.saving = 0;
    this.state.method = "post";
    this.state.isValid = false;
    this.productChange = this.productChange.bind(this);
    this.submitProduct = this.submitProduct.bind(this);
  }
  //Setting the initial state to empty string.
  initialState = {
    productId: "", pictureUrl: "", productName: "", dimension: "", specification: "", manufacturer: "", quantity: 0, price: 0.0, categoryName: "",
    quantityError: "", priceError: "", imageError: ""
  };

  // code for validation of the form
  validate = () => {
    if (!Number.isInteger(parseInt(this.state.quantity))) {
      this.state.quantityError = "Quantity must be an Integer";
    }
    if (isNaN(this.state.quantity)) {
      this.state.quantityError = "Entered quantity is not a Number";
    }
    if (this.state.quantity < 0) {
      this.state.quantityError = "Quantity cannot be Negative";
    }
    if (!this.state.quantity) {
      this.state.quantityError = "Quantity cannot be Empty";
    }

    if (!(this.state.pictureUrl.includes(".com") &&
         this.state.pictureUrl.includes("/"))) {
      this.state.imageError = "Invalid Image url";
    }

    if (!this.state.price) {
      this.state.priceError = "Price cannot be Empty";
    }
    if (this.state.price < 0) {
      this.state.priceError = "Price cannot be Negative";
    }
    if (isNaN(this.state.price)) {
      this.state.priceError = "Entered price is not a Number";
    }

    if (this.state.quantityError ||
        this.state.priceError ||
        this.state.imageError ||
        this.state.priceError ) {
      return false;
    }

    return true;
  };

  // code to handle submit
  submitProduct = (event) => {
    event.preventDefault();
    this.state.isValid = this.validate();
    // const isValid = true;
    console.log(this.state);
    if (this.state.isValid) {
      this.setState({ saving: 1, show: true });
      const product = {
        pictureUrl: this.state.pictureUrl,
        productName: this.state.productName,
        dimension: this.state.dimension,
        specification: this.state.specification,
        manufacturer: this.state.manufacturer,
        quantity: this.state.quantity,
        price: this.state.price,
        category: {
          categoryName: this.state.categoryName,
        },
      };
      setTimeout(() => {
        axios
          .post("http://localhost:9000/api/saveproduct", product)
          .then((response) => {
            if (response.data != null) {
              this.setState({ show: true, saving: 1, method: "post" });
              setTimeout(() => this.setState({ show: false }), 3000);
            } else {
              this.setState({ show: false });
            }
            this.setState(this.initialState);
          })
          .catch((error) => {
            console.log(error.response.data.message);
            alert(error.response.data.message);
          });
      }, 500);
    } else {
      this.setState({ saving: 0 });
    }
  };
//code to update a product
  updateProduct = (event) => {
    event.preventDefault();
    const product = {
      productId: this.state.productId,
      pictureUrl: this.state.pictureUrl,
      productName: this.state.productName,
      dimension: this.state.dimension,
      specification: this.state.specification,
      manufacturer: this.state.manufacturer,
      quantity: this.state.quantity,
      price: this.state.price,
      category: {
        categoryName: this.state.categoryName,
      },
    };

    axios
      .put("http://localhost:9000/api/updateproduct", product)
      .then((response) => {
        if (response.data != null) {
          this.setState({ show: true, method: "put" });
          setTimeout(() => this.setState({ show: false }), 3000);
          setTimeout(() => this.productList(), 3000);
        } else {
          this.setState({ show: false });
        }
      });
  };

  resetProduct = () => {
    this.setState(() => this.initialState);
  };

  productChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
      quantityError: "",
      priceError: "",
      imageError: "",
    });
  };

  // using history to navigate to list products page
  productList = () => {
    return this.props.history.push("/listproducts");
  };

  // lifecycle method used to fetch details of product as soon as page gets loaded
  componentDidMount() {
    const productId = +this.props.match.params.productId;
    if (productId) {
      this.findProductById(productId);
    }
  }

  findProductById = (productId) => {
    axios
      .get("http://localhost:9000/api/viewproduct/" + productId)
      .then((response) => {
        if (response.data != null) {
          this.setState({
            productId: response.data.productId,
            pictureUrl: response.data.pictureUrl,
            productName: response.data.productName,
            dimension: response.data.dimension,
            specification: response.data.specification,
            manufacturer: response.data.manufacturer,
            quantity: response.data.quantity,
            price: response.data.price,
            categoryName: response.data.category?.categoryName,
          });
        }
      })
      .catch((error) => {
        console.error("Error - " + error);
      });
  };

  render() {
    const {
      pictureUrl,
      productName,
      categoryName,
      dimension,
      specification,
      manufacturer,
      quantity,
      price,
    } = this.state;
    return (
      <div className="container">
        <div style={{ display: this.state.show ? "block" : "none" }}>
          <AddProductSuccessToast
            show={this.state.show}
            message={
              this.state.method === "put"
                ? "Product Updated Successfully."
                : "Product Saved Successfully."
            }
            type={"success"}
          />
        </div>
        <Card className="border bg-light">
          <Card.Header>
            <FontAwesomeIcon
              icon={this.state.productId ? faEdit : faPlusSquare}
            />{" "}
            {this.state.productId ? "Update Product" : "Add New Product"}
          </Card.Header>
          <Form
            noValidate
            validated={this.state.isValid}
            onReset={this.resetProduct}
            onSubmit={
              this.state.productId ? this.updateProduct : this.submitProduct
            }
            id="productFormId"
          >
            <Card.Body>
              <Form.Row>
                <Form.Group
                  className="col-md-6 col-sm-12"
                  controlId="formGridCoverPhotoURL"
                >
                  <Form.Label>Product Photo URL</Form.Label>
                  <InputGroup>
                    <Form.Control
                      required
                      type="test"
                      name="pictureUrl"
                      value={pictureUrl}
                      onChange={this.productChange}
                      placeholder="Enter Product Cover Photo URL"
                    />
                  </InputGroup>
                  <div style={{ fontSize: 12, color: "red", zIndex: "3" }}>
                    {this.state.imageError}
                  </div>
                </Form.Group>
                <Form.Group
                  className="col-md-6 col-sm-12"
                  controlId="formGridName"
                >
                  <Form.Label>Product Name</Form.Label>
                  <Form.Control
                    required
                    type="test"
                    name="productName"
                    value={productName}
                    onChange={this.productChange}
                    // className={"bg-dark text-white"}
                    placeholder="Enter Product Name"
                  />
                </Form.Group>
              </Form.Row>
              <Form.Row>
                <Form.Group
                  className="col-md-6 col-sm-12"
                  controlId="formGridCategory"
                >
                  <Form.Label>Category</Form.Label>
                  <Form.Control
                    type="test"
                    name="categoryName"
                    value={categoryName}
                    onChange={this.productChange}
                    placeholder="Enter Product Catgory"
                  />
                </Form.Group>
                <Form.Group
                  className="col-md-6 col-sm-12"
                  controlId="formGridDimension"
                >
                  <Form.Label>Dimension</Form.Label>
                  <Form.Control
                    type="test"
                    name="dimension"
                    value={dimension}
                    onChange={this.productChange}
                    placeholder="Enter Product Dimension"
                  />
                </Form.Group>
              </Form.Row>
              <Form.Row>
                <Form.Group
                  className="col-md-6 col-sm-12"
                  controlId="formGridSpecification"
                >
                  <Form.Label>Specification</Form.Label>
                  <Form.Control
                    type="test"
                    name="specification"
                    value={specification}
                    onChange={this.productChange}
                    placeholder="Enter Product specification"
                  />
                </Form.Group>
                <Form.Group
                  className="col-md-6 col-sm-12"
                  controlId="formGridManufacturer"
                >
                  <Form.Label>Manufacturer</Form.Label>
                  <Form.Control
                    type="test"
                    name="manufacturer"
                    value={manufacturer}
                    onChange={this.productChange}
                    placeholder="Enter Product manufacturer"
                  />
                </Form.Group>
              </Form.Row>
              <Form.Row>
                <Form.Group
                  className="col-md-6 col-sm-12"
                  controlId="formGridQuantity"
                >
                  <Form.Label>Quantity</Form.Label>
                  <Form.Control
                    required
                    type="test"
                    name="quantity"
                    value={quantity}
                    onChange={this.productChange}
                    placeholder="Enter Product quantity"
                  />
                  <Form.Control.Feedback type="invalid">
                    error : {this.state.quantityError}
                  </Form.Control.Feedback>
                  <div style={{ fontSize: 12, color: "red", zIndex: "3" }}>
                    {this.state.quantityError}
                  </div>
                </Form.Group>
                <Form.Group
                  className="col-md-6 col-sm-12"
                  controlId="formGridPrice"
                >
                  <Form.Label>Price</Form.Label>
                  <Form.Control
                    required
                    type="test"
                    name="price"
                    value={price}
                    onChange={this.productChange}
                    placeholder="Enter Product price"
                  />
                  <div style={{ fontSize: 12, color: "red", zIndex: "3" }}>
                    {this.state.priceError}
                  </div>
                </Form.Group>
              </Form.Row>
            </Card.Body>
            <Card.Footer style={{ textAlign: "right" }}>
              <Button
                size="sm"
                variant="success"
                type="submit"
                disabled={this.state.saving === 1}
              >
                <FontAwesomeIcon icon={faSave} />{" "}
                {this.state.productId ? "Update" : "Save"}
              </Button>{" "}
              <Button size="sm" variant="info" type="reset">
                <FontAwesomeIcon icon={faUndo} /> Reset
              </Button>{" "}
              <Button
                size="sm"
                variant="info"
                type="button"
                onClick={this.productList.bind()}
              >
                <FontAwesomeIcon icon={faList} /> Product List
              </Button>
            </Card.Footer>
          </Form>
        </Card>
        <hr />
        <br />
      </div>
    );
  }
}

export default Product;
