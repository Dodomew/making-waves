import React from "react";
import './List.scss';

const List = (props) => {
    const items = props.data.map((item) =>
       <li key={item.id} className="listitem" style={{backgroundColor: item.color}}>
           <h3 className="listitem__title">
               {item.name}
           </h3>
       </li>
    );

    return (
        <ul className="list">
            {items}
        </ul>
    );
};

export default List;
