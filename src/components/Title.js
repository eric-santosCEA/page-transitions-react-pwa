import React , {useEffect, useRef} from 'react'
import {TweenMax, Power3} from 'gsap'

const Title = ({lineContent, lineContent2}) => {

    let line1 = useRef(null)
    let line2 = useRef(null)

    useEffect(() => {
        TweenMax.staggerFrom(
          [line1, line2],
          0.8,
          {
            y: 64,
            ease: Power3.easeOut,
          },
          0.2
        );
      },[line1,line2]);

    return (
        <div>
            <h1 className="page-title">
                <div className="line-wrap">
                    <div ref={el => line1 = el} className="line">
                        Hello I am,
                    </div>
                </div>
                <div className="line-wrap">
                    <div ref={el => line2 = el} className="line">
                        Eric
                    </div>
                </div>
            </h1>
        </div>
    )
}
export default Title