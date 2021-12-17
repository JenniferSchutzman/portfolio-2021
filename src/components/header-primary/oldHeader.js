/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react'

const navItems = [
    {
        href: "/about",
        name: "About",
    },
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




const Header = () => {
    const [mobileModal, setMobileModal] = useState(false)

    return (
        <div className="relative bg-gray-50 overflow-hidden">
            <div className="hidden sm:block sm:absolute sm:inset-y-0 sm:h-full sm:w-full" aria-hidden="true">
                <div className="relative h-full max-w-7xl mx-auto">
                    <svg className="absolute right-full transform translate-y-1/4 translate-x-1/4 lg:translate-x-1/2" width="404" height="784" fill="none" viewBox="0 0 404 784">
                        <defs>
                            <pattern id="f210dbf6-a58d-4871-961e-36d5016a0f49" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                                <rect x="0" y="0" width="4" height="4" className="text-gray-200" fill="currentColor" />
                            </pattern>
                        </defs>
                        <rect width="404" height="784" fill="url(#f210dbf6-a58d-4871-961e-36d5016a0f49)" />
                    </svg>
                    <svg className="absolute left-full transform -translate-y-3/4 -translate-x-1/4 md:-translate-y-1/2 lg:-translate-x-1/2" width="404" height="784" fill="none" viewBox="0 0 404 784">
                        <defs>
                            <pattern id="5d0dd344-b041-4d26-bec4-8d33ea57ec9b" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                                <rect x="0" y="0" width="4" height="4" className="text-gray-200" fill="currentColor" />
                            </pattern>
                        </defs>
                        <rect width="404" height="784" fill="url(#5d0dd344-b041-4d26-bec4-8d33ea57ec9b)" />
                    </svg>
                </div>
            </div>

            <div className="relative pt-6 pb-16 sm:pb-24">
                <div>
                    <div className="max-w-7xl mx-auto px-4 sm:px-6">
                        <nav className="relative flex items-center justify-between sm:h-10 md:justify-center" aria-label="Global">
                            <div className="flex items-center flex-1 md:absolute md:inset-y-0 md:left-0">
                                <div className="flex items-center justify-between w-full md:w-auto">
                                    <a href="#">
                                        <span className="sr-only">Workflow</span>
                                        <img className="h-8 w-auto sm:h-10" src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg" alt="" />
                                    </a>
                                    <div className="-mr-2 flex items-center md:hidden">
                                        <button type="button" onClick={() => setMobileModal(true)} className="bg-gray-50 rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500" aria-expanded="false">
                                            <span className="sr-only">Open main menu</span>
                                            {/* <!-- Heroicon name: outline/menu --> */}
                                            <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="hidden md:flex md:space-x-20">
                                {navItems.map(item => {
                                    return (
                                        <a href={item.href} className="font-medium text-gray-500 hover:text-gray-900">{item.name}</a>
                                    )
                                })}
                            </div>
                            <div className="hidden md:absolute md:flex md:items-center md:justify-end md:inset-y-0 md:right-0">
                            </div>
                        </nav>
                    </div>

                    {mobileModal && (
                        <div className="absolute z-10 top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden">
                            <div className="rounded-lg shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden">
                                <div className="px-5 pt-4 flex items-center justify-between">
                                    <div>
                                        <img className="h-8 w-auto" src="https://tailwindui.com/img/logos/workflow-mark-green-500.svg" alt="" />
                                    </div>
                                    <div className="-mr-2">
                                        <button type="button" onClick={() => setMobileModal(false)} className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                                            <span className="sr-only">Close menu</span>
                                            <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                                <div className="px-2 pt-2 pb-3">
                                    {navItems.map(item => {
                                        return (
                                            <a href={item.href} className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">{item.name}</a>
                                        )
                                    })}
                                </div>
                            </div>
                        </div>
                    )}
                </div>

                <main className="mt-16 mx-auto max-w-7xl px-4 sm:mt-24">
                    <div className="text-center">
                        <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                            <div className="flex flex-col">Front-end Software Engineer:</div>
                            <div className="flex flex-col text-green-500">Jenny Schutzman</div>
                        </h1>
                        <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
                            JAVASCRIPT, REACT, REDUX, ANGULAR, REST APIS, NODEJS, EXPRESS, AUTH0, FETCH API, AXIOS, ISOMORPHIC FETCH, USEHTTP, UI-BOOTSTRAP, MATERIAL-UI NEXT, SEMANTIC UI, I18NEXT, MYSQL, MONGO DB, POUCH DB, JEST, REACT TESTING LIBRARY, MOCK SERVICE WORKER, GIT/GITHUB, HTML, CSS, ATOM, INTELLIJ, VSCODE AND MORE.
                        </p>
                        <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
                        </div>
                    </div>
                </main>




            </div>
        </div>
    )
}

export default Header; 