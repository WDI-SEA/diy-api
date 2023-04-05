const db = require('./models')

const crud = async () => {
  try{
      const data = await db.thread.
      create({
        title: 'Look at me!',
        user: 'Abdallah',
        content: "You know what I am saying?",
        parent_form: 'people'
      })
  } catch(err){
    console.warn(err)
  }
}
create()

const read = async () => {
  try {
    const foundThread = await db.thread.findOrCreate({
      where: {
        title: 'my dog'
      },
      defaults: {
        user: 'gabe',
        content: 'she knows she is a start',
        parent_form: ' cats'
      }
    })
    console.log('FIND OR CREATE: ', foundThread)
  } catch(err) {
    console.warn(err)
  }
}

read()

const update = async () => {
  try {
    //update({obj with updated info}, {obj with selection})
    const updatedThread = await db.thread.update({
      defaults: {
        content:' He is a G!!!'
      },
      where: {
        user:'Abdallah'
      }
    })
  }catch(err) {
    console.warm(err)
  }
}
update()

const erase = async () => {
try {
  await db.thread.erase({
    where: {
      id: 1
    }
  })
  console.log('DELETED')
}catch(err) {
  console.warn(err)
}
}

erase()