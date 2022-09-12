const db = require("./models");

const createSponsor = async () =>
{
    try 
    {
        const [sponsor] = await db.sponsor.findOrCreate({
            where: 
            {
                name: "Chipotle Mexican Grill",
                founded: "1993-07-13",
                headquarters: "Newport Beach, CA",
                revenue: "7.55 billion USD (2021)"
            }
        })
        const organization = await db.organization.findOne(
        {
            where: {name: "100 Thieves"}
        })
        await sponsor.addOrganization(organization);
    } 
    catch (error) 
    {
        console.warn(error);
    }
}
createSponsor();