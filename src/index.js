import './style.css';
import { data } from './getData.js';
import { main } from './main.js';
import { nextWeek } from './nextweek.js';
import { nextHours } from './nextHours.js';
import clearDay from "./img/clear-day.png";
import clearnight from "./img/clear-night.png";
import cloudy from "./img/cloudy.png";
import fog from "./img/fog.png";
import partlyCloudDay from "./img/partly-cloudy-day.png";
import partlyCloudNight from "./img/partly-cloudy-night.png";
import rain from "./img/rain.png";
import wind from "./img/wind.png";

let tellCondition = (data) => {
  switch (data) {
    case "clear-day": return clearDay;
    case "clear-night": return clearnight;
    case "cloudy": return cloudy;
    case "fog": return fog;
    case "partly-cloudy-day": return partlyCloudDay;
    case "partly-cloudy-night": return partlyCloudNight;
    case "rain": return rain;
    case "wind": return wind;
    default: return null;
  }
};

export { tellCondition };

const updateAllModules = (cityData) => {
    main.getElementCenter();
    main.addDataCenter(cityData)
    main.getDataMoreDetails();
    main.addDataMoreDetails(cityData);
    nextWeek.getElement()
    nextWeek.addData(cityData);
    nextHours.getData();
    nextHours.addData(cityData);
};

function errorCome(error){
  alert('Rewrite the City');
}

document.body.onload = () => {
  data.addCityByDefault().then(cityData => {
    updateAllModules(cityData);
  }).catch(error=>{
    errorCome(error);
  });
};

document.querySelector('#submitBtn').addEventListener('click', () => {
  data.getUnit();
  data.addCityBySearch().then(cityData => {
    updateAllModules(cityData);
  }).catch(error=>{
    errorCome(error);
  })
});

document.querySelector('#unit p').addEventListener('click', () => {
  data.getUnit();
  data.addCityBySearch().then(cityData => {
    updateAllModules(cityData);
  }).catch(error=>{
    errorCome(error);
  });
});
