import React from "react";
import TopSection from "./TopSection";
import Carousel from "./Carousel";
import img1 from "../../assets/images/1.png";
import img2 from "../../assets/images/2.png";

const Right = () => {
    return (
        <div className='product product-detail'>
            <TopSection />
            <Carousel
                products={[
                    {
                        src: img1,
                        alt: "Image 1",
                        // 5 color
                        name: "365 Signature Hoodie",
                        price: "€36.95",
                        colors: ["#A6CC99", "#CC9999", "#ff0000", "#CB99CC"],
                    },
                    {
                        src: img2,
                        alt: "Image 2",
                        name: "Organic Skinny High Waist Jeans",
                        price: "€33.95",
                        colors: ["#A6CC99", "#CC9999", "#ff0000", "#CB99CC", "#0000ff"],
                    },
                    {
                        src: img1,
                        alt: "Image 3",
                        name: "Organic Skinny High Waist Jeans",
                        price: "€33.95",
                        colors: ["#A6CC99", "#CC9999", "#CB99CC", "#0000ff"],
                    },
                    {
                        src: img2,
                        alt: "Image 4",
                        name: "Organic Skinny High Waist",
                        price: "€33.95",
                        colors: ["#A6CC99", "#ff0000", "#CB99CC", "#0000ff"],
                    },
                    {
                        src: img1,
                        alt: "Image 5",

                        name: "365 Signature Hoodie",
                        price: "€33.95",
                        colors: ["#A6CC99", "#CB99CC", "#0000ff"],
                    },
                    {
                        src: img2,
                        alt: "Image 6",
                        name: "Organic Skinny High Waist Raw",
                        price: "€33.95",
                        colors: ["#A6CC99", "#CC9999", "#ff0000"],
                    },
                ]}
            />
        </div>
    );
};

export default Right;
