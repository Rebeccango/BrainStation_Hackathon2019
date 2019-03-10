import React from 'react';


export default class VideoPlayer extends React.Component{
    render(){
        return(
            <div className="videoPlayer__section">
                <video controls width="100%"
                        poster="https://img.theculturetrip.com/840x440/smart//wp-content/uploads/2016/02/titanic-movie-promo-stills-wallpaper-4.jpg">
                    <source src="https://www.youtube.com/watch?v=5LGEiIL1__s&t=143s"
                            type="mp3"/>
                </video>
            </div>
        )
    }
}