"use strict";

// ===================================================
//   	   JS-Vertiefung – Project Caesar Cipher
// ===================================================

console.log("%c JS-Vertiefung – Project Caesar Cipher", "color: tomato");

// Aufgabenstellung:
// Die Caesar-Verschlüsselung ist ein einfaches symmetrisches Verschlüsselungsverfahren, das auf der monographischen und monoalphabetischen Substitution basiert. Bei der Verschlüsselung wird jeder Buchstabe des Klartexts auf einen Geheimtextbuchstaben abgebildet. Diese Abbildung ergibt sich, indem man die Zeichen eines geordneten Alphabets um eine bestimmte Anzahl zyklisch nach rechts verschiebt (rotiert); zyklisch bedeutet, dass man beim Verschieben über Z hinaus wieder bei A anfangend weiterzählt. Die Anzahl der verschobenen Zeichen bildet den Schlüssel, der für die gesamte Verschlüsselung unverändert bleibt.
// Hier ein Beispiel für eine Verschiebung um drei Zeichen:
// Klartext-Alphabet: a b c d e f g h i j k l m n o p q r s t u v w x y z
// Geheimtextalphabet: D E F G H I J K L M N O P Q R S T U V W X Y Z A B C
// Schlüssel: 3
// Mit diesem Schlüssel würde das Wort "wikipedia" also als „ZLNLSHGLD“ verschlüsselt werden.
// Verstanden? Dann erstelle eine HTML-Seite mit einem Formular, in dem User:innen zwischen Kodierung und Dekodierung wählen können.
// Das Formular hat zwei Eingaben (die Zeichenfolge und den Schlüssel) und eine Ausgabe (das verschlüsselte Ergebnis).

const btnEncrypt = document.querySelector("#btnEncrypt");
const btnDecrypt = document.querySelector("#btnDecrypt");
const output = document.querySelector("#output");

btnEncrypt.addEventListener("click", () => {
    let numArr = [];
    let charArr = [];
	const encryptTextInput = document.querySelector("#encryptText").value;
    const keyInput = Number(document.querySelector("#keyInput").value);
    const encryptTextInputArr = [...encryptTextInput];
    
    encryptTextInputArr.forEach(elem => {
        numArr.push(elem.codePointAt(elem));
    });
    
    numArr.forEach(elem => {
        charArr.push(String.fromCharCode(elem+keyInput));
    });

    output.style.opacity = '1';
    output.textContent = charArr.join("");
    charArr = [];
    numArr = [];

});

btnDecrypt.addEventListener("click", () => {
    let numArr = [];
    let charArr = [];
    const encryptTextInput = document.querySelector("#encryptText").value;
    const keyInput = Number(document.querySelector("#keyInput").value);
    const encryptTextInputArr = [...encryptTextInput];

    encryptTextInputArr.forEach(elem => {
        numArr.push(elem.codePointAt(elem));
    });
    
    numArr.forEach(elem => {
        charArr.push(String.fromCharCode(elem-keyInput));
    });

    output.style.opacity = '1';
    output.textContent = charArr.join("");
    charArr = [];
    numArr = [];
});
