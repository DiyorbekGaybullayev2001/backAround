
let btn = document.getElementById("btn")

btn.onclick = function backAround(){
    
    let str = document.getElementById("matn").value
    let p = document.getElementById("par")
    let text1 = str.charAt(str.length -1)

    return p.innerHTML = text1+str+text1
  }