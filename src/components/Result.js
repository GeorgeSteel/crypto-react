import React from 'react';

const Result = ({result}) => {

    if (Object.entries(result).length === 0) return null;

    return (
        <div className="resultado">
            <h2>Results</h2>
            <p className="precio">Price: <span>{ result.PRICE }</span></p>
            <p>Highest price today: <span>{ result.HIGHDAY }</span></p>
            <p>Lowest price today: <span>{ result.LOWDAY }</span></p>
            <p>Changes last 24 hours: <span>{ result.CHANGEPCT24HOUR }%</span></p>
            <p>Last update: <span>{ result.LASTUPDATE }</span></p>
        </div>
    );
};

export default Result;