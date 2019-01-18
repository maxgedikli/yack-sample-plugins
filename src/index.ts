import { TestPlugin } from "./testplugin/TestPlugin";
import { IPlugin } from "yack-plugin-framework";

const plugins: IPlugin[] = [
    new TestPlugin()
];
export default plugins;