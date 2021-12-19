/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react'
import Navbar from '../navbar'



const HeaderPrimary = () => {
    const [mobileModal, setMobileModal] = useState(false)

    return (
        <div className="relative bg-white overflow-hidden ">
            <div className="max-w-7xl mx-auto">
                <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
                    <svg className="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2" fill="currentColor" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
                        <polygon points="50,0 100,0 50,100 0,100" />
                    </svg>
                    <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
                        <div className="sm:text-center lg:text-left">
                            <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                                <div className="flex flex-col">Frontend Software Engineer</div>
                                <div className="flex flex-col text-green-500 ">Jenny Schutzman</div>
                            </h1>
                            <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                                JAVASCRIPT, REACT, REDUX, ANGULAR, REST APIS, NODEJS, EXPRESS, AUTH0, FETCH API, AXIOS, ISOMORPHIC FETCH, USEHTTP, UI-BOOTSTRAP, MATERIAL-UI NEXT, SEMANTIC UI, I18NEXT, MYSQL, MONGO DB, POUCH DB, JEST, REACT TESTING LIBRARY, MOCK SERVICE WORKER, GIT/GITHUB, HTML, CSS, ATOM, INTELLIJ, VSCODE AND MORE.
                            </p>
                            <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                                <div className="rounded-md shadow">
                                    <a href="#" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-500 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10">
                                        Checkout My Code
                                    </a>
                                </div>
                            </div>
                        </div>
                    </main>
                </div>
            </div>
            <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
                <img className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full" src="/images/dlake.jpg" alt="avalanche lake" />
            </div>
        </div>
    )
}

export default HeaderPrimary; 