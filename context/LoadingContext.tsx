"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

interface LoadingContextType {
    isLoaded: boolean;
    setIsLoaded: (value: boolean) => void;
}

const LoadingContext = createContext<LoadingContextType>({
    isLoaded: false,
    setIsLoaded: () => {},
});

export const LoadingProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [isLoaded, setIsLoaded] = useState(false);

    const value = React.useMemo(() => ({
        isLoaded,
        setIsLoaded
    }), [isLoaded]);

    return (
        <LoadingContext.Provider value={value}>
            {children}
        </LoadingContext.Provider>
    );
};

export const useLoading = () => useContext(LoadingContext);
