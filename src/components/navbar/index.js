/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'


const navItems = [
    {
        href: "/code",
        name: "Code",
    },
    {
        href: "tech-community",
        name: "Tech Community",
    },
    {
        href: "/former-life",
        name: "Former Life",
    }
]


const Navbar = () => {
    const [mobileModal, setMobileModal] = useState(false)
    const location = useLocation()
    const showHome = location.pathname !== "/"

    return (
        <div className="relative bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
                    <svg className="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2" fill="currentColor" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
                        <polygon points="50,0 100,0 50,100 0,100" />
                    </svg>
                    <div>

                        {mobileModal ? (
                            <div className="inset-x-0 p-2 transition transform origin-top-right md:hidden bg-green-500">
                                <div className="rounded-lg shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden min-h-content ">
                                    <div className="px-5 pt-4 flex items-center justify-between ">
                                        <div>
                                            <img className="h-8 w-auto" src="/images/logo.svg" alt="" />
                                        </div>
                                        <div className="-mr-4">
                                            <button type="button" onClick={() => setMobileModal(false)} className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                                                <span className="sr-only">Close main menu</span>
                                                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                                                </svg>
                                            </button>
                                        </div>
                                    </div>
                                    <div className="px-2 pt-2 pb-3 space-y-1 min-h-full">
                                        {navItems.map(item => {
                                            return (
                                                <a href={item.href} className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">{item.name}</a>
                                            )
                                        })}
                                    </div>
                                </div>
                            </div>
                        ) : (<div className="relative pt-6 px-4 sm:px-6 lg:px-8">

                            <nav className="relative  flex items-center justify-between sm:h-10 lg:justify-start" aria-label="Global">
                                <div className="flex items-center flex-grow flex-shrink-0 lg:flex-grow-0">
                                    <div className="flex items-center justify-between w-full md:w-auto">
                                        <img className="h-8 w-auto sm:h-10" src="/images/logo.svg" />
                                        <div className="-mr-2 flex items-center md:hidden">
                                            <button type="button" onClick={() => setMobileModal(true)} className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500" aria-expanded="false">
                                                <span className="sr-only">Open main menu</span>
                                                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                                                </svg>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div className="hidden md:block md:ml-10 md:pr-4 md:space-x-8  ">
                                    {showHome && (<a href="/" className="font-medium text-gray-500 hover:text-gray-900">Home</a>)}
                                    {navItems.map(item => {
                                        return (
                                            <a href={item.href} className="font-medium text-gray-500 hover:text-gray-900">{item.name}</a>
                                        )
                                    })}
                                </div>
                            </nav>
                        </div>
                        )}

                    </div>
                </div>
            </div >

        </div >
    )
}

export default Navbar; 