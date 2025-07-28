const actualPoints = 75;
const minGradPoints = 75;
const studentName = "Marie Novotná";

if (actualPoints >= minGradPoints) {
  console.log(
    `Student/ka ${studentName} prospěl/a s ${actualPoints} body, minimum bylo ${minGradPoints} bodů.`
  );
} else {
  console.log(
    `Student/ka ${studentName} neprospěl/a s ${actualPoints} body, minimum bylo ${minGradPoints} bodů. Chybělo mu/jí ${
      minGradPoints - actualPoints
    } bodů.`
  );
}

/*Cvičení ( ⌛00:00):
Vytvořte program, který bude vyhodnocovat, jestli má student dostatek bodů k úspěšnému ukončení studia.
Program ulož do složky: javascript-learning/exercises
Název souboru: student_absolvent.js

Vstupy: 
Počet bodů studenta.
Jméno studenta.

Hodnocení:
Minimální počet bodů pro úspěch: 75

Výsledek zaloguj srozumitelně do konzole s jménem.
Výzva:
Přidej možnost červeného diplomu do programu. Podmínka pro získání červeného diplomu je minimální počet bodů: 95
Program rozšiř tak, aby stále fungoval i pro předchozí podmínku

*/
