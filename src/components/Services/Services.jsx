import { Link } from 'react-router-dom';
import './services.scss';

const Services = () => {
    return (
        <div className="services">
            <h2>FEATURES</h2>
            <h1>Our Features & Services</h1>
            <div className="container">
                <div className="wrapper">
                    <img src="/img/communications.jpg" alt="" />
                    <h4>Communications</h4>
                    <p>
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Pariatur.
                    </p>
                    <Link to="communications">
                        <button className="btn">MORE</button>
                    </Link>
                </div>
                <div className="wrapper">
                    <img src="/img/ispirated-design.jpg" alt="" />
                    <h4>Inspired Design</h4>
                    <p>
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Pariatur.
                    </p>
                    <Link to="inspired-design">
                        <button className="btn">MORE</button>
                    </Link>
                </div>
                <div className="wrapper">
                    <img src="/img/happy-customers.jpg" alt="" />
                    <h4>Happy Customers</h4>
                    <p>
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Pariatur.
                    </p>
                    <Link to="happy-customers">
                        <button className="btn">MORE</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Services;
