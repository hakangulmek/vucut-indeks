import React, { useState } from "react";

const CalculateIndeks = () => {
  const [sonuc, setSonuc] = useState(0);
  const [sonucCategori, setSonucCategori] = useState("");
  const [sonucImage, setSonucImage] = useState("/logo192.png");
  const [formData, setFormData] = useState({
    height: 0,
    weight: 0,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: parseFloat(value) || 0, // Değeri sayıya çevir, boş olursa 0 yap
    }));
  };

  const handleCalculate = () => {
    const weight = formData.weight / 100;
    const sonuc = formData.height / (weight * weight);
    setSonuc(sonuc);

    if (sonuc < 18.5) {
      setSonucCategori("Zayıf");
      setSonucImage("/zayıf_insan.jpeg");
    } else if (sonuc >= 18.5 && sonuc < 24.9) {
      setSonucCategori("Normal Kilolu");
      setSonucImage("/nolmal_kilolu.jpeg");
    } else if (sonuc >= 25 && sonuc < 29.9) {
      setSonucCategori("Fazla Kilolu");
      setSonucImage("/kilolu_insan.jpeg");
    } else {
      setSonucCategori("Obez");
      setSonucImage("/obez_kilolu.jpeg");
    }

    setFormData({
      height: 0,
      weight: 0,
    });
  };

  // Formu temizle
  return (
    <div className="pl-20 pt-20">
      <div className="grid place-content-center">
        <h1 className="text-5xl font-bold text-red-50 ">
          Vücut Kitle Endeksi Hesaplama
        </h1>
        <div className="border rounded-md h-[400px] w-120 bg-white mt-4 max-w-120">
          <div className="flex flex-row justify-between pl-14 pt-12">
            {/* Left Side: Inputs */}
            <div className="flex flex-col pr-8">
              <label className="text-gray-600 text-sm font-semibold">
                Height (KG)
              </label>
              <input
                type="number"
                min={0}
                name="height"
                className="border border-gray-300 rounded-md w-60 h-8 mt-1 p-2 text-sm"
                value={formData.height} // input değeri state'deki değerle senkronize
                onChange={handleChange} // input değişikliğini yakala
              />

              <label className="text-gray-600 text-sm font-semibold pt-6">
                Weight (CM)
              </label>
              <input
                type="number"
                min={0}
                name="weight"
                className="border border-gray-300 rounded-md w-60 h-8 mt-1 p-2 text-sm"
                value={formData.weight} // input değeri state'deki değerle senkronize
                onChange={handleChange} // input değişikliğini yakala
              />

              <label className="text-gray-600 text-sm font-semibold pt-6">
                Sonuç
              </label>
              <div className="border border-gray-300 rounded-md w-60 h-8 mt-1 p-2 text-sm">
                <p>{sonuc}</p>
              </div>

              <button
                className="border border-gray-300 bg-gray-800 text-white rounded-md w-60 h-8 mt-6 p-1 text-md hover:bg-gray-700 transition duration-300"
                onClick={handleCalculate}
              >
                Hesapla
              </button>
            </div>

            {/* Right Side: Durum */}
            <div className="">
              <div className="pr-20">
                <div className="text-center">
                  <h1 className="text-gray-700 text-lg font-semibold pb-1">
                    Durum
                  </h1>
                  <div className=" rounded-2xl w-52 h-auto shadow-lg overflow-hidden ">
                    <h1 className="py-3 text-purple-500 font-bold text-md ">
                      {sonucCategori}
                    </h1>
                    <img
                      src={sonucImage}
                      alt=""
                      className="w-full h-48 object-cover rounded-xl"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CalculateIndeks;
