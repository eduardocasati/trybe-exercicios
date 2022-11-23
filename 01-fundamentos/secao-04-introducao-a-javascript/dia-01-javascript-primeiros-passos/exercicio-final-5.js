let angle1 = 50;
let angle2 = 80;
let angle3 = 50;

let angleAdd = angle1 + angle2 + angle3;

let angleTrueFalse;

if (angle1 && angle2 && angle3 < 0) {
    console.log("ERRO: Um ou mais ângulos são inválidos!");
} else if (angle1 && angle2 && angle3 > 0 && angleAdd == 180) {
    console.log(angleTrueFalse = true);
} else if (angle1 && angle2 && angle3 > 0 && angleAdd < 180) {
    console.log(angleTrueFalse = false);
}