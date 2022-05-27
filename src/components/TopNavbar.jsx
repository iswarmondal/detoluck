function TopNavbar() {
  return (
    <nav className="flex justify-evenly items-center bg-slate-300 shadow-md p-3">
        <div className="flex items-center">
            <h2 className="text-lg font-bold text-yellow-600">Detoluck</h2>
        </div>
        <div className="flex items-center min-w-[70%] ml-6 justify-evenly text-gray-600">
            <p>Home</p>
            <p>Shop</p>
            <p>Orders</p>
            <p>Contact</p>
        </div>
    </nav>
  )
}

export default TopNavbar