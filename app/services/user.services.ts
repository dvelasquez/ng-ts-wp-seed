import {IHttpPromise, IHttpService, IQService} from 'angular';

export class UserService {
    static $inject: string[] = ['$q', '$http'];
    static NAME: string = 'userService';

    constructor(protected $q: IQService, protected $http: IHttpService) {
    }

    public getAll(): IHttpPromise<any> {
        return this.$http.get('http://demo5512590.mockable.io/users');
    }
}