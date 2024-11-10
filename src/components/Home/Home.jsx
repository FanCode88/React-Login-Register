import { Link } from 'react-router-dom';
import './home.scss';

const Home = () => {
    return (
        <div className="home">
            <div className="homeContainer">
                <h1>Welcome to our page!</h1>
                <div className="wrapper">
                    <div className="formboxLogin">
                        <Link to="/login">
                            <button>Login</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
