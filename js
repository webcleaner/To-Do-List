 <script>
        
            /*document.getElementById/'list'/.innerHTML=addToDo//;  //need to get value of input and make it appear in ul
            var toDo="";
            function addToDo     need to get value of input and make it appear in ul
            return toDo;*/
            
                    var ourForm = document.getElementById("ourForm")//create a var, stores obj which represents html element
                    var ourField= document.getElementById("ourField")
                    var ourList = document.getElementById("ourList")  
                       //returns an object that represents html element, save into variable
                    ourForm.addEventListener("submit", (e)=> {
                       e.preventDefault()
                      //  alert ("Thanks for clicking form");
                        createItem(ourField.value)  //x   argument so we need parameters in our function
                      //practice accessing the users input
                    
                    //document.getElementById("list").innerHTML=x;
        
                    })

                    function createItem(x){  //parameter represents whatever user types into field
                        var ourHTML= `<li>${x} <button onclick="deleteItem(this)">Delete</button></li>`//make template 4 item, user input template literal,dynamic
                       // ourList.insertAdjacentHTML("beforeend", x)  /*give Method 2 args. 1. Where to add content, 2. run parameter thru (value of user's input)
                        ourList.insertAdjacentHTML("beforeend", ourHTML) 
                        ourField="" //if the user clicks the submit btn if the text field got automatically focused again so that if they wanted to add another item they would already be in input field
                        ourField.focus()  //focus on input field
                    }

                    function deleteItem (elementToDelete){
                        alert("Delete requested") //How can we focus on the item to delete it
                        elementToDelete.parentElement.remove() //select the HTML element housing elementToDelete
                    }

                    //need to store this data somewhere, so user info not removed at refresh
    </script>
