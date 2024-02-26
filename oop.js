import inquirer from "inquirer";
class person {
    constructor(Name) {
        this.name = Name;
    }
}
//inheritance
class personality extends person {
    constructor(name) {
        super(name);
    }
    //method over ridingC
    checker(ans) {
        if (ans == "yes") {
            console.log("you are an introvert");
        }
        else {
            console.log("you are an extrovert");
        }
    }
}
async function main() {
    let input = await inquirer.prompt([{
            type: "input",
            name: "fullname",
            message: "enter full name"
        },
        {
            type: "list",
            name: "ans",
            message: "Do u prefer to  keep your feeling with u ",
            choices: ["yes", "no"]
        }]);
    let x = new personality(input.fullname);
    x.checker(input.ans);
}
main();
