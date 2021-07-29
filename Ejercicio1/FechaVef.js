let tipo,day,month,year;
const months=["¡ERROR MES NO VALIDO!","ener","febr","marz","abri","mayo","juni","juli","agos","sept","octu","novi","dici"];

export const FechaVef = (Fecha) => {
    
    for (let i = 0; i <Fecha.length; i++) {
        if (Fecha[2]=="/" && Fecha[7]=="/") {
            
            tipo = "Tipo 3" ;
            day= parseInt(Fecha.substr(0,2));     
            month=Fecha.substr(3,4);
            year= parseInt(Fecha.substr(8,4));

            for (let j = 1; j < months.length; j++) {
                if(months[j]===month){
                    month=j;
                    break;
                } 
            } 
        }else if(Fecha[4]=="-" && Fecha[7]=="-"){
        
            tipo="Tipo2"
            year= parseInt(Fecha.substr(0,4));     
            month=parseInt(Fecha.substr(5,2));     
            day= parseInt(Fecha.substr(8,2)); 

        }else if(Fecha[2]=="/" && Fecha[5]=="/"){
        
            tipo = "Tipo 1" ;
            day= parseInt(Fecha.substr(0,2));     
            month=parseInt(Fecha.substr(3,2));     
            year= parseInt(Fecha.substr(6,4)); 

        }else{
            alert("¡ERROR! FORMATO DE FECHA NO VALIDO")
            return [0,0,0,""]        
        }
        
}

    return [day,month,year,tipo]
}
