import BreadCumb from "../Components/Common/BreadCumb";
import CtaBanner4 from "../Components/CtaBanner/CtaBanner4";
import Gallery1 from "../Components/Gallery/Gallery1";
import Service1 from "../Components/Service/Service1";

const ServicePage = () => {
    return (
        <div>
             <BreadCumb
                bgimg="/assets/img/bg/breadcumb.jpg"
                Title="Services"
            ></BreadCumb> 
            <Service1></Service1>  
             <CtaBanner4></CtaBanner4>
            <Gallery1></Gallery1>        
        </div>
    );
};

export default ServicePage;