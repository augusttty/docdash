exports.defineTags = function (dictionary) {
    dictionary.defineTag("category", {
        mustHaveValue: false,
        canHaveType: false,
        canHaveName: false,
        onTagged: function (doclet, tag) {
            doclet.category = tag.value;
        }
    });
};