import About4 from "../Components/About/About4";
import BreadCumb from "../Components/Common/BreadCumb";
import CtaBanner1 from "../Components/CtaBanner/CtaBanner1";
import CtaBanner3 from "../Components/CtaBanner/CtaBanner3";
import Gallery1 from "../Components/Gallery/Gallery1";
import Offer2 from "../Components/Offer/Offer2";
import Team3 from "../Components/Team/Team3";
import Testimonial2 from "../Components/Testimonial/Testimonial2";

const AboutPage = () => {
    return (
        <div>
            <BreadCumb
                bgimg="/assets/img/bg/breadcumb.jpg"
                Title="About Us"
            ></BreadCumb>
            <Offer2></Offer2>
            <About4></About4>
            <CtaBanner1></CtaBanner1>
            <Team3></Team3>
            <CtaBanner3></CtaBanner3>
            <Testimonial2></Testimonial2>
            <Gallery1></Gallery1>
        </div>
    );
};

export default AboutPage;