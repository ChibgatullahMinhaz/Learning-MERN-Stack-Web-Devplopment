function needWood(chirq, table, bed) {
    const chaier = 3;
    const tableWood = 10;
    const bedWood = 50;
    const chaierQuentityWood = chirq *chaier;
    const tableQuentityWood = table * tableWood;
    const bedQentitywood = bed * bedWood;
    const totalWood = chaierQuentityWood + tableQuentityWood + bedQentitywood;
    return totalWood;
}
console.log(needWood(4, 0,0))