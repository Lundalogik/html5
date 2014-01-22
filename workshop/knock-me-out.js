// Here's my data model
function ViewModel() {
    this.comment = ko.observable("Great write-up Alejandro! A pleasure to read, as always.");
}

// This makes Knockout get to work
ko.applyBindings(new ViewModel());
