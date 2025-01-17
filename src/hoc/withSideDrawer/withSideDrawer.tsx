import React, { ComponentProps, ElementType } from "react"
import classes from "./withSideDrawer.module.scss"

export const WithSideDrawer = (Component: ElementType) =>
    (props: ComponentProps<typeof Component>) =>
    (
        <div className={classes.withSideDrawer}>
            <Component {...props} />
        </div>
    );


export default WithSideDrawer;
