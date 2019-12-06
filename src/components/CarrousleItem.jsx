


import React from 'react'
import '../assets/styles/components/CarrouselItem.scss'
import play from '../assets/static/play-icon.png'
import plus from '../assets/static/plus-icon.png'
import PropTypes from 'prop-types'

const CarrouselItem = ({cover,title,year,contentRating, duration})=> (
    <div className="carousel-item">
        <img className="carousel-item__img" src={cover} alt=""  />
        <div className="carousel-item__details">
          <div>
            <img className="carousel-item__details--img" src={play} alt="Play Icon"/> 
            <img className="carousel-item__details--img" src={plus} alt="Plus Icon"/> 
          </div>
          <p className="carousel-item__details--title"> {title}</p>
          <p className="carousel-item__details--subtitle">{`${year} ${contentRating} ${duration}`}  </p>
        </div>
      </div>

)

CarrouselItem.propTypes ={
    cover:PropTypes.string,
    title:PropTypes.string,
    year:PropTypes.number,
    contentRating:PropTypes.string,
    duration:PropTypes.number,
}
export default CarrouselItem