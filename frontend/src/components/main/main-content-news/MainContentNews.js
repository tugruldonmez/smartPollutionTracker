import React from 'react'

const MainContentNews = () => {
  return (
    <div className='relative z-10 w-full h-fit bg-red-400 flex justify-evenly'>
    <div id='title' className='absolute z-20 w-full bg-gray-200 h-fit'>
        <p className=' text-2xl font-bold font-sans'>Haberler</p>
    </div>
    <div className='w-full flex justify-evenly'>
        <div className='w-3/12 h-fit bg-black'>
            <div id='imgdiv' className=' w-full h-56 bg-red-500'>
            </div>
            <div id='softtitle' className=' w-full h-fit text-start mt-8'>
                <p className=' text-gray-500'>
                    Basın Açıklamaları
                </p>
            </div>
            <div id='title' className=' w-full h-fit bg-red-500 pt-5'>
                <p className=' text-2xl font-bold text-start'>
                    İklim Değişiklikliğinin Halk Sağlığına Etkileri İnceleyen Lancet Geri Sayım 2024 Avrupa Raporu Yayınlandı
                </p>
            </div>
            <div id='content' className=' w-full h-56 bg-red-500 text-start text-lg pt-6'>
                <p>
                    Lancet Halk Sağlığı dergisinin küresel düzeyde sağlık ve iklim değişikliği alanındaki ilerlemeleri takip eden çalışması kapsamında…
                </p>
            </div>
        </div>
        <div className='w-3/12 h-full bg-green-200'></div>
        <div className='w-3/12 h-full bg-blue-300'></div>
    </div>
</div>

  )
}

export default MainContentNews
