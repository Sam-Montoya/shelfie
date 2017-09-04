import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../../App.css';

export default class Main extends Component {
    render () {
        return (
          <div>
            
              <Link to='/shelf/1'>
                <button className='button'>Shelf A</button>
              </Link>
              <Link to='/shelf/2'>
              <button className='button'>Shelf B</button>
              </Link>
              <Link to='/shelf/3'>
              <button className='button'>Shelf C</button>
              </Link>
              <Link to='/shelf/4'>
              <button className='button'>Shelf D</button>
              </Link>
          </div>  
        );
    }
}