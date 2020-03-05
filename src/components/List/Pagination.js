import React from 'react';
import './Pagination.scss';

const Pagination = (props) => {
    const createPagination = () => {
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
        props.requestPage(pageNumber);
    };

    return (
        <div className="pagination">
            <ul className="pagination__list">
                {createPagination()}
            </ul>
        </div>
    );
};

export default Pagination;
