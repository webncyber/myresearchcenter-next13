import { Hero as HeroType} from "../../../../types";
import EmailSignUpCardForm from "@/app/components/emailSignUpCard/EmailSignUpCard";
import "./style.scss";

const Hero = ({title, subTitle, heroImage, titleColor, showEmailSignUp} : HeroType) => {
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
              <div className="hero_signup-container">
                <div className="hero_signup-container_form">
                  {showEmailSignUp && (
                    <EmailSignUpCardForm/>
                  )}
                </div>
              </div>       
            </>
          ) : (
            <>
              <h1 className="title">{title}</h1>
              <div className="sub-title">{subTitle}</div>
              <div className="hero_signup-container">
                <div className="hero_signup-container_form">
                  {showEmailSignUp && (
                    <EmailSignUpCardForm/>
                  )}
                </div>
              </div>      
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
              <div className="hero_signup-container">
                <div className="hero_signup-container_form">
                  {showEmailSignUp && (
                    <EmailSignUpCardForm/>
                  )}
                </div>
              </div>      
            </div>
          ) : (
            <div>
              <h1>{title}</h1>
              <div className="hero_signup-container">
                <div className="hero_signup-container_form">
                  {showEmailSignUp && (
                    <EmailSignUpCardForm/>
                  )}
                </div>
              </div>      
            </div>
           
          )}
          
        </>
      )}
      
    </div>
  </>
  );
};

export default Hero;
