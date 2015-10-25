import angular from 'angular';
import Navbar from './navbar/navbar';
import Hero from './hero/hero';
import User from './user/user';
import {GithubContributor as Github} from './githubContributor/githubContributor';

let commonModule = angular.module('app.common', [
  Navbar.name,
  Hero.name,
  User.name,
  Github.name
]);

export default commonModule;
