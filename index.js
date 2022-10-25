
searchButton.addEventListener("click",(e)=>{   
    e.preventDefault();
        var city = document.getElementById("inp").value; 
        document.getElementById("inp").value=""
        
        fetch("https://api.openweathermap.org/data/2.5/weather?q="+city+"&units=metric&appid=b0841866646d13956463b335eeaea4c0")
        .then((Response)=>{
            if (!Response.ok) {
                document.getElementById("cityName").innerHTML="No weather found.";
                document.getElementById("degree").innerHTML= "__°C"
                document.getElementById("humidity").innerHTML="Humidity__%"
                document.getElementById("wind").innerHTML="Wind Speed__km/h"
                document.getElementById("pic").style.display="none"
                throw new Error("No weather found.");               
            }
            document.getElementById("pic").style.display="flex"
            return Response.json();           
        })    
        .then((data)=>{
            console.log(data);
            document.getElementById("cityName").innerHTML=data.name
            document.getElementById("degree").innerHTML=data.main.temp+ "°C"
            document.getElementById("humidity").innerHTML="Humidity "+data.main.humidity+ "%"

            const myObj = data.weather[0];
            document.getElementById("condetion").innerHTML=myObj.description
            
            const icon = myObj.icon
            document.querySelector(".img").src="https://openweathermap.org/img/wn/" + icon + ".png";       
            document.getElementById("wind").innerHTML="Wind Speed "+data.wind.speed+"km/h"  
        }) 
});





