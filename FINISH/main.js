const data = [
    { day: 'Sunday', temp: 52 },
    { day: 'Monday', temp: 56 },
    { day: 'Tuesday', temp: 62 },
    { day: 'Wednesday', temp: 55 },
    { day: 'Thursday', temp: 52 },
    { day: 'Friday', temp: 57 },
    { day: 'Saturday', temp: 61 }
];

const margin = { top: 5, right: 5, bottom: 50, left: 50};
const height = 500;
const width = 960;

d3.select("body").append("svg").attr('height', 960).attr('width', width);
const svg = d3.select('svg');

let x = d3.scaleBand().rangeRound([0, width]).padding(0.1);
let y = d3.scaleLinear().rangeRound([height, 0]);

let g = svg.append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");


x.domain(data.map(function(d) { return d.day; }));
  y.domain([0, d3.max(data, function(d) { return d.temp; })]);

  g.append("g")
      .attr("class", "axis axis--x")
      .attr("transform", "translate(0," + height + ")")
      .call(d3.axisBottom(x));

  g.append("g")
      .attr("class", "axis axis--y")
      .call(d3.axisLeft(y))
    .append("text")
      .attr("transform", "rotate(-90)")
      .attr("y", 6)
      .attr("dy", "0.71em")
      .attr("text-anchor", "end")
      .text("Temperature");

  g.selectAll(".bar")
    .data(data)
    .enter().append("rect")
      .attr("class", "bar")
      .attr("x", function(d) { return x(d.day); })
      .attr("y", function(d) { return y(d.temp); })
      .attr("width", x.bandwidth())
      .attr("height", function(d) { return height - y(d.temp); });
