import Image from "next/image";

function Banner() {
    return (
        <div className="relative justify-end bg-green-100">
            <img className="" src="https://d2d8wwwkmhfcva.cloudfront.net/x856/www.instacart.com/assets/homepage/homepage_background_full_m3_cropped-8d2d286263821da7decd7c61fb1db1eb0e3dec13e0c356277d6d3cb7484c024a.jpg" alt=""/>
            <div className="absolute top-1/2 w-full text-center">
                <p className="text-lg text-bold">Order groceries for for delivery or pickup today</p>
                <button className="text-white sm:text-lg shadow-md mt-2  bg-green-500 py-2 px-3.5 
                rounded-full md:py-2 px-7 lg:py-3 px-10 font-bold hover:shadow-xl active:scale-90
                transition duration-150  ">Find stores near me</button>
            </div>
        </div>
    )
}

export default Banner
