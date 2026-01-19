import Blog5 from "../Components/Blog/Blog5";
import BreadCumb from "../Components/Common/BreadCumb";

const BlogLeftSidebarPage = () => {
    return (
        <div>
              <BreadCumb
                bgimg="/assets/img/bg/breadcumb.jpg"
                Title="Blog Left Sidebar"
            ></BreadCumb>
            <Blog5></Blog5>            
        </div>
    );
};

export default BlogLeftSidebarPage;