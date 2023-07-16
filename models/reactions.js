const {Schema, model } = require('mongoose');


const reactionSchema = new Schema({
        reactionId: {
            type: mongoose.Schema.Types.ObjectId,
            default: () => new mongoose.Types.ObjectId(),
    },
        reacionnBody: {
            type: String,
            required: true,
            maxLength: 280,
        },
        username :{
            type: String,
            required: true,
        },
        createdAt: {
            type: Date,
            default: Date.now,
            get: (timestamp) => moment(timestamp).format('MMM DD, YYYY [at] hh:mm a'),
        },
});


module.exports - reactionSchema;