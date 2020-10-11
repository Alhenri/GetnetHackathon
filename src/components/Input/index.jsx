import React, { useState } from 'react';

import { Input, Container } from './styles';

function InputComponent ({ name, icon, password }) {
    const [state, setState] = useState();
    const [defaultValue, setDefaultValue] = useState(name);

    const clearCamp = () => setDefaultValue(null);
    const fillCamp = () => setDefaultValue(name);

    const handleText = (value) => {
        setState(value.nativeEvent.text);
    };

    return (
        <Container>
            {icon ? icon() : null}
            <Input
              placeholder={defaultValue}
              onFocus={clearCamp}
              onBlur={fillCamp}
              onChange={handleText}
              type={password ? 'password' : null}
            />
        </Container>
    );
}

export default InputComponent;
