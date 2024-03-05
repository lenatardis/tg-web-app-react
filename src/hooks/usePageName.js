import { useLocation } from "react-router-dom";

const usePageName = () => {
    const location = useLocation();
    const pathname = location.pathname;
    let pageName = pathname === '/' ? '' : pathname.split('/').filter(Boolean)[0];
    if (pageName) {
        pageName = pageName.charAt(0).toUpperCase() + pageName.slice(1);
    }
    return pageName;
};

export default usePageName;