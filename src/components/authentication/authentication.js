define(['knockout', 'text!./authentication.html', 'http://rootsdev.org/familysearch-javascript-sdk/familysearch-javascript-sdk.js'], function(ko, templateMarkup, FamilySearch) {


    function Authentication(params) {
        FamilySearch.init({
            app_key: 'a0T3000000BM1alEAD',
            auth_callback: 'http://localhost:29070/src/index.html',
            environment: 'sandbox',
            http_function: $.ajax,
            deferred_function: $.Deferred
        });


        this.message = ko.observable('Hello from the authentication component!');
        this.login = function() {
            FamilySearch.getAccessToken().then(function (response) {
                document.location.hash = 'person';
                //FamilySearch.getPerson('KW49-4DR').then(function (person) {
                //    debugger;
                //});
            });
        };
    }

    // This runs when the component is torn down. Put here any logic necessary to clean up,
    // for example cancelling setTimeouts or disposing Knockout subscriptions/computeds.
    Authentication.prototype.dispose = function() {};

    return { viewModel: Authentication, template: templateMarkup };


});