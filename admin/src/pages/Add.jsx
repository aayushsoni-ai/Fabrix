import React, { useState } from "react";
import { assets } from "../assets/assets";
import axios from "axios";
import { backendUrl } from "../App";
import { toast } from "react-toastify";


const Add = ({ token }) => {
  const [image1, setImage1] = useState(false);
  const [image2, setImage2] = useState(false);
  const [image3, setImage3] = useState(false);
  const [image4, setImage4] = useState(false);

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [sizes, setSizes] = useState([]);
  const [category, setCategory] = useState("Men");
  const [SubCategory, setSubCategory] = useState("Topwear");
  const [bestseller, setBestseller] = useState(false);

  const submitHandle = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();

      formData.append("name", name);
      formData.append("description", description);
      formData.append("price", price);
      formData.append("category", category);
      formData.append("SubCategory", SubCategory);
      formData.append("bestseller", bestseller.toString());
      formData.append("sizes", JSON.stringify(sizes));

      image1 && formData.append("image1", image1);
      image2 && formData.append("image2", image2);
      image3 && formData.append("image3", image3);
      image4 && formData.append("image4", image4);

      const response = await axios.post(
        backendUrl + "/api/product/add",
        formData,
        { headers: { token } }
      )
      console.log("token" , token)
      if (response.data.success) {
              toast.success(response.data.message);
              setName('')
              setDescription('')
              setPrice('')
              setImage1(false)
              setImage2(false)
              setImage3(false)
              setImage4(false)
            } 
            else{
              toast.error(response.data.message);
            }
    } catch (error) {
      console.log(
        error
      )
      console.log(error.message);
    }
  };

  return (
    <form
      onSubmit={submitHandle}
      className="flex flex-col w-full items-start gap-3"
    >
      <div>
        <p className="font-sans text-xl mb-3 font-bold">Upload image</p>
        <div className="flex gap-2">
          <label htmlFor="image1">
            <img
              className="w-20"
              src={!image1 ? assets.upload_area : URL.createObjectURL(image1)}
              alt=""
            />
            <input
              onChange={(e) => setImage1(e.target.files[0])}
              type="file"
              id="image1"
              hidden
            />
          </label>
          <label htmlFor="image2">
            <img
              className="w-20"
              src={!image2 ? assets.upload_area : URL.createObjectURL(image2)}
              alt=""
            />
            <input
              onChange={(e) => setImage2(e.target.files[0])}
              type="file"
              id="image2"
              hidden
            />
          </label>
          <label htmlFor="image3">
            <img
              className="w-20"
              src={!image3 ? assets.upload_area : URL.createObjectURL(image3)}
              alt=""
            />
            <input
              onChange={(e) => setImage3(e.target.files[0])}
              type="file"
              id="image3"
              hidden
            />
          </label>
          <label htmlFor="image4">
            <img
              className="w-20"
              src={!image4 ? assets.upload_area : URL.createObjectURL(image4)}
              alt=""
            />
            <input
              onChange={(e) => setImage4(e.target.files[0])}
              type="file"
              id="image4"
              hidden
            />
          </label>
        </div>
      </div>

      <div className="w-full">
        <p className="font-sans text-xl mb-3 font-bold">Product Name</p>
        <input
          onChange={(e) => setName(e.target.value)}
          value={name}
          type="text"
          placeholder="Type here"
          className="w-full border border-black/30 bg-white/60 font-outfit rounded-lg max-w-[500px] px-3 py-2"
          required
        />
      </div>
      <div className="w-full">
        <p className="font-sans text-xl mb-3 font-bold">Product Description</p>
        <textarea
          onChange={(e) => setDescription(e.target.value)}
          value={description}
          type="text"
          placeholder="Write content here..."
          className="w-full border border-black/30 font-outfit rounded-lg bg-white/60 max-w-[500px] px-3 py-2"
          required
        />
      </div>

      <div className="flex flex-col sm:flex-row gap-2 w-full sm:gap-8">
        <div className="w-full">
          <p className="font-sans text-xl mb-3 font-bold">Product Category</p>
          <select
            onChange={(e) => setCategory(e.target.value)}
            className="w-full px-3 py-2 bg-white/60 font-semibold"
          >
            <option className="font-outfit" value="Men">
              Men
            </option>
            <option className="font-outfit" value="Women">
              Women
            </option>
            <option className="font-outfit" value="Kids">
              Kids
            </option>
          </select>
        </div>
        <div className="w-full">
          <p className="font-sans text-xl mb-3 font-bold">Sub-Category</p>
          <select
            onChange={(e) => setSubCategory(e.target.value)}
            className="w-full px-3 py-2 bg-white/60 font-semibold"
          >
            <option className="font-outfit" value="Topwear">
              Topwear
            </option>
            <option className="font-outfit" value="Bottomwear">
              Bottomwear
            </option>
            <option className="font-outfit" value="Winterwear ">
              Winterwear
            </option>
          </select>
        </div>
        <div className="w-full">
          <p className="font-sans text-xl mb-3 font-bold">Product Price</p>
          <input
            onChange={(e) => setPrice(e.target.value)}
            value={price}
            type="Number"
            placeholder="eg. $129"
            min={1}
            className="w-full border border-black/30 font-outfit bg-white/60 rounded-lg max-w-[500px] px-3 py-2"
            required
          />
        </div>
      </div>

      <div className="w-full">
        <p className="font-sans text-xl mb-3 font-bold">Product Sizes</p>
        <div className="flex gap-3">
          <div
            onClick={() =>
              setSizes((prev) =>
                prev.includes("S")
                  ? prev.filter((item) => item !== "S")
                  : [...prev, "S"]
              )
            }
          >
            <p
              className={`px-3 py-2 text-black cursor-pointer ${
                sizes.includes("S") ? "bg-amber-300" : "bg-amber-100"
              }`}
            >
              S
            </p>
          </div>

          <div
            onClick={() =>
              setSizes((prev) =>
                prev.includes("M")
                  ? prev.filter((item) => item !== "M")
                  : [...prev, "M"]
              )
            }
          >
            <p
              className={`px-3 py-2 text-black cursor-pointer ${
                sizes.includes("M") ? "bg-amber-300" : "bg-amber-100"
              }`}
            >
              M
            </p>
          </div>

          <div
            onClick={() =>
              setSizes((prev) =>
                prev.includes("L")
                  ? prev.filter((item) => item !== "L")
                  : [...prev, "L"]
              )
            }
          >
            <p
              className={`px-3 py-2 text-black cursor-pointer ${
                sizes.includes("L") ? "bg-amber-300" : "bg-amber-100"
              }`}
            >
              L
            </p>
          </div>

          <div
            onClick={() =>
              setSizes((prev) =>
                prev.includes("XL")
                  ? prev.filter((item) => item !== "XL")
                  : [...prev, "XL"]
              )
            }
          >
            <p
              className={`px-3 py-2 text-black cursor-pointer ${
                sizes.includes("XL") ? "bg-amber-300" : "bg-amber-100"
              }`}
            >
              XL
            </p>
          </div>

          <div
            onClick={() =>
              setSizes((prev) =>
                prev.includes("XXl")
                  ? prev.filter((item) => item !== "XXl")
                  : [...prev, "XXl"]
              )
            }
          >
            <p
              className={`px-3 py-2 text-black cursor-pointer ${
                sizes.includes("XXl") ? "bg-amber-300" : "bg-amber-100"
              }`}
            >
              XXL
            </p>
          </div>
        </div>
      </div>

      <div className="flex gap-3 mt-2">
        <input
          onChange={() => setBestseller((prev) => !prev)}
          checked={bestseller}
          type="checkbox"
          className="cursor-pointer"
          id="bestseller"
        />
        <label
          htmlFor="bestseller"
          className="font-semibold cursor-pointer font-outfit"
        >
          Add to bestseller
        </label>
      </div>

      <button
        type="submit"
        className="relative group overflow-hidden rounded-full  mt-3 px-6 py-2 text-white border-2 border-amber-50 font-semibold bg-black text-lg transition-all duration-300 ease-in-out"
      >
        <span className="absolute inset-0 bg-[#d8bc91] w-0 group-hover:w-full transition-all duration-500 ease-out"></span>
        <span className="relative flex items-center  justify-center  gap-2 font-tangerine text-[20px] font-bold text-2xl text-center">
          Add
        </span>
      </button>
    </form>
  );
};

export default Add;
