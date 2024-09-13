function Header() {
  return (
    <div className="flex justify-between items-center px-4 py-2 text-red-500 bg-white shadow-xl">
      <div className="flex flex-row">
        <i className="fa-solid fa-bars mr-4 mt-1 hover: cursor-pointer"></i>
        <a href="">
          <img
            src="src\assets\images\cookchef.png"
            alt="Logo"
            className="w-32"
          />
        </a>
      </div>

      <div className="flex space-x-4">
        <button className="bg-white text-red-500 border-red-500 px-2 py-2 font-bold text-xs rounded-full border-2 w-32">
          <i className="fa-heart fa-solid pr-2"></i>
          <span>Wishlist</span>
        </button>
        <button className="text-white bg-red-500 px-3  py-2 font-bold text-xs rounded-full  w-32">
          Connexion
        </button>
      </div>
    </div>
  );
}

export default Header;
