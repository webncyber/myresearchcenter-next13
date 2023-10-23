import { Hero as HeroType} from "../../../../types";
import "./style.scss";

const Hero = ({title, subTitle, heroImage, titleColor} : HeroType) => {
  if(title == undefined && heroImage == undefined)
  {
    title = "Page Not Found"
    heroImage = "/Images/404.jpg"
  }

  var divImage = {
    backgroundImage: "url(" + heroImage + ")",
  };
  
  
  return (
  <>
      <div className="hero" style={divImage}>
      {title && subTitle && (
        <div>
          {titleColor && titleColor.code ? (
            <>
              <h1 className="title" style={{ color: titleColor.code }}>
                {title}
              </h1>
              <div
                className="sub-title"
                style={{ color: titleColor.code }}
              >
                {subTitle}
              </div>
            </>
          ) : (
            <>
              <h1 className="title">{title}</h1>
              <div className="sub-title">{subTitle}</div>
            </>
          )}
        </div>
      )}

      {title && !subTitle && (
        <>
          {titleColor && titleColor.code ? (
            <div>
              <h1 style={{ color: titleColor.code }}>
                {title}
              </h1>
            </div>
          ) : (
            <div>
              <h1>{title}</h1>
            </div>
          )}
        </>
      )}
    </div>
  </>
  );
};

export default Hero;
