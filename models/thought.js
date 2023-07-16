const Schema = require('mongoose');
const moment = require('moment');

const thoughtSchema = new Schema (
    {
       thoughtText : {
            type: String,
            required: true,
            minLenght: 1,
            maxLdiddength: 280,
       },
       createdAt :{
            type: Date,
            default: Date.now,
            get: (timestamp) => moment(timestamp).format('MMM DD, YYYY [at] hh:mm a'),
       },
       username :{
          type: String,
          required: true,
       },
       reactions:[reactionSchema]

       }

         
)


   