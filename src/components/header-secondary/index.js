import React from 'react'

const HeaderSecondary = (props) => {
    const { img, title, subtitle, description } = props

    return (
        <div className="bg-white">
            <main>
                <div>
                    <div className="relative">
                        <div className="absolute inset-x-0 bottom-0 h-1/2"></div>
                        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                            <div className="relative shadow-xl sm:rounded-2xl sm:overflow-hidden">
                                <div className="absolute inset-0">
                                    <img className="h-full w-full object-cover" src={img} alt="Books" />
                                    <div className="absolute inset-0 bg-green-600 mix-blend-multiply"></div>
                                </div>
                                <div className="relative px-4 py-16 sm:px-6 sm:py-24 lg:py-32 lg:px-8">
                                    <h1 className="text-center text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
                                        <span className="block text-white">{title}</span>
                                        <span className="block text-green-200">{subtitle}</span>
                                    </h1>
                                    <p className="mt-6 max-w-lg mx-auto text-center text-xl text-indigo-200 sm:max-w-3xl">
                                        {description}
                                    </p>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default HeaderSecondary;