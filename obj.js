var en="ade";
var list = {
  name:'femi',
  age: 22,
  school: 'FUTA',
}


// <-----To get the an array of the keys in an Object(list)---->
//var arr = Object.keys(list);

// <-----To get the an array of the values in an Object(list)---->
//var arr = Object.values(list);



var mObj = Object.keys(list);
function s(){

    for (var i = 0; i < mObj.length; i++) {

      if(mObj[i] == en) return "Found Match";
    }
    return "No Match";
}
console.log(s());
