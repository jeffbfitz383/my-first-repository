const h2 = document.createElement("h2");
h2.textContent = "This content added by JavaScript";


document.querySelector("body").appendChild(h2);


function SubmitAnswer(event)
{
    var trigger = event.srcElement;
    let input = document.querySelector('input');
    
    if(input.value === "page 2"){
        location.replace('page2');
    }
}