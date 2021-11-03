class FBInstantManager {

    static getInstance() {
        if (FBInstantManager.mInstance == null) {
            FBInstantManager.mInstance = new FBInstantManager();
            FBInstantManager.mInstance.init();
        }

        return FBInstantManager.mInstance;
    }

    init() {
        this._isStartGameDone = false;
        this._cbOnStart = null;
        this._percentLoading = 0;
        this._currPercent = 0;
        this._isAnimLoading = false;
        this._image = "water_puzzle.jpg";
        this.imageBase64 = null;
    }

    InitFBInstant(cbOnInit) {
        FBInstant.initializeAsync()
            .then(cbOnInit)
            .catch(function(err) {
                LogHelper.LogE("initializeAsync err=" + err);
                FBInstant.UpdateLoading(100);
            });
    }

    UpdateLoading(value) {
        if (value <= this._percentLoading) {
            return;
        }

        let that = this;
        this._percentLoading = parseInt(value);

        if (this._isAnimLoading) {
            return;
        }

        let id = setInterval(animLoading, 4);
        this._isAnimLoading = true;

        function animLoading() {
            if (that._currPercent >= that._percentLoading || that._currPercent >= 100) {
                that._isAnimLoading = false;
                clearInterval(id);
                if (that._currPercent >= 100) {
                    FBInstantManager.mInstance.FinishLoading();
                }
            } else {
                that._currPercent++;
                FBInstant.setLoadingProgress(that._currPercent);
            };

        }
    }

    FinishLoading() {
        FBInstant.startGameAsync()
            .then(function() {
                FBInstantManager.mInstance._isStartGameDone = true;
                if (FBInstantManager.mInstance._cbOnStart != null) {
                    FBInstantManager.mInstance._cbOnStart();
                    FBInstantManager.mInstance._cbOnStart = null;
                };
                FBInstantManager.mInstance.ToDataURL(FBInstantManager.mInstance._image, function(dataUrl) {
                    FBInstantManager.mInstance.imageBase64 = dataUrl;
                });
            })
            .catch(function(err) {
                LogHelper.LogE("startGameAsync err=" + err);
            })
    }

    SetCbOnStart(cbOnStart) {
        this._cbOnStart = cbOnStart;
        if (this._isStartGameDone && this._cbOnStart != null) {
            this._cbOnStart();
            this._cbOnStart = null;
        }
    }

    InviteFriend() {
        FBInstant.context.chooseAsync()
            .then(function() {
                FBInstantManager.mInstance.UpdateInviteContext();
            })
            .catch(function(err) {
                LogHelper.LogE("inviteFriend err=" + err);
                if (err.code == 'SAME_CONTEXT') {
                    FBInstantManager.mInstance.UpdateInviteContext();
                }
            });
    }

    UpdateInviteContext() {
        FBInstant.updateAsync({
            action: 'CUSTOM',
            intent: 'INVITE',
            cta: 'Play Now',
            template: "water_puzzle",
            image: FBInstantManager.mInstance.imageBase64,
            text: {
                default: FBInstant.player.getName() + " is playing! Turn you now!",
                localizations: {
                    en_US: FBInstant.player.getName() + " is playing! Turn you now!",
                }
            },
            data: {},
            strategy: 'IMMEDIATE',
            notification: 'NO_PUSH'
        }).then(function() {
            LogHelper.LogD("InviteFriendOk");
        }).catch(function(err) {
            LogHelper.LogE("InviteFriend err=" + err);
        })
    }

    ToDataURL(url, callback) {
        var xhr = new XMLHttpRequest();
        xhr.onload = function() {
            var reader = new FileReader();
            reader.onloadend = function() {
                callback(reader.result);
            }
            reader.readAsDataURL(xhr.response);
        };
        xhr.open('GET', url);
        xhr.responseType = 'blob';
        xhr.send();
    }

    HandleShareImage(imageUrl, strShare, cbSuccess) {
        var img2 = document.createElement('img');
        img2.setAttribute('crossOrigin', 'anonymous');
        img2.src = imageUrl;
        img2.onload = function() {
            let canvas = document.createElement("canvas");
            canvas.width = 600;
            canvas.height = 420;
            let ctx = canvas.getContext("2d");
            ctx.drawImage(img2, 0, 0, 600, 420);
            ctx.font = "bold 30px Arial";
            ctx.fillStyle = "#fffdfd";
            let textString = strShare,
                textWidth = ctx.measureText(textString).width;
            ctx.fillText(textString, (canvas.width / 2) - (textWidth / 2), 350);
            let dataURL = canvas.toDataURL("image/png");
            if (cbSuccess) {
                cbSuccess(dataURL);
            }
        }
    }

    ShareOnFacebook(strShare, strContentShare = "", imageShare = null, cbShareDone = null) {
        if (imageShare == null) {
            imageShare = FBInstantManager.mInstance.imageBase64;
        }
        if (strContentShare == "") {
            strContentShare = "Play this Awesome game";
        }
        FBInstantManager.mInstance.HandleShareImage(imageShare, strShare, (data) => {
            FBInstant.shareAsync({
                intent: 'SHARE',
                image: data,
                text: strContentShare,
                data: { myReplayData: '...' },
            }).then(function() {
                if (cbShareDone != null) {
                    cbShareDone();
                }
            }).catch(function() {

            });
        });
    }

    // AddHighScores(leaderboardName, score) {
    //     return await FBInstant
    //         .getLeaderboardAsync(leaderboardName)
    //         .then(leaderboard => {
    //             console.log(leaderboard.getName());
    //             return leaderboard.setScoreAsync(score, '{race: "elf", level: 3}');
    //         })
    //         .then((entry) => console.log(
    //             'Score saved' + '/n' +
    //             'Score: ' + entry.getScore() + '/n' +
    //             'Rank: ' + entry.getRank() + '/n' +
    //             'Extra Data: ' + entry.getExtraData() + '/n'
    //         ))
    //         .catch(error => console.error(error));
    // }

    // GetLeaderboard() {
    //     FBInstant
    //         .getLeaderboardAsync('my_awesome_leaderboard.' + FBInstant.context.getID())
    //         .then(leaderboard => leaderboard.getEntriesAsync(10, 0))
    //         .then(entries => {
    //             for (var i = 0; i < entries.length; i++) {
    //                 console.log(
    //                     entries[i].getRank() + '. ' +
    //                     entries[i].getPlayer().getName() + ': ' +
    //                     entries[i].getScore()
    //                 );
    //             }
    //         }).catch(error => console.error(error));
    // }
}