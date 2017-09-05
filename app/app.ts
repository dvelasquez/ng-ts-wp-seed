import {module, element, bootstrap, ILogService} from 'angular';
import {AppComponent} from './app.component';
import {HomeComponent} from './home/home.component';
import {UserService} from './services/user.services';

import './app.less';

export let app = module('app', [
    'ui.router'
])
    .config(['$stateProvider', '$urlRouterProvider', ($stateProvider: ng.ui.IStateProvider, $urlRouterProvider: ng.ui.IUrlRouterProvider) => {
        $stateProvider.state({
            name: 'app',
            url: '/app',
            component: AppComponent.NAME
        }).state(
            {
                name: 'app.home',
                url: '/home',
                component: HomeComponent.NAME
            });

        $urlRouterProvider.otherwise('/app');
    }])
    .component(AppComponent.NAME, new AppComponent())
    .component(HomeComponent.NAME, new HomeComponent())
    .run(['$log', ($log: ng.ILogService) => {
        $log.info('PRUEBA');
    }]);

element(document).ready(() => {
    bootstrap(document, ['app']);
});
