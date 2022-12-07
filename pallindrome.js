let str="madam" 
let bag = "";
for(i=str.length-1;i>=0;i--) {
    bag+str[i];
    
}
if(str==bag){
    console.log("True");
}
else{
    console.log("number is not palindrome");
}