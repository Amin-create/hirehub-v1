import React from 'react';

function Button({ children, submit }) {
    return (
        <button
            className="w-full text-white text-[14px] leading-[20px] rounded-md bg-gradient-to-r from-purple-2 to-purple-3 hover:translate-y-[-1px] transition-all shadow-lg py-[10px]"
            type={submit && "submit"}>
            {children}
        </button>
    )
}

export default Button