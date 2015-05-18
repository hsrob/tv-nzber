import appmodule = require('appmodule');

export interface INzbProvider{
    active:boolean
}
export interface ISettingsCtrlScope extends ng.IScope{
    newProvider: INzbProvider
}

export class SettingsCtrl {
    constructor(public $scope: ISettingsCtrlScope){
        this.$scope.newProvider = {
            active: true
        }
    }
}