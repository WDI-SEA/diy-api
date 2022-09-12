const db = require("./models");

const createTeam = async () =>
{
    try 
    {
        await db.team.findOrCreate(
        {
            where:
            {
                // info from liquipedia
                name: "100 Thieves Valorant",
                created: "2020-06-04",
                region: "North America",
                winnings: 264000,
                organizationId: 1
            }
        })
    } 
    catch (error) 
    {
        console.warn(error);
    }
}
createTeam();

const findTeamsfromOrg = async () =>
{
    try 
    {
        const organization = await db.organization.findOne(
        {
            where: {id: 1},
            include: [db.team]
        })
        console.log(organization.teams);
    } 
    catch (error) 
    {
        console.warn(error);
    }
}
findTeamsfromOrg();