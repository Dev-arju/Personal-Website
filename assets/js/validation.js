
    var nameScreen = document.getElementById("nameScreen");
    var emailScreen = document.getElementById("emailScreen");
    var subScreen =document.getElementById("subScreen");
    var msgScreen=document.getElementById("msgScreen");

    
    

    function validateName(){
        let name = document.getElementById("name").value;

        if( name.length ===0 || name === null){
            nameScreen.innerHTML = "Name is Required";
            return false;
        }else if( !name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)){
            nameScreen.innerHTML = "Write Full Name";
            return false;
        }else{
            nameScreen.innerHTML ="";
            return true;
        }

    }

    function validateEmail(){
        let email =document.getElementById("email").value;

        if(email.length === 0){
            emailScreen.innerHTML="Email is Required";
            return false;
        }else if(!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
            emailScreen.innerHTML = "Invalid Email";
            return false;
        }else{
            emailScreen.innerHTML = "";
            return true;
        }

    }

    function validateSub(){
        let subject= document.getElementById("subject").value;

        if(subject.length == 0){
            subScreen.innerHTML = "Add a Subject";
            return false;
        }else if(subject.length < 5){
            subScreen.innerHTML = "please enter 6 more characters";
            return false;
        }else{
            subScreen.innerHTML = "";
            return true;
        }
    }

    function validateMsg(){
        let msg=document.getElementById("msg").value;
        
        if(msg.length == 0){
            msgScreen.innerHTML = "Message box cannot be empty";
            return false;
        }else{
            msgScreen.innerHTML = "";
            return true;
        }

    }
    