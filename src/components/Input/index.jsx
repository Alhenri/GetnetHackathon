import React, { useState } from 'react';

import { Input, Container } from './styles';

function InputComponent ({ name, icon, password, getEmail }) {
    const [state, setState] = useState('');
    const [defaultValue, setDefaultValue] = useState(name);

    const clearCamp = () => setDefaultValue(null);
    const fillCamp = () => setDefaultValue(name);

    const handleText = (event) => {
        const value = event.target.value;
        setState(value);
        if (getEmail) getEmail(value);
    };

    return (
        <Container>
            {icon ? icon() : null}
            <Input
              placeholder={defaultValue}
              onFocus={clearCamp}
              value={state}
              onBlur={fillCamp}
              onChange={handleText}
              type={password ? 'password' : 'text'}
            />
        </Container>
    );
}

export default InputComponent;
