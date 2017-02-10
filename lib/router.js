/**
 * Created by tobias on 09.03.14.
 */

Router.configure({
    layoutTemplate: 'tMain'
});

Router.route('/', {
    layoutTemplate: 'tMain',
    template: 'tRecipebooks',
    data: function() {
        return TreeData.find();
    }
});

Router.route('/:_id', {
    layoutTemplate: 'tMain',
    template: 'tRecipeSingle',
    data: function() {
        return TreeData.findOne(this.params._id);
    }
});