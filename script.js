// I wanted to try using a function with '$' to 
$ = (id) => document.getElementById(id);

let ran = document.querySelectorAll(".range");
console.log(ran)
let box = $("box");

// declaring an 8 value border-radius string
let boxStyle = "50% 50% 50% 50% / 50% 50% 50% 50%"
console.log(boxStyle)
// create an array from the string
boxArray = boxStyle.split(" ");


ran.forEach(range => {
    range.addEventListener('change', () => {
        ran = range.getAttribute('id')
        value = range.value
        deforming(ran, value)
    })
})

arrayFix = (iOne, iTwo, val) => {
    boxArray[iOne] = val + "%"
    boxArray[iTwo] = 100 - val + "%"
    boxStyle = boxArray.join(" ")
    box.style.borderRadius = boxStyle
    updateStyle()
}

updateStyle = () => {
    box.style.borderRadius = boxStyle
}

deforming = (ran, value) => {
    switch(ran) {
        case "range_top":
            arrayFix(0, 1, value)
            break
        case "range_right":
            arrayFix(7, 6, value)
            break
        case "range_bottom":
            arrayFix(2, 3, value)
            break
        case "range_left":
            arrayFix(5, 8, value)
            break
        default:
             return
    }
}
