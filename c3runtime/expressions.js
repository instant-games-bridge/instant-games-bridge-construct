'use strict'
{
    C3.Plugins.InstantGamesBridge.Exps = {
        // platform
        PlatformId() {
            return window.bridge.platform.id
        },
        PlatformLanguage() {
            return window.bridge.platform.language
        },
        PlatformPayload() {
            return window.bridge.platform.payload
        },
        PlatformTld() {
            if (window.bridge.platform.tld) {
                return window.bridge.platform.tld
            }

            return ''
        },


        // device
        DeviceType() {
            return window.bridge.device.type
        },


        // player
        PlayerId() {
            return window.bridge.player.id
        },
        PlayerName() {
            return window.bridge.player.name
        },
        PlayerPhotosCount() {
            return window.bridge.player.photos.length
        },
        PlayerPhoto(index) {
            return window.bridge.player.photos[index]
        },


        // game
        VisibilityState() {
            return window.bridge.game.visibilityState
        },


        // storage
        DefaultStorageType() {
            return window.bridge.storage.defaultType
        },
        StorageData(key) {
            if (!this.storageData) {
                return null
            }

            return this.storageData[key]
        },
        StorageDataAsJSON(key) {
            if (!this.storageData) {
                return null
            }

            let value = this.storageData[key]
            if (typeof value !== 'string') {
                value = JSON.stringify(value)
            }

            return value
        },


        // advertisement
        MinimumDelayBetweenInterstitial() {
            return window.bridge.advertisement.minimumDelayBetweenInterstitial
        },
        BannerState() {
            return window.bridge.advertisement.bannerState
        },
        InterstitialState() {
            return window.bridge.advertisement.interstitialState
        },
        RewardedState() {
            return window.bridge.advertisement.rewardedState
        },


        // leaderboard
        LeaderboardPlayerScore() {
            if (typeof this.leaderboardPlayerScore !== 'number') {
                return 0
            }

            return this.leaderboardPlayerScore
        },
        LeaderboardEntriesCount() {
            if (!this.leaderboardEntries) {
                return 0
            }

            return this.leaderboardEntries.length
        },
        LeaderboardEntryPlayerId(entryIndex) {
            if (!this.leaderboardEntries) {
                return ''
            }

            return this.leaderboardEntries[entryIndex].id
        },
        LeaderboardEntryPlayerName(entryIndex) {
            if (!this.leaderboardEntries) {
                return ''
            }

            return this.leaderboardEntries[entryIndex].name
        },
        LeaderboardEntryPlayerScore(entryIndex) {
            if (!this.leaderboardEntries) {
                return 0
            }

            return this.leaderboardEntries[entryIndex].score
        },
        LeaderboardEntryPlayerRank(entryIndex) {
            if (!this.leaderboardEntries) {
                return 0
            }

            return this.leaderboardEntries[entryIndex].rank
        },
        LeaderboardEntryPlayerPhotosCount(entryIndex) {
            if (!this.leaderboardEntries) {
                return ''
            }

            return this.leaderboardEntries[entryIndex].photos.length
        },
        LeaderboardEntryPlayerPhoto(entryIndex, photoIndex) {
            if (!this.leaderboardEntries) {
                return ''
            }

            return this.leaderboardEntries[entryIndex].photos[photoIndex]
        },


        // payments
        PaymentsPurchasesCount() {
            if (!this.paymentsPurchases) {
                return 0
            }

            return this.paymentsPurchases.length
        },

        PaymentsPurchaseId(index) {
            if (!this.paymentsPurchases || this.paymentsPurchases.length <= 0) {
                return null
            }

            return this.paymentsPurchases[index].productID
        },

        PaymentsPurchaseToken(index) {
            if (!this.paymentsPurchases || this.paymentsPurchases.length <= 0) {
                return null
            }

            return this.paymentsPurchases[index].purchaseToken
        },

        PaymentsCatalogCount() {
            if (!this.paymentsCatalog) {
                return 0
            }

            return this.paymentsCatalog.length
        },

        PaymentsCatalogId(index) {
            if (!this.paymentsCatalog || this.paymentsCatalog.length <= 0) {
                return null
            }

            return this.paymentsCatalog[index].id
        },

        PaymentsCatalogTitle(index) {
            if (!this.paymentsCatalog || this.paymentsCatalog.length <= 0) {
                return null
            }

            return this.paymentsCatalog[index].title
        },

        PaymentsCatalogDescription(index) {
            if (!this.paymentsCatalog || this.paymentsCatalog.length <= 0) {
                return null
            }

            return this.paymentsCatalog[index].description
        },

        PaymentsCatalogIcon(index) {
            if (!this.paymentsCatalog || this.paymentsCatalog.length <= 0) {
                return null
            }

            return this.paymentsCatalog[index].imageURI
        },

        PaymentsCatalogPrice(index) {
            if (!this.paymentsCatalog || this.paymentsCatalog.length <= 0) {
                return null
            }

            return this.paymentsCatalog[index].price
        },

        PaymentsCatalogPriceValue(index) {
            if (!this.paymentsCatalog || this.paymentsCatalog.length <= 0) {
                return null
            }

            return this.paymentsCatalog[index].priceValue
        },

        PaymentsCatalogPriceCurrencyCode(index) {
            if (!this.paymentsCatalog || this.paymentsCatalog.length <= 0) {
                return null
            }

            return this.paymentsCatalog[index].priceCurrencyCode
        },

        // remote-config
        RemoteConfig(key) {
            if (!this.remoteConfig) {
                return null
            }

            return this.remoteConfig[key]
        }
    }
}
