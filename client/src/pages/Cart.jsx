import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "../components/Title";
import { assets } from "../assets/assets";
import CartTotal from "../components/CartTotal";
import { Link } from "react-router-dom";

const Cart = () => {
  const { products, currency, cartItems ,updateQuantity,navigate} = useContext(ShopContext);
  const [cartData, setCartData] = useState([]);

  useEffect(() => {

    if (products.length > 0) {
      const tempData = [];
      for (const items in cartItems) {
        for (const item in cartItems[items]) {
          if (cartItems[items][item] > 0) {
            tempData.push({
              _id: items,
              size: item,
              quantity: cartItems[items][item],
            });
          }
        }
      }
      setCartData(tempData);
    }
   
  }, [cartItems,products]);

  return (
    <div className="border-t pt-14">
      <div className="text-2xl mb-3">
        <Title text1={"YOUR"} text2={"CART"} />
      </div>
      <div>
        {cartData.map((item, index) => {
          const productData = products.find(
            (product) => product._id === item._id
          );
          return (
            <div
              key={index}
              className="py-4 border-t border-b text-gray-700 grid grid-cols-[4fr_0.5fr_0.5fr] sm:grid-cols-[4fr_2fr_0.5fr] items-center gap-4 "
            >
              <div className="flex items-start gap-6">
                <img
                  className="w-16 sm:w-20"
                  src={productData.image[0]}
                  alt=""
                />
                <div>
                  <p className="text-sm sm:text-lg font-medium font-outfit">
                    {productData.name}
                  </p>
                  <div className="flex items-center gap-5 mt-2 ">
                    <p>
                      {currency}
                      {productData.price}{" "}
                    </p>
                    <p className="px-2 sm:px-3 sm:py-1 border text-xs">
                      {item.size}
                    </p>
                  </div>
                </div>
              </div>
              <input onChange={(e)=> e.target.value==='' || e.target.value === '0' ? null : updateQuantity(item._id,item.size,Number(e.target.value)) } type="number" min={1} value={item.quantity} className="bg-amber-50 border border-gray-800 max-w-10 sm:max-w-18 px-1 "  />
              <img onClick={()=>updateQuantity(item._id,item.size,0)} className="w-4 sm:w-5 mr-4 cursor-pointer" src={assets.bin_icon} alt="" />
            </div>
          );
        })}
      </div>
      <div className="flex flex-col items-center justify-center my-20">
  {Object.keys(cartItems).some((key) => 
    Object.values(cartItems[key]).some(quantity => quantity > 0)) ? (
    <div className="w-full sm:w-[450px]">
      <CartTotal />
      <div className="w-full mt-4 text-end">
        <button
          onClick={() => navigate('/place-order')}
          className="relative px-6 py-3 text-white font-semibold bg-green-600 rounded-md overflow-hidden transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg hover:bg-green-700 font-outfit"
        >
          Proceed to checkout
          <span className="absolute inset-0 bg-green-500 opacity-0 transition-opacity duration-300 rounded-md hover:opacity-20"></span>
        </button>
      </div>
    </div>
  ) : (
    <div className="text-center">
      <p className="text-lg font-bold mb-4 font-outfit">Please add items to the cart</p>
      <Link to="/collection">
        <button className="px-6 py-2 font-tangerine text-2xl bg-black text-white font-bold rounded-md hover:bg-gray-800 transition">
          Shop
        </button>
      </Link>
    </div>
  )}
</div>

    </div>
  );
};

export default Cart;
