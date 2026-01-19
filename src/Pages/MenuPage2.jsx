import BestSelling4 from "../Components/BestSelling/BestSelling4";
import BreadCumb from "../Components/Common/BreadCumb";
import CtaBanner1 from "../Components/CtaBanner/CtaBanner1";
import Testimonial2 from "../Components/Testimonial/Testimonial2";

const MenuPage2 = () => {
    return (
        <div>
             <BreadCumb
                bgimg="/assets/img/bg/breadcumb.jpg"
                Title="Food Menu 2"
            ></BreadCumb>  
            <BestSelling4></BestSelling4>   
            <CtaBanner1></CtaBanner1> 
            <Testimonial2></Testimonial2>       
        </div>
    );
};

export default MenuPage2;