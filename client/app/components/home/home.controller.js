import _ from 'lodash';

class HomeController {
  constructor(GithubContributor) {
  	this.GithubContributor = GithubContributor;
    this.name = _.capitalize('home');
    this.getContributors();
  }

  getContributors(){
  	this.GithubContributor.getContributors().then((data) => {
  		console.log('data', data);
  	});
  }
}

HomeController.$inject = ['GithubContributor'];

export default HomeController;
