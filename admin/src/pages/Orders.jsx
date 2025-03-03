import React, { useEffect, useState } from "react";
import axios from "axios";
import { backendUrl, currency } from "../App";
import { toast } from "react-toastify";
import { assets } from "../assets/assets";

const Orders = ({ token }) => {
  const [orders, setOrders] = useState([]);

  const fetchAllOrders = async () => {
    if (!token) return;
    try {
      const response = await axios.post(
        backendUrl + "/api/order/list",
        {},
        { headers: { token } }
      );
      if (response.data.success) {
        setOrders(response.data.orders.reverse());
      } else { 
        toast.error(response.data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  const statusHandler = async (event, orderId) => {
    try {
      const response = await axios.post(
        backendUrl + "/api/order/status",
        { orderId, status:event.target.value },
        { headers: { token } }
      );
      if (response.data.success) {
        await fetchAllOrders();
      }
    } catch (error) {
      console.log(error)
      toast.error(response.data.message);
    }
  };

  useEffect(() => {
    fetchAllOrders();
  }, [token]);

  return (
    <div className="p-6 min-h-screen bg-amber-100">
      <h3 className="text-2xl font-semibold font-serif text-gray-800 mb-6">
        Order Page
      </h3>

      <div className="space-y-6">
        {orders.map((order, index) => (
          <div
            key={index}
            className="bg-amber-50 rounded-lg shadow-md grid grid-col gap-3 item-start border-2 border-amber-100 p-5 md:p-8 my-3 md:my-4 text-xs sm:text-sm text-gray-700 "
          >
            <img
              src={assets.parcel_icon}
              alt="Parcel Icon"
              className="w-14 h-14"
            />
            <div className="flex items-center space-x-3">
              <div className="flex flex-col space-y-1">
                <p className="font-medium text-lg text-gray-700">
                  <span className="font-semibold">Name:</span>{" "}
                  <span className="font-outfit font-light">
                    {order.address.firstName} {order.address.lastName}
                  </span>
                </p>

                <p className="text-sm text-gray-600">
                  <span className="font-semibold font-outfit text-base">
                    Address:
                  </span>{" "}
                  {order.address.street}, {order.address.city},{" "}
                  {order.address.state}, {order.address.country},{" "}
                  {order.address.pincode}
                </p>

                <p className="text-sm text-gray-600">
                  <span className="font-semibold text-base">Phone:</span>{" "}
                  {order.address.phone}
                </p>
              </div>
            </div>

            <div className="mt-4 bg-[#f5e3c179] p-4 rounded-md">
              <h4 className="text-md font-semibold text-gray-700 mb-2">
                Products:
              </h4>
              <ul className="text-gray-700 space-y-1">
                {order.items.map((item, index) => (
                  <li key={index} className="flex justify-between">
                    <span>
                      {item.name} x {item.quantity}{" "}
                      <span className="text-gray-500">({item.size})</span>
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-4 flex justify-between items-center">
              <div>
                <p className="text-sm text-gray-600">
                  🛒 Items: {order.items.length}
                </p>
                <p className="text-sm text-gray-600">
                  💳 Method: {order.paymentMethod}
                </p>
                <p className="text-sm text-gray-600">
                  ✅ Payment:{" "}
                  <span
                    className={
                      order.payment ? "text-green-600" : "text-red-600"
                    }
                  >
                    {order.payment ? "Done" : "Pending"}
                  </span>
                </p>
                <p className="text-sm text-gray-600">
                  📅 Date: {new Date(order.date).toLocaleDateString()}
                </p>
                <p className="text-lg font-bold text-blue-600">
                  {currency} {order.amount}
                </p>
              </div>
            </div>

            <div className="mt-4">
              <label className="block text-sm font-medium text-gray-700">
                Update Status:
              </label>
              <select
                onChange={(event) => statusHandler(event, order._id)} value={order.status}
                className="mt-1 w-full p-2 border border-gray-300 rounded-md bg-[#f5e3c179] focus:ring-2 focus:ring-blue-500 focus:outline-none"
              >
                <option value="Order Placed">Order Placed</option>
                <option value="Packing">Packing</option>
                <option value="Shipped">Shipped</option>
                <option value="Out for delivery">Out for delivery</option>
                <option value="Delivered">Delivered</option>
              </select>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Orders;
