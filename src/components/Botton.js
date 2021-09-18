import React from 'react';

function Botton(props) {
    const { name, onClick } = props;
    return (
        <button onClick={onClick}>{name}</button>
    )
}

export default Botton;