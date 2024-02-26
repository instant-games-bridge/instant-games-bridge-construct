'use strict'
{
    C3.Plugins.InstantGamesBridge.Cnds = {
        // common
        OnInitializationCompleted() {
            return true
        },
        IsInitialized() {
            return window.bridge.isInitialized
        },


        // platform
        IsVk() {
            return window.bridge.platform.id === 'vk'
        },
        IsYandex() {
            return window.bridge.platform.id === 'yandex'
        },
        IsCrazyGames() {
            return window.bridge.platform.id === 'crazy_games'
        },
        IsAbsoluteGames() {
            return window.bridge.platform.id === 'absolute_games'
        },
        IsGameDistribution() {
            return window.bridge.platform.id === 'game_distribution'
        },
        IsVkPlay() {
            return window.bridge.platform.id === 'vk_play'
        },
        IsMock() {
            return window.bridge.platform.id === 'mock'
        },


        // device
        IsMobile() {
            return window.bridge.device.type === 'mobile'
        },
        IsTablet() {
            return window.bridge.device.type === 'tablet'
        },
        IsDesktop() {
            return window.bridge.device.type === 'desktop'
        },
        IsTv() {
            return window.bridge.device.type === 'tv'
        },


        // player
        IsPlayerAuthorizationSupported() {
            return window.bridge.player.isAuthorizationSupported
        },
        IsPlayerAuthorized() {
            return window.bridge.player.isAuthorized
        },
        OnAuthorizePlayerCompleted() {
            return true
        },
        IsLastAuthorizePlayerAuthorizedSuccessfully() {
            return this.isLastAuthorizePlayerAuthorizedSuccessfully
        },
        DoesPlayerHaveName() {
            return typeof window.bridge.player.name === 'string'
        },
        DoesPlayerHavePhoto(index) {
            return window.bridge.player.photos.length > index
        },


        // game
        OnVisibilityStateChanged() {
            return true
        },


        // storage
        IsStorageDataGetRequestSuccess() {
            return this.isStorageDataGetRequestSuccess
        },
        OnStorageDataGetRequestCompleted() {
            return true
        },
        IsStorageDataSetRequestSuccess() {
            return this.isStorageDataSetRequestSuccess
        },
        OnStorageDataSetRequestCompleted() {
            return true
        },
        IsStorageDataDeleteRequestSuccess() {
            return this.isStorageDataDeleteRequestSuccess
        },
        OnStorageDataDeleteRequestCompleted() {
            return true
        },

        OnGetStorageDataCompleted() {
            return true
        },
        IsLastGetStorageDataGotSuccessfully() {
            return this.isLastGetStorageDataGotSuccessfully
        },
        OnSetStorageDataCompleted() {
            return true
        },
        IsLastSetStorageDataSetSuccessfully() {
            return this.isLastSetStorageDataSetSuccessfully
        },
        OnDeleteStorageDataCompleted() {
            return true
        },
        IsLastDeleteStorageDataDeletedSuccessfully() {
            return this.isLastDeleteStorageDataDeletedSuccessfully
        },
        HasStorageData(key) {
            if (!this.storageData)
                return 0

            let value = this.storageData[key]
            return value !== null && typeof value !== 'undefined'
        },
        IsStorageSupported(storageType) {
            switch (storageType) {
                case 0:
                    storageType = "local_storage"
                    break
                case 1:
                    storageType = "platform_internal"
                    break
            }

            return window.bridge.storage.isSupported(storageType)
        },
        IsStorageAvailable(storageType) {
            switch (storageType) {
                case 0:
                    storageType = "local_storage"
                    break
                case 1:
                    storageType = "platform_internal"
                    break
            }

            return window.bridge.storage.isAvailable(storageType)
        },


        // advertisement
        IsBannerSupported() {
            return window.bridge.advertisement.isBannerSupported
        },
        OnBannerStateChanged() {
            return true
        },
        OnBannerLoading() {
            return true
        },
        OnBannerShown() {
            return true
        },
        OnBannerHidden() {
            return true
        },
        OnBannerFailed() {
            return true
        },

        OnInterstitialStateChanged() {
            return true
        },
        OnInterstitialLoading() {
            return true
        },
        OnInterstitialOpened() {
            return true
        },
        OnInterstitialClosed() {
            return true
        },
        OnInterstitialFailed() {
            return true
        },

        OnRewardedStateChanged() {
            return true
        },
        OnRewardedLoading() {
            return true
        },
        OnRewardedOpened() {
            return true
        },
        OnRewardedRewarded() {
            return true
        },
        OnRewardedClosed() {
            return true
        },
        OnRewardedFailed() {
            return true
        },


        // social
        IsShareSupported() {
            return window.bridge.social.isShareSupported
        },
        OnShareCompleted() {
            return true
        },
        IsLastShareSharedSuccessfully() {
            return this.isLastShareSharedSuccessfully
        },

        IsInviteFriendsSupported() {
            return window.bridge.social.isInviteFriendsSupported
        },
        OnInviteFriendsCompleted() {
            return true
        },
        IsLastInviteFriendsInvitedSuccessfully() {
            return this.isLastInviteFriendsInvitedSuccessfully
        },

        IsJoinCommunitySupported() {
            return window.bridge.social.isJoinCommunitySupported
        },
        OnJoinCommunityCompleted() {
            return true
        },
        IsLastJoinCommunityJoinedSuccessfully() {
            return this.isLastJoinCommunityJoinedSuccessfully
        },

        IsCreatePostSupported() {
            return window.bridge.social.isCreatePostSupported
        },
        OnCreatePostCompleted() {
            return true
        },
        IsLastCreatePostCreatedSuccessfully() {
            return this.isLastCreatePostCreatedSuccessfully
        },

        IsAddToHomeScreenSupported() {
            return window.bridge.social.isAddToHomeScreenSupported
        },
        OnAddToHomeScreenCompleted() {
            return true
        },
        IsLastAddToHomeScreenAddedSuccessfully() {
            return this.isLastAddToHomeScreenAddedSuccessfully
        },

        IsAddToFavoritesSupported() {
            return window.bridge.social.isAddToFavoritesSupported
        },
        OnAddToFavoritesCompleted() {
            return true
        },
        IsLastAddToFavoritesAddedSuccessfully() {
            return this.isLastAddToFavoritesAddedSuccessfully
        },

        IsRateSupported() {
            return window.bridge.social.isRateSupported
        },
        OnRateCompleted() {
            return true
        },
        IsLastRateRatedSuccessfully() {
            return this.isLastRateRatedSuccessfully
        },

        IsExternalLinksAllowed() {
            return window.bridge.social.isExternalLinksAllowed
        },


        // leaderboard
        IsLeaderboardSupported() {
            return window.bridge.leaderboard.isSupported
        },
        IsLeaderboardNativePopupSupported() {
            return window.bridge.leaderboard.isNativePopupSupported
        },
        IsLeaderboardMultipleBoardsSupported() {
            return window.bridge.leaderboard.isMultipleBoardsSupported
        },
        IsLeaderboardSetScoreSupported() {
            return window.bridge.leaderboard.isSetScoreSupported
        },
        IsLeaderboardGetScoreSupported() {
            return window.bridge.leaderboard.isGetScoreSupported
        },
        IsLeaderboardGetEntriesSupported() {
            return window.bridge.leaderboard.isGetEntriesSupported
        },

        OnLeaderboardSetScoreCompleted() {
            return true
        },
        OnLeaderboardGetScoreCompleted() {
            return true
        },
        OnLeaderboardGetEntriesCompleted() {
            return true
        },
        OnLeaderboardShowNativePopupCompleted() {
            return true
        },

        IsLastLeaderboardSetScoreSetSuccessfully() {
            return this.isLastLeaderboardSetScoreSetSuccessfully
        },
        IsLastLeaderboardGetScoreGotSuccessfully() {
            return this.isLastLeaderboardGetScoreGotSuccessfully
        },
        IsLastLeaderboardGetEntriesGotSuccessfully() {
            return this.isLastLeaderboardGetEntriesGotSuccessfully
        },
        IsLastLeaderboardShowNativePopupShownSuccessfully() {
            return this.isLastLeaderboardShowNativePopupShownSuccessfully
        },

        DoesLeaderboardEntryPlayerHaveName(entryIndex) {
            if (this.leaderboardEntries === null)
                return false

            let entry = this.leaderboardEntries[entryIndex]
            if (entry === undefined)
                return false

            return typeof entry.name === 'string'
        },
        DoesLeaderboardEntryPlayerHavePhoto(entryIndex, photoIndex) {
            if (this.leaderboardEntries === null)
                return false

            let entry = this.leaderboardEntries[entryIndex]
            if (entry === undefined)
                return false

            return entry.photos.length > photoIndex
        },


        // payments
        IsPaymentsSupported() {
            return window.bridge.payments.isSupported
        },

        OnPaymentsPurchaseCompleted() {
            return true
        },
        OnPaymentsGetPurchasesCompleted() {
            return true
        },
        OnPaymentsGetCatalogCompleted() {
            return true
        },
        OnPaymentsConsumePurchaseCompleted() {
            return true
        },

        IsLastPaymentsPurchasePurchasedSuccessfully() {
            return this.isLastPaymentsPurchasePurchasedSuccessfully
        },

        IsLastPaymentsGetPurchasesGotSuccessfully() {
            return this.isLastPaymentsGetPurchasesGotSuccessfully
        },

        IsLastPaymentsGetCatalogGotSuccessfully() {
            return this.isLastPaymentsGetCatalogGotSuccessfully
        },

        IsLastPaymentsConsumePurchaseConsumedSuccessfully() {
            return this.isLastPaymentsConsumePurchaseConsumedSuccessfully
        },

        DoesPaymentsHavePurchase(purchaseId) {
            if (!this.paymentsPurchases || this.paymentsPurchases.length <= 0) {
                return false
            }

            for (let i = 0; i < this.paymentsPurchases.length; i++) {
                let purchase = this.paymentsPurchases[i]
                if (purchase.id === purchaseId) {
                    return true
                }
            }

            return false
        },

        // remote-config
        IsRemoteConfigSupported() {
            return window.bridge.remoteConfig.isSupported
        },

        OnRemoteConfigGotCompleted() {
            return true
        },

        IsRemoteConfigGotSuccessfully() {
            return this.isRemoteConfigGotSuccessfully
        },

        HasRemoteConfig(key) {
            if (!this.remoteConfig)
                return 0

            let value = this.remoteConfig[key]
            return value !== null && typeof value !== 'undefined'
        },

    }
}
