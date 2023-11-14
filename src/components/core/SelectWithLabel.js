import React, { useState } from 'react';

function SelectWithLabel({ label, name, options }) {
    const _label = (name) => {
        switch (name) {
            case "userType":
                return "User Type";
            default:
                return "Label";
        }
    }
    return (
        <>
            {label && <label for={name} className="block text-[14px] font-medium text-gray-2 tracking-wide mb-2 capitalize">{_label(name)}</label>}
            <select id={name} className="w-full text-[14px] font-regular leading-[20px] text-gray-700 bg-gray-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 px-3 py-[10px]">
                {options.map((value) =>
                    <option key={value * 1} value={value?.value}>{value?.name}</option>
                )}
            </select>
        </>
    )
}

export default SelectWithLabel