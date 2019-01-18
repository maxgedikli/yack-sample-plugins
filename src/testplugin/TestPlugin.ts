import {IPlugin, PluginAuthTypes, PluginContext} from "yack-plugin-framework";
const pluginIcon = require("./testplugin.png");
export class TestPlugin implements IPlugin {
    id = "test_plugin";
    name = "Test Plugin";
    iconUrl = pluginIcon;
    authType = PluginAuthTypes.None

    async init(context: PluginContext): Promise<void> {
        
    }
}