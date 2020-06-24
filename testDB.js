db.album.create({
    albumTitle: "Better Oblivion Community Center",
    rating: 10,
    description: "A mournful/joyful union betwixt Phoebe Bridgers and Conor Oberst. The sounds of a rising star and a seasoned indie folk professional make for an excellent and reflective listening experience. This is one of my favorite albums.", 
}).then(albumData => {
    //Now access new album via albumData variable
    console.log("🐹 Welcome to the jungle");
    console.log(albumData);
}).catch(errorHandler);