import inquirer from "inquirer";
abstract class person {
//encapsulation
protected name:string;
constructor(Name:string){
    this.name=Name
}
//abstractiion
abstract checker(ans:string):void
}
//inheritance
class personality extends person{
    constructor(name:string){
        super(name)
    }
    //method over ridingC
    checker(ans:string){
        if(ans=="yes"){
            console.log("you are an introvert")
        }else{
            console.log("you are an extrovert")
        }
    }
}
async function main(){
let input=await inquirer.prompt([{
    type:"input",
    name:"fullname",
    message:"enter full name"
},
    {
    type:"list",
    name:"ans",
    message:"Do u prefer to  keep your feeling with u ",
    choices:["yes","no"]
}])
let x=new personality(input.fullname)
x.checker(input.ans)}
main()

