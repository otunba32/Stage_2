import React from 'react'

export const Button = ({ label, className, icon, imgStyle }) => {
  return (
    <div>
        <button className={className}>
            <p className=' pr-[10px]'>{label}</p>
            <img src={icon} className={imgStyle} />
        </button>
    </div>
  )
}
