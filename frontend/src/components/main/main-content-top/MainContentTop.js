import React from 'react'
import population from '../../img/population.png'
import heart from '../../img/heart.png'
import sad from '../../img/sad.png'
import traffic from '../../img/traffic.png'


const MainContentTop = () => {
  return (
    <div className=' rounded-lg'>
        <div id='title' className=' mt-10 mb-6'>
            <p className=' text-5xl font-sans font-bold'>Hava Kirliliği</p>
            <p className=' text-xl font-sans font-semibold'>"Görünmez Katil"</p>
        </div>
        <div className='flex justify-evenly'>
            <div id='imgdiv' class="grid grid-rows-1 grid-flow-col gap-2 w-4.5/12 mx-2 items-center  rounded-lg h-fit text-start p-4">
                <div class="row-span-3 ... mr-4" >
                    <img src={population} style={{ width: '90px', height: '90px' }}></img>
                </div>
                <div id='titlediv' class="col-span-2 ...">
                    <p className=' text-xl font-bold'>DÜNYADA 8 MİLYON İNSAN</p>
                </div>
                <div id='contentdiv' class="row-span-2 col-span-2 ...">
                    <p className=' font-sans text-lg font-normal text-gray-900'>Dünya Sağlık Örgütü verilerine göre, dünyada her yıl 10 kişiden 9’u hava kirliliğine bağlı olarak hayatını kaybediyor.</p>
                </div>
            </div>
            <div id='imgdiv' class="grid grid-rows-1 grid-flow-col w-4.5/12 gap-2 mx-2 items-center  rounded-lg h-fit text-start p-4">
                <div class="row-span-3 ...  mr-4" >
                    <img src={traffic} style={{ width: '90px', height: '90px' }}></img>
                </div>
                <div id='titlediv' class="col-span-2 ...">
                    <p className=' text-xl font-bold'>Trafik kazalarının 6 katı</p>
                </div>
                <div id='contentdiv' class="row-span-2 col-span-2 ...">
                    <p className=' font-sans text-lg font-normal text-gray-900'>Türkiye’de 2017 yılından beri hava kirliliği nedeniyle trafik kazalarının en az 6 katı kadar kişi hayatını kaybetmektedir.</p>
                </div>
            </div>
        </div>
        <div className='flex justify-evenly mt-10'>
            <div id='imgdiv' class="grid grid-rows-1 grid-flow-col w-4.5/12 gap-2 mx-2 items-center  rounded-lg h-fit text-start p-4">
                <div class="row-span-3 ...  mr-4" >
                    <img src={heart} style={{ width: '90px', height: '90px' }}></img>
                </div>
                <div id='titlediv' class="col-span-2 ...">
                    <p className=' text-xl font-bold'>1.4 MİLYON KALP KRİZİ</p>
                </div>
                <div id='contentdiv' class="row-span-2 col-span-2 ...">
                    <p className=' font-sans text-lg font-normal text-gray-900'>Tüm dünyada hava kirliliği her yıl 1.4 milyon kalp krizi, 2.4 milyon kalp hastalığı ve 1.8 milyon solunum yolu hastalığı ve akciğer kanserine neden oluyor.
</p>
                </div>
            </div>
            <div id='imgdiv' class="grid grid-rows-1 grid-flow-col w-4.5/12 gap-2 mx-2 items-center  rounded-lg h-fit text-start p-4">
                <div class="row-span-3 ...  mr-4" >
                    <img src={sad} style={{ width: '90px', height: '90px' }}></img>
                </div>
                <div id='titlediv' class="col-span-2 ...">
                    <p className=' text-xl font-bold'>30 ilde 18 milyon kişi</p>
                </div>
                <div id='contentdiv' class="row-span-2 col-span-2 ...">
                    <p className=' font-sans text-lg font-normal text-gray-900'>2019 yılında, 30 ilde yaşayan yaklaşık 18 milyon kişi (nüfusun %21’i) yıl boyunca soluduğu havanın kalitesine dair yeterli veri yok.</p>
                </div>
            </div>
        </div>
        
    </div>
  )
}

export default MainContentTop
