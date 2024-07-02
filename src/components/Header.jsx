
const Header = () => {
    return (
        <div className="bg-[url('/images/header-bg.png')] bg-cover bg-center h-[600px] rounded-3xl mt-16" >
            <div className="flex flex-col items-center justify-center h-full text-white">
                <div>
                    <h1 className="text-5xl font-bold text-center">Discover an exceptional cooking <br /> class tailored for you!</h1></div>
                <div><h1 className="text-xl font-semibold mt-5">Find the perfect recipe for any occasion</h1></div>
                <div className="flex gap-5 mt-5">
                    <div>
                        <button className="text-black p-3 bg-[#0BE58A] border-none outline-none rounded-full font-semibold ">Explore Now</button>
                    </div>
                    <div><button className="p-3 border-2 border-white outline-none rounded-full font-semibold">Our Feedback</button></div>
                </div>

            </div>

        </div>
    );
};

export default Header;