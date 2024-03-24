
// function to calculate speed points
const points = (speed) => {
    if (speed==="" || isNaN(speed)) {
        return "Input a number"
    }
        
    
    else if (speed <= 70) {
        return "OK"
    }
    else {
        let balance = (speed*1) - 70
        let points = Math.floor(balance / 5)
        if (points > 12) {
            console.log("License suspended")
        }
        else {
            return points;
    }
}
}
console.log(points("60"))