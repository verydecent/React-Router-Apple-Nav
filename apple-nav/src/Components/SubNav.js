import React from 'react';

function SubNav (props) {
    return (
        <div className="SubNav">
            Item: {props.match.params.productName}
        </div>
    )
}

export default SubNav;
