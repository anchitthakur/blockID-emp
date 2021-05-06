import React, { useState } from 'react'

import dynamic from 'next/dynamic'
// if (typeof window != 'undefined') {
    const QrScan = dynamic(() => import('react-qr-reader'),{ ssr: false })
// }


import Userlayout from "../../layouts/Userlayout";


export default function userNext() {

    const [qrscan, setQrscan] = useState('');
    const handleScan = data => {
        if (data) {
            setQrscan(data)
        }
    }
    const handleError = err => {
        console.error(err)
    }



    return (
        <>
            <div className="container mx-auto px-4 h-full">
                <div className="flex content-center items-center justify-center h-full">
                    <div className="w-full lg:w-4/12 px-4">
                        {/* <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-gray-300 border-0"> */}
                            <div className="flex-auto px-10 lg:px-10 py-10 mx-auto">
                                <QrScan
                                    delay={300}
                                    onError={handleError}
                                    onScan={handleScan}
                                    style={{ height: 200, width: 320 }}
                                />
                            </div>
                        {/* </div> */}
                        <div className="flex flex-wrap mt-6 relative py-20">
                            <div className="w-full text-center text-gray-300 ">
                                <div class="mb-3 pt-0">
                                    <input type="text"  value = { qrscan } class="px-3 py-4 placeholder-blueGray-300 text-blueGray-600 relative bg-white bg-white rounded text-base border border-blueGray-300 outline-none focus:outline-none focus:shadow-outline w-full" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}


userNext.layout = Userlayout;