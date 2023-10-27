import React from "react";

import { Link } from "react-router-dom";
import { AiOutlinePlus } from "react-icons/ai";
import StockAdjustmentTbl from "../Tables/StockAdjustmentTbl";

const ListStockAdjustment = () => {
  return (
    <div className="flex flex-col items-center min-h-screen justify-self-center w-full p-5 bg-gray-100">
      <div className="flex justify-start items-start w-full">
        <h1 className="text-xl font-semibold">Stock Adjustments </h1>
      </div>

      <div className="flex flex-col bg-white border-t-[3px] rounded-md w-full mt-5 border-blue-500">
        <div className="flex justify-between mt-2 text-sm mx-5">
          <h1 className="text-xl font-semibold text-start p-5">
            All stock adjustments
          </h1>
          <Link
            to={"/home/stock-adjustments/create"}
            className="flex items-center justify-center mx-5 font-semibold w-20 h-10 rounded-md mt-3 text-white bg-blue-500"
          >
            <AiOutlinePlus size={15} /> Add
          </Link>
        </div>

        <StockAdjustmentTbl />
      </div>
    </div>
  );
};

export default ListStockAdjustment;
