import BreadCumb from "../Components/Common/BreadCumb";
import ShopListRight from "../Components/Shop/ShopListRight";

const ShopListRightPage = () => {
    return (
        <div>
              <BreadCumb
                bgimg="/assets/img/bg/breadcumb.jpg"
                Title="Shop List Right Sidebar"
            ></BreadCumb>      
            <ShopListRight></ShopListRight>       
        </div>
    );
};

export default ShopListRightPage;