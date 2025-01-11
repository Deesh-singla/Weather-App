export const data = (() => {
    let input, submitBtn, unit, degC, degF;
    let Si = 'us';
    let getElement = () => {
        input = document.querySelector('#search')
        submitBtn = document.querySelector('#submitBtn');
        unit = document.querySelector('#unit p');
        degC = document.querySelector('#degC');
        degF = document.querySelector('#degF');
    }
    let getData = async function (city = 'London', unit = 'metric') {
        let data = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?unitGroup=${unit}&key=YARJ9A7K39UUHN83BL3SJJ69G&contentType=json`);
        let dataObj = await data.json();
        return dataObj;

    }
    let addCityByDefault = async () => {
        return await getData();
    }
    let getUnit=() => {
        getElement();
            if (unit.id=='degIsC'){
                Si='us';
                unit.id='degIsF';
                degF.style.fontWeight='bold'
                degC.style.fontWeight='normal'
            }
            else {
                Si='metric';
                unit.id='degIsC';
                degF.style.fontWeight='normal'
                degC.style.fontWeight='bold'
            }
    }
    let addCityBySearch=async()=>{
        if(getCity()=='') return await getData('london',Si);
        else return await getData(getCity(),Si);
    }
    let getCity=()=>{
        getElement();
        return input.value;
    }
    return { addCityByDefault,getUnit,addCityBySearch}
})();