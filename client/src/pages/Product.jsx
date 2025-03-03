import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import { useNavigate, useParams } from "react-router-dom";
import { assets } from "../assets/assets";
import { toast } from "react-toastify";
import RelatedProducts from "../components/RelatedProducts";

const Product = () => {
  const { products, currency, addToCart,cartItems } = useContext(ShopContext);
  const [productData, setProductData] = useState(false);
  const { productId } = useParams();
  const [image, setImage] = useState("");
  const [size, setSize] = useState("");
  const [buttonLabel, setButtonLabel] = useState("Add to Cart");
  const navigate = useNavigate();


  const fetchProductData = async () => {
    products.map((item) => {
      if (item._id === productId) {
        setProductData(item);
        setImage(item.image[0]);
        return null;
      }
    });
  };

  useEffect(() => {
    fetchProductData();
  }, [productId, products]);

  useEffect(() => {
    if (size && cartItems[productData._id]?.[size]) {
      setButtonLabel("Go to Cart");
    } else {
      setButtonLabel("Add to Cart");
    }
  }, [size, cartItems, productData._id]);

  const handleClick = () => {
    if (!size) {
      toast.error("Please select size!!");
      return;
    }
    if (buttonLabel === "Add to Cart") {
      addToCart(productData._id, size);
      setButtonLabel("Go to Cart");
    } else {
      navigate("/cart");
    }
  };


  return productData ? (
    <div className="border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100">
      {/* product data */}
      <div className="flex gap-12 sm:gap-12 flex-col sm:flex-row">
        {/* product images */}
        <div className="flex-1 flex-col-reverse flex gap-3 sm:flex-row">
          <div className="flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal w-full sm:w-[18.7%]">
            {productData.image.map((item, index) => (
              <img
                onClick={() => setImage(item)}
                src={item}
                key={index}
                className="w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer"
                alt=""
              />
            ))}
          </div>
          <div className="w-full sm:w-[80%]">
            <img src={image} className="w-full h-auto " alt="" />
          </div>
        </div>
        {/* product info */}
        <div className="flex-1">
          <h1 className="font-medium text-2xl mt-2 font-outfit">
            {productData.name}
          </h1>
          <div className="flex items-center mt-2 gap-1">
            <img src={assets.star_icon} className="w-3.5" alt="" />
            <img src={assets.star_icon} className="w-3.5" alt="" />
            <img src={assets.star_icon} className="w-3.5" alt="" />
            <img src={assets.star_icon} className="w-3.5" alt="" />
            <img src={assets.star_dull_icon} className="w-3.5" alt="" />
            <p className="pl-2">(122)</p>
          </div>
          <p className="mt-5 text-3xl font-medium">
            {currency}
            {productData.price}{" "}
          </p>
          <p className="mt-5 text-gray-400 md:w-4/5 font-outfit">
            {productData.description}{" "}
          </p>
          <div className="flex flex-col my-8 gap-4">
            <p className="font-outfit">Select Size</p>
            <div className="flex gap-2 font-prata text-xs">
              {productData.sizes.map((item, index) => (
                <button
                  onClick={() => setSize(item)}
                  className={`border py-2 px-4 bg-amber-100 ${
                    item === size ? "border-amber-800" : ""
                  }`}
                  key={index}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          <button
      onClick={handleClick}
      className="relative group overflow-hidden rounded-full mt-3 mb-3 px-6 py-2 text-white border-2 border-amber-50 font-bold bg-black transition-all duration-300 ease-in-out"
    >
      <span className="absolute inset-0 bg-[#d8bc91] w-0 group-hover:w-full transition-all duration-500 ease-out"></span>
      <span className="relative flex items-center justify-center gap-2 font-tangerine text-[20px] font-bold">
        {buttonLabel}
      </span>
    </button>
          <hr className="mt-8 sm:w-4/5  border-black" />
          <div className="flex flex-col text-gray-500 text-sm mt-5 gap-1">
            <p className="font-outfit">
              <span className="font-tangerine text-red-600 text-2xl">
                100%{" "}
              </span>
              Original Product.
            </p>
            <p className="font-outfit">
              <span className="font-tangerine text-2xl text-green-600">
                Cash{" "}
              </span>{" "}
              on delivery is available.
            </p>
            <p className="font-outfit">
              Easy{" "}
              <span className="font-tangerine text-2xl text-red-600">
                {" "}
                return & exchange
              </span>{" "}
              policy within 7-days.
            </p>
          </div>
        </div>
      </div>
      {/* description & review section  */}
      <div className="mt-20">
        <div className="flex">
          <b className="px-5 py-3 text-sm border border-t-black border-l-black">Description</b>
          <p className="px-5 py-3 text-sm border border-t-black border-l-black border-r-black">Reviews (122)</p>
        </div>
        <div className="flex flex-col gap-4 border px-6 py-6 text-sm text-gray-500 border-black">
          <p className="text-gray-700 font-outfit">
            Discover the latest trends in fashion with our exclusive collection
            of stylish and comfortable outfits. Elevate your wardrobe with
            pieces that blend elegance and modern design.
          </p>

          <p className="text-gray-700 font-outfit">
            Shop now and enjoy high-quality fabrics, timeless styles, and
            affordable prices. Stay ahead of the fashion curve with our
            handpicked selection of must-have clothing.
          </p>
        </div>
      </div>
      {/* related products */}
      <RelatedProducts category={productData.category} subCategory={productData.subCategory}/>
    </div>
  ) : (
    <div className="opacity-0"></div>
  );
};

export default Product;
