class NavbarController {
  constructor() {
    this.name = 'navbar';
    this.items = [
	    'The first choice!',
	    'And another choice for you.',
	    'but wait! A third!'
	  ]
  }

  toggled(open) {
  	console.log('Dropdown is now: ', open);
  }
}

export default NavbarController;
