import React from 'react';
import image from '../bgdrop.jpeg';
export default function Home(){
    return (
        <main>
            <img  src={image} alt="texto de leitor" className="absolute object0cover w-full h-full "/>
            <section className="relative flex justify-center min-h-screen pt-12 lg:pt-64 ox-8">
                <h1 className="text-6xl text-purple-500 font-bold cursive leading-none lg: leading-snug home-name">Hello. I'm Dev</h1>
            </section>
        </main>
    )
}