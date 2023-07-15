const {Schema, model } = require('mongoose');

const userSchema = new Schema (
    {
       usertName: {
        type: String,
        required: true,
        required: true,
        trim: true
       } ,
        
       email: {
        type: String,
        required: true,
        unique: true,
        validate:{
            validator: function(v) {
                return /.+@.+..+/.test(v);
            }
        } 
       },

       thoughts: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Thought'
        }
       ],
       friends: [
        {
            type: Schema.Types.ObjectId,
            ref: 'User'
        }
       ]

    }
)

module.exports = thoughtSchema;