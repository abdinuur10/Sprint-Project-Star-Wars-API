import React from 'react'
import {link, Router, Switch} from "react-router-dom"

export default function MovieList(props) {
    const { Stars } = props

    return (
        <div className="Stars-list">
          <nav>
            <h1 className="header">StarsList</h1>
            <div className="nav-links">
            </div>
          </nav>
          {/*  Use Link from React Router Dom to make each movie clickable */}
          {movies.map(Stars => (
            <Link to={`/movieList/${Stars.id}`}>
            <div className="movie-card"> 
              <h2>{star.title}</h2>
              <div className="movie-director">
                Director: <em>{stars.director}</em>
              </div>
              <div className="movie-metascore">
                Metascore: <strong>{starts.metascore}</strong>
              </div>
            </div>
    
            </Link>
          ))}
          </div>
        );
      }