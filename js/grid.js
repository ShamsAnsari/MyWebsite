class Grid{

    constructor(numRows, numCols, data){
        this.numRows = numRows
        this.numCols = numCols
        this.matrix = []
        for(let r = 0; r < data.length; r++){
            this.matrix.push([])
            for(let c = 0; c < data[r].length; c++){
                let n = data[r][c][0]
                let e = data[r][c][1]
                let s = data[r][c][2]
                let w = data[r][c][3]
                this.matrix[r][c] = new Tile(n, e, s, w)
            }
        }
    }

    toString(){
        let str = ""
        for(let r = 0; r < this.matrix.length; r++){
            str += this.matrix[r] + "\n"
        }
        return str
    }

}

class Tile{

    constructor(n_c, e_c, s_c, w_c){
        this.n_c = n_c
        this.e_c = e_c
        this.s_c = s_c
        this.w_c = w_c
    }

    toString(){
        return `${this.n_c}${this.e_c}${this.s_c}${this.w_c}`
    }

}