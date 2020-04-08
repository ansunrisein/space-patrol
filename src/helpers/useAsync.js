import {useCallback, useEffect, useState} from "react";

export const useAsync = (f, auto = true, ...args) => {
    const [pending, setPending] = useState(auto);
    const [value, setValue] = useState(null);
    const [error, setError] = useState(null);

    const execute = useCallback((...args) => {
        setPending(true);
        setValue(null);
        setError(null);

        f(...args)
            .then(setValue)
            .catch(setError)
            .finally(() => setPending(false));
    }, [setPending, setValue, setError, f]);

    useEffect(() => {
        if (auto)
            execute(...args);
    }, [auto, execute]);

    return {pending, value, error, execute};
};
