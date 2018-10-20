const height = 500;
const width = 900;

d3.select("body").append("svg").attr('height',height).attr('width', width);
const svg = d3.select('svg');

svg.append("line").attr("x1",400).attr("x2",550).attr("y1",450).attr("y2",550).attr("color","red")