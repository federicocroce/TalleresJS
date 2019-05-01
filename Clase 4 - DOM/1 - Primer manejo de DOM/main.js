console.log("Fede Croce");

// const firstDiv = document.querySelector("#test-container");

window.onload = function () {
    console.log("Ya cargué el HTML")
}


function AddNewItem() {
    const list = document.getElementById("list");

    const inputValue = document.querySelector("#inputText").value;

    const li = document.createElement("li");

    li.innerHTML = inputValue;
    list.appendChild(li);

    document.querySelector("#inputText").value = "";
}




window.onload = function () {
    // document.querySelector("#inputText").oninput = function () {
    //     document.querySelector("#result").innerHTML = "Resultado: " + this.value;
    // };

    document.querySelector("#inputText").addEventListener("input", function(){
        document.querySelector("#result").innerHTML = "Resultado: " + this.value;
    }, false )
};

