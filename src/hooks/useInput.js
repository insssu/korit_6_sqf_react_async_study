import React, { useState } from 'react';

function useInput(setStudent) {
    const [ value, setValue ] = useState("");

    const onChange = (e) => {
        setValue(e.target.value);
    }

    const resetValue = () => {
        setValue("");
    }

    return { value, resetValue, onChange };
}

export default useInput;