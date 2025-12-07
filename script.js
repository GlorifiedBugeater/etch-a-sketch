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


function changeBackground() {

}

createChild(16)

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
