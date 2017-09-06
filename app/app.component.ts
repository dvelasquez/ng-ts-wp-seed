import {IComponentOptions, IController} from 'angular';
import {StateService} from '@uirouter/angularjs';

class AppController implements IController {
    static $inject: string[] = ['$state'];

    constructor(public $state: StateService) {
        $state.go('app.home');
    }
}

export class AppComponent implements IComponentOptions {
    static NAME: string = 'appView';
    controller: any;
    templateUrl: any;

    constructor() {
        this.controller = AppController;
        this.templateUrl = require('./app.component.html');
    }
}
