import React from "react";

function bodyPage() {
  return (
    <div className="rounded-lg border-gray-200 p-8   ">
      <h1 className="text-5xl font-bold text-red-50 pb-6 ">
        Vücut Kitle Endeksi Nedir?
      </h1>
      <p className="text-gray-300 text-sm font-semibold">
        Vücut kitle endeksi (VKİ), bir kişinin kilosunun, boyuna göre normal,
        zayıf ya da şişman olduğunu belirlemek için kullanılan bir ölçüttür.
        VKİ, kilogram cinsinden ağırlığın metre cinsinden boyun karesine
        bölünmesiyle hesaplanır. VKİ, 18.5 kg/m2'nin alt ında olanlar zayıf,
        18.5-24.9 kg/m2 arasında olanlar normal kilolu, 25-29.9 kg/m2 arasında
        olanlar fazla kilolu ve 30 kg/m2'nin üzerinde olanlar obez olarak kabul
        edilir. VKİ, 19. yüzyılın ortalarında Belçikalı bir istatistikçi olan
        Adolphe Quetelet tarafından geliştirilmiştir. VKİ, sağlık durumunun
        belirlenmesinde ve obezite ile ilişkilendirilen hastalıkların riskinin
        belirlenmesinde kullanılan en yaygın ölçüttür. VKİ, bir kişinin
        kilosunun, boyuna göre normal, zayıf ya da şişman olduğunu belirlemek
        için kullanılan bir ölçüttür. VKİ, kilogram cinsinden ağırlığın metre
        cinsinden boyun karesine bölünmesiyle hesaplanır. VKİ, 18.5 kg/m2'nin
        alt ında olanlar zayıf, 18.5-24.9 kg/m2 arasında olanlar normal kilolu,
        25-29.9 kg/m2 arasında olanlar fazla kilolu ve 30 kg/m2'nin üzerinde
        olanlar obez olarak kabul edilir. VKİ, 19. yüzyılın ortalarında
        Belçikalı bir istatistikçi olan Adolphe Quetelet tarafından
        geliştirilmiştir. VKİ, sağlık durumunun belirlenmesinde ve obezite ile
        ilişkilendirilen hastalıkların riskinin belirlenmesinde kullanılan en
        yaygın ölçüttür.
      </p>
      <h1 className="text-5xl font-bold text-red-50 pb-6 pt-9 ">
        Vücut Kitle İndeksi Dışında Neler Dikkate Alınır?
      </h1>
      <p className="text-gray-300 text-sm font-semibold">
        Vücut kitle indeksi (VKİ), vücuttaki yağ oranını hesaplamak için
        kullanılan bir ölçüttür, ancak bu ölçüt yalnızca bir kişinin boy ve kilo
        ölçümlerini dikkate alır ve bazı durumlarda yanıltıcı olabilir. Bu
        nedenle, VKİ sonuçlarının yanı sıra aşağıdaki faktörler de
        değerlendirilir:
      </p>
      <div>
        <ul className="text-gray-300 pt-6 font-semibold text-sm">
          <li>
            Bel Çevresi: Karın bölgesinde biriken yağlar, kalça veya bacaklarda
            biriken yağlardan daha fazla sağlık sorunlarına neden olabilir. Bu
            nedenle, bel çevresi ölçümü, bir kişinin obezite ve diğer sağlık
            sorunları riskini belirlemede önemli bir faktördür.
          </li>
          <li>
            Yağ Dağılımı: Vücuttaki yağın dağılımı da önemlidir. Örneğin, "elma"
            şekilli bir vücut tipi, karın bölgesinde biriken yağlar nedeniyle
            daha yüksek bir obezite riski taşırken, "armut" şekilli bir vücut
            tipi, kalça veya bacaklarda biriken yağlar nedeniyle daha düşük bir
            obezite riski taşır.
          </li>
          <li>
            Kas Dağılımı: Kas kütlesi, bir kişinin vücut ağırlığının bir kısmını
            oluşturur ve VKİ ölçümleri sırasında göz ardı edilir. Bu nedenle,
            bir kişinin yüksek kas kütlesi, yüksek VKİ değerlerine sahip
            olmasına rağmen normal yağ oranına sahip olabileceği anlamına
            gelebilir.
          </li>
          <li>
            Yaş, cinsiyet ve genetik özellikler: Yaş, cinsiyet ve genetik
            özellikler de VKİ ölçümlerini etkileyebilir. Örneğin, yaşlandıkça
            kas kütlesi azalırken yağ oranı artabilir. Ayrıca, bazı insanlar
            genetik olarak daha fazla yağ depolama eğiliminde olabilirler.{" "}
          </li>
        </ul>
      </div>
    </div>
  );
}

export default bodyPage;
