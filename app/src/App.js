import './App.css';
import {BrowserRouter as Router, Redirect, Route, Switch} from 'react-router-dom'
import HomeScreen from './screens/common/HomeScreen';
import CreateAccountScreen from './screens/customer/CreateAccountScreen';
import LoginScreen from './screens/common/LoginScreen';
import AboutUsScreen from './screens/common/AboutUsScreen';
import ContactUsScreen from './screens/common/ContactUsScreen';
import TermAndConditionScreen from './screens/common/TermAndConditionScreen';
import FAQSScreen from './screens/common/FAQSScreen';
import PrivacyPolicyScreen from './screens/common/PrivacyPolicyScreen';
import ProductCategoryScreen from './screens/customer/ProductCategoryScreen';
import CartScreen from './screens/customer/CartScreen';
import PaymentScreen from './screens/customer/PaymentScreen';
import LogoutScreen from './screens/common/LogoutScreen';
import ProductDetailsScreen from './screens/customer/ProductDetailsScreen';
import ProfileScreen from './screens/common/ProfileScreen';
import EditProfileScreen from './screens/common/EditProfileScreen';
import ChangeAddressScreen from './screens/common/ChangeAddressScreen';
import OrderHistoryScreen from './screens/common/OrderHistoryScreen';
import ChangePasswordScreen from './screens/common/ChangePassword';
import OrderDetailsPageScreen from './screens/common/OrderDetailsPage';
// import PendingOrdersScreen from './screens/delivery_boy/PendingOrdersScreen';
// import OrderDetailsForPendingScreen from './screens/delivery_boy/OrderDetailsForPending';
import PendingOrdersListScreen from './screens/admin/PendingOrdersListScreen';
import AdminHomeScreen from './screens/admin/AdminHomeScreen';
import AdminOrdersDetailsForDeliveredScreen from './screens/admin/AdminOrdersDetailsForDelivered';
import AdminOrdersDetailsForPendingScreen from './screens/admin/AdminOrderDetailsForPending';
import ShowSupplierListScreen from './screens/admin/ShowSupplierList';
import AddSupplierScreen from './screens/admin/AddSupplierScreen';
import SupplierHomeScreen from './screens/supplier/SupplierHomeScreen';
import AddProductScreen from './screens/supplier/AddProductScreen';
import ShowProductsScreen from './screens/supplier/ShowProductsScreen';
import UpdateProductScreen from './screens/supplier/UpdateProductScreen';
import OrderAddressScreen from './screens/customer/OrderAddressScreen';
import ShowOrderAddress from './screens/customer/ShowOrderAddress';
import AddProductFromSupplierScreen from './screens/admin/AddProductFromSupplierScreen';
import AddAddressScreen from './screens/admin/AddAdressScreen';
import SupplierAddress from './screens/admin/SupplierAddressScreen';
import ShowProductsBySupplierScreen from './screens/admin/ShowProductsBySupplierScreen'
import Footer from "./components/Footer";
import Store from './screens/common/Store';

function App() {
  return (
    <div className="page-container">
    <div className="content-wrap">

    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={()=> (<Redirect to ='/home' />)}/>
          <Route path="/home" component={HomeScreen}/>
          <Route path="/create-account" component={CreateAccountScreen}/>
          <Route path="/login" component={LoginScreen}/>
          <Route path="/aboutus" component={AboutUsScreen}/>
          <Route path="/contactus" component={ContactUsScreen}/>
          <Route path="/termsnconditions" component={TermAndConditionScreen}/>
          <Route path="/faqs" component={FAQSScreen}/>
          <Route path="/privacypolicy" component={PrivacyPolicyScreen}/>
          <Route path="/product-category" component={ProductCategoryScreen}/>
          <Route path="/cart" component={CartScreen}/> 
          <Route path="/payment" component={PaymentScreen}/>
          <Route path="/logout" component={LogoutScreen}/>
          <Route path="/product-details" component={ProductDetailsScreen}/>
          <Route path="/myaccount/profile" component={ProfileScreen}/>
          <Route path="/myaccount/editprofile" component={EditProfileScreen}/>
          <Route path="/myaccount/change-password" component={ChangePasswordScreen}/>
          <Route path="/myaccount/changeaddress" component={ChangeAddressScreen}/>
          <Route path="/myaccount/orderhistory" component={OrderHistoryScreen}/>
          {/* <Route path="/show-search-product" component={ShowSearchProductScreen}/> */}
          <Route path="/orderDetailsPage" component={OrderDetailsPageScreen}/>
          {/* <Route path="/deliveryboyhome" component={DeliveryBoyHomeScreen}/> */}
          {/* <Route path="/pendingorderfordb" component={PendingOrdersScreen}/> */}
          {/* <Route path="/deliveredorderfordb" component={DeliveredOrdersScreen}/> */}
          {/* <Route path="/orderdetailspending" component={OrderDetailsForPendingScreen}/> */}
          {/* <Route path="/orderdetailsdelivered" component={OrdersDetailsForDeliveredScreen}/> */}
          <Route path="/pendingorderforadmin" component={PendingOrdersListScreen}/>
          {/* <Route path="/deliveredorderforadmin" component={DeliverdOrdersListScreen}/> */}
          <Route path="/adminhome" component={AdminHomeScreen}/>
          <Route path="/adminorderdetailsdelivered" component={AdminOrdersDetailsForDeliveredScreen}/>
          <Route path="/adminorderdetailspending" component={AdminOrdersDetailsForPendingScreen}/>
          <Route path="/showsupplier" component={ShowSupplierListScreen}/>
          <Route path="/addproductfromsupplier/:id" component={AddProductFromSupplierScreen} />
          <Route path="/addSupplier" component={AddSupplierScreen}/>
          {/* <Route path="/showdeliveryboy" component={ShowDeliveryBoyScreen}/> */}
          {/* <Route path="/adddeliveryboy" component={AddDeliveryBoy}/>
          <Route path="/addressdetails1" component={AddressDetailsScreen1}/>
          <Route path="/addressdetails2" component={AddressDetailsScreen2}/> */}
          <Route path="/supplierhome" component={SupplierHomeScreen}/>
          <Route path="/addproduct" component={AddProductScreen}/>
          <Route path="/supplier/showproducts" component={ShowProductsScreen}/>
          <Route path="/supplier/updateproduct/:id" component={UpdateProductScreen}/>
          <Route path="/orderaddress" component={OrderAddressScreen}/>
          <Route path="/showorderaddress" component={ShowOrderAddress}/>
          <Route path="/addaddress/:id" component={AddAddressScreen}/>
          <Route path="/supplieraddress/:id" component={SupplierAddress} />
          <Route path="/supplier/showproductsbysupplier/:id" component={ShowProductsBySupplierScreen}/>
          <Route path="/store" component={Store}/>
        </Switch>
      </div>    
    </Router>
    </div>
    <Footer />
    </div>
  );
}

export default App;
