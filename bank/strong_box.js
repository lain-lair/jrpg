#! /usr/bin/env node
/*This file is not meant to be imported as a module, nor discounted on the
 * statements number. This is a DATABASE of sorts with a JS object to organize
 * data in and make tests. If data is to be used or a function pass the tests
 * THEN it is discounted per line to be used in a valid module.*/

let jrpg = {
  title:"Bastard Sword",
  epockTime:null,
  minsFromEpoch:null,
  hoursFromEpoch:null,
  daysFromEpoch:null,
  weeksFromEpoch:null,
  monthsFromEpoch:null,
  yearsFromEpoch:null,
  monthCurNumber:null,//Add one to begin from 1
  monthCurLabel:null,
  /*seasons?*/
  /*Moon(s) Phases?*/
  weekCurNumber:null,//Add one to begin from 1
  dayCurNumber:null,//Add one to begin from 1
  dayPeriod:null,
  dayCurMonth:null,//Add one to begin from 1
  /*Morning|Afternoon|Evening|Night?*/
  hourCurNumber:null,
  minCurNumber:null,
  secCurNumber:null,

  makeTime:function(){
    let secLoop = 60*60*24*7*4*12;
    for(let i=0;i<secLoop;i++){
      this.epockTime++;
    };
    this.minsFromEpoch = Math.floor(this.epockTime/60);
    this.hoursFromEpoch = Math.floor(this.epockTime/3600);
    this.daysFromEpoch = Math.floor(this.epockTime/86400);
    this.weeksFromEpoch = Math.floor(this.epockTime/604800);
    this.monthsFromEpoch = Math.floor(this.epockTime/2419200);
    this.yearsFromEpoch = Math.floor(this.epockTime/29030400);

    this.monthCurNumber = this.monthsFromEpoch-(this.yearsFromEpoch*12);
    if(this.monthCurNumber==0){
      this.monthCurLabel="January";
    }else if(this.monthCurNumber==1){
      this.monthCurLabel="February";
    }else if(this.monthCurNumber==2){
      this.monthCurLabel="March";
    }else if(this.monthCurNumber==3){
      this.monthCurLabel="April";
    }else if(this.monthCurNumber==4){
      this.monthCurLabel="May";
    }else if(this.monthCurNumber==5){
      this.monthCurLabel="June";
    }else if(this.monthCurNumber==6){
      this.monthCurLabel="July";
    }else if(this.monthCurNumber==7){
      this.monthCurLabel="August";
    }else if(this.monthCurNumber==8){
      this.monthCurLabel="September";
    }else if(this.monthCurNumber==9){
      this.monthCurLabel="October";
    }else if(this.monthCurNumber==10){
      this.monthCurLabel="November"
    }else{
      this.monthCurLabel="December";
    };

    this.weekCurNumber = this.weeksFromEpoch-(this.monthsFromEpoch*4);

    this.dayCurNumber = this.daysFromEpoch-(this.yearsFromEpoch*336);

    this.dayCurMonth = this.daysFromEpoch-(this.monthsFromEpoch*28);

    this.hourCurNumber = this.hoursFromEpoch-(this.daysFromEpoch*24);

    this.minCurNumber = this.minsFromEpoch-(this.hoursFromEpoch*60);

    this.secCurNumber = this.epockTime-(this.minsFromEpoch*60);

    let period = this.hourCurNumber;
    if(period<6){
      this.dayPeriod = "night";
    }else if(period>6 && period<12){
      this.dayPeriod = "morning";
    }else if(period>12 && period<18){
      this.dayPeriod = "afternoon";
    }else{
      this.dayPeriod = "evening";
    }

      console.log(`The world begin right now, this is the first sencond. In ${secLoop} seconds it will be...\nThe world is now ${this.epockTime} second(s) old.\nThe world is now ${this.minsFromEpoch} minute(s) old.\nThe world is now ${this.hoursFromEpoch} hour(s) old.\nThe world is now ${this.daysFromEpoch} day(s) old.\nThe world is now ${this.weeksFromEpoch} week(s) old.\nThe world is now ${this.monthsFromEpoch} month(s) old.\nThe world is now ${this.yearsFromEpoch} years old.\nThis is ${this.monthCurLabel}, the ${this.monthCurNumber+1}(st,sd,rd,th) month.\nThis is the ${this.weekCurNumber+1}(st,sd,rd,th) week of this month.\nThis is the ${this.dayCurNumber+1} day of this year, day ${this.dayCurMonth+1} of this month.\nIt's ${this.dayPeriod}, ${this.hourCurNumber} o'clock now, and ${this.minCurNumber} minutes, and ${this.secCurNumber} seconds.`);

  }
}

jrpg.makeTime();
