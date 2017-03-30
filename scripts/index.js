import React from 'react'
import {render} from 'react-dom'
import * as d3 from 'd3';


var p = d3.selectAll("p");
p.attr("class", "graf");
p.style("color", "red");
console.log(p);



render(
  <h1 id='title'>Hello, React!!</h1>,
  document.getElementById('react-container')
)
