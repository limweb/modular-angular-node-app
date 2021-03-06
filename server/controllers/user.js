'use strict';

exports = module.exports = (userModel) => (
	{
		getAll : (req, res, next) => {
			console.log('user : getAll');
		},

		getById : (req, res, next) => {
			console.log('user : getById');
		},

		create : (req, res, next) => {
			console.log('user : create');
		},

		updateById : (req, res, next) => {
			console.log('user : updateById');
		},

		deleteById : (req, res, next) => {
			console.log('user : deleteById');
		}
	}
);

exports['@require'] = [
	'models/user'
];

exports['@singleton'] = true;
