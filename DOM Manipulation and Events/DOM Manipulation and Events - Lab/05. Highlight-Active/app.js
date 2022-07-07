function focused() {
    let mainDiv = document.getElementsByTagName("div")[0];

    Array.from(mainDiv.getElementsByTagName("input")).forEach(element => {
        element.addEventListener("focus",focus);
    });

    Array.from(mainDiv.getElementsByTagName("input")).forEach(element => {
        element.addEventListener("blur",focusLost);
    });


    function focus(e) {
        let parent = e.target.parentNode;
       parent.classList.add("focused");
    }


    function focusLost(e) {
        let parent = e.target.parentNode;
       parent.classList.remove("focused");
    }
}


function focused() {
    let inputFields = Array.from(document.querySelectorAll('input'));
    //let inputFields = document.getElementsByTagName('input');
 
 
    for(let i = 0; i < inputFields.length; i++){
        let inputField = inputFields[i];
 
        inputField.addEventListener('focus',onFocus);
        inputField.addEventListener('blur',onBlur);
    }
 
 
    function onFocus(event){
        event.target.parentNode.classList.add('focused');
    }
 
    function onBlur(event){
        event.target.parentNode.classList.remove('focused');
    }
 
 }