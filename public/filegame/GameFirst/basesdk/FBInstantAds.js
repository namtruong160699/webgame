class FBInstantAds {


    static getInstance() {
        if (FBInstantAds.mInstance == null) {
            FBInstantAds.mInstance = new FBInstantAds();
            FBInstantAds.mInstance.init();
        }

        return FBInstantAds.mInstance;
    }

    init() {
        LogHelper.LogD("FBInstantAds init");

        this.keyFull = "123123123123_123123123123";
        this.keyGift = "456456456456_456456456456";

        this.timeReloadAds = 30000;

        this.isFullLoading = false;
        this.isFullLoaded = false;
        this.isFullShowing = false;
        this.fullTryLoad = 0;
        this._fullCbLoaded = null;
        this._fullCbLoadFailed = null;
        this._fullCbClose = null;
        this._fullCbShowFailed = null;
        this.adsFull = null;


        this.isGiftLoading = false;
        this.isGiftLoaded = false;
        this.isGiftShowing = false;
        this.giftTryLoad = 0;

        this._giftCbLoaded = null;
        this._giftCbLoadFailed = null;
        this._giftCbClose = null;
        this._giftCbShowFailed = null;

        this.adsGift = null;
        let supportedAPIs = FBInstant.getSupportedAPIs();
        let canShowAds = (supportedAPIs.includes('getInterstitialAdAsync') && supportedAPIs.includes('getRewardedVideoAsync'));
        if (!canShowAds) {
            LogHelper.LogE('Ads not supported in this session');
        }


    }

    //full--------------------------------------------------------------------------------------------------------------------------------------------------

    loadFull(cbFullLoaded, cbFullLoadFailed) {
        LogHelper.LogD("loadFull 1")
        if (!this.isFullLoading) {
            LogHelper.LogD("loadFull 2")
            this.fullTryLoad = 0;
            if (!this.isFullLoaded) {
                LogHelper.LogD("loadFull a1")
                this._fullCbLoaded = cbFullLoaded;
                this._fullCbLoadFailed = cbFullLoadFailed;

                this.tryLoadFull(this.adsFull);
            } else {
                LogHelper.LogD("loadFull isFullLoaded_1 = false && isFullLoaded_2 = false");
            }
        } else {
            LogHelper.LogD("loadFull isFullLoading=" + this.isFullLoading);
        }
    }

    tryLoadFull() {
        const toTryLoad = 2;
        if (this.fullTryLoad >= toTryLoad) {
            LogHelper.LogD("tryLoadFull over try")
            if (this._fullCbLoadFailed != null) {
                this._fullCbLoadFailed();
                this._fullCbLoadFailed = null;
            }
            return;
        }
        LogHelper.LogD("tryLoadFull 2")
        this.isFullLoading = true;
        this.isFullLoaded = false;


        FBInstant.getInterstitialAdAsync(this.keyFull)
            .then(function(interstitial) {
                LogHelper.LogD("full load have ad")
                FBInstantAds.mInstance.adsFull = interstitial;
                return FBInstantAds.mInstance.adsFull.loadAsync();
            }).then(function() {
                LogHelper.LogD("full loaded")
                FBInstantAds.mInstance.isFullLoading = false;
                FBInstantAds.mInstance.fullTryLoad = 0;
                FBInstantAds.mInstance.isFullLoaded = true;

                if (FBInstantAds.mInstance._fullCbLoaded != null) {
                    FBInstantAds.mInstance._fullCbLoaded();
                    FBInstantAds.mInstance._fullCbLoaded = null;
                } else {
                    LogHelper.LogE("full loaded CbLoaded = null");
                }

            }).catch(function(err) {
                LogHelper.LogE("full load failed err=" + err);
                FBInstantAds.mInstance.isFullLoading = false;
                FBInstantAds.mInstance.fullTryLoad++;
                FBInstantAds.mInstance.adsFull = null;
                FBInstantAds.mInstance.isFullLoaded = false;


                if (FBInstantAds.mInstance._fullCbLoadFailed != null) {
                    FBInstantAds.mInstance._fullCbLoadFailed();
                    FBInstantAds.mInstance._fullCbLoadFailed = null;
                } else {
                    LogHelper.LogE("full loaded CbLoadFailed = null");
                }

                setTimeout(function() {
                    FBInstantAds.mInstance.tryLoadFull();
                }, FBInstantAds.mInstance.timeReloadAds);
            });
    }

    getFullLoaded() {
        if (this.isFullLoaded && this.adsFull != null) {
            return true;
        }

        return false;
    }

    showFull(cbFullClose = null, cbFullShowFailed = null) {
        let res = false;

        if (this.getFullLoaded()) {
            LogHelper.LogD("showFull 1")
            this.fullTryLoad = 0;

            if (!this.isFullShowing) {
                this.isFullShowing = true;
                this.isFullLoaded = false;
                this._fullCbClose = cbFullClose;
                this._fullCbShowFailed = cbFullShowFailed;
                this.adsFull.showAsync()
                    .then(function() {
                        LogHelper.LogD("showFull finished successfully");
                        FBInstantAds.mInstance.isFullShowing = false;
                        if (FBInstantAds.mInstance._fullCbClose != null) {
                            FBInstantAds.mInstance._fullCbClose();
                            FBInstantAds.mInstance._fullCbClose = null;
                        } else {
                            LogHelper.LogD("showFull finished CbClose = null");
                        }
                        FBInstantAds.mInstance.adsFull = null;
                    }).catch(function(err) {
                        LogHelper.LogD("showFull failed err=" + err.message)
                        FBInstantAds.mInstance.isFullShowing = false;
                        if (FBInstantAds.mInstance._fullCbShowFailed != null) {
                            FBInstantAds.mInstance._fullCbShowFailed();
                            FBInstantAds.mInstance._fullCbShowFailed = null;
                        }
                        FBInstantAds.mInstance.adsFull = null;
                    });
                res = true;
            } else {
                LogHelper.LogD("showFull isShowing");
            }

        } else {
            LogHelper.LogD("showFull failed no ads show");
            if (cbFullShowFailed != null) {
                cbFullShowFailed();
            }
            this.loadFull(null, null);
        }

        return res;
    }

    //gift--------------------------------------------------------------------------------------------------------------------------------------------------
    loadGift(cbGiftLoaded = null, cbGiftLoadFailed = null) {
        if (!this.isGiftLoading && !this.isGiftLoaded) {
            this.giftTryLoad = 0;
            this._giftCbLoaded = cbGiftLoaded;
            this._giftCbLoadFailed = cbGiftLoadFailed;
            this.tryLoadGift();
        } else {
            LogHelper.LogD("loadGift isGiftLoading=" + this.isGiftLoading + " isGiftLoaded=" + this.isGiftLoaded);
        }
    }

    tryLoadGift() {
        const toTryLoad = 2;
        if (this.giftTryLoad >= toTryLoad) {
            LogHelper.LogD("tryLoadGift over try")
            if (cbGiftLoadFailed != null) {
                cbGiftLoadFailed();
            }
            return;
        }
        LogHelper.LogD("tryLoadGift 2")
        this.isGiftLoading = true;
        this.isGiftLoaded = false;
        FBInstant.getRewardedVideoAsync(this.keyGift)
            .then(function(rewarded) {
                LogHelper.LogD("rewarded load have ad")
                FBInstantAds.mInstance.adsGift = rewarded;
                return FBInstantAds.mInstance.adsGift.loadAsync();
            }).then(function() {
                LogHelper.LogD("Gift loaded")
                FBInstantAds.mInstance.isGiftLoading = false;
                FBInstantAds.mInstance.giftTryLoad = 0;
                FBInstantAds.mInstance.isGiftLoaded = true;

                if (FBInstantAds.mInstance._giftCbLoaded != null) {
                    FBInstantAds.mInstance._giftCbLoaded();
                    FBInstantAds.mInstance._giftCbLoaded = null;
                }

            }).catch(function(err) {
                LogHelper.LogD("Gift load failed err=" + err.message)
                FBInstantAds.mInstance.isGiftLoading = false;
                FBInstantAds.mInstance.giftTryLoad++;
                FBInstantAds.mInstance.adsGift = null;
                FBInstantAds.mInstance.isGiftLoaded = false;

                if (FBInstantAds.mInstance._giftCbLoadFailed != null) {
                    FBInstantAds.mInstance._giftCbLoadFailed();
                    FBInstantAds.mInstance._giftCbLoadFailed = null;
                }

                setTimeout(function() {
                    FBInstantAds.mInstance.tryLoadGift();
                }, FBInstantAds.mInstance.timeReloadAds);
            });
    }

    getGiftLoaded() {
        if (this.isGiftLoaded && this.adsGift != null) {
            return true;
        }

        return false;
    }

    showGift(cbGiftClose = null, cbGiftShowFailed = null) {
        let res = false;

        if (this.getGiftLoaded() && !this.isFullShowing) {
            LogHelper.LogD("showGift 1")
            this.giftTryLoad = 0;

            if (!this.isFullShowing) {
                this._giftCbClose = cbGiftClose;
                this._giftCbShowFailed = cbGiftShowFailed;
                this.isGiftShowing = true;
                this.isGiftLoaded = false;
                this.adsGift.showAsync()
                    .then(function() {
                        LogHelper.LogD("showGift finished successfully");
                        FBInstantAds.mInstance.isGiftShowing = false;
                        if (FBInstantAds.mInstance._giftCbClose != null) {
                            FBInstantAds.mInstance._giftCbClose();
                            FBInstantAds.mInstance._giftCbClose = null
                        }
                        FBInstantAds.mInstance.adsGift = null;
                    }).catch(function(err) {
                        LogHelper.LogD("showGift failed err=" + err.message)
                        FBInstantAds.mInstance.isGiftShowing = false;
                        if (FBInstantAds.mInstance._giftCbShowFailed != null) {
                            FBInstantAds.mInstance._giftCbShowFailed();
                            FBInstantAds.mInstance._giftCbShowFailed = null;
                        }
                        FBInstantAds.mInstance.adsGift = null;
                    });
                res = true;
            } else {
                LogHelper.LogD("showGift isShowing");
            }

        } else {
            LogHelper.LogD("showGift failed no ads show");
            if (cbGiftShowFailed != null) {
                cbGiftShowFailed();
            }
        }

        return res;
    }
}