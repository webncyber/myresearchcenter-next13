"use client"
import './style.scss' 
import  {getHeroDataByUrl} from '../../../../lib/hero'
import { usePathname } from 'next/navigation'
const Hero = async ()  => {
    let path = usePathname();
    let hostName = process.env.NEXT_PUBLIC_Host_Name != undefined ? process.env.NEXT_PUBLIC_Host_Name : "";
    let requestedURl = path.toString().replace(hostName, "")
    /* console.log("path: " + path)
    console.log("hostName: " + hostName)
    console.log("requestedURl v1: " + requestedURl) */

    if(requestedURl == "/"){
        requestedURl = "/home"
    }
    
   
    const content = await getHeroDataByUrl(requestedURl);

  
    var divImage = {
        backgroundImage: "url(" + content.url + ")"
    }
    return (
        <div className="hero" style={divImage}>
            {content.title && content.subTitle && (
                <div>
                   <h1 className='title'>{content.title}</h1>
                    <div className="sub-title">{content.subTitle}</div>
                </div>
            )
            }

            {content.title && !content.subTitle && (
                <div>
                    <h1>{content.title}</h1>
                </div>
            )
            }
        </div>

    );

}


export default Hero;