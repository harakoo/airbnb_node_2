const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//This indicates the shape of the documents that will be entering the database
  const taskSchema = new Schema({
   
    title:
    {
      type:String,
      required:true
    },

    description: 
    {
        type:String,
        required:true
    },
    dueDate :
    {
        type:String,
        required:true
    },
    priority :
    {
        type:String,
        required:true
    },
    status:
    {
        type:String,
        default:"Available"
    },
    dateCreated:
    {
        type:String
    }
  });

  /*
    For every Schema you create(Create a schema per collection), you must also create a model object. 
    The model will allow you to perform CRUD operations on a given collection!!! 
  */

 const taskModel = mongoose.model('Task', taskSchema);

 module.exports = taskModel;