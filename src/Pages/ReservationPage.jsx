import BreadCumb from "../Components/Common/BreadCumb";
import Reservation from "../Components/Reservation/Reservation";
import Team5 from "../Components/Team/Team5";

const ReservationPage = () => {
    return (
        <div>
            <BreadCumb
                bgimg="/assets/img/bg/breadcumb.jpg"
                Title="Reservation"
            ></BreadCumb>      
            <Reservation></Reservation>  
            <Team5></Team5>     
        </div>
    );
};

export default ReservationPage;