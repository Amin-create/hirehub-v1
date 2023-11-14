import React, { useState } from 'react';
import { NavLink } from "react-router-dom";
import { Icons } from '..';

function InputWithLabel({ label, name, forgotPassword }) {

    const [passwordVisible, setPasswordVisible] = useState(false);
    const [inputType, setInputType] = useState('text');

    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
        setInputType(passwordVisible ? 'password' : 'text');
    };

    const _label = (name) => {
        switch (name) {
            case "email":
                return "Email";
            case "password":
                return "Password";
            case "username":
                return "Username";

            case "fullName":
                return "Full Name";
            case "lastName":
                return "Last Name";
            case "newPassword":
                return "New Password";
            case "confirmPassword":
                return "Confirm Password";
            case "calender":
                return "DOB";
            case "ssn":
                return "SSN";
            case "phoneNumber":
                return "Mobile Number";
            case "phoneNumber":
                return "Phone Number";
            case "message":
                return "Message";
            default:
                return "Label";
        }
    }

    const placeholder = (name) => {
        switch (name) {
            case "email":
                return "Enter your email";
            case "username":
                return "Enter your username";
            case "password":
            case "newPassword":
            case "confirmPassword":
                return "••••••••••";


            case "fullName":
                return "Full Name";
            case "lastName":
                return "Last Name";
            case "ssn":
                return "AAA-GG-SSSS";
            case "phoneNumber":
                return "0000-0000000";
            case "phoneNumber":
                return "0000-0000000";
            case "message":
                return "Message";
            default:
                return "";
        }
    }
    const type = (name) => {
        switch (name) {
            case "email":
            case "fullName":
            case "ssn":
            case "phoneNumber":
            case "lastName":
            case "message":
            case "phoneNumber":
                return "text";
            case "password":
            case "newPassword":
            case "confirmPassword":
                return "password";
            case "calender":
                return "date";
            default:
                return "text";
        }
    }
    return (
        <>
            <div className="flex justify-between items-center">
                {label && <label for={name} className="block text-[14px] font-medium text-gray-2 tracking-wide mb-2 capitalize">{_label(name)}</label>}
                {forgotPassword &&
                    <a className='text-purple-1 text-[14px] mb-2'>
                        <NavLink to="/forgot-password">
                            Forgot Password?
                        </NavLink>
                    </a>
                }
            </div>
            <div className="relative">
                <input type={name === "password" ? inputType : type(name)} className="w-full text-[14px] font-regular leading-[20px] text-gray-700 bg-gray-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 px-3 py-[10px]" id={name} name={name}
                    placeholder={placeholder(name)} autofocus />
                {(name === "password" || name === "newPassword" || name === "confirmPassword") &&
                    <span className="absolute right-3 top-3 text-gray-1 text-[18px] cursor-pointer" onClick={togglePasswordVisibility}>
                        {passwordVisible ? <Icons.IoEyeOutline /> : <Icons.IoEyeOffOutline />}
                    </span>
                }
            </div>
        </>
    )
}

export default InputWithLabel