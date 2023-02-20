document.getElementById('myA').addEventListener("click", stopLink)

function stopLink(event){
    //let confirm= confirm("are you sure")
    //if (confirm){
      //  console.log("lets go")
   // } else{//
    event.preventDefault();
    console.log("link blocked");
    }
