import React from 'react'

export const GifGridItem = ({ title, url, id }) => {
  
  return (
    <div className='card animate__animated animate__bounce animate__fadeIn'>
        <img src={ url } alt={title } />
        <p>{ title }</p>
    </div>
  )
}