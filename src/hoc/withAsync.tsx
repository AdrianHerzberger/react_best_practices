import React, { useEffect, useState } from "react"

const Loading = () => <>Loading...</>

export const withAsync = (importFn: any) => {
    return () => {
        const [Component, setSuspenseComponent] = useState<React.ComponentType | null>(null);
        const [isLoading, setIsLoading] = useState<boolean>(true);

        useEffect(() => {
            importFn().then((module: any) => {
                setSuspenseComponent(() => module.default);
                setIsLoading(false);
            }); 
        }, [])

        return isLoading ? <Loading /> : Component ? <Component /> : null;
    }
};

export default withAsync;
