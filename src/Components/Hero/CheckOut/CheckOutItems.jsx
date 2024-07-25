import React from "react";
import { useDispatch } from "react-redux";
import { add, decrease, increase,remove } from "../../../Store/Reducer/CartSlice";
import { HiX } from "react-icons/hi";

function CheckOutItems({ cardItem }) {
  console.log(cardItem);
  const dispatch = useDispatch();
  const { image, name,amount } = cardItem;
  const HandleClick = (item) => {
    dispatch(remove(item));
  };
  return (
    <div
    className="flex justify-between items-center border border-solid border-glass p-4 mb-6"
    
  >
    <img src={image} alt="" className="w-20 h-20 object-cover" />
    <div className="flex items-center justify-between gap-4">
      <div className="flex flex-col items-start">
        <div className="">{name}</div>
        <div className="flex items-center  gap-4 mt-2">
          <button
            className="flex items-center text-center justify-center w-8 h-8 rounded-full bg-[#000] text-[#fff]"
            onClick={() => dispatch(decrease(cardItem))}
          >
            -
          </button>
          <div>{amount}</div>
          <button
            className="flex items-center justify-center w-8 h-8 rounded-full bg-[#000] text-[#fff]"
            onClick={() => dispatch(increase(cardItem))}
          >
            +
          </button>
        </div>
      </div>
    </div>
    <div className="flex flex-col max-w-[4rem] items-center gap-3">
      <HiX
        className="cursor-pointer text-xl"
        onClick={() => HandleClick(cardItem)}
      />
      {/* <div className="">${(price * amount).toFixed(2)}</div> */}
    </div>
  </div>
  );
}

export default CheckOutItems;
