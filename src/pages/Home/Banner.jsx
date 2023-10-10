const Banner = () => {
    return (
        <div className="w-full h-[40vh] lg:h-[80vh] relative">
        <div className="w-full h-[40vh] lg:h-[80vh] bg-black absolute opacity-70">
        <div className="flex flex-col gap-5 justify-center items-center h-full">
        <h1 className="text-white text-center text-6xl font-bold">Welcome The Party Poppers</h1>
            <p className="text-2xl font-bold text-gray-300 text-center">Explore our awesome events services and choose the one suits you best!</p>
        </div>
            
        </div>
            <img src="https://i.ibb.co/Df4ZBXB/banner-background.jpg" alt="Banner.jpg" className="object-cover w-full h-full" />
        </div>
    );
};

export default Banner;