import React from "react";
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

    const pagination = () => {
        const totalAmountOfPages = props.data.total_pages || 0;
        const currentPage = props.data.page || 1;
        const pages = [];

        for (let i = 0; i < totalAmountOfPages; i++) {
            pages.push(
                <li key={'page_' + (i + 1)}>
                    {i + 1}
                </li>
            )
        }

        return pages;
    };

    return (
        <div className="component">
            <ul className="list">
                {items}
            </ul>
            <div className="pagination">
                <ul>
                    {pagination()}
                </ul>
            </div>
        </div>
    );
};

export default List;
