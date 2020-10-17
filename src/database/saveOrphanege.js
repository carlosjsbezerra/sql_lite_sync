function saveOrphanege(db, orphanage) {

    const { lat, long, NAME, whatsapp, imagens,
        instructions, opening_hours, open_on_weebkends } = orphanage

    return db.run(`
        INSERT INTO orphanages (
            lat,
            long,
            NAME,
            whatsapp,
            imagens,
            instructions,
            opening_hours,
            open_on_weebkends
        ) VALUES (
            "${lat}",
            "${long}",
            "${NAME}",
            "${whatsapp}",
            "${imagens}",
            "${instructions}",
            "${opening_hours}",
            "${open_on_weebkends}"
        );
    `)
}


module.exports = saveOrphanege