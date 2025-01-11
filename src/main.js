export const main =(() => {
    let cityName,weatherCondition,temp,minTemp,maxTemp;
    let getElementCenter = () => {
        cityName = document.querySelector('#left #cityName');
        weatherCondition=document.querySelector('#left #weatherCondition')
        temp=document.querySelector('#left #temp');
        minTemp=document.querySelector('#left #minTemp');
        maxTemp=document.querySelector('#left #maxTemp');
    }
    let addDataCenter=(data)=>{
        cityName.textContent=data.address;
        weatherCondition.textContent=data.currentConditions.conditions;
        temp.textContent=data.days[0].temp+'°';
        minTemp.textContent="MIN: "+data.days[0].tempmin+'° '
        maxTemp.textContent="MAX: "+data.days[0].tempmax+'°'
    }
    let sunrise,sunset,chanceOfRain,humidity,windSpeed,feelsLike,precipitation,pressure,visibility,uvIndex;
    let getDataMoreDetails=()=>{
        sunrise=document.querySelector('#sunrise');
        sunset=document.querySelector('#sunset');
        chanceOfRain=document.querySelector('#chanceOfRain');
        humidity=document.querySelector('#humidity');
        windSpeed=document.querySelector('#windSpeed');
        feelsLike=document.querySelector('#feelsLike');
        precipitation=document.querySelector('#precipitation');
        pressure=document.querySelector('#pressure');
        visibility=document.querySelector('#visibility')
        uvIndex=document.querySelector('#uvIndex')
    }
    let addDataMoreDetails=(data)=>{
        sunrise.children[1].textContent=data.currentConditions.sunrise;
        sunset.children[1].textContent=data.currentConditions.sunset;
        chanceOfRain.children[1].textContent=data.currentConditions.precipprob+'%';
        humidity.children[1].textContent=data.currentConditions.humidity+'%';
        windSpeed.children[1].textContent=data.currentConditions.windspeed+' km/hr';
        feelsLike.children[1].textContent=data.currentConditions.feelslike+'°';
        precipitation.children[1].textContent=data.currentConditions.precip+' cm';
        pressure.children[1].textContent=data.currentConditions.pressure+' hPa';
        visibility.children[1].textContent=data.currentConditions.visibility+' km';
        uvIndex.children[1].textContent=data.currentConditions.uvindex;
    }
    return { getElementCenter,addDataCenter ,getDataMoreDetails,addDataMoreDetails};
})();