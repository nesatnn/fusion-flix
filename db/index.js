const mongoose = require('mongoose');

mongoose
    // .connect(process.env.MONGO_URI)
    .connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@nesat-nayem.wqpn5pd.mongodb.net/futuionfilx`)
    .then(() => {
        console.log('db is connected!')
    })
    .catch((ex) => {
        console.log('db connection failed: ', ex)
    })