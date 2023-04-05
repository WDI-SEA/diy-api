const db = require("./models")

const crud = async () => {
    try{
        const data = await db.workout.findOrCreate({
            name: "tom",
            equipment: ["barbells", "rope"],
            excersizes: ["30 seconds of jumprope",
        "20 thrusters",
    "30 seconds jumprope",
"15 thrusters",
"30 seconds jumprope",
"10 thrusters"],
            content: ["Split the 20 thrusters if needed", "weights:20lb-30lb"]
        },
        {where:{
            title: "beginner-workouts",
        }})
        console.log("FIND OR CREATE:", data)

    } catch(err){
    console.log(err)
    }
}
crud()

// const update = async() => {
//     try {
//         const updateWorkout = await db.workout.update
//     }
// }