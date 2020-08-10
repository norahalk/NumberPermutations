import React, {Component} from 'react';
import Reveal from 'react-reveal/Reveal';

class Title extends Component {
    render(){
        var {Title, TitleP} = this.props;
        return(
            <div className="seo_sec_title text-center mb_70 mt_60">
                <Reveal effect="fadeInUp" duration={1300}><h2>{Title}</h2></Reveal>
                <Reveal effect="fadeInUp" duration={1600}><p>{TitleP}</p></Reveal>
            </div>
        )
    }
}
export default Title;
