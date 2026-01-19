import Blog3 from "../Components/Blog/Blog3";
import BreadCumb from "../Components/Common/BreadCumb";

const BlogPage = () => {
    return (
        <div>
             <BreadCumb
                bgimg="/assets/img/bg/breadcumb.jpg"
                Title="Blog"
            ></BreadCumb>   
            <Blog3></Blog3>         
        </div>
    );
};

export default BlogPage;