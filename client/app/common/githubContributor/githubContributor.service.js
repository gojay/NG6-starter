import _ from "lodash";

class GithubContributorService {
	constructor($log, $http) {
		this.$log = $log;
		this.$http = $http;
    this.apiHost = 'https://api.github.com/repos/angular-class/NG6-starter';
	}

	getContributors(limit = 30) {
		this.$log.debug('getContributors:', this.apiHost + '/contributors?per_page=' + limit);
		return this.$http.get(this.apiHost + '/contributors?per_page=' + limit)
			.then((response) => {
				this.$log.debug('getContributors', response);
				return response.data;
			})
      .catch((error) => {
        this.$log.error('XHR Failed for getContributors.\n' + angular.toJson(error.data, true));
      });
	}
}

GithubContributorService.$inject = ['$log','$http'];

export default GithubContributorService;