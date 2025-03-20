export default function Footer(){

    const help = ["1-000-000-000",
        "1-111-000-1111 (Text)",
        "help@mysite.com",
        "Returns/Exchanges",
        "FAQ/Contact Us"];
     const shop = [
        "Men's Shoes",
        "Women's Shoes",
        "Socks"
        ]   

    return(
         <div className="w-full h-auto bg-gray-500 flex justify-around">
            <div>
                <h1>HELP</h1>
                {
                    help.map((item, index)=>(
                        <p key={index}>{item}</p>
                    ))
                }
            </div>
            <div>
                <h1>SHOP</h1>
                {
                    shop.map((item, index)=>(
                        <p key={index}>{item}</p>
                    ))
                }
            </div>

         </div>   

    )


}