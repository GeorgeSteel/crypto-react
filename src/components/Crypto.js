import React from 'react';

const Crypto = ({ crypto }) => {
    const { FullName, Name } = crypto.CoinInfo;

    return (
        <option value={ Name }>
            { FullName }
        </option>
    );
};

export default Crypto;