import React from 'react'
import leftArrow from './icons/left-arrow.svg'
import rightArrow from './icons/right-arrow.svg'

export default function BtnSlider({direction, moveSlide}) {

    return (
        <button 
        onClick={moveSlide}
        className={direction === "next" ? "btn-slide next": "btn-slide prev"}>
            <img src={direction === "next" ? rightArrow : leftArrow} alt="icone flèche" />
        </button>
    )
}

/* ou alors comme ca 
export default function BtnSlider({props}) {

    return (
        <button 
        onClick={props.moveSlide}
        className={props.direction === "next" ? "btn-slide next": "btn-slide prev"}>
            <img src={props.direction === "next" ? rightArrow : leftArrow} alt="icone flèche" />
        </button>
    )
}
*/
