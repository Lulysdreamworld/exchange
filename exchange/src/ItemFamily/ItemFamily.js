import React from 'react';
import './ItemFamily.css';
import { useState } from 'react';
import { items } from '../items';

function ItemFamily({ parent }) {

  return (
    <div className="itemFamily">

      <div className="container">
        {items.filter(item => item.parent.includes(`${parent}`)).map(uniqueItem => (
          <div className="item" key={uniqueItem.key}>
            <div className="props">
              <img src={`${uniqueItem.thumbnail}`} className="thumbnail"></img>
              <div >
                <h2 className="title">{uniqueItem.name}</h2>
                <div className="stats">
                  <p className="label">{uniqueItem.stats.motivation}</p>
                  <p className="label">{uniqueItem.stats.probability}</p>
                </div>
              </div>
            </div>
            <p className="title">{uniqueItem.weight}</p>
          </div>
        ))}
      </div>

    </div>
  );
}

export default ItemFamily;
