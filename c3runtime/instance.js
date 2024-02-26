'use strict'
{
    C3.Plugins.InstantGamesBridge.Instance = class InstantGamesBridgeInstance extends C3.SDKInstanceBase {
        constructor(inst, properties) {
            super(inst)

            this.conditions = C3.Plugins.InstantGamesBridge.Cnds
            this.actions = C3.Plugins.InstantGamesBridge.Acts

            let cdnUrl = 'https://cdn.jsdelivr.net/gh/instant-games-bridge/instant-games-bridge@1.12.0/dist/instant-games-bridge.js'
            if (properties[1] !== '') {
                cdnUrl = properties[1]
            }

            this.gameDistributionGameId = properties[3]
            this.vkPlayGameId = properties[4]

            if (properties[0]) {
                this._runtime.AddLoadPromise(this.loadSdk(cdnUrl))
            }

            if (properties[2]) {
                this._runtime.AddLoadPromise(this.initializeSdk())
            }

            if (properties[5]) {
                this.showInterstitialOnInit = properties[5]
            }

            this.storageData = null
            this.storageDataGetRequestKeys = []
            this.storageDataSetRequestKeys = []
            this.storageDataSetRequestValues = []
            this.storageDataDeleteRequestKeys = []
            this.remoteConfig = {}
            this.remoteConfigGetRequestClientFeatures = []
        }

        loadSdk(cdnUrl) {
            return new Promise((resolve, reject) => {
                try {
                    ((d) => {
                        let t = d.getElementsByTagName('script')[0]
                        let s = d.createElement('script')
                        s.src = cdnUrl
                        s.async = true
                        s.onload = () => {
                            resolve()
                        }
                        t.parentNode.insertBefore(s, t)
                    })(document)
                } catch (error) {
                    console.error(error)
                    reject(error)
                }
            })
        }

        initializeSdk() {
            return new Promise((resolve, reject) => {
                const waitForBridgeLoaded = () => {
                    if (window.bridge !== undefined) {
                        let bridgeOptions = {
                            platforms: { }
                        }

                        if (this.gameDistributionGameId !== '') {
                            bridgeOptions.platforms['game_distribution'] = { gameId: this.gameDistributionGameId }
                        }

                        if (this.vkPlayGameId !== '') {
                            bridgeOptions.platforms['vk_play'] = { gameId: this.vkPlayGameId }
                        }

                        window.bridge.initialize(bridgeOptions)
                            .then(() => {
                                window.bridge.advertisement.on('banner_state_changed', state => {
                                    this.Trigger(this.conditions.OnBannerStateChanged)

                                    switch (state) {
                                        case window.bridge.BANNER_STATE.LOADING:
                                            this.Trigger(this.conditions.OnBannerLoading)
                                            break
                                        case window.bridge.BANNER_STATE.SHOWN:
                                            this.Trigger(this.conditions.OnBannerShown)
                                            break
                                        case window.bridge.BANNER_STATE.HIDDEN:
                                            this.Trigger(this.conditions.OnBannerHidden)
                                            break
                                        case window.bridge.BANNER_STATE.FAILED:
                                            this.Trigger(this.conditions.OnBannerFailed)
                                            break
                                    }
                                })

                                window.bridge.advertisement.on('interstitial_state_changed', state => {
                                    this.Trigger(this.conditions.OnInterstitialStateChanged)

                                    switch (state) {
                                        case window.bridge.INTERSTITIAL_STATE.OPENED:
                                            this.Trigger(this.conditions.OnInterstitialOpened)
                                            break
                                        case window.bridge.INTERSTITIAL_STATE.CLOSED:
                                            this.Trigger(this.conditions.OnInterstitialClosed)
                                            break
                                        case window.bridge.INTERSTITIAL_STATE.FAILED:
                                            this.Trigger(this.conditions.OnInterstitialFailed)
                                            break
                                    }
                                })

                                window.bridge.advertisement.on('rewarded_state_changed', state => {
                                    this.Trigger(this.conditions.OnRewardedStateChanged)

                                    switch (state) {
                                        case window.bridge.REWARDED_STATE.OPENED:
                                            this.Trigger(this.conditions.OnRewardedOpened)
                                            break
                                        case window.bridge.REWARDED_STATE.REWARDED:
                                            this.Trigger(this.conditions.OnRewardedRewarded)
                                            break
                                        case window.bridge.REWARDED_STATE.CLOSED:
                                            this.Trigger(this.conditions.OnRewardedClosed)
                                            break
                                        case window.bridge.REWARDED_STATE.FAILED:
                                            this.Trigger(this.conditions.OnRewardedFailed)
                                            break
                                    }
                                })

                                window.bridge.game.on('visibility_state_changed', state => {
                                    this.Trigger(this.conditions.OnVisibilityStateChanged)
                                })

                                resolve()

                                if (this.showInterstitialOnInit) {
                                    if (window.bridge.platform.id === window.bridge.PLATFORM_ID.YANDEX || window.bridge.platform.id === window.bridge.PLATFORM_ID.GAME_DISTRIBUTION) {
                                        window.bridge.advertisement.showInterstitial()
                                    }
                                }
                            })
                            .catch(error => reject(error))
                    } else {
                        setTimeout(waitForBridgeLoaded, 100)
                    }
                }

                waitForBridgeLoaded()
            })
        }

        Release() {
            super.Release()
        }

        SaveToJson() {
            return {
                storageData: this.storageData
            }
        }

        LoadFromJson(o) {
            this.storageData = o.storageData || { }
        }

        GetDebuggerProperties() {
            return [{
                title: 'InstantGamesBridge',
                properties: []
            }]
        }
    }
}
