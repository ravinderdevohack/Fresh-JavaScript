const clock = document.getElementById('clock')
// console.log(clock)
setInterval(function(){
    let date = new Date()
    clock.textContent = date.toLocaleTimeString()
    // console.log(date)
}, 1000);