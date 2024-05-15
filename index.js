let icon = document.getElementById("mode");
// const body = document.body;
// console.log(body)
const menu = document.querySelector(".hamburger")
const sliding = document.querySelector(".links")

menu.onclick = function(){
    sliding.classList.toggle("slider")
}

// icon.addEventListener('click', function(event){
//     event.preventDefault();
//     body.classList.add("dark");
//     alert('hello lassy');
// })


icon.onclick = function(){
    document.body.classList.toggle("dark")
}
