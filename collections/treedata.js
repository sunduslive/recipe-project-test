TreeData = new Mongo.Collection('TreeData');
var noteFields = {
    name: {
        type: String,
        optional: true
    },

    parent: {
        type: String,
        optional: true
    }
};

noteSchema = new SimpleSchema(noteFields);
TreeData.attachSchema(noteSchema);
