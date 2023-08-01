

colors = new Map()
colors["1"] = "red"
colors["2"] = "darkblue"
colors["3"] = "black"
colors["4"] = "yellow"

function renderGrid() {
    for (let r = 0; r < grid.numRows; r++) {
        for (let c = 0; c < grid.numCols; c++) {
            let x = c * rectWidth;
            let y = r * rectHeight;

            drawTile(grid.matrix[r][c], x, y)
        }
    }
}

function drawTile(tile, x, y) {

    drawTriangle(svg, colors[tile.n_c], x, y, 0)
    drawTriangle(svg, colors[tile.e_c], x, y, 90)
    drawTriangle(svg, colors[tile.s_c], x, y,  180)
    drawTriangle(svg, colors[tile.w_c], x, y, -90)

}

function drawTriangle(svg, color, x, y, degrees) {
    let p1 = [0, 0]
    let p2 = [rectWidth, 0]
    let p3 = [rectWidth / 2, rectWidth /2]
    let triangle = svg.append("polygon")
        .attr("points", `${p1[0]}, ${p1[1]} ${p2[0]},${p2[1]} ${p3[0]},${p3[1]}`)
        .attr("transform", `translate(${x},${y}) rotate(${degrees} ${p3[0]} ${p3[1]})`)
        .attr("stroke", "black")
        .attr("stroke-width", "1")
        .attr("fill", color)
    return triangle;
}