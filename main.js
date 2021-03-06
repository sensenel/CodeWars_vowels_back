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
      
    for(let i = 0; i < s.length; i++) {
        if(/[aeiou]/.test(s[i])) {
            if(s[i].charCodeAt(0) <= 100) {
                let shiftForm = 122 - 4 - (s[i].charCodeAt(0) - 97);
                charIndex = shiftForm != 101 || shiftForm != 111 ?
                            shiftForm : s[i].charCodeAt(0);
            } else {
                charIndex = (s[i] === 'o') ? s[i].charCodeAt(0) - 1 :
                            (s[i] === 'e') ? s[i].charCodeAt(0) - 4 : s[i].charCodeAt(0) - 5;
            }
            if((charIndex === 99 || charIndex === 100) || (charIndex === 101 || charIndex === 111)) charIndex = s[i].charCodeAt(0);
        } else {
            if(s[i].charCodeAt(0) >= 114) {
                let shiftForm = (97 + 8) - (122 - s[i].charCodeAt(0));
                charIndex = shiftForm != 99 || shiftForm != 100 ?
                            shiftForm : s[i].charCodeAt(0);
            } else {
                charIndex = (s[i] === 'c') ? s[i].charCodeAt(0) - 1 :
                            (s[i] === 'd') ? s[i].charCodeAt(0) - 3 : s[i].charCodeAt(0) + 9;
            }
            if((charIndex === 99 || charIndex === 100) || (charIndex === 101 || charIndex === 111)) charIndex = s[i].charCodeAt(0);
        }
        let temp = String.fromCharCode(charIndex);
        s.splice(i, 1, temp);            
    }
    return s.join('');
}

console.log('\n');
console.log('testcase\ntabtbvba: \n' + vowelBack("testcase")); //, "tabtbvba");
console.log('-------------');
console.log('codewars\nbnaafvab: \n' + vowelBack("codewars")); //, "bnaafvab");
console.log('-------------');
console.log('exampletesthere\nagvvyuatabtqaaa: \n' + vowelBack("exampletesthere")); //, "agvvyuatabtqaaa");
console.log('-------------');
console.log('returnofthespacecamel\naatpawnftqabyvbabvvau: \n' + vowelBack("returnofthespacecamel")); //, "agvvyuatabtqaaa");
console.log('\n');