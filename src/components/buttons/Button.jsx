import { useAuth0 } from "@auth0/auth0-react";

const Button = ({name}) => {
    const { loginWithRedirect, isAuthenticated } = useAuth0();
    if (!isAuthenticated) {
        return (
            <div className="center-button">
            <button className="btn btn-primary loginBtn"
            onClick={() => loginWithRedirect()}>
            Log In</button>
            </div>
        );
    }

    propTypes: {
        name: PropTypes.string.isRequired,
    };      
};
 
export default Button;