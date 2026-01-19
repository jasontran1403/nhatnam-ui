import BreadCumb from "../Components/Common/BreadCumb";
import FoodItem4 from "../Components/FoodItem/FoodItem4";
import Gallery1 from "../Components/Gallery/Gallery1";
import Timer2 from "../Components/Timer/Timer2";

const MenuPage1 = () => {
    return (
        <div>
             <BreadCumb
                bgimg="/assets/img/bg/breadcumb.jpg"
                Title="Food Menu 1"
            ></BreadCumb>   
            <FoodItem4></FoodItem4>
            <Timer2></Timer2>  
            <Gallery1></Gallery1>  
        </div>
    );
};

export default MenuPage1;