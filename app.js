const showBtn = document.querySelector(".show-btn")
const modal = document.querySelector(".modal")
const closeBtn = document.querySelector(".close-btn")
const ovr = document.querySelector(".overlay")


const addHidden = () => {
    modal.classList.add("hidden")
    ovr.classList.add("hidden")
}

const removeHidden = () => {
    modal.classList.remove("hidden")
    ovr.classList.remove("hidden")
}

showBtn.addEventListener("click", removeHidden)
closeBtn.addEventListener("click", addHidden)
ovr.addEventListener("click", addHidden)

document.addEventListener("keydown", (e) => {
    if (e.key == "Escape"){
        addHidden()
    }
})