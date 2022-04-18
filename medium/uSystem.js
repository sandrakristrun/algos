var UndergroundSystem = function() {
  this.train = new Map()
  this.averageTime = new Map()
};


UndergroundSystem.prototype.checkIn = function(id, stationName, t) {
  this.train.set(id, [stationName, t])
};


UndergroundSystem.prototype.checkOut = function(id, stationName, t) {
  //find checkinTimes
  let [station, checkinTime] = this.checkIn.get(id)

  //store average in averageTime
  let tripTime = t - checkinTime;
  let totalTime = 0;
  let key = [station, stationName].join();
  if(this.averageTime.has(key)){
      let [totalTime, trips] = this.averageTime.get(key)
      totalTime += tripTime;
      trips += 1;
      this.averageTime.set(key, [totalTime, trips])
  } else {
      this.averageTime.set(key, [tripTime, 1])
  }
  this.train.delete(id)
};


UndergroundSystem.prototype.getAverageTime = function(startStation, endStation) {
  let key = [startStation, endStation].join();
  let [average, trips] = this.averageTime.get(key)
  return average/trips
};

let newSystem = new UndergroundSystem()
newSystem.checkIn('A', 'London', 10)
console.log(newSystem)




// var UndergroundSystem = function() {
//   this.train = {}
//   this.averageTime = {}
// };

// /**
// * @param {number} id
// * @param {string} stationName
// * @param {number} t
// * @return {void}
// */
// UndergroundSystem.prototype.checkIn = function(id, stationName, t) {
//   this.train[id] = [stationName, t]
// };

// /**
// * @param {number} id
// * @param {string} stationName
// * @param {number} t
// * @return {void}
// */
// UndergroundSystem.prototype.checkOut = function(id, stationName, t) {
//   //find checkinTimes
//   let [station, checkinTime] = this.train[id]

//   //store average in averageTime
//   let tripTime = t - checkinTime;
//   let totalTime = 0;
//   let key = [station, stationName].join();
//   if(this.averageTime[key]){
//       let [totalTime, trips] = this.averageTime[key]
//       totalTime += tripTime;
//       trips += 1;
//       this.averageTime[key] =  [totalTime, trips]
//   } else {
//       this.averageTime[key] =  [tripTime, 1]
//   }
//   delete this.train[id]
// };

// /**
// * @param {string} startStation
// * @param {string} endStation
// * @return {number}
// */
// UndergroundSystem.prototype.getAverageTime = function(startStation, endStation) {
//   let key = [startStation, endStation].join();
//   let [average, trips] = this.averageTime[key]
//   return average/trips
// };

