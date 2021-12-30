const getTotalpop = (total,num) => {
    const xhr = new XMLHttpRequest();
        xhr.open("GET", "https://restcountries.com/v3.1/all",true);
         xhr.responseType= "json";
        //  xhr.send();
         xhr.onload=()=> {
             const country = xhr.response;
            const total = country.reduce((val1,val2)=>{
                    return val1+val2.population;
            },0);
        
            console.log(total);
         }
        
         xhr.send();
        }
         getTotalpop();
    