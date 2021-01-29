import React from 'react';
import style from './paginator.module.css';
import {useState} from "react";

let Paginator = (props) => {
    let countPage = Math.ceil(props.totalUsersCount / props.count);
    let pageCount = [];
    for (let i = 1; i <= countPage; i++) {
        pageCount.push(i);
    }

    let portionCount = Math.ceil(countPage / props.portionSize);
    let [portionNumber, setPortionNumber] = useState(1);
    let leftPortionPageNumber = (portionNumber - 1) * props.portionSize + 1;
    let rightPortionPageNumber = portionNumber * props.portionSize;

    return (
        <div className={style.paginator} >
            { portionNumber > 1 &&
            <button onClick={() => { setPortionNumber(portionNumber - 1) }}>PREV</button> }

            {pageCount.filter(p => p >= leftPortionPageNumber && p<=rightPortionPageNumber)
                .map(u => {
                return <span className={props.page === u ? style.activePage : style.nonActivePage}
                             onClick={() => {props.onClick(u)}}>{u}</span>
            })}
            { portionCount > portionNumber &&
            <button onClick={() => { setPortionNumber(portionNumber + 1) }}>NEXT</button> }
        </div>
    )
}

export default Paginator;