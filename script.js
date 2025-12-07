function createChild (timesToRepeat) {
    const container = document.querySelector(".container")
    const content = document.createElement("div")

    for (let i=0; i<timesToRepeat;i++){
        console.log("hello",i)
        const content = document.createElement("div")
        content.classList.add("child")
        content.setAttribute("id",("child"+i))
        container.appendChild(content)

        
    }
}




createChild(100)


const button = document.querySelector("#btn")
button.addEventListener("click",(e) =>{

    const kid = document.querySelectorAll(".child")
    kid.forEach(child =>child.remove())

    rowsQuantity = (prompt("How many rows?",4))
    createChild(rowsQuantity**2)
    newValue = 960/rowsQuantity+"px"
    const childWidth = document.querySelectorAll(".child")
    const childHeigth = document.querySelectorAll(".child")
    childWidth.forEach((child) => {
        child.style.width = newValue
    })
    childHeigth.forEach((child) => {
        child.style.height = newValue
    })

    const hoverOver =document.querySelectorAll(".child")
    const hoverOut =document.querySelectorAll(".child")

    hoverOver.forEach((child) => {
        child.addEventListener("mouseover", (e) => {
        console.log("event OVER fired")
        e.target.style.background = "blue" 
    })
})

    hoverOut.forEach((child) => {
        child.addEventListener("mouseout", (e) => {
        console.log("event OUT fired")
        // e.target.style.background = "grey" 
    })
})
}) 

const hoverOver =document.querySelectorAll(".child")
const hoverOut =document.querySelectorAll(".child")

hoverOver.forEach((child) => {
    child.addEventListener("mouseover", (e) => {
        console.log("event OVER fired")
        e.target.style.background = "blue" 
    })
})

hoverOut.forEach((child) => {
    child.addEventListener("mouseout", (e) => {
        console.log("event OUT fired")
        // e.target.style.background = "grey" 
    })
})

// let hover = document.querySelectorAll(".child")
// hover.mouseover = (event) => {console.log("test")}
// const btn = document.querySelectorAll(".child");
// btn.addEventListener("click", () => {
//   alert("Hello World");
// })
