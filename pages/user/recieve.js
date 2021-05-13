import React from 'react'
import Userlayout from "../../layouts/Userlayout";
import { useRouter } from 'next/router'


export default function recieve() {
    const router = useRouter()
    var data = JSON.parse(router.query.data);
    var DOB = new Date(data.findAdhaarInfoByID.DOB)
    var difference=Date.now() - DOB.getTime(); 
    var  ageDate = new Date(difference); 
    var age=   Math.abs(ageDate.getUTCFullYear() - 1970);


    return (
        <div className="container mx-auto px-4 h-full">
            <div className="flex content-center items-center justify-center h-full">
                <div className="w-full lg:w-4/12 px-4">
                    <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-gray-300 border-0">
                        <div className="flex-auto px-10 lg:px-10 py-10 mx-auto">
                            <h3 className="text-3xl font-semibold text-center">Data Recieve</h3>
                            <p className="mt-4 text-lg leading-relaxed text-gray-600">
                                Data is only ment for verifying a user
                            </p>
                            <ul className="list-none mt-6 ">
                                <li className="py-2">
                                    <div className="flex items-center px-20">
                                        <div>
                                            <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-gray-600 bg-gray-200 mr-3">
                                                <i className="fas fa-fingerprint"></i>
                                            </span>
                                        </div>
                                        <div>
                                            <h4 className="">
                                                AGE : {age}
                                            </h4>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


recieve.layout = Userlayout;