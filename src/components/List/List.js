import React from "react";
import './List.scss';
import './Pagination.scss';

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
                <li key={'page_' + (i + 1)}
                    onClick={() => {handleClick(i + 1)}}
                    className={"pagination__listitem" + (currentPage === i + 1 ? ' is-active' : '')}
                >
                    {i + 1}
                </li>
            )
        }

        return pages;
    };

    const handleClick = (pageNumber) => {
        props.requestPage('https://reqres.in/api/example?per_page=8', pageNumber);
    }

    return (
        <div className="component">
            <ul className="list">
                {items}
            </ul>
            <div className="pagination">
                <ul className="pagination__list">
                    {pagination()}
                </ul>
            </div>
        </div>
    );
};

export default List;
