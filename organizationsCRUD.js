const db = require("./models");

const createOrg = async () =>
{
    try 
    {
        await db.organization.findOrCreate(
        {
            where:
            {
                // info from liquipedia
                name: "100 Thieves",
                founded: "2016-04-18",
                location: "United States",
                abbreviation: "100T"
            }
        })
    } 
    catch (error) 
    {
        console.warn(error);
        res.send("server error");
    }
}
createOrg();