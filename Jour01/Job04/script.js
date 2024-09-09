let année = 2001;
let année2 = 2004;


function bisextile(année) {
    if ((année % 4 === 0 && année % 100 !== 0) || (année % 400 === 0)) {
        return true;
    } else {
        return false;
    }
}

if (bisextile(année)) {
    console.log(année + "True.");
} else {
    console.log(année + "False.");
}

if (bisextile(année2)) {
    console.log(année2 + "True.");
} else {
    console.log(année2 + "False.");
}
