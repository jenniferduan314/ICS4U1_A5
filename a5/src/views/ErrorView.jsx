import { useNavigate } from "react-router";
import "./ErrorView.css";

function ErrorView() {
    const navigate = useNavigate();

    return (
        <div className="error-container">
            <h1 className="error-title">404 ERROR</h1>
            <h2 className="error-subtitle">Page Not Found</h2>
            <p className="error-message">
                It looks page you're looking for doesn't exist or has been moved.
                
            </p>
            
            <button 
                className="error-button" 
                onClick={() => navigate("/")}
            >
                Return Home
            </button>
        </div>
    )
}

export default ErrorView;