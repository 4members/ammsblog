import React from 'react'
import { render } from 'react-dom'
import * as d3 from 'd3';

function theme(){

  var p = d3.selectAll("p");
  p.attr("class", "graf");
  p.style("color", "red");
  
}


render(
    <h1 id = 'title' > ff! < /h1>,
    document.getElementById('react-container')
)
