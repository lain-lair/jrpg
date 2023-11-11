/*world, locations have a name, a description
 * and then an array to push all the objects
 * representing everything else, next make a
 * day-night cycle and calendar update.*/
class World {
  constructor(...args){
    this.name        =args[0];
    this.desc        =args[1];
/*World existence in seconds*/
    this.epochTimeNow=args[2];
    this.hoursNow    =null;
    this.minsNow     =null;
    this.secsNow     =null;
    this.dayYearNow  =null;
    this.yearNow     =null;
    this.eraNow      =null;
  }
  updateWorld(){
    console.log(`This continent is called ${this.name} and the description is ${this.desc}`);
    return this;
  }
  updateTime(){
    this.yearNow = Math.floor(this.epochTimeNow/360/24/60/60);
    this.eraNow = Math.floor(this.yearNow/1000);
    this.dayYearNow = Math.floor(((this.epochTimeNow/360/24/60/60)-this.yearNow)*24*60*60)+1;
    console.log(`World time now is ${this.epochTimeNow}. World current age is ${this.yearNow}. The era now is ${this.ordinalNumbersSuffix(this.eraNow)}, each era is a thousand years. The day of this year is ${this.dayYearNow}`);
  }
  /*1st 2nd 3rd 4th... RETURN a string with the correct suffix to a given ordinal number*/
  ordinalNumbersSuffix(ordinalNumber){
    if(ordinalNumber==1){
      return `${ordinalNumber}st`;
    }else if(ordinalNumber==2){
      return `${ordinalNumber}nd`;
    }else if(ordinalNumber==3){
      return `${ordinalNumber}rd`;
    }else{
      return `${ordinalNumber}th`;
    };
  }
}
export {World};
