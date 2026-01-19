import ChefDetails2 from "../Components/ChefDetails/ChefDetails2";
import BreadCumb from "../Components/Common/BreadCumb";
import Team5 from "../Components/Team/Team5";

const ChefDetailsPage2 = () => {
    return (
        <div>
             <BreadCumb
                bgimg="/assets/img/bg/breadcumb.jpg"
                Title="Chef Details 2"
            ></BreadCumb> 
            <ChefDetails2></ChefDetails2> 
            <Team5></Team5>          
        </div>
    );
};

export default ChefDetailsPage2;