import { useEffect } from "react";
import { withRouter } from 'react-router-dom';

// Start each new page at the top. Only runs when the page itself changes, so
// in-page links like "#prices" are left alone.
const PageScrollTop = (props) => {
    const { pathname, hash } = props.location;
    useEffect(() => {
        if (!hash) window.scrollTo(0, 0);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [pathname]);
    return props.children;
};
export default withRouter(PageScrollTop);
