import "../../App.css"
import Header from '../../components/Header'
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
import { Component } from "react";
import ApiSupplierService from "../../services/supplier/ApiSupplierService";

export default class AddProductScreen extends Component {
    constructor(props) {
        super(props)
        this.state ={
            productName: '',
            description:'',
            rating: 4,
            price: '',
            discount: '',
            finalPrice: '',
            qty: '',
            categoryName: ''
        }
    }

    componentDidMount(){
        ApiSupplierService.fetchProductCategoryName(window.localStorage.getItem("user_id"))//Hard Coded Make Sure if the category id and supplier id is same
        .then((res) => {
            this.setState({categoryName: res.data.result})
        });
    }
    onChange = e =>{
        this.setState({ [e.target.name]: e.target.value });
    }

    backToOrderHistory(){
        this.props.history.push('/supplierhome');
    }

    addProduct = (e) => {
        e.preventDefault();

        const product = {
            id: this.state.id, 
            productName: this.state.productName, 
            description: this.state.description, 
            rating:this.state.rating,
            price: this.state.price, 
            discount: this.state.discount, 
            finalPrice: this.state.price - (this.state.discount * this.state.price / 100), 
            qty: this.state.qty, 
          
        };



        ApiSupplierService.addProductBySupplier(this.state.categoryName, product)
            .then(res => {
                alert("Product Added successfully")
                this.props.history.push('/supplierhome');
            });
        
    };

    render(){
        return (
            <div>
                <Navigation />
            <div className="main">
            <Header title="Add Product" />
            <div className="form">
            <div class="row mb-3">
                <label class="col-sm-2 col-form-label">Product Name</label>
                <div class="col-sm-10">
                    <input type="text" required autoComplete="off" class="form-control" name="productName" value={this.state.productName} onChange={this.onChange}/>
                </div>
            </div>
            <div class="row mb-3">
                <label class="col-sm-2 col-form-label">Product Description</label>
                <div class="col-sm-10">
                    <input type="text" class="form-control" name="description" value={this.state.description} onChange={this.onChange} />
                </div>

            </div>
            <div class="row mb-3">
                <label class="col-sm-2 col-form-label">MRP</label>
                <div class="col-sm-10">
                    <input type="number" class="form-control" name="price" value={this.state.price} onChange={this.onChange} />
                </div>
            </div>
            <div class="row mb-3">
                <label class="col-sm-2 col-form-label">Discount %</label>
                <div class="col-sm-10">
                    <input type="number" class="form-control" name="discount" value={this.state.discount} onChange={this.onChange} />
                </div>
            </div>
{/*
            <div class="row mb-3">
                <label class="col-sm-2 col-form-label">Final Price</label>
                <div class="col-sm-10">
                    <input type="number" class="form-control" name="finalPrice" value={this.state.finalPrice} onChange={this.onChange} />
                </div>
            </div>
*/}
            <div class="row mb-3">
                <label class="col-sm-2 col-form-label">Quantity</label>
                <div class="col-sm-10">
                    <input type="number" class="form-control" name="qty" value={this.state.qty} onChange={this.onChange} />
                </div>
            </div>
            {/* <div class="row mb-3">
                <label class="col-sm-2 col-form-label">Grams</label>
                <div class="col-sm-10">
                    <input type="number" class="form-control" name="grams" value={this.state.grams} onChange={this.onChange} />
                </div>
            </div> */}
            <div class="row mb-3">
                <label class="col-sm-2 col-form-label">Category name</label>
                <div class="col-sm-10">
                    <input type="text" class="form-control" name="CategoryName" value={this.state.categoryName} readOnly/>
                </div>
            </div>
            <div className="mb-3">
                <div className="float-start" >
                <button className="btn4" onClick={() => this.backToOrderHistory()}>Home</button>
                </div>
                <button className="btn4 float-end" onClick={this.addProduct}>
                Add Product
                </button>
                <br></br>

            </div>
            </div>
        </div>
        </div>
        );
    }
}