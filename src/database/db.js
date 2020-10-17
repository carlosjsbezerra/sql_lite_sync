const Database = require('sqlite-async')
const path = require('path')

// create database if not exists
const database = Database.open(path.resolve(__dirname, 'database.sqlite'))

// create table orphanages if not exists 
database.then(async db => {
    return await db.exec(`
        CREATE TABLE IF NOT EXISTS orphanages (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            lat TEXT,
            long TEXT,
            NAME TEXT,
            whatsapp TEXT,
            imagens TEXT,
            instructions TEXT,
            opening_hours TEXT,
            open_on_weebkends TEXT
        );
    `)
})    

module.exports = database
