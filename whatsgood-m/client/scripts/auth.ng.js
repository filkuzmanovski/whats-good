angular
	.module('WhatsGood')
	.run(run);

function run($rootScope, $state) {
	$rootScope.$on('$stateChangeError', function (event, toState, toParams, fromState, fromParams, error) {
		// Catch the error thrown when the $requireUser promis is rejected
		// and redirect user back to main page
		if (error === 'AUTH_REQUIRED') {
			$state.go('login');
		}
	});
}