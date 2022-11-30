function triangle (angle1, angle2, angle3) {

    if (angle1 < 0 || angle2 < 0 || angle3 < 0) {
        return 'erro';
    } else if (angle1 + angle2 + angle3 === 180) {
        return 'true';
    } else {
        return 'false';
    }
}

console.log(triangle(60, 60, 60));