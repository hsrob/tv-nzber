define(["require", "exports"], function (require, exports) {
    var SettingsCtrl = (function () {
        function SettingsCtrl($scope) {
            this.$scope = $scope;
            this.$scope.newProvider = {
                active: true
            };
        }
        return SettingsCtrl;
    })();
    exports.SettingsCtrl = SettingsCtrl;
});
//# sourceMappingURL=mainctrl.js.map