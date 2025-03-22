export default function Footer() {
    const help = [
        "1-000-000-000",
        "1-111-000-1111 (Text)",
        "help@mysite.com",
        "Returns/Exchanges",
        "FAQ/Contact Us"
    ];
    const shop = [
        "Men's Shoes",
        "Women's Shoes",
        "Socks"
    ];

    return (
        <div>
            <div className="w-full h-auto bg-gray-800 flex justify-around p-4">
                <div>
                    <h1 className="m-2 font-bold text-white">HELP</h1>
                    {help.map((item, index) => (
                        <p className="cursor-pointer m-2 italic text-white" key={index}>
                            {item}
                        </p>
                    ))}
                </div>
                <div>
                    <h1 className="m-2 font-bold text-white">SHOP</h1>
                    {shop.map((item, index) => (
                        <p className="cursor-pointer m-2 italic text-white" key={index}>
                            {item}
                        </p>
                    ))}
                </div>
            </div>

            <div className="text-center py-2 bg-gray-800 text-white">
                <p>&copy; {new Date().getFullYear()} All rights reserved</p>
            </div>
        </div>
    );
}
