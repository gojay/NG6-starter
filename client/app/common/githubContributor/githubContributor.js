import angular from 'angular';
import GithubContributorService from './githubContributor.service';

let githubModule = angular.module('github', [])

.service('GithubContributor', GithubContributorService);

export default githubModule;