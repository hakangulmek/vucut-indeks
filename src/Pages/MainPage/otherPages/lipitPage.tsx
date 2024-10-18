import React, { useState, useEffect } from "react";

const LipitPage = () => {
  const [sonuc, setSonuc] = useState<number | string>(0);
  const [formData, setFormData] = useState(() => {
    // localStorage'dan verileri al veya varsayılan değerleri kullan
    const savedData = localStorage.getItem("bmhFormData");
    return savedData
      ? JSON.parse(savedData)
      : {
          height: 0,
          weight: 0,
          gender: "",
        };
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: parseFloat(value) || value, // Cinsiyet için değeri sayıya çevirme, yoksa olduğu gibi tut
    }));
  };
  useEffect(() => {
    localStorage.setItem("bmhFormData", JSON.stringify(formData));
  }, [formData]);

  const handleCalculate = () => {
    let bmh = 0;
    const { weight, height, gender } = formData;

    if (gender === "Kadın") {
      bmh = 447.593 + 9.247 * weight + 3.098 * height - 4.33;
    } else if (gender === "Erkek") {
      bmh = 88.362 + 13.397 * weight + 4.799 * height - 5.677;
    } else {
      // Cinsiyet seçilmemişse hata mesajı göster
      setSonuc("Lütfen cinsiyet seçiniz");
      return;
    }

    // Sonucu en yakın tam sayıya yuvarlayalım
    bmh = Math.round(bmh);
    console.log("bmh", bmh);
    setSonuc(bmh);
  };
  console.log("formData", formData);
  console.log("sonuc", sonuc);
  return (
    <div className="pl-20 pt-20">
      <div className="grid place-content-center">
        <h1 className="text-5xl font-bold text-red-50 ">
          Bazal Metabolizma Hesaplama
        </h1>
        <div className="border rounded-md h-[400px] w-120 bg-white mt-4 max-w-120">
          <div className="flex flex-col pr-8 pl-14 pt-12">
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

            <label className="text-gray-600 text-sm font-semibold pt-2">
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
            <label className="text-gray-600 text-sm font-semibold pt-2">
              Cinsiyet
            </label>
            <select
              name="gender"
              className="border border-gray-300 rounded-md w-60 h-10 mt-1 p-2 text-sm bg-white text-gray-800"
              value={formData.gender}
              onChange={handleChange}
            >
              <option value="" className="text-gray-400 ">
                Seçiniz
              </option>
              <option value="Kadın">Kadın</option>
              <option value="Erkek">Erkek</option>
            </select>
            <label className="text-gray-600 text-sm font-semibold pt-2">
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
        </div>
      </div>
    </div>
  );
};

export default LipitPage;
