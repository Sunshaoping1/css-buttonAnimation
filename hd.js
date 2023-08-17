const hd = document.querySelector(".hd")

Array(3).fill(undefined).forEach(()=>{
    
    hd.insertAdjacentHTML("beforeend","<div></div>")
})