import React from 'react'

type Props = {
    title: string;
    description: string;
}

const Banner = ({ title, description }: Props) => {
    return (
        <div className="banner">
            <div className="container">
                <h1 className="logo-font">{ title }</h1>
                <p>{ description }</p>
            </div>
        </div>
    )
}

export default Banner;