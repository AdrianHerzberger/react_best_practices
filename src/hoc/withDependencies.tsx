import { ComponentProps, ElementType } from "react";
import { container } from "../dependencies";

export const withDependencies = (
    Component: ElementType,
    dependencies: {
        [key: string]: symbol
    }) => {
    const resolveDependencies = {} as any;

    Object.keys(dependencies).forEach((propName) => {
        const dependencyKey = dependencies[propName];
        const dependency = container.get(dependencyKey);
        resolveDependencies[propName] = dependency;
    });
    return (props: ComponentProps<typeof Component>) => <Component {...props} {...resolveDependencies} />;
};