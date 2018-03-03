import React from 'react';

function Button(props) {
    return (
        <button className={props.className} onClick={props.onClick} {...props}>
            {props.icon ?
                <i className="material-icons">{props.icon}</i>
                :
                props.children
            }
        </button>
    );
}

export default Button;