import { tellCondition } from "./index.js";
export const nextHours = (() => {
    let right;
    let getData = () => {
        right = document.querySelector('#right');
    }
    let currentTime=()=>{
        const now = new Date();
        return now.getHours();
    }
    let createElement=()=>{
        let time=document.createElement('p');
        let precip=document.createElement('p');
        let condition=document.createElement('img');
        let temp=document.createElement('p');
        let div=document.createElement('div');
        return {time,precip,condition,temp,div};
    }
    let removePreviousElement=()=>{
        right.textContent=''
    }
    let addData=(data)=>{
        removePreviousElement();
        for(let i=currentTime();i<24;i++){
            let obj=createElement();
            obj.time.textContent=i+':00';
            obj.precip.textContent=data.days[0].hours[i].precipprob+'%';
            obj.precip.style.color='lightskyblue';
            obj.condition.src = tellCondition(data.days[0].hours[i].icon);
            obj.temp.textContent=data.days[0].hours[i].temp+'°';
            obj.div.append(obj.time,obj.precip,obj.condition,obj.temp);
            right.append(obj.div);
        }
    }
    return { getData,addData };
})();