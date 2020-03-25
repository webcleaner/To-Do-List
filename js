 <script>
        
    debugger;    //document.querySelector --for class selection
    var userInput = document.getElementById("userInput")  //input
    var ourList = document.getElementById("ourList")   //tasks from user
    var ourForm = document.getElementById("ourForm").addEventListener ("submit", (e) => {
            e.preventDefault()

            //  createItem(userInput.value)
           //   deleteItem (ourList.value) 
            })

           function createItem (x) {
              
              var ourHTML = `<li> ${x} <button onclick = "deleteItem (this)"> Delete </button> </li>`    
              ourList.insertAdjacentHTML ("beforeend", ourHTML);
              userInput.value="";
              userInput.focus ()
           }
           
           function deleteItem (x) {
              x.parentElement.remove()
           }
              
   </script>
    
