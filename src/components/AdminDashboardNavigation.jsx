import React from "react";
import { Link } from "react-router-dom";

function AdminDashboardNavigation() {
  return (
    <>
      <nav className="border-2 flex flex-col w-1/12 flex-grow-0">
        <Link 
          to={"orders"}
          className="font-medium text-base cursor-pointer my-1 bg-slate-300 p-1 hover:bg-slate-200"
        >
          Orders
        </Link>
        <Link
          to={"payments"}
          className="font-medium text-base cursor-pointer my-1 bg-slate-300 p-1 hover:bg-slate-200"
        >
          Payments
        </Link>
        <Link
          to={"admin-products"}
          className="font-medium text-base cursor-pointer my-1 bg-slate-300 p-1 hover:bg-slate-200"
        >
          Products
        </Link>
        <Link
          to={"Payouts"}
          className="font-medium text-base cursor-pointer my-1 bg-slate-300 p-1 hover:bg-slate-200"
        >
          Payout
        </Link>
      </nav>
    </>
  );
}

export default AdminDashboardNavigation;
