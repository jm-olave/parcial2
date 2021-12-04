import React, { useState, useEffect } from 'react';
import * as d3 from "d3"
export const Report = () => {
  const canvas = d3.select("#canvas");
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("/api/products?q")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const width = 700;
  const height = 500;
  const margin = { top:10, left:50, bottom: 40, right: 10};
  const iwidth = width - margin.left - margin.right;
  const iheight = height - margin.top -margin.bottom;
  
  const svg = canvas.append("svg");
  svg.attr("width", width);
  svg.attr("height", height);
  
  let g = svg.append("g").attr("transform", `translate(${margin.left},${margin.top})`);
  var tooltip = d3.select("body").append("div").attr("class", "toolTip");
  
  const y = d3.scaleLinear() 
      .domain([0, 500])
      .range([iheight, 0]);
  
  const x = d3.scaleBand()
  .domain(products.map(d => d.name) ) 
  .range([0, iwidth])
  .padding(0.1); 
  
  const bars = g.selectAll("rect").data(products);
  
  bars.enter().append("rect")
  .attr("class", "bar")
  .style("fill", "steelblue")
  .attr("x", d => x(d.name))
  .attr("y", d => y(d.stock))
  .attr("height", d => iheight - y(d.stock))
  .attr("width", x.bandwidth()) 
  
  g.append("g")
  .classed("x--axis", true)
  .call(d3.axisBottom(x))
  .attr("transform", `translate(0, ${iheight})`);  
  
  g.append("g")
  .classed("y--axis", true)
  .call(d3.axisLeft(y));
// added toolyip 
g.selectAll(".bar")
.data(products)
.enter().append("rect")
.attr("x", function(d) { return x(d.area); })
.attr("y", function(d) { return y(d.value); })
.attr("width", x.bandwidth())
.attr("height", function(d) { return height - y(d.value); })
.on("mousemove", function(d){
    tooltip
      .style("left", d3 - 50 + "px")
      .style("top", d3 - 70 + "px")
      .style("display", "inline-block")
      .html((d.area) + "<br>" + "£" + (d.value));
})
.on("mouseout", function(d){ tooltip.style("display", "none");});
  return (
    <section id='report'>
      <div className='report-container'>
        <div id = "canvas" />
      </div>
    </section>
  );
  


};