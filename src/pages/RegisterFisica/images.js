import React from 'react';

import user from '../../assets/user.png';
import phone from '../../assets/phone.png';
import key from '../../assets/key.png';
import mail from '../../assets/mail.png';
import id from '../../assets/id.png';

export const setImage = (name) => () => {
    switch (name) {
        case 'user':
            return <img src={user} alt={name} />;
        case 'phone':
            return <img src={phone} alt={name} />;
        case 'key':
            return <img src={key} alt={name} />;
        case 'mail':
            return <img src={mail} alt={name} />;
        case 'id':
            return <img src={id} alt={name} />;
        default:
            return null;
    }
};
