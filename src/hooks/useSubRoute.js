import { useLocation } from "react-router-dom";

const useSubRoute = () => {
    const location = useLocation();
    const pathname = location.pathname;
    let subroute = pathname.split('/').filter(Boolean)[1];
    return subroute;
};

export default useSubRoute;