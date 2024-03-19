import mongoose from "mongoose";

mongoose.connect(
  `Your connection string`
);

const ClientSchema = mongoose.Schema({
  firstName: { type:String, require: true },
  lastName: {type: String, require: true },
  mobileNumber:{type:Number,require:true},
  project:{type:String},
  email :{type:String, require:true , unique:true},

});

const Client = mongoose.model("clients",ClientSchema)

export default Client