import React from 'react'

type IProps = {
    src: string,
    alt: string
}

const ProductImage = ({ src, alt }: IProps) => {
    return (
        <img src={src} alt={alt} className="image" />
    )
}

export default ProductImage