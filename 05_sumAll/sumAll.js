const sumAll = function(st, en) {
    if (typeof st != "number" || 
        typeof en != "number" ||
        st < 0 ||
        en < 0)return "ERROR";
    
    let stn= st; 
    let enn = en;

    if (st > en)
    {
        stn = en;
        enn = st;
    }
    let stSum = stn*(stn - 1);
    stSum/=2;

    let enSum = enn*(enn + 1);
    enSum/=2;

    return enSum - stSum;

};

// Do not edit below this line
module.exports = sumAll;
