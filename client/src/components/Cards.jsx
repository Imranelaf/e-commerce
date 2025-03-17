const images = [
  {
    url: "https://images.unsplash.com/photo-1734639528206-59e0864b3863?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzfHx8ZW58MHx8fHx8",
    caption: 1,
    genre: "Men"
  },
  {
    url: "https://images.unsplash.com/photo-1734377543826-1a64e1d4c5fe?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw3fHx8ZW58MHx8fHx8",
    caption: 2,
    genre: "Women"
  },
  {
    url: "https://images.unsplash.com/photo-1734377543826-1a64e1d4c5fe?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw3fHx8ZW58MHx8fHx8",
    caption: 3,
    genre: "Kids"
  },
 
];

function PrincipalCard() {
  return (
    <div className="w-auto lg:h-[90vh] h-[40vh] lg:m-10 my-6">
      
      {/* Grid Container */}
      <div className={`relative grid grid-cols-3 gap-4 h-full w-full`}>
        
        {images.map((item) => (
          <div key={item.caption} className="relative h-full w-full overflow-hidden group">
            
            <img 
              src={item.url} 
              alt={`Image ${item.caption}`} 
              className="w-full h-full object-fit transition-transform duration-700 group-hover:scale-110"
            />
            
            <a 
              href={item.url} 
              target="_blank" 
              rel="noopener noreferrer"
              className="absolute bottom-4 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            >
              <button className="px-4 py-2 bg-white text-black hover:bg-gray-800 hover:text-white transition duration-200 text-sm tracking-wider font-semibold shadow-lgb cursor-pointer">
                Shop for {item.genre}
              </button>
            </a>

          </div>
        ))}

      </div>
    </div>
  );
}

export default PrincipalCard;
