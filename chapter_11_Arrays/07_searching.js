let statuscode = ["pass", "fail", "skip", "error", "fail"];
statuscode.indexOf("pass");
console.log(statuscode.indexOf("pass")); //0
console.log(statuscode.indexOf("duplicate")); //-1
console.log(statuscode.lastIndexOf("error")); //3  search from end

//includes return boolean 
console.log(statuscode.includes("pass"));

//find return first matching element 
let num = [1, 2, 3, 4, 5, 1];
let r = num.find(x => x > 3);
console.log(r);
nums.findIndex(n => n > 20); // 1, 2, 3

nums.findLast(n => n > 20); // 45] 
nums.findLastIndex(n => n > 20);// 3
