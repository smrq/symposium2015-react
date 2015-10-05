import * as angular from 'angular';

export default angular.module('duel.account-manager-card')
	.directive('duelAccountManagerImage', duelAccountManagerImage)
	.controller('DuelAccountManagerImageController', DuelAccountManagerImageController);

export function duelAccountManagerImage(): ng.IDirective {
	'ngInject';
	return {
		restrict: 'E',
		scope: {
			imageUrl: '=',
			name: '='
		},
		controller: 'DuelAccountManagerImageController',
		template: `
			<div class='am-image'>
				<img ng-if='imageUrl' ng-src='{{ imageUrl }}' alt='{{ name }}' />
				<span ng-if='!imageUrl'>{{ initials }}</span>
			</div>
		`
	}
}

export class DuelAccountManagerImageController {
	constructor(private $scope: IPrivateDuelAccountManagerImageScope) {
		'ngInject';
		$scope.$watch('name', function (name) {
			$scope.initials = getInitials(name);
		});
	}
}

export interface IDuelAccountManagerImageScope extends ng.IScope {
	imageUrl?: string;
	name: string;
}

interface IPrivateDuelAccountManagerImageScope extends IDuelAccountManagerImageScope {
	initials: string;	
}

function getInitials(name: string) {
	return name.split(' ').map(word => word[0]).join('');
}