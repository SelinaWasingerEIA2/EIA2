
window.addEventListener("load", init); // Preis berechnen//
document.addEventListener("DOMContentLoaded", hinzufügen); //button//



function init(_event: Event): void { // über diese Funktion werden alle Fieldsets angesprochen und durchlaufen. Sie bekommen ein change-event//
    console.log("init");
    let fieldsetElement: HTMLCollectionOf<HTMLFieldSetElement> = document.getElementsByTagName("fieldset");

    for (let i: number = 0; i < fieldsetElement.length; i++) {
        let fieldset: HTMLFieldSetElement = fieldsetElement[i];
        fieldset.addEventListener("change", handleChange);

    }
}

function handleChange(_event: Event): void {
    console.log(_event);
    calculatePrice(_event);

}

function calculatePrice(_event: Event): void {
    let anfangsPreis: number = 0;
    document.getElementById("Übersicht").innerHTML = ''; //Jedes mal, wenn eine neue Angabe gemacht wurde, wird die Überichts erst gelöscht und dann neu berechnet//
    let input: HTMLCollectionOf<HTMLInputElement> = document.getElementsByTagName("input");
    for (let i: number = 0; i < input.length; i++) {
        if (input[i].checked == true) { // Wenn das element aufgrund des events angesprochen wurde, dann wird der value auf den anfangspreis gerechent//
            let preis: number = Number(input[i].value);
            anfangsPreis += preis;

            let create = document.createElement("p"); // Die Angaben werden im HTML neu generiert und an die Übersicht gahängt//
            create.innerHTML = `

         <p> ${input[i].name}</p>`
            document.getElementById("Übersicht").appendChild(create);
        }

        if (input[i].name == "Stepper") {
            let anzahlKugeln: number = Number(input[i].value);
            let anzahlPreis: number = Number(input[i].id)
            anfangsPreis += anzahlKugeln * anzahlPreis;
            if (anzahlKugeln > 0) {

                let create = document.createElement("p");
                create.innerHTML = `
                <p>${input[i].value} ${input[i].className}</p>`

                document.getElementById("Übersicht").appendChild(create);
            }

        }
    }
    document.getElementById("preis").innerHTML = anfangsPreis.toFixed(2).toString();
}