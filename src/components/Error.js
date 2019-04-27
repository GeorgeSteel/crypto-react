import React from 'react';

const Error = (props) => {
    return (
        <p className="error">
            { props.msg }
        </p>
    );
};

export default Error;