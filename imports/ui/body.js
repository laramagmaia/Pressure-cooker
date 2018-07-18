import { Template } from 'meteor/templating';
 
import './body.html';
 
Template.body.helpers({
  campaigns (): [
    { text: 'School Shootings', borough: 'Manhattan', category: 'children and teenagers' },
    { text: 'Street Cleaning', borough: 'Manhattan', category: 'environment' },
	{ text: 'Scholarship Funds', borough: 'Manhattan', category: 'education'},
	{ text: 'Build More Homeless Shelters', borough: 'Brooklyn', category:'civil service'},
	{ text: 'Repairing Infrastructure', borough: 'Queens', category: 'infrastructure and public works'},
	{ text: 'More Subway Stops',borough: 'Bronx and Queens', category: 'transportation'},
	{ text: 'Affordable Housing Plan', borough: 'Manhattan', category: 'finance'},
	{ text: 'Graffiti', borough: 'Manhattan', category: 'civil service'},
	{ text: 'Create More Sport Centers', borough: 'Queens', category: 'sports and recreation'},
	{ text: 'MTA: Constant Delays', borough: 'Brooklyn', category: 'transportation' },
	{ text: 'Rodents', borough: 'Manhattan', category: 'health and drugs'},

  ],
});