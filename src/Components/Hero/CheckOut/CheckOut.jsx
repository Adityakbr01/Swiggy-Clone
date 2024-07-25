import React, { useReducer } from "react";
import { HiChevronLeft, HiTrash } from "react-icons/hi";
import { useDispatch, useSelector } from "react-redux";
import CheckOutItems from "./CheckOutItems";
// import open  from "../../../Store/Reducer/CheckOutSlice";
import { clear } from "../../../Store/Reducer/CartSlice"; // Assuming you have a clear action in CartSlice
import { open } from "../../../Store/Reducer/CheckOutSlice";

function CheckOut() {
  const dispatch = useDispatch();
  const { cardItems, total } = useSelector((state) => state.Cart);
  const isOpenNav = useSelector((state) => state.CheckOut.isOpen); // Assuming you have an isOpen property in CheckOutSlice
  let totalAmount = 0;
  if (cardItems.length > 0) {
    totalAmount = cardItems.reduce((total, item) => {
      if (item.amount === null || item.amount === undefined) {
        console.log("item.amount is null or undefined");
        return total;
      }
      return total + Number(item.amount);
    }, 0);
  }
  const handleCheckOut = () => {
    console.log(isOpenNav);
  };
  console.log(totalAmount);

  //   if (!isOpenNav) {
  //     return null;
  //   }

  return (
    isOpenNav && (
      <div
        className="bg-zinc-700 text-white absolute z-30 top-0 left-0 w-full h-screen"
        onClick={() => dispatch(open())}
      >
        <div
          className="h-full bg-slate-900 sm:w-[40rem] min-w-[15rem] overflow-y-auto"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="p-6">
            <div className="flex items-center justify-between">
              <div
                className="flex items-center cursor-pointer"
                onClick={() => dispatch(open())}
              >
                <HiChevronLeft />
                <span className="text-[0.95rem] uppercase select-none">
                  Continue Shopping
                </span>
              </div>
              <div>Shopping Bag ({totalAmount})</div>
            </div>
            <div className="mt-8">
              {cardItems.length === 0 ? (
                <div className="uppercase text-center text-white flex items-center justify-center text-3xl h-[60vh]">
                  Your Cart is empty
                </div>
              ) : (
                <>
                  {cardItems.map((cardItem) => {
                    return (
                      <CheckOutItems
                        key={cardItem.id}
                        cardItem={cardItem}
                        className="flex"
                      />
                    );
                  })}
                  <div className="flex justify-between items-center mt-12">
                    <div>Total Cost : ${totalAmount}</div>
                    <HiTrash
                      onClick={() => dispatch(clear())}
                      color="red"
                      size={22}
                      className="cursor-pointer"
                    />
                  </div>
                  <div
                    onClick={handleCheckOut}
                    className="bg-[#000] text-[#fff] p-3 mt-12 text-center cursor-pointer"
                  >
                    Check Out
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    )
  );
}

export default CheckOut;
