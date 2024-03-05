import { useLocation } from "react-router-dom";

const usePageName = () => {
    const location = useLocation();
    const pathname = location.pathname;
    const pageName = pathname === '/' ? '' : pathname.split('/').filter(Boolean)[0];
    return pageName;
};

export default usePageName;