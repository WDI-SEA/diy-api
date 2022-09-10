const db = require("./models")

const createCategory = async () => {
    try {
        await db.category.create({
            name: "household supplies",
            budget: 300
        })

    }catch (err) {
        console.log(err)
    }
}

// createCategory()

const addMerchant = async () => {
    try {
        const merchant = await db.merchant.create({
            name: "ranch99",
        })
        const category = await db.category.findOne({
            where: {
                name: "groceries"
            }
        })
        await merchant.addCategory(category)


    }catch (err) {
        console.log(err)
    }
}

// addMerchant()