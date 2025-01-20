import React, { ComponentProps, ElementType } from "react"
import classes from "./withSideDrawer.module.scss"
import { useAppState } from "../../hooks/useAppState";


export const WithSideDrawer = (Component: ElementType) => {
    const WrappedComponent = (props: ComponentProps<typeof Component>) => {
        const { appState } = useAppState();

        return appState.isDrawerOpen ? (
            <div className={classes.withSideDrawer}>
                <Component {...props} />
            </div>
        ) : null;
    };

    return WrappedComponent;
};


export default WithSideDrawer;
