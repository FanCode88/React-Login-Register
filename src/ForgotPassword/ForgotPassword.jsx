import { Link } from 'react-router-dom';
import './forgotPassword.scss';
import { MdEmail } from 'react-icons/md';

const ForgotPassword = () => {
    return (
        <div className="forgotPassword">
            <div className="container">
                <Link to="/">
                    <div className="close">
                        <div className="closeInput">x</div>
                    </div>
                </Link>
                <h2>Forgot Password</h2>
                <p>Enter your email address to reset your password.</p>
                <form>
                    <div className="inputBox">
                        <input type="email" placeholder="Email" required />
                        <MdEmail className="iconEmail" />
                    </div>
                    <button type="submit">Reset Password</button>
                </form>
                <p>
                    <Link to="/login" className="signLogin">
                        Back to <b className="bold">Sign In</b>{' '}
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default ForgotPassword;
