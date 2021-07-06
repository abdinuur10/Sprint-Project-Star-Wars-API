import React from 'react'
import {link, Router, Switch} from "react-router-dom"

export default function StarList(props) {
    const { Stars } = props

    return (
        <div className="Stars-list">
          <nav>
            <h1 className="header">StarsList</h1>
            <div className="nav-links">
            </div>
          </nav>
          {movies.map(Stars => (
            <Link to={`/StarList/${Stars.id}`}>
            <div className="Stars-list"> 
              <h2>{star.title}</h2>
            </div>
    
            </Link>
          ))}
          </div>
        );
      }
      