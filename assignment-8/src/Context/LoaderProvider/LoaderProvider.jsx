import React, { useState } from 'react';
import { LoaderContext } from '../ContextProvider/ContextProvider';

const LoaderProvider = ({children}) => {
    const [loading, setLoading] = useState(false);
    return (
        <LoaderContext.Provider value={{loading, setLoading}}>
            {children}
        </LoaderContext.Provider>
    );
};

export default LoaderProvider;