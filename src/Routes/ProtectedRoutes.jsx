import Rotas from "./index"
import UserServices from "../Services/UserService"

const userServices = new UserServices();

const ProtectedRoutes = ({ children }) => {
    console.log("Children: ", children);
    const userAuthorized = userServices.userAuthorized()
    return userAuthorized ? children : console.log("You are not allowed")
}

export default ProtectedRoutes