import React from 'react';
import Icon from '../icon';

function Card({ children, w840 }) {
    return (
        <div className={`
        ${w840 && 'max-w-[840px]'}       
        bg-white rounded-[8px] border-[1px] border-gray-11 shadow-[0_3px_5px_-2px_rgba(0,0,0,0.2)] p-5
        `}>
            {children}
        </div>
    )
}

export default Card