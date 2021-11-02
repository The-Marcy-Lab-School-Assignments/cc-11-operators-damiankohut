//1
function areBothSame(x,y){
  if (x == y){
   return (true) 
    }else {
      return (false)
  }
}
console.log(areBothSame("2", 2))
//2
function areBothEqual(x,y){
    if (x === y){
   return (true) 
    }else {
      return (false)
  }
}
console.log(areBothEqual(7,7))
//3
function areAllFourEqual(w,x,y,z){
  if (x === y && z === w){
      return (true)
  }else {
      return (false)
  }
}
console.log(areAllFourEqual("2", "2", "2", 2))

//4
function areAllFourSame(x,y,w,z){
  if (x == y && z == w){
      return (true)
  }else {
      return (false)
  }
}
console.log(areAllFourSame(true, true, 1, "1"))
//5
function areAllFourSameOrEqual(x,y,w,z){
  if ( x === y && w === z ) {
      return ("equal")
  } else if (x == y && w == z){
      return "same"
  } else {
   return null 
  }
}
console.log(areAllFourSameOrEqual(true, false, 1, "1"))

