const fs = require('fs'); module.exports = (app, db = null) => {

  db === null && null; app.post('/newUser', (req, res) => {

    const userData = req.body
    const usersJson = './app/data/dataFileUsers.json'

    // { "number": "89068085023",
    //   "auth": "sms",
    //   "name": "Николай",
    //   "email": "nik.shipov@gmail.com",
    //   "car": "lada vesta" }

    let users = fs.readFileSync('./app/data/dataFileUsers.json', 'utf-8')
    let userObject = JSON.parse(users)

    userObject.data.push(userData)

    fs.writeFile(usersJson, JSON.stringify(userObject), error => {

      if (error) throw error
    
    })

  })

}