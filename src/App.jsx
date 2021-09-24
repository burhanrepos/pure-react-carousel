import React, { useDebugValue, useState } from "react";
import SlideData from "./SlideData";

const App = () => {
    const [slideIndex,setSlideIndex]=useState(1);

    const previus =()=>{
        if(slideIndex<=1){
            setSlideIndex(SlideData.length);
        }
        else{
            setSlideIndex(slideIndex-1);
        }
             
    }
    const next =()=>{
        if(slideIndex>=SlideData.length){
            setSlideIndex(1);
        }
        else{
            setSlideIndex(slideIndex+1);
        }
             
    }
    const moveDot = (index) =>{
        setSlideIndex(index);
    }
    return (
        <>
        <div className="slideshow-container">
            {
                SlideData.map((slide, index) => {
                    return(
                    <div key={index} className={(index+1===slideIndex)?"slide fade show":"slide fade"}>
                        <div className="numbertext">{slide.id}/{SlideData.length}</div>
                        <img src={slide.src} alt="image not fount" />
                        <div className="text">{slide.text}</div>
                    </div>
                );
                })
            }
            <a className="prev" onClick={()=>{previus()}}>&#10094;</a>
            <a className="next" onClick={()=>{next()}}>&#10095;</a>
        </div>
        <div>
            {
                Array.from({length:SlideData.length}).map((dot,index)=>{
                    return(
                            <span key={index} className={(index+1===slideIndex)?"active dot":"dot"} onClick={()=>{
                                return moveDot(index+1);
                            }}></span>
                    );
                })
            }
            
        </div>
        </>
    );
}
export default App;