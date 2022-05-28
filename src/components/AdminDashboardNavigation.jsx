import React from "react";

function AdminDashboardNavigation() {
  return (
    <>
      <nav className="border-2 w-1/12 flex-grow-0">
        <h4 className="font-medium text-base cursor-pointer my-1 bg-slate-300 p-1 hover:bg-slate-200">
          Orders
        </h4>
        <h4 className="font-medium text-base cursor-pointer my-1 bg-slate-300 p-1 hover:bg-slate-200">
          Payments
        </h4>
        <h4 className="font-medium text-base cursor-pointer my-1 bg-slate-300 p-1 hover:bg-slate-200">
          Payout
        </h4>
      </nav>
    </>
  );
}

export default AdminDashboardNavigation;
