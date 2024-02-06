import React from 'react'

function OldFilmsCard( {year,category,image,title,desc,duration}) {
  return (
    <div className='oldFilmsCard'>

        <div className="oldFilmsCard_container">
            <div className="top">
                <div className="year">
                    <p>{year}</p>
                </div>
                <div className="catgory">
                    <button>{category}</button>
                </div>
            </div>
            <div className="image">
                <img src={image} alt="" />
            </div>
            <div className="middle">
                <div className="title">
                    <p>{title}</p>
                </div>
                <div className="desc">
                    {desc}
                </div>
            </div>
            <div className="duration">
                <p><span>Duration:</span>{duration}</p>
            </div>
        </div>
    </div>
  )
}

export default OldFilmsCard