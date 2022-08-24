/* eslint-disable @next/next/no-img-element */
const ResturantInfo = () => {
  return (
    <>
      {" "}
      <div className="flex justify-between">
        <div className="flex items-center">
          <div className=" border-8 border-white rounded-lg shadow-md">
            <img src="../62cc4427f2dfe.jpg" alt="logo" className="w-20 h-20" />
          </div>
          <div className="flex flex-col justify-between h-20 mr-2">
            <div className="flex mt-3">
              <span className="material-icons-outlined text-lg text-yellow-200">
                star
              </span>
              <span className="text-xs font-bold mr-1 ml-2">4.5</span>
              <span className="text-xs text-gray-400">(۳۱,۶۱۹ امتیاز)</span>
            </div>
            <span className="text-lg font-bold text-gray-700">فست فود</span>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center rounded-2xl mainShadow w-full cursor-pointer mt-5 h-10 bg-white">
        <span className="material-icons-outlined text-lg text-green-500 hover:text-green-700 ml-3">
          info
        </span>
        <span className="text-md text-green-500 hover:text-green-700 ">
          اطلاعات و نظرات
        </span>
      </div>
    </>
  );
};

export default ResturantInfo;
