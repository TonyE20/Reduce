// REDUCE

// 1 extractValue
const arr = [{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}]
extractValue(arr,'name') // ['Elie', 'Tim', 'Matt', 'Colt']
function extractValue(arr, key){
    return arr.reduce(function(accum, nextObj){
        accum.push(nextObj[key])
     return accum
    }, [])
}

// 2 vowelCount
vowelCount('Elie') // {e:2,i:1};
//vowelCount('Tim') // {i:1};
//vowelCount('Matt') // {a:1})
//vowelCount('hmmm') // {};
//vowelCount('I Am awesome and so are you') // {i: 1, a: 4, e: 3, o: 3, u: 1};
function vowelCount(str){
    // console.log(Array.from(str.toLowerCase().split(' ').join('')))
    return Array.from(str.toLowerCase().split(' ').join('')).reduce(function(accum, el){
      let vowels = 'aeiou'
      if (vowels.indexOf(el) !== -1){
        if(accum[el]){
            accum[el]+=1;
        }
        else {
            accum[el] = 1;
        }
      }
        return accum
    }, {})
}

// 3 addKeyAndValue
const arr1 = [{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}];
addKeyAndValue(arr1, 'title', 'Instructor') 
// [
//   {title: 'Instructor', name: 'Elie'},
//   {title: 'Instructor', name: 'Tim'},
//   {title: 'Instructor', name: 'Matt'},
//   {title: 'Instructor', name: 'Colt'}
// ]
function addKeyAndValue(arr, key, value){
    return arr.reduce(function(accum, nextObj, i){
        accum[i][key] = value
            return accum
    }, arr)
}

// 4 partition
function isEven(val){
    return val % 2 === 0;
  }
const arr2 = [1,2,3,4,5,6,7,8];
partition(arr2, isEven) // [[2,4,6,8], [1,3,5,7]];

function isLongerThanThreeCharacters(val){
return val.length > 3;
}
const names = ['Elie', 'Colt', 'Tim', 'Matt'];
partition(names, isLongerThanThreeCharacters) // [['Elie', 'Colt', 'Matt'], ['Tim']]

function partition(arr, callback){
    return arr.reduce(function(accum, nextEl){
        if(callback(nextEl)){
            accum[0].push(nextEl)
        }
        else{
            accum[1].push(nextEl)
        }
        return accum
    }, [[],[]])
} 