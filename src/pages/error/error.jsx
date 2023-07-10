import { useNavigate } from "react-router-dom";
import "./error.css"

export function Error() {
    const navigate = useNavigate()
    return (
        <div className="error-container">
            <h1 className="error-name" >Error page not found</h1>
            <h2 onClick={() => navigate("/")}>Go Home ▶ </h2>
        </div>
    );
}
