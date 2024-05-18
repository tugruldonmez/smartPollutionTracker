import React from 'react';

const Hakkimizda = () => {
  return (
    <div className='w-full h-full p-8 pl-16 bg-slate-50'>
      <div className='bg-sptYesili w-3/12 h-fit text-center text-2xl p-2 text-white' id='title'>
        <p>Smart Pollution Tracker Nedir ?</p>
      </div>
      <div className='w-9/12'>
        <p className='text-lg font-bold pt-10'>Kuruluş Ön Bilgileri</p>
        <p className='pt-6'>
          Projemiz, web ve mobil uygulama geliştirme alanında faaliyet göstermektedir. Şirketimiz, 20 Ekim 2023 tarihinde kurulmuştur. Bu proje, ekip üyelerimizin ortak çabasıyla oluşturulan bir iş planına dayanmaktadır. İş planı, projenin hedeflerini, kapsamını ve zaman çizelgesini belirleyerek, etkili bir proje yönetimi stratejisi izlemeyi amaçlamaktadır.
        </p>
        <p className='text-lg font-bold pt-10'>Proje Özeti</p>
        <p className='pt-6'>
          Projemiz, şehirdeki kirlilik seviyelerini analiz ederek sürdürülebilirlik önlemleri almayı ve çevre kalitesini artırmayı hedefler. Birleşmiş Milletler ‘in sürdürülebilir kalkınma hedeflerine katkı sağlamayı amaçlar. Sağlıkla ilgili hedeflere odaklanarak çevresel kirliliği azaltmayı, şehir planlamasını iyileştirip sürdürülebilir bir yaşam alanı oluşturmayı planlar. Toplumun çevresel sorumluluklarını artırmayı ve çevre dostu davranışları ödüllendiren bir sistem oluşturmayı içerir. Bireylerin sağlıklı yaşam ve çevresel etkileşim arasındaki ilişkiyi vurgular, karbon ayak izi hesaplama sistemleriyle akciğer kanseri riskini değerlendirir.
        </p>

        <p className='text-lg font-bold pt-10'>Proje Tanımı Özet Tablosu</p>
        <div className='overflow-x-auto pt-6'>
          <table className='min-w-full bg-white border border-gray-200'>
            <tbody>
              <tr>
                <th className='py-2 px-4 border-b bg-gray-50 text-left font-medium text-gray-600'>Proje Sahipleri</th>
                <td className='py-2 px-4 border-b'>Tuğrul Dönmez(Frontend Dev)<br />Emirhan Özcan(Backend Dev, DBA)<br />Emrecan Er(Mobile Application Developer)<br />Bertan Barak(DevOps)</td>
              </tr>
              <tr>
                <th className='py-2 px-4 border-b bg-gray-50 text-left font-medium text-gray-600'>Projenin Adı</th>
                <td className='py-2 px-4 border-b'>Smart Pollution Tracker</td>
              </tr>
              <tr>
                <th className='py-2 px-4 border-b bg-gray-50 text-left font-medium text-gray-600'>Proje Ortamı</th>
                <td className='py-2 px-4 border-b'>Web, Mobil</td>
              </tr>
              <tr>
                <th className='py-2 px-4 border-b bg-gray-50 text-left font-medium text-gray-600'>Proje Ekip Bilgileri</th>
                <td className='py-2 px-4 border-b'>
                  Tuğrul Dönmez (Mail: tugruldonmez23@gmail.com) <br />
                  Emirhan Özcan (Mail: emirhanozcan@gmail.com)<br />
                  Emrecan Er (Mail: emrecaner047@gmail.com)<br />
                  Bertan Barak (Mail: bertanbarak@gmail.com)
                </td>
              </tr>
              <tr>
                <th className='py-2 px-4 border-b bg-gray-50 text-left font-medium text-gray-600'>Proje Başlangıç Tarihi</th>
                <td className='py-2 px-4 border-b'>20.10.2023</td>
              </tr>
              <tr>
                <th className='py-2 px-4 text-left bg-gray-50 font-medium text-gray-600'>Proje Teslim Tarihi</th>
                <td className='py-2 px-4'>04.06.2024</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Hakkimizda;
