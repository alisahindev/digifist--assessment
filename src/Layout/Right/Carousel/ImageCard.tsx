import React from "react"

const ImageCard = ({ product }: any) => {
    const { src, alt, colors, price, name } = product;
    const [selectedColor, setSelectedColor] = React.useState(colors[0]);


    const handleColorChange = (color: string) => {
        setSelectedColor(color);
    };


    return (
        <span className='product-detail__slider__product-card'>
            <img src={src} alt={alt} />
            <span className='product-detail__slider__product-card__title'>
                {name}
            </span>
            <span className="product-detail__slider__product-card__bottom">
                <span className='product-detail__slider__product-card__price'>{price}</span>
                <span className='product-detail__slider__product-card__color'>
                    {
                        colors.map((color: any, index: number) => {
                            return (
                                <span
                                    key={index}
                                    className={`product-detail__slider__product-card__color-item ${selectedColor === color ? "active" : ""}`}
                                    style={{ backgroundColor: color }}
                                    onClick={() => handleColorChange(color)}
                                ></span>
                            );
                        })
                    }
                </span>

            </span>
        </span>
    );
};

export default ImageCard;