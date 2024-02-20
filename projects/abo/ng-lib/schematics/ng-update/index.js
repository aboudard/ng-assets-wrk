"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateToV020 = void 0;
const tasks_1 = require("@angular-devkit/schematics/tasks");
function updateToV020() {
    return (tree, context) => {
        context.logger.log('info', `🅰️ Update Ng-Lib to v0.2.0`);
        context.addTask(new tasks_1.NodePackageInstallTask());
        return tree;
    };
}
exports.updateToV020 = updateToV020;
//# sourceMappingURL=index.js.map