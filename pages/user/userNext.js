import React, {useState} from 'react'

import dynamic from 'next/dynamic'
// if (typeof window != 'undefined') {
const QrScan = dynamic(() => import('react-qr-reader'), {ssr: false})
//


import Userlayout from "../../layouts/Userlayout";
import {graphQLClient} from "../../utils/graphql-client";
import {getAuthCookie} from "../../utils/auth-cookies";
import {gql} from "graphql-request";
import { useRouter } from 'next/router';


export default function userNext({token}) {
    const router = useRouter()
    const [adhaarData, setAdhaarData] = useState();

    const handleScan = async id => {
        console.log({id})
        if (id) {
            const query = gql`
                query findAdhaar($id: ID!){
                    findAdhaarInfoByID(id: $id) {
                        address
                        DOB
                        owner{
                            email
                            #name
                        }
                    }
                }
            `
            try {
                const data = await graphQLClient(token).request(query, {id});
                if(data!=null){
                console.log(data,"dfdfdffdfdf");
                router.push({ pathname: '/user/recieve', query: {data : JSON.stringify(data)} })
                }
                console.log(data);
                setAdhaarData(data);
            } catch (e) {
                console.log(e);
            }
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
                                delay={5000}
                                onError={handleError}
                                onScan={handleScan}
                                style={{height: 200, width: 320}}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export async function getServerSideProps(ctx) {
    const token = getAuthCookie(ctx.req);
    return {props: {token: token || null}};
}


userNext.layout = Userlayout;