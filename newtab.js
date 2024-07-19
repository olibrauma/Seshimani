// newtab.js
document.addEventListener('DOMContentLoaded', function() {
	console.log('New tab page loaded');
	
	// Example: Display an alert
	alert('Welcome to your new tab!');
	
	// Example: Add custom functionality
	const heading = document.querySelector('h1');
	heading.addEventListener('click', function() {
	  alert('Heading clicked!');
	});
  });
  