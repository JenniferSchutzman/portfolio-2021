/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import Button from '../button'


const Cards = (props) => {
    const { title, description, cardData } = props
    return (
        <div className="relative bg-gray-50 pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
            <div className="absolute inset-0">
                <div className="bg-white h-1/3 sm:h-2/3"></div>
            </div>
            <div className="relative max-w-7xl mx-auto">
                <div className="text-center">
                    <h2 className="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl">
                        {title}
                    </h2>
                    <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
                        {description}
                    </p>
                </div>
                <div className="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
                    {cardData.map(card => {
                        return (
                            <div className="flex flex-col rounded-lg shadow-lg overflow-hidden">
                                <div className="flex-shrink-0">
                                    <img className="h-48 min-w-full object-cover" src={card.img} alt={card.name} />
                                </div>
                                <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                                    <div className="flex-1">
                                        <p className="text-sm font-medium text-green-500">
                                            <a href="#" className="hover:underline">
                                                {card.category}
                                            </a>
                                        </p>
                                        <a href="#" className="block mt-2">
                                            <p className="text-xl font-semibold text-gray-900">
                                                {card.title}
                                            </p>
                                            <p className="hidden md:block mt-3 text-gray-500 text-base">
                                                {card.description}
                                            </p>
                                        </a>
                                    </div>
                                    <div class="mt-6 flex flex-col">

                                        <Button text={card.linkTitle} href={card.link} />

                                        {/* <Button text="Button Instruction" /> */}
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}


export default Cards;
