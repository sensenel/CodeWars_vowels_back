/**
 * Sie müssen mit der bereitgestellten Zeichenfolge (s) herumspielen.
 * Bewegen Sie Konsonanten 9 Stellen im Alphabet vorwärts. Wenn sie das 'z' passieren, beginnen Sie wieder bei 'a'.
 * Bewegen Sie Vokale 5 Stellen im Alphabet zurück. Wenn sie das "a" passieren, beginnen Sie wieder bei "z".
 * Für unsere polnischen Freunde zählt in dieser Kata das 'y' nicht als Vokal.
 * Ausnahmen:
 * Wenn das Zeichen 'c' oder 'o' ist, bewegen Sie es 1 Stelle zurück. Für 'd' verschieben Sie es 3 und für 'e' 4 Stellen zurück.
 * Wenn ein verschobener Buchstabe zu 'c', 'o', 'd' oder 'e' wird, setzen Sie ihn wieder auf seinen ursprünglichen Wert zurück.
 * Die bereitgestellte Zeichenkette wird immer klein geschrieben, ist nicht leer und enthält keine Sonderzeichen.
 * Übersetzt mit www.DeepL.com/Translator (kostenlose Version)
 */

 function vowelBack(s, split = s = s.split(''), charIndex = 0) {
    let regExVowel = /[aeiou]/g,
    regExCons = /[bcdfghjklmnpqrstvwxz]/g;

    for(let i = 0; i < s.length; i++) {
        if(regExVowel.test(s[i])) {
            if(s[i].charCodeAt(0) <= 100) {
                charIndex = 122 - 4 - (s[i].charCodeAt(0) - 97);
                let temp = String.fromCharCode(charIndex);
                s.splice(i, 1, temp);
            } else {
                charIndex = s[i].charCodeAt(0) - 4;
                let temp = String.fromCharCode(charIndex);
                s.splice(i, 1, temp);
            }
        } else if(regExCons.test(s[i])) {
            charIndex = s[i].charCodeAt(0) + 8;
            let temp = String.fromCharCode(charIndex);
            s.splice(i, 1, temp);            
        }
    }
    return s.join('');

    
    //return 'Konsonanten: ' + regExCons.test(s);
    //return 'Vokale: ' + regExVowel.test(s);
/*     let test = 'a';
    console.log(test.charCodeAt(0));
    test = String.fromCharCode(102);
    console.log(test); */
}


console.log('tabtbvba?: ' + vowelBack("testcase")); //, "tabtbvba");
/* console.log(vowelBack("codewars")); //, "bnaafvab");
console.log(vowelBack("exampletesthere")); //, "agvvyuatabtqaaa"); */
