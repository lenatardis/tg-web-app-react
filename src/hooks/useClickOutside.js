import {useEffect} from "react";

export default function useClickOutside(ref, onOutsideClick) {
    useEffect(() => {
        function handleOutsideEvent(event) {
            if (ref.current && !ref.current.contains(event.target)) {
                onOutsideClick();
            }
        }

        document.addEventListener("mousedown", handleOutsideEvent);
        document.addEventListener("touchstart", handleOutsideEvent);

        return () => {

            document.removeEventListener("mousedown", handleOutsideEvent);
            document.removeEventListener("touchstart", handleOutsideEvent);
        };
    }, [ref, onOutsideClick]);
}
