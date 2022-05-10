let t = document.createElement("input");
t.setAttribute("id", "txtbox");
t.setAttribute("type", "text");

let t1 = document.createElement("input");
t1.setAttribute("id", "ttbox");
t1.setAttribute("type", "text");

let t2 = document.createElement("input");
t2.setAttribute("id", "tox");
t2.setAttribute("type", "text");

let t3 = document.createElement("p");


let btn = document.createElement("button");
btn.setAttribute("id", "btnReadValue");
btn.textContent = "Read value";
btn.addEventListener("click", () => {
    let t = document.getElementById("txtbox");
    let t1 = document.getElementById("ttbox");
    let t2 = document.getElementById("tox")
    if(t.value && t1.value && t2.value){
        let b = t.value;
        let c = t1.value;
        let d = t2.value
        
        t3.innerHTML="values are"+"  "+ b+" , "+ c +" , "+ d;      
    }
});

document.body.appendChild(t);
document.body.appendChild(t1);
document.body.appendChild(t2);

document.body.appendChild(btn);

document.body.appendChild(t3);