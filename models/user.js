const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema (
    {
       userName: {
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
    },
       {
        toJSON:{
            virtuals:true,
        },
        id:false,
       }

);
       userSchema.virtual('freindCount').get( function () {
        return this.friends.length;
       })


       const user = model('user', userSchema)

module.exports = user;

module.exports = userSchema;