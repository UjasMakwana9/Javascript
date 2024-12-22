            function orderTeas(order)
            {
                return `${teaTypes[order]} na Paisa de`;
            }
function orderTea(orderTeas,teaTypes) {
    console.table(teaTypes)
    do{
        let select = prompt("Select from menu");
        if(select <0 && selct > 2)
        {
            console.log("Please enter proper value");
        }
        else
        {  
            return orderTeas(select)
        }

    }    while(true);
    
}
teaTypes = ["AduVali Cha","Elaichi vali cha","sugar free cha"]
console.log(orderTea(orderTeas,teaTypes))

// Higher Order Function

const createTeamaker = (name)=>
{

    return function tea(teaType)
    {
        return `Making ${teaType} ${name}   `
    };
}
let teaMaker = createTeamaker("govid")
console.log(teaMaker("green Tea"));

