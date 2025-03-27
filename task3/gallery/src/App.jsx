import React, { useState } from "react";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const imageUrls = [
    {
      url: "https://images.unsplash.com/photo-1742827871492-72428a28106b?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw4fHx8ZW58MHx8fHx8",
    },
    {
      url: "https://plus.unsplash.com/premium_photo-1742404277482-4a828585bea2?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw5fHx8ZW58MHx8fHx8",
    },
    {
      url: "https://images.unsplash.com/photo-1741851374411-9528e6d2f33f?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMnx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      url: "https://images.unsplash.com/photo-1741812191037-96bb5f12010a?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxNXx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      url: "https://images.unsplash.com/photo-1741988766604-04b6f1b3236d?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxOXx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      url: "https://images.unsplash.com/photo-1742156345582-b857d994c84e?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyMnx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      url: "https://images.unsplash.com/photo-1742268351424-36bfe44aacdb?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyM3x8fGVufDB8fHx8fA%3D%3D",
    },
    {
      url: "https://images.unsplash.com/photo-1742268351424-36bfe44aacdb?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyM3x8fGVufDB8fHx8fA%3D%3D",
    },
    {
      url: "https://images.unsplash.com/photo-1742268351424-36bfe44aacdb?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyM3x8fGVufDB8fHx8fA%3D%3D",
    },
    {
      url: "https://images.unsplash.com/photo-1742268351424-36bfe44aacdb?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyM3x8fGVufDB8fHx8fA%3D%3D",
    },
  ];

  const [currimg,setcurrimg]=useState('')

  const toggleModal = (item) => {
    setIsModalOpen(!isModalOpen);
    setcurrimg(item.url)
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className=" w-full">
      <div className="text-center text-xl py-4 font-bold">Image Galleryy</div>
      <div
        className={`absolute bottom-10 w-full h-screen  flex justify-center items-center z-10 ${
          isModalOpen ? "" : "hidden "
        }`}
      >
        <div className="bg-slate-200 flex flex-col shadow-lg p-4 rounded-lg max-w-full md:w-1/2 h-1/2 md:h-3/4  mx-4">
          <div className="text-center text-lg">This is the modal content with url</div>
          <img src={currimg} alt="error loading" className="w-full h-3/4 flex-grow"/>
          <button
            className="bg-red-500 text-white mt-1 cursor-pointer rounded-md p-1"
            onClick={() => {
              setIsModalOpen(!isModalOpen);
            }}
          >
            Close
          </button>
        </div>
      </div>

      <div className={`w-full ${isModalOpen ? "opacity-40" : ""}`}>
        
        <div className="flex flex-wrap w-full  justify-center">
          {imageUrls.map((item, i) => (
            <div
              key={i}
              className="md:w-1/4 rounded overflow-hidden shadow-lg cursor-pointer m-4 p-4 bg-white"
              onClick={()=>{toggleModal(item)}}
            >
              <img
                src={item.url}
                alt={`Image ${i + 1}`}
                className="w-full h-32 object-cover mb-2"
              />
              <p className="text-gray-700 text-slate-500 text-center">Click to open modal</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
