import ChefDetails1 from "../Components/ChefDetails/ChefDetails1";
import BreadCumb from "../Components/Common/BreadCumb";
import Team5 from "../Components/Team/Team5";

const ChefDetailsPage1 = () => {
    return (
        <div>
             <BreadCumb
                bgimg="/assets/img/bg/breadcumb.jpg"
                Title="Chef Details 1"
            ></BreadCumb>
            <ChefDetails1></ChefDetails1> 
            <Team5></Team5>            
        </div>
    );
};

export default ChefDetailsPage1;