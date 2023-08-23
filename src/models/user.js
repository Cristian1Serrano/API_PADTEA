const mongoose = require("mongoose"); 
// definir el esquema de la coleccion
const userSchema = mongoose.Schema({ 
  name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: { 
    type: String,
    required: true
  }
});

module.exports = mongoose.model('User', userSchema);