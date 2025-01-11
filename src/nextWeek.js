import { tellCondition } from "./index.js";
export const nextWeek=(()=>{
    let table,tbody;
    let tr;
    let getElement=()=>{
        table=document.querySelector('table');
        tbody=document.querySelector('tbody')
    }
    let createElementTD=()=>{
        let td1=document.createElement('td');
        let td2=document.createElement('td');
        let td3=document.createElement('td');
        let td4=document.createElement('td');
        let td5=document.createElement('td');
        let td6=document.createElement('td');
        return [td1,td2,td3,td4,td5,td6];
    }
    let createElementTR=()=>{
        tr=document.createElement('tr');
    }
    let removePreviousElements=()=>{
        tbody.textContent='';
    }
    let createImg=()=>{
        return document.createElement('img');
    }
    let addData=(data)=>{
        removePreviousElements();
        for(let i=1;i<=10;i++){
            createElementTR();
            let arr=createElementTD();
            arr[0].textContent=data.days[i].datetime;
            let img=createImg();
            img.src=tellCondition(data.days[i].icon)
            arr[1].append(img);
            arr[2].textContent=data.days[i].precipprob+'%';
            arr[3].textContent=data.days[i].humidity+'%';
            arr[4].textContent=data.days[i].tempmin+'°';
            arr[5].textContent=data.days[i].tempmax+'°';
            arr.forEach(x=>tr.append(x));
            tbody.append(tr);
        }
    }
    return {getElement,addData};
})();