import { Outlet } from 'react-router-dom';
import Header1 from '../Components/Header/Header1';
import Footer1 from '../Components/Footer/Footer1';
import Header3 from '../Components/Header/Header3';
import Header2 from '../Components/Header/Header2';

const Main = () => {
    return (
        <div className='main-page-area bg-color2'>
            <Header3></Header3>
            <Outlet></Outlet>
            <Footer1></Footer1>
        </div>
    );
};

export default Main;