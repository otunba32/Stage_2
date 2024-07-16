import React from 'react'

export const Button = ({ label, className, icon, imgStyle, onClick}) => {
  return (
    <div>
        <button className={className} onClick={onClick}>
            <p className=' pr-[10px]'>{label}</p>
            <img src={icon} className={imgStyle} />
        </button>
    </div>
  )
}
