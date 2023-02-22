import React from 'react'
import { getProviders, signIn } from "next-auth/react"

//CLIENT SIDE
const signin = ({ providers }) => {
    return (
        <div className='flex justify-center mt-20 space-x-4'>
            <img className=" hidden  md:h-[500px] rotate-6 md:inline-flex " src='https://res.cloudinary.com/drscelx6f/image/upload/v1677081978/Social%20network%20images/Social_sign_in_f201oj.png' alt='signin-social' />
            <div >
                {Object.values(providers).map((provider) => (
                    <div className='flex flex-col items-center' >
                        <img className='w-40 object-cover ' src="https://res.cloudinary.com/drscelx6f/image/upload/v1676919772/Social%20network%20images/Logo_Social_uu1fzq.png" alt="social-logo" />
                        <p className='text-center text-sm italic my-10'>This app is created por learning purposes</p>
                        <button onClick={()=>signIn(provider.id,{callbackUrl:"/"})} className='bg-purple-200 rounded-lg p-3 text-white hover:bg-[#a359a0]'>Sing in with {provider.name}</button>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default signin


//SERVER SIDE
export async function getServerSideProps() {
    const providers = await getProviders()
    return {
        props: {
            providers,
        },
    };
}