function numGenerate(){
    let NUMARR = [];
    let averagenum;        
    let sumnum;
    let productnum = 1;
    let stringnum = "";
    for (let i =0; i < 10; i++){
        NUMARR[i] = Math.round(Math.random()*20) - 10;

        let average = 0;

        average +=NUMARR[i];

        productnum *=NUMARR[i];                 //произведение

        stringnum += `${NUMARR[i]} `;           //вся строка

        if (i == NUMARR.length-1){
            averagenum = average / NUMARR.length;//среднее арифметическое
            sumnum = average;                   //сумма
        }
        
    }

    let maxnum = Math.max(...NUMARR);
    let minnum = Math.min(...NUMARR);

    

    document.querySelector("#result").innerHTML = `Сгенерировали: ${stringnum} <br>
    Минимальное: ${minnum} <br>
    Максимальное: ${maxnum} <br>
    Среднее арифметическое: ${averagenum} <br>
    Сумма чисел: ${sumnum}<br>
    Произведение чисел: ${productnum}`
}