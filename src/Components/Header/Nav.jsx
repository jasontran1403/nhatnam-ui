import DropDown from './DropDown';
import { Link } from 'react-router-dom';

export default function Nav({ setMobileToggle }) {
  return (
    <ul className="cs_nav_list fw-medium">
      <li className="menu-item-has-children">
        <Link to="/">Home</Link>
        <DropDown>
          <ul>
            <li>
              <Link to="/" onClick={() => setMobileToggle(false)}>
              Home Version 1
              </Link>
            </li>
            <li>
              <Link to="/home2" onClick={() => setMobileToggle(false)}>
              Home Version 2
              </Link>
            </li>
            <li>
              <Link to="/home3" onClick={() => setMobileToggle(false)}>
                Home Version 3
              </Link>
            </li>            
          </ul>
        </DropDown>
      </li>
      <li className="menu-item-has-children">
        <Link to="#">Pages</Link>
        <DropDown>
          <ul>
          <li>
              <Link to="/about" onClick={() => setMobileToggle(false)}>
                About Us 1
              </Link>
            </li>
            <li>
              <Link to="/about2" onClick={() => setMobileToggle(false)}>
                About Us 2
              </Link>
            </li>            
            <li>
              <Link to="/chef" onClick={() => setMobileToggle(false)}>
              Chef
              </Link>
            </li>            
            <li>
              <Link to="/chef/chef-details" onClick={() => setMobileToggle(false)}>
              Chef Details 1
              </Link>
            </li> 
            <li>
              <Link to="/chef/chef-details2" onClick={() => setMobileToggle(false)}>
              Chef Details 2
              </Link>
            </li>                       
            <li>
              <Link to="/gallery" onClick={() => setMobileToggle(false)}>
              Gallery
              </Link>
            </li> 
            <li>
              <Link to="/service" onClick={() => setMobileToggle(false)}>
              Services
              </Link>
            </li>
            <li>
              <Link to="/service/service-details" onClick={() => setMobileToggle(false)}>
              Service Details
              </Link>
            </li>                        
            <li>
              <Link to="/testimonial" onClick={() => setMobileToggle(false)}>
              Testimonials
              </Link>
            </li>  
            <li>
              <Link to="/reservation" onClick={() => setMobileToggle(false)}>
              Reservation
              </Link>
            </li>                      
            <li>
              <Link to="/faq" onClick={() => setMobileToggle(false)}>
              Faq
              </Link>
            </li> 
                      
          </ul>
        </DropDown>
      </li>  

      <li className="menu-item-has-children">
        <Link to="/project" onClick={() => setMobileToggle(false)}>
        Food Menu
        </Link>
        <DropDown>
          <ul>
            <li>
              <Link to="/menu" onClick={() => setMobileToggle(false)}>
              Food Menu 1
              </Link>
            </li>          
            <li>
              <Link to="/menu2" onClick={() => setMobileToggle(false)}>
              Food Menu 2
              </Link>
            </li>
          </ul>
        </DropDown>
      </li> 
      
      <li className="menu-item-has-children">
        <Link to="/blog" onClick={() => setMobileToggle(false)}>
          Blog
        </Link>
        <DropDown>
          <ul>
            <li>
              <Link to="/blog" onClick={() => setMobileToggle(false)}>
                Blog
              </Link>
            </li>
            <li>
              <Link to="/blog-standard" onClick={() => setMobileToggle(false)}>
                Blog Standard
              </Link>
            </li>            
            <li>
              <Link to="/blog-sidebar" onClick={() => setMobileToggle(false)}>
                Blog With Sidebar
              </Link>
            </li>                         
            <li>
              <Link
                to="/blog/blog-details"
                onClick={() => setMobileToggle(false)}
              >
                Blog Details
              </Link>
            </li>
          </ul>
        </DropDown>
      </li>
      <li className="menu-item-has-children">
        <Link to="/shop" onClick={() => setMobileToggle(false)}>
        Shop
        </Link>
        <DropDown>
          <ul>
            <li>
              <Link to="/shop" onClick={() => setMobileToggle(false)}>
              Shop
              </Link>
            </li>
            <li>
              <Link to="/shop-list" onClick={() => setMobileToggle(false)}>
                Shop List
              </Link>
            </li>   
            <li>
              <Link to="/shop-list-right" onClick={() => setMobileToggle(false)}>
                Shop List Right Sidebar
              </Link>
            </li>   
            <li>
              <Link to="/shop/shop-details" onClick={() => setMobileToggle(false)}>
                Shop Details
              </Link>
            </li>  
            <li>
              <Link to="/shop/cart" onClick={() => setMobileToggle(false)}>
                Cart
              </Link>
            </li>  
            <li>
              <Link to="/shop/checkout" onClick={() => setMobileToggle(false)}>
                Checkout
              </Link>
            </li>   
            <li>
              <Link to="/shop/wishlist" onClick={() => setMobileToggle(false)}>
              Wishlist
              </Link>
            </li>                                                                             
          </ul>
        </DropDown>
      </li>
      <li className="menu-item-has-children">
        <Link to="/contact" onClick={() => setMobileToggle(false)}>
        Contact
        </Link>
        <DropDown>
          <ul>
            <li>
              <Link to="/contact" onClick={() => setMobileToggle(false)}>
              Contact Us 1
              </Link>
            </li>
            <li>
              <Link to="/contact2" onClick={() => setMobileToggle(false)}>
                Contact Us 2
              </Link>
            </li>                         
          </ul>
        </DropDown>
      </li>

    </ul>
  );
}
