import React, { useState, useEffect } from 'react';

import './List.scss';

const List = (props) => {
    let items;

    if(props.isLoading) {
        items = [];
        for (let i = 0; i < 8; i++) {
            items.push(
                <li key={'item_' + i} className="listitem"/>
            )
        }
    }
    else if(props.response.data) {
        items = props.response.data.map((item, index) => {
            let bgColor = item.color || '#cacaca';
            let itemName = item.name || '';
            let itemID = item.id || index;

            return (
                <li key={itemID} className="listitem" style={{backgroundColor: bgColor}}>
                    <h3 className="listitem__title">
                        {itemName}
                    </h3>
                </li>
            )
        });
    }

    return (
        <ul className={'list' + (props.isLoading ? ' is-loading' : '')}>
            {items}
        </ul>
    );
};

export default List;
