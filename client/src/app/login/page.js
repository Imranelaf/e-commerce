'use client'

import { useState } from "react";

export default function Login() {
    const [inputValue, setInputValue] = useState('');
    const [isButtonActive, setIsButtonActive] = useState(false);

    const checkEmail = (event) => {
        const email = event.target.value;
        setInputValue(email);
        setIsButtonActive(email.includes('@')); 
    };

    return (
        <div className="w-full h-screen flex justify-center lg:items-center lg:bg-gray-100">
            <div className="lg:w-2/5 h-auto m-3 p-4 bg-white w-auto">
                <div className="flex w-full justify-center">
                   
                    <img
                        src="/images/logo.png"
                        width={200}
                        height={200}
                        loading="lazy"
                        alt="Logo"
                        className="lg:m-0 mt-15"
                    />
                </div>
                <h1 className="text-2xl font-bold m-5">Log in</h1>
                <div className="flex flex-col">
                    <input
                        type="email"
                        className="border m-5 p-2 border-gray-400 text-gray-900 hover:border-black"
                        placeholder="Email"
                        value={inputValue}
                        onChange={checkEmail}
                    />
                    <button
                        className={isButtonActive ? 'bg-gray-900 cursor-pointer m-5 text-xl text-white font-bold p-2' :
                            'bg-gray-200 m-5 text-xl text-gray-500 font-bold p-2 cursor-not-allowed'}
                        disabled={!isButtonActive}
                    >
                        Continue
                    </button>
                </div>
            </div>
        </div>
    );
}
