import React from 'react';
import styled from 'styled-components';

const NavItem = styled `
    display: flex;
    justify-content: space-around;
`

function Nav(props) {
    return (
        <NavItem>
            {props.item}
        </NavItem>
    )
}

export default Nav;