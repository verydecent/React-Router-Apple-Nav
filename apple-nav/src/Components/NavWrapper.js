import React from 'react';
import { Link } from 'react-router-dom';

function NavWrapper(props) {
    console.log(props.navTabs)
    return (
        <div>
            {props.navTabs.map(element => 
                <Link key={element} to={`/${element.toLowerCase()}`}>
                    {element}
                </Link>)}
        </div>
    )
}
export default NavWrapper;