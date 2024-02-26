'use strict'
{
    const PLUGIN_ID = 'InstantGamesBridge'
    const PLUGIN_VERSION = '1.12.0'
    const PLUGIN_CATEGORY = 'platform-specific'

    const PLUGIN_CLASS = (SDK.Plugins.InstantGamesBridge = class InstantGamesBridgePlugin extends SDK.IPluginBase {
        constructor() {
            super(PLUGIN_ID)

            SDK.Lang.PushContext('plugins.' + PLUGIN_ID.toLowerCase())
            this._info.SetName(lang('.name'))
            this._info.SetDescription(lang('.description'))
            this._info.SetVersion(PLUGIN_VERSION)
            this._info.SetCategory(PLUGIN_CATEGORY)
            this._info.SetAuthor(lang('.author'))
            this._info.SetHelpUrl(lang('.help-url'))
            this._info.SetIsSingleGlobal(true)
            this._info.SetSupportedRuntimes(['c3'])

            SDK.Lang.PushContext('.properties')
            this._info.SetProperties([
                new SDK.PluginProperty('check', 'load-sdk-from-cdn', true),
                new SDK.PluginProperty('text', 'custom-cdn-url', ''),
                new SDK.PluginProperty('check', 'initialize-on-load', true),
                new SDK.PluginProperty('text', 'game-distribution-game-id', ''),
                new SDK.PluginProperty('text', 'vk-play-game-id', ''),
                new SDK.PluginProperty('check', 'show-interstitial-on-init', true)
            ]);

            SDK.Lang.PopContext()
            SDK.Lang.PopContext()
        }
    })

    PLUGIN_CLASS.Register(PLUGIN_ID, PLUGIN_CLASS)
}
