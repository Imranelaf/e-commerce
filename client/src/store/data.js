const productData = {
  _id: 1,
  title: "Women's Tree Lounger",
  description: "Lightweight Slip-Ons Made for Easy Everyday Wear.",
  price: 29.99,
  discount: 20.99,
  images: [
    "https://images.unsplash.com/photo-1748024093647-bbbfbe2c0c3f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzfHx8ZW58MHx8fHx8",
    "https://images.unsplash.com/photo-1726137569911-bc03e55fd87f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxfHx8ZW58MHx8fHx8",
    "https://images.unsplash.com/photo-1748188574118-896e39aa4d18?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw3fHx8ZW58MHx8fHx8",
    "https://images.unsplash.com/photo-1748032886766-f27eac6e2b41?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw4fHx8ZW58MHx8fHx8"
    // etc.
  ],
  variants: [
    {
      color: "red",
      sizes: [
        { size: 5, stock: 8 },
        { size: 6, stock: 0 },
        { size: 7, stock: 2 },
        { size: 8, stock: 10 },
        { size: 9, stock: 10 },
        { size: 10, stock: 4 }
      ]
    },
    {
      color: "blue",
      sizes: [
       { size: 5, stock: 8 },
        { size: 6, stock: 0 },
        { size: 7, stock: 2 },
        { size: 8, stock: 0 },
        { size: 9, stock: 10 },
        { size: 10, stock: 4 }
      ]
    },
    {
      color: "gray",
      sizes: [
        { size: 5, stock: 0 },
        { size: 6, stock: 0 },
        { size: 7, stock: 0 },
        { size: 8, stock: 2 },
        { size: 9, stock: 1 },
        { size: 10, stock: 0 }
      ]
    }
  ],

};

export default productData;