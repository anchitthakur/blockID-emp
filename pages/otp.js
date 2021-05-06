import React, { useState } from 'react';
import OtpInput from 'react-otp-input';
import Userlayout from "../layouts/Userlayout";

export default function otp() {

    const [OTP, setOTP] = useState("")
    function updateOTP() {
        setOTP(text);
        if (text.length == 4) {
            console.log("OTP Entered: " + text)

            verifyNow({ variables: { otpValue: text } })

        }


    }


    return (
        <>
            <div className="container mx-auto px-4 h-full">
                <div className="flex content-center items-center justify-center h-full">
                    <div className="w-full lg:w-4/12 px-4">
                        <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-gray-300 border-0">
                            <div className="flex-auto px-10 lg:px-10 py-10 mx-auto">
                                <div className="text-3xl font-bold block uppercase tracking-wide text-gray-700 text-center">
                                    <h1>Enter Your OTP</h1>
                                </div>
                                <div className="hcenter" style={{ height: "40vh", fontSize: "40px", width: "100%" }}>
                                    <OtpInput
                                        value={OTP}
                                        onChange={updateOTP}
                                        numInputs={4}
                                        separator={<span> -  </span>}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-wrap mt-6 relative">
                            <div className="w-full text-center text-gray-300 ">
                                <p>Your one time OTP is sent to your email </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

otp.layout = Userlayout;