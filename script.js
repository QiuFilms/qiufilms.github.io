function countCustomers(){
    const numberElement = document.querySelector(".counted-number")

    let count = 0
    setInterval(() => {
        if(count > 500){
            return
        }
        numberElement.innerHTML = count + " <sup class='super'>+</sup>"
        count++
    }, 5);
}

countCustomers()


let done = false
const observer = new IntersectionObserver(entries => {
    // Loop over the entries
    entries.forEach(entry => {
      // If the element is visible
      if (entry.isIntersecting && !done) {
        setTimeout(() => {

          const num1 = document.querySelector(".pr1")
          const num2 = document.querySelector(".pr2")
          const num3 = document.querySelector(".pr3")
  
          let count1 = 0
          setInterval(() => {
              if(count1 > 60){
                  return
              }
              num1.innerHTML ="$ " +count1 + " <p>/month</p>"
              count1++
          }, 8);
  
          let count2 = 0
          setInterval(() => {
              if(count2 > 150){
                  return
              }
              num2.innerHTML ="$ " +count2 + " <p>/month</p>"
              count2++
          }, 8);
  
          let count3 = 0
          setInterval(() => {
              if(count3 > 270){
                  return
              }
              num3.innerHTML ="$ " + count3 + " <p>/month</p>"
              count3++
          }, 8);
        }, 1000);
        done = true
      }
    });
  });
  
observer.observe(document.querySelectorAll('.prices')[0]);


function showHideMenu(){
  const menu = document.querySelector(".menu-buttons")
  const close = document.querySelector(".close")
  const open = document.querySelector(".open")

  if(menu.style.display == "none"){
    menu.style.display = "block"
    open.style.display = "none"
    close.style.display = "block"
  }else{
    menu.style.display = "none"
    open.style.display = "block"
    close.style.display = "none"
  }
}
