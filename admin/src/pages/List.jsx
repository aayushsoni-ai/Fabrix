import axios from "axios";
import React, { useEffect, useState } from "react";
import { backendUrl, currency } from "../App";
import { toast } from "react-toastify";
import {FaTrash} from "react-icons/fa";

const List = ({ token }) => {
  const [list, setlist] = useState([]);

  const fetchList = async () => {
    try {
      const response = await axios.get(backendUrl + "/api/product/list");
      if (response.data.success) {
        setlist(response.data.products);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.log(error);
      console.log(error.message);
    }
  };

  const removeProduct = async (id) => {
    try {
      console.log("Deleting Product ID:", id);
      const response = await axios.post(
        backendUrl + "/api/product/remove",
        { _id: id },
        { headers: { token } }
      );
      if (response.data.success) {
        toast.success(response.data.message);
        await fetchList();
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.log(error);
      console.log(error.message);
    }
  };

  useEffect(() => {
    fetchList();
  }, []);

  return (
    <>
      <p className="mb-2 font-bold text-xl font-outfit">All Products</p>
      <div className="flex flex-col gap-2">
        {/* List table title */}
        <div className="grid grid-cols-[1fr_1fr_1fr_1fr_1fr] md:grid md:grid-cols-[1fr_3fr_1fr_1fr_1fr] items-center py-2 px-2 border bg-amber-100 text-sm">
          <b>Image</b>
          <b>Name</b>
          <b>Category</b>
          <b>Price</b>
          <b className="md:text-center text-right">Action</b>
        </div>
        {/* Product list */}
        {list.map((item, index) => (
          <div
            className="grid grid-cols-[1fr_1fr_1fr_1fr_1fr] md:grid-cols-[1fr_3fr_1fr_1fr_1fr] items-center gap-2 py-4 md:py-3 px-2 border text-sm "
            key={index}
          >
            <img className="w-12" src={item.image[0]} alt="" />
            <p>{item.name}</p>
            <p>{item.category}</p>
            <p>
              {currency}
              {item.price}
            </p>
            
            <p
              onClick={() => removeProduct(item._id)}
              className="md:text-center text-right cursor-pointer text-lg text-red-500"
            >
              <FaTrash />
            </p>
          </div>
        ))}
      </div>
    </>
  );
};

export default List;
