import React from 'react';
import Icon from '../icon';

function Button({ children, submit, type, color, icon }) {
    return (
        <button
            className={`
            ${type === "narrow" ? "" : 'w-full'}
            text-[14px] leading-[20px] font-semibold
                ${!color && 'text-white'}
                rounded-[8px] 
                ${!color && 'bg-gradient-to-r from-purple-2 to-purple-3 '}
                ${!color && 'border border-purple-3'}
                ${color === "white" && 'bg-white'}
                ${color === "white" && 'text-gray-8'}
                ${color === "white" && 'border border-gray-8'}
                hover:translate-y-[-1px] transition-all
                py-[10px] px-5
             `}
            type={submit && "submit"}>
            <div className='flex justify-center items-center gap-x-1'>
                <span className='mb-0.5'><Icon name={icon} size="12" /></span>
                {children}
            </div>
        </button>
    )
}

export default Button