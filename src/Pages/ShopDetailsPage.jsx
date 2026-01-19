import BestSelling1 from "../Components/BestSelling/BestSelling1";
import BreadCumb from "../Components/Common/BreadCumb";
import ShopDetails from "../Components/ShopDetails/ShopDetails";

const ShopDetailsPage = () => {
    return (
        <div>
             <BreadCumb
                bgimg="/assets/img/bg/breadcumb.jpg"
                Title="Shop Details"
            ></BreadCumb>    
            <ShopDetails></ShopDetails>      
            <BestSelling1></BestSelling1>   
        </div>
    );
};

export default ShopDetailsPage;