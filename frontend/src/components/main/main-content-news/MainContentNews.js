import React from 'react'
import iklim from '../../img/iklimsaglik.jpg'
import toz from '../../img/toz.jpeg'
import komur from '../../img/komurfabrika.jpg'

const MainContentNews = () => {
  return (
    <div className='relative  w-full h-fit  flex justify-evenly'>
        <div id='title' className='absolute w-full  h-fit'>
            <p className=' text-2xl font-bold font-sans'>Haberler</p>
        </div>
        <div className='w-full flex justify-evenly'>
            <div className='w-3/12 h-fit '>
                <div id='imgdiv' className='w-full h-fit mt-16 relative  overflow-hidden bg-cover bg-no-repeat'>
                    <img src={iklim} className='ax-w-xs transition duration-300 ease-in-out hover:scale-110' style={{ width: '471px', height: '250px' }} ></img>
                </div>
                <div id='softtitle' className=' w-full h-fit text-start mt-8'>
                    <p className=' text-gray-500'>
                        Basın Açıklamaları
                    </p>
                </div>
                <div id='title' className=' w-full h-fit  pt-5'>
                    <p className=' text-2xl font-bold text-start'>
                        İklim Değişiklikliğinin Halk Sağlığına Etkileri İnceleyen Lancet Geri Sayım 2024 Avrupa Raporu Yayınlandı
                    </p>
                </div>
                <div id='content' className=' w-full h-56  text-start text-lg pt-6'>
                    <p>
                        Lancet Halk Sağlığı dergisinin küresel düzeyde sağlık ve iklim değişikliği alanındaki ilerlemeleri takip eden çalışması kapsamında…
                    </p>
                </div>
            </div>
            <div className='w-3/12 h-fit '>
                <div id='imgdiv' className='w-full h-fit mt-16 relative  overflow-hidden bg-cover bg-no-repeat'>
                    <img src={komur} className='ax-w-xs transition duration-300 ease-in-out hover:scale-110' style={{ width: '471px', height: '250px' }} ></img>
                </div>
                <div id='softtitle' className=' w-full h-fit text-start mt-8'>
                    <p className=' text-gray-500'>
                        Blog
                    </p>
                </div>
                <div id='title' className=' w-full h-fit  pt-5'>
                    <p className=' text-2xl font-bold text-start'>
                        AVRUPA BİRLİĞİ KÖMÜR MADENCİLİĞİNDEN KAYNAKLI METAN GAZINI AZALTMAK İÇİN HAREKETE GEÇİYOR
                        
                    </p>
                </div>
                <div id='content' className=' w-full h-56  text-start text-lg pt-6'>
                    <p>
                        Metan, iklim değişikliğine neden olan en önemli ikinci sera gazıdır. Kömür ise, AB'de enerji sektöründeki… 
                    </p>
                </div>
            </div>
            <div className='w-3/12 h-fit '>
                <div id='imgdiv' className=' w-full h-fit mt-16 relative  overflow-hidden bg-cover bg-no-repeat'>
                    <img src={toz} className='ax-w-xs transition duration-300 ease-in-out hover:scale-110' style={{ width: '471px', height: '250px'}} ></img>
                </div>
                <div id='softtitle' className=' w-full h-fit text-start mt-8'>
                    <p className=' text-gray-500'>
                        Basın Açıklamaları
                    </p>
                </div>
                <div id='title' className=' w-full h-fit  pt-5'>
                    <p className=' text-2xl font-bold text-start'>
                        Depremden bir yıl sonra Hatay hala sağlık limit değerinin 4 katı toz soluyor
                    </p>
                </div>
                <div id='content' className=' w-full h-56  text-start text-lg pt-6'>
                    <p>
                        Temiz Hava Hakkı Platformu, Türk Tabipleri Birliği ve Hatay Tabip Odası iş birliği ile...
                    </p>
                </div>
            </div>
    </div>
</div>

  )
}

export default MainContentNews
