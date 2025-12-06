function createChild (timesToRepeat) {
    const container = document.querySelector(".container")
    const content = document.createElement("div")

    for (let i=0; i<timesToRepeat;i++){
        content.classList.add("container")
        container.appendChild(content)
    }
}

createChild(16)