function getGrade(points) {
  if (points >= 90 && points <= 100) {
    return "A";
  }
  if (points >= 85) {
    return "B";
  }
  if (points >= 75) {
    return "C";
  }
  if (points >= 70) {
    return "D";
  }
  return "F";
}

function rateStudent(name, points) {
  if (points < 0 || points > 100) {
    console.log(`${name} má neplatný počet bodů: ${points}`);
    return;
  }

  const grade = getGrade(points);
  console.log(`${name} získal(a) ${points} bodů – známka ${grade}`);
}

rateStudent("Martina Fialová", 95);
rateStudent("Jakub David", 86);
rateStudent("Soňa Jelínková", 79);
rateStudent("Pavel Soukup", 71);
rateStudent("Kateřina Foltýnová", 55);

//Výsledek:
//Martina Fialová získal(a) 95 bodů – známka A
//Jakub David získal(a) 86 bodů – známka B
//Soňa Jelínková získal(a) 79 bodů – známka C
//Pavel Soukup získal(a) 71 bodů – známka D
//Kateřina Foltýnová získal(a) 55 bodů – známka F
