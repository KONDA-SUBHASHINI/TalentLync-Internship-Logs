let students=[
    {
        id:1,
        name:"Subha",
        repos:3,
        branch:"cse",
        marks:88,
        status:true,
    },
    {
        id:2,
        name:"Swapna",
        repos:2,
        branch:"cse",
        marks:90,
        status:false,
    },
    {
        id:3,
        name:"Srujana",
        repos:4,
        branch:"eee",
        marks:72,
        status:true,
    },
    {
        id:4,
        name:"Jhansi",
        repos:1,
        branch:"cse",
        marks:95,
        status:true,
    },
    {
        id:5,
        name:"Vandana",
        repos:3,
        branch:"cse",
        marks:98,
        status:true,
    },
]

function checkuserscount(){
    document.getElementById('result-cnt').innerHTML = "Total users: " + students.length;
}