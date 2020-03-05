import React, { useState, useEffect } from 'react';

import './List.scss';

const List = (props) => {
    const items = props.data.data.map((item) => {
        let bgColor = item.color !== null ? item.color : '#dedede';
        let itemName = item.name !== null ? item.name : '';

        return (
            <li key={item.id} className="listitem" style={{backgroundColor: bgColor}}>
                <h3 className="listitem__title">
                    {itemName}
                </h3>
            </li>
        )
    });

    useEffect(() => {
        document.body.className = 'anim-is-ready';
        return () => {
            document.body.className = '';
        }
    }, []);

    return (
        <ul className="list">
            {items}
        </ul>
    );
};

export default List;
