const express = require('express')
const cors = require('cors')
const DBConnection = require('./config/connect')
const path = require("path");

require('dotenv').config(); // ✅ Must come before using process.env


const app = express()

//////connection of DB/////////
DBConnection()

const PORT = process.env.PORT 


//////middleware/////////
app.use(express.json())
app.use(cors())
app.use("/uploads", express.static(path.join(__dirname, "uploads")));


///ROUTES///
app.use('/api/admin', require('./routers/adminRoutes'))
app.use('/api/user', require('./routers/userRoutes'))



app.listen(PORT, () => console.log(`running on ${PORT}`))