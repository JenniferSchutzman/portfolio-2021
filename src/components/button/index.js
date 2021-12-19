import React from 'react'

const Button = (props) => {

    return (
        <a href={props.href} target={"_blank"} rel="noreferrer">
            <button class="bg-transparent hover:bg-green-500 text-green-700 font-semibold min-w-full hover:text-white py-2 px-4 border border-green-500 hover:border-transparent rounded" >
                {props.text}
            </button >
        </a>
    )
}

export default Button 