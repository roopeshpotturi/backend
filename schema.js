const mongoose = require("mongoose")

const conntentSchema={
    name:String,
    passcode:String,

}
const Content=mongoose.model("project",conntentSchema)

module.exports=Content