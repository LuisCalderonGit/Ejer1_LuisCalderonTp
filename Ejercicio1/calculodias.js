let dayTemp=0;
let numberDays=0;

const sumDays=[0,31,59,90,120,151,181,212,243,273,304,334]
export const calculodias = (month,day) => {
    
    for (let h = 0; h < sumDays.length; h++) {
        if((month-1) == h){
            dayTemp=sumDays[h];
        }
        }
    
    numberDays=dayTemp+day;
    return numberDays;
}
