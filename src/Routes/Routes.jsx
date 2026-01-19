import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home";
import AboutPage from "../Pages/AboutPage";
import Layout2 from "../Layout/Layout2";
import Home2 from "../Pages/Home2";
import Layout3 from "../Layout/Layout3";
import Home3 from "../Pages/Home3";
import AboutPage2 from "../Pages/AboutPage2";
import TeamPage from "../Pages/TeamPage";
import ChefDetailsPage1 from "../Pages/ChefDetailsPage1";
import ChefDetailsPage2 from "../Pages/ChefDetailsPage2";
import MenuPage1 from "../Pages/MenuPage1";
import MenuPage2 from "../Pages/MenuPage2";
import GalleryPage from "../Pages/GalleryPage";
import TestimonialPage from "../Pages/TestimonialPage";
import ReservationPage from "../Pages/ReservationPage";
import ServicePage from "../Pages/ServicePage";
import ServiceDetailsPage from "../Pages/ServiceDetailsPage";
import FaqPage from "../Pages/FaqPage";
import ContactPage from "../Pages/ContactPage";
import ContactPage2 from "../Pages/ContactPage2";
import BlogPage from "../Pages/BlogPage";
import BlogStandardPage from "../Pages/BlogStandardPage";
import BlogLeftSidebarPage from "../Pages/BlogLeftSidebarPage";
import BlogDetailsPage from "../Pages/BlogDetailsPage";
import ShopPage from "../Pages/ShopPage";
import ShopListPage from "../Pages/ShopListPage";
import ShopListRightPage from "../Pages/ShopListRightPage";
import ShopDetailsPage from "../Pages/ShopDetailsPage";
import CartPage from "../Pages/CartPage";
import CheckoutPage from "../Pages/CheckoutPage";
import WishlistPage from "../Pages/WishlistPage";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [ 
        {
          path: "/",
          element: <Home3></Home3>,
        },              
        {
            path: "/about",
            element: <AboutPage></AboutPage>,
        },  
        {
          path: "/about2",
          element: <AboutPage2></AboutPage2>,
        },         
        {
          path: "/chef",
          element: <TeamPage></TeamPage>,
        },
        {
          path: "/chef/chef-details",
          element: <ChefDetailsPage1></ChefDetailsPage1>,
        },        
        {
          path: "/chef/chef-details2",
          element: <ChefDetailsPage2></ChefDetailsPage2>,
        }, 
        {
          path: "/menu",
          element: <MenuPage1></MenuPage1>,
        },         
        {
          path: "/menu2",
          element: <MenuPage2></MenuPage2>,
        },  
        {
          path: "/gallery",
          element: <GalleryPage></GalleryPage>,
        },
        {
          path: "/testimonial",
          element: <TestimonialPage></TestimonialPage>,
        },
        {
          path: "/reservation",
          element: <ReservationPage></ReservationPage>,
        },
        {
          path: "/service",
          element: <ServicePage></ServicePage>,
        },
        {
          path: "/service/service-details",
          element: <ServiceDetailsPage></ServiceDetailsPage>,
        },
        {
          path: "/faq",
          element: <FaqPage></FaqPage>,
        },  
        {
          path: "/contact",
          element: <ContactPage></ContactPage>,
        },               
        {
          path: "/contact2",
          element: <ContactPage2></ContactPage2>,
        },
        {
          path: "/blog",
          element: <BlogPage></BlogPage>,
        },
        {
          path: "/blog-standard",
          element: <BlogStandardPage></BlogStandardPage>,
        },
        {
          path: "/blog-sidebar",
          element: <BlogLeftSidebarPage></BlogLeftSidebarPage>,
        },
        {
          path: "/blog/blog-details",
          element: <BlogDetailsPage></BlogDetailsPage>,
        }, 
        {
          path: "/shop",
          element: <ShopPage></ShopPage>,
        },  
        {
          path: "/shop-list",
          element: <ShopListPage></ShopListPage>,
        },  
        {
          path: "/shop-list-right",
          element: <ShopListRightPage></ShopListRightPage>,
        },  
        {
          path: "/shop/shop-details",
          element: <ShopDetailsPage></ShopDetailsPage>,
        },  
        {
          path: "/shop/cart",
          element: <CartPage></CartPage>,
        },  
        {
          path: "/shop/checkout",
          element: <CheckoutPage></CheckoutPage>,
        }, 
        {
          path: "/shop/wishlist",
          element: <WishlistPage></WishlistPage>,
        },                                                         
      ],
    }, 
  ]);