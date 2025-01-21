import React, { ComponentType, Suspense } from "react"

const Loading = () => <>Loading...</>

type ImportMethodType = () => Promise<{ default: ComponentType<any> }>;

export const withSuspense = (importMethod: ImportMethodType) => {
    const LazyComponent = React.lazy(importMethod);

    return ( 
        <Suspense fallback={<Loading />}>
            <LazyComponent />
        </Suspense>
    );
};

export default withSuspense;
