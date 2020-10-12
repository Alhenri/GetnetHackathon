import React from 'react';

import dinheiro from '../../assets/gain.png';
import calendar from '../../assets/calendar.png';
import mala from '../../assets/mala.png';
import carrinho from '../../assets/mail.png';
import rendimento from '../../assets/ganho.png';

export const setImage = (name) => () => {
    switch (name) {
        case 'dinheiro':
            return <img src={dinheiro} alt={name} />;
        case 'calendar':
            return <img src={calendar} alt={name} />;
        case 'mala':
            return <img src={mala} alt={name} />;
        case 'carrinho':
            return <img src={carrinho} alt={name} />;
        case 'rendimento':
            return <img src={rendimento} alt={name} />;
        default:
            return null;
    }
};
