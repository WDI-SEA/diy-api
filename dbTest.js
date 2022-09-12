const db = require('./models')

async function createJob() {
    try {
        await db.job.create({
            position: 'Junior Software Engineer' ,
            link: 'https://www.linkedin.com/jobs/collections/recommended/?currentJobId=3246038703',
            description: 'Need to know backend API',
            status: 'No interview yet',
            date: '09/11/2022'
        })
    } catch(err) {
        console.warn(err)
    }
}
createJob()