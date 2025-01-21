
import { useEffect, useState } from "react"

export const useRedirect = () => {
    const [location, setLocation] = useState(window.location.pathname);

    useEffect(() => {
        document.querySelectorAll('a').forEach((el) => {
            el.addEventListener('click', (event) => {
                event.preventDefault();
                const link = (event.target as HTMLAnchorElement).href
                if (window.history.state.pathLink !== link) {
                    window.history.pushState({ pathLink: link }, "", link);
                    setLocation(window.location.pathname);
                }
            });
        });

        window.addEventListener('popstate', (event) => {
            setLocation((event.target as Window).location.pathname);
        });
    });

    return location;
};

export default useRedirect;
