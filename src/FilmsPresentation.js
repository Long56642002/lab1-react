import React from 'react'

export default function FilmsPresentation({films}) {
  return (
    <div className='container'>
        <div className='column'>
        {films.map((film)=>(
            <div className='card'>
                <p>Id: {film.id}</p>
                <img src={film.image}/>
                <p>Title: {film.title}</p>
                <p>Year: {film.year}</p>
                <p>Nation: {film.nation}</p>
            </div>
        ))}
        </div>
    </div>
  )
}
