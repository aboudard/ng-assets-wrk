import { Rule, SchematicContext, Tree } from "@angular-devkit/schematics";
import { execSync } from "child_process";

export function updateToV020(): Rule {
    return (tree: Tree, context: SchematicContext) => {
        context.logger.log('info', `🅰️ Update Schematics`);
        execSync(`ng update @angular/cli@14 @angular/core@14 --force --allow-dirty`);
        return tree;
    };
}