'use strict';

export default function routes($stateProvider) {
  'ngInject';

  $stateProvider
    .state('login', {
      url: '/login',
      template: require('./login/login.html'),
      controller: 'LoginController',
      controllerAs: 'vm'
    })
    .state('logout', {
      url: '/logout?referrer',
      referrer: 'main',
      template: '',
      controller($state, Auth) {
        'ngInject';

        var referrer = $state.params.referrer || $state.current.referrer || 'main';
        Auth.logout();
        $state.go(referrer);
      }
    })
    .state('signup', {
      url: '/signup',
      template: require('./signup/signup.html'),
      controller: 'SignupController',
      controllerAs: 'vm'
    })
    .state('password', {
      url: '/password',
      template: require('./password/password.html'),
      controller: 'PasswordController',
      controllerAs: 'vm',
      authenticate: true
    })
    .state('profile', {
      url: '/profile',
      template: '<profile></profile>'
    });
}
