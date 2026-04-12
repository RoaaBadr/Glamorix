import { useMemo } from "react";

const useAverageRating = (rates = []) => {
    return useMemo(() => {
        if (!Array.isArray(rates) || rates.length === 0) return 0;
        return (rates.reduce((acc, rate) => acc + rate, 0) / rates.length);
    }, [rates]);
};

export default useAverageRating;
