define(['knockout', 'text!./authentication.html', 'http://rootsdev.org/familysearch-javascript-sdk/familysearch-javascript-sdk.js'], function(ko, templateMarkup, FamilySearch) {


    function Authentication(params) {
        FamilySearch.init({
            app_key: 'a0T3000000BM1alEAD',
            auth_callback: 'http://localhost:8000',
            environment: 'sandbox',
            http_function: $.ajax,
            deferred_function: $.Deferred
        });


        this.message = ko.observable('Hello from the authentication component!');
        this.login = function() {
            FamilySearch.getAccessToken().then(function(response) {
                output('Access token', response);
                // the access token is cached in the FamilySearch object
            });
        };
    }

    // This runs when the component is torn down. Put here any logic necessary to clean up,
    // for example cancelling setTimeouts or disposing Knockout subscriptions/computeds.
    Authentication.prototype.dispose = function() {};

    return { viewModel: Authentication, template: templateMarkup };


});