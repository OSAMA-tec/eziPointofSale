import React, { useState } from "react";
// import { FaFilter } from "react-icons/fa";
// import { BiChevronDown } from "react-icons/bi";
// import { DefinedRange } from "react-date-range";

// import { format } from "date-fns";
// import { addDays } from "date-fns";
import { Link } from "react-router-dom";
import { AiOutlinePlus } from "react-icons/ai";
import StockTransferTbl from "../Tables/StockTransferTbl";

const ListStockTransfer = () => {
  return (
    <div className="flex flex-col items-center min-h-screen justify-self-center w-full p-5 bg-gray-100">
      <div className="flex justify-start items-start w-full">
        <h1 className="text-xl font-semibold">Stock Transfers</h1>
      </div>

      <div className="flex flex-col bg-white border-t-[3px] rounded-md w-full mt-5 border-blue-500">
        <div className="flex justify-between mt-2 text-sm mx-5">
          <h1 className="text-xl font-semibold text-start p-5">
            All Stock Transfers
          </h1>
          <Link
            to={"/home/stock-transfers/create"}
            className="flex items-center justify-center mx-5 font-semibold w-20 h-10 rounded-md mt-3 text-white bg-blue-500"
          >
            <AiOutlinePlus size={15} /> Add
          </Link>
        </div>

        <StockTransferTbl />
      </div>
    </div>
  );
};

export default ListStockTransfer;
