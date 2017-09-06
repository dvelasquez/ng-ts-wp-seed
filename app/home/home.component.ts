import {IComponentOptions, IController} from 'angular';

class HomeController implements IController {
    welcome:string='hello ng';
    constructor() {
    }
}

export class HomeComponent implements IComponentOptions {
    static NAME: string = 'homeView';
    controller: any;
    templateUrl: any;
    constructor() {
        this.controller = HomeController;
        this.templateUrl = require('./home.component.html');
    }
}
