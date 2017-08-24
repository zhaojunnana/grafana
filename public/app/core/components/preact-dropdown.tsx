///<reference path="../../headers/common.d.ts" />


import { h, render, Component } from 'preact';

console.log(h);

export class PreactDropdown extends Component {
	render() {
		let time = new Date().toLocaleTimeString();
		return <span>{ time }</span>;
	}
}
