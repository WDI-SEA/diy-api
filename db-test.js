const db = require('./models')

async function userCrud() {
    try{
//CREATE        
        // const newUser = await db.user.create({
        //     firstName: 'Sammy',
        //     lastName: 'Murguia',
        //     age: 45,
        //     email: 'sammymurguia@yahoo.com'            
        // })
        // console.log(`Added: ${newUser.firstName} ${newUser.lastName} 🙌`)

// SEARCH ALL USERS
        const allUsers = await db.user.findAll()
        console.log(allUsers)
        allUsers.forEach(user => console.log(user.firstName))
        const allGonzalos = await db.user.findAll({
            where: {
                firstName: 'Gonzalo'
            }
        })
        console.log(allGonzalos)

//SEARCH ONE USER
        // const oneUser = await db.user.findOne({
        //     where: {
        //         firstName: 'Gonzalo'
        //     }
        // })
        // console.log(`Hello! ${oneUser.firstName}`)

//UPDATE        
        // const emailUpdate = await db.user.update({ email: 'erictellez@yahoo.com'}, {
        //     where: {
        //         firstName: 'Eric'
        //     }
        // })
        // console.log(emailUpdate)

//DELETE
        // const userDeleted = await db.user.destroy({
        //     where: {
        //         firstName: 'Sammy'
        //     }
        // })
        // console.log(userDeleted)

    }catch(err) {
        console.log(err)
    }
}

userCrud()
