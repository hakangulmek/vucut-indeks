import React from "react";

function MainPage() {
  return (
    <div className="">
      <div className="gap-x-5 mb-4">
        <ul className="flex space-x-5 pt-10 pl-8 text-gray-300 text-sm font-semibold">
          <li>
            <a
              href="/"
              className="border border-gray-600 bg-gray-800 py-2 px-4 rounded-md hover:bg-gray-700 transition duration-300"
            >
              Vücut Kütle Endeksi Nedir?
            </a>
          </li>
          <li>
            <a
              href="/bmi"
              className="border border-gray-600 bg-gray-800 py-2 px-4 rounded-md hover:bg-gray-700 transition duration-300"
            >
              Vücut Kitle Endeksi Hesaplama
            </a>
          </li>
          <li>
            <a
              href="/bmr"
              className="border border-gray-600 bg-gray-800 py-2 px-4 rounded-md hover:bg-gray-700 transition duration-300"
            >
              Bazal Metabolizma Hızı Hesaplama
            </a>
          </li>
          <li>
            <a
              href="/whr"
              className="border border-gray-600 bg-gray-800 py-2 px-4 rounded-md hover:bg-gray-700 transition duration-300"
            >
              Bel Kalça Oranı Hesaplama
            </a>
          </li>
        </ul>
      </div>
      <div className="pl-20 pt-20">
        <div className="grid place-content-center">
          <h1 className="text-5xl font-bold text-red-50 ">
            Vücut Kitle Endeksi Hesaplama
          </h1>
          <div className="border rounded-md h-[400px] w-120 bg-white mt-4">
            <div className="flex flex-col justify-center items-center">
              <div className="flex flex-col justify-center items-center mt-4">
                Hakan
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainPage;
