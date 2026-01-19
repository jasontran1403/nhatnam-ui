import Blog4 from "../Components/Blog/Blog4";
import BreadCumb from "../Components/Common/BreadCumb";

const BlogStandardPage = () => {
    return (
        <div>
             <BreadCumb
                bgimg="/assets/img/bg/breadcumb.jpg"
                Title="Blog Standard"
            ></BreadCumb>   
            <Blog4></Blog4>          
        </div>
    );
};

export default BlogStandardPage;