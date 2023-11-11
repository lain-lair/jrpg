import {World} from './modules/world.mjs'

/*This number should be 5000 years in seconds 155520000000 and this number 155551194061 should be 5000 years and 1 year and 1 day and 1 hour and 1 minute and 1 second*/
let varia = new World(
  "Varia",
  "Known world, this continent and visible surrounding isles.",
  155620000000
);
varia.updateWorld().updateTime();
