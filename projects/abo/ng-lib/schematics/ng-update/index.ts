import { Rule, SchematicContext, Tree } from "@angular-devkit/schematics";
import { NodePackageInstallTask } from "@angular-devkit/schematics/tasks";

export function updateToV020(): Rule {
    return (tree: Tree, context: SchematicContext) => {
        context.logger.log('info', `🅰️ Update Ng-Lib to v0.2.0`);
        context.addTask(new NodePackageInstallTask());
        return tree;
    };
}