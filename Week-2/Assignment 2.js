function calculate(args){
    let result;
    if (args.op==="+") {
        result=args.n1+args.n2;
    } else if (args.op==="-") {
         result=args.n1-args.n2;
    } else {
        result = "Not supported";
    }
    return result;
}

// Method 1

// var keys = ['n1','n2','op'];
// var values = [10,4,'+'];

// function toObject(keys, values) {
//     var result = {};
//     for (let i = 0; i < keys.length; i++)
//          result[keys[i]] = values[i];
//     return result;
// }

// console.log(calculate(toObject(keys, values)));


// Method 2

console.log(calculate({n1 : 9, n2 : 7, op : '-'}));

// Method 3

// var keys = ['n1','n2','op'];
// var values = [11,7,'+'];

// function toObject(keys, values) {
//     let result = {};
//     for (let i = 0; i < keys.length; i++)
//          result[keys[i]] = values[i];
//     return result;
// }

// console.log(calculate(toObject(keys, values)));

// Method 4
function calData (n1,n2, op) {
    this.n1 = n1;
    this.n2 = n2;
    this.op = op;
} 

console.log (calculate (new calData ( 6 , 1 , '-' ) ) ) ;

// Method 5
class calData {
    constructor (n1,n2, op) {
        this.n1 = n1;
        this.n2 = n2;
        this.op = op;
    }
}
console.log (calculate (new calData ( 13 , 2 , '+' ) ) ) ;
