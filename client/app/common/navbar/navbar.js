import angular from 'angular';
import angularUiBootstrap from 'angular-ui-bootstrap';
import uiRouter from 'angular-ui-router';
import navbarComponent from './navbar.component';

let navbarModule = angular.module('navbar', [
  uiRouter,
  angularUiBootstrap
])

.directive('navbar', navbarComponent);

export default navbarModule;
