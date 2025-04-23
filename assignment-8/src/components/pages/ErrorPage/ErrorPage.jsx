import React from 'react';
import { Link, NavLink } from 'react-router';

const ErrorPage = () => {
    return (
        <>
  
        <div className='max-w-7xl mx-auto'> 
        
            <div className="flex flex-col items-center justify-center min-h-screen  bg-gray-100">
            
            <label className="swap swap-flip text-9xl">
  
  <input type="checkbox" />

  <div className="swap-on text-3xl font-bold text-blue-800">Error🙆</div>
  <img 
                    src="https://i.ibb.co/S4wMnpHw/404-error-page-not-found.jpg"
                    alt="Error 404: Page Not Found"
                    className="w-[400px] mt-6 rounded-lg  shadow-lg" 
                />
</label>
              

               
                <div role="alert" className="alert alert-error px-25 py-8 mt-4 text-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 inline-block stroke-current mr-2" fill="none" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    
                    {/* Main Error Text */}
                    <span className="font-bold text-2xl">Error! Task failed successfully.</span>
                    <div className="flex justify-center space-x-2 mt-2">
                        <span className="loading loading-ring loading-xs"></span>
                        <span className="loading loading-ring loading-sm"></span>
                        <span className="loading loading-ring loading-md"></span>
                        <span className="loading loading-ring loading-lg"></span>
                        <span className="loading loading-ring loading-xl"></span>
                    </div>
                </div>
                <div className="mt-8 py-2">
                <NavLink className="relative px-1 inline-flex items-center justify-center px-10 py-4 overflow-hidden font-mono font-medium tracking-tighter text-white bg-gray-800 rounded-lg group">
                    {/* Button Hover Animation */}
                    <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-green-200 rounded-full group-hover:w-56 group-hover:h-56"></span>
                    <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-gray-700"></span>
                    
                   
                    <div className="tooltip">
                        <div className="tooltip-content">
                            <div className="animate-bounce bg-gray-800 -rotate-10 text-2xl font-black">Wow!</div>
                        </div>
                        <NavLink to="/" className="text-xl font-bold">Home page</NavLink>
                    </div>
                  
                </NavLink>
            </div>
            </div>
            
        </div>
        </>
    );
};

export default ErrorPage;
