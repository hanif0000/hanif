
import { Card, CardHeader, CardBody, CardFooter, Image, Button } from "@nextui-org/react";
import React from "react";
import Link from "next/link";
 


const users = () => {
    const list = [
        {
            title: "Abdul Hanif",
            img: "/PNG image.png",
            price: "",
        },

    ];
    return (
        <div style={{  justifyContent: 'center', alignItems: 'center' , paddingTop: '10%'}}>
            
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '20vh' }} className="text-3xl">
                <h1>Terima Kasih...</h1>
            </div>


            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '20vh',paddingTop:'20vh' }} className="text-3xl">
                <Image src="/PNG image.png" width="350" height="350" alt="Logo"></Image>
            </div>

                
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '20vh', paddingTop:'30vh' }} className="text-3xl">
                <Button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"><Link href="/">Homepage</Link></Button>
            </div>


        </div>
    )
}

export default users