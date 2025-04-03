import React from "react";
import { useNavigate } from "react-router-dom";
import { seeddata } from "../data/data";
import { useState } from "react";

function Home() {
  const navigate = useNavigate();
  const [category, setCategory] = useState("");

  const handlenavigate = (id) => {
    navigate(`/product/${id}`);
  };

  const filteredData = category
    ? seeddata.filter((item) => item.category.includes(category))
    : seeddata;

  return (
    <div className="p-2">
      <div className="px-2  flex flex-row h-12 items-center">
        <div className="pr-2 ">Featured products</div>
        <div className="mx-4">
          <select
            className="p-1 bg-gray-200 rounded-md"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="">All Categories</option>
            <option value="Electronics">Electronics</option>
            <option value="Sports">Sports</option>
            <option value="Home Appliances">Home Appliances</option>
            <option value="Transport">Transport</option>
            <option value="Health">Health</option>
          </select>{" "}
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
        {filteredData.map((item) => (
          <div
            className="p-4 bg-blue-100 flex flex-col rounded cursor-pointer"
            onClick={() => {
              handlenavigate(item.id);
            }}
            key={item.id}
          >
            <h3>{item.name}</h3>
            <p>{item.desc}</p>
            <p>Price: ${item.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
