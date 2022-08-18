const sizeOfGrid = 16;
const container = document.querySelector(".container")


const createGrid = (amountOfGrids) => {
    for (let i = 0; i<amountOfGrids; i++) {
        const row = document.createElement("div")
        row.classList.add("grid-row")

        for (let j = 0; j<amountOfGrids; j++) {
            const gridBox = document.createElement("div")
            gridBox.classList.add("grid-box")
            row.appendChild(gridBox)
        }

        container.appendChild(row)
    }
}

createGrid(sizeOfGrid)