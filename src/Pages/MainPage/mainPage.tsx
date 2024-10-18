import React from "react";
import { Link } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BodyPage from "./otherPages/bodyPage.tsx";
import LipitPage from "../MainPage/otherPages/lipitPage.tsx";

import CalculateIndeks from "./otherPages/calculateIndeks.tsx";
function MainPage() {
  return (
    <div className="">
      <div className="gap-x-5 mb-4">
        <Router>
          <div>
            <nav className="gap-x-5 mb-4">
              <ul className="flex space-x-5 pt-10 pl-8 text-gray-300 text-sm font-semibold">
                <li>
                  <Link
                    to="/"
                    className="border border-gray-600 bg-gray-800 py-2 px-4 rounded-md hover:bg-gray-700 transition duration-300"
                  >
                    Vücut Kütle Endeksi Nedir?
                  </Link>
                </li>
                <li>
                  <Link
                    to="/bmi"
                    className="border border-gray-600 bg-gray-800 py-2 px-4 rounded-md hover:bg-gray-700 transition duration-300"
                  >
                    Vücut Kitle Endeksi Hesaplama
                  </Link>
                </li>
                <li>
                  <Link
                    to="/bmr"
                    className="border border-gray-600 bg-gray-800 py-2 px-4 rounded-md hover:bg-gray-700 transition duration-300"
                  >
                    Bazal Metabolizma Hızı Hesaplama
                  </Link>
                </li>
              </ul>
            </nav>
            <Routes>
              <Route path="/" element={<BodyPage />} />
              <Route path="/bmi" element={<CalculateIndeks />} />
              <Route path="/bmr" element={<LipitPage />} />
            </Routes>
          </div>
        </Router>
      </div>
    </div>
  );
}

export default MainPage;
