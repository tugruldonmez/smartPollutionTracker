import React from 'react'
import YouTube from 'react-youtube';


const MainContentVideo = () => {
  return (
    <div className=' w-full h-fit bg-gray-50 justify-center flex py-8'>
        <div className=' w-4/12 h-fit py-20 text-start'>
            <div className=' w-full pr-10' id='content'>
                <div id='videotitle' >
                    <p className=' text-2xl font-bold'>
                        Hava Kirliliği nedir
                    </p>
                </div>
                <div id='videocontent' >
                    <p className=' pt-6'>
                        Dünya Sağlık Örgütü’nün “tütünden bile tehlikeli” olarak nitelendirdiği hava kirliliği nedir? Sebepleri ve sonuçları nelerdir? Çocuklar üzerindeki etkisi nedir? Gittikçe kirlenen havayı korumak için neler yapabiliriz? Tüm bu soruların cevapları, videomuzda.
                    </p>
                </div>
            </div>
        </div>
        <div className=' w-4/12'>
            <div className=' w-full h-full ' id='video'>
            <iframe
                className="h-full w-full rounded-lg "
                src="https://www.youtube.com/embed/Wd0FzQTDM90"
                title="YouTube video player"
                allowFullScreen
            >
            </iframe>
            </div>
        </div>
    </div>
  )
}

export default MainContentVideo
