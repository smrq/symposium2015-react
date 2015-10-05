import * as angular from 'angular';
import * as React from 'react';
import * as ngReact from 'ngReact';

export class AccountManagerCard ... { ... }

export function duelAccountManagerCard(reactDirective: ngReact.IReactDirectiveService)
	: ng.IDirective
{
	'ngInject';
	return reactDirective(AccountManagerCard, ['imageUrl', 'name', 'phone', 'email']);
}

export default angular.module('duel.account-manager-card', [ngReact.name])
	.directive('duelAccountManagerImage', duelAccountManagerImage);