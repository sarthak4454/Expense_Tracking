const mongoose = require('mongoose');

const db = async () => {
    try {
        mongoose.set('strictQuery', false)
        await mongoose.connect("mongodb+srv://sarthak_garg4454:sarthak123@cluster3.12tcdva.mongodb.net/?retryWrites=true&w=majority&appName=Cluster3")
        console.log('Db Connected')
    } catch (error) {
        console.log('DB Connection Error',error);
    }
}

module.exports = {db}
