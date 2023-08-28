"use client";
import "./style.scss";
import { getHeroDataByUrl } from "../../../../lib/hero";
import { usePathname, useParams } from "next/navigation";
const Hero = async () => {
  const params = useParams();
  let path = usePathname();
  let categoryId = params.categoryId;
  let hostName =
    process.env.NEXT_PUBLIC_Host_Name != undefined
      ? process.env.NEXT_PUBLIC_Host_Name
      : "";
  let requestedURl = path.toString().replace(hostName, "");
  /* console.log("path: " + path)
    console.log("hostName: " + hostName)
    console.log("requestedURl v1: " + requestedURl) */
   // console.log("requestedURl v3: " + )
  if (requestedURl == "/") {
    requestedURl = "/home";
  }

  const content = await getHeroDataByUrl(requestedURl, categoryId) ;

  var divImage = {
    backgroundImage: "url(" + content.url + ")",
  };
  return (
    <div className="hero" style={divImage}>
      {content.title && content.subTitle && (
        <div>
          {content.titleColor && content.titleColor.code ? (
            <>
              <h1 className="title" style={{ color: content.titleColor.code }}>
                {content.title}
              </h1>
              <div
                className="sub-title"
                style={{ color: content.titleColor.code }}
              >
                {content.subTitle}
              </div>
            </>
          ) : (
            <>
              <h1 className="title">{content.title}</h1>
              <div className="sub-title">{content.subTitle}</div>
            </>
          )}
        </div>
      )}

      {content.title && !content.subTitle && (
        <>
          {content.titleColor && content.titleColor.code ? (
            <div>
              <h1 style={{ color: content.titleColor.code }}>
                {content.title}
              </h1>
            </div>
          ) : (
            <div>
              <h1>{content.title}</h1>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default Hero;
