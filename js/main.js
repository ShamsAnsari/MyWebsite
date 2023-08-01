
const rectWidth = 40
const rectHeight = 40


let grid = parseGrid("output.txt")
let container = d3.select("#grid-container")

const svgWidth = grid.numCols * rectWidth
const svgHeight = grid.numRows * rectHeight

let svg = container.append("svg")
    .attr("width", svgWidth)
    .attr("height",  svgHeight)
    .style("display", "block")
    .style("margin", "auto")
let rect = svg.append("rect")
    .attr("x", 0)
    .attr("y", 0)
    .attr("width", svgWidth)
    .attr("height", svgHeight)
    .attr("fill", "darkblue")

renderGrid(svg, grid)