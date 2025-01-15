import { ElementType } from "react";
import { container } from "../dependencies";

export const WithDependencies = (
    Component: ElementType,
    dependencies: {
        [key: string]: symbol
    }) => {
    const props = {} as any;

    Object.keys(dependencies).forEach((propName) => {
        const dependencyKey = dependencies[propName];
        const dependency = container.get(dependencyKey);
        props[propName] = dependency;
    });
    return () => <Component {...props} />;
};