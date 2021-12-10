$(document).ready(() => {
//drag and drop
const imgc = document.getElementById("image")
const imgr = document.getElementById("imgr")
const imgn = document.getElementById("imgpri")

imgr.addEventListener("click", () => imgc.click())
imgr.addEventListener("dragover", (e) => {
e.preventDefault()
$("#imgr").css("background-color","grey");
})
imgr.addEventListener("dragleave", (e) => {
e.preventDefault()
$("#imgr").css("background-color","#c812f5");
})

const subimg = (file) => {
    const fileReader  = new FileReader()
    fileReader.readAsDataURL(file)
    fileReader.addEventListener("load", (e) => {
        imgn.setAttribute("src", e.target.result)
    })
}

imgr.addEventListener("drop", (e) => {e.preventDefault()
imgc.files = e.dataTransfer.files
const file = imgc.files[0]
subimg(file)
})

imgc.addEventListener('change', (e) => {
	const file = e.target.files[0]
	subimg(file)
})



});    