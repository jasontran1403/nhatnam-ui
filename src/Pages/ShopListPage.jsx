import BreadCumb from "../Components/Common/BreadCumb";
import ShopList from "../Components/Shop/ShopList";

const ShopListPage = () => {
    return (
        <div>
             <BreadCumb
                bgimg="/assets/img/bg/breadcumb.jpg"
                Title="Shop List"
            ></BreadCumb>        
            <ShopList></ShopList>     
        </div>
    );
};

export default ShopListPage;