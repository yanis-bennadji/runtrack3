function jourtravaille(date) {
    const joursFeries2020 = [
        new Date("2020-01-01"), 
        new Date("2020-04-13"), 
        new Date("2020-05-01"), 
        new Date("2020-05-08"), 
        new Date("2020-05-21"), 
        new Date("2020-06-01"), 
        new Date("2020-07-14"), 
        new Date("2020-08-15"), 
        new Date("2020-11-01"), 
        new Date("2020-11-11"), 
        new Date("2020-12-25")  
    ];

    let jour = date.getDate();
    let mois = date.getMonth() + 1;
    let annee = date.getFullYear();
    let jourSemaine = date.getDay();

    if (jourSemaine === 0 || jourSemaine === 6) {
        console.log(`Non, le ${jour} ${mois} ${annee} est un week-end.`);
        return;
    }

    const isHoliday = joursFeries2020.some(ferie => 
        ferie.getDate() === jour && (ferie.getMonth() + 1) === mois && ferie.getFullYear() === annee
    );
    
    if (isHoliday) {
        console.log(`Le ${jour} ${mois} ${annee} est un jour férié.`);
        return;
    }

    console.log(`Oui, le ${jour} ${mois} ${annee} est un jour travaillé.`);
}

let testDate1 = new Date('2020-05-01');
jourtravaille(testDate1);

let testDate2 = new Date('2020-06-06');
jourtravaille(testDate2);

let testDate3 = new Date('2020-09-01');
jourtravaille(testDate3);
