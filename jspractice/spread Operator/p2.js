//Spread Operator with Objects

let obj={
    name :"Pushan",
    address:
    {
        location:"rohatagi appt ",
        pincode: 110054,
        state:
        {
            code :'DL',
            statename:"Delhi"
        }
    }
}

// let obj2={...obj,address:{...obj.address,state:{...obj.address.state}}};
// ...obj  -> this is known as shallow copy

// address:{...obj.address} -> (this is known as deep copy ) by writing this we can change the pincode also of obj2 , without it we cannot diffrentiate b/w obj and obj2
// obj2.address.state.statename ="New York "; //this is also changing city on both the objects so we have to spread it too

let obj2=JSON.parse(JSON.stringify(obj));
obj2.address.pincode =110006;
obj2.address.state.code='HR';

console.log(obj);

console.log(obj2);

