window.addEventListener("load", init); // Preis berechnen//
document.addEventListener("DOMContentLoaded", hinzufügen); //button//
function init(_event) {
    console.log("init");
    let fieldsetElement = document.getElementsByTagName("fieldset");
    for (let i = 0; i < fieldsetElement.length; i++) {
        let fieldset = fieldsetElement[i];
        fieldset.addEventListener("change", handleChange);
    }
}
function handleChange(_event) {
    console.log(_event);
    calculatePrice(_event);
}
function calculatePrice(_event) {
    let anfangsPreis = 0;
    document.getElementById("Übersicht").innerHTML = ''; //Jedes mal, wenn eine neue Angabe gemacht wurde, wird die Überichts erst gelöscht und dann neu berechnet//
    let input = document.getElementsByTagName("input");
    for (let i = 0; i < input.length; i++) {
        if (input[i].checked == true) { // Wenn das element aufgrund des events angesprochen wurde, dann wird der value auf den anfangspreis gerechent//
            let preis = Number(input[i].value);
            anfangsPreis += preis;
            let create = document.createElement("p"); // Die Angaben werden im HTML neu generiert und an die Übersicht gahängt//
            create.innerHTML = `

         <p> ${input[i].name}</p>`;
            document.getElementById("Übersicht").appendChild(create);
        }
        if (input[i].name == "Stepper") {
            let anzahlKugeln = Number(input[i].value);
            let anzahlPreis = Number(input[i].id);
            anfangsPreis += anzahlKugeln * anzahlPreis;
            if (anzahlKugeln > 0) {
                let create = document.createElement("p");
                create.innerHTML = `
                <p>${input[i].value} ${input[i].className}</p>`;
                document.getElementById("Übersicht").appendChild(create);
            }
        }
    }
    document.getElementById("preis").innerHTML = anfangsPreis.toFixed(2).toString();
}
//# sourceMappingURL=Main.js.map