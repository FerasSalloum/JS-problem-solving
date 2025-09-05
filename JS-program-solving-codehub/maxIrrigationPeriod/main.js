function maxIrrigationPeriod(irrigation, water) {
    irrigation = irrigation.sort((a,b)=> a - b)
    let count = 0
    for(let i=0; i< irrigation.length ; i++){
      water -= irrigation[i]
      if(water >= 0){
      count ++
      }
    }
    return count
}