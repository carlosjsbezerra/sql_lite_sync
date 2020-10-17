const Database = require('./db')
const saveOrphanege = require('./saveOrphanege')


Database.then(async db => {
    await saveOrphanege(db, {
        lat : "-28.232333",
        long : "-28.262333",
        NAME : "Lar das meninos",
        whatsapp : "Presta assistència a comunidade",
        imagens : "https://images.unsplash.com",
        instructions : "Venha fazer parte",
        opening_hours : "Horário de visitas",
        open_on_weebkends : "0"
    })
})


// // inserir dados na tabela
Database.then(async db => {    
    // await db.run(`
    //     INSERT INTO orphanages (
    //         lat,
    //         long,
    //         NAME,
    //         whatsapp,
    //         imagens,
    //         instructions,
    //         opening_hours,
    //         open_on_weebkends
    //     ) VALUES (
    //         "-28.232333",
    //         "-28.262333",
    //         "Lar das meninos",
    //         "Presta assistència a comunidade",
    //         "https://images.unsplash.com",
    //         "Venha fazer parte",
    //         "Horário de visitas",
    //         "0"

    //     );
    // `)

})

// consultar todos os dados na tabela
Database.then(async db => {    
    const selectedOrphanages = await db.all("SELECT * FROM orphanages")
    console.log(selectedOrphanages)
})

// consultar somente 1 orphanages, pelo id
Database.then(async db => {
    // const orphanage = await db.all("SELECT * FROM orphanages WHERE id = 2")
    // console.log(orphanage)
})
