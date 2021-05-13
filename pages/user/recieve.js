import React from 'react'
import Userlayout from "../../layouts/Userlayout";


export default function recieve() {
    return (
        <div className="container mx-auto px-4 h-full">
                <div className="flex content-center items-center justify-center h-full">
                    <div className="w-full lg:w-4/12 px-4">
                        <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-gray-300 border-0">
                            <div className="flex-auto px-10 lg:px-10 py-10 mx-auto">
                                <p>
                                    User Details
                                </p>
                                <p>
                                    Age
                                </p>
                                <p>
                                    Details
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    )
}


recieve.layout = Userlayout;