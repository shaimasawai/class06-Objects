'use strict'
function randomNumber(minCust, maxCust) {

   return Math.floor(Math.random() * (maxCust - minCust + 1)) + minCust;


}
let global = document.getElementById('container');
let hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
let place = [];

let table = document. createElement('table');


function generatetable() {
   let article = document.createElement('article')
 global.appendChild(article);
 article.appendChild(table);

 let trelem = document.createElement('tr');
 table.appendChild(trelem);
 let thelem=' ';

 thelem = document.createElement('th');

 trelem.appendChild(thelem);
 for (let i = 0; i < hours.length; i++) {
   thelem = document.createElement('th');
   trelem.appendChild(thelem);
   thelem.textContent = ` ${hours[i]}`;

 };

 thelem.textContent= 'Daily location total';

}


  
function footerRow(){
       let tr3elem =document.createElement('tr');
       table.appendChild(tr3elem);
       let td3elem =document.createElement('td');
       tr3elem.appendChild(td3elem);
       td3elem.textContent='Total';
       
for( let i=0 ; i< 13 ; i++)
{
   let tddate = document.createElement('td');
   let totalB = 0 ;
   for(let x=0 ; x < place.length ; x++ ) {

      totalB += place[x] . randomHoursArray[i];
}
tddate.textContent = totalB;
tr3elem.appendChild(tddate);

   }

   let ghost = 0;
   for(let g=0 ; g < place.length ; g++){
       ghost += place[g].total;

   }
   let totalfinel= document.createElement('td');
   tr3elem.appendChild(totalfinel);
   totalfinel.textContent= ghost;

}







function Salmoncookies(shopName, minCust, maxCust, avgCookies, total, randomHoursArray) {

   this.shopName = shopName;
   this.minCust = minCust;
   this.maxCust = maxCust;
   this.avgCookies = avgCookies;
   this.randomHoursArray = randomHoursArray;
   // this.avgCookiesPerH = avgCookiesPerH;
   this.total = total;
   place.push(this);




}

Salmoncookies.prototype.castmerph = function () {
   let sum = 0;
   for (let i = 0; i < hours.length; i++) {
       sum = randomNumber(this.minCust, this.maxCust) * this.avgCookies;
       let x = Math.floor(sum);
       this.randomHoursArray.push(x);
       this.total += x;

   }

}

Salmoncookies.prototype.render = function(){
   
   let second = document.createElement('tr');
   table.appendChild(second);
   let tdelement = document.createElement('td');
   second.appendChild(tdelement);
   tdelement.textContent= this.shopName;
   let td2ele = ' ';
   for(let j=0 ; j< hours.length ; j++){
       td2ele = document.createElement('td');
       second.appendChild(td2ele);
       td2ele.textContent= ` ${this.randomHoursArray[j]}`;

   
   }
   td2ele.textContent=this.total;
}







let seattle  = new Salmoncookies('seattle' , 23 , 65 , 6.3 , 0 , []);
let tokyo = new Salmoncookies('Tokyo' ,3 , 24 , 1.2 , 0 , [] );
let dubie = new Salmoncookies ('dubie' , 11 , 38 , 3.7 , 0 , []);
let parise = new Salmoncookies ('paries' , 20 , 38 , 2.4 ,0 , []);





generatetable();
for( let s=0 ; s< place.length ; s++){
   place[s].castmerph();
   place[s].render();


}

footerRow();