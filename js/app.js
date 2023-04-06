let myDom = document;

 
class Button {
    constructor(parentID, text) {
        this.parentID = parentID;
        this.text = text;
    }

    render(){
        let myApp = document.getElementById(this.parentID);
        const myButtonHTML = myApp.innerHTML + "<button>"+ this.text + "</button>";
        myApp.innerHTML = myButtonHTML; 
    }
}

let button = new Button("app", "Esto es un Button creado con JS")
button.render();

class Input {
    constructor(parentID, type, value) {
        this.parentID = parentID;
        this.type = type;
        this.value = value;
    }

    render() {
        let myApp = document.getElementById(this.parentID);
        const myInputHTML = myApp.innerHTML + "<input type="+ this.type + " value=" + this.value +">";
        myApp.innerHTML = myInputHTML;
       
    }   
}

let myInput = new Input("app", "text", "input");
myInput.render();
