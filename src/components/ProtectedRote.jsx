import { Navigate } from "react-router-dom";

const ProtectedRote = ({ children, curUser }) => {
    if(curUser === null || Object.keys(curUser).length === 0) {
        return <Navigate to="/authorization" />;
    }

    return children;
}

export default ProtectedRote;