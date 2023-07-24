import './style.scss' 
import { Hero } from '../../../../types';
const Hero = (props: Hero) => {

    var divImage = {
        backgroundImage: "url(" + props.url + ")"
    }
    return (
        <div className="hero" style={divImage}>
            {props.headingOne && props.headingTwo && (
                <div>
                    <div className="title">{props.headingOne}</div>
                    <div className="sub-title">{props.headingTwo}</div>
                </div>
            )
            }

            {props.headingOne && !props.headingTwo && (
                <div>
                    <h1>{props.headingOne}</h1>
                </div>
            )
            }
        </div>

    );

}


export default Hero;