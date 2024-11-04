import React, { useState } from "react";
// import { Button } from 'primereact/button';
// import { InputNumber } from 'primereact/inputnumber';

function PrefixSuffixDemo() {

    var [loginEmail, setEmail] = useState("");
    var [loginPassword, setPassword] = useState("");
    var [errors, setErrors] = useState({ loginEmail: "", loginPassword: "" });

    var handleEmailChange = (e) => {
        setEmail(e.target.value);

        if (errors.loginEmail) {
            setErrors((prevErrors) => ({ ...prevErrors, loginEmail: "" }));
        }
    };

    var handlePasswordChange = (e) => {
        setPassword(e.target.value);

        if (errors.loginPassword) {
            setErrors((prevErrors) => ({ ...prevErrors, loginPassword: "" }));
        }
    };

    var handleSubmit = (e) => {
        e.preventDefault();

        var errorValid = true;
        var newErrors = { loginEmail: "", password: "" };

        if (!loginEmail) {
            newErrors.loginEmail = "Email is required.";
            errorValid = false;
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(loginEmail)) {
            newErrors.loginEmail = "Please enter a valid email.";
            errorValid = false;
        }

        if (!loginPassword) {
            newErrors.loginPassword = "Password is required.";
            errorValid = false;
        }

        setErrors(newErrors);

        if (errorValid) {
            console.log("submitted form data", { loginEmail, loginPassword });
        }
        
    }


    return (
        <div className="h-screen w-full flex bg-gray-200">

            <div className="w-2/4 flex items-center justify-center">
                <img src="../sideImage.svg" className=""/>
            </div>

            <div className="w-2/4 m-5 rounded-3xl bg-white shadow-lg flex items-center justify-center">
                <form className="w-full flex items-center justify-center" onSubmit={handleSubmit}>
                    <div className="p-5 w-3/4 rounded-md">

                        <p className="font-bold text-2xl uppercase text-gray-900">Welcome to ......</p>

                        <div className="relative px-1 rounded-md bg-gray-200 mt-4">
                            <input onChange={handleEmailChange} type="text" id="loginEmail" aria-describedby="outlined_success_help" className="block px-1 pt-4 pb-1 w-full text-sm text-gray-900 bg-transparent rounded-lg border-0 appearance-none focus:outline-none focus:ring-0 focus:border-blue-300 peer" placeholder="" />
                            <label htmlFor="loginEmail" id="labelforemail" className="font-poppins ms-1 absolute text-sm text-gray-500 duration-300 transform -translate-y-4 top-4 z-10 origin-[0] peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-4 peer-focus:-translate-y-4 peer-focus:ms-1">
                                Email <span className="text-red-500">*</span>
                            </label>
                        </div>
                        {errors.loginEmail && <p className="relative -top-1 bg-red-200 py-2 border-t-2 rounded-b-md border-red-500 ps-2 text-gray-600 text-sm flex items-center gap-1"><i className="pi pi-info text-xs text-white rounded-full bg-red-500 p-0.5 px-1"></i>{errors.loginEmail}</p>}

                        <div className="relative px-1 rounded-md bg-gray-200 mt-4">
                            <input onChange={handlePasswordChange} type="password" id="loginPassword" aria-describedby="outlined_success_help" className="block px-1 pt-4 pb-1 w-full text-sm text-gray-900 bg-transparent rounded-lg border-0 appearance-none focus:outline-none focus:ring-0 focus:border-blue-300 peer" placeholder="" />
                            <label htmlFor="loginPassword" id="labelforpassword" className="font-poppins ms-1 absolute text-sm text-gray-500 duration-300 transform -translate-y-4 top-4 z-10 origin-[0] peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-4 peer-focus:-translate-y-4 peer-focus:ms-1">
                                Password <span className="text-red-500">*</span>
                            </label>
                        </div>
                        {errors.loginPassword && <p className="relative -top-1 bg-red-200 py-2 border-t-2 rounded-b-md border-red-500 ps-2 text-gray-600 text-sm flex items-center gap-1"><i className="pi pi-info text-xs text-white rounded-full bg-red-500 p-0.5 px-1"></i>{errors.loginPassword}</p>}
                        
                        <a href="" tabIndex={-1} className="text-xs text-green-700 ms-1">Forgot Password</a>

                        <button type="submit" className="mt-4 w-full bg-green-700 text-white p-2 rounded-md text-center outline-none hover:bg-green-600 focus:bg-green-600">Submit</button>

                    </div>
                </form>
            </div>

        </div>
    )
}
        

export default PrefixSuffixDemo;