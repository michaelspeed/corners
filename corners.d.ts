import Vue, { PluginFunction, VueConstructor } from 'vue';


interface InstallFunction extends PluginFunction<any> {
  installed?: boolean;
}

declare const Corners: { install: InstallFunction };
export default Corners;

export const CornersSample: VueConstructor<Vue>;
