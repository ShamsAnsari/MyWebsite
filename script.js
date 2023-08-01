function changeImage1() {
    var image = document.getElementById('curr_score_graph');
    if (image.src.match("../images/Finance/curr_score.png")) {
        image.src = "../images/Finance/curr_score_thresh.png";
    } else {
        image.src = "../images/Finance/curr_score.png";
    }
}

function changeImage2() {
    var image = document.getElementById('sharpe_and_ret');
    if (image.src.match("../images/Finance/sharpe_ratio.png")) {
        image.src = "../images/Finance/avg_returns.png";
    } else {
        image.src = "../images/Finance/sharpe_ratio.png";
    }
}