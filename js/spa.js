function WebmailViewModel() {
    self.title = ko.observable('Single Page Applications');
    // Data
    var self = this;
    self.folders = ['Inbox', 'Archive', 'Sent', 'Spam'];
};

ko.applyBindings(new WebmailViewModel());