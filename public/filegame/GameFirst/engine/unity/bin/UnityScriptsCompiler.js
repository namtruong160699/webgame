/**
 * @version 1.0.7784.30649
 * @copyright anton
 * @compiler Bridge.NET 17.9.11-luna
 */
Bridge.assembly("UnityScriptsCompiler", function($asm, globals) {
    "use strict";

    /*CameraPropertyOverrider start.*/
    Bridge.define("CameraPropertyOverrider", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            isSafeAreaCamera: false,
            useFullSize: false,
            myCamera: null
        },
        props: {
            RectSize: {
                get: function() {
                    if (UnityEngine.Component.op_Equality(this.myCamera, null)) {
                        this.myCamera = this.GetComponent(UnityEngine.Camera);
                    }
                    return this.myCamera.rect.$clone();
                }
            },
            SafeSize: {
                get: function() {
                    var safeX = UnityEngine.Screen.safeArea.x / UnityEngine.Screen.width;
                    var safeY = UnityEngine.Screen.safeArea.y / UnityEngine.Screen.height;
                    var safeW = UnityEngine.Screen.safeArea.width / UnityEngine.Screen.width;
                    var safeH = UnityEngine.Screen.safeArea.height / UnityEngine.Screen.height;

                    var originalRect = this.useFullSize ? new UnityEngine.Rect.$ctor1(0, 0, 1, 1) : this.RectSize.$clone();

                    return new UnityEngine.Rect.$ctor1(0, safeY + originalRect.y / safeH, 1, safeH * originalRect.height);
                }
            }
        },
        ctors: {
            init: function() {
                this.isSafeAreaCamera = true;
                this.useFullSize = true;
            }
        },
        methods: {
            /*CameraPropertyOverrider.Start start.*/
            Start: function() {
                this.myCamera = this.GetComponent(UnityEngine.Camera);
                this.UpdateCameraProperty();
            },
            /*CameraPropertyOverrider.Start end.*/

            /*CameraPropertyOverrider.UpdateCameraProperty start.*/
            UpdateCameraProperty: function() {
                if (this.isSafeAreaCamera) {
                    this.myCamera.rect = this.SafeSize.$clone();
                } else {
                    this.myCamera.rect = this.useFullSize ? new UnityEngine.Rect.$ctor1(0, 0, 1, 1) : this.RectSize.$clone();
                }
            },
            /*CameraPropertyOverrider.UpdateCameraProperty end.*/


        }
    });
    /*CameraPropertyOverrider end.*/

    /*CameraSetup start.*/
    Bridge.define("CameraSetup", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            baseDeco: null
        },
        methods: {
            /*CameraSetup.Start start.*/
            Start: function() {
                if (UnityEngine.Screen.height / UnityEngine.Screen.width >= 2) {
                    this.GetComponent(UnityEngine.Camera).fieldOfView = 92;
                }
            },
            /*CameraSetup.Start end.*/

            /*CameraSetup.OnEnable start.*/
            OnEnable: function() {
                this.baseDeco.SetActive(false);
            },
            /*CameraSetup.OnEnable end.*/


        }
    });
    /*CameraSetup end.*/

    /*ChangeImage start.*/
    Bridge.define("ChangeImage", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            listIcon: null,
            listbg: null,
            images: null
        },
        ctors: {
            init: function() {
                this.listIcon = new(System.Collections.Generic.List$1(UnityEngine.Sprite)).ctor();
                this.listbg = new(System.Collections.Generic.List$1(UnityEngine.Sprite)).ctor();
            }
        },
        methods: {
            /*ChangeImage.Awake start.*/
            Awake: function() {
                this.images = this.GetComponentsInChildren(UnityEngine.UI.Image);
            },
            /*ChangeImage.Awake end.*/

            /*ChangeImage.ChangeImageButton start.*/
            ChangeImageButton: function(isOn) {
                if (isOn) {
                    this.images[0].sprite = this.listbg.getItem(0);
                    this.images[1].sprite = this.listIcon.getItem(0);
                } else {
                    this.images[0].sprite = this.listbg.getItem(1);
                    this.images[1].sprite = this.listIcon.getItem(1);
                }
            },
            /*ChangeImage.ChangeImageButton end.*/


        }
    });
    /*ChangeImage end.*/

    /*ClickAction start.*/
    Bridge.define("ClickAction", {
        inherits: [UnityEngine.MonoBehaviour, UnityEngine.EventSystems.IPointerClickHandler],
        fields: {
            popupClose: null
        },
        alias: ["OnPointerClick", "UnityEngine$EventSystems$IPointerClickHandler$OnPointerClick"],
        methods: {
            /*ClickAction.OnPointerClick start.*/
            OnPointerClick: function(eventData) {
                this.popupClose.SetActive(false);
            },
            /*ClickAction.OnPointerClick end.*/


        }
    });
    /*ClickAction end.*/

    /*Data start.*/
    Bridge.define("Data", {
        fields: {
            _items: null
        },
        methods: {
            getItem: function(index) {
                if ((index >>> 0) >= ((this._items.length) >>> 0)) {
                    throw new System.ArgumentOutOfRangeException.ctor();
                }
                return this._items[index];
            },
            setItem: function(index, value) {
                if ((index >>> 0) >= ((this._items.length) >>> 0)) {
                    throw new System.ArgumentOutOfRangeException.ctor();
                }
                this._items[index] = value;
            }
        }
    });
    /*Data end.*/

    /*Decorate start.*/
    Bridge.define("Decorate", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            isInit: false,
            isAnim: false,
            items: null,
            id: 0
        },
        ctors: {
            init: function() {
                this.isInit = false;
                this.isAnim = true;
                this.id = 0;
            }
        },
        methods: {
            /*Decorate.SetEnable start.*/
            SetEnable: function(id) {

                if (this.isAnim) {
                    this.GetComponent(UnityEngine.Animation).Play();
                    this.isAnim = false;
                }
                // if(isInit) return;
                this.id = id;
                this.isInit = true;

                for (var i = 0; i < this.items.Count; i = (i + 1) | 0) {
                    this.items.getItem(i).gameObject.SetActive(false);
                }
                this.items.getItem(((id - 1) | 0)).gameObject.SetActive(true);
            },
            /*Decorate.SetEnable end.*/

            /*Decorate.OnDisable start.*/
            OnDisable: function() {
                this.Invoke("CheckState", 0.1);
            },
            /*Decorate.OnDisable end.*/

            /*Decorate.CheckState start.*/
            CheckState: function() {
                if (!this.gameObject.activeSelf) {
                    this.isInit = false;
                    this.isAnim = true;
                }
            },
            /*Decorate.CheckState end.*/


        }
    });
    /*Decorate end.*/

    /*DG.Tweening.DOTweenCYInstruction start.*/
    Bridge.define("DG.Tweening.DOTweenCYInstruction");
    /*DG.Tweening.DOTweenCYInstruction end.*/

    /*DG.Tweening.DOTweenCYInstruction+WaitForCompletion start.*/
    Bridge.define("DG.Tweening.DOTweenCYInstruction.WaitForCompletion", {
        inherits: [UnityEngine.CustomYieldInstruction],
        $kind: "nested class",
        fields: {
            t: null
        },
        props: {
            keepWaiting: {
                get: function() {
                    return this.t.active && !DG.Tweening.TweenExtensions.IsComplete(this.t);
                }
            }
        },
        ctors: {
            ctor: function(tween) {
                this.$initialize();
                UnityEngine.CustomYieldInstruction.ctor.call(this);
                this.t = tween;
            }
        }
    });
    /*DG.Tweening.DOTweenCYInstruction+WaitForCompletion end.*/

    /*DG.Tweening.DOTweenCYInstruction+WaitForElapsedLoops start.*/
    Bridge.define("DG.Tweening.DOTweenCYInstruction.WaitForElapsedLoops", {
        inherits: [UnityEngine.CustomYieldInstruction],
        $kind: "nested class",
        fields: {
            t: null,
            elapsedLoops: 0
        },
        props: {
            keepWaiting: {
                get: function() {
                    return this.t.active && DG.Tweening.TweenExtensions.CompletedLoops(this.t) < this.elapsedLoops;
                }
            }
        },
        ctors: {
            ctor: function(tween, elapsedLoops) {
                this.$initialize();
                UnityEngine.CustomYieldInstruction.ctor.call(this);
                this.t = tween;
                this.elapsedLoops = elapsedLoops;
            }
        }
    });
    /*DG.Tweening.DOTweenCYInstruction+WaitForElapsedLoops end.*/

    /*DG.Tweening.DOTweenCYInstruction+WaitForKill start.*/
    Bridge.define("DG.Tweening.DOTweenCYInstruction.WaitForKill", {
        inherits: [UnityEngine.CustomYieldInstruction],
        $kind: "nested class",
        fields: {
            t: null
        },
        props: {
            keepWaiting: {
                get: function() {
                    return this.t.active;
                }
            }
        },
        ctors: {
            ctor: function(tween) {
                this.$initialize();
                UnityEngine.CustomYieldInstruction.ctor.call(this);
                this.t = tween;
            }
        }
    });
    /*DG.Tweening.DOTweenCYInstruction+WaitForKill end.*/

    /*DG.Tweening.DOTweenCYInstruction+WaitForPosition start.*/
    Bridge.define("DG.Tweening.DOTweenCYInstruction.WaitForPosition", {
        inherits: [UnityEngine.CustomYieldInstruction],
        $kind: "nested class",
        fields: {
            t: null,
            position: 0
        },
        props: {
            keepWaiting: {
                get: function() {
                    return this.t.active && this.t.position * (((DG.Tweening.TweenExtensions.CompletedLoops(this.t) + 1) | 0)) < this.position;
                }
            }
        },
        ctors: {
            ctor: function(tween, position) {
                this.$initialize();
                UnityEngine.CustomYieldInstruction.ctor.call(this);
                this.t = tween;
                this.position = position;
            }
        }
    });
    /*DG.Tweening.DOTweenCYInstruction+WaitForPosition end.*/

    /*DG.Tweening.DOTweenCYInstruction+WaitForRewind start.*/
    Bridge.define("DG.Tweening.DOTweenCYInstruction.WaitForRewind", {
        inherits: [UnityEngine.CustomYieldInstruction],
        $kind: "nested class",
        fields: {
            t: null
        },
        props: {
            keepWaiting: {
                get: function() {
                    return this.t.active && (!this.t.playedOnce || this.t.position * (((DG.Tweening.TweenExtensions.CompletedLoops(this.t) + 1) | 0)) > 0);
                }
            }
        },
        ctors: {
            ctor: function(tween) {
                this.$initialize();
                UnityEngine.CustomYieldInstruction.ctor.call(this);
                this.t = tween;
            }
        }
    });
    /*DG.Tweening.DOTweenCYInstruction+WaitForRewind end.*/

    /*DG.Tweening.DOTweenCYInstruction+WaitForStart start.*/
    Bridge.define("DG.Tweening.DOTweenCYInstruction.WaitForStart", {
        inherits: [UnityEngine.CustomYieldInstruction],
        $kind: "nested class",
        fields: {
            t: null
        },
        props: {
            keepWaiting: {
                get: function() {
                    return this.t.active && !this.t.playedOnce;
                }
            }
        },
        ctors: {
            ctor: function(tween) {
                this.$initialize();
                UnityEngine.CustomYieldInstruction.ctor.call(this);
                this.t = tween;
            }
        }
    });
    /*DG.Tweening.DOTweenCYInstruction+WaitForStart end.*/

    /*DG.Tweening.DOTweenModuleAudio start.*/
    Bridge.define("DG.Tweening.DOTweenModuleAudio", {
        statics: {
            methods: {
                /*DG.Tweening.DOTweenModuleAudio.DOFade:static start.*/
                /**
                 * Tweens an AudioSource's volume to the given value.
                 Also stores the AudioSource as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleAudio
                 * @memberof DG.Tweening.DOTweenModuleAudio
                 * @param   {UnityEngine.AudioSource}           target      
                 * @param   {number}                            endValue    The end value to reach (0 to 1)
                 * @param   {number}                            duration    The duration of the tween
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOFade: function(target, endValue, duration) {
                    if (endValue < 0) {
                        endValue = 0;
                    } else {
                        if (endValue > 1) {
                            endValue = 1;
                        }
                    }
                    var t = DG.Tweening.DOTween.To$4(function() {
                        return target.volume;
                    }, function(x) {
                        target.volume = x;
                    }, endValue, duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(System.Single, System.Single, DG.Tweening.Plugins.Options.FloatOptions), t, target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleAudio.DOFade:static end.*/

                /*DG.Tweening.DOTweenModuleAudio.DOPitch:static start.*/
                /**
                 * Tweens an AudioSource's pitch to the given value.
                 Also stores the AudioSource as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleAudio
                 * @memberof DG.Tweening.DOTweenModuleAudio
                 * @param   {UnityEngine.AudioSource}           target      
                 * @param   {number}                            endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOPitch: function(target, endValue, duration) {
                    var t = DG.Tweening.DOTween.To$4(function() {
                        return target.pitch;
                    }, function(x) {
                        target.pitch = x;
                    }, endValue, duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(System.Single, System.Single, DG.Tweening.Plugins.Options.FloatOptions), t, target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleAudio.DOPitch:static end.*/

                /*DG.Tweening.DOTweenModuleAudio.DOSetFloat:static start.*/
                /**
                 * Tweens an AudioMixer's exposed float to the given value.
                 Also stores the AudioMixer as the tween's target so it can be used for filtered operations.
                 Note that you need to manually expose a float in an AudioMixerGroup in order to be able to tween it from an AudioMixer.
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleAudio
                 * @memberof DG.Tweening.DOTweenModuleAudio
                 * @param   {UnityEngine.Audio.AudioMixer}      target       
                 * @param   {string}                            floatName    Name given to the exposed float to set
                 * @param   {number}                            endValue     The end value to reach
                 * @param   {number}                            duration     The duration of the tween
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOSetFloat: function(target, floatName, endValue, duration) {
                    var t = DG.Tweening.DOTween.To$4(function() {
                        var currVal = {};
                        target.GetFloat(floatName, currVal);
                        return currVal.v;
                    }, function(x) {
                        target.SetFloat(floatName, x);
                    }, endValue, duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(System.Single, System.Single, DG.Tweening.Plugins.Options.FloatOptions), t, target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleAudio.DOSetFloat:static end.*/

                /*DG.Tweening.DOTweenModuleAudio.DOComplete:static start.*/
                /**
                 * Completes all tweens that have this target as a reference
                 (meaning tweens that were started from this target, or that had this target added as an Id)
                 and returns the total number of tweens completed
                 (meaning the tweens that don't have infinite loops and were not already complete)
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleAudio
                 * @memberof DG.Tweening.DOTweenModuleAudio
                 * @param   {UnityEngine.Audio.AudioMixer}    target           
                 * @param   {boolean}                         withCallbacks    For Sequences only: if TRUE also internal Sequence callbacks will be fired,
                 otherwise they will be ignored
                 * @return  {number}
                 */
                DOComplete: function(target, withCallbacks) {
                    if (withCallbacks === void 0) { withCallbacks = false; }
                    return DG.Tweening.DOTween.Complete(target, withCallbacks);
                },
                /*DG.Tweening.DOTweenModuleAudio.DOComplete:static end.*/

                /*DG.Tweening.DOTweenModuleAudio.DOKill:static start.*/
                /**
                 * Kills all tweens that have this target as a reference
                 (meaning tweens that were started from this target, or that had this target added as an Id)
                 and returns the total number of tweens killed.
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleAudio
                 * @memberof DG.Tweening.DOTweenModuleAudio
                 * @param   {UnityEngine.Audio.AudioMixer}    target      
                 * @param   {boolean}                         complete    If TRUE completes the tween before killing it
                 * @return  {number}
                 */
                DOKill: function(target, complete) {
                    if (complete === void 0) { complete = false; }
                    return DG.Tweening.DOTween.Kill(target, complete);
                },
                /*DG.Tweening.DOTweenModuleAudio.DOKill:static end.*/

                /*DG.Tweening.DOTweenModuleAudio.DOFlip:static start.*/
                /**
                 * Flips the direction (backwards if it was going forward or viceversa) of all tweens that have this target as a reference
                 (meaning tweens that were started from this target, or that had this target added as an Id)
                 and returns the total number of tweens flipped.
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleAudio
                 * @memberof DG.Tweening.DOTweenModuleAudio
                 * @param   {UnityEngine.Audio.AudioMixer}    target
                 * @return  {number}
                 */
                DOFlip: function(target) {
                    return DG.Tweening.DOTween.Flip(target);
                },
                /*DG.Tweening.DOTweenModuleAudio.DOFlip:static end.*/

                /*DG.Tweening.DOTweenModuleAudio.DOGoto:static start.*/
                /**
                 * Sends to the given position all tweens that have this target as a reference
                 (meaning tweens that were started from this target, or that had this target added as an Id)
                 and returns the total number of tweens involved.
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleAudio
                 * @memberof DG.Tweening.DOTweenModuleAudio
                 * @param   {UnityEngine.Audio.AudioMixer}    target     
                 * @param   {number}                          to         Time position to reach
                 (if higher than the whole tween duration the tween will simply reach its end)
                 * @param   {boolean}                         andPlay    If TRUE will play the tween after reaching the given position, otherwise it will pause it
                 * @return  {number}
                 */
                DOGoto: function(target, to, andPlay) {
                    if (andPlay === void 0) { andPlay = false; }
                    return DG.Tweening.DOTween.Goto(target, to, andPlay);
                },
                /*DG.Tweening.DOTweenModuleAudio.DOGoto:static end.*/

                /*DG.Tweening.DOTweenModuleAudio.DOPause:static start.*/
                /**
                 * Pauses all tweens that have this target as a reference
                 (meaning tweens that were started from this target, or that had this target added as an Id)
                 and returns the total number of tweens paused.
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleAudio
                 * @memberof DG.Tweening.DOTweenModuleAudio
                 * @param   {UnityEngine.Audio.AudioMixer}    target
                 * @return  {number}
                 */
                DOPause: function(target) {
                    return DG.Tweening.DOTween.Pause(target);
                },
                /*DG.Tweening.DOTweenModuleAudio.DOPause:static end.*/

                /*DG.Tweening.DOTweenModuleAudio.DOPlay:static start.*/
                /**
                 * Plays all tweens that have this target as a reference
                 (meaning tweens that were started from this target, or that had this target added as an Id)
                 and returns the total number of tweens played.
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleAudio
                 * @memberof DG.Tweening.DOTweenModuleAudio
                 * @param   {UnityEngine.Audio.AudioMixer}    target
                 * @return  {number}
                 */
                DOPlay: function(target) {
                    return DG.Tweening.DOTween.Play(target);
                },
                /*DG.Tweening.DOTweenModuleAudio.DOPlay:static end.*/

                /*DG.Tweening.DOTweenModuleAudio.DOPlayBackwards:static start.*/
                /**
                 * Plays backwards all tweens that have this target as a reference
                 (meaning tweens that were started from this target, or that had this target added as an Id)
                 and returns the total number of tweens played.
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleAudio
                 * @memberof DG.Tweening.DOTweenModuleAudio
                 * @param   {UnityEngine.Audio.AudioMixer}    target
                 * @return  {number}
                 */
                DOPlayBackwards: function(target) {
                    return DG.Tweening.DOTween.PlayBackwards(target);
                },
                /*DG.Tweening.DOTweenModuleAudio.DOPlayBackwards:static end.*/

                /*DG.Tweening.DOTweenModuleAudio.DOPlayForward:static start.*/
                /**
                 * Plays forward all tweens that have this target as a reference
                 (meaning tweens that were started from this target, or that had this target added as an Id)
                 and returns the total number of tweens played.
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleAudio
                 * @memberof DG.Tweening.DOTweenModuleAudio
                 * @param   {UnityEngine.Audio.AudioMixer}    target
                 * @return  {number}
                 */
                DOPlayForward: function(target) {
                    return DG.Tweening.DOTween.PlayForward(target);
                },
                /*DG.Tweening.DOTweenModuleAudio.DOPlayForward:static end.*/

                /*DG.Tweening.DOTweenModuleAudio.DORestart:static start.*/
                /**
                 * Restarts all tweens that have this target as a reference
                 (meaning tweens that were started from this target, or that had this target added as an Id)
                 and returns the total number of tweens restarted.
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleAudio
                 * @memberof DG.Tweening.DOTweenModuleAudio
                 * @param   {UnityEngine.Audio.AudioMixer}    target
                 * @return  {number}
                 */
                DORestart: function(target) {
                    return DG.Tweening.DOTween.Restart(target);
                },
                /*DG.Tweening.DOTweenModuleAudio.DORestart:static end.*/

                /*DG.Tweening.DOTweenModuleAudio.DORewind:static start.*/
                /**
                 * Rewinds all tweens that have this target as a reference
                 (meaning tweens that were started from this target, or that had this target added as an Id)
                 and returns the total number of tweens rewinded.
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleAudio
                 * @memberof DG.Tweening.DOTweenModuleAudio
                 * @param   {UnityEngine.Audio.AudioMixer}    target
                 * @return  {number}
                 */
                DORewind: function(target) {
                    return DG.Tweening.DOTween.Rewind(target);
                },
                /*DG.Tweening.DOTweenModuleAudio.DORewind:static end.*/

                /*DG.Tweening.DOTweenModuleAudio.DOSmoothRewind:static start.*/
                /**
                 * Smoothly rewinds all tweens that have this target as a reference
                 (meaning tweens that were started from this target, or that had this target added as an Id)
                 and returns the total number of tweens rewinded.
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleAudio
                 * @memberof DG.Tweening.DOTweenModuleAudio
                 * @param   {UnityEngine.Audio.AudioMixer}    target
                 * @return  {number}
                 */
                DOSmoothRewind: function(target) {
                    return DG.Tweening.DOTween.SmoothRewind(target);
                },
                /*DG.Tweening.DOTweenModuleAudio.DOSmoothRewind:static end.*/

                /*DG.Tweening.DOTweenModuleAudio.DOTogglePause:static start.*/
                /**
                 * Toggles the paused state (plays if it was paused, pauses if it was playing) of all tweens that have this target as a reference
                 (meaning tweens that were started from this target, or that had this target added as an Id)
                 and returns the total number of tweens involved.
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleAudio
                 * @memberof DG.Tweening.DOTweenModuleAudio
                 * @param   {UnityEngine.Audio.AudioMixer}    target
                 * @return  {number}
                 */
                DOTogglePause: function(target) {
                    return DG.Tweening.DOTween.TogglePause(target);
                },
                /*DG.Tweening.DOTweenModuleAudio.DOTogglePause:static end.*/


            }
        }
    });
    /*DG.Tweening.DOTweenModuleAudio end.*/

    /*DG.Tweening.DOTweenModulePhysics start.*/
    Bridge.define("DG.Tweening.DOTweenModulePhysics", {
        statics: {
            methods: {
                /*DG.Tweening.DOTweenModulePhysics.DOMove:static start.*/
                /**
                 * Tweens a Rigidbody's position to the given value.
                 Also stores the rigidbody as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModulePhysics
                 * @memberof DG.Tweening.DOTweenModulePhysics
                 * @param   {UnityEngine.Rigidbody}             target      
                 * @param   {UnityEngine.Vector3}               endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @param   {boolean}                           snapping    If TRUE the tween will smoothly snap all values to integers
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOMove: function(target, endValue, duration, snapping) {
                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To$12(function() {
                        return target.position;
                    }, Bridge.fn.cacheBind(target, target.MovePosition), endValue.$clone(), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$13(t, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModulePhysics.DOMove:static end.*/

                /*DG.Tweening.DOTweenModulePhysics.DOMoveX:static start.*/
                /**
                 * Tweens a Rigidbody's X position to the given value.
                 Also stores the rigidbody as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModulePhysics
                 * @memberof DG.Tweening.DOTweenModulePhysics
                 * @param   {UnityEngine.Rigidbody}             target      
                 * @param   {number}                            endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @param   {boolean}                           snapping    If TRUE the tween will smoothly snap all values to integers
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOMoveX: function(target, endValue, duration, snapping) {
                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To$12(function() {
                        return target.position;
                    }, Bridge.fn.cacheBind(target, target.MovePosition), new pc.Vec3(endValue, 0, 0), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$12(t, DG.Tweening.AxisConstraint.X, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModulePhysics.DOMoveX:static end.*/

                /*DG.Tweening.DOTweenModulePhysics.DOMoveY:static start.*/
                /**
                 * Tweens a Rigidbody's Y position to the given value.
                 Also stores the rigidbody as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModulePhysics
                 * @memberof DG.Tweening.DOTweenModulePhysics
                 * @param   {UnityEngine.Rigidbody}             target      
                 * @param   {number}                            endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @param   {boolean}                           snapping    If TRUE the tween will smoothly snap all values to integers
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOMoveY: function(target, endValue, duration, snapping) {
                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To$12(function() {
                        return target.position;
                    }, Bridge.fn.cacheBind(target, target.MovePosition), new pc.Vec3(0, endValue, 0), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$12(t, DG.Tweening.AxisConstraint.Y, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModulePhysics.DOMoveY:static end.*/

                /*DG.Tweening.DOTweenModulePhysics.DOMoveZ:static start.*/
                /**
                 * Tweens a Rigidbody's Z position to the given value.
                 Also stores the rigidbody as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModulePhysics
                 * @memberof DG.Tweening.DOTweenModulePhysics
                 * @param   {UnityEngine.Rigidbody}             target      
                 * @param   {number}                            endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @param   {boolean}                           snapping    If TRUE the tween will smoothly snap all values to integers
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOMoveZ: function(target, endValue, duration, snapping) {
                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To$12(function() {
                        return target.position;
                    }, Bridge.fn.cacheBind(target, target.MovePosition), new pc.Vec3(0, 0, endValue), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$12(t, DG.Tweening.AxisConstraint.Z, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModulePhysics.DOMoveZ:static end.*/

                /*DG.Tweening.DOTweenModulePhysics.DORotate:static start.*/
                /**
                 * Tweens a Rigidbody's rotation to the given value.
                 Also stores the rigidbody as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModulePhysics
                 * @memberof DG.Tweening.DOTweenModulePhysics
                 * @param   {UnityEngine.Rigidbody}             target      
                 * @param   {UnityEngine.Vector3}               endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @param   {DG.Tweening.RotateMode}            mode        Rotation mode
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DORotate: function(target, endValue, duration, mode) {
                    if (mode === void 0) { mode = 0; }
                    var t = DG.Tweening.DOTween.To$9(function() {
                        return target.rotation;
                    }, Bridge.fn.cacheBind(target, target.MoveRotation), endValue.$clone(), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Quaternion, UnityEngine.Vector3, DG.Tweening.Plugins.Options.QuaternionOptions), t, target);
                    t.plugOptions.rotateMode = mode;
                    return t;
                },
                /*DG.Tweening.DOTweenModulePhysics.DORotate:static end.*/

                /*DG.Tweening.DOTweenModulePhysics.DOLookAt:static start.*/
                /**
                 * Tweens a Rigidbody's rotation so that it will look towards the given position.
                 Also stores the rigidbody as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModulePhysics
                 * @memberof DG.Tweening.DOTweenModulePhysics
                 * @param   {UnityEngine.Rigidbody}             target            
                 * @param   {UnityEngine.Vector3}               towards           The position to look at
                 * @param   {number}                            duration          The duration of the tween
                 * @param   {DG.Tweening.AxisConstraint}        axisConstraint    Eventual axis constraint for the rotation
                 * @param   {?UnityEngine.Vector3}              up                The vector that defines in which direction up is (default: Vector3.up)
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOLookAt: function(target, towards, duration, axisConstraint, up) {
                    if (axisConstraint === void 0) { axisConstraint = 0; }
                    if (up === void 0) { up = null; }
                    var t = DG.Tweening.Core.Extensions.SetSpecialStartupMode(DG.Tweening.Core.TweenerCore$3(UnityEngine.Quaternion, UnityEngine.Vector3, DG.Tweening.Plugins.Options.QuaternionOptions), DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Quaternion, UnityEngine.Vector3, DG.Tweening.Plugins.Options.QuaternionOptions), DG.Tweening.DOTween.To$9(function() {
                        return target.rotation;
                    }, Bridge.fn.cacheBind(target, target.MoveRotation), towards.$clone(), duration), target), DG.Tweening.Core.Enums.SpecialStartupMode.SetLookAt);
                    t.plugOptions.axisConstraint = axisConstraint;
                    t.plugOptions.up = (pc.Vec3.equals(up, null)) ? pc.Vec3.UP.clone() : System.Nullable.getValue(up);
                    return t;
                },
                /*DG.Tweening.DOTweenModulePhysics.DOLookAt:static end.*/

                /*DG.Tweening.DOTweenModulePhysics.DOJump:static start.*/
                /**
                 * Tweens a Rigidbody's position to the given value, while also applying a jump effect along the Y axis.
                 Returns a Sequence instead of a Tweener.
                 Also stores the Rigidbody as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModulePhysics
                 * @memberof DG.Tweening.DOTweenModulePhysics
                 * @param   {UnityEngine.Rigidbody}    target       
                 * @param   {UnityEngine.Vector3}      endValue     The end value to reach
                 * @param   {number}                   jumpPower    Power of the jump (the max height of the jump is represented by this plus the final Y offset)
                 * @param   {number}                   numJumps     Total number of jumps
                 * @param   {number}                   duration     The duration of the tween
                 * @param   {boolean}                  snapping     If TRUE the tween will smoothly snap all values to integers
                 * @return  {DG.Tweening.Sequence}
                 */
                DOJump: function(target, endValue, jumpPower, numJumps, duration, snapping) {
                    if (snapping === void 0) { snapping = false; }
                    if (numJumps < 1) {
                        numJumps = 1;
                    }
                    var startPosY = 0;
                    var offsetY = -1;
                    var offsetYSet = false;
                    var s = DG.Tweening.DOTween.Sequence();
                    var yTween = DG.Tweening.TweenSettingsExtensions.OnStart(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetLoops$1(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetRelative(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$12(DG.Tweening.DOTween.To$12(function() {
                        return target.position;
                    }, Bridge.fn.cacheBind(target, target.MovePosition), new pc.Vec3(0, jumpPower, 0), duration / (Bridge.Int.mul(numJumps, 2))), DG.Tweening.AxisConstraint.Y, snapping), DG.Tweening.Ease.OutQuad)), Bridge.Int.mul(numJumps, 2), DG.Tweening.LoopType.Yoyo), function() {
                        startPosY = target.position.y;
                    });
                    DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Sequence, DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Sequence, DG.Tweening.TweenSettingsExtensions.Join(DG.Tweening.TweenSettingsExtensions.Join(DG.Tweening.TweenSettingsExtensions.Append(s, DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$12(DG.Tweening.DOTween.To$12(function() {
                        return target.position;
                    }, Bridge.fn.cacheBind(target, target.MovePosition), new pc.Vec3(endValue.x, 0, 0), duration), DG.Tweening.AxisConstraint.X, snapping), DG.Tweening.Ease.Linear)), DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$12(DG.Tweening.DOTween.To$12(function() {
                        return target.position;
                    }, Bridge.fn.cacheBind(target, target.MovePosition), new pc.Vec3(0, 0, endValue.z), duration), DG.Tweening.AxisConstraint.Z, snapping), DG.Tweening.Ease.Linear)), yTween), target), DG.Tweening.DOTween.defaultEaseType);
                    DG.Tweening.TweenSettingsExtensions.OnUpdate(DG.Tweening.Tween, yTween, function() {
                        if (!offsetYSet) {
                            offsetYSet = true;
                            offsetY = s.isRelative ? endValue.y : endValue.y - startPosY;
                        }
                        var pos = target.position.$clone();
                        pos.y += DG.Tweening.DOVirtual.EasedValue(0, offsetY, DG.Tweening.TweenExtensions.ElapsedPercentage(yTween), DG.Tweening.Ease.OutQuad);
                        target.MovePosition(pos);
                    });
                    return s;
                },
                /*DG.Tweening.DOTweenModulePhysics.DOJump:static end.*/

                /*DG.Tweening.DOTweenModulePhysics.DOPath:static start.*/
                /**
                 * Tweens a Rigidbody's position through the given path waypoints, using the chosen path algorithm.
                 Also stores the Rigidbody as the tween's target so it can be used for filtered operations.
                 <p>NOTE: to tween a rigidbody correctly it should be set to kinematic at least while being tweened.</p><p>BEWARE: doesn't work on Windows Phone store (waiting for Unity to fix their own bug).
                 If you plan to publish there you should use a regular transform.DOPath.</p>
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModulePhysics
                 * @memberof DG.Tweening.DOTweenModulePhysics
                 * @param   {UnityEngine.Rigidbody}             target        
                 * @param   {Array.<UnityEngine.Vector3>}       path          The waypoints to go through
                 * @param   {number}                            duration      The duration of the tween
                 * @param   {DG.Tweening.PathType}              pathType      The type of path: Linear (straight path), CatmullRom (curved CatmullRom path) or CubicBezier (curved with control points)
                 * @param   {DG.Tweening.PathMode}              pathMode      The path mode: 3D, side-scroller 2D, top-down 2D
                 * @param   {number}                            resolution    The resolution of the path (useless in case of Linear paths): higher resolutions make for more detailed curved paths but are more expensive.
                 Defaults to 10, but a value of 5 is usually enough if you don't have dramatic long curves between waypoints
                 * @param   {?UnityEngine.Color}                gizmoColor    The color of the path (shown when gizmos are active in the Play panel and the tween is running)
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOPath: function(target, path, duration, pathType, pathMode, resolution, gizmoColor) {
                    if (pathType === void 0) { pathType = 0; }
                    if (pathMode === void 0) { pathMode = 1; }
                    if (resolution === void 0) { resolution = 10; }
                    if (gizmoColor === void 0) { gizmoColor = null; }
                    if (resolution < 1) {
                        resolution = 1;
                    }
                    var t = DG.Tweening.TweenSettingsExtensions.SetUpdate$1(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3, DG.Tweening.Plugins.Core.PathCore.Path, DG.Tweening.Plugins.Options.PathOptions), DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3, DG.Tweening.Plugins.Core.PathCore.Path, DG.Tweening.Plugins.Options.PathOptions), DG.Tweening.DOTween.To(UnityEngine.Vector3, DG.Tweening.Plugins.Core.PathCore.Path, DG.Tweening.Plugins.Options.PathOptions, DG.Tweening.Plugins.PathPlugin.Get(), function() {
                        return target.position;
                    }, Bridge.fn.cacheBind(target, target.MovePosition), new DG.Tweening.Plugins.Core.PathCore.Path.$ctor1(pathType, path, resolution, System.Nullable.lift1("$clone", gizmoColor)), duration), target), DG.Tweening.UpdateType.Fixed);

                    t.plugOptions.isRigidbody = true;
                    t.plugOptions.mode = pathMode;
                    return t;
                },
                /*DG.Tweening.DOTweenModulePhysics.DOPath:static end.*/

                /*DG.Tweening.DOTweenModulePhysics.DOPath$1:static start.*/
                DOPath$1: function(target, path, duration, pathMode) {
                    if (pathMode === void 0) { pathMode = 1; }
                    var t = DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3, DG.Tweening.Plugins.Core.PathCore.Path, DG.Tweening.Plugins.Options.PathOptions), DG.Tweening.DOTween.To(UnityEngine.Vector3, DG.Tweening.Plugins.Core.PathCore.Path, DG.Tweening.Plugins.Options.PathOptions, DG.Tweening.Plugins.PathPlugin.Get(), function() {
                        return target.position;
                    }, Bridge.fn.cacheBind(target, target.MovePosition), path, duration), target);

                    t.plugOptions.isRigidbody = true;
                    t.plugOptions.mode = pathMode;
                    return t;
                },
                /*DG.Tweening.DOTweenModulePhysics.DOPath$1:static end.*/

                /*DG.Tweening.DOTweenModulePhysics.DOLocalPath:static start.*/
                /**
                 * Tweens a Rigidbody's localPosition through the given path waypoints, using the chosen path algorithm.
                 Also stores the Rigidbody as the tween's target so it can be used for filtered operations
                 <p>NOTE: to tween a rigidbody correctly it should be set to kinematic at least while being tweened.</p><p>BEWARE: doesn't work on Windows Phone store (waiting for Unity to fix their own bug).
                 If you plan to publish there you should use a regular transform.DOLocalPath.</p>
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModulePhysics
                 * @memberof DG.Tweening.DOTweenModulePhysics
                 * @param   {UnityEngine.Rigidbody}             target        
                 * @param   {Array.<UnityEngine.Vector3>}       path          The waypoint to go through
                 * @param   {number}                            duration      The duration of the tween
                 * @param   {DG.Tweening.PathType}              pathType      The type of path: Linear (straight path), CatmullRom (curved CatmullRom path) or CubicBezier (curved with control points)
                 * @param   {DG.Tweening.PathMode}              pathMode      The path mode: 3D, side-scroller 2D, top-down 2D
                 * @param   {number}                            resolution    The resolution of the path: higher resolutions make for more detailed curved paths but are more expensive.
                 Defaults to 10, but a value of 5 is usually enough if you don't have dramatic long curves between waypoints
                 * @param   {?UnityEngine.Color}                gizmoColor    The color of the path (shown when gizmos are active in the Play panel and the tween is running)
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOLocalPath: function(target, path, duration, pathType, pathMode, resolution, gizmoColor) {
                    if (pathType === void 0) { pathType = 0; }
                    if (pathMode === void 0) { pathMode = 1; }
                    if (resolution === void 0) { resolution = 10; }
                    if (gizmoColor === void 0) { gizmoColor = null; }
                    if (resolution < 1) {
                        resolution = 1;
                    }
                    var trans = target.transform;
                    var t = DG.Tweening.TweenSettingsExtensions.SetUpdate$1(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3, DG.Tweening.Plugins.Core.PathCore.Path, DG.Tweening.Plugins.Options.PathOptions), DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3, DG.Tweening.Plugins.Core.PathCore.Path, DG.Tweening.Plugins.Options.PathOptions), DG.Tweening.DOTween.To(UnityEngine.Vector3, DG.Tweening.Plugins.Core.PathCore.Path, DG.Tweening.Plugins.Options.PathOptions, DG.Tweening.Plugins.PathPlugin.Get(), function() {
                        return trans.localPosition;
                    }, function(x) {
                        target.MovePosition(UnityEngine.Component.op_Equality(trans.parent, null) ? x.$clone() : trans.parent.TransformPoint$1(x));
                    }, new DG.Tweening.Plugins.Core.PathCore.Path.$ctor1(pathType, path, resolution, System.Nullable.lift1("$clone", gizmoColor)), duration), target), DG.Tweening.UpdateType.Fixed);

                    t.plugOptions.isRigidbody = true;
                    t.plugOptions.mode = pathMode;
                    t.plugOptions.useLocalPosition = true;
                    return t;
                },
                /*DG.Tweening.DOTweenModulePhysics.DOLocalPath:static end.*/

                /*DG.Tweening.DOTweenModulePhysics.DOLocalPath$1:static start.*/
                DOLocalPath$1: function(target, path, duration, pathMode) {
                    if (pathMode === void 0) { pathMode = 1; }
                    var trans = target.transform;
                    var t = DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3, DG.Tweening.Plugins.Core.PathCore.Path, DG.Tweening.Plugins.Options.PathOptions), DG.Tweening.DOTween.To(UnityEngine.Vector3, DG.Tweening.Plugins.Core.PathCore.Path, DG.Tweening.Plugins.Options.PathOptions, DG.Tweening.Plugins.PathPlugin.Get(), function() {
                        return trans.localPosition;
                    }, function(x) {
                        target.MovePosition(UnityEngine.Component.op_Equality(trans.parent, null) ? x.$clone() : trans.parent.TransformPoint$1(x));
                    }, path, duration), target);

                    t.plugOptions.isRigidbody = true;
                    t.plugOptions.mode = pathMode;
                    t.plugOptions.useLocalPosition = true;
                    return t;
                },
                /*DG.Tweening.DOTweenModulePhysics.DOLocalPath$1:static end.*/


            }
        }
    });
    /*DG.Tweening.DOTweenModulePhysics end.*/

    /*DG.Tweening.DOTweenModulePhysics2D start.*/
    Bridge.define("DG.Tweening.DOTweenModulePhysics2D", {
        statics: {
            methods: {
                /*DG.Tweening.DOTweenModulePhysics2D.DOMove:static start.*/
                /**
                 * Tweens a Rigidbody2D's position to the given value.
                 Also stores the Rigidbody2D as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModulePhysics2D
                 * @memberof DG.Tweening.DOTweenModulePhysics2D
                 * @param   {UnityEngine.Rigidbody2D}           target      
                 * @param   {UnityEngine.Vector2}               endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @param   {boolean}                           snapping    If TRUE the tween will smoothly snap all values to integers
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOMove: function(target, endValue, duration, snapping) {
                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To$11(function() {
                        return target.position;
                    }, Bridge.fn.cacheBind(target, target.MovePosition), endValue.$clone(), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$9(t, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModulePhysics2D.DOMove:static end.*/

                /*DG.Tweening.DOTweenModulePhysics2D.DOMoveX:static start.*/
                /**
                 * Tweens a Rigidbody2D's X position to the given value.
                 Also stores the Rigidbody2D as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModulePhysics2D
                 * @memberof DG.Tweening.DOTweenModulePhysics2D
                 * @param   {UnityEngine.Rigidbody2D}           target      
                 * @param   {number}                            endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @param   {boolean}                           snapping    If TRUE the tween will smoothly snap all values to integers
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOMoveX: function(target, endValue, duration, snapping) {
                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To$11(function() {
                        return target.position;
                    }, Bridge.fn.cacheBind(target, target.MovePosition), new pc.Vec2(endValue, 0), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$8(t, DG.Tweening.AxisConstraint.X, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModulePhysics2D.DOMoveX:static end.*/

                /*DG.Tweening.DOTweenModulePhysics2D.DOMoveY:static start.*/
                /**
                 * Tweens a Rigidbody2D's Y position to the given value.
                 Also stores the Rigidbody2D as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModulePhysics2D
                 * @memberof DG.Tweening.DOTweenModulePhysics2D
                 * @param   {UnityEngine.Rigidbody2D}           target      
                 * @param   {number}                            endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @param   {boolean}                           snapping    If TRUE the tween will smoothly snap all values to integers
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOMoveY: function(target, endValue, duration, snapping) {
                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To$11(function() {
                        return target.position;
                    }, Bridge.fn.cacheBind(target, target.MovePosition), new pc.Vec2(0, endValue), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$8(t, DG.Tweening.AxisConstraint.Y, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModulePhysics2D.DOMoveY:static end.*/

                /*DG.Tweening.DOTweenModulePhysics2D.DORotate:static start.*/
                /**
                 * Tweens a Rigidbody2D's rotation to the given value.
                 Also stores the Rigidbody2D as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModulePhysics2D
                 * @memberof DG.Tweening.DOTweenModulePhysics2D
                 * @param   {UnityEngine.Rigidbody2D}           target      
                 * @param   {number}                            endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DORotate: function(target, endValue, duration) {
                    var t = DG.Tweening.DOTween.To$4(function() {
                        return target.rotation;
                    }, Bridge.fn.cacheBind(target, target.MoveRotation), endValue, duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(System.Single, System.Single, DG.Tweening.Plugins.Options.FloatOptions), t, target);
                    return t;
                },
                /*DG.Tweening.DOTweenModulePhysics2D.DORotate:static end.*/

                /*DG.Tweening.DOTweenModulePhysics2D.DOJump:static start.*/
                /**
                 * Tweens a Rigidbody2D's position to the given value, while also applying a jump effect along the Y axis.
                 Returns a Sequence instead of a Tweener.
                 Also stores the Rigidbody2D as the tween's target so it can be used for filtered operations.
                 <p>IMPORTANT: a rigidbody2D can't be animated in a jump arc using MovePosition, so the tween will directly set the position</p>
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModulePhysics2D
                 * @memberof DG.Tweening.DOTweenModulePhysics2D
                 * @param   {UnityEngine.Rigidbody2D}    target       
                 * @param   {UnityEngine.Vector2}        endValue     The end value to reach
                 * @param   {number}                     jumpPower    Power of the jump (the max height of the jump is represented by this plus the final Y offset)
                 * @param   {number}                     numJumps     Total number of jumps
                 * @param   {number}                     duration     The duration of the tween
                 * @param   {boolean}                    snapping     If TRUE the tween will smoothly snap all values to integers
                 * @return  {DG.Tweening.Sequence}
                 */
                DOJump: function(target, endValue, jumpPower, numJumps, duration, snapping) {
                    if (snapping === void 0) { snapping = false; }
                    if (numJumps < 1) {
                        numJumps = 1;
                    }
                    var startPosY = 0;
                    var offsetY = -1;
                    var offsetYSet = false;
                    var s = DG.Tweening.DOTween.Sequence();
                    var yTween = DG.Tweening.TweenSettingsExtensions.OnStart(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetLoops$1(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetRelative(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$8(DG.Tweening.DOTween.To$11(function() {
                        return target.position;
                    }, function(x) {
                        target.position = x.$clone();
                    }, new pc.Vec2(0, jumpPower), duration / (Bridge.Int.mul(numJumps, 2))), DG.Tweening.AxisConstraint.Y, snapping), DG.Tweening.Ease.OutQuad)), Bridge.Int.mul(numJumps, 2), DG.Tweening.LoopType.Yoyo), function() {
                        startPosY = target.position.y;
                    });
                    DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Sequence, DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Sequence, DG.Tweening.TweenSettingsExtensions.Join(DG.Tweening.TweenSettingsExtensions.Append(s, DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$8(DG.Tweening.DOTween.To$11(function() {
                        return target.position;
                    }, function(x) {
                        target.position = x.$clone();
                    }, new pc.Vec2(endValue.x, 0), duration), DG.Tweening.AxisConstraint.X, snapping), DG.Tweening.Ease.Linear)), yTween), target), DG.Tweening.DOTween.defaultEaseType);
                    DG.Tweening.TweenSettingsExtensions.OnUpdate(DG.Tweening.Tween, yTween, function() {
                        if (!offsetYSet) {
                            offsetYSet = true;
                            offsetY = s.isRelative ? endValue.y : endValue.y - startPosY;
                        }
                        var pos = UnityEngine.Vector3.FromVector2(target.position.$clone());
                        pos.y += DG.Tweening.DOVirtual.EasedValue(0, offsetY, DG.Tweening.TweenExtensions.ElapsedPercentage(yTween), DG.Tweening.Ease.OutQuad);
                        target.MovePosition$1(pos.$clone());
                    });
                    return s;
                },
                /*DG.Tweening.DOTweenModulePhysics2D.DOJump:static end.*/

                /*DG.Tweening.DOTweenModulePhysics2D.DOPath:static start.*/
                /**
                 * Tweens a Rigidbody2D's position through the given path waypoints, using the chosen path algorithm.
                 Also stores the Rigidbody2D as the tween's target so it can be used for filtered operations.
                 <p>NOTE: to tween a Rigidbody2D correctly it should be set to kinematic at least while being tweened.</p><p>BEWARE: doesn't work on Windows Phone store (waiting for Unity to fix their own bug).
                 If you plan to publish there you should use a regular transform.DOPath.</p>
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModulePhysics2D
                 * @memberof DG.Tweening.DOTweenModulePhysics2D
                 * @param   {UnityEngine.Rigidbody2D}           target        
                 * @param   {Array.<UnityEngine.Vector2>}       path          The waypoints to go through
                 * @param   {number}                            duration      The duration of the tween
                 * @param   {DG.Tweening.PathType}              pathType      The type of path: Linear (straight path), CatmullRom (curved CatmullRom path) or CubicBezier (curved with control points)
                 * @param   {DG.Tweening.PathMode}              pathMode      The path mode: 3D, side-scroller 2D, top-down 2D
                 * @param   {number}                            resolution    The resolution of the path (useless in case of Linear paths): higher resolutions make for more detailed curved paths but are more expensive.
                 Defaults to 10, but a value of 5 is usually enough if you don't have dramatic long curves between waypoints
                 * @param   {?UnityEngine.Color}                gizmoColor    The color of the path (shown when gizmos are active in the Play panel and the tween is running)
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOPath: function(target, path, duration, pathType, pathMode, resolution, gizmoColor) {
                    if (pathType === void 0) { pathType = 0; }
                    if (pathMode === void 0) { pathMode = 1; }
                    if (resolution === void 0) { resolution = 10; }
                    if (gizmoColor === void 0) { gizmoColor = null; }
                    if (resolution < 1) {
                        resolution = 1;
                    }
                    var len = path.length;
                    var path3D = System.Array.init(len, function() {
                        return new UnityEngine.Vector3();
                    }, UnityEngine.Vector3);
                    for (var i = 0; i < len; i = (i + 1) | 0) {
                        path3D[i] = UnityEngine.Vector3.FromVector2(path[i].$clone());
                    }
                    var t = DG.Tweening.TweenSettingsExtensions.SetUpdate$1(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3, DG.Tweening.Plugins.Core.PathCore.Path, DG.Tweening.Plugins.Options.PathOptions), DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3, DG.Tweening.Plugins.Core.PathCore.Path, DG.Tweening.Plugins.Options.PathOptions), DG.Tweening.DOTween.To(UnityEngine.Vector3, DG.Tweening.Plugins.Core.PathCore.Path, DG.Tweening.Plugins.Options.PathOptions, DG.Tweening.Plugins.PathPlugin.Get(), function() {
                        return UnityEngine.Vector3.FromVector2(target.position);
                    }, function(x) {
                        target.MovePosition$1(x.$clone());
                    }, new DG.Tweening.Plugins.Core.PathCore.Path.$ctor1(pathType, path3D, resolution, System.Nullable.lift1("$clone", gizmoColor)), duration), target), DG.Tweening.UpdateType.Fixed);

                    t.plugOptions.isRigidbody = true;
                    t.plugOptions.mode = pathMode;
                    return t;
                },
                /*DG.Tweening.DOTweenModulePhysics2D.DOPath:static end.*/

                /*DG.Tweening.DOTweenModulePhysics2D.DOLocalPath:static start.*/
                /**
                 * Tweens a Rigidbody2D's localPosition through the given path waypoints, using the chosen path algorithm.
                 Also stores the Rigidbody2D as the tween's target so it can be used for filtered operations
                 <p>NOTE: to tween a Rigidbody2D correctly it should be set to kinematic at least while being tweened.</p><p>BEWARE: doesn't work on Windows Phone store (waiting for Unity to fix their own bug).
                 If you plan to publish there you should use a regular transform.DOLocalPath.</p>
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModulePhysics2D
                 * @memberof DG.Tweening.DOTweenModulePhysics2D
                 * @param   {UnityEngine.Rigidbody2D}           target        
                 * @param   {Array.<UnityEngine.Vector2>}       path          The waypoint to go through
                 * @param   {number}                            duration      The duration of the tween
                 * @param   {DG.Tweening.PathType}              pathType      The type of path: Linear (straight path), CatmullRom (curved CatmullRom path) or CubicBezier (curved with control points)
                 * @param   {DG.Tweening.PathMode}              pathMode      The path mode: 3D, side-scroller 2D, top-down 2D
                 * @param   {number}                            resolution    The resolution of the path: higher resolutions make for more detailed curved paths but are more expensive.
                 Defaults to 10, but a value of 5 is usually enough if you don't have dramatic long curves between waypoints
                 * @param   {?UnityEngine.Color}                gizmoColor    The color of the path (shown when gizmos are active in the Play panel and the tween is running)
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOLocalPath: function(target, path, duration, pathType, pathMode, resolution, gizmoColor) {
                    if (pathType === void 0) { pathType = 0; }
                    if (pathMode === void 0) { pathMode = 1; }
                    if (resolution === void 0) { resolution = 10; }
                    if (gizmoColor === void 0) { gizmoColor = null; }
                    if (resolution < 1) {
                        resolution = 1;
                    }
                    var len = path.length;
                    var path3D = System.Array.init(len, function() {
                        return new UnityEngine.Vector3();
                    }, UnityEngine.Vector3);
                    for (var i = 0; i < len; i = (i + 1) | 0) {
                        path3D[i] = UnityEngine.Vector3.FromVector2(path[i].$clone());
                    }
                    var trans = target.transform;
                    var t = DG.Tweening.TweenSettingsExtensions.SetUpdate$1(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3, DG.Tweening.Plugins.Core.PathCore.Path, DG.Tweening.Plugins.Options.PathOptions), DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3, DG.Tweening.Plugins.Core.PathCore.Path, DG.Tweening.Plugins.Options.PathOptions), DG.Tweening.DOTween.To(UnityEngine.Vector3, DG.Tweening.Plugins.Core.PathCore.Path, DG.Tweening.Plugins.Options.PathOptions, DG.Tweening.Plugins.PathPlugin.Get(), function() {
                        return trans.localPosition;
                    }, function(x) {
                        target.MovePosition$1(UnityEngine.Component.op_Equality(trans.parent, null) ? x.$clone() : trans.parent.TransformPoint$1(x));
                    }, new DG.Tweening.Plugins.Core.PathCore.Path.$ctor1(pathType, path3D, resolution, System.Nullable.lift1("$clone", gizmoColor)), duration), target), DG.Tweening.UpdateType.Fixed);

                    t.plugOptions.isRigidbody = true;
                    t.plugOptions.mode = pathMode;
                    t.plugOptions.useLocalPosition = true;
                    return t;
                },
                /*DG.Tweening.DOTweenModulePhysics2D.DOLocalPath:static end.*/


            }
        }
    });
    /*DG.Tweening.DOTweenModulePhysics2D end.*/

    /*DG.Tweening.DOTweenModuleSprite start.*/
    Bridge.define("DG.Tweening.DOTweenModuleSprite", {
        statics: {
            methods: {
                /*DG.Tweening.DOTweenModuleSprite.DOColor:static start.*/
                /**
                 * Tweens a SpriteRenderer's color to the given value.
                 Also stores the spriteRenderer as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleSprite
                 * @memberof DG.Tweening.DOTweenModuleSprite
                 * @param   {UnityEngine.SpriteRenderer}        target      
                 * @param   {UnityEngine.Color}                 endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOColor: function(target, endValue, duration) {
                    var t = DG.Tweening.DOTween.To$8(function() {
                        return target.color;
                    }, function(x) {
                        target.color = x.$clone();
                    }, endValue.$clone(), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Color, UnityEngine.Color, DG.Tweening.Plugins.Options.ColorOptions), t, target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleSprite.DOColor:static end.*/

                /*DG.Tweening.DOTweenModuleSprite.DOFade:static start.*/
                /**
                 * Tweens a Material's alpha color to the given value.
                 Also stores the spriteRenderer as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleSprite
                 * @memberof DG.Tweening.DOTweenModuleSprite
                 * @param   {UnityEngine.SpriteRenderer}        target      
                 * @param   {number}                            endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOFade: function(target, endValue, duration) {
                    var t = DG.Tweening.DOTween.ToAlpha(function() {
                        return target.color;
                    }, function(x) {
                        target.color = x.$clone();
                    }, endValue, duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Color, UnityEngine.Color, DG.Tweening.Plugins.Options.ColorOptions), t, target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleSprite.DOFade:static end.*/

                /*DG.Tweening.DOTweenModuleSprite.DOGradientColor:static start.*/
                /**
                 * Tweens a SpriteRenderer's color using the given gradient
                 (NOTE 1: only uses the colors of the gradient, not the alphas - NOTE 2: creates a Sequence, not a Tweener).
                 Also stores the image as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleSprite
                 * @memberof DG.Tweening.DOTweenModuleSprite
                 * @param   {UnityEngine.SpriteRenderer}    target      
                 * @param   {UnityEngine.Gradient}          gradient    The gradient to use
                 * @param   {number}                        duration    The duration of the tween
                 * @return  {DG.Tweening.Sequence}
                 */
                DOGradientColor: function(target, gradient, duration) {
                    var s = DG.Tweening.DOTween.Sequence();
                    var colors = gradient.colorKeys;
                    var len = colors.length;
                    for (var i = 0; i < len; i = (i + 1) | 0) {
                        var c = colors[i];
                        if (i === 0 && c.time <= 0) {
                            target.color = c.color.$clone();
                            continue;
                        }
                        var colorDuration = i === ((len - 1) | 0) ? duration - DG.Tweening.TweenExtensions.Duration(s, false) : duration * (i === 0 ? c.time : c.time - colors[((i - 1) | 0)].time);
                        DG.Tweening.TweenSettingsExtensions.Append(s, DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Core.TweenerCore$3(UnityEngine.Color, UnityEngine.Color, DG.Tweening.Plugins.Options.ColorOptions), DG.Tweening.DOTweenModuleSprite.DOColor(target, c.color.$clone(), colorDuration), DG.Tweening.Ease.Linear));
                    }
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Sequence, s, target);
                    return s;
                },
                /*DG.Tweening.DOTweenModuleSprite.DOGradientColor:static end.*/

                /*DG.Tweening.DOTweenModuleSprite.DOBlendableColor:static start.*/
                /**
                 * Tweens a SpriteRenderer's color to the given value,
                 in a way that allows other DOBlendableColor tweens to work together on the same target,
                 instead than fight each other as multiple DOColor would do.
                 Also stores the SpriteRenderer as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleSprite
                 * @memberof DG.Tweening.DOTweenModuleSprite
                 * @param   {UnityEngine.SpriteRenderer}    target      
                 * @param   {UnityEngine.Color}             endValue    The value to tween to
                 * @param   {number}                        duration    The duration of the tween
                 * @return  {DG.Tweening.Tweener}
                 */
                DOBlendableColor: function(target, endValue, duration) {
                    var $t;
                    endValue = ($t = target.color, new pc.Color(endValue.r - $t.r, endValue.g - $t.g, endValue.b - $t.b, endValue.a - $t.a));
                    var to = new pc.Color(0, 0, 0, 0);
                    return DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Color, UnityEngine.Color, DG.Tweening.Plugins.Options.ColorOptions), DG.Tweening.Core.Extensions.Blendable(UnityEngine.Color, UnityEngine.Color, DG.Tweening.Plugins.Options.ColorOptions, DG.Tweening.DOTween.To$8(function() {
                        return to;
                    }, function(x) {
                        var $t1;
                        var diff = new pc.Color(x.r - to.r, x.g - to.g, x.b - to.b, x.a - to.a);
                        to = x.$clone();
                        target.color = ($t1 = target.color.$clone(), new pc.Color($t1.r + diff.$clone().r, $t1.g + diff.$clone().g, $t1.b + diff.$clone().b, $t1.a + diff.$clone().a));
                    }, endValue.$clone(), duration)), target);
                },
                /*DG.Tweening.DOTweenModuleSprite.DOBlendableColor:static end.*/


            }
        }
    });
    /*DG.Tweening.DOTweenModuleSprite end.*/

    /*DG.Tweening.DOTweenModuleUnityVersion start.*/
    /** @namespace DG.Tweening */

    /**
     * Shortcuts/functions that are not strictly related to specific Modules
     but are available only on some Unity versions
     *
     * @static
     * @abstract
     * @public
     * @class DG.Tweening.DOTweenModuleUnityVersion
     */
    Bridge.define("DG.Tweening.DOTweenModuleUnityVersion", {
        statics: {
            methods: {
                /*DG.Tweening.DOTweenModuleUnityVersion.DOGradientColor:static start.*/
                /**
                 * Tweens a Material's color using the given gradient
                 (NOTE 1: only uses the colors of the gradient, not the alphas - NOTE 2: creates a Sequence, not a Tweener).
                 Also stores the image as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUnityVersion
                 * @memberof DG.Tweening.DOTweenModuleUnityVersion
                 * @param   {UnityEngine.Material}    target      
                 * @param   {UnityEngine.Gradient}    gradient    The gradient to use
                 * @param   {number}                  duration    The duration of the tween
                 * @return  {DG.Tweening.Sequence}
                 */
                DOGradientColor: function(target, gradient, duration) {
                    var s = DG.Tweening.DOTween.Sequence();
                    var colors = gradient.colorKeys;
                    var len = colors.length;
                    for (var i = 0; i < len; i = (i + 1) | 0) {
                        var c = colors[i];
                        if (i === 0 && c.time <= 0) {
                            target.color = c.color.$clone();
                            continue;
                        }
                        var colorDuration = i === ((len - 1) | 0) ? duration - DG.Tweening.TweenExtensions.Duration(s, false) : duration * (i === 0 ? c.time : c.time - colors[((i - 1) | 0)].time);
                        DG.Tweening.TweenSettingsExtensions.Append(s, DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Core.TweenerCore$3(UnityEngine.Color, UnityEngine.Color, DG.Tweening.Plugins.Options.ColorOptions), DG.Tweening.ShortcutExtensions.DOColor$3(target, c.color.$clone(), colorDuration), DG.Tweening.Ease.Linear));
                    }
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Sequence, s, target);
                    return s;
                },
                /*DG.Tweening.DOTweenModuleUnityVersion.DOGradientColor:static end.*/

                /*DG.Tweening.DOTweenModuleUnityVersion.DOGradientColor$1:static start.*/
                /**
                 * Tweens a Material's named color property using the given gradient
                 (NOTE 1: only uses the colors of the gradient, not the alphas - NOTE 2: creates a Sequence, not a Tweener).
                 Also stores the image as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUnityVersion
                 * @memberof DG.Tweening.DOTweenModuleUnityVersion
                 * @param   {UnityEngine.Material}    target      
                 * @param   {UnityEngine.Gradient}    gradient    The gradient to use
                 * @param   {string}                  property    The name of the material property to tween (like _Tint or _SpecColor)
                 * @param   {number}                  duration    The duration of the tween
                 * @return  {DG.Tweening.Sequence}
                 */
                DOGradientColor$1: function(target, gradient, property, duration) {
                    var s = DG.Tweening.DOTween.Sequence();
                    var colors = gradient.colorKeys;
                    var len = colors.length;
                    for (var i = 0; i < len; i = (i + 1) | 0) {
                        var c = colors[i];
                        if (i === 0 && c.time <= 0) {
                            target.SetColor$1(property, c.color.$clone());
                            continue;
                        }
                        var colorDuration = i === ((len - 1) | 0) ? duration - DG.Tweening.TweenExtensions.Duration(s, false) : duration * (i === 0 ? c.time : c.time - colors[((i - 1) | 0)].time);
                        DG.Tweening.TweenSettingsExtensions.Append(s, DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Core.TweenerCore$3(UnityEngine.Color, UnityEngine.Color, DG.Tweening.Plugins.Options.ColorOptions), DG.Tweening.ShortcutExtensions.DOColor$4(target, c.color.$clone(), property, colorDuration), DG.Tweening.Ease.Linear));
                    }
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Sequence, s, target);
                    return s;
                },
                /*DG.Tweening.DOTweenModuleUnityVersion.DOGradientColor$1:static end.*/

                /*DG.Tweening.DOTweenModuleUnityVersion.WaitForCompletion:static start.*/
                /**
                 * Returns a {@link } that waits until the tween is killed or complete.
                 It can be used inside a coroutine as a yield.
                 <p>Example usage:</p><pre><code>yield return myTween.WaitForCompletion(true);</code></pre>
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUnityVersion
                 * @memberof DG.Tweening.DOTweenModuleUnityVersion
                 * @param   {DG.Tweening.Tween}                     t                               
                 * @param   {boolean}                               returnCustomYieldInstruction
                 * @return  {UnityEngine.CustomYieldInstruction}
                 */
                WaitForCompletion: function(t, returnCustomYieldInstruction) {
                    if (!t.active) {
                        if (DG.Tweening.Core.Debugger.logPriority > 0) {
                            DG.Tweening.Core.Debugger.LogInvalidTween(t);
                        }
                        return null;
                    }
                    return new DG.Tweening.DOTweenCYInstruction.WaitForCompletion(t);
                },
                /*DG.Tweening.DOTweenModuleUnityVersion.WaitForCompletion:static end.*/

                /*DG.Tweening.DOTweenModuleUnityVersion.WaitForRewind:static start.*/
                /**
                 * Returns a {@link } that waits until the tween is killed or rewinded.
                 It can be used inside a coroutine as a yield.
                 <p>Example usage:</p><pre><code>yield return myTween.WaitForRewind();</code></pre>
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUnityVersion
                 * @memberof DG.Tweening.DOTweenModuleUnityVersion
                 * @param   {DG.Tweening.Tween}                     t                               
                 * @param   {boolean}                               returnCustomYieldInstruction
                 * @return  {UnityEngine.CustomYieldInstruction}
                 */
                WaitForRewind: function(t, returnCustomYieldInstruction) {
                    if (!t.active) {
                        if (DG.Tweening.Core.Debugger.logPriority > 0) {
                            DG.Tweening.Core.Debugger.LogInvalidTween(t);
                        }
                        return null;
                    }
                    return new DG.Tweening.DOTweenCYInstruction.WaitForRewind(t);
                },
                /*DG.Tweening.DOTweenModuleUnityVersion.WaitForRewind:static end.*/

                /*DG.Tweening.DOTweenModuleUnityVersion.WaitForKill:static start.*/
                /**
                 * Returns a {@link } that waits until the tween is killed.
                 It can be used inside a coroutine as a yield.
                 <p>Example usage:</p><pre><code>yield return myTween.WaitForKill();</code></pre>
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUnityVersion
                 * @memberof DG.Tweening.DOTweenModuleUnityVersion
                 * @param   {DG.Tweening.Tween}                     t                               
                 * @param   {boolean}                               returnCustomYieldInstruction
                 * @return  {UnityEngine.CustomYieldInstruction}
                 */
                WaitForKill: function(t, returnCustomYieldInstruction) {
                    if (!t.active) {
                        if (DG.Tweening.Core.Debugger.logPriority > 0) {
                            DG.Tweening.Core.Debugger.LogInvalidTween(t);
                        }
                        return null;
                    }
                    return new DG.Tweening.DOTweenCYInstruction.WaitForKill(t);
                },
                /*DG.Tweening.DOTweenModuleUnityVersion.WaitForKill:static end.*/

                /*DG.Tweening.DOTweenModuleUnityVersion.WaitForElapsedLoops:static start.*/
                /**
                 * Returns a {@link } that waits until the tween is killed or has gone through the given amount of loops.
                 It can be used inside a coroutine as a yield.
                 <p>Example usage:</p><pre><code>yield return myTween.WaitForElapsedLoops(2);</code></pre>
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUnityVersion
                 * @memberof DG.Tweening.DOTweenModuleUnityVersion
                 * @param   {DG.Tweening.Tween}                     t                               
                 * @param   {number}                                elapsedLoops                    Elapsed loops to wait for
                 * @param   {boolean}                               returnCustomYieldInstruction
                 * @return  {UnityEngine.CustomYieldInstruction}
                 */
                WaitForElapsedLoops: function(t, elapsedLoops, returnCustomYieldInstruction) {
                    if (!t.active) {
                        if (DG.Tweening.Core.Debugger.logPriority > 0) {
                            DG.Tweening.Core.Debugger.LogInvalidTween(t);
                        }
                        return null;
                    }
                    return new DG.Tweening.DOTweenCYInstruction.WaitForElapsedLoops(t, elapsedLoops);
                },
                /*DG.Tweening.DOTweenModuleUnityVersion.WaitForElapsedLoops:static end.*/

                /*DG.Tweening.DOTweenModuleUnityVersion.WaitForPosition:static start.*/
                /**
                 * Returns a {@link } that waits until the tween is killed
                 or has reached the given time position (loops included, delays excluded).
                 It can be used inside a coroutine as a yield.
                 <p>Example usage:</p><pre><code>yield return myTween.WaitForPosition(2.5f);</code></pre>
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUnityVersion
                 * @memberof DG.Tweening.DOTweenModuleUnityVersion
                 * @param   {DG.Tweening.Tween}                     t                               
                 * @param   {number}                                position                        Position (loops included, delays excluded) to wait for
                 * @param   {boolean}                               returnCustomYieldInstruction
                 * @return  {UnityEngine.CustomYieldInstruction}
                 */
                WaitForPosition: function(t, position, returnCustomYieldInstruction) {
                    if (!t.active) {
                        if (DG.Tweening.Core.Debugger.logPriority > 0) {
                            DG.Tweening.Core.Debugger.LogInvalidTween(t);
                        }
                        return null;
                    }
                    return new DG.Tweening.DOTweenCYInstruction.WaitForPosition(t, position);
                },
                /*DG.Tweening.DOTweenModuleUnityVersion.WaitForPosition:static end.*/

                /*DG.Tweening.DOTweenModuleUnityVersion.WaitForStart:static start.*/
                /**
                 * Returns a {@link } that waits until the tween is killed or started
                 (meaning when the tween is set in a playing state the first time, after any eventual delay).
                 It can be used inside a coroutine as a yield.
                 <p>Example usage:</p><pre><code>yield return myTween.WaitForStart();</code></pre>
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUnityVersion
                 * @memberof DG.Tweening.DOTweenModuleUnityVersion
                 * @param   {DG.Tweening.Tween}                     t                               
                 * @param   {boolean}                               returnCustomYieldInstruction
                 * @return  {UnityEngine.CustomYieldInstruction}
                 */
                WaitForStart: function(t, returnCustomYieldInstruction) {
                    if (!t.active) {
                        if (DG.Tweening.Core.Debugger.logPriority > 0) {
                            DG.Tweening.Core.Debugger.LogInvalidTween(t);
                        }
                        return null;
                    }
                    return new DG.Tweening.DOTweenCYInstruction.WaitForStart(t);
                },
                /*DG.Tweening.DOTweenModuleUnityVersion.WaitForStart:static end.*/


            }
        }
    });
    /*DG.Tweening.DOTweenModuleUnityVersion end.*/

    /*DG.Tweening.DOTweenModuleUtils start.*/
    /**
     * Utility functions that deal with available Modules.
     Modules defines:
     - DOTAUDIO
     - DOTPHYSICS
     - DOTPHYSICS2D
     - DOTSPRITE
     - DOTUI
     Extra defines set and used for implementation of external assets:
     - DOTWEEN_TMP ► TextMesh Pro
     - DOTWEEN_TK2D ► 2D Toolkit
     *
     * @static
     * @abstract
     * @public
     * @class DG.Tweening.DOTweenModuleUtils
     */
    Bridge.define("DG.Tweening.DOTweenModuleUtils", {
        statics: {
            fields: {
                _initialized: false
            },
            methods: {
                /*DG.Tweening.DOTweenModuleUtils.Init:static start.*/
                /**
                 * Called via Reflection by DOTweenComponent on Awake
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUtils
                 * @memberof DG.Tweening.DOTweenModuleUtils
                 * @return  {void}
                 */
                Init: function() {
                    if (DG.Tweening.DOTweenModuleUtils._initialized) {
                        return;
                    }

                    DG.Tweening.DOTweenModuleUtils._initialized = true;
                    DG.Tweening.Core.DOTweenExternalCommand.addSetOrientationOnPath(DG.Tweening.DOTweenModuleUtils.Physics.SetOrientationOnPath);

                },
                /*DG.Tweening.DOTweenModuleUtils.Init:static end.*/


            }
        }
    });
    /*DG.Tweening.DOTweenModuleUtils end.*/

    /*DG.Tweening.DOTweenModuleUtils+Physics start.*/
    Bridge.define("DG.Tweening.DOTweenModuleUtils.Physics", {
        $kind: "nested class",
        statics: {
            methods: {
                /*DG.Tweening.DOTweenModuleUtils+Physics.SetOrientationOnPath:static start.*/
                SetOrientationOnPath: function(options, t, newRot, trans) {
                    if (options.isRigidbody) {
                        Bridge.cast(t.target, UnityEngine.Rigidbody).rotation = newRot.$clone();
                    } else {
                        trans.rotation = newRot.$clone();
                    }
                },
                /*DG.Tweening.DOTweenModuleUtils+Physics.SetOrientationOnPath:static end.*/

                /*DG.Tweening.DOTweenModuleUtils+Physics.HasRigidbody2D:static start.*/
                HasRigidbody2D: function(target) {
                    return UnityEngine.Component.op_Inequality(target.GetComponent(UnityEngine.Rigidbody2D), null);
                },
                /*DG.Tweening.DOTweenModuleUtils+Physics.HasRigidbody2D:static end.*/

                /*DG.Tweening.DOTweenModuleUtils+Physics.HasRigidbody:static start.*/
                HasRigidbody: function(target) {
                    return UnityEngine.Component.op_Inequality(target.GetComponent(UnityEngine.Rigidbody), null);
                },
                /*DG.Tweening.DOTweenModuleUtils+Physics.HasRigidbody:static end.*/

                /*DG.Tweening.DOTweenModuleUtils+Physics.CreateDOTweenPathTween:static start.*/
                CreateDOTweenPathTween: function(target, tweenRigidbody, isLocal, path, duration, pathMode) {
                    var t;
                    var rBody = tweenRigidbody ? target.GetComponent(UnityEngine.Rigidbody) : null;
                    if (tweenRigidbody && UnityEngine.Component.op_Inequality(rBody, null)) {
                        t = isLocal ? DG.Tweening.DOTweenModulePhysics.DOLocalPath$1(rBody, path, duration, pathMode) : DG.Tweening.DOTweenModulePhysics.DOPath$1(rBody, path, duration, pathMode);
                    } else {
                        t = isLocal ? DG.Tweening.ShortcutExtensions.DOLocalPath(target.transform, path, duration, pathMode) : DG.Tweening.ShortcutExtensions.DOPath(target.transform, path, duration, pathMode);
                    }
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUtils+Physics.CreateDOTweenPathTween:static end.*/


            }
        }
    });
    /*DG.Tweening.DOTweenModuleUtils+Physics end.*/

    /*Facebook.Unity.AccessToken start.*/
    Bridge.define("Facebook.Unity.AccessToken", {
        statics: {
            props: {
                CurrentAccessToken: {
                    get: function() {
                        return null;
                    }
                }
            }
        },
        props: {
            TokenString: {
                get: function() {
                    return null;
                }
            },
            ExpirationTime: {
                get: function() {
                    return Bridge.getDefaultValue(System.DateTime);
                }
            },
            Permissions: {
                get: function() {
                    return null;
                }
            },
            UserId: {
                get: function() {
                    return null;
                }
            },
            LastRefresh: {
                get: function() {
                    return null;
                }
            },
            GraphDomain: {
                get: function() {
                    return null;
                }
            }
        },
        methods: {
            /*Facebook.Unity.AccessToken.toString start.*/
            toString: function() {
                return null;
            },
            /*Facebook.Unity.AccessToken.toString end.*/

            /*Facebook.Unity.AccessToken.ToJson start.*/
            ToJson: function() {
                return null;
            },
            /*Facebook.Unity.AccessToken.ToJson end.*/


        },
        overloads: {
            "ToString()": "toString"
        }
    });
    /*Facebook.Unity.AccessToken end.*/

    /*Facebook.Unity.IResult start.*/
    Bridge.define("Facebook.Unity.IResult", {
        $kind: "interface"
    });
    /*Facebook.Unity.IResult end.*/

    /*Facebook.Unity.Mobile.Android.IAndroidWrapper start.*/
    Bridge.define("Facebook.Unity.Mobile.Android.IAndroidWrapper", {
        $kind: "interface"
    });
    /*Facebook.Unity.Mobile.Android.IAndroidWrapper end.*/

    /*Facebook.Unity.AppEventName start.*/
    Bridge.define("Facebook.Unity.AppEventName", {
        statics: {
            fields: {
                AchievedLevel: null,
                ActivatedApp: null,
                AddedPaymentInfo: null,
                AddedToCart: null,
                AddedToWishlist: null,
                CompletedRegistration: null,
                CompletedTutorial: null,
                InitiatedCheckout: null,
                Purchased: null,
                Rated: null,
                Searched: null,
                SpentCredits: null,
                UnlockedAchievement: null,
                ViewedContent: null
            },
            ctors: {
                init: function() {
                    this.AchievedLevel = "";
                    this.ActivatedApp = "";
                    this.AddedPaymentInfo = "";
                    this.AddedToCart = "";
                    this.AddedToWishlist = "";
                    this.CompletedRegistration = "";
                    this.CompletedTutorial = "";
                    this.InitiatedCheckout = "";
                    this.Purchased = "";
                    this.Rated = "";
                    this.Searched = "";
                    this.SpentCredits = "";
                    this.UnlockedAchievement = "";
                    this.ViewedContent = "";
                }
            }
        }
    });
    /*Facebook.Unity.AppEventName end.*/

    /*Facebook.Unity.AppEventParameterName start.*/
    Bridge.define("Facebook.Unity.AppEventParameterName", {
        statics: {
            fields: {
                ContentID: null,
                ContentType: null,
                Currency: null,
                Description: null,
                Level: null,
                MaxRatingValue: null,
                NumItems: null,
                PaymentInfoAvailable: null,
                RegistrationMethod: null,
                SearchString: null,
                Success: null
            },
            ctors: {
                init: function() {
                    this.ContentID = "";
                    this.ContentType = "";
                    this.Currency = "";
                    this.Description = "";
                    this.Level = "";
                    this.MaxRatingValue = "";
                    this.NumItems = "";
                    this.PaymentInfoAvailable = "";
                    this.RegistrationMethod = "";
                    this.SearchString = "";
                    this.Success = "";
                }
            }
        }
    });
    /*Facebook.Unity.AppEventParameterName end.*/

    /*Facebook.Unity.AsyncRequestString start.*/
    Bridge.define("Facebook.Unity.AsyncRequestString", {
        inherits: [UnityEngine.MonoBehaviour],
        statics: {
            methods: {
                /*Facebook.Unity.AsyncRequestString.Post:static start.*/
                Post: function(url, formData, callback) {},
                /*Facebook.Unity.AsyncRequestString.Post:static end.*/

                /*Facebook.Unity.AsyncRequestString.Get:static start.*/
                Get: function(url, formData, callback) {},
                /*Facebook.Unity.AsyncRequestString.Get:static end.*/

                /*Facebook.Unity.AsyncRequestString.Request$1:static start.*/
                Request$1: function(url, method, query, callback) {},
                /*Facebook.Unity.AsyncRequestString.Request$1:static end.*/

                /*Facebook.Unity.AsyncRequestString.Request:static start.*/
                Request: function(url, method, formData, callback) {},
                /*Facebook.Unity.AsyncRequestString.Request:static end.*/


            }
        },
        methods: {
            /*Facebook.Unity.AsyncRequestString.Start start.*/
            Start: function() {
                return null;
            },
            /*Facebook.Unity.AsyncRequestString.Start end.*/

            /*Facebook.Unity.AsyncRequestString.SetUrl start.*/
            SetUrl: function(url) {
                return null;
            },
            /*Facebook.Unity.AsyncRequestString.SetUrl end.*/

            /*Facebook.Unity.AsyncRequestString.SetMethod start.*/
            SetMethod: function(method) {
                return null;
            },
            /*Facebook.Unity.AsyncRequestString.SetMethod end.*/

            /*Facebook.Unity.AsyncRequestString.SetFormData start.*/
            SetFormData: function(formData) {
                return null;
            },
            /*Facebook.Unity.AsyncRequestString.SetFormData end.*/

            /*Facebook.Unity.AsyncRequestString.SetQuery start.*/
            SetQuery: function(query) {
                return null;
            },
            /*Facebook.Unity.AsyncRequestString.SetQuery end.*/

            /*Facebook.Unity.AsyncRequestString.SetCallback start.*/
            SetCallback: function(callback) {
                return null;
            },
            /*Facebook.Unity.AsyncRequestString.SetCallback end.*/


        }
    });
    /*Facebook.Unity.AsyncRequestString end.*/

    /*Facebook.Unity.IAsyncRequestStringWrapper start.*/
    Bridge.define("Facebook.Unity.IAsyncRequestStringWrapper", {
        $kind: "interface"
    });
    /*Facebook.Unity.IAsyncRequestStringWrapper end.*/

    /*Facebook.Unity.AuthenticationToken start.*/
    Bridge.define("Facebook.Unity.AuthenticationToken", {
        props: {
            TokenString: {
                get: function() {
                    return null;
                }
            },
            Nonce: {
                get: function() {
                    return null;
                }
            }
        },
        methods: {
            /*Facebook.Unity.AuthenticationToken.toString start.*/
            toString: function() {
                return null;
            },
            /*Facebook.Unity.AuthenticationToken.toString end.*/

            /*Facebook.Unity.AuthenticationToken.ToJson start.*/
            ToJson: function() {
                return null;
            },
            /*Facebook.Unity.AuthenticationToken.ToJson end.*/


        },
        overloads: {
            "ToString()": "toString"
        }
    });
    /*Facebook.Unity.AuthenticationToken end.*/

    /*Facebook.Unity.CallbackManager start.*/
    Bridge.define("Facebook.Unity.CallbackManager", {
        methods: {
            /*Facebook.Unity.CallbackManager.AddFacebookDelegate start.*/
            AddFacebookDelegate: function(T, callback) {
                return null;
            },
            /*Facebook.Unity.CallbackManager.AddFacebookDelegate end.*/

            /*Facebook.Unity.CallbackManager.OnFacebookResponse start.*/
            OnFacebookResponse: function(result) {},
            /*Facebook.Unity.CallbackManager.OnFacebookResponse end.*/


        }
    });
    /*Facebook.Unity.CallbackManager end.*/

    /*Facebook.Unity.IPayFacebook start.*/
    Bridge.define("Facebook.Unity.IPayFacebook", {
        $kind: "interface"
    });
    /*Facebook.Unity.IPayFacebook end.*/

    /*Facebook.Unity.IFacebookResultHandler start.*/
    Bridge.define("Facebook.Unity.IFacebookResultHandler", {
        $kind: "interface"
    });
    /*Facebook.Unity.IFacebookResultHandler end.*/

    /*Facebook.Unity.IFacebook start.*/
    Bridge.define("Facebook.Unity.IFacebook", {
        $kind: "interface"
    });
    /*Facebook.Unity.IFacebook end.*/

    /*Facebook.Unity.IFacebookCallbackHandler start.*/
    Bridge.define("Facebook.Unity.IFacebookCallbackHandler", {
        $kind: "interface"
    });
    /*Facebook.Unity.IFacebookCallbackHandler end.*/

    /*Facebook.Unity.FB+CompiledFacebookLoader start.*/
    Bridge.define("Facebook.Unity.FB.CompiledFacebookLoader", {
        inherits: [UnityEngine.MonoBehaviour],
        $kind: "nested class",
        methods: {
            /*Facebook.Unity.FB+CompiledFacebookLoader.Start start.*/
            Start: function() {},
            /*Facebook.Unity.FB+CompiledFacebookLoader.Start end.*/


        }
    });
    /*Facebook.Unity.FB+CompiledFacebookLoader end.*/

    /*Facebook.Unity.Canvas.ICanvasJSWrapper start.*/
    Bridge.define("Facebook.Unity.Canvas.ICanvasJSWrapper", {
        $kind: "interface"
    });
    /*Facebook.Unity.Canvas.ICanvasJSWrapper end.*/

    /*Facebook.Unity.Canvas.JsBridge start.*/
    Bridge.define("Facebook.Unity.Canvas.JsBridge", {
        inherits: [UnityEngine.MonoBehaviour],
        methods: {
            /*Facebook.Unity.Canvas.JsBridge.Start start.*/
            Start: function() {},
            /*Facebook.Unity.Canvas.JsBridge.Start end.*/

            /*Facebook.Unity.Canvas.JsBridge.OnLoginComplete start.*/
            OnLoginComplete: function(responseJsonData) {},
            /*Facebook.Unity.Canvas.JsBridge.OnLoginComplete end.*/

            /*Facebook.Unity.Canvas.JsBridge.OnFacebookAuthResponseChange start.*/
            OnFacebookAuthResponseChange: function(responseJsonData) {},
            /*Facebook.Unity.Canvas.JsBridge.OnFacebookAuthResponseChange end.*/

            /*Facebook.Unity.Canvas.JsBridge.OnPayComplete start.*/
            OnPayComplete: function(responseJsonData) {},
            /*Facebook.Unity.Canvas.JsBridge.OnPayComplete end.*/

            /*Facebook.Unity.Canvas.JsBridge.OnAppRequestsComplete start.*/
            OnAppRequestsComplete: function(responseJsonData) {},
            /*Facebook.Unity.Canvas.JsBridge.OnAppRequestsComplete end.*/

            /*Facebook.Unity.Canvas.JsBridge.OnShareLinkComplete start.*/
            OnShareLinkComplete: function(responseJsonData) {},
            /*Facebook.Unity.Canvas.JsBridge.OnShareLinkComplete end.*/

            /*Facebook.Unity.Canvas.JsBridge.OnFacebookFocus start.*/
            OnFacebookFocus: function(state) {},
            /*Facebook.Unity.Canvas.JsBridge.OnFacebookFocus end.*/

            /*Facebook.Unity.Canvas.JsBridge.OnInitComplete start.*/
            OnInitComplete: function(responseJsonData) {},
            /*Facebook.Unity.Canvas.JsBridge.OnInitComplete end.*/

            /*Facebook.Unity.Canvas.JsBridge.OnUrlResponse start.*/
            OnUrlResponse: function(url) {},
            /*Facebook.Unity.Canvas.JsBridge.OnUrlResponse end.*/


        }
    });
    /*Facebook.Unity.Canvas.JsBridge end.*/

    /*Facebook.Unity.CodelessCrawler start.*/
    Bridge.define("Facebook.Unity.CodelessCrawler", {
        inherits: [UnityEngine.MonoBehaviour],
        methods: {
            /*Facebook.Unity.CodelessCrawler.Awake start.*/
            Awake: function() {},
            /*Facebook.Unity.CodelessCrawler.Awake end.*/

            /*Facebook.Unity.CodelessCrawler.CaptureViewHierarchy start.*/
            CaptureViewHierarchy: function(message) {},
            /*Facebook.Unity.CodelessCrawler.CaptureViewHierarchy end.*/


        }
    });
    /*Facebook.Unity.CodelessCrawler end.*/

    /*Facebook.Unity.CodelessIAPAutoLog start.*/
    Bridge.define("Facebook.Unity.CodelessIAPAutoLog", {
        statics: {
            methods: {
                /*Facebook.Unity.CodelessIAPAutoLog.handlePurchaseCompleted:static start.*/
                handlePurchaseCompleted: function(data) {},
                /*Facebook.Unity.CodelessIAPAutoLog.handlePurchaseCompleted:static end.*/

                /*Facebook.Unity.CodelessIAPAutoLog.addListenerToIAPButtons:static start.*/
                addListenerToIAPButtons: function(listenerObject) {},
                /*Facebook.Unity.CodelessIAPAutoLog.addListenerToIAPButtons:static end.*/

                /*Facebook.Unity.CodelessIAPAutoLog.addListenerToGameObject:static start.*/
                addListenerToGameObject: function(gameObject, listenerObject) {},
                /*Facebook.Unity.CodelessIAPAutoLog.addListenerToGameObject:static end.*/


            }
        }
    });
    /*Facebook.Unity.CodelessIAPAutoLog end.*/

    /*Facebook.Unity.CodelessUIInteractEvent start.*/
    Bridge.define("Facebook.Unity.CodelessUIInteractEvent", {
        inherits: [UnityEngine.MonoBehaviour],
        props: {
            eventBindingManager: {
                get: function() {
                    return null;
                }
            }
        },
        methods: {
            /*Facebook.Unity.CodelessUIInteractEvent.OnReceiveMapping start.*/
            OnReceiveMapping: function(message) {},
            /*Facebook.Unity.CodelessUIInteractEvent.OnReceiveMapping end.*/


        }
    });
    /*Facebook.Unity.CodelessUIInteractEvent end.*/

    /*Facebook.Unity.ComponentFactory start.*/
    Bridge.define("Facebook.Unity.ComponentFactory", {
        statics: {
            fields: {
                GameObjectName: null
            },
            props: {
                FacebookGameObject: {
                    get: function() {
                        return null;
                    }
                }
            },
            ctors: {
                init: function() {
                    this.GameObjectName = "";
                }
            },
            methods: {
                /*Facebook.Unity.ComponentFactory.GetComponent:static start.*/
                GetComponent: function(T, ifNotExist) {
                    return null;
                },
                /*Facebook.Unity.ComponentFactory.GetComponent:static end.*/

                /*Facebook.Unity.ComponentFactory.AddComponent:static start.*/
                AddComponent: function(T) {
                    return null;
                },
                /*Facebook.Unity.ComponentFactory.AddComponent:static end.*/


            }
        }
    });
    /*Facebook.Unity.ComponentFactory end.*/

    /*Facebook.Unity.ComponentFactory+IfNotExist start.*/
    Bridge.define("Facebook.Unity.ComponentFactory.IfNotExist", {
        $kind: "nested enum",
        statics: {
            fields: {
                AddNew: 0,
                ReturnNull: 1
            }
        }
    });
    /*Facebook.Unity.ComponentFactory+IfNotExist end.*/

    /*Facebook.Unity.Constants start.*/
    Bridge.define("Facebook.Unity.Constants", {
        statics: {
            fields: {
                CallbackIdKey: null,
                AccessTokenKey: null,
                UrlKey: null,
                RefKey: null,
                ExtrasKey: null,
                TargetUrlKey: null,
                CancelledKey: null,
                ErrorKey: null,
                HasLicenseKey: null,
                OnPayCompleteMethodName: null,
                OnShareCompleteMethodName: null,
                OnAppRequestsCompleteMethodName: null,
                OnGroupCreateCompleteMethodName: null,
                OnGroupJoinCompleteMethodName: null,
                GraphApiVersion: null,
                GraphUrlFormat: null,
                UserLikesPermission: null,
                EmailPermission: null,
                PublishPagesPermission: null,
                EventBindingKeysClassName: null,
                EventBindingKeysIndex: null,
                EventBindingKeysPath: null,
                EventBindingKeysEventName: null,
                EventBindingKeysEventType: null,
                EventBindingKeysAppVersion: null,
                EventBindingKeysText: null,
                EventBindingKeysHint: null,
                EventBindingKeysDescription: null,
                EventBindingKeysTag: null,
                EventBindingKeysSection: null,
                EventBindingKeysRow: null,
                EventBindingKeysMatchBitmask: null,
                MaxPathDepth: 0,
                CurrentPlatform: 0
            },
            props: {
                GraphUrl: {
                    get: function() {
                        return null;
                    }
                },
                GraphApiUserAgent: {
                    get: function() {
                        return null;
                    }
                },
                IsMobile: {
                    get: function() {
                        return Bridge.getDefaultValue(System.Boolean);
                    }
                },
                IsEditor: {
                    get: function() {
                        return Bridge.getDefaultValue(System.Boolean);
                    }
                },
                IsWeb: {
                    get: function() {
                        return Bridge.getDefaultValue(System.Boolean);
                    }
                },
                IsGameroom: {
                    get: function() {
                        return Bridge.getDefaultValue(System.Boolean);
                    }
                },
                UnitySDKUserAgentSuffixLegacy: {
                    get: function() {
                        return null;
                    }
                },
                UnitySDKUserAgent: {
                    get: function() {
                        return null;
                    }
                },
                DebugMode: {
                    get: function() {
                        return Bridge.getDefaultValue(System.Boolean);
                    }
                }
            },
            ctors: {
                init: function() {
                    this.CallbackIdKey = "";
                    this.AccessTokenKey = "";
                    this.UrlKey = "";
                    this.RefKey = "";
                    this.ExtrasKey = "";
                    this.TargetUrlKey = "";
                    this.CancelledKey = "";
                    this.ErrorKey = "";
                    this.HasLicenseKey = "";
                    this.OnPayCompleteMethodName = "";
                    this.OnShareCompleteMethodName = "";
                    this.OnAppRequestsCompleteMethodName = "";
                    this.OnGroupCreateCompleteMethodName = "";
                    this.OnGroupJoinCompleteMethodName = "";
                    this.GraphApiVersion = "";
                    this.GraphUrlFormat = "";
                    this.UserLikesPermission = "";
                    this.EmailPermission = "";
                    this.PublishPagesPermission = "";
                    this.EventBindingKeysClassName = "";
                    this.EventBindingKeysIndex = "";
                    this.EventBindingKeysPath = "";
                    this.EventBindingKeysEventName = "";
                    this.EventBindingKeysEventType = "";
                    this.EventBindingKeysAppVersion = "";
                    this.EventBindingKeysText = "";
                    this.EventBindingKeysHint = "";
                    this.EventBindingKeysDescription = "";
                    this.EventBindingKeysTag = "";
                    this.EventBindingKeysSection = "";
                    this.EventBindingKeysRow = "";
                    this.EventBindingKeysMatchBitmask = "";
                    this.MaxPathDepth = 35;
                }
            }
        }
    });
    /*Facebook.Unity.Constants end.*/

    /*Facebook.Unity.Editor.EditorFacebookMockDialog start.*/
    Bridge.define("Facebook.Unity.Editor.EditorFacebookMockDialog", {
        inherits: [UnityEngine.MonoBehaviour],
        props: {
            Callback: {
                set: function(value) {}
            },
            CallbackID: {
                set: function(value) {}
            }
        },
        methods: {
            /*Facebook.Unity.Editor.EditorFacebookMockDialog.Start start.*/
            Start: function() {},
            /*Facebook.Unity.Editor.EditorFacebookMockDialog.Start end.*/

            /*Facebook.Unity.Editor.EditorFacebookMockDialog.OnGUI start.*/
            OnGUI: function() {},
            /*Facebook.Unity.Editor.EditorFacebookMockDialog.OnGUI end.*/

            /*Facebook.Unity.Editor.EditorFacebookMockDialog.SendCancelResult start.*/
            SendCancelResult: function() {},
            /*Facebook.Unity.Editor.EditorFacebookMockDialog.SendCancelResult end.*/

            /*Facebook.Unity.Editor.EditorFacebookMockDialog.SendErrorResult start.*/
            SendErrorResult: function(errorMessage) {},
            /*Facebook.Unity.Editor.EditorFacebookMockDialog.SendErrorResult end.*/


        }
    });
    /*Facebook.Unity.Editor.EditorFacebookMockDialog end.*/

    /*Facebook.Unity.Editor.IEditorWrapper start.*/
    Bridge.define("Facebook.Unity.Editor.IEditorWrapper", {
        $kind: "interface"
    });
    /*Facebook.Unity.Editor.IEditorWrapper end.*/

    /*Facebook.Unity.FacebookLogger start.*/
    Bridge.define("Facebook.Unity.FacebookLogger", {
        statics: {
            props: {
                Instance: {
                    get: function() {
                        return null;
                    }
                }
            },
            methods: {
                /*Facebook.Unity.FacebookLogger.Log:static start.*/
                Log: function(msg) {},
                /*Facebook.Unity.FacebookLogger.Log:static end.*/

                /*Facebook.Unity.FacebookLogger.Log$1:static start.*/
                Log$1: function(format, args) {},
                /*Facebook.Unity.FacebookLogger.Log$1:static end.*/

                /*Facebook.Unity.FacebookLogger.Info:static start.*/
                Info: function(msg) {},
                /*Facebook.Unity.FacebookLogger.Info:static end.*/

                /*Facebook.Unity.FacebookLogger.Info$1:static start.*/
                Info$1: function(format, args) {},
                /*Facebook.Unity.FacebookLogger.Info$1:static end.*/

                /*Facebook.Unity.FacebookLogger.Warn:static start.*/
                Warn: function(msg) {},
                /*Facebook.Unity.FacebookLogger.Warn:static end.*/

                /*Facebook.Unity.FacebookLogger.Warn$1:static start.*/
                Warn$1: function(format, args) {},
                /*Facebook.Unity.FacebookLogger.Warn$1:static end.*/

                /*Facebook.Unity.FacebookLogger.Error:static start.*/
                Error: function(msg) {},
                /*Facebook.Unity.FacebookLogger.Error:static end.*/

                /*Facebook.Unity.FacebookLogger.Error$1:static start.*/
                Error$1: function(format, args) {},
                /*Facebook.Unity.FacebookLogger.Error$1:static end.*/


            }
        }
    });
    /*Facebook.Unity.FacebookLogger end.*/

    /*Facebook.Unity.IFacebookScheduler start.*/
    Bridge.define("Facebook.Unity.IFacebookScheduler", {
        $kind: "interface"
    });
    /*Facebook.Unity.IFacebookScheduler end.*/

    /*Facebook.Unity.IFacebookSchedulerFactory start.*/
    Bridge.define("Facebook.Unity.IFacebookSchedulerFactory", {
        $kind: "interface"
    });
    /*Facebook.Unity.IFacebookSchedulerFactory end.*/

    /*Facebook.Unity.FacebookSdkVersion start.*/
    Bridge.define("Facebook.Unity.FacebookSdkVersion", {
        statics: {
            props: {
                Build: {
                    get: function() {
                        return null;
                    }
                }
            }
        }
    });
    /*Facebook.Unity.FacebookSdkVersion end.*/

    /*Facebook.Unity.FacebookUnityPlatform start.*/
    Bridge.define("Facebook.Unity.FacebookUnityPlatform", {
        $kind: "enum",
        statics: {
            fields: {
                Unknown: 0,
                Android: 1,
                IOS: 2,
                WebGL: 3,
                Gameroom: 4
            }
        }
    });
    /*Facebook.Unity.FacebookUnityPlatform end.*/

    /*Facebook.Unity.FB start.*/
    Bridge.define("Facebook.Unity.FB", {
        inherits: [UnityEngine.ScriptableObject],
        statics: {
            fields: {
                GraphApiVersion: null,
                LimitAppEventUsage: false
            },
            props: {
                AppId: {
                    get: function() {
                        return null;
                    }
                },
                ClientToken: {
                    get: function() {
                        return null;
                    }
                },
                IsLoggedIn: {
                    get: function() {
                        return Bridge.getDefaultValue(System.Boolean);
                    }
                },
                IsInitialized: {
                    get: function() {
                        return Bridge.getDefaultValue(System.Boolean);
                    }
                },
                FacebookImpl: {
                    get: function() {
                        return null;
                    }
                },
                FacebookDomain: {
                    get: function() {
                        return null;
                    }
                }
            },
            methods: {
                /*Facebook.Unity.FB.Init:static start.*/
                Init: function(onInitComplete, onHideUnity, authResponse) {},
                /*Facebook.Unity.FB.Init:static end.*/

                /*Facebook.Unity.FB.Init$1:static start.*/
                Init$1: function(appId, clientToken, cookie, logging, status, xfbml, frictionlessRequests, authResponse, javascriptSDKLocale, onHideUnity, onInitComplete) {},
                /*Facebook.Unity.FB.Init$1:static end.*/

                /*Facebook.Unity.FB.LogInWithPublishPermissions:static start.*/
                LogInWithPublishPermissions: function(permissions, callback) {},
                /*Facebook.Unity.FB.LogInWithPublishPermissions:static end.*/

                /*Facebook.Unity.FB.LogInWithReadPermissions:static start.*/
                LogInWithReadPermissions: function(permissions, callback) {},
                /*Facebook.Unity.FB.LogInWithReadPermissions:static end.*/

                /*Facebook.Unity.FB.LogOut:static start.*/
                LogOut: function() {},
                /*Facebook.Unity.FB.LogOut:static end.*/

                /*Facebook.Unity.FB.AppRequest$1:static start.*/
                AppRequest$1: function(message, actionType, objectId, to, data, title, callback) {},
                /*Facebook.Unity.FB.AppRequest$1:static end.*/

                /*Facebook.Unity.FB.AppRequest:static start.*/
                AppRequest: function(message, actionType, objectId, filters, excludeIds, maxRecipients, data, title, callback) {},
                /*Facebook.Unity.FB.AppRequest:static end.*/

                /*Facebook.Unity.FB.AppRequest$2:static start.*/
                AppRequest$2: function(message, to, filters, excludeIds, maxRecipients, data, title, callback) {},
                /*Facebook.Unity.FB.AppRequest$2:static end.*/

                /*Facebook.Unity.FB.ShareLink:static start.*/
                ShareLink: function(contentURL, contentTitle, contentDescription, photoURL, callback) {},
                /*Facebook.Unity.FB.ShareLink:static end.*/

                /*Facebook.Unity.FB.FeedShare:static start.*/
                FeedShare: function(toId, link, linkName, linkCaption, linkDescription, picture, mediaSource, callback) {},
                /*Facebook.Unity.FB.FeedShare:static end.*/

                /*Facebook.Unity.FB.API:static start.*/
                API: function(query, method, callback, formData) {},
                /*Facebook.Unity.FB.API:static end.*/

                /*Facebook.Unity.FB.API$1:static start.*/
                API$1: function(query, method, callback, formData) {},
                /*Facebook.Unity.FB.API$1:static end.*/

                /*Facebook.Unity.FB.ActivateApp:static start.*/
                ActivateApp: function() {},
                /*Facebook.Unity.FB.ActivateApp:static end.*/

                /*Facebook.Unity.FB.GetAppLink:static start.*/
                GetAppLink: function(callback) {},
                /*Facebook.Unity.FB.GetAppLink:static end.*/

                /*Facebook.Unity.FB.ClearAppLink:static start.*/
                ClearAppLink: function() {},
                /*Facebook.Unity.FB.ClearAppLink:static end.*/

                /*Facebook.Unity.FB.LogAppEvent:static start.*/
                LogAppEvent: function(logEvent, valueToSum, parameters) {},
                /*Facebook.Unity.FB.LogAppEvent:static end.*/

                /*Facebook.Unity.FB.LogPurchase:static start.*/
                LogPurchase: function(logPurchase, currency, parameters) {},
                /*Facebook.Unity.FB.LogPurchase:static end.*/

                /*Facebook.Unity.FB.LogPurchase$1:static start.*/
                LogPurchase$1: function(logPurchase, currency, parameters) {},
                /*Facebook.Unity.FB.LogPurchase$1:static end.*/


            }
        }
    });
    /*Facebook.Unity.FB end.*/

    /*Facebook.Unity.FB+Android start.*/
    Bridge.define("Facebook.Unity.FB.Android", {
        $kind: "nested class",
        statics: {
            props: {
                KeyHash: {
                    get: function() {
                        return null;
                    }
                }
            },
            methods: {
                /*Facebook.Unity.FB+Android.RetrieveLoginStatus:static start.*/
                RetrieveLoginStatus: function(callback) {},
                /*Facebook.Unity.FB+Android.RetrieveLoginStatus:static end.*/


            }
        }
    });
    /*Facebook.Unity.FB+Android end.*/

    /*Facebook.Unity.FB+Canvas start.*/
    Bridge.define("Facebook.Unity.FB.Canvas", {
        $kind: "nested class",
        statics: {
            props: {
                FacebookPayImpl: {
                    get: function() {
                        return null;
                    }
                }
            },
            methods: {
                /*Facebook.Unity.FB+Canvas.Pay:static start.*/
                Pay: function(product, action, quantity, quantityMin, quantityMax, requestId, pricepointId, testCurrency, callback) {},
                /*Facebook.Unity.FB+Canvas.Pay:static end.*/

                /*Facebook.Unity.FB+Canvas.PayWithProductId:static start.*/
                PayWithProductId: function(productId, action, quantity, quantityMin, quantityMax, requestId, pricepointId, testCurrency, callback) {},
                /*Facebook.Unity.FB+Canvas.PayWithProductId:static end.*/

                /*Facebook.Unity.FB+Canvas.PayWithProductId$1:static start.*/
                PayWithProductId$1: function(productId, action, developerPayload, testCurrency, callback) {},
                /*Facebook.Unity.FB+Canvas.PayWithProductId$1:static end.*/


            }
        }
    });
    /*Facebook.Unity.FB+Canvas end.*/

    /*Facebook.Unity.FB+Gameroom start.*/
    Bridge.define("Facebook.Unity.FB.Gameroom", {
        $kind: "nested class",
        statics: {
            props: {
                GameroomFacebookImpl: {
                    get: function() {
                        return null;
                    }
                }
            },
            methods: {
                /*Facebook.Unity.FB+Gameroom.PayPremium:static start.*/
                PayPremium: function(callback) {},
                /*Facebook.Unity.FB+Gameroom.PayPremium:static end.*/

                /*Facebook.Unity.FB+Gameroom.HasLicense:static start.*/
                HasLicense: function(callback) {},
                /*Facebook.Unity.FB+Gameroom.HasLicense:static end.*/


            }
        }
    });
    /*Facebook.Unity.FB+Gameroom end.*/

    /*Facebook.Unity.FB+Mobile start.*/
    Bridge.define("Facebook.Unity.FB.Mobile", {
        $kind: "nested class",
        statics: {
            fields: {
                ShareDialogMode: 0,
                UserID: null
            },
            props: {
                MobileFacebookImpl: {
                    get: function() {
                        return null;
                    }
                }
            },
            methods: {
                /*Facebook.Unity.FB+Mobile.UpdateUserProperties:static start.*/
                UpdateUserProperties: function(parameters) {},
                /*Facebook.Unity.FB+Mobile.UpdateUserProperties:static end.*/

                /*Facebook.Unity.FB+Mobile.SetDataProcessingOptions:static start.*/
                SetDataProcessingOptions: function(options) {},
                /*Facebook.Unity.FB+Mobile.SetDataProcessingOptions:static end.*/

                /*Facebook.Unity.FB+Mobile.SetDataProcessingOptions$1:static start.*/
                SetDataProcessingOptions$1: function(options, country, state) {},
                /*Facebook.Unity.FB+Mobile.SetDataProcessingOptions$1:static end.*/

                /*Facebook.Unity.FB+Mobile.LoginWithTrackingPreference:static start.*/
                LoginWithTrackingPreference: function(loginTracking, permissions, nonce, callback) {},
                /*Facebook.Unity.FB+Mobile.LoginWithTrackingPreference:static end.*/

                /*Facebook.Unity.FB+Mobile.CurrentAuthenticationToken:static start.*/
                CurrentAuthenticationToken: function() {
                    return null;
                },
                /*Facebook.Unity.FB+Mobile.CurrentAuthenticationToken:static end.*/

                /*Facebook.Unity.FB+Mobile.CurrentProfile:static start.*/
                CurrentProfile: function() {
                    return null;
                },
                /*Facebook.Unity.FB+Mobile.CurrentProfile:static end.*/

                /*Facebook.Unity.FB+Mobile.FetchDeferredAppLinkData:static start.*/
                FetchDeferredAppLinkData: function(callback) {},
                /*Facebook.Unity.FB+Mobile.FetchDeferredAppLinkData:static end.*/

                /*Facebook.Unity.FB+Mobile.RefreshCurrentAccessToken:static start.*/
                RefreshCurrentAccessToken: function(callback) {},
                /*Facebook.Unity.FB+Mobile.RefreshCurrentAccessToken:static end.*/

                /*Facebook.Unity.FB+Mobile.IsImplicitPurchaseLoggingEnabled:static start.*/
                IsImplicitPurchaseLoggingEnabled: function() {
                    return Bridge.getDefaultValue(System.Boolean);
                },
                /*Facebook.Unity.FB+Mobile.IsImplicitPurchaseLoggingEnabled:static end.*/

                /*Facebook.Unity.FB+Mobile.SetAutoLogAppEventsEnabled:static start.*/
                SetAutoLogAppEventsEnabled: function(autoLogAppEventsEnabled) {},
                /*Facebook.Unity.FB+Mobile.SetAutoLogAppEventsEnabled:static end.*/

                /*Facebook.Unity.FB+Mobile.SetAdvertiserIDCollectionEnabled:static start.*/
                SetAdvertiserIDCollectionEnabled: function(advertiserIDCollectionEnabled) {},
                /*Facebook.Unity.FB+Mobile.SetAdvertiserIDCollectionEnabled:static end.*/

                /*Facebook.Unity.FB+Mobile.SetAdvertiserTrackingEnabled:static start.*/
                SetAdvertiserTrackingEnabled: function(advertiserTrackingEnabled) {
                    return Bridge.getDefaultValue(System.Boolean);
                },
                /*Facebook.Unity.FB+Mobile.SetAdvertiserTrackingEnabled:static end.*/

                /*Facebook.Unity.FB+Mobile.SetPushNotificationsDeviceTokenString:static start.*/
                SetPushNotificationsDeviceTokenString: function(token) {},
                /*Facebook.Unity.FB+Mobile.SetPushNotificationsDeviceTokenString:static end.*/


            }
        }
    });
    /*Facebook.Unity.FB+Mobile end.*/

    /*Facebook.Unity.FBGamingServices start.*/
    Bridge.define("Facebook.Unity.FBGamingServices", {
        inherits: [UnityEngine.ScriptableObject],
        statics: {
            props: {
                MobileFacebookImpl: {
                    get: function() {
                        return null;
                    }
                }
            },
            methods: {
                /*Facebook.Unity.FBGamingServices.OpenFriendFinderDialog:static start.*/
                OpenFriendFinderDialog: function(callback) {},
                /*Facebook.Unity.FBGamingServices.OpenFriendFinderDialog:static end.*/

                /*Facebook.Unity.FBGamingServices.UploadImageToMediaLibrary:static start.*/
                UploadImageToMediaLibrary: function(caption, imageUri, shouldLaunchMediaDialog, callback) {},
                /*Facebook.Unity.FBGamingServices.UploadImageToMediaLibrary:static end.*/

                /*Facebook.Unity.FBGamingServices.UploadVideoToMediaLibrary:static start.*/
                UploadVideoToMediaLibrary: function(caption, videoUri, callback) {},
                /*Facebook.Unity.FBGamingServices.UploadVideoToMediaLibrary:static end.*/

                /*Facebook.Unity.FBGamingServices.OnIAPReady:static start.*/
                OnIAPReady: function(callback) {},
                /*Facebook.Unity.FBGamingServices.OnIAPReady:static end.*/

                /*Facebook.Unity.FBGamingServices.GetCatalog:static start.*/
                GetCatalog: function(callback) {},
                /*Facebook.Unity.FBGamingServices.GetCatalog:static end.*/

                /*Facebook.Unity.FBGamingServices.GetPurchases:static start.*/
                GetPurchases: function(callback) {},
                /*Facebook.Unity.FBGamingServices.GetPurchases:static end.*/

                /*Facebook.Unity.FBGamingServices.Purchase:static start.*/
                Purchase: function(productID, callback, developerPayload) {},
                /*Facebook.Unity.FBGamingServices.Purchase:static end.*/

                /*Facebook.Unity.FBGamingServices.ConsumePurchase:static start.*/
                ConsumePurchase: function(purchaseToken, callback) {},
                /*Facebook.Unity.FBGamingServices.ConsumePurchase:static end.*/

                /*Facebook.Unity.FBGamingServices.InitCloudGame:static start.*/
                InitCloudGame: function(callback) {},
                /*Facebook.Unity.FBGamingServices.InitCloudGame:static end.*/

                /*Facebook.Unity.FBGamingServices.ScheduleAppToUserNotification:static start.*/
                ScheduleAppToUserNotification: function(title, body, media, timeInterval, payload, callback) {},
                /*Facebook.Unity.FBGamingServices.ScheduleAppToUserNotification:static end.*/

                /*Facebook.Unity.FBGamingServices.LoadInterstitialAd:static start.*/
                LoadInterstitialAd: function(placementID, callback) {},
                /*Facebook.Unity.FBGamingServices.LoadInterstitialAd:static end.*/

                /*Facebook.Unity.FBGamingServices.ShowInterstitialAd:static start.*/
                ShowInterstitialAd: function(placementID, callback) {},
                /*Facebook.Unity.FBGamingServices.ShowInterstitialAd:static end.*/

                /*Facebook.Unity.FBGamingServices.LoadRewardedVideo:static start.*/
                LoadRewardedVideo: function(placementID, callback) {},
                /*Facebook.Unity.FBGamingServices.LoadRewardedVideo:static end.*/

                /*Facebook.Unity.FBGamingServices.ShowRewardedVideo:static start.*/
                ShowRewardedVideo: function(placementID, callback) {},
                /*Facebook.Unity.FBGamingServices.ShowRewardedVideo:static end.*/

                /*Facebook.Unity.FBGamingServices.GetPayload:static start.*/
                GetPayload: function(callback) {},
                /*Facebook.Unity.FBGamingServices.GetPayload:static end.*/

                /*Facebook.Unity.FBGamingServices.PostSessionScore:static start.*/
                PostSessionScore: function(score, callback) {},
                /*Facebook.Unity.FBGamingServices.PostSessionScore:static end.*/

                /*Facebook.Unity.FBGamingServices.OpenAppStore:static start.*/
                OpenAppStore: function(callback) {},
                /*Facebook.Unity.FBGamingServices.OpenAppStore:static end.*/


            }
        }
    });
    /*Facebook.Unity.FBGamingServices end.*/

    /*Facebook.Unity.FBSDKCodelessPathComponent start.*/
    Bridge.define("Facebook.Unity.FBSDKCodelessPathComponent", {
        fields: {
            className: null,
            text: null,
            hint: null,
            desc: null,
            tag: null,
            index: System.Int64(0),
            section: System.Int64(0),
            row: System.Int64(0),
            matchBitmask: System.Int64(0)
        },
        ctors: {
            ctor: function(dict) {
                this.$initialize();
            }
        }
    });
    /*Facebook.Unity.FBSDKCodelessPathComponent end.*/

    /*Facebook.Unity.FBSDKEventBinding start.*/
    Bridge.define("Facebook.Unity.FBSDKEventBinding", {
        fields: {
            eventName: null,
            eventType: null,
            appVersion: null,
            pathType: null,
            path: null,
            parameters: null
        },
        ctors: {
            ctor: function(dict) {
                this.$initialize();
            }
        }
    });
    /*Facebook.Unity.FBSDKEventBinding end.*/

    /*Facebook.Unity.FBSDKEventBindingManager start.*/
    Bridge.define("Facebook.Unity.FBSDKEventBindingManager", {
        fields: {
            eventBindings: null
        },
        ctors: {
            ctor: function(listDict) {
                this.$initialize();
            }
        }
    });
    /*Facebook.Unity.FBSDKEventBindingManager end.*/

    /*Facebook.Unity.FBSDKViewHiearchy start.*/
    Bridge.define("Facebook.Unity.FBSDKViewHiearchy", {
        statics: {
            methods: {
                /*Facebook.Unity.FBSDKViewHiearchy.CheckGameObjectMatchPath:static start.*/
                CheckGameObjectMatchPath: function(go, path) {
                    return Bridge.getDefaultValue(System.Boolean);
                },
                /*Facebook.Unity.FBSDKViewHiearchy.CheckGameObjectMatchPath:static end.*/

                /*Facebook.Unity.FBSDKViewHiearchy.CheckPathMatchPath:static start.*/
                CheckPathMatchPath: function(goPath, path) {
                    return Bridge.getDefaultValue(System.Boolean);
                },
                /*Facebook.Unity.FBSDKViewHiearchy.CheckPathMatchPath:static end.*/

                /*Facebook.Unity.FBSDKViewHiearchy.GetPath:static start.*/
                GetPath: function(go) {
                    return null;
                },
                /*Facebook.Unity.FBSDKViewHiearchy.GetPath:static end.*/

                /*Facebook.Unity.FBSDKViewHiearchy.GetPath$1:static start.*/
                GetPath$1: function(go, limit) {
                    return null;
                },
                /*Facebook.Unity.FBSDKViewHiearchy.GetPath$1:static end.*/

                /*Facebook.Unity.FBSDKViewHiearchy.GetParent:static start.*/
                GetParent: function(go) {
                    return null;
                },
                /*Facebook.Unity.FBSDKViewHiearchy.GetParent:static end.*/

                /*Facebook.Unity.FBSDKViewHiearchy.GetAttribute:static start.*/
                GetAttribute: function(obj, parent) {
                    return null;
                },
                /*Facebook.Unity.FBSDKViewHiearchy.GetAttribute:static end.*/


            }
        }
    });
    /*Facebook.Unity.FBSDKViewHiearchy end.*/

    /*Facebook.Unity.FBUnityUtility start.*/
    Bridge.define("Facebook.Unity.FBUnityUtility", {
        statics: {
            fields: {
                UnityDeviceIdentifier: null,
                AsyncRequestStringWrapper: null
            }
        }
    });
    /*Facebook.Unity.FBUnityUtility end.*/

    /*Facebook.Unity.Gameroom.IGameroomWrapper start.*/
    Bridge.define("Facebook.Unity.Gameroom.IGameroomWrapper", {
        $kind: "interface"
    });
    /*Facebook.Unity.Gameroom.IGameroomWrapper end.*/

    /*Facebook.Unity.HttpMethod start.*/
    Bridge.define("Facebook.Unity.HttpMethod", {
        $kind: "enum",
        statics: {
            fields: {
                GET: 0,
                POST: 1,
                DELETE: 2
            }
        }
    });
    /*Facebook.Unity.HttpMethod end.*/

    /*Facebook.Unity.IFacebookLogger start.*/
    Bridge.define("Facebook.Unity.IFacebookLogger", {
        $kind: "interface"
    });
    /*Facebook.Unity.IFacebookLogger end.*/

    /*Facebook.Unity.Mobile.IOS.IIOSWrapper start.*/
    Bridge.define("Facebook.Unity.Mobile.IOS.IIOSWrapper", {
        $kind: "interface"
    });
    /*Facebook.Unity.Mobile.IOS.IIOSWrapper end.*/

    /*Facebook.Unity.LoginTracking start.*/
    Bridge.define("Facebook.Unity.LoginTracking", {
        $kind: "enum",
        statics: {
            fields: {
                ENABLED: 0,
                LIMITED: 1
            }
        }
    });
    /*Facebook.Unity.LoginTracking end.*/

    /*Facebook.Unity.MethodArguments start.*/
    Bridge.define("Facebook.Unity.MethodArguments", {
        ctors: {
            ctor: function() {
                this.$initialize();
            },
            $ctor1: function(methodArgs) {
                this.$initialize();
            }
        },
        methods: {
            /*Facebook.Unity.MethodArguments.AddPrimative start.*/
            AddPrimative: function(T, argumentName, value) {},
            /*Facebook.Unity.MethodArguments.AddPrimative end.*/

            /*Facebook.Unity.MethodArguments.AddNullablePrimitive start.*/
            AddNullablePrimitive: function(T, argumentName, nullable) {},
            /*Facebook.Unity.MethodArguments.AddNullablePrimitive end.*/

            /*Facebook.Unity.MethodArguments.AddString start.*/
            AddString: function(argumentName, value) {},
            /*Facebook.Unity.MethodArguments.AddString end.*/

            /*Facebook.Unity.MethodArguments.AddCommaSeparatedList start.*/
            AddCommaSeparatedList: function(argumentName, value) {},
            /*Facebook.Unity.MethodArguments.AddCommaSeparatedList end.*/

            /*Facebook.Unity.MethodArguments.AddDictionary start.*/
            AddDictionary: function(argumentName, dict) {},
            /*Facebook.Unity.MethodArguments.AddDictionary end.*/

            /*Facebook.Unity.MethodArguments.AddList start.*/
            AddList: function(T, argumentName, list) {},
            /*Facebook.Unity.MethodArguments.AddList end.*/

            /*Facebook.Unity.MethodArguments.AddUri start.*/
            AddUri: function(argumentName, uri) {},
            /*Facebook.Unity.MethodArguments.AddUri end.*/

            /*Facebook.Unity.MethodArguments.ToJsonString start.*/
            ToJsonString: function() {
                return null;
            },
            /*Facebook.Unity.MethodArguments.ToJsonString end.*/


        }
    });
    /*Facebook.Unity.MethodArguments end.*/

    /*Facebook.Unity.Mobile.IOS.IOSFacebook+FBInsightsFlushBehavior start.*/
    Bridge.define("Facebook.Unity.Mobile.IOS.IOSFacebook.FBInsightsFlushBehavior", {
        $kind: "nested enum",
        statics: {
            fields: {
                FBInsightsFlushBehaviorAuto: 0,
                FBInsightsFlushBehaviorExplicitOnly: 1
            }
        }
    });
    /*Facebook.Unity.Mobile.IOS.IOSFacebook+FBInsightsFlushBehavior end.*/

    /*Facebook.Unity.OGActionType start.*/
    Bridge.define("Facebook.Unity.OGActionType", {
        $kind: "enum",
        statics: {
            fields: {
                SEND: 0,
                ASKFOR: 1,
                TURN: 2
            }
        }
    });
    /*Facebook.Unity.OGActionType end.*/

    /*Facebook.Unity.Product start.*/
    Bridge.define("Facebook.Unity.Product", {
        props: {
            Title: {
                get: function() {
                    return null;
                }
            },
            ProductID: {
                get: function() {
                    return null;
                }
            },
            Description: {
                get: function() {
                    return null;
                }
            },
            ImageURI: {
                get: function() {
                    return null;
                }
            },
            Price: {
                get: function() {
                    return null;
                }
            },
            PriceCurrencyCode: {
                get: function() {
                    return null;
                }
            }
        },
        methods: {
            /*Facebook.Unity.Product.toString start.*/
            toString: function() {
                return null;
            },
            /*Facebook.Unity.Product.toString end.*/


        },
        overloads: {
            "ToString()": "toString"
        }
    });
    /*Facebook.Unity.Product end.*/

    /*Facebook.Unity.Profile start.*/
    Bridge.define("Facebook.Unity.Profile", {
        props: {
            UserID: {
                get: function() {
                    return null;
                }
            },
            FirstName: {
                get: function() {
                    return null;
                }
            },
            MiddleName: {
                get: function() {
                    return null;
                }
            },
            LastName: {
                get: function() {
                    return null;
                }
            },
            Name: {
                get: function() {
                    return null;
                }
            },
            Email: {
                get: function() {
                    return null;
                }
            },
            ImageURL: {
                get: function() {
                    return null;
                }
            },
            LinkURL: {
                get: function() {
                    return null;
                }
            }
        },
        methods: {
            /*Facebook.Unity.Profile.toString start.*/
            toString: function() {
                return null;
            },
            /*Facebook.Unity.Profile.toString end.*/


        },
        overloads: {
            "ToString()": "toString"
        }
    });
    /*Facebook.Unity.Profile end.*/

    /*Facebook.Unity.Purchase start.*/
    Bridge.define("Facebook.Unity.Purchase", {
        props: {
            IsConsumed: {
                get: function() {
                    return Bridge.getDefaultValue(System.Boolean);
                }
            },
            DeveloperPayload: {
                get: function() {
                    return null;
                }
            },
            PaymentID: {
                get: function() {
                    return null;
                }
            },
            ProductID: {
                get: function() {
                    return null;
                }
            },
            PurchaseTime: {
                get: function() {
                    return Bridge.getDefaultValue(System.DateTime);
                }
            },
            PurchaseToken: {
                get: function() {
                    return null;
                }
            },
            SignedRequest: {
                get: function() {
                    return null;
                }
            }
        },
        methods: {
            /*Facebook.Unity.Purchase.toString start.*/
            toString: function() {
                return null;
            },
            /*Facebook.Unity.Purchase.toString end.*/


        },
        overloads: {
            "ToString()": "toString"
        }
    });
    /*Facebook.Unity.Purchase end.*/

    /*Facebook.Unity.ResultContainer start.*/
    Bridge.define("Facebook.Unity.ResultContainer", {
        fields: {
            ResultDictionary: null
        },
        props: {
            RawResult: {
                get: function() {
                    return null;
                }
            }
        },
        ctors: {
            ctor: function(dictionary) {
                this.$initialize();
            },
            $ctor1: function(result) {
                this.$initialize();
            }
        }
    });
    /*Facebook.Unity.ResultContainer end.*/

    /*Facebook.Unity.Settings.FacebookSettings start.*/
    Bridge.define("Facebook.Unity.Settings.FacebookSettings", {
        inherits: [UnityEngine.ScriptableObject],
        statics: {
            fields: {
                FacebookSettingsAssetName: null,
                FacebookSettingsPath: null,
                FacebookSettingsAssetExtension: null,
                SelectedAppIndex: 0,
                AppIds: null,
                AppLabels: null,
                ClientTokens: null,
                Cookie: false,
                Logging: false,
                Status: false,
                Xfbml: false,
                AndroidKeystorePath: null,
                IosURLSuffix: null,
                FrictionlessRequests: false,
                AppLinkSchemes: null,
                UploadAccessToken: null,
                AutoLogAppEventsEnabled: false,
                AdvertiserIDCollectionEnabled: false
            },
            props: {
                AppId: {
                    get: function() {
                        return null;
                    }
                },
                ClientToken: {
                    get: function() {
                        return null;
                    }
                },
                IsValidAppId: {
                    get: function() {
                        return Bridge.getDefaultValue(System.Boolean);
                    }
                },
                ChannelUrl: {
                    get: function() {
                        return null;
                    }
                },
                Instance: {
                    get: function() {
                        return null;
                    }
                },
                NullableInstance: {
                    get: function() {
                        return null;
                    }
                }
            },
            ctors: {
                init: function() {
                    this.FacebookSettingsAssetName = "";
                    this.FacebookSettingsPath = "";
                    this.FacebookSettingsAssetExtension = "";
                }
            },
            methods: {
                /*Facebook.Unity.Settings.FacebookSettings.RegisterChangeEventCallback:static start.*/
                RegisterChangeEventCallback: function(callback) {},
                /*Facebook.Unity.Settings.FacebookSettings.RegisterChangeEventCallback:static end.*/

                /*Facebook.Unity.Settings.FacebookSettings.UnregisterChangeEventCallback:static start.*/
                UnregisterChangeEventCallback: function(callback) {},
                /*Facebook.Unity.Settings.FacebookSettings.UnregisterChangeEventCallback:static end.*/


            }
        }
    });
    /*Facebook.Unity.Settings.FacebookSettings end.*/

    /*Facebook.Unity.Settings.FacebookSettings+UrlSchemes start.*/
    Bridge.define("Facebook.Unity.Settings.FacebookSettings.UrlSchemes", {
        $kind: "nested class",
        fields: {
            Schemes: null
        },
        ctors: {
            ctor: function(schemes) {
                this.$initialize();
            }
        }
    });
    /*Facebook.Unity.Settings.FacebookSettings+UrlSchemes end.*/

    /*Facebook.Unity.ShareDialogMode start.*/
    Bridge.define("Facebook.Unity.ShareDialogMode", {
        $kind: "enum",
        statics: {
            fields: {
                AUTOMATIC: 0,
                NATIVE: 1,
                WEB: 2,
                FEED: 3
            }
        }
    });
    /*Facebook.Unity.ShareDialogMode end.*/

    /*Facebook.Unity.Utilities start.*/
    Bridge.define("Facebook.Unity.Utilities", {
        statics: {
            props: {
                CommandLineArguments: {
                    get: function() {
                        return null;
                    }
                }
            },
            methods: {
                /*Facebook.Unity.Utilities.TryGetValue:static start.*/
                TryGetValue: function(T, dictionary, key, value) {
                    value.v = Bridge.getDefaultValue(T);

                    return Bridge.getDefaultValue(System.Boolean);
                },
                /*Facebook.Unity.Utilities.TryGetValue:static end.*/

                /*Facebook.Unity.Utilities.TotalSeconds:static start.*/
                TotalSeconds: function(dateTime) {
                    return Bridge.getDefaultValue(System.Int64);
                },
                /*Facebook.Unity.Utilities.TotalSeconds:static end.*/

                /*Facebook.Unity.Utilities.GetValueOrDefault:static start.*/
                GetValueOrDefault: function(T, dictionary, key, logWarning) {
                    return Bridge.getDefaultValue(T);
                },
                /*Facebook.Unity.Utilities.GetValueOrDefault:static end.*/

                /*Facebook.Unity.Utilities.ToCommaSeparateList:static start.*/
                ToCommaSeparateList: function(list) {
                    return null;
                },
                /*Facebook.Unity.Utilities.ToCommaSeparateList:static end.*/

                /*Facebook.Unity.Utilities.AbsoluteUrlOrEmptyString:static start.*/
                AbsoluteUrlOrEmptyString: function(uri) {
                    return null;
                },
                /*Facebook.Unity.Utilities.AbsoluteUrlOrEmptyString:static end.*/

                /*Facebook.Unity.Utilities.GetUserAgent:static start.*/
                GetUserAgent: function(productName, productVersion) {
                    return null;
                },
                /*Facebook.Unity.Utilities.GetUserAgent:static end.*/

                /*Facebook.Unity.Utilities.ToJson:static start.*/
                ToJson: function(dictionary) {
                    return null;
                },
                /*Facebook.Unity.Utilities.ToJson:static end.*/

                /*Facebook.Unity.Utilities.AddAllKVPFrom:static start.*/
                AddAllKVPFrom: function(T1, T2, dest, source) {},
                /*Facebook.Unity.Utilities.AddAllKVPFrom:static end.*/

                /*Facebook.Unity.Utilities.ParseAccessTokenFromResult:static start.*/
                ParseAccessTokenFromResult: function(resultDictionary) {
                    return null;
                },
                /*Facebook.Unity.Utilities.ParseAccessTokenFromResult:static end.*/

                /*Facebook.Unity.Utilities.ParseAuthenticationTokenFromResult:static start.*/
                ParseAuthenticationTokenFromResult: function(resultDictionary) {
                    return null;
                },
                /*Facebook.Unity.Utilities.ParseAuthenticationTokenFromResult:static end.*/

                /*Facebook.Unity.Utilities.ToStringNullOk:static start.*/
                ToStringNullOk: function(obj) {
                    return null;
                },
                /*Facebook.Unity.Utilities.ToStringNullOk:static end.*/

                /*Facebook.Unity.Utilities.FormatToString:static start.*/
                FormatToString: function(baseString, className, propertiesAndValues) {
                    return null;
                },
                /*Facebook.Unity.Utilities.FormatToString:static end.*/

                /*Facebook.Unity.Utilities.ParseCatalogFromResult:static start.*/
                ParseCatalogFromResult: function(resultDictionary) {
                    return null;
                },
                /*Facebook.Unity.Utilities.ParseCatalogFromResult:static end.*/

                /*Facebook.Unity.Utilities.ParsePurchasesFromResult:static start.*/
                ParsePurchasesFromResult: function(resultDictionary) {
                    return null;
                },
                /*Facebook.Unity.Utilities.ParsePurchasesFromResult:static end.*/

                /*Facebook.Unity.Utilities.ParsePurchaseFromResult:static start.*/
                ParsePurchaseFromResult: function(resultDictionary) {
                    return null;
                },
                /*Facebook.Unity.Utilities.ParsePurchaseFromResult:static end.*/

                /*Facebook.Unity.Utilities.ParseStringDictionaryFromString:static start.*/
                ParseStringDictionaryFromString: function(input) {
                    return null;
                },
                /*Facebook.Unity.Utilities.ParseStringDictionaryFromString:static end.*/

                /*Facebook.Unity.Utilities.ParseInnerStringDictionary:static start.*/
                ParseInnerStringDictionary: function(resultDictionary, key) {
                    return null;
                },
                /*Facebook.Unity.Utilities.ParseInnerStringDictionary:static end.*/

                /*Facebook.Unity.Utilities.FromTimestamp:static start.*/
                FromTimestamp: function(timestamp) {
                    return Bridge.getDefaultValue(System.DateTime);
                },
                /*Facebook.Unity.Utilities.FromTimestamp:static end.*/


            }
        }
    });
    /*Facebook.Unity.Utilities end.*/

    /*FacebookGames.PipePacket start.*/
    Bridge.define("FacebookGames.PipePacket", {
        statics: {
            methods: {
                /*FacebookGames.PipePacket.GetMessageType:static start.*/
                GetMessageType: function(message) {
                    return null;
                },
                /*FacebookGames.PipePacket.GetMessageType:static end.*/

                /*FacebookGames.PipePacket.Deserialize:static start.*/
                Deserialize: function(T, message) {
                    return null;
                },
                /*FacebookGames.PipePacket.Deserialize:static end.*/


            }
        },
        methods: {
            /*FacebookGames.PipePacket.Serialize start.*/
            Serialize: function() {
                return null;
            },
            /*FacebookGames.PipePacket.Serialize end.*/


        }
    });
    /*FacebookGames.PipePacket end.*/

    /*FacebookGames.NamedPipeStream start.*/
    Bridge.define("FacebookGames.NamedPipeStream", {
        inherits: [System.IO.Stream],
        statics: {
            methods: {
                /*FacebookGames.NamedPipeStream.ConvertStringSecurityDescriptorToSecurityDescriptor:static start.*/
                ConvertStringSecurityDescriptorToSecurityDescriptor: function(StringSecurityDescriptor, StringSDRevision, SecurityDescriptor, SecurityDescriptorSize) {
                    return Bridge.getDefaultValue(System.Boolean);
                },
                /*FacebookGames.NamedPipeStream.ConvertStringSecurityDescriptorToSecurityDescriptor:static end.*/

                /*FacebookGames.NamedPipeStream.Create:static start.*/
                Create: function(pipeName, mode, lowIntegrity, maxInstances, outBufferSize, inBufferSize, timeout) {
                    return null;
                },
                /*FacebookGames.NamedPipeStream.Create:static end.*/


            }
        },
        fields: {
            Position: System.Int64(0)
        },
        props: {
            IsConnected: {
                get: function() {
                    return Bridge.getDefaultValue(System.Boolean);
                }
            },
            WasOperationAborted: {
                get: function() {
                    return Bridge.getDefaultValue(System.Boolean);
                }
            },
            IsMessageComplete: {
                get: function() {
                    return Bridge.getDefaultValue(System.Boolean);
                }
            },
            DataAvailable: {
                get: function() {
                    return Bridge.getDefaultValue(System.Boolean);
                }
            },
            CanRead: {
                get: function() {
                    return Bridge.getDefaultValue(System.Boolean);
                }
            },
            CanWrite: {
                get: function() {
                    return Bridge.getDefaultValue(System.Boolean);
                }
            },
            CanSeek: {
                get: function() {
                    return Bridge.getDefaultValue(System.Boolean);
                }
            },
            Length: {
                get: function() {
                    return Bridge.getDefaultValue(System.Int64);
                }
            }
        },
        ctors: {
            $ctor1: function(pipename, mode) {
                this.$initialize();
                System.IO.Stream.ctor.call(this);
            },
            ctor: function(handle, mode) {
                this.$initialize();
                System.IO.Stream.ctor.call(this);
            }
        },
        methods: {
            /*FacebookGames.NamedPipeStream.Open start.*/
            Open: function(pipename, mode) {},
            /*FacebookGames.NamedPipeStream.Open end.*/

            /*FacebookGames.NamedPipeStream.Listen start.*/
            Listen: function() {
                return Bridge.getDefaultValue(System.Boolean);
            },
            /*FacebookGames.NamedPipeStream.Listen end.*/

            /*FacebookGames.NamedPipeStream.Disconnect start.*/
            Disconnect: function() {},
            /*FacebookGames.NamedPipeStream.Disconnect end.*/

            /*FacebookGames.NamedPipeStream.Flush start.*/
            Flush: function() {},
            /*FacebookGames.NamedPipeStream.Flush end.*/

            /*FacebookGames.NamedPipeStream.Read start.*/
            Read: function(buffer, offset, count) {
                return Bridge.getDefaultValue(System.Int32);
            },
            /*FacebookGames.NamedPipeStream.Read end.*/

            /*FacebookGames.NamedPipeStream.Close start.*/
            Close: function() {},
            /*FacebookGames.NamedPipeStream.Close end.*/

            /*FacebookGames.NamedPipeStream.SetLength start.*/
            SetLength: function(length) {},
            /*FacebookGames.NamedPipeStream.SetLength end.*/

            /*FacebookGames.NamedPipeStream.Write start.*/
            Write: function(buffer, offset, count) {},
            /*FacebookGames.NamedPipeStream.Write end.*/

            /*FacebookGames.NamedPipeStream.Seek start.*/
            Seek: function(offset, origin) {
                return Bridge.getDefaultValue(System.Int64);
            },
            /*FacebookGames.NamedPipeStream.Seek end.*/


        }
    });
    /*FacebookGames.NamedPipeStream end.*/

    /*FacebookGames.NamedPipeStream+PeerType start.*/
    Bridge.define("FacebookGames.NamedPipeStream.PeerType", {
        $kind: "nested enum",
        statics: {
            fields: {
                Client: 0,
                Server: 1
            }
        }
    });
    /*FacebookGames.NamedPipeStream+PeerType end.*/

    /*FacebookGames.NamedPipeStream+SECURITY_ATTRIBUTES start.*/
    Bridge.define("FacebookGames.NamedPipeStream.SECURITY_ATTRIBUTES", {
        $kind: "nested class",
        fields: {
            nLength: 0,
            lpSecurityDescriptor: null,
            bInheritHandle: 0
        },
        ctors: {
            init: function() {
                this.lpSecurityDescriptor = new System.IntPtr();
            }
        }
    });
    /*FacebookGames.NamedPipeStream+SECURITY_ATTRIBUTES end.*/

    /*FacebookGames.NamedPipeStream+ServerMode start.*/
    Bridge.define("FacebookGames.NamedPipeStream.ServerMode", {
        $kind: "nested enum",
        statics: {
            fields: {
                InboundOnly: 0,
                OutboundOnly: 1,
                Bidirectional: 2
            }
        }
    });
    /*FacebookGames.NamedPipeStream+ServerMode end.*/

    /*FacebookGames.PipeCommunicationHelper start.*/
    Bridge.define("FacebookGames.PipeCommunicationHelper", {
        statics: {
            methods: {
                /*FacebookGames.PipeCommunicationHelper.SendPacket:static start.*/
                SendPacket: function(stream, packet) {},
                /*FacebookGames.PipeCommunicationHelper.SendPacket:static end.*/

                /*FacebookGames.PipeCommunicationHelper.ReadPacket:static start.*/
                ReadPacket: function(T, stream) {
                    return null;
                },
                /*FacebookGames.PipeCommunicationHelper.ReadPacket:static end.*/

                /*FacebookGames.PipeCommunicationHelper.ReadPacketMessage:static start.*/
                ReadPacketMessage: function(stream) {
                    return null;
                },
                /*FacebookGames.PipeCommunicationHelper.ReadPacketMessage:static end.*/


            }
        }
    });
    /*FacebookGames.PipeCommunicationHelper end.*/

    /*FacebookPlatformServiceClient.FacebookNamedPipeClient start.*/
    Bridge.define("FacebookPlatformServiceClient.FacebookNamedPipeClient");
    /*FacebookPlatformServiceClient.FacebookNamedPipeClient end.*/

    /*GameManager start.*/
    Bridge.define("GameManager", {
        inherits: [UnityEngine.MonoBehaviour],
        statics: {
            fields: {
                Instance: null
            }
        },
        fields: {
            fxWin: null,
            IsWin: false,
            IsWait: false,
            isInGame: false
        },
        ctors: {
            init: function() {
                this.IsWin = false;
                this.IsWait = true;
                this.isInGame = false;
            }
        },
        methods: {
            /*GameManager.Awake start.*/
            Awake: function() {
                GameManager.Instance = this;
                //init fbinstant
                FBInstantManager.getInstance().SetCbOnStart(this.onInitGame);
            },
            /*GameManager.Awake end.*/

            /*GameManager.onInitGame start.*/
            onInitGame: function() {
                GameRes.initData();
            },
            /*GameManager.onInitGame end.*/

            /*GameManager.onStartGame start.*/
            onStartGame: function() {
                xgame.sdk.AdsHelper.Instance.loadFull4ThisTurn();
                xgame.sdk.AdsHelper.Instance.loadGift4ThisTurn();
                LevelManager.Instance.OnStartGame();
                SoundManager.Instance.PlayMusic();
                MainMenu.Instance.hiddenLoadingGame();
            },
            /*GameManager.onStartGame end.*/

            /*GameManager.onDataLoaded start.*/
            onDataLoaded: function() {
                this.onStartGame();
            },
            /*GameManager.onDataLoaded end.*/

            /*GameManager.Start start.*/
            Start: function() {
                var num = UnityEngine.Screen.height / UnityEngine.Screen.width;
                if (num > 1.8) {
                    //Debug.Log("mysdk: gameplay screen soze w=" + Screen.width + ", h="+ Screen.height);
                    // Debug.Log("mysdk: gameplay memscreen soze w=" + SdkUtil.screenWith + ", h="+ SdkUtil.screenHight);
                    UnityEngine.Camera.main.orthographicSize = UnityEngine.Camera.main.orthographicSize * UnityEngine.Screen.height / 1280.0 / (UnityEngine.Screen.width / 720.0);
                }
                var screenRatio = (((Bridge.Int.div(UnityEngine.Screen.width, UnityEngine.Screen.height)) | 0));
                if (screenRatio >= 1) {
                    UnityEngine.Camera.main.orthographicSize = 4;
                    UnityEngine.Camera.main.transform.position = new pc.Vec3(UnityEngine.Camera.main.transform.position.x, 9.0, UnityEngine.Camera.main.transform.position.z);
                }

            },
            /*GameManager.Start end.*/

            /*GameManager.OnWin start.*/
            OnWin: function() {
                xgame.sdk.AdsHelper.Instance.showFull(null);
                this.fxWin.SetActive(true);
                SoundManager.Instance.PlayOneShot("FinishWinApplause");
                MainMenu.Instance.ShowWin();
                GameRes.Level = (GameRes.Level + 1) | 0;
                GameRes.saveDataByKeys(System.Array.init([GameRes.KEY_CURR_LEVEL], System.String));
            },
            /*GameManager.OnWin end.*/

            /*GameManager.HideWinFx start.*/
            HideWinFx: function() {
                this.fxWin.SetActive(false);
            },
            /*GameManager.HideWinFx end.*/

            /*GameManager.NextLevel start.*/
            NextLevel: function() {
                SoundManager.Instance.StopAllSound();
                this.IsWin = false;
                LevelManager.Instance.LoadLevel(GameRes.Level);
                LevelManager.Instance.isAddTube = false;
            },
            /*GameManager.NextLevel end.*/


        }
    });
    /*GameManager end.*/

    /*GameRes start.*/
    Bridge.define("GameRes", {
        statics: {
            fields: {
                KEY_BACK_STEP: null,
                KEY_CURR_TUBE_ID: null,
                KEY_CURR_LEVEL: null,
                KEY_SOUND_ON: null,
                KEY_MUSIC_ON: null,
                mDictionaryData: null,
                BackStep: 0,
                CurrentTubeId: 0,
                _level: 0,
                _soundOn: false,
                _musicOn: false
            },
            props: {
                Level: {
                    get: function() {
                        return GameRes._level;
                    },
                    set: function(value) {
                        GameRes._level = value;
                        GameRes.mDictionaryData.setItem(GameRes.KEY_CURR_LEVEL, Bridge.box(value, System.Int32));
                    }
                },
                SoundOn: {
                    get: function() {
                        return GameRes._soundOn;
                    },
                    set: function(value) {
                        GameRes._soundOn = value;
                        GameRes.mDictionaryData.setItem(GameRes.KEY_SOUND_ON, Bridge.box((value ? 1 : 0), System.Int32));
                    }
                },
                MusicOn: {
                    get: function() {
                        return GameRes._musicOn;
                    },
                    set: function(value) {
                        GameRes._musicOn = value;
                        GameRes.mDictionaryData.setItem(GameRes.KEY_MUSIC_ON, Bridge.box((value ? 1 : 0), System.Int32));
                    }
                }
            },
            ctors: {
                init: function() {
                    this.KEY_BACK_STEP = "key_BackStep";
                    this.KEY_CURR_TUBE_ID = "key_CurrentTubeId";
                    this.KEY_CURR_LEVEL = "key_CurrentLevel";
                    this.KEY_SOUND_ON = "key_Sound";
                    this.KEY_MUSIC_ON = "key_Music";
                    this.BackStep = 5;
                    this.CurrentTubeId = 1;
                    this._level = 1;
                    this._soundOn = true;
                    this._musicOn = true;
                }
            },
            methods: {
                /*GameRes.initData:static start.*/
                initData: function() {

                    GameRes.mDictionaryData = new(System.Collections.Generic.Dictionary$2(System.String, System.Object)).ctor();
                    GameRes.mDictionaryData.add(GameRes.KEY_CURR_LEVEL, Bridge.box(GameRes.Level, System.Int32));
                    GameRes.mDictionaryData.add(GameRes.KEY_SOUND_ON, Bridge.box((GameRes.SoundOn ? 1 : 0), System.Int32));
                    GameRes.mDictionaryData.add(GameRes.KEY_MUSIC_ON, Bridge.box((GameRes.MusicOn ? 1 : 0), System.Int32));

                    var arrKeyNum = System.Array.init(GameRes.mDictionaryData.Count, null, System.String);
                    GameRes.mDictionaryData.Keys.copyTo(arrKeyNum, 0);

                    var arrValNum = System.Array.init(GameRes.mDictionaryData.Count, null, System.Object);
                    GameRes.mDictionaryData.Values.copyTo(arrValNum, 0);

                    GameRes.loadAllData(arrKeyNum, arrValNum, function(resultValues) {
                        if (arrKeyNum.length === arrKeyNum.length && arrKeyNum.length === GameRes.mDictionaryData.Count) {
                            for (var i = 0; i < arrKeyNum.length; i = (i + 1) | 0) {
                                GameRes.mDictionaryData.setItem(arrKeyNum[i], resultValues[i]);
                            }

                            GameRes.Level = System.Nullable.getValue(Bridge.cast(Bridge.unbox(GameRes.mDictionaryData.getItem(GameRes.KEY_CURR_LEVEL), System.Int32), System.Int32));
                            GameRes.SoundOn = (System.Nullable.getValue(Bridge.cast(Bridge.unbox(GameRes.mDictionaryData.getItem(GameRes.KEY_SOUND_ON), System.Int32), System.Int32)) > 0);
                            GameRes.MusicOn = (System.Nullable.getValue(Bridge.cast(Bridge.unbox(GameRes.mDictionaryData.getItem(GameRes.KEY_MUSIC_ON), System.Int32), System.Int32)) > 0);

                            GameRes.loadDataOk();
                        }

                    }, GameRes.loadDataOk);

                },
                /*GameRes.initData:static end.*/

                /*GameRes.loadAllData:static start.*/
                loadAllData: function(arrKey, arrVal, cb, cbFailed) {
                    FBInstantDataHelper.getAllData(arrKey, arrVal, cb, cbFailed);
                },
                /*GameRes.loadAllData:static end.*/

                /*GameRes.saveDataByKeys:static start.*/
                saveDataByKeys: function(arrKey) {
                    if (arrKey == null) {
                        return;
                    } else if (arrKey.length < 1) {
                        return;
                    }

                    var arrVal = System.Array.init(arrKey.length, 0, System.Int32);

                    for (var i = 0; i < arrKey.length; i = (i + 1) | 0) {
                        if (GameRes.mDictionaryData.containsKey(arrKey[i])) {
                            arrVal[i] = System.Nullable.getValue(Bridge.cast(Bridge.unbox(GameRes.mDictionaryData.getItem(arrKey[i]), System.Int32), System.Int32));
                        } else {
                            return;
                        }
                    }
                    if (arrVal.length < 1) {
                        return;
                    }
                    FBInstantDataHelper.setAllData(arrKey, arrVal, null);
                },
                /*GameRes.saveDataByKeys:static end.*/

                /*GameRes.loadDataOk:static start.*/
                loadDataOk: function() {
                    GameManager.Instance.onDataLoaded();
                },
                /*GameRes.loadDataOk:static end.*/

                /*GameRes.setLevel:static start.*/
                setLevel: function(value) {
                    GameRes.Level = value;
                    GameRes.mDictionaryData.setItem(GameRes.KEY_CURR_LEVEL, Bridge.box(value, System.Int32));
                },
                /*GameRes.setLevel:static end.*/


            }
        }
    });
    /*GameRes end.*/

    /*GenerateLevel start.*/
    Bridge.define("GenerateLevel", {
        statics: {
            methods: {
                /*GenerateLevel.GenerateData:static start.*/
                GenerateData: function(level, id) {
                    var $t, $t1;
                    var colorCount = 0;
                    var tubeCount = 0;
                    var moveCount = UnityEngine.Random.Range(200, 350);
                    switch (id) {
                        case 1:
                            colorCount = UnityEngine.Random.Range(3, 4);
                            tubeCount = (colorCount + 3) | 0;
                            break;
                        case 2:
                            colorCount = UnityEngine.Random.Range(3, 7);
                            tubeCount = (colorCount + 3) | 0;
                            break;
                        case 3:
                            colorCount = UnityEngine.Random.Range(3, 9);
                            tubeCount = (colorCount + 2) | 0;
                            break;
                        case 4:
                            colorCount = UnityEngine.Random.Range(8, 11);
                            tubeCount = (colorCount + UnityEngine.Random.Range(1, 3)) | 0;
                            break;
                        case 5:
                            colorCount = UnityEngine.Random.Range(11, 15);
                            tubeCount = (colorCount + UnityEngine.Random.Range(1, 3)) | 0;
                            break;
                        default:
                            colorCount = UnityEngine.Random.Range(3, 4);
                            tubeCount = (colorCount + 3) | 0;
                            break;
                    }

                    // Debug.LogError("moveCount: " + moveCount);
                    // Debug.LogError("colorCount: " + colorCount);
                    // Debug.LogError("tubeCount: " + tubeCount);
                    var lColors = new(System.Collections.Generic.List$1(System.Int32)).ctor();
                    var lTubes = System.Array.init(tubeCount, 0, System.Int32);
                    var k = 0;
                    for (var i = 0; i < colorCount; i = (i + 1) | 0) {
                        var color = UnityEngine.Random.Range(1, 15);
                        while (lColors.contains(color)) {
                            color = UnityEngine.Random.Range(1, 15);
                        }

                        lColors.add(color);
                        var tube = UnityEngine.Random.Range(0, tubeCount);
                        while (lTubes[tube] !== 0) {
                            tube = UnityEngine.Random.Range(0, tubeCount);
                        }

                        lTubes[tube] = color;
                    }
                    var lNones = new(System.Collections.Generic.List$1(System.Int32)).ctor();
                    for (var i1 = 0; i1 < tubeCount; i1 = (i1 + 1) | 0) {
                        if (lTubes[i1] === 0) {
                            lNones.add(i1);
                        }
                    }

                    var data = new LevelData(tubeCount);
                    for (var i2 = 0; i2 < data.data.length; i2 = (i2 + 1) | 0) {
                        var items = System.Array.init([lTubes[i2], lTubes[i2], lTubes[i2], lTubes[i2]], System.Int32);
                        data.data[i2] = ($t = new Data(), $t._items = items, $t);
                        data.requireData[i2] = ($t = new Data(), $t._items = System.Array.init(4, 0, System.Int32), $t);
                    }

                    for (var i3 = 0; i3 < tubeCount; i3 = (i3 + 1) | 0) {
                        var last = GenerateLevel.GetLastItem(data.data[i3]._items);
                        var index2 = lNones.getItem(UnityEngine.Random.Range(0, lNones.Count));
                        while (!GenerateLevel.CheckFill(data.data[index2]._items, last)) {
                            if (k > 100) {
                                break;
                            }
                            k = (k + 1) | 0;
                            index2 = UnityEngine.Random.Range(0, tubeCount);
                        }

                        k = 0;
                        if (GenerateLevel.CheckFill(data.data[index2]._items, last)) {
                            GenerateLevel.SendColor(data, i3, index2, last);
                        }
                    }

                    for (var i4 = 0; i4 < tubeCount; i4 = (i4 + 1) | 0) {
                        var last1 = GenerateLevel.GetLastItem(data.data[i4]._items);
                        var index21 = lNones.getItem(UnityEngine.Random.Range(0, lNones.Count));
                        while (!GenerateLevel.CheckFill(data.data[index21]._items, last1)) {
                            if (k > 100) {
                                break;
                            }
                            k = (k + 1) | 0;
                            index21 = UnityEngine.Random.Range(0, tubeCount);
                        }
                        k = 0;
                        if (GenerateLevel.CheckFill(data.data[index21]._items, last1)) {
                            GenerateLevel.SendColor(data, i4, index21, last1);
                        }
                    }

                    for (var i5 = 0; i5 < moveCount; i5 = (i5 + 1) | 0) {
                        var index = UnityEngine.Random.Range(0, tubeCount);
                        var last2 = GenerateLevel.GetLastItem(data.data[index]._items);
                        while (last2 === 0) {
                            index = UnityEngine.Random.Range(0, tubeCount);
                            last2 = GenerateLevel.GetLastItem(data.data[index]._items);
                        }

                        var index22 = UnityEngine.Random.Range(0, tubeCount);
                        while (!GenerateLevel.CheckFill(data.data[index22]._items, last2)) {
                            if (k > 100) {
                                break;
                            }
                            k = (k + 1) | 0;
                            index22 = UnityEngine.Random.Range(0, tubeCount);
                        }
                        k = 0;
                        if (GenerateLevel.CheckFill(data.data[index22]._items, last2)) {
                            GenerateLevel.SendColor(data, index, index22, last2);
                        }
                    }

                    for (var j = 0; j < lNones.Count; j = (j + 1) | 0) {
                        for (var i6 = 0; i6 < 4; i6 = (i6 + 1) | 0) {
                            var index1 = UnityEngine.Random.Range(0, tubeCount);
                            var index23 = lNones.getItem(j);
                            var last3 = GenerateLevel.GetLastItem(data.data[index23]._items);
                            if (($t = data.data[index23]._items)[0] === 0) {
                                break;
                            }
                            while (($t1 = data.data[index1]._items)[3] !== 0 || lNones.contains(index1)) {
                                if (k > 100) {
                                    break;
                                }
                                k = (k + 1) | 0;
                                index1 = UnityEngine.Random.Range(0, tubeCount);
                            }
                            k = 0;
                            while (!GenerateLevel.CheckFill(data.data[index1]._items, last3, 2) || lNones.contains(index1)) {
                                if (k > 100) {
                                    break;
                                }
                                k = (k + 1) | 0;
                                index1 = UnityEngine.Random.Range(0, tubeCount);
                                last3 = GenerateLevel.GetLastItem(data.data[index1]._items);
                            }

                            k = 0;
                            if (GenerateLevel.CheckFill(data.data[index1]._items, last3, 2)) {
                                GenerateLevel.SendColor(data, index23, index1, last3);
                            }
                        }
                    }
                    //
                    return data;
                },
                /*GenerateLevel.GenerateData:static end.*/

                /*GenerateLevel.SendColor:static start.*/
                SendColor: function(data, idx1, idx2, color) {
                    var $t, $t1, $t2, $t3;
                    var count = 1;

                    for (var i = 3; i >= 0; i = (i - 1) | 0) {
                        if (($t = data.data[idx1]._items)[i] !== 0) {
                            ($t1 = data.data[idx1]._items)[i] = 0;
                            break;
                        }
                    }

                    for (var i1 = 0; i1 < 4; i1 = (i1 + 1) | 0) {
                        if (($t2 = data.data[idx2]._items)[i1] === 0) {
                            if (count > 0) {
                                count = (count - 1) | 0;
                                ($t3 = data.data[idx2]._items)[i1] = color;
                            } else {
                                break;
                            }
                        }
                    }
                },
                /*GenerateLevel.SendColor:static end.*/

                /*GenerateLevel.CheckFill:static start.*/
                CheckFill: function(colors, color, countCheck) {
                    if (countCheck === void 0) { countCheck = 1; }
                    var count = 1;
                    var c = 0;
                    var pc = 0;
                    for (var i = (colors.length - 1) | 0; i >= 0; i = (i - 1) | 0) {
                        if (colors[i] === 0) {
                            if (count > 0) {
                                count = (count - 1) | 0;
                            }
                        } else {
                            if (pc === 0) {
                                pc = colors[i];
                                c = (c + 1) | 0;
                            } else if (pc === colors[i]) {
                                c = (c + 1) | 0;
                            }
                        }
                    }

                    if (pc === color && c > ((countCheck - 1) | 0)) {
                        return false;
                    }
                    return count === 0;
                },
                /*GenerateLevel.CheckFill:static end.*/

                /*GenerateLevel.GetLastItem:static start.*/
                GetLastItem: function(colors) {
                    for (var i = (colors.length - 1) | 0; i >= 0; i = (i - 1) | 0) {
                        if (colors[i] !== 0) {
                            var id = colors[i];
                            return id;
                        }
                    }

                    return 0;
                },
                /*GenerateLevel.GetLastItem:static end.*/


            }
        }
    });
    /*GenerateLevel end.*/

    /*IAmAnEmptyScriptJustToMakeCodelessProjectsCompileProperty start.*/
    Bridge.define("IAmAnEmptyScriptJustToMakeCodelessProjectsCompileProperty", {
        inherits: [UnityEngine.MonoBehaviour]
    });
    /*IAmAnEmptyScriptJustToMakeCodelessProjectsCompileProperty end.*/

    /*LevelData start.*/
    Bridge.define("LevelData", {
        fields: {
            requireData: null,
            data: null
        },
        ctors: {
            ctor: function(length) {
                this.$initialize();
                this.data = System.Array.init(length, null, Data);
                this.requireData = System.Array.init(length, null, Data);
            }
        }
    });
    /*LevelData end.*/

    /*LevelData2 start.*/
    Bridge.define("LevelData2", {
        fields: {
            requireData: null,
            data: null
        }
    });
    /*LevelData2 end.*/

    /*LevelManager start.*/
    Bridge.define("LevelManager", {
        inherits: [UnityEngine.MonoBehaviour],
        statics: {
            fields: {
                Instance: null
            }
        },
        fields: {
            tubePrefabs: null,
            tapObj: null,
            TubeColors: null,
            TubeTexture: null,
            layerMask: null,
            selectTube: null,
            tubes: null,
            require: null,
            leveData: null,
            complete: null,
            isMove: false,
            isAddTube: false,
            stepBack: null,
            LevelText: null,
            up: 0,
            level2Steps: 0,
            delayStep: 0,
            posTapFollow: null,
            tubeRequire: 0,
            colorCount: 0,
            StepCount: 0,
            currentColor: null,
            completeTube: 0,
            mDicTubeColor: null,
            direct: 0
        },
        ctors: {
            init: function() {
                this.layerMask = new UnityEngine.LayerMask();
                this.posTapFollow = new UnityEngine.Vector3();
                this.complete = new(System.Collections.Generic.List$1(System.String)).ctor();
                this.up = 0.35;
                this.level2Steps = 1;
                this.delayStep = -1;
                this.posTapFollow = new pc.Vec3(0, -1.75, 0);
            }
        },
        methods: {
            /*LevelManager.Awake start.*/
            Awake: function() {
                LevelManager.Instance = this;
            },
            /*LevelManager.Awake end.*/

            /*LevelManager.OnStartGame start.*/
            OnStartGame: function() {
                //FB.AppId
                this.LoadLevel(GameRes.Level);
                this.stepBack.text = "+" + GameRes.BackStep;
                this.LevelText.text = "LEVEL " + (Bridge.toString(GameRes.Level) || "");
            },
            /*LevelManager.OnStartGame end.*/

            /*LevelManager.AddTube start.*/
            AddTube: function() {
                if (!this.isAddTube && GameRes.Level > 2 && this.tubes.Count >= 3) {
                    var tube = UnityEngine.Object.Instantiate(Tube, this.tubePrefabs[((GameRes.CurrentTubeId - 1) | 0)], this.transform.GetChild(0));
                    tube.idTube = this.leveData.data.length;
                    tube.transform.GetChild(0).GetChild(0).GetComponent(UnityEngine.MeshRenderer).material.SetFloat$1("_FillAmount", 0);
                    tube.Init();
                    this.tubes.add(tube);
                    this.tubeRequire = this.tubes.Count;

                    for (var i = 1; i <= this.StepCount; i = (i + 1) | 0) {
                        this.CacheAllTube(tube.idTube, i, tube);
                    }

                    for (var i1 = 0; i1 < this.tubes.Count; i1 = (i1 + 1) | 0) {
                        this.colorCount = 0;
                        for (var j = 0; j < 4; j = (j + 1) | 0) {
                            if (tube.tubeColors[j] === 0) {
                                this.colorCount = (this.colorCount + 1) | 0;
                            }
                        }
                        if (this.colorCount === 4) {
                            this.tubeRequire = (this.tubeRequire - 1) | 0;
                        }
                    }
                    this.isAddTube = true;
                    this.SetPositionTubeAdd(tube, tube.idTube);
                    //for (int i = 0; i < tubes.Count; i++)
                    //{
                    //    var y = 0f;
                    //    if ((tubes.Count - 1) / 4 == 0)
                    //    {
                    //        y = 1 * 1.95f + 0.5f;
                    //    }
                    //    else if ((tubes.Count - 1) / 4 == 1)
                    //    {
                    //        y = (i < 4 ? 0.75f : 1.75f) * 1.95f - 0.2f;
                    //    }
                    //    else
                    //    {
                    //        y = i / 4 * (i / 4 == 2 ? 1.7f : 1.85f) + 0.5f;
                    //    }

                    //    if (i >= (tubes.Count / 4) * 4 && tubes.Count % 4 < 4)
                    //    {
                    //        tube.transform.localPosition =
                    //            new Vector3((i % (tubes.Count % 4)) * 1.75f + (4 - tubes.Count % 4) - .35f, y,
                    //                (i / 4) * 1);

                    //        tubes[i].transform.localPosition =
                    //            new Vector3((i % (tubes.Count % 4)) * 1.75f + (4 - tubes.Count % 4) - .35f, y,
                    //                (i / 4) * 1);
                    //    }
                    //    else
                    //    {
                    //        tube.transform.localPosition = new Vector3((i % 4) * 1.75f, y, (i / 4) * 1);
                    //        tubes[i].transform.localPosition = new Vector3((i % 4) * 1.75f, y, (i / 4) * 1);
                    //    }
                    //}
                }
            },
            /*LevelManager.AddTube end.*/

            /*LevelManager.SetPositionTubeAdd start.*/
            SetPositionTubeAdd: function(tub, i) {
                var y = 0.0;
                var x = 0.0;
                var z = 0.0;
                if (this.tubes.Count % 4 === 0 && ((Bridge.Int.div(this.tubes.Count, 4)) | 0) === 1) {
                    x = this.tubes.getItem(((i - 1) | 0)).transform.localPosition.x + 1.75;
                    y = this.tubes.getItem(((i - 1) | 0)).transform.localPosition.y;
                    z = 0;
                    tub.transform.localPosition = new pc.Vec3(x, y, z);
                    for (var j = 0; j < this.tubes.Count; j = (j + 1) | 0) {
                        this.tubes.getItem(j).transform.localPosition = this.tubes.getItem(j).transform.localPosition.$clone().sub(new pc.Vec3(0.75, 0.0, 0.0));
                    }
                } else if (this.tubes.Count % 4 === 1 || this.tubes.Count % 8 === 1 || this.tubes.Count % 12 === 1) {
                    x = (this.tubes.getItem(1).transform.localPosition.x + this.tubes.getItem(2).transform.localPosition.x) / 2;
                    if (((Bridge.Int.div(this.tubes.Count, 4)) | 0) === 1) {
                        y = this.tubes.getItem(0).transform.localPosition.y + 1.8;
                        z = 1;
                    } else if (((Bridge.Int.div(this.tubes.Count, 4)) | 0) === 2) {
                        y = this.tubes.getItem(0).transform.localPosition.y + 3.6;
                        z = 2;
                    } else if (((Bridge.Int.div(this.tubes.Count, 4)) | 0) === 3) {
                        y = this.tubes.getItem(0).transform.localPosition.y + 5.39999962;
                        z = 3;
                    }

                    tub.transform.localPosition = new pc.Vec3(x, y, z);
                    for (var j1 = 0; j1 < this.tubes.Count; j1 = (j1 + 1) | 0) {
                        this.tubes.getItem(j1).transform.localPosition = this.tubes.getItem(j1).transform.localPosition.$clone().sub(new pc.Vec3(0, 0.8, 0));
                    }

                } else if ((this.tubes.Count % 4 === 2 || this.tubes.Count % 8 === 2 || this.tubes.Count % 12 === 2)) {
                    x = this.tubes.getItem(((this.tubes.Count - 2) | 0)).transform.localPosition.x + 1.75;
                    y = this.tubes.getItem(((this.tubes.Count - 2) | 0)).transform.localPosition.y;
                    tub.transform.localPosition = new pc.Vec3(x, y, (((Bridge.Int.div(this.tubes.Count, 4)) | 0) === 1) ? 1 : (((Bridge.Int.div(this.tubes.Count, 4)) | 0) === 2) ? 2 : 3);

                    var distance = this.tubes.getItem(2).transform.localPosition.x - x;

                    this.tubes.getItem(((this.tubes.Count - 2) | 0)).transform.localPosition = this.tubes.getItem(((this.tubes.Count - 2) | 0)).transform.localPosition.$clone().add(new pc.Vec3(distance, 0, 0));
                    this.tubes.getItem(((this.tubes.Count - 1) | 0)).transform.localPosition = this.tubes.getItem(((this.tubes.Count - 1) | 0)).transform.localPosition.$clone().add(new pc.Vec3(distance, 0, 0));
                } else if (this.tubes.Count % 4 === 3 || this.tubes.Count % 8 === 3 || this.tubes.Count % 12 === 3) {
                    x = this.tubes.getItem(((this.tubes.Count - 2) | 0)).transform.localPosition.x + 1.75;
                    y = this.tubes.getItem(((this.tubes.Count - 2) | 0)).transform.localPosition.y;
                    tub.transform.localPosition = new pc.Vec3(x, y, (((Bridge.Int.div(this.tubes.Count, 4)) | 0) === 1) ? 1 : (((Bridge.Int.div(this.tubes.Count, 4)) | 0) === 2) ? 2 : 3);

                    var distance1 = (this.tubes.getItem(2).transform.localPosition.x - x) / 2;

                    this.tubes.getItem(((this.tubes.Count - 3) | 0)).transform.localPosition = this.tubes.getItem(((this.tubes.Count - 3) | 0)).transform.localPosition.$clone().add(new pc.Vec3(distance1, 0, 0));
                    this.tubes.getItem(((this.tubes.Count - 2) | 0)).transform.localPosition = this.tubes.getItem(((this.tubes.Count - 2) | 0)).transform.localPosition.$clone().add(new pc.Vec3(distance1, 0, 0));
                    this.tubes.getItem(((this.tubes.Count - 1) | 0)).transform.localPosition = this.tubes.getItem(((this.tubes.Count - 1) | 0)).transform.localPosition.$clone().add(new pc.Vec3(distance1, 0, 0));

                } else if (this.tubes.Count % 8 === 0 && ((Bridge.Int.div(this.tubes.Count, 4)) | 0) === 2 || this.tubes.Count % 12 === 0 && ((Bridge.Int.div(this.tubes.Count, 4)) | 0) === 3 || this.tubes.Count % 16 === 0 && ((Bridge.Int.div(this.tubes.Count, 4)) | 0) === 4) {
                    this.checkLastTubeInData();
                    var distance2 = 0.0;
                    if (this.direct === -1) {
                        x = this.tubes.getItem(((this.tubes.Count - 2) | 0)).transform.localPosition.x - 1.75;
                        y = this.tubes.getItem(((this.tubes.Count - 2) | 0)).transform.localPosition.y;
                        tub.transform.localPosition = new pc.Vec3(x, y, (((Bridge.Int.div(this.tubes.Count, 4)) | 0) === 2) ? 1 : (((Bridge.Int.div(this.tubes.Count, 4)) | 0) === 3) ? 2 : 3);

                        distance2 = this.tubes.getItem(0).transform.localPosition.x - x;
                    } else if (this.direct === 1) {
                        x = this.tubes.getItem(((this.tubes.Count - 2) | 0)).transform.localPosition.x + 1.75;
                        y = this.tubes.getItem(((this.tubes.Count - 2) | 0)).transform.localPosition.y;
                        tub.transform.localPosition = new pc.Vec3(x, y, (((Bridge.Int.div(this.tubes.Count, 4)) | 0) === 2) ? 1 : (((Bridge.Int.div(this.tubes.Count, 4)) | 0) === 3) ? 2 : 3);

                        distance2 = this.tubes.getItem(3).transform.localPosition.x - x;
                    } else if (this.direct === 0) {
                        x = this.tubes.getItem(((this.tubes.Count - 3) | 0)).transform.localPosition.x - 1.75;
                        y = this.tubes.getItem(((this.tubes.Count - 3) | 0)).transform.localPosition.y;
                        tub.transform.localPosition = new pc.Vec3(x, y, (((Bridge.Int.div(this.tubes.Count, 4)) | 0) === 2) ? 1 : (((Bridge.Int.div(this.tubes.Count, 4)) | 0) === 3) ? 2 : 3);

                        distance2 = this.tubes.getItem(0).transform.localPosition.x - x;
                    }

                    this.tubes.getItem(((this.tubes.Count - 4) | 0)).transform.localPosition = this.tubes.getItem(((this.tubes.Count - 4) | 0)).transform.localPosition.$clone().add(new pc.Vec3(distance2, 0, 0));
                    this.tubes.getItem(((this.tubes.Count - 3) | 0)).transform.localPosition = this.tubes.getItem(((this.tubes.Count - 3) | 0)).transform.localPosition.$clone().add(new pc.Vec3(distance2, 0, 0));
                    this.tubes.getItem(((this.tubes.Count - 2) | 0)).transform.localPosition = this.tubes.getItem(((this.tubes.Count - 2) | 0)).transform.localPosition.$clone().add(new pc.Vec3(distance2, 0, 0));
                    this.tubes.getItem(((this.tubes.Count - 1) | 0)).transform.localPosition = this.tubes.getItem(((this.tubes.Count - 1) | 0)).transform.localPosition.$clone().add(new pc.Vec3(distance2, 0, 0));
                }
            },
            /*LevelManager.SetPositionTubeAdd end.*/

            /*LevelManager.checkLastTubeInData start.*/
            checkLastTubeInData: function() {
                if (this.tubes.Count % 8 === 0 && ((Bridge.Int.div(this.tubes.Count, 4)) | 0) === 2 || this.tubes.Count % 12 === 0 && ((Bridge.Int.div(this.tubes.Count, 4)) | 0) === 3 || this.tubes.Count % 16 === 0 && ((Bridge.Int.div(this.tubes.Count, 4)) | 0) === 4) {
                    if (this.tubes.getItem(((this.tubes.Count - 2) | 0)).transform.localPosition.x > this.tubes.getItem(((this.tubes.Count - 3) | 0)).transform.localPosition.x && this.tubes.getItem(((this.tubes.Count - 2) | 0)).transform.localPosition.x > this.tubes.getItem(((this.tubes.Count - 4) | 0)).transform.localPosition.x) {
                        //right
                        this.direct = 1;
                    } else if (this.tubes.getItem(((this.tubes.Count - 2) | 0)).transform.localPosition.x < this.tubes.getItem(((this.tubes.Count - 3) | 0)).transform.localPosition.x && this.tubes.getItem(((this.tubes.Count - 2) | 0)).transform.localPosition.x < this.tubes.getItem(((this.tubes.Count - 4) | 0)).transform.localPosition.x) {
                        //left
                        this.direct = -1;
                    } else {
                        //center
                        this.direct = 0;
                    }
                }
            },
            /*LevelManager.checkLastTubeInData end.*/

            /*LevelManager.LoadLevel start.*/
            LoadLevel: function(lvID) {
                var $t;
                this.LevelText.text = "LEVEL " + (Bridge.toString(GameRes.Level) || "");
                this.level2Steps = 1;
                GameRes.BackStep = 5;
                this.stepBack.text = "+" + GameRes.BackStep;

                if (GameRes.Level <= 2) {
                    this.tapObj.SetActive(true);
                } else {
                    this.tapObj.SetActive(false);
                }

                this.LoadLevelData(lvID);

                this.complete = new(System.Collections.Generic.List$1(System.String)).ctor();
                for (var i = 0; i < this.tubes.Count; i = (i + 1) | 0) {
                    UnityEngine.MonoBehaviour.Destroy(this.tubes.getItem(i).gameObject);
                }
                this.StepCount = 0;
                this.tubeRequire = this.tubes.Count;
                this.selectTube = null;
                this.isMove = false;
                GameManager.Instance.IsWin = false;
                GameManager.Instance.HideWinFx();
                this.tubes = new(System.Collections.Generic.List$1(Tube)).ctor();
                this.require = this.leveData.requireData;
                for (var i1 = 0; i1 < this.leveData.data.length; i1 = (i1 + 1) | 0) {
                    var tube = UnityEngine.Object.Instantiate(Tube, this.tubePrefabs[0], this.transform.GetChild(0));
                    tube.tubeColors = ($t = this.leveData.data)[i1]._items;
                    this.colorCount = 0;
                    this.CacheAllTube(i1, this.StepCount, tube);
                    tube.idTube = i1;
                    var y = 0.0;
                    for (var j = 0; j < 4; j = (j + 1) | 0) {
                        if (tube.tubeColors[j] === 0) {
                            this.colorCount = (this.colorCount + 1) | 0;
                        }
                    }
                    if (this.colorCount === 4) {
                        this.tubeRequire = (this.tubeRequire - 1) | 0;
                    }
                    if (((Bridge.Int.div((((this.leveData.data.length - 1) | 0)), 4)) | 0) === 0) {
                        y = 2.45;
                    } else if (((Bridge.Int.div((((this.leveData.data.length - 1) | 0)), 4)) | 0) === 1) {
                        y = (i1 < 4 ? 0.75 : 1.75) * 1.95 - 0.2;
                    } else {
                        y = ((Bridge.Int.div(i1, 4)) | 0) * (((Bridge.Int.div(i1, 4)) | 0) === 2 ? 1.7 : 1.85) + 0.5;
                    }

                    if (i1 >= Bridge.Int.mul((((Bridge.Int.div(this.leveData.data.length, 4)) | 0)), 4) && this.leveData.data.length % 4 < 4) {
                        tube.transform.localPosition = new pc.Vec3((i1 % (this.leveData.data.length % 4)) * 1.75 + (((4 - this.leveData.data.length % 4) | 0)) - 0.35, y, Bridge.Int.mul((((Bridge.Int.div(i1, 4)) | 0)), 1));
                    } else {
                        tube.transform.localPosition = new pc.Vec3((i1 % 4) * 1.75, y, Bridge.Int.mul((((Bridge.Int.div(i1, 4)) | 0)), 1));
                    }

                    tube.Init();
                    this.tubes.add(tube);
                }
                if (GameRes.Level === 1 && UnityEngine.MonoBehaviour.op_Equality(this.selectTube, null)) {
                    this.tapObj.transform.position = this.tubes.getItem(1).transform.position.$clone().add(this.posTapFollow);
                }
                if (GameRes.Level === 2 && UnityEngine.MonoBehaviour.op_Equality(this.selectTube, null) && this.level2Steps === 1) {
                    this.tapObj.transform.position = this.tubes.getItem(1).transform.position.$clone().add(this.posTapFollow);
                }
            },
            /*LevelManager.LoadLevel end.*/

            /*LevelManager.LoadLevelData start.*/
            LoadLevelData: function(lvID) {
                var fPath = ("" || "") + (System.String.format("/Levels/Level_", null) || "") + lvID + ".txt";
                var text;


                if (UnityEngine.Resources.Load(UnityEngine.TextAsset, (System.String.format("Levels/Level_", null) || "") + lvID) != null) {
                    text = UnityEngine.Resources.Load(UnityEngine.TextAsset, (System.String.format("Levels/Level_", null) || "") + lvID).text;
                    this.leveData = Newtonsoft.Json.JsonConvert.DeserializeObject(text, LevelData);
                } else {

                }


            },
            /*LevelManager.LoadLevelData end.*/

            /*LevelManager.CheckWin start.*/
            CheckWin: function(tube) {
                var $t, $t1, $t2;
                var a = 0;
                var re = System.Array.init(this.require.length, null, System.Array.type(System.Int32));
                var re2 = System.Array.init(this.require.length, 0, System.Int32);
                for (var i = 0; i < this.require.length; i = (i + 1) | 0) {
                    if (this.require[i] != null && this.require[i].getItem(0) !== 0) {
                        re2[i] = (a + 1) | 0;
                        a = (a + 1) | 0;
                    }

                    re[i] = this.require[i]._items;
                }

                var isFaild = false;
                for (var i1 = 0; i1 < this.complete.Count; i1 = (i1 + 1) | 0) {
                    var s = this.complete.getItem(i1);
                    var x = System.Int32.parse(($t = System.String.split(s, [44].map(function(i) {
                        { return String.fromCharCode(i); }
                    })))[0]);
                    var y = System.Int32.parse(($t1 = System.String.split(s, [44].map(function(i) {
                        { return String.fromCharCode(i); }
                    })))[1]);
                    if (!this.tubes.getItem(x).CheckComplete(re[y])) {
                        this.tubes.getItem(x).SetReComplete(-1);
                        this.complete.remove(s);
                    }
                }

                for (var i2 = 0; i2 < this.tubes.Count; i2 = (i2 + 1) | 0) {
                    var c = true;

                    for (var j = 0; j < re.length; j = (j + 1) | 0) {
                        if (re[j] == null || !this.tubes.getItem(i2).CheckComplete(re[j])) {
                            if (j === ((re.length - 1) | 0)) {
                                isFaild = true;
                                c = false;
                                continue;
                            } else {
                                continue;
                            }
                        }

                        if (($t2 = this.tubes.getItem(i2).tubeColors)[0] !== 0 && UnityEngine.MonoBehaviour.op_Equality(this.tubes.getItem(i2), tube) && c) {
                            tube.ShowFxComplete();
                            this.tubes.getItem(i2).iscomplete = true;
                            this.completeTube = (this.completeTube + 1) | 0;

                            SoundManager.Instance.PlayOneShot("Eat");
                            re[j] = null;
                            // if (tubes[i].tubeColors[0] != 0)
                            {
                                var lstLock = new(System.Collections.Generic.List$1(System.Int32)).ctor();
                                for (var k = 1; k <= 1; k = (k + 1) | 0) {
                                    if (true) {
                                        lstLock.add(k);
                                    }
                                }

                                var o = UnityEngine.Random.Range(0, lstLock.Count);
                                tube.SetReComplete(lstLock.getItem(0));
                                this.complete.add(i2 + "," + (j));
                            }
                        }
                        break;
                    }
                }

                if (isFaild) {
                    return false;
                }
                GameManager.Instance.IsWin = true;
                GameManager.Instance.OnWin();

                return true;
            },
            /*LevelManager.CheckWin end.*/

            /*LevelManager.Update start.*/
            Update: function() {
                if (GameManager.Instance.IsWin || GameManager.Instance.IsWait || this.isMove || MainMenu.Instance.isPopupOpen) {
                    return;
                }

                if (GameRes.Level <= 2 || this.tubes.Count < 3) {
                    MainMenu.Instance.btnAddTube.transform.GetChild(2).gameObject.SetActive(true);
                }


                if (this.delayStep > 0 && GameRes.Level === 2) {
                    this.delayStep -= UnityEngine.Time.deltaTime;
                    if (this.delayStep <= 0) {
                        if (!GameManager.Instance.IsWin) {
                            this.tapObj.SetActive(true);
                        }

                        this.level2Steps = (this.level2Steps + 1) | 0;
                    }
                }
                if (GameRes.Level === 2 && UnityEngine.MonoBehaviour.op_Inequality(this.selectTube, null)) {
                    if (this.level2Steps === 1) {
                        this.tapObj.transform.position = this.tubes.getItem(2).transform.position.$clone().add(this.posTapFollow);
                    }
                    if (this.level2Steps === 2) {
                        if (UnityEngine.MonoBehaviour.op_Equality(this.selectTube, this.tubes.getItem(0))) {
                            if (this.selectTube.GetLastItem() === this.tubes.getItem(2).GetLastItem()) {
                                this.tapObj.transform.position = this.tubes.getItem(2).transform.position.$clone().add(this.posTapFollow);
                            } else {
                                this.tapObj.transform.position = this.selectTube.transform.position.$clone().add(this.posTapFollow);
                            }
                        }
                        if (UnityEngine.MonoBehaviour.op_Equality(this.selectTube, this.tubes.getItem(1))) {
                            if (this.selectTube.GetLastItem() === this.tubes.getItem(2).GetLastItem()) {
                                this.tapObj.transform.position = this.tubes.getItem(2).transform.position.$clone().add(this.posTapFollow);
                            } else {
                                this.tapObj.transform.position = this.selectTube.transform.position.$clone().add(this.posTapFollow);
                            }
                        }
                        //tapObj.transform.position = tubes[2].transform.position + posTapFollow;

                        if (UnityEngine.MonoBehaviour.op_Equality(this.selectTube, this.tubes.getItem(2))) {
                            this.tapObj.transform.position = this.tubes.getItem(2).transform.position.$clone().add(this.posTapFollow);
                        }

                        //tapObj.transform.position = tubes[2].transform.position + posTapFollow;
                    }
                    if (this.level2Steps === 3) {
                        if (UnityEngine.MonoBehaviour.op_Equality(this.selectTube, this.tubes.getItem(0))) {
                            this.tapObj.transform.position = this.tubes.getItem(1).transform.position.$clone().add(this.posTapFollow);
                        }

                        if (UnityEngine.MonoBehaviour.op_Equality(this.selectTube, this.tubes.getItem(1))) {
                            this.tapObj.transform.position = this.tubes.getItem(1).transform.position.$clone().add(this.posTapFollow);
                        }
                    }
                    if (this.level2Steps === 4) {
                        if (UnityEngine.MonoBehaviour.op_Equality(this.selectTube, this.tubes.getItem(0))) {
                            this.tapObj.transform.position = this.tubes.getItem(2).transform.position.$clone().add(this.posTapFollow);
                        }

                        if (UnityEngine.MonoBehaviour.op_Equality(this.selectTube, this.tubes.getItem(2))) {
                            this.tapObj.transform.position = this.tubes.getItem(0).transform.position.$clone().add(this.posTapFollow);
                        }
                    }

                }
                if (GameRes.Level === 2 && UnityEngine.MonoBehaviour.op_Equality(this.selectTube, null)) {

                    if (this.level2Steps === 1) {
                        this.tapObj.transform.position = this.tubes.getItem(1).transform.position.$clone().add(this.posTapFollow);
                    }
                    if (this.level2Steps === 2) {
                        if (this.tubes.getItem(0).GetLastItem() === this.tubes.getItem(2).GetLastItem()) {
                            this.tapObj.transform.position = this.tubes.getItem(0).transform.position.$clone().add(this.posTapFollow);
                        }

                        if (this.tubes.getItem(1).GetLastItem() === this.tubes.getItem(2).GetLastItem()) {
                            this.tapObj.transform.position = this.tubes.getItem(1).transform.position.$clone().add(this.posTapFollow);
                        }
                    }
                    if (this.level2Steps === 3) {
                        this.tapObj.transform.position = this.tubes.getItem(0).transform.position.$clone().add(this.posTapFollow);
                    }
                    if (this.level2Steps === 4) {
                        this.tapObj.transform.position = this.tubes.getItem(2).transform.position.$clone().add(this.posTapFollow);
                    }
                }

                if (UnityEngine.Input.GetMouseButtonDown(0)) {
                    var ray = UnityEngine.Camera.main.ScreenPointToRay(UnityEngine.Vector3.FromVector2(UnityEngine.Input.mousePosition.$clone()));
                    var hit = { v: new UnityEngine.RaycastHit() };

                    if (UnityEngine.Physics.Raycast$1(ray, hit, window.Infinity, UnityEngine.LayerMask.op_Implicit(this.layerMask.$clone()))) {
                        if (UnityEngine.MonoBehaviour.op_Equality(this.selectTube, null)) {
                            this.selectTube = hit.v.collider.GetComponent(Tube);
                            if (GameRes.Level === 1) {
                                if (UnityEngine.MonoBehaviour.op_Equality(this.selectTube, this.tubes.getItem(1))) {
                                    this.tapObj.transform.position = this.tubes.getItem(0).transform.position.$clone().add(this.posTapFollow);
                                }
                            }
                            if (this.selectTube.IsNone()) {
                                this.selectTube = null;
                                return;
                            }

                            this.selectTube.transform.localPosition = new pc.Vec3(this.selectTube.transform.localPosition.x, this.selectTube.transform.localPosition.y + this.up, this.selectTube.transform.localPosition.z);
                            this.selectTube.SetShadowUp();
                            SoundManager.Instance.PlayOneShot("ConnectingPeople");
                        } else {
                            if (GameRes.Level === 1) {
                                this.tapObj.transform.position = this.tubes.getItem(1).transform.position.$clone().add(this.posTapFollow);
                            }

                            // Debug.Log(hit.collider.name);
                            var tube = hit.v.collider.GetComponent(Tube);
                            //if (tube != null) tapObj.SetActive(false);
                            if (tube.GetLastItem() !== 0 && tube.GetLastItem() !== this.selectTube.GetLastItem() || this.selectTube.GetLastItem() === 0) {
                                this.selectTube.transform.localPosition = new pc.Vec3(this.selectTube.transform.localPosition.x, this.selectTube.transform.localPosition.y - this.up, this.selectTube.transform.localPosition.z);
                                this.selectTube.SetShadowDown();
                                this.selectTube = null;
                                SoundManager.Instance.PlayOneShot("merge_failed");
                            } else if (UnityEngine.MonoBehaviour.op_Equality(tube, this.selectTube)) {
                                this.selectTube.transform.localPosition = new pc.Vec3(this.selectTube.transform.localPosition.x, this.selectTube.transform.localPosition.y - this.up, this.selectTube.transform.localPosition.z);
                                this.selectTube = null;
                                SoundManager.Instance.PlayOneShot("merge_failed");
                                tube.SetShadowDown();
                            } else if (!this.selectTube.CheckFill(tube)) {
                                this.selectTube.transform.localPosition = new pc.Vec3(this.selectTube.transform.localPosition.x, this.selectTube.transform.localPosition.y - this.up, this.selectTube.transform.localPosition.z);
                                this.selectTube.SetShadowDown();
                                this.selectTube = hit.v.collider.GetComponent(Tube);
                                this.selectTube.transform.localPosition = new pc.Vec3(this.selectTube.transform.localPosition.x, this.selectTube.transform.localPosition.y + this.up, this.selectTube.transform.localPosition.z);
                                this.selectTube.SetShadowUp();
                                return;
                            } else {
                                var index = {};
                                var fillCount = {};

                                this.selectTube.GetFillCount(index, fillCount);
                                var isLeft = this.selectTube.transform.position.x < 0 ? this.selectTube.transform.position.x < tube.transform.position.x : this.selectTube.transform.position.x <= tube.transform.position.x;
                                var rot = 36.0;
                                if (index.v === 0) {
                                    rot = 90;
                                } else {
                                    if (index.v === 1) {
                                        rot = 70;
                                    } else {
                                        if (index.v === 2) {
                                            rot = 50;
                                        }
                                    }
                                }
                                rot *= (isLeft ? -1.0 : 1.0);
                                var ofset = new pc.Vec2(1.1, 1.9);
                                if (index.v === 2) {
                                    ofset = new pc.Vec2(1.25, 2.225);
                                } else {
                                    if (index.v === 1) {
                                        ofset = new pc.Vec2(1.45, 2.675);
                                    } else {
                                        if (index.v === 0) {
                                            ofset = new pc.Vec2(1.35, 3.125);
                                        }
                                    }
                                }
                                if (tube.transform.position.z < 1.5) {
                                    ofset.y += tube.transform.position.z * 0.25;
                                } else {
                                    ofset.y += tube.transform.position.z * 0.3;
                                }
                                var sepos = this.selectTube.transform.position.$clone();
                                sepos.y -= this.up;

                                ray = new UnityEngine.Ray.$ctor1(ray.origin, (tube.transform.position.$clone().sub(ray.origin)).clone().normalize());
                                var p = new pc.Vec3(ray.GetPoint(pc.Vec3.distance(ray.origin, new pc.Vec3(tube.transform.position.x, tube.transform.position.y, -1.0))).x + (isLeft ? -ofset.x : ofset.x), tube.transform.position.y + ofset.y, -0.76);
                                var dis = pc.Vec3.distance(this.selectTube.transform.position, p);
                                this.isMove = true;
                                this.selectTube.shadow.SetActive(false);
                                this.selectTube.SetReComplete(-1);
                                DG.Tweening.TweenSettingsExtensions.OnComplete(DG.Tweening.Core.TweenerCore$3(UnityEngine.Quaternion, UnityEngine.Vector3, DG.Tweening.Plugins.Options.QuaternionOptions), DG.Tweening.ShortcutExtensions.DORotate(this.selectTube.transform, new pc.Vec3(0, 0, rot), Math.max(0, Math.min(dis, 10)) / 13.0), Bridge.fn.bind(this, function() {
                                    this.selectTube.SendColor(tube);
                                    this.selectTube.SetFxDir(isLeft ? 1 : -1);
                                    DG.Tweening.TweenSettingsExtensions.SetDelay(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3, UnityEngine.Vector3, DG.Tweening.Plugins.Options.VectorOptions), DG.Tweening.ShortcutExtensions.DOMove(this.selectTube.transform, sepos.$clone(), Math.max(0, Math.min(dis, 10)) / 13.0), fillCount.v * 0.5);
                                    DG.Tweening.TweenSettingsExtensions.SetDelay(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3, UnityEngine.Vector3, DG.Tweening.Plugins.Options.VectorOptions), DG.Tweening.ShortcutExtensions.DOScale(this.selectTube.transform, 0.7, Math.max(0, Math.min(dis, 10)) / 13.0), fillCount.v * 0.5);
                                    DG.Tweening.TweenSettingsExtensions.SetDelay(DG.Tweening.Core.TweenerCore$3(UnityEngine.Quaternion, UnityEngine.Vector3, DG.Tweening.Plugins.Options.QuaternionOptions), DG.Tweening.TweenSettingsExtensions.OnComplete(DG.Tweening.Core.TweenerCore$3(UnityEngine.Quaternion, UnityEngine.Vector3, DG.Tweening.Plugins.Options.QuaternionOptions), DG.Tweening.ShortcutExtensions.DORotate(this.selectTube.transform, pc.Vec3.ZERO.clone(), Math.max(0, Math.min(dis, 10)) / 13.0), Bridge.fn.bind(this, function() {
                                        if (GameManager.Instance.IsWin) {
                                            return;
                                        }
                                        this.selectTube.shadow.SetActive(true);
                                        this.selectTube.SetShadowDown();
                                        this.CheckWin(tube);
                                        this.isMove = false;
                                        this.selectTube = null;
                                        this.StepCount = (this.StepCount + 1) | 0;

                                        for (var i = 0; i < this.tubes.Count; i = (i + 1) | 0) {
                                            this.CacheAllTube(i, this.StepCount, this.tubes.getItem(i));
                                        }
                                    })), fillCount.v * 0.5);
                                }));
                                DG.Tweening.ShortcutExtensions.DOMove(this.selectTube.transform, p.$clone(), Math.max(0, Math.min(dis, 10)) / 13.0);
                                DG.Tweening.ShortcutExtensions.DOScale(this.selectTube.transform, 0.65, Math.max(0, Math.min(dis, 10)) / 13.0);

                                this.tapObj.SetActive(false);
                                if (GameRes.Level === 2) {
                                    this.delayStep = 1.0;
                                }

                            }
                        }
                    }
                }
            },
            /*LevelManager.Update end.*/

            /*LevelManager.BackStep start.*/
            BackStep: function() {
                var $t, $t1;
                if (this.StepCount >= 0) {
                    for (var i = 0; i < this.tubes.Count; i = (i + 1) | 0) {

                        this.currentColor = System.Array.init(4, 0, System.Int32);
                        var tu = this.tubes.getItem(i);
                        for (var a = 0; a < 4; a = (a + 1) | 0) {
                            this.currentColor[a] = tu.tubeColors[a];
                        }
                        for (var j = 0; j < 4; j = (j + 1) | 0) {
                            if (this.mDicTubeColor == null) {
                                return;
                            } else if (this.mDicTubeColor.containsKey("step_" + this.StepCount + "_tube_" + i + "_color_" + j)) {
                                ($t = this.tubes.getItem(i).tubeColors)[j] = this.mDicTubeColor.getItem("step_" + this.StepCount + "_tube_" + i + "_color_" + j);
                                this.tubes.getItem(i).UpdateTube(this.tubes.getItem(i).fillSendCount, true);
                            }
                        }
                        if (this.tubes.getItem(i).iscomplete) {

                            var cout = 0;
                            for (var a1 = 0; a1 < 4; a1 = (a1 + 1) | 0) {
                                if (this.currentColor[a1] === ($t1 = this.tubes.getItem(i).tubeColors)[a1]) {
                                    cout = (cout + 1) | 0;
                                }
                            }
                            if (cout === 4) {
                                // Debug.Log("no change");
                            } else {
                                this.tubes.getItem(i).iscomplete = false;
                                this.tubes.getItem(i).GetComponent(UnityEngine.BoxCollider).enabled = true;
                                //tubes[i].SetReComplete(tubes[i].idTube);
                                this.tubes.getItem(i).tick.gameObject.SetActive(false);
                                this.completeTube = (this.completeTube - 1) | 0;
                                UnityEngine.PlayerPrefs.SetInt("completeTubeCount", this.completeTube);
                            }
                        }
                    }
                }
            },
            /*LevelManager.BackStep end.*/

            /*LevelManager.CacheAllTube start.*/
            CacheAllTube: function(id, step, tub) {
                if (this.mDicTubeColor == null) {
                    this.mDicTubeColor = new(System.Collections.Generic.Dictionary$2(System.String, System.Int32)).ctor();
                }
                for (var j = 0; j < 4; j = (j + 1) | 0) {
                    if (this.mDicTubeColor.containsKey("step_" + step + "_tube_" + id + "_color_" + j)) {
                        this.mDicTubeColor.setItem("step_" + step + "_tube_" + id + "_color_" + j, tub.tubeColors[j]);
                    } else {
                        this.mDicTubeColor.add("step_" + step + "_tube_" + id + "_color_" + j, tub.tubeColors[j]);
                    }

                    //PlayerPrefs.SetInt("step_" + step + "_tube_" + id + "_color_" + j, tub.tubeColors[j]);
                }
            },
            /*LevelManager.CacheAllTube end.*/

            /*LevelManager.ClickBackStep start.*/
            ClickBackStep: function() {
                if (this.StepCount > 0 && GameRes.BackStep > 0) {
                    GameRes.BackStep = (GameRes.BackStep - 1) | 0;
                    this.StepCount = (this.StepCount - 1) | 0;
                    this.stepBack.text = "+" + GameRes.BackStep;
                    this.BackStep();
                    if (GameRes.Level === 2) {
                        this.level2Steps = (this.level2Steps - 1) | 0;
                    }
                } else {
                    xgame.sdk.AdsHelper.Instance.showGift(function(state) {
                        if (state === xgame.sdk.AdsHelper.AD_State.AD_REWARD_OK) {
                            GameRes.BackStep = 5;
                        }
                    });
                }
            },
            /*LevelManager.ClickBackStep end.*/


        }
    });
    /*LevelManager end.*/

    /*MainMenu start.*/
    Bridge.define("MainMenu", {
        inherits: [UnityEngine.MonoBehaviour],
        statics: {
            fields: {
                Instance: null
            }
        },
        fields: {
            gotoStore: null,
            btnMenu: null,
            btnRestart: null,
            btnUndo: null,
            btnAddTube: null,
            btnCloseMenu: null,
            winObjV: null,
            menuObj: null,
            popupLoadingGame: null,
            txtLvPopupWin: null,
            btnInviteFri: null,
            btnShareGame: null,
            btnInviteMenu: null,
            btnShareMenu: null,
            isPopupOpen: false
        },
        ctors: {
            init: function() {
                this.isPopupOpen = false;
            }
        },
        methods: {
            /*MainMenu.Awake start.*/
            Awake: function() {
                MainMenu.Instance = this;
                this.popupLoadingGame.SetActive(true);
            },
            /*MainMenu.Awake end.*/

            /*MainMenu.Start start.*/
            Start: function() {
                this.gotoStore.onClick.AddListener(Bridge.fn.cacheBind(this, this.OnClickNextLevel));

                this.btnMenu.onClick.AddListener(Bridge.fn.cacheBind(this, this.OnClickMenu));
                this.btnCloseMenu.onClick.AddListener(Bridge.fn.cacheBind(this, this.OnClickClosesMenu));
                this.btnRestart.onClick.AddListener(Bridge.fn.cacheBind(this, this.RestartLevel));
                this.btnUndo.onClick.AddListener(Bridge.fn.cacheBind(this, this.OnClickUndo));
                this.btnAddTube.onClick.AddListener(Bridge.fn.cacheBind(this, this.OnClickAddTube));
                this.btnInviteFri.onClick.AddListener(Bridge.fn.cacheBind(this, this.OnClickInvite));
                this.btnInviteMenu.onClick.AddListener(Bridge.fn.cacheBind(this, this.OnClickInvite));
                this.btnShareMenu.onClick.AddListener(Bridge.fn.cacheBind(this, this.OnClickShare));
                this.btnShareGame.onClick.AddListener(Bridge.fn.cacheBind(this, this.OnClickShare));

                var screenRatio = (((Bridge.Int.div(UnityEngine.Screen.width, UnityEngine.Screen.height)) | 0));

                // if (screenRatio >= 1)
                // {
                //     installObj.transform.localScale = new Vector3(1.35f, 1.35f, 1.35f);
                // }
                // if (GameRes.VibrateOn) GameHelper.Instance.Vibrate(Type_vibreate.Vib_Min);
                // else GameHelper.Instance.Vibrate(Type_vibreate.Vib_Max);
            },
            /*MainMenu.Start end.*/

            /*MainMenu.hiddenLoadingGame start.*/
            hiddenLoadingGame: function() {
                this.popupLoadingGame.SetActive(false);
            },
            /*MainMenu.hiddenLoadingGame end.*/

            /*MainMenu.OnClickNextLevel start.*/
            OnClickNextLevel: function() {
                this.btnAddTube.transform.GetChild(2).gameObject.SetActive(false);
                GameManager.Instance.NextLevel();
                // winObjH.SetActive(false);
                this.winObjV.SetActive(false);
            },
            /*MainMenu.OnClickNextLevel end.*/

            /*MainMenu.OnClickMenu start.*/
            OnClickMenu: function() {
                this.menuObj.SetActive(true);
                this.isPopupOpen = true;
            },
            /*MainMenu.OnClickMenu end.*/

            /*MainMenu.OnClickClosesMenu start.*/
            OnClickClosesMenu: function() {
                this.menuObj.SetActive(false);
                this.isPopupOpen = false;
            },
            /*MainMenu.OnClickClosesMenu end.*/

            /*MainMenu.OnClickUndo start.*/
            OnClickUndo: function() {
                //Debug.Log("Undo");
                LevelManager.Instance.ClickBackStep();
            },
            /*MainMenu.OnClickUndo end.*/

            /*MainMenu.OnClickAddTube start.*/
            OnClickAddTube: function() {
                //Debug.Log("AddTube");
                xgame.sdk.AdsHelper.Instance.showGift(Bridge.fn.bind(this, function(state) {
                    if (state === xgame.sdk.AdsHelper.AD_State.AD_REWARD_OK) {
                        LevelManager.Instance.AddTube();
                        if (LevelManager.Instance.isAddTube) {
                            this.btnAddTube.transform.GetChild(2).gameObject.SetActive(true);
                        }
                    }
                }));
            },
            /*MainMenu.OnClickAddTube end.*/

            /*MainMenu.OnClickShare start.*/
            OnClickShare: function() {
                xgame.sdk.GameHelper.ShareGame("Level: " + GameRes.Level);
            },
            /*MainMenu.OnClickShare end.*/

            /*MainMenu.OnClickInvite start.*/
            OnClickInvite: function() {
                xgame.sdk.GameHelper.InvitePlayGame("", "");
            },
            /*MainMenu.OnClickInvite end.*/

            /*MainMenu.ShowWin start.*/
            ShowWin: function() {
                // float screenRatio = (Screen.width / Screen.height);
                // if (screenRatio >= 1)
                // {
                //     winObjH.SetActive(true);
                // }
                // else if (screenRatio < 1)
                // {
                this.txtLvPopupWin.text = "Level: " + GameRes.Level;
                this.winObjV.SetActive(true);
                // }
            },
            /*MainMenu.ShowWin end.*/

            /*MainMenu.RestartLevel start.*/
            RestartLevel: function() {
                //Debug.Log("Restart");
                GameManager.Instance.IsWin = false;
                LevelManager.Instance.LoadLevel(GameRes.Level);
            },
            /*MainMenu.RestartLevel end.*/


        }
    });
    /*MainMenu end.*/

    /*MenuButtonManager start.*/
    Bridge.define("MenuButtonManager", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            soundButton: null,
            musicButton: null,
            rateButton: null,
            noADSButton: null
        },
        methods: {
            /*MenuButtonManager.Start start.*/
            Start: function() {
                this.soundButton.GetComponent(UnityEngine.UI.Button).onClick.AddListener(Bridge.fn.cacheBind(this, this.OnClickButtonSound));
                this.musicButton.GetComponent(UnityEngine.UI.Button).onClick.AddListener(Bridge.fn.cacheBind(this, this.OnClickMusic));
                //rateButton.GetComponent<Button>().onClick.AddListener(OnClickRate);
                //noADSButton.GetComponent<Button>().onClick.AddListener(OnClickNoADS);

                this.soundButton.ChangeImageButton(GameRes.SoundOn);
                //noADSButton.ChangeImageButton(GameRes.NoADSOn);
                this.musicButton.ChangeImageButton(GameRes.MusicOn);
            },
            /*MenuButtonManager.Start end.*/

            /*MenuButtonManager.OnDisable start.*/
            OnDisable: function() {

                GameRes.saveDataByKeys(System.Array.init([GameRes.KEY_SOUND_ON, GameRes.KEY_MUSIC_ON], System.String));

            },
            /*MenuButtonManager.OnDisable end.*/

            /*MenuButtonManager.OnClickMusic start.*/
            OnClickMusic: function() {
                if (GameRes.MusicOn) {
                    GameRes.MusicOn = false;
                    //GameHelper.Instance.Vibrate(Type_vibreate.Vib_Min);
                    SoundManager.Instance.StopBgMusic();
                } else {
                    GameRes.MusicOn = true;
                    //GameHelper.Instance.Vibrate(Type_vibreate.Vib_Max);
                    SoundManager.Instance.PlayBgMusic();
                }
                this.musicButton.ChangeImageButton(GameRes.MusicOn);
            },
            /*MenuButtonManager.OnClickMusic end.*/

            /*MenuButtonManager.OnClickButtonSound start.*/
            OnClickButtonSound: function() {
                if (GameRes.SoundOn) {
                    GameRes.SoundOn = false;
                    // GameRes.SoundOn = false;
                    SoundManager.Instance.StopSound();
                } else {
                    GameRes.SoundOn = true;
                    // GameRes.SoundOn = true;
                    //SoundManager.Instance.PlayMusic();
                }
                this.soundButton.ChangeImageButton(GameRes.SoundOn);
            },
            /*MenuButtonManager.OnClickButtonSound end.*/

            /*MenuButtonManager.OnClickRate start.*/
            OnClickRate: function() {
                //Debug.Log("rate");
                // if (GameRes.RateOn) GameRes.RateOn = false;
                // else GameRes.RateOn = true;
                // rateButton.ChangeImageButton(GameRes.RateOn);
            },
            /*MenuButtonManager.OnClickRate end.*/

            /*MenuButtonManager.OnClickNoADS start.*/
            OnClickNoADS: function() {
                //Debug.Log("no ADS");
                // if (GameRes.NoADSOn) GameRes.NoADSOn = false;
                // else GameRes.NoADSOn = true;
                // noADSButton.ChangeImageButton(GameRes.NoADSOn);
            },
            /*MenuButtonManager.OnClickNoADS end.*/


        }
    });
    /*MenuButtonManager end.*/

    /*MoneyFx start.*/
    Bridge.define("MoneyFx", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            endPos: null,
            moneyText: null,
            moneyTextRw: null,
            moveTime: 0,
            maxDistance: 0,
            firstPos: null
        },
        ctors: {
            init: function() {
                this.firstPos = new UnityEngine.Vector3();
                this.moveTime = 0.35;
                this.maxDistance = 0.35;
            }
        },
        methods: {
            /*MoneyFx.Start start.*/
            Start: function() {
                this.firstPos = this.transform.GetChild(0).localPosition.$clone();
                this.PlayFx();
            },
            /*MoneyFx.Start end.*/

            /*MoneyFx.OnDisable start.*/
            OnDisable: function() {
                this.ResetFx();
            },
            /*MoneyFx.OnDisable end.*/

            /*MoneyFx.ResetFx start.*/
            ResetFx: function() {
                for (var i = 0; i < this.transform.childCount; i = (i + 1) | 0) {
                    this.transform.GetChild(i).localPosition = this.firstPos.$clone();
                }
            },
            /*MoneyFx.ResetFx end.*/

            /*MoneyFx.PlayFx start.*/
            PlayFx: function() {
                this.ResetFx();
                var delayTime = 0;
                for (var i = 0; i < this.transform.childCount; i = (i + 1) | 0) {
                    var cur = { v: this.transform.GetChild(i) };
                    cur.v.gameObject.SetActive(true);
                    DG.Tweening.TweenSettingsExtensions.OnComplete(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3, UnityEngine.Vector3, DG.Tweening.Plugins.Options.VectorOptions), DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3, UnityEngine.Vector3, DG.Tweening.Plugins.Options.VectorOptions), DG.Tweening.TweenSettingsExtensions.SetDelay(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3, UnityEngine.Vector3, DG.Tweening.Plugins.Options.VectorOptions), DG.Tweening.ShortcutExtensions.DOMove(cur.v, this.endPos.position.$clone(), this.moveTime), delayTime), DG.Tweening.Ease.InOutCubic), (function($me, cur) {
                        return function() {
                            cur.v.gameObject.SetActive(false);
                        };
                    })(this, cur));
                    DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3, UnityEngine.Vector3, DG.Tweening.Plugins.Options.VectorOptions), DG.Tweening.TweenSettingsExtensions.SetDelay(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3, UnityEngine.Vector3, DG.Tweening.Plugins.Options.VectorOptions), DG.Tweening.ShortcutExtensions.DOScale$1(cur.v, new pc.Vec3(1, 1, 1).scale(0.7), this.moveTime), delayTime), DG.Tweening.Ease.InOutCubic);
                    DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Core.TweenerCore$3(System.Int32, System.Int32, DG.Tweening.Plugins.Options.NoOptions), DG.Tweening.TweenSettingsExtensions.SetDelay(DG.Tweening.Core.TweenerCore$3(System.Int32, System.Int32, DG.Tweening.Plugins.Options.NoOptions), DG.Tweening.DOTween.To$2(function() {
                        return 0;
                    }, Bridge.fn.bind(this, function(value) {
                        this.moneyTextRw.text = "+" + (Bridge.toString(value) || "");
                        this.moneyText.text = Bridge.toString(value);
                    }), 75, this.moveTime), delayTime), DG.Tweening.Ease.InOutCubic);
                    delayTime += 0.09;
                }
            },
            /*MoneyFx.PlayFx end.*/

            /*MoneyFx.PlayFx2 start.*/
            PlayFx2: function() {
                this.ResetFx();
                var delayTime = 0;
                for (var i = 0; i < this.transform.childCount; i = (i + 1) | 0) {
                    var randomX = UnityEngine.Random.Range$1(-this.maxDistance, this.maxDistance);
                    var randomY = UnityEngine.Random.Range$1(-this.maxDistance, this.maxDistance);
                    var cur = { v: this.transform.GetChild(i) };
                    cur.v.gameObject.SetActive(true);
                    DG.Tweening.TweenSettingsExtensions.OnComplete(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3, UnityEngine.Vector3, DG.Tweening.Plugins.Options.VectorOptions), DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3, UnityEngine.Vector3, DG.Tweening.Plugins.Options.VectorOptions), DG.Tweening.TweenSettingsExtensions.SetDelay(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3, UnityEngine.Vector3, DG.Tweening.Plugins.Options.VectorOptions), DG.Tweening.ShortcutExtensions.DOMove(cur.v, cur.v.position.$clone().add(new pc.Vec3(randomX, randomY, 0)), this.moveTime / 2), delayTime), DG.Tweening.Ease.InOutCubic), (function($me, cur) {
                        return Bridge.fn.bind($me, function() {
                            DG.Tweening.TweenSettingsExtensions.OnComplete(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3, UnityEngine.Vector3, DG.Tweening.Plugins.Options.VectorOptions), DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3, UnityEngine.Vector3, DG.Tweening.Plugins.Options.VectorOptions), DG.Tweening.TweenSettingsExtensions.SetDelay(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3, UnityEngine.Vector3, DG.Tweening.Plugins.Options.VectorOptions), DG.Tweening.ShortcutExtensions.DOMove(cur.v, this.endPos.position.$clone(), this.moveTime), 0.7), DG.Tweening.Ease.InOutCubic), function() {
                                cur.v.gameObject.SetActive(false);
                            });
                        });
                    })(this, cur));
                    delayTime += 0.05;
                }
            },
            /*MoneyFx.PlayFx2 end.*/

            /*MoneyFx.Update start.*/
            Update: function() {
                if (UnityEngine.Input.GetKeyDown(UnityEngine.KeyCode.C)) {
                    this.PlayFx2();
                }
            },
            /*MoneyFx.Update end.*/


        }
    });
    /*MoneyFx end.*/

    /*SoundManager start.*/
    Bridge.define("SoundManager", {
        inherits: [UnityEngine.MonoBehaviour],
        statics: {
            fields: {
                Instance: null
            }
        },
        fields: {
            audioSource: null,
            soundSource: null,
            clips: null,
            allCips: null
        },
        ctors: {
            init: function() {
                this.allCips = new(System.Collections.Generic.Dictionary$2(System.String, UnityEngine.AudioClip)).ctor();
            }
        },
        methods: {
            /*SoundManager.Awake start.*/
            Awake: function() {
                SoundManager.Instance = this;
            },
            /*SoundManager.Awake end.*/

            /*SoundManager.Start start.*/
            Start: function() {
                var $t;
                $t = Bridge.getEnumerator(this.clips);
                try {
                    while ($t.moveNext()) {
                        var clip = $t.Current;
                        this.allCips.add(clip.name, clip);
                    }
                } finally {
                    if (Bridge.is($t, System.IDisposable)) {
                        $t.System$IDisposable$Dispose();
                    }
                }
            },
            /*SoundManager.Start end.*/

            /*SoundManager.PlayMusic start.*/
            PlayMusic: function() {
                if (GameRes.MusicOn) {
                    this.audioSource.volume = 1;
                    if (this.audioSource.clip != null) {
                        this.audioSource.Play();
                    }
                }
            },
            /*SoundManager.PlayMusic end.*/

            /*SoundManager.PlayOneShot start.*/
            PlayOneShot: function(key) {
                if (GameRes.SoundOn) {
                    this.soundSource.volume = 1;
                    if (this.allCips.containsKey(key)) {
                        this.soundSource.PlayOneShot(this.allCips.getItem(key));
                    }
                }
            },
            /*SoundManager.PlayOneShot end.*/

            /*SoundManager.StopBgMusic start.*/
            StopBgMusic: function() {
                this.GetComponent(UnityEngine.AudioSource).enabled = false;
            },
            /*SoundManager.StopBgMusic end.*/

            /*SoundManager.PlayBgMusic start.*/
            PlayBgMusic: function() {
                if (GameRes.MusicOn) {
                    this.GetComponent(UnityEngine.AudioSource).enabled = true;
                    this.PlayMusic();
                }
            },
            /*SoundManager.PlayBgMusic end.*/

            /*SoundManager.StopSound start.*/
            StopSound: function() {
                this.soundSource.volume = 0;
                this.soundSource.Stop();
            },
            /*SoundManager.StopSound end.*/

            /*SoundManager.StopAllSound start.*/
            StopAllSound: function() {
                this.soundSource.Stop();
            },
            /*SoundManager.StopAllSound end.*/

            /*SoundManager.StopAudio start.*/
            StopAudio: function() {
                this.audioSource.volume = 0;
                this.soundSource.volume = 0;
            },
            /*SoundManager.StopAudio end.*/


        }
    });
    /*SoundManager end.*/

    /*System.IO.FileAccess start.*/
    Bridge.define("System.IO.FileAccess");
    /*System.IO.FileAccess end.*/

    /*Tube start.*/
    Bridge.define("Tube", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            isReq: false,
            iscomplete: false,
            idTube: 0,
            tubeColors: null,
            fill: null,
            shadow: null,
            tick: null,
            tube: null,
            tube2: null,
            fx: null,
            fxComplete: null,
            grassFill: null,
            grassFake: null,
            allMesh: null,
            fillSendCount: 0,
            celeb: false
        },
        ctors: {
            init: function() {
                this.tubeColors = System.Array.init(4, 0, System.Int32);
            }
        },
        methods: {
            /*Tube.Awake start.*/
            Awake: function() {
                this.SetShadowDown();
            },
            /*Tube.Awake end.*/

            /*Tube.Init start.*/
            Init: function(col) {
                if (col === void 0) { col = true; }
                var len = this.GetLength();
                this.grassFill = this.tube.GetComponent(UnityEngine.MeshRenderer);
                this.grassFake = this.tube2.GetComponent(UnityEngine.MeshRenderer);
                this.grassFill.material.SetFloat$1("_FillAmount", 0);
                this.grassFake.material.SetFloat$1("_FillAmount", 0);
                for (var i = 0; i < this.tubeColors.length; i = (i + 1) | 0) {
                    if (this.tubeColors[i] !== 0) {
                        if (i === 0) {
                            this.grassFill.material.SetTexture$1("_ColorTexture" + i, LevelManager.Instance.TubeTexture.getItem(((this.tubeColors[i] - 1) | 0)));
                        }
                        this.grassFill.material.SetTexture$1("_ColorTexture" + (((i + 1) | 0)), LevelManager.Instance.TubeTexture.getItem(((this.tubeColors[i] - 1) | 0)));
                        this.grassFake.material.SetTexture$1("_ColorTexture" + 1, LevelManager.Instance.TubeTexture.getItem(((this.tubeColors[i] - 1) | 0)));
                        this.grassFill.material.SetFloat$1("_FillAmount", this.GetLength() === 4 ? 1.25 : this.grassFill.material.GetFloat$1("_ColorFill" + len));
                        this.grassFake.material.SetFloat$1("_FillAmount", this.GetLength() === 4 ? 1.25 : this.grassFill.material.GetFloat$1("_ColorFill" + len));
                        var s = this.grassFill.material.GetTexture$1("_ColorTexture" + (((i + 1) | 0)));
                        var s2 = this.grassFill.material.GetTexture$1("_ColorTexture" + (i));
                    }
                }
                this.shadow.SetActive(col);
                this.GetComponent(UnityEngine.Collider).enabled = col;
            },
            /*Tube.Init end.*/

            /*Tube._time start.*/
            _time: function(i) {
                var $step = 0,
                    $jumpFromFinally,
                    $returnValue,
                    $async_e;

                var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function() {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0:
                                    {
                                        $enumerator.current = new UnityEngine.WaitForSeconds(1.0);
                                        $step = 1;
                                        return true;
                                    }
                                case 1:
                                    {
                                        i = (i + 1) | 0;

                                    }
                                default:
                                    {
                                        return false;
                                    }
                            }
                        }
                    } catch ($async_e1) {
                        $async_e = System.Exception.create($async_e1);
                        throw $async_e;
                    }
                }));
                return $enumerator;
            },
            /*Tube._time end.*/

            /*Tube.UpdateTube start.*/
            UpdateTube: function(len, update) {
                if (update === void 0) { update = false; }
                for (var i = 0; i < this.tubeColors.length; i = (i + 1) | 0) {
                    if (this.tubeColors[i] !== 0) {
                        if (i === 0) {
                            this.grassFill.material.SetTexture$1("_ColorTexture" + i, LevelManager.Instance.TubeTexture.getItem(((this.tubeColors[i] - 1) | 0)));
                        }
                        this.grassFill.material.SetTexture$1("_ColorTexture" + (((i + 1) | 0)), LevelManager.Instance.TubeTexture.getItem(((this.tubeColors[i] - 1) | 0)));
                        this.grassFake.material.SetTexture$1("_ColorTexture" + 1, LevelManager.Instance.TubeTexture.getItem(((this.tubeColors[i] - 1) | 0)));
                    }
                }

                if (this.grassFill.material.GetFloat$1("_FillAmount") < 0) {
                    this.grassFake.material.SetFloat$1("_FillAmount", 0);
                    this.grassFill.material.SetFloat$1("_FillAmount", 0);
                }

                if (this.GetLength() === 0 && this.grassFill.material.GetFloat$1("_FillAmount") > 0) {
                    this.grassFake.material.SetFloat$1("_FillAmount", 0);
                    this.grassFill.material.SetFloat$1("_FillAmount", 0);
                    DG.Tweening.TweenSettingsExtensions.OnComplete(DG.Tweening.Core.TweenerCore$3(System.Single, System.Single, DG.Tweening.Plugins.Options.FloatOptions), DG.Tweening.ShortcutExtensions.DOFloat$1(this.grassFill.material, -0.5, "_FillAmount", len * 0.5), Bridge.fn.bind(this, function() {
                        this.fx.Stop();
                        this.fx.Clear();
                    }));
                    DG.Tweening.ShortcutExtensions.DOFloat$1(this.grassFake.material, -0.5, "_FillAmount", len * 0.5);
                } else {
                    DG.Tweening.TweenSettingsExtensions.OnComplete(DG.Tweening.Core.TweenerCore$3(System.Single, System.Single, DG.Tweening.Plugins.Options.FloatOptions), DG.Tweening.ShortcutExtensions.DOFloat$1(this.grassFill.material, this.GetLength() === 4 ? 1.25 : this.grassFill.material.GetFloat$1("_ColorFill" + this.GetLength()), "_FillAmount", len * 0.5), Bridge.fn.bind(this, function() {
                        this.fx.Stop();
                        this.fx.Clear();
                    }));
                    DG.Tweening.ShortcutExtensions.DOFloat$1(this.grassFake.material, this.GetLength() === 4 ? 1.25 : this.grassFill.material.GetFloat$1("_ColorFill" + this.GetLength()), "_FillAmount", len * 0.5);
                }

                SoundManager.Instance.PlayOneShot("Pouring");
            },
            /*Tube.UpdateTube end.*/

            /*Tube.GetLength start.*/
            GetLength: function() {
                for (var i = (this.tubeColors.length - 1) | 0; i >= 0; i = (i - 1) | 0) {
                    if (this.tubeColors[i] !== 0) {
                        return ((i + 1) | 0);
                    }
                }

                return 0;
            },
            /*Tube.GetLength end.*/

            /*Tube.GetLastItem start.*/
            GetLastItem: function() {
                for (var i = (this.tubeColors.length - 1) | 0; i >= 0; i = (i - 1) | 0) {
                    if (this.tubeColors[i] !== 0) {
                        var id = this.tubeColors[i];
                        return id;
                    }
                }

                return 0;
            },
            /*Tube.GetLastItem end.*/

            /*Tube.CheckComplete start.*/
            CheckComplete: function(require) {
                for (var i = 1; i < this.tubeColors.length; i = (i + 1) | 0) {
                    if (this.tubeColors[i] !== this.tubeColors[0]) {
                        return false;
                    }
                }

                return true;
            },
            /*Tube.CheckComplete end.*/

            /*Tube.CheckFill start.*/
            CheckFill: function(tube1) {
                var index = {};
                var count = {};
                this.GetFillCount(index, count);
                if (count.v === 0 || (tube1.GetLastItem() !== 0 && tube1.GetLastItem() !== this.GetLastItem())) {
                    return false;
                }
                for (var i = 0; i < tube1.tubeColors.length; i = (i + 1) | 0) {
                    if (tube1.tubeColors[i] === 0) {
                        if (count.v > 0) {
                            count.v = (count.v - 1) | 0;
                        }
                    }
                }
                // Debug.Log(count);
                return count.v === 0;
            },
            /*Tube.CheckFill end.*/

            /*Tube.GetFillCount start.*/
            GetFillCount: function(index, count) {
                var c = this.GetLastItem();
                count.v = 0;
                index.v = 0;
                for (var i = (this.tubeColors.length - 1) | 0; i >= 0; i = (i - 1) | 0) {
                    if (this.tubeColors[i] === 0) {
                        continue;
                    }

                    if (this.tubeColors[i] === c) {
                        count.v = (count.v + 1) | 0;
                        index.v = i;
                    } else {
                        break;
                    }
                }
            },
            /*Tube.GetFillCount end.*/

            /*Tube.SendColor start.*/
            SendColor: function(tube1) {
                var index = {};
                var count = {};
                this.GetFillCount(index, count);
                var c = this.GetLastItem();
                for (var i = 0; i < count.v; i = (i + 1) | 0) {
                    this.tubeColors[((i + index.v) | 0)] = 0;
                }

                var len = count.v;
                this.fillSendCount = len;
                for (var i1 = 0; i1 < tube1.tubeColors.length; i1 = (i1 + 1) | 0) {
                    if (tube1.tubeColors[i1] === 0) {
                        if (count.v > 0) {
                            count.v = (count.v - 1) | 0;
                            tube1.tubeColors[i1] = c;
                        } else {
                            break;
                        }
                    }
                }
                this.fx.transform.rotation = pc.Quat.IDENTITY.clone();
                var main = this.fx.main;
                main.startLifetime = new pc.MinMaxCurve(0.5);
                main.startColor = new pc.MinMaxGradient(LevelManager.Instance.TubeColors.getItem(((c - 1) | 0)).$clone());
                this.fx.Play();
                tube1.UpdateTube(len, true);
                this.UpdateTube(len);
            },
            /*Tube.SendColor end.*/

            /*Tube.IsNone start.*/
            IsNone: function() {
                for (var i = (this.tubeColors.length - 1) | 0; i >= 0; i = (i - 1) | 0) {
                    if (this.tubeColors[i] !== 0) {
                        return false;
                    }
                }

                return true;
            },
            /*Tube.IsNone end.*/

            /*Tube.SetFxDir start.*/
            SetFxDir: function(dir) {
                this.fx.transform.localPosition = new pc.Vec3(dir === 1 ? 0.56 : -0.56, 2.075, 0.0);
            },
            /*Tube.SetFxDir end.*/

            /*Tube.ShowFxComplete start.*/
            ShowFxComplete: function() {
                this.celeb = true;
                this.fxComplete.Play();
            },
            /*Tube.ShowFxComplete end.*/

            /*Tube.SetReComplete start.*/
            SetReComplete: function(id) {
                if (id >= 0 && !this.tick.gameObject.activeSelf) {
                    this.tick.SetEnable(id);
                }
                this.tick.gameObject.SetActive(id >= 0);
            },
            /*Tube.SetReComplete end.*/

            /*Tube.SetShadowUp start.*/
            SetShadowUp: function() {
                if (UnityEngine.GameObject.op_Equality(this.shadow, null) || UnityEngine.Component.op_Equality(this.shadow.GetComponent(UnityEngine.SpriteRenderer), null)) {
                    return;
                }
                var a = new pc.Color(0, 0, 0, 1);
                a.a = 0.4;
                this.shadow.GetComponent(UnityEngine.SpriteRenderer).color = a.$clone();
                this.shadow.transform.localPosition = new pc.Vec3(-0.6, -0.48, 0.25);
                this.shadow.transform.localScale = new pc.Vec3(3, 2, 0.7);
            },
            /*Tube.SetShadowUp end.*/

            /*Tube.SetShadowDown start.*/
            SetShadowDown: function() {
                if (UnityEngine.GameObject.op_Equality(this.shadow, null) || UnityEngine.Component.op_Equality(this.shadow.GetComponent(UnityEngine.SpriteRenderer), null)) {
                    return;
                }
                var a = new pc.Color(0, 0, 0, 1);
                a.a = 0.5;
                this.shadow.GetComponent(UnityEngine.SpriteRenderer).color = a.$clone();
                this.shadow.transform.localPosition = new pc.Vec3(-0.66, -0.05, 0.25);
                this.shadow.transform.localScale = new pc.Vec3(4, 2, 0.7);
            },
            /*Tube.SetShadowDown end.*/


        }
    });
    /*Tube end.*/

    /*xgame.sdk.AdsHelper start.*/
    Bridge.define("xgame.sdk.AdsHelper", {
        inherits: [UnityEngine.MonoBehaviour],
        statics: {
            fields: {
                Instance: null
            }
        },
        fields: {
            _cbFullLoad: null,
            _cbFullShow: null,
            _isFullLoading: false,
            _isFullLoaded: false,
            isFullLoadWhenClose: false,
            _cbGiftLoad: null,
            _cbGiftShow: null,
            _isGiftLoading: false,
            _isGiftLoaded: false,
            isGiftLoadWhenClose: false
        },
        ctors: {
            init: function() {
                this._isFullLoading = false;
                this._isFullLoaded = false;
                this.isFullLoadWhenClose = true;
                this._isGiftLoading = false;
                this._isGiftLoaded = false;
                this.isGiftLoadWhenClose = true;
            }
        },
        methods: {
            /*xgame.sdk.AdsHelper.Awake start.*/
            Awake: function() {
                if (UnityEngine.MonoBehaviour.op_Equality(xgame.sdk.AdsHelper.Instance, null)) {
                    xgame.sdk.AdsHelper.Instance = this;
                    UnityEngine.Object.DontDestroyOnLoad(this.gameObject);
                } else {
                    if (UnityEngine.MonoBehaviour.op_Inequality(this, xgame.sdk.AdsHelper.Instance)) {
                        UnityEngine.MonoBehaviour.Destroy(this.gameObject);
                    }
                }
            },
            /*xgame.sdk.AdsHelper.Awake end.*/

            /*xgame.sdk.AdsHelper.Start start.*/
            Start: function() {},
            /*xgame.sdk.AdsHelper.Start end.*/

            /*xgame.sdk.AdsHelper.loadFull4ThisTurn start.*/
            loadFull4ThisTurn: function(cb) {
                if (cb === void 0) { cb = null; }
                this._cbFullLoad = cb;
                FBInstantAds.getInstance().loadFull(this.onFullLoaded, this.onFullLoadFail);
            },
            /*xgame.sdk.AdsHelper.loadFull4ThisTurn end.*/

            /*xgame.sdk.AdsHelper.showFull start.*/
            showFull: function(cb) {
                if (cb === void 0) { cb = null; }
                this._cbFullShow = cb;

                return FBInstantAds.getInstance().showFull(this.onFullClose, this.onFullShowFailed);
            },
            /*xgame.sdk.AdsHelper.showFull end.*/

            /*xgame.sdk.AdsHelper.isFull4Show start.*/
            isFull4Show: function() {

                return FBInstantAds.getInstance().getFullLoaded();
            },
            /*xgame.sdk.AdsHelper.isFull4Show end.*/

            /*xgame.sdk.AdsHelper.loadGift4ThisTurn start.*/
            loadGift4ThisTurn: function(cb) {
                if (cb === void 0) { cb = null; }
                this._cbGiftLoad = cb;
                FBInstantAds.getInstance().loadGift(this.onGiftLoaded, this.onGiftLoadFail);
            },
            /*xgame.sdk.AdsHelper.loadGift4ThisTurn end.*/

            /*xgame.sdk.AdsHelper.showGift start.*/
            showGift: function(cb) {
                if (cb === void 0) { cb = null; }
                this._cbGiftShow = cb;

                return FBInstantAds.getInstance().showGift(this.onGiftClose, this.onGiftShowFailed);
            },
            /*xgame.sdk.AdsHelper.showGift end.*/

            /*xgame.sdk.AdsHelper.isGift4Show start.*/
            isGift4Show: function() {

                return FBInstantAds.getInstance().getGiftLoaded();
            },
            /*xgame.sdk.AdsHelper.isGift4Show end.*/

            /*xgame.sdk.AdsHelper.onFullLoaded start.*/
            onFullLoaded: function() {
                console.log("ads helper onFullLoaded 1");
                xgame.sdk.AdsHelper.Instance._isFullLoading = false;
                xgame.sdk.AdsHelper.Instance._isFullLoaded = true;
                if (!Bridge.staticEquals(xgame.sdk.AdsHelper.Instance._cbFullLoad, null)) {
                    console.log("ads helper onFullLoaded 2");
                    xgame.sdk.AdsHelper.Instance._cbFullLoad(xgame.sdk.AdsHelper.AD_State.AD_LOAD_OK);
                }
            },
            /*xgame.sdk.AdsHelper.onFullLoaded end.*/

            /*xgame.sdk.AdsHelper.onFullLoadFail start.*/
            onFullLoadFail: function() {
                console.log("ads helper onFullLoadFail 1");
                xgame.sdk.AdsHelper.Instance._isFullLoading = false;
                xgame.sdk.AdsHelper.Instance._isFullLoaded = false;

                if (!Bridge.staticEquals(xgame.sdk.AdsHelper.Instance._cbFullLoad, null)) {
                    console.log("ads helper onFullLoadFail 2");
                    xgame.sdk.AdsHelper.Instance._cbFullLoad(xgame.sdk.AdsHelper.AD_State.AD_LOAD_FAIL);
                }
            },
            /*xgame.sdk.AdsHelper.onFullLoadFail end.*/

            /*xgame.sdk.AdsHelper.onFullShow start.*/
            onFullShow: function() {
                console.log("ads helper onFullShow");
                if (!Bridge.staticEquals(xgame.sdk.AdsHelper.Instance._cbFullShow, null)) {
                    console.log("ads helper onFullShow 2");
                    xgame.sdk.AdsHelper.Instance._cbFullShow(xgame.sdk.AdsHelper.AD_State.AD_SHOW);
                }
            },
            /*xgame.sdk.AdsHelper.onFullShow end.*/

            /*xgame.sdk.AdsHelper.onFullClose start.*/
            onFullClose: function() {
                console.log("ads helper onFullClose");
                xgame.sdk.AdsHelper.Instance._isFullLoading = false;
                xgame.sdk.AdsHelper.Instance._isFullLoaded = false;
                if (!Bridge.staticEquals(xgame.sdk.AdsHelper.Instance._cbFullShow, null)) {
                    console.log("ads helper onFullClose1");
                    xgame.sdk.AdsHelper.Instance._cbFullShow(xgame.sdk.AdsHelper.AD_State.AD_CLOSE);
                }
                if (xgame.sdk.AdsHelper.Instance.isFullLoadWhenClose) {
                    xgame.sdk.AdsHelper.Instance.loadFull4ThisTurn();
                }

            },
            /*xgame.sdk.AdsHelper.onFullClose end.*/

            /*xgame.sdk.AdsHelper.onFullShowFailed start.*/
            onFullShowFailed: function() {
                console.log("ads helper onFullShowFailed 1");
                xgame.sdk.AdsHelper.Instance._isFullLoading = false;
                xgame.sdk.AdsHelper.Instance._isFullLoaded = false;
                if (!Bridge.staticEquals(xgame.sdk.AdsHelper.Instance._cbFullShow, null)) {
                    console.log("ads helper onFullShowFailed 2");
                    xgame.sdk.AdsHelper.Instance._cbFullShow(xgame.sdk.AdsHelper.AD_State.AD_SHOW_FAIL);
                }
                if (xgame.sdk.AdsHelper.Instance.isFullLoadWhenClose) {
                    xgame.sdk.AdsHelper.Instance.loadFull4ThisTurn();
                }

            },
            /*xgame.sdk.AdsHelper.onFullShowFailed end.*/

            /*xgame.sdk.AdsHelper.onGiftLoaded start.*/
            onGiftLoaded: function() {
                console.log("ads helper rw onGifLoaded");
                xgame.sdk.AdsHelper.Instance._isGiftLoading = false;
                xgame.sdk.AdsHelper.Instance._isGiftLoaded = true;
                if (!Bridge.staticEquals(xgame.sdk.AdsHelper.Instance._cbGiftLoad, null)) {
                    xgame.sdk.AdsHelper.Instance._cbGiftLoad(xgame.sdk.AdsHelper.AD_State.AD_LOAD_OK);
                }
            },
            /*xgame.sdk.AdsHelper.onGiftLoaded end.*/

            /*xgame.sdk.AdsHelper.onGiftLoadFail start.*/
            onGiftLoadFail: function() {
                console.log("ads helper rw onGifLoadFail");
                xgame.sdk.AdsHelper.Instance._isGiftLoaded = false;
                xgame.sdk.AdsHelper.Instance._isGiftLoading = false;
                if (!Bridge.staticEquals(xgame.sdk.AdsHelper.Instance._cbGiftLoad, null)) {
                    xgame.sdk.AdsHelper.Instance._cbGiftLoad(xgame.sdk.AdsHelper.AD_State.AD_LOAD_FAIL);
                }
            },
            /*xgame.sdk.AdsHelper.onGiftLoadFail end.*/

            /*xgame.sdk.AdsHelper.onGiftShow start.*/
            onGiftShow: function() {
                console.log("ads helper rw onGifShow");
                if (!Bridge.staticEquals(xgame.sdk.AdsHelper.Instance._cbGiftShow, null)) {
                    xgame.sdk.AdsHelper.Instance._cbGiftShow(xgame.sdk.AdsHelper.AD_State.AD_SHOW);
                }
            },
            /*xgame.sdk.AdsHelper.onGiftShow end.*/

            /*xgame.sdk.AdsHelper.onGiftClose start.*/
            onGiftClose: function() {
                console.log("ads helper rw onGifClose");
                xgame.sdk.AdsHelper.Instance._isGiftLoaded = false;
                xgame.sdk.AdsHelper.Instance._isGiftLoading = false;
                if (!Bridge.staticEquals(xgame.sdk.AdsHelper.Instance._cbGiftShow, null)) {
                    console.log("ads helper rw onGifClose 2");
                    xgame.sdk.AdsHelper.Instance._cbGiftShow(xgame.sdk.AdsHelper.AD_State.AD_REWARD_OK);
                    xgame.sdk.AdsHelper.Instance._cbGiftShow(xgame.sdk.AdsHelper.AD_State.AD_CLOSE);
                }

                if (xgame.sdk.AdsHelper.Instance.isGiftLoadWhenClose) {
                    xgame.sdk.AdsHelper.Instance.loadGift4ThisTurn(null);
                }

            },
            /*xgame.sdk.AdsHelper.onGiftClose end.*/

            /*xgame.sdk.AdsHelper.onGiftShowFailed start.*/
            onGiftShowFailed: function() {
                console.log("ads helper rw onGiftShowFailed");
                xgame.sdk.AdsHelper.Instance._isGiftLoaded = false;
                xgame.sdk.AdsHelper.Instance._isGiftLoading = false;
                if (!Bridge.staticEquals(xgame.sdk.AdsHelper.Instance._cbGiftShow, null)) {
                    console.log("ads helper rw onGiftShowFailed 2");
                    xgame.sdk.AdsHelper.Instance._cbGiftShow(xgame.sdk.AdsHelper.AD_State.AD_SHOW_FAIL);
                }

                if (xgame.sdk.AdsHelper.Instance.isGiftLoadWhenClose) {
                    xgame.sdk.AdsHelper.Instance.loadGift4ThisTurn(null);
                }

            },
            /*xgame.sdk.AdsHelper.onGiftShowFailed end.*/


        }
    });
    /*xgame.sdk.AdsHelper end.*/

    /*xgame.sdk.AdsHelper+AD_State start.*/
    Bridge.define("xgame.sdk.AdsHelper.AD_State", {
        $kind: "nested enum",
        statics: {
            fields: {
                AD_NONE: 0,
                AD_LOAD_FAIL: 1,
                AD_LOAD_OK: 2,
                AD_SHOW_FAIL: 3,
                AD_SHOW: 4,
                AD_REWARD_FAIL: 5,
                AD_REWARD_OK: 6,
                AD_CLOSE: 7
            }
        }
    });
    /*xgame.sdk.AdsHelper+AD_State end.*/

    /*xgame.sdk.GameHelper start.*/
    Bridge.define("xgame.sdk.GameHelper", {
        statics: {
            methods: {
                /*xgame.sdk.GameHelper.ShareGame:static start.*/
                ShareGame: function(txtShare) {
                    FBInstantManager.getInstance().ShareOnFacebook(txtShare);
                },
                /*xgame.sdk.GameHelper.ShareGame:static end.*/

                /*xgame.sdk.GameHelper.InvitePlayGame:static start.*/
                InvitePlayGame: function(txtTitle, txtContent) {
                    FBInstantManager.getInstance().InviteFriend();
                },
                /*xgame.sdk.GameHelper.InvitePlayGame:static end.*/


            }
        }
    });
    /*xgame.sdk.GameHelper end.*/

    /*Facebook.Unity.IAccessTokenRefreshResult start.*/
    Bridge.define("Facebook.Unity.IAccessTokenRefreshResult", {
        inherits: [Facebook.Unity.IResult],
        $kind: "interface"
    });
    /*Facebook.Unity.IAccessTokenRefreshResult end.*/

    /*Facebook.Unity.IInternalResult start.*/
    Bridge.define("Facebook.Unity.IInternalResult", {
        inherits: [Facebook.Unity.IResult],
        $kind: "interface"
    });
    /*Facebook.Unity.IInternalResult end.*/

    /*Facebook.Unity.Android.AndroidWrapper start.*/
    Bridge.define("Facebook.Unity.Android.AndroidWrapper", {
        inherits: [Facebook.Unity.Mobile.Android.IAndroidWrapper],
        alias: [
            "CallStatic", "Facebook$Unity$Mobile$Android$IAndroidWrapper$CallStatic",
            "CallStatic$1", "Facebook$Unity$Mobile$Android$IAndroidWrapper$CallStatic$1"
        ],
        methods: {
            /*Facebook.Unity.Android.AndroidWrapper.CallStatic start.*/
            CallStatic: function(T, methodName) {
                return Bridge.getDefaultValue(T);
            },
            /*Facebook.Unity.Android.AndroidWrapper.CallStatic end.*/

            /*Facebook.Unity.Android.AndroidWrapper.CallStatic$1 start.*/
            CallStatic$1: function(methodName, args) {},
            /*Facebook.Unity.Android.AndroidWrapper.CallStatic$1 end.*/


        },
        overloads: {
            "CallStatic(string, System.Object[])": "CallStatic$1"
        }
    });
    /*Facebook.Unity.Android.AndroidWrapper end.*/

    /*Facebook.Unity.IAppLinkResult start.*/
    Bridge.define("Facebook.Unity.IAppLinkResult", {
        inherits: [Facebook.Unity.IResult],
        $kind: "interface"
    });
    /*Facebook.Unity.IAppLinkResult end.*/

    /*Facebook.Unity.IAppRequestResult start.*/
    Bridge.define("Facebook.Unity.IAppRequestResult", {
        inherits: [Facebook.Unity.IResult],
        $kind: "interface"
    });
    /*Facebook.Unity.IAppRequestResult end.*/

    /*Facebook.Unity.AsyncRequestStringWrapper start.*/
    Bridge.define("Facebook.Unity.AsyncRequestStringWrapper", {
        inherits: [Facebook.Unity.IAsyncRequestStringWrapper],
        alias: [
            "Request$1", "Facebook$Unity$IAsyncRequestStringWrapper$Request$1",
            "Request", "Facebook$Unity$IAsyncRequestStringWrapper$Request"
        ],
        methods: {
            /*Facebook.Unity.AsyncRequestStringWrapper.Request$1 start.*/
            Request$1: function(url, method, query, callback) {},
            /*Facebook.Unity.AsyncRequestStringWrapper.Request$1 end.*/

            /*Facebook.Unity.AsyncRequestStringWrapper.Request start.*/
            Request: function(url, method, formData, callback) {},
            /*Facebook.Unity.AsyncRequestStringWrapper.Request end.*/


        },
        overloads: {
            "Request(System.Uri, Facebook.Unity.HttpMethod, UnityEngine.WWWForm, Facebook.Unity.FacebookDelegate<Facebook.Unity.IGraphResult>)": "Request$1"
        }
    });
    /*Facebook.Unity.AsyncRequestStringWrapper end.*/

    /*Facebook.Unity.Canvas.ICanvasFacebookResultHandler start.*/
    Bridge.define("Facebook.Unity.Canvas.ICanvasFacebookResultHandler", {
        inherits: [Facebook.Unity.IFacebookResultHandler],
        $kind: "interface"
    });
    /*Facebook.Unity.Canvas.ICanvasFacebookResultHandler end.*/

    /*Facebook.Unity.Canvas.ICanvasFacebook start.*/
    Bridge.define("Facebook.Unity.Canvas.ICanvasFacebook", {
        inherits: [Facebook.Unity.IFacebook, Facebook.Unity.IPayFacebook],
        $kind: "interface"
    });
    /*Facebook.Unity.Canvas.ICanvasFacebook end.*/

    /*Facebook.Unity.IFacebookImplementation start.*/
    Bridge.define("Facebook.Unity.IFacebookImplementation", {
        inherits: [Facebook.Unity.IFacebook, Facebook.Unity.IFacebookResultHandler],
        $kind: "interface"
    });
    /*Facebook.Unity.IFacebookImplementation end.*/

    /*Facebook.Unity.Canvas.ICanvasFacebookCallbackHandler start.*/
    Bridge.define("Facebook.Unity.Canvas.ICanvasFacebookCallbackHandler", {
        inherits: [Facebook.Unity.IFacebookCallbackHandler],
        $kind: "interface"
    });
    /*Facebook.Unity.Canvas.ICanvasFacebookCallbackHandler end.*/

    /*Facebook.Unity.FacebookGameObject start.*/
    Bridge.define("Facebook.Unity.FacebookGameObject", {
        inherits: [UnityEngine.MonoBehaviour, Facebook.Unity.IFacebookCallbackHandler],
        fields: {
            Facebook: null
        },
        alias: [
            "OnInitComplete", "Facebook$Unity$IFacebookCallbackHandler$OnInitComplete",
            "OnLoginComplete", "Facebook$Unity$IFacebookCallbackHandler$OnLoginComplete",
            "OnLogoutComplete", "Facebook$Unity$IFacebookCallbackHandler$OnLogoutComplete",
            "OnGetAppLinkComplete", "Facebook$Unity$IFacebookCallbackHandler$OnGetAppLinkComplete",
            "OnAppRequestsComplete", "Facebook$Unity$IFacebookCallbackHandler$OnAppRequestsComplete",
            "OnShareLinkComplete", "Facebook$Unity$IFacebookCallbackHandler$OnShareLinkComplete"
        ],
        methods: {
            /*Facebook.Unity.FacebookGameObject.Awake start.*/
            Awake: function() {},
            /*Facebook.Unity.FacebookGameObject.Awake end.*/

            /*Facebook.Unity.FacebookGameObject.OnInitComplete start.*/
            OnInitComplete: function(message) {},
            /*Facebook.Unity.FacebookGameObject.OnInitComplete end.*/

            /*Facebook.Unity.FacebookGameObject.OnLoginComplete start.*/
            OnLoginComplete: function(message) {},
            /*Facebook.Unity.FacebookGameObject.OnLoginComplete end.*/

            /*Facebook.Unity.FacebookGameObject.OnLogoutComplete start.*/
            OnLogoutComplete: function(message) {},
            /*Facebook.Unity.FacebookGameObject.OnLogoutComplete end.*/

            /*Facebook.Unity.FacebookGameObject.OnGetAppLinkComplete start.*/
            OnGetAppLinkComplete: function(message) {},
            /*Facebook.Unity.FacebookGameObject.OnGetAppLinkComplete end.*/

            /*Facebook.Unity.FacebookGameObject.OnAppRequestsComplete start.*/
            OnAppRequestsComplete: function(message) {},
            /*Facebook.Unity.FacebookGameObject.OnAppRequestsComplete end.*/

            /*Facebook.Unity.FacebookGameObject.OnShareLinkComplete start.*/
            OnShareLinkComplete: function(message) {},
            /*Facebook.Unity.FacebookGameObject.OnShareLinkComplete end.*/

            /*Facebook.Unity.FacebookGameObject.OnAwake start.*/
            OnAwake: function() {},
            /*Facebook.Unity.FacebookGameObject.OnAwake end.*/


        }
    });
    /*Facebook.Unity.FacebookGameObject end.*/

    /*Facebook.Unity.Canvas.CanvasFacebookLoader start.*/
    Bridge.define("Facebook.Unity.Canvas.CanvasFacebookLoader", {
        inherits: [Facebook.Unity.FB.CompiledFacebookLoader],
        props: {
            FBGameObject: {
                get: function() {
                    return null;
                }
            }
        }
    });
    /*Facebook.Unity.Canvas.CanvasFacebookLoader end.*/

    /*Facebook.Unity.Canvas.CanvasJSWrapper start.*/
    Bridge.define("Facebook.Unity.Canvas.CanvasJSWrapper", {
        inherits: [Facebook.Unity.Canvas.ICanvasJSWrapper],
        alias: [
            "GetSDKVersion", "Facebook$Unity$Canvas$ICanvasJSWrapper$GetSDKVersion",
            "DisableFullScreen", "Facebook$Unity$Canvas$ICanvasJSWrapper$DisableFullScreen",
            "Init", "Facebook$Unity$Canvas$ICanvasJSWrapper$Init",
            "Login", "Facebook$Unity$Canvas$ICanvasJSWrapper$Login",
            "Logout", "Facebook$Unity$Canvas$ICanvasJSWrapper$Logout",
            "ActivateApp", "Facebook$Unity$Canvas$ICanvasJSWrapper$ActivateApp",
            "LogAppEvent", "Facebook$Unity$Canvas$ICanvasJSWrapper$LogAppEvent",
            "LogPurchase", "Facebook$Unity$Canvas$ICanvasJSWrapper$LogPurchase",
            "Ui", "Facebook$Unity$Canvas$ICanvasJSWrapper$Ui",
            "InitScreenPosition", "Facebook$Unity$Canvas$ICanvasJSWrapper$InitScreenPosition"
        ],
        methods: {
            /*Facebook.Unity.Canvas.CanvasJSWrapper.GetSDKVersion start.*/
            GetSDKVersion: function() {
                return null;
            },
            /*Facebook.Unity.Canvas.CanvasJSWrapper.GetSDKVersion end.*/

            /*Facebook.Unity.Canvas.CanvasJSWrapper.DisableFullScreen start.*/
            DisableFullScreen: function() {},
            /*Facebook.Unity.Canvas.CanvasJSWrapper.DisableFullScreen end.*/

            /*Facebook.Unity.Canvas.CanvasJSWrapper.Init start.*/
            Init: function(connectFacebookUrl, locale, debug, initParams, status) {},
            /*Facebook.Unity.Canvas.CanvasJSWrapper.Init end.*/

            /*Facebook.Unity.Canvas.CanvasJSWrapper.Login start.*/
            Login: function(scope, callback_id) {},
            /*Facebook.Unity.Canvas.CanvasJSWrapper.Login end.*/

            /*Facebook.Unity.Canvas.CanvasJSWrapper.Logout start.*/
            Logout: function() {},
            /*Facebook.Unity.Canvas.CanvasJSWrapper.Logout end.*/

            /*Facebook.Unity.Canvas.CanvasJSWrapper.ActivateApp start.*/
            ActivateApp: function() {},
            /*Facebook.Unity.Canvas.CanvasJSWrapper.ActivateApp end.*/

            /*Facebook.Unity.Canvas.CanvasJSWrapper.LogAppEvent start.*/
            LogAppEvent: function(eventName, valueToSum, parameters) {},
            /*Facebook.Unity.Canvas.CanvasJSWrapper.LogAppEvent end.*/

            /*Facebook.Unity.Canvas.CanvasJSWrapper.LogPurchase start.*/
            LogPurchase: function(purchaseAmount, currency, parameters) {},
            /*Facebook.Unity.Canvas.CanvasJSWrapper.LogPurchase end.*/

            /*Facebook.Unity.Canvas.CanvasJSWrapper.Ui start.*/
            Ui: function(x, uid, callbackMethodName) {},
            /*Facebook.Unity.Canvas.CanvasJSWrapper.Ui end.*/

            /*Facebook.Unity.Canvas.CanvasJSWrapper.InitScreenPosition start.*/
            InitScreenPosition: function() {},
            /*Facebook.Unity.Canvas.CanvasJSWrapper.InitScreenPosition end.*/


        }
    });
    /*Facebook.Unity.Canvas.CanvasJSWrapper end.*/

    /*Facebook.Unity.ICatalogResult start.*/
    Bridge.define("Facebook.Unity.ICatalogResult", {
        inherits: [Facebook.Unity.IResult],
        $kind: "interface"
    });
    /*Facebook.Unity.ICatalogResult end.*/

    /*Facebook.Unity.IConsumePurchaseResult start.*/
    Bridge.define("Facebook.Unity.IConsumePurchaseResult", {
        inherits: [Facebook.Unity.IResult],
        $kind: "interface"
    });
    /*Facebook.Unity.IConsumePurchaseResult end.*/

    /*Facebook.Unity.Editor.Dialogs.EmptyMockDialog start.*/
    Bridge.define("Facebook.Unity.Editor.Dialogs.EmptyMockDialog", {
        inherits: [Facebook.Unity.Editor.EditorFacebookMockDialog],
        fields: {
            EmptyDialogTitle: null
        },
        props: {
            DialogTitle: {
                get: function() {
                    return null;
                }
            }
        },
        methods: {
            /*Facebook.Unity.Editor.Dialogs.EmptyMockDialog.DoGui start.*/
            DoGui: function() {},
            /*Facebook.Unity.Editor.Dialogs.EmptyMockDialog.DoGui end.*/

            /*Facebook.Unity.Editor.Dialogs.EmptyMockDialog.SendSuccessResult start.*/
            SendSuccessResult: function() {},
            /*Facebook.Unity.Editor.Dialogs.EmptyMockDialog.SendSuccessResult end.*/


        }
    });
    /*Facebook.Unity.Editor.Dialogs.EmptyMockDialog end.*/

    /*Facebook.Unity.Editor.Dialogs.MockLoginDialog start.*/
    Bridge.define("Facebook.Unity.Editor.Dialogs.MockLoginDialog", {
        inherits: [Facebook.Unity.Editor.EditorFacebookMockDialog],
        props: {
            DialogTitle: {
                get: function() {
                    return null;
                }
            }
        },
        methods: {
            /*Facebook.Unity.Editor.Dialogs.MockLoginDialog.DoGui start.*/
            DoGui: function() {},
            /*Facebook.Unity.Editor.Dialogs.MockLoginDialog.DoGui end.*/

            /*Facebook.Unity.Editor.Dialogs.MockLoginDialog.SendSuccessResult start.*/
            SendSuccessResult: function() {},
            /*Facebook.Unity.Editor.Dialogs.MockLoginDialog.SendSuccessResult end.*/


        }
    });
    /*Facebook.Unity.Editor.Dialogs.MockLoginDialog end.*/

    /*Facebook.Unity.Editor.Dialogs.MockShareDialog start.*/
    Bridge.define("Facebook.Unity.Editor.Dialogs.MockShareDialog", {
        inherits: [Facebook.Unity.Editor.EditorFacebookMockDialog],
        props: {
            SubTitle: {
                set: function(value) {}
            },
            DialogTitle: {
                get: function() {
                    return null;
                }
            }
        },
        methods: {
            /*Facebook.Unity.Editor.Dialogs.MockShareDialog.DoGui start.*/
            DoGui: function() {},
            /*Facebook.Unity.Editor.Dialogs.MockShareDialog.DoGui end.*/

            /*Facebook.Unity.Editor.Dialogs.MockShareDialog.SendSuccessResult start.*/
            SendSuccessResult: function() {},
            /*Facebook.Unity.Editor.Dialogs.MockShareDialog.SendSuccessResult end.*/

            /*Facebook.Unity.Editor.Dialogs.MockShareDialog.SendCancelResult start.*/
            SendCancelResult: function() {},
            /*Facebook.Unity.Editor.Dialogs.MockShareDialog.SendCancelResult end.*/


        }
    });
    /*Facebook.Unity.Editor.Dialogs.MockShareDialog end.*/

    /*Facebook.Unity.Mobile.IMobileFacebook start.*/
    Bridge.define("Facebook.Unity.Mobile.IMobileFacebook", {
        inherits: [Facebook.Unity.IFacebook],
        $kind: "interface"
    });
    /*Facebook.Unity.Mobile.IMobileFacebook end.*/

    /*Facebook.Unity.Mobile.IMobileFacebookResultHandler start.*/
    Bridge.define("Facebook.Unity.Mobile.IMobileFacebookResultHandler", {
        inherits: [Facebook.Unity.IFacebookResultHandler],
        $kind: "interface"
    });
    /*Facebook.Unity.Mobile.IMobileFacebookResultHandler end.*/

    /*Facebook.Unity.Editor.EditorFacebookLoader start.*/
    Bridge.define("Facebook.Unity.Editor.EditorFacebookLoader", {
        inherits: [Facebook.Unity.FB.CompiledFacebookLoader],
        props: {
            FBGameObject: {
                get: function() {
                    return null;
                }
            }
        }
    });
    /*Facebook.Unity.Editor.EditorFacebookLoader end.*/

    /*Facebook.Unity.Editor.EditorWrapper start.*/
    Bridge.define("Facebook.Unity.Editor.EditorWrapper", {
        inherits: [Facebook.Unity.Editor.IEditorWrapper],
        alias: [
            "Init", "Facebook$Unity$Editor$IEditorWrapper$Init",
            "ShowLoginMockDialog", "Facebook$Unity$Editor$IEditorWrapper$ShowLoginMockDialog",
            "ShowAppRequestMockDialog", "Facebook$Unity$Editor$IEditorWrapper$ShowAppRequestMockDialog",
            "ShowGameGroupCreateMockDialog", "Facebook$Unity$Editor$IEditorWrapper$ShowGameGroupCreateMockDialog",
            "ShowGameGroupJoinMockDialog", "Facebook$Unity$Editor$IEditorWrapper$ShowGameGroupJoinMockDialog",
            "ShowPayMockDialog", "Facebook$Unity$Editor$IEditorWrapper$ShowPayMockDialog",
            "ShowMockShareDialog", "Facebook$Unity$Editor$IEditorWrapper$ShowMockShareDialog",
            "ShowMockFriendFinderDialog", "Facebook$Unity$Editor$IEditorWrapper$ShowMockFriendFinderDialog"
        ],
        ctors: {
            ctor: function(callbackHandler) {
                this.$initialize();
            }
        },
        methods: {
            /*Facebook.Unity.Editor.EditorWrapper.Init start.*/
            Init: function() {},
            /*Facebook.Unity.Editor.EditorWrapper.Init end.*/

            /*Facebook.Unity.Editor.EditorWrapper.ShowLoginMockDialog start.*/
            ShowLoginMockDialog: function(callback, callbackId, permsisions) {},
            /*Facebook.Unity.Editor.EditorWrapper.ShowLoginMockDialog end.*/

            /*Facebook.Unity.Editor.EditorWrapper.ShowAppRequestMockDialog start.*/
            ShowAppRequestMockDialog: function(callback, callbackId) {},
            /*Facebook.Unity.Editor.EditorWrapper.ShowAppRequestMockDialog end.*/

            /*Facebook.Unity.Editor.EditorWrapper.ShowGameGroupCreateMockDialog start.*/
            ShowGameGroupCreateMockDialog: function(callback, callbackId) {},
            /*Facebook.Unity.Editor.EditorWrapper.ShowGameGroupCreateMockDialog end.*/

            /*Facebook.Unity.Editor.EditorWrapper.ShowGameGroupJoinMockDialog start.*/
            ShowGameGroupJoinMockDialog: function(callback, callbackId) {},
            /*Facebook.Unity.Editor.EditorWrapper.ShowGameGroupJoinMockDialog end.*/

            /*Facebook.Unity.Editor.EditorWrapper.ShowPayMockDialog start.*/
            ShowPayMockDialog: function(callback, callbackId) {},
            /*Facebook.Unity.Editor.EditorWrapper.ShowPayMockDialog end.*/

            /*Facebook.Unity.Editor.EditorWrapper.ShowMockShareDialog start.*/
            ShowMockShareDialog: function(callback, subTitle, callbackId) {},
            /*Facebook.Unity.Editor.EditorWrapper.ShowMockShareDialog end.*/

            /*Facebook.Unity.Editor.EditorWrapper.ShowMockFriendFinderDialog start.*/
            ShowMockFriendFinderDialog: function(callback, subTitle, callbackId) {},
            /*Facebook.Unity.Editor.EditorWrapper.ShowMockFriendFinderDialog end.*/


        }
    });
    /*Facebook.Unity.Editor.EditorWrapper end.*/

    /*Facebook.Unity.FacebookScheduler start.*/
    Bridge.define("Facebook.Unity.FacebookScheduler", {
        inherits: [UnityEngine.MonoBehaviour, Facebook.Unity.IFacebookScheduler],
        alias: ["Schedule", "Facebook$Unity$IFacebookScheduler$Schedule"],
        methods: {
            /*Facebook.Unity.FacebookScheduler.Schedule start.*/
            Schedule: function(action, delay) {},
            /*Facebook.Unity.FacebookScheduler.Schedule end.*/

            /*Facebook.Unity.FacebookScheduler.DelayEvent start.*/
            DelayEvent: function(action, delay) {
                return null;
            },
            /*Facebook.Unity.FacebookScheduler.DelayEvent end.*/


        }
    });
    /*Facebook.Unity.FacebookScheduler end.*/

    /*Facebook.Unity.FacebookSchedulerFactory start.*/
    Bridge.define("Facebook.Unity.FacebookSchedulerFactory", {
        inherits: [Facebook.Unity.IFacebookSchedulerFactory],
        alias: ["GetInstance", "Facebook$Unity$IFacebookSchedulerFactory$GetInstance"],
        methods: {
            /*Facebook.Unity.FacebookSchedulerFactory.GetInstance start.*/
            GetInstance: function() {
                return null;
            },
            /*Facebook.Unity.FacebookSchedulerFactory.GetInstance end.*/


        }
    });
    /*Facebook.Unity.FacebookSchedulerFactory end.*/

    /*Facebook.Unity.Gameroom.IGameroomFacebookResultHandler start.*/
    Bridge.define("Facebook.Unity.Gameroom.IGameroomFacebookResultHandler", {
        inherits: [Facebook.Unity.IFacebookResultHandler],
        $kind: "interface"
    });
    /*Facebook.Unity.Gameroom.IGameroomFacebookResultHandler end.*/

    /*Facebook.Unity.Gameroom.IGameroomFacebook start.*/
    Bridge.define("Facebook.Unity.Gameroom.IGameroomFacebook", {
        inherits: [Facebook.Unity.IFacebook, Facebook.Unity.IPayFacebook],
        $kind: "interface"
    });
    /*Facebook.Unity.Gameroom.IGameroomFacebook end.*/

    /*Facebook.Unity.Gameroom.GameroomFacebookLoader start.*/
    Bridge.define("Facebook.Unity.Gameroom.GameroomFacebookLoader", {
        inherits: [Facebook.Unity.FB.CompiledFacebookLoader],
        props: {
            FBGameObject: {
                get: function() {
                    return null;
                }
            }
        }
    });
    /*Facebook.Unity.Gameroom.GameroomFacebookLoader end.*/

    /*Facebook.Unity.Gameroom.GameroomWrapper start.*/
    Bridge.define("Facebook.Unity.Gameroom.GameroomWrapper", {
        inherits: [Facebook.Unity.Gameroom.IGameroomWrapper],
        fields: {
            PipeResponse: null
        },
        alias: [
            "PipeResponse", "Facebook$Unity$Gameroom$IGameroomWrapper$PipeResponse",
            "Init", "Facebook$Unity$Gameroom$IGameroomWrapper$Init",
            "DoLoginRequest", "Facebook$Unity$Gameroom$IGameroomWrapper$DoLoginRequest",
            "DoPayRequest", "Facebook$Unity$Gameroom$IGameroomWrapper$DoPayRequest",
            "DoFeedShareRequest", "Facebook$Unity$Gameroom$IGameroomWrapper$DoFeedShareRequest",
            "DoAppRequestRequest", "Facebook$Unity$Gameroom$IGameroomWrapper$DoAppRequestRequest",
            "DoPayPremiumRequest", "Facebook$Unity$Gameroom$IGameroomWrapper$DoPayPremiumRequest",
            "DoHasLicenseRequest", "Facebook$Unity$Gameroom$IGameroomWrapper$DoHasLicenseRequest"
        ],
        methods: {
            /*Facebook.Unity.Gameroom.GameroomWrapper.Init start.*/
            Init: function(completeDelegate) {},
            /*Facebook.Unity.Gameroom.GameroomWrapper.Init end.*/

            /*Facebook.Unity.Gameroom.GameroomWrapper.DoLoginRequest start.*/
            DoLoginRequest: function(appID, permissions, callbackId, completeDelegate) {},
            /*Facebook.Unity.Gameroom.GameroomWrapper.DoLoginRequest end.*/

            /*Facebook.Unity.Gameroom.GameroomWrapper.DoPayRequest start.*/
            DoPayRequest: function(appId, method, action, product, productId, quantity, quantityMin, quantityMax, requestId, pricepointId, testCurrency, developerPayload, callbackId, completeDelegate) {},
            /*Facebook.Unity.Gameroom.GameroomWrapper.DoPayRequest end.*/

            /*Facebook.Unity.Gameroom.GameroomWrapper.DoFeedShareRequest start.*/
            DoFeedShareRequest: function(appId, toId, link, linkName, linkCaption, linkDescription, pictureLink, mediaSource, callbackId, completeDelegate) {},
            /*Facebook.Unity.Gameroom.GameroomWrapper.DoFeedShareRequest end.*/

            /*Facebook.Unity.Gameroom.GameroomWrapper.DoAppRequestRequest start.*/
            DoAppRequestRequest: function(appId, message, actionType, objectId, to, filters, excludeIDs, maxRecipients, data, title, callbackId, completeDelegate) {},
            /*Facebook.Unity.Gameroom.GameroomWrapper.DoAppRequestRequest end.*/

            /*Facebook.Unity.Gameroom.GameroomWrapper.DoPayPremiumRequest start.*/
            DoPayPremiumRequest: function(appId, callbackId, completeDelegate) {},
            /*Facebook.Unity.Gameroom.GameroomWrapper.DoPayPremiumRequest end.*/

            /*Facebook.Unity.Gameroom.GameroomWrapper.DoHasLicenseRequest start.*/
            DoHasLicenseRequest: function(appId, callbackId, completeDelegate) {},
            /*Facebook.Unity.Gameroom.GameroomWrapper.DoHasLicenseRequest end.*/

            /*Facebook.Unity.Gameroom.GameroomWrapper.SendRequest start.*/
            SendRequest: function(T, request) {},
            /*Facebook.Unity.Gameroom.GameroomWrapper.SendRequest end.*/


        }
    });
    /*Facebook.Unity.Gameroom.GameroomWrapper end.*/

    /*Facebook.Unity.IGamingServicesFriendFinderResult start.*/
    Bridge.define("Facebook.Unity.IGamingServicesFriendFinderResult", {
        inherits: [Facebook.Unity.IResult],
        $kind: "interface"
    });
    /*Facebook.Unity.IGamingServicesFriendFinderResult end.*/

    /*Facebook.Unity.IGraphResult start.*/
    Bridge.define("Facebook.Unity.IGraphResult", {
        inherits: [Facebook.Unity.IResult],
        $kind: "interface"
    });
    /*Facebook.Unity.IGraphResult end.*/

    /*Facebook.Unity.IGroupCreateResult start.*/
    Bridge.define("Facebook.Unity.IGroupCreateResult", {
        inherits: [Facebook.Unity.IResult],
        $kind: "interface"
    });
    /*Facebook.Unity.IGroupCreateResult end.*/

    /*Facebook.Unity.IGroupJoinResult start.*/
    Bridge.define("Facebook.Unity.IGroupJoinResult", {
        inherits: [Facebook.Unity.IResult],
        $kind: "interface"
    });
    /*Facebook.Unity.IGroupJoinResult end.*/

    /*Facebook.Unity.IHasLicenseResult start.*/
    Bridge.define("Facebook.Unity.IHasLicenseResult", {
        inherits: [Facebook.Unity.IResult],
        $kind: "interface"
    });
    /*Facebook.Unity.IHasLicenseResult end.*/

    /*Facebook.Unity.IIAPReadyResult start.*/
    Bridge.define("Facebook.Unity.IIAPReadyResult", {
        inherits: [Facebook.Unity.IResult],
        $kind: "interface"
    });
    /*Facebook.Unity.IIAPReadyResult end.*/

    /*Facebook.Unity.IInitCloudGameResult start.*/
    Bridge.define("Facebook.Unity.IInitCloudGameResult", {
        inherits: [Facebook.Unity.IResult],
        $kind: "interface"
    });
    /*Facebook.Unity.IInitCloudGameResult end.*/

    /*Facebook.Unity.IInterstitialAdResult start.*/
    Bridge.define("Facebook.Unity.IInterstitialAdResult", {
        inherits: [Facebook.Unity.IResult],
        $kind: "interface"
    });
    /*Facebook.Unity.IInterstitialAdResult end.*/

    /*Facebook.Unity.ILoginResult start.*/
    Bridge.define("Facebook.Unity.ILoginResult", {
        inherits: [Facebook.Unity.IResult],
        $kind: "interface"
    });
    /*Facebook.Unity.ILoginResult end.*/

    /*Facebook.Unity.IMediaUploadResult start.*/
    Bridge.define("Facebook.Unity.IMediaUploadResult", {
        inherits: [Facebook.Unity.IResult],
        $kind: "interface"
    });
    /*Facebook.Unity.IMediaUploadResult end.*/

    /*Facebook.Unity.IOpenAppStoreResult start.*/
    Bridge.define("Facebook.Unity.IOpenAppStoreResult", {
        inherits: [Facebook.Unity.IResult],
        $kind: "interface"
    });
    /*Facebook.Unity.IOpenAppStoreResult end.*/

    /*Facebook.Unity.IOS.IOSWrapper start.*/
    Bridge.define("Facebook.Unity.IOS.IOSWrapper", {
        inherits: [Facebook.Unity.Mobile.IOS.IIOSWrapper],
        alias: [
            "Init", "Facebook$Unity$Mobile$IOS$IIOSWrapper$Init",
            "LoginWithTrackingPreference", "Facebook$Unity$Mobile$IOS$IIOSWrapper$LoginWithTrackingPreference",
            "LogInWithReadPermissions", "Facebook$Unity$Mobile$IOS$IIOSWrapper$LogInWithReadPermissions",
            "LogInWithPublishPermissions", "Facebook$Unity$Mobile$IOS$IIOSWrapper$LogInWithPublishPermissions",
            "LogOut", "Facebook$Unity$Mobile$IOS$IIOSWrapper$LogOut",
            "SetPushNotificationsDeviceTokenString", "Facebook$Unity$Mobile$IOS$IIOSWrapper$SetPushNotificationsDeviceTokenString",
            "SetShareDialogMode", "Facebook$Unity$Mobile$IOS$IIOSWrapper$SetShareDialogMode",
            "ShareLink", "Facebook$Unity$Mobile$IOS$IIOSWrapper$ShareLink",
            "FeedShare", "Facebook$Unity$Mobile$IOS$IIOSWrapper$FeedShare",
            "AppRequest", "Facebook$Unity$Mobile$IOS$IIOSWrapper$AppRequest",
            "OpenFriendFinderDialog", "Facebook$Unity$Mobile$IOS$IIOSWrapper$OpenFriendFinderDialog",
            "FBAppEventsActivateApp", "Facebook$Unity$Mobile$IOS$IIOSWrapper$FBAppEventsActivateApp",
            "LogAppEvent", "Facebook$Unity$Mobile$IOS$IIOSWrapper$LogAppEvent",
            "LogPurchaseAppEvent", "Facebook$Unity$Mobile$IOS$IIOSWrapper$LogPurchaseAppEvent",
            "FBAppEventsSetLimitEventUsage", "Facebook$Unity$Mobile$IOS$IIOSWrapper$FBAppEventsSetLimitEventUsage",
            "FBAutoLogAppEventsEnabled", "Facebook$Unity$Mobile$IOS$IIOSWrapper$FBAutoLogAppEventsEnabled",
            "FBAdvertiserIDCollectionEnabled", "Facebook$Unity$Mobile$IOS$IIOSWrapper$FBAdvertiserIDCollectionEnabled",
            "FBAdvertiserTrackingEnabled", "Facebook$Unity$Mobile$IOS$IIOSWrapper$FBAdvertiserTrackingEnabled",
            "GetAppLink", "Facebook$Unity$Mobile$IOS$IIOSWrapper$GetAppLink",
            "FBSdkVersion", "Facebook$Unity$Mobile$IOS$IIOSWrapper$FBSdkVersion",
            "FBSetUserID", "Facebook$Unity$Mobile$IOS$IIOSWrapper$FBSetUserID",
            "FBGetUserID", "Facebook$Unity$Mobile$IOS$IIOSWrapper$FBGetUserID",
            "UpdateUserProperties", "Facebook$Unity$Mobile$IOS$IIOSWrapper$UpdateUserProperties",
            "SetDataProcessingOptions", "Facebook$Unity$Mobile$IOS$IIOSWrapper$SetDataProcessingOptions",
            "CurrentAuthenticationToken", "Facebook$Unity$Mobile$IOS$IIOSWrapper$CurrentAuthenticationToken",
            "CurrentProfile", "Facebook$Unity$Mobile$IOS$IIOSWrapper$CurrentProfile",
            "UploadImageToMediaLibrary", "Facebook$Unity$Mobile$IOS$IIOSWrapper$UploadImageToMediaLibrary",
            "UploadVideoToMediaLibrary", "Facebook$Unity$Mobile$IOS$IIOSWrapper$UploadVideoToMediaLibrary",
            "FetchDeferredAppLink", "Facebook$Unity$Mobile$IOS$IIOSWrapper$FetchDeferredAppLink",
            "RefreshCurrentAccessToken", "Facebook$Unity$Mobile$IOS$IIOSWrapper$RefreshCurrentAccessToken"
        ],
        methods: {
            /*Facebook.Unity.IOS.IOSWrapper.Init start.*/
            Init: function(appId, frictionlessRequests, urlSuffix, unityUserAgentSuffix) {},
            /*Facebook.Unity.IOS.IOSWrapper.Init end.*/

            /*Facebook.Unity.IOS.IOSWrapper.LoginWithTrackingPreference start.*/
            LoginWithTrackingPreference: function(requestId, scope, tracking, nonce) {},
            /*Facebook.Unity.IOS.IOSWrapper.LoginWithTrackingPreference end.*/

            /*Facebook.Unity.IOS.IOSWrapper.LogInWithReadPermissions start.*/
            LogInWithReadPermissions: function(requestId, scope) {},
            /*Facebook.Unity.IOS.IOSWrapper.LogInWithReadPermissions end.*/

            /*Facebook.Unity.IOS.IOSWrapper.LogInWithPublishPermissions start.*/
            LogInWithPublishPermissions: function(requestId, scope) {},
            /*Facebook.Unity.IOS.IOSWrapper.LogInWithPublishPermissions end.*/

            /*Facebook.Unity.IOS.IOSWrapper.LogOut start.*/
            LogOut: function() {},
            /*Facebook.Unity.IOS.IOSWrapper.LogOut end.*/

            /*Facebook.Unity.IOS.IOSWrapper.SetPushNotificationsDeviceTokenString start.*/
            SetPushNotificationsDeviceTokenString: function(token) {},
            /*Facebook.Unity.IOS.IOSWrapper.SetPushNotificationsDeviceTokenString end.*/

            /*Facebook.Unity.IOS.IOSWrapper.SetShareDialogMode start.*/
            SetShareDialogMode: function(mode) {},
            /*Facebook.Unity.IOS.IOSWrapper.SetShareDialogMode end.*/

            /*Facebook.Unity.IOS.IOSWrapper.ShareLink start.*/
            ShareLink: function(requestId, contentURL, contentTitle, contentDescription, photoURL) {},
            /*Facebook.Unity.IOS.IOSWrapper.ShareLink end.*/

            /*Facebook.Unity.IOS.IOSWrapper.FeedShare start.*/
            FeedShare: function(requestId, toId, link, linkName, linkCaption, linkDescription, picture, mediaSource) {},
            /*Facebook.Unity.IOS.IOSWrapper.FeedShare end.*/

            /*Facebook.Unity.IOS.IOSWrapper.AppRequest start.*/
            AppRequest: function(requestId, message, actionType, objectId, to, toLength, filters, excludeIds, excludeIdsLength, hasMaxRecipients, maxRecipients, data, title) {},
            /*Facebook.Unity.IOS.IOSWrapper.AppRequest end.*/

            /*Facebook.Unity.IOS.IOSWrapper.OpenFriendFinderDialog start.*/
            OpenFriendFinderDialog: function(requestId) {},
            /*Facebook.Unity.IOS.IOSWrapper.OpenFriendFinderDialog end.*/

            /*Facebook.Unity.IOS.IOSWrapper.FBAppEventsActivateApp start.*/
            FBAppEventsActivateApp: function() {},
            /*Facebook.Unity.IOS.IOSWrapper.FBAppEventsActivateApp end.*/

            /*Facebook.Unity.IOS.IOSWrapper.LogAppEvent start.*/
            LogAppEvent: function(logEvent, valueToSum, numParams, paramKeys, paramVals) {},
            /*Facebook.Unity.IOS.IOSWrapper.LogAppEvent end.*/

            /*Facebook.Unity.IOS.IOSWrapper.LogPurchaseAppEvent start.*/
            LogPurchaseAppEvent: function(logPurchase, currency, numParams, paramKeys, paramVals) {},
            /*Facebook.Unity.IOS.IOSWrapper.LogPurchaseAppEvent end.*/

            /*Facebook.Unity.IOS.IOSWrapper.FBAppEventsSetLimitEventUsage start.*/
            FBAppEventsSetLimitEventUsage: function(limitEventUsage) {},
            /*Facebook.Unity.IOS.IOSWrapper.FBAppEventsSetLimitEventUsage end.*/

            /*Facebook.Unity.IOS.IOSWrapper.FBAutoLogAppEventsEnabled start.*/
            FBAutoLogAppEventsEnabled: function(autoLogAppEventsEnabled) {},
            /*Facebook.Unity.IOS.IOSWrapper.FBAutoLogAppEventsEnabled end.*/

            /*Facebook.Unity.IOS.IOSWrapper.FBAdvertiserIDCollectionEnabled start.*/
            FBAdvertiserIDCollectionEnabled: function(advertiserIDCollectionEnabled) {},
            /*Facebook.Unity.IOS.IOSWrapper.FBAdvertiserIDCollectionEnabled end.*/

            /*Facebook.Unity.IOS.IOSWrapper.FBAdvertiserTrackingEnabled start.*/
            FBAdvertiserTrackingEnabled: function(advertiserTrackingEnabled) {
                return Bridge.getDefaultValue(System.Boolean);
            },
            /*Facebook.Unity.IOS.IOSWrapper.FBAdvertiserTrackingEnabled end.*/

            /*Facebook.Unity.IOS.IOSWrapper.GetAppLink start.*/
            GetAppLink: function(requestId) {},
            /*Facebook.Unity.IOS.IOSWrapper.GetAppLink end.*/

            /*Facebook.Unity.IOS.IOSWrapper.FBSdkVersion start.*/
            FBSdkVersion: function() {
                return null;
            },
            /*Facebook.Unity.IOS.IOSWrapper.FBSdkVersion end.*/

            /*Facebook.Unity.IOS.IOSWrapper.FBSetUserID start.*/
            FBSetUserID: function(userID) {},
            /*Facebook.Unity.IOS.IOSWrapper.FBSetUserID end.*/

            /*Facebook.Unity.IOS.IOSWrapper.FBGetUserID start.*/
            FBGetUserID: function() {
                return null;
            },
            /*Facebook.Unity.IOS.IOSWrapper.FBGetUserID end.*/

            /*Facebook.Unity.IOS.IOSWrapper.UpdateUserProperties start.*/
            UpdateUserProperties: function(numParams, paramKeys, paramVals) {},
            /*Facebook.Unity.IOS.IOSWrapper.UpdateUserProperties end.*/

            /*Facebook.Unity.IOS.IOSWrapper.SetDataProcessingOptions start.*/
            SetDataProcessingOptions: function(options, country, state) {},
            /*Facebook.Unity.IOS.IOSWrapper.SetDataProcessingOptions end.*/

            /*Facebook.Unity.IOS.IOSWrapper.CurrentAuthenticationToken start.*/
            CurrentAuthenticationToken: function() {
                return null;
            },
            /*Facebook.Unity.IOS.IOSWrapper.CurrentAuthenticationToken end.*/

            /*Facebook.Unity.IOS.IOSWrapper.CurrentProfile start.*/
            CurrentProfile: function() {
                return null;
            },
            /*Facebook.Unity.IOS.IOSWrapper.CurrentProfile end.*/

            /*Facebook.Unity.IOS.IOSWrapper.UploadImageToMediaLibrary start.*/
            UploadImageToMediaLibrary: function(requestId, caption, imageUri, shouldLaunchMediaDialog) {},
            /*Facebook.Unity.IOS.IOSWrapper.UploadImageToMediaLibrary end.*/

            /*Facebook.Unity.IOS.IOSWrapper.UploadVideoToMediaLibrary start.*/
            UploadVideoToMediaLibrary: function(requestId, caption, videoUri) {},
            /*Facebook.Unity.IOS.IOSWrapper.UploadVideoToMediaLibrary end.*/

            /*Facebook.Unity.IOS.IOSWrapper.FetchDeferredAppLink start.*/
            FetchDeferredAppLink: function(requestId) {},
            /*Facebook.Unity.IOS.IOSWrapper.FetchDeferredAppLink end.*/

            /*Facebook.Unity.IOS.IOSWrapper.RefreshCurrentAccessToken start.*/
            RefreshCurrentAccessToken: function(requestId) {},
            /*Facebook.Unity.IOS.IOSWrapper.RefreshCurrentAccessToken end.*/


        }
    });
    /*Facebook.Unity.IOS.IOSWrapper end.*/

    /*Facebook.Unity.IPayloadResult start.*/
    Bridge.define("Facebook.Unity.IPayloadResult", {
        inherits: [Facebook.Unity.IResult],
        $kind: "interface"
    });
    /*Facebook.Unity.IPayloadResult end.*/

    /*Facebook.Unity.IPayResult start.*/
    Bridge.define("Facebook.Unity.IPayResult", {
        inherits: [Facebook.Unity.IResult],
        $kind: "interface"
    });
    /*Facebook.Unity.IPayResult end.*/

    /*Facebook.Unity.IPurchaseResult start.*/
    Bridge.define("Facebook.Unity.IPurchaseResult", {
        inherits: [Facebook.Unity.IResult],
        $kind: "interface"
    });
    /*Facebook.Unity.IPurchaseResult end.*/

    /*Facebook.Unity.IPurchasesResult start.*/
    Bridge.define("Facebook.Unity.IPurchasesResult", {
        inherits: [Facebook.Unity.IResult],
        $kind: "interface"
    });
    /*Facebook.Unity.IPurchasesResult end.*/

    /*Facebook.Unity.IRewardedVideoResult start.*/
    Bridge.define("Facebook.Unity.IRewardedVideoResult", {
        inherits: [Facebook.Unity.IResult],
        $kind: "interface"
    });
    /*Facebook.Unity.IRewardedVideoResult end.*/

    /*Facebook.Unity.IScheduleAppToUserNotificationResult start.*/
    Bridge.define("Facebook.Unity.IScheduleAppToUserNotificationResult", {
        inherits: [Facebook.Unity.IResult],
        $kind: "interface"
    });
    /*Facebook.Unity.IScheduleAppToUserNotificationResult end.*/

    /*Facebook.Unity.ISessionScoreResult start.*/
    Bridge.define("Facebook.Unity.ISessionScoreResult", {
        inherits: [Facebook.Unity.IResult],
        $kind: "interface"
    });
    /*Facebook.Unity.ISessionScoreResult end.*/

    /*Facebook.Unity.IShareResult start.*/
    Bridge.define("Facebook.Unity.IShareResult", {
        inherits: [Facebook.Unity.IResult],
        $kind: "interface"
    });
    /*Facebook.Unity.IShareResult end.*/

    /*Facebook.Unity.MethodCall$1 start.*/
    Bridge.define("Facebook.Unity.MethodCall$1", function(T) {
        return {
            props: {
                MethodName: {
                    get: function() {
                        return null;
                    }
                },
                Callback: {
                    set: function(value) {}
                },
                FacebookImpl: {
                    get: function() {
                        return null;
                    }
                },
                Parameters: {
                    get: function() {
                        return null;
                    }
                }
            },
            ctors: {
                ctor: function(facebookImpl, methodName) {
                    this.$initialize();
                }
            }
        };
    });
    /*Facebook.Unity.MethodCall$1 end.*/

    /*Facebook.Unity.Mobile.IMobileFacebookCallbackHandler start.*/
    Bridge.define("Facebook.Unity.Mobile.IMobileFacebookCallbackHandler", {
        inherits: [Facebook.Unity.IFacebookCallbackHandler],
        $kind: "interface"
    });
    /*Facebook.Unity.Mobile.IMobileFacebookCallbackHandler end.*/

    /*Facebook.Unity.Mobile.Android.AndroidFacebookLoader start.*/
    Bridge.define("Facebook.Unity.Mobile.Android.AndroidFacebookLoader", {
        inherits: [Facebook.Unity.FB.CompiledFacebookLoader],
        props: {
            FBGameObject: {
                get: function() {
                    return null;
                }
            }
        }
    });
    /*Facebook.Unity.Mobile.Android.AndroidFacebookLoader end.*/

    /*Facebook.Unity.Mobile.IOS.IOSFacebookLoader start.*/
    Bridge.define("Facebook.Unity.Mobile.IOS.IOSFacebookLoader", {
        inherits: [Facebook.Unity.FB.CompiledFacebookLoader],
        props: {
            FBGameObject: {
                get: function() {
                    return null;
                }
            }
        }
    });
    /*Facebook.Unity.Mobile.IOS.IOSFacebookLoader end.*/

    /*FacebookGames.PipePacketRequest start.*/
    Bridge.define("FacebookGames.PipePacketRequest", {
        inherits: [FacebookGames.PipePacket],
        fields: {
            AppId: null
        },
        ctors: {
            ctor: function() {
                this.$initialize();
                FacebookGames.PipePacket.ctor.call(this);
            },
            $ctor1: function(appId) {
                this.$initialize();
                FacebookGames.PipePacket.ctor.call(this);
            }
        }
    });
    /*FacebookGames.PipePacketRequest end.*/

    /*FacebookGames.PipePacketResponse start.*/
    Bridge.define("FacebookGames.PipePacketResponse", {
        inherits: [FacebookGames.PipePacket],
        fields: {
            Error: null,
            Cancelled: false
        },
        ctors: {
            ctor: function() {
                this.$initialize();
                FacebookGames.PipePacket.ctor.call(this);
            },
            $ctor1: function(error, cancelled) {
                this.$initialize();
                FacebookGames.PipePacket.ctor.call(this);
            }
        },
        methods: {
            /*FacebookGames.PipePacketResponse.ToDictionary start.*/
            ToDictionary: function() {
                return null;
            },
            /*FacebookGames.PipePacketResponse.ToDictionary end.*/


        }
    });
    /*FacebookGames.PipePacketResponse end.*/

    /*Facebook.Unity.ResultBase start.*/
    Bridge.define("Facebook.Unity.ResultBase", {
        inherits: [Facebook.Unity.IResult, Facebook.Unity.IInternalResult],
        statics: {
            fields: {
                CancelDialogCode: System.Int64(0),
                ErrorCodeKey: null,
                ErrorMessageKey: null
            },
            ctors: {
                init: function() {
                    this.CancelDialogCode = System.Int64(4201);
                    this.ErrorCodeKey = "";
                    this.ErrorMessageKey = "";
                }
            }
        },
        props: {
            Error: {
                get: function() {
                    return null;
                }
            },
            ErrorDictionary: {
                get: function() {
                    return null;
                }
            },
            ResultDictionary: {
                get: function() {
                    return null;
                }
            },
            RawResult: {
                get: function() {
                    return null;
                }
            },
            Cancelled: {
                get: function() {
                    return Bridge.getDefaultValue(System.Boolean);
                }
            },
            CallbackId: {
                get: function() {
                    return null;
                }
            },
            CanvasErrorCode: {
                get: function() {
                    return null;
                }
            }
        },
        alias: [
            "Error", "Facebook$Unity$IResult$Error",
            "ErrorDictionary", "Facebook$Unity$IResult$ErrorDictionary",
            "ResultDictionary", "Facebook$Unity$IResult$ResultDictionary",
            "RawResult", "Facebook$Unity$IResult$RawResult",
            "Cancelled", "Facebook$Unity$IResult$Cancelled",
            "CallbackId", "Facebook$Unity$IInternalResult$CallbackId"
        ],
        methods: {
            /*Facebook.Unity.ResultBase.toString start.*/
            toString: function() {
                return null;
            },
            /*Facebook.Unity.ResultBase.toString end.*/

            /*Facebook.Unity.ResultBase.Init start.*/
            Init: function(result, error, cancelled, callbackId) {},
            /*Facebook.Unity.ResultBase.Init end.*/


        },
        overloads: {
            "ToString()": "toString"
        }
    });
    /*Facebook.Unity.ResultBase end.*/

    /*Facebook.Unity.Canvas.ICanvasFacebookImplementation start.*/
    Bridge.define("Facebook.Unity.Canvas.ICanvasFacebookImplementation", {
        inherits: [Facebook.Unity.Canvas.ICanvasFacebook, Facebook.Unity.IFacebook, Facebook.Unity.Canvas.ICanvasFacebookResultHandler, Facebook.Unity.IFacebookResultHandler, Facebook.Unity.IPayFacebook],
        $kind: "interface"
    });
    /*Facebook.Unity.Canvas.ICanvasFacebookImplementation end.*/

    /*Facebook.Unity.FacebookBase start.*/
    Bridge.define("Facebook.Unity.FacebookBase", {
        inherits: [Facebook.Unity.IFacebook, Facebook.Unity.IFacebookImplementation, Facebook.Unity.IFacebookResultHandler],
        props: {
            SDKUserAgent: {
                get: function() {
                    return null;
                }
            },
            LoggedIn: {
                get: function() {
                    return Bridge.getDefaultValue(System.Boolean);
                }
            },
            Initialized: {
                get: function() {
                    return Bridge.getDefaultValue(System.Boolean);
                }
            },
            CallbackManager: {
                get: function() {
                    return null;
                }
            }
        },
        alias: [
            "SDKUserAgent", "Facebook$Unity$IFacebook$SDKUserAgent",
            "LoggedIn", "Facebook$Unity$IFacebook$LoggedIn",
            "Initialized", "Facebook$Unity$IFacebook$Initialized",
            "LogOut", "Facebook$Unity$IFacebook$LogOut",
            "AppRequest", "Facebook$Unity$IFacebook$AppRequest",
            "API", "Facebook$Unity$IFacebook$API",
            "API$1", "Facebook$Unity$IFacebook$API$1",
            "OnInitComplete", "Facebook$Unity$IFacebookResultHandler$OnInitComplete",
            "OnLogoutComplete", "Facebook$Unity$IFacebookResultHandler$OnLogoutComplete"
        ],
        methods: {
            /*Facebook.Unity.FacebookBase.Init start.*/
            Init: function(onInitComplete) {},
            /*Facebook.Unity.FacebookBase.Init end.*/

            /*Facebook.Unity.FacebookBase.LogOut start.*/
            LogOut: function() {},
            /*Facebook.Unity.FacebookBase.LogOut end.*/

            /*Facebook.Unity.FacebookBase.AppRequest start.*/
            AppRequest: function(message, to, filters, excludeIds, maxRecipients, data, title, callback) {},
            /*Facebook.Unity.FacebookBase.AppRequest end.*/

            /*Facebook.Unity.FacebookBase.API start.*/
            API: function(query, method, formData, callback) {},
            /*Facebook.Unity.FacebookBase.API end.*/

            /*Facebook.Unity.FacebookBase.API$1 start.*/
            API$1: function(query, method, formData, callback) {},
            /*Facebook.Unity.FacebookBase.API$1 end.*/

            /*Facebook.Unity.FacebookBase.OnInitComplete start.*/
            OnInitComplete: function(resultContainer) {},
            /*Facebook.Unity.FacebookBase.OnInitComplete end.*/

            /*Facebook.Unity.FacebookBase.OnLogoutComplete start.*/
            OnLogoutComplete: function(resultContainer) {},
            /*Facebook.Unity.FacebookBase.OnLogoutComplete end.*/

            /*Facebook.Unity.FacebookBase.ValidateAppRequestArgs start.*/
            ValidateAppRequestArgs: function(message, actionType, objectId, to, filters, excludeIds, maxRecipients, data, title, callback) {},
            /*Facebook.Unity.FacebookBase.ValidateAppRequestArgs end.*/

            /*Facebook.Unity.FacebookBase.OnAuthResponse start.*/
            OnAuthResponse: function(result) {},
            /*Facebook.Unity.FacebookBase.OnAuthResponse end.*/


        },
        overloads: {
            "API(string, Facebook.Unity.HttpMethod, UnityEngine.WWWForm, Facebook.Unity.FacebookDelegate<Facebook.Unity.IGraphResult>)": "API$1"
        }
    });
    /*Facebook.Unity.FacebookBase end.*/

    /*Facebook.Unity.Canvas.CanvasFacebookGameObject start.*/
    Bridge.define("Facebook.Unity.Canvas.CanvasFacebookGameObject", {
        inherits: [Facebook.Unity.FacebookGameObject, Facebook.Unity.Canvas.ICanvasFacebookCallbackHandler],
        props: {
            CanvasFacebookImpl: {
                get: function() {
                    return null;
                }
            }
        },
        alias: [
            "OnPayComplete", "Facebook$Unity$Canvas$ICanvasFacebookCallbackHandler$OnPayComplete",
            "OnFacebookAuthResponseChange", "Facebook$Unity$Canvas$ICanvasFacebookCallbackHandler$OnFacebookAuthResponseChange",
            "OnUrlResponse", "Facebook$Unity$Canvas$ICanvasFacebookCallbackHandler$OnUrlResponse",
            "OnHideUnity", "Facebook$Unity$Canvas$ICanvasFacebookCallbackHandler$OnHideUnity"
        ],
        methods: {
            /*Facebook.Unity.Canvas.CanvasFacebookGameObject.OnPayComplete start.*/
            OnPayComplete: function(result) {},
            /*Facebook.Unity.Canvas.CanvasFacebookGameObject.OnPayComplete end.*/

            /*Facebook.Unity.Canvas.CanvasFacebookGameObject.OnFacebookAuthResponseChange start.*/
            OnFacebookAuthResponseChange: function(message) {},
            /*Facebook.Unity.Canvas.CanvasFacebookGameObject.OnFacebookAuthResponseChange end.*/

            /*Facebook.Unity.Canvas.CanvasFacebookGameObject.OnUrlResponse start.*/
            OnUrlResponse: function(message) {},
            /*Facebook.Unity.Canvas.CanvasFacebookGameObject.OnUrlResponse end.*/

            /*Facebook.Unity.Canvas.CanvasFacebookGameObject.OnHideUnity start.*/
            OnHideUnity: function(hide) {},
            /*Facebook.Unity.Canvas.CanvasFacebookGameObject.OnHideUnity end.*/

            /*Facebook.Unity.Canvas.CanvasFacebookGameObject.OnAwake start.*/
            OnAwake: function() {},
            /*Facebook.Unity.Canvas.CanvasFacebookGameObject.OnAwake end.*/


        }
    });
    /*Facebook.Unity.Canvas.CanvasFacebookGameObject end.*/

    /*Facebook.Unity.Mobile.IMobileFacebookImplementation start.*/
    Bridge.define("Facebook.Unity.Mobile.IMobileFacebookImplementation", {
        inherits: [Facebook.Unity.Mobile.IMobileFacebookResultHandler, Facebook.Unity.IFacebook, Facebook.Unity.IFacebookResultHandler, Facebook.Unity.Mobile.IMobileFacebook],
        $kind: "interface"
    });
    /*Facebook.Unity.Mobile.IMobileFacebookImplementation end.*/

    /*Facebook.Unity.Editor.EditorFacebookGameObject start.*/
    Bridge.define("Facebook.Unity.Editor.EditorFacebookGameObject", {
        inherits: [Facebook.Unity.FacebookGameObject],
        methods: {
            /*Facebook.Unity.Editor.EditorFacebookGameObject.OnAwake start.*/
            OnAwake: function() {},
            /*Facebook.Unity.Editor.EditorFacebookGameObject.OnAwake end.*/

            /*Facebook.Unity.Editor.EditorFacebookGameObject.onPurchaseCompleteHandler start.*/
            onPurchaseCompleteHandler: function(data) {},
            /*Facebook.Unity.Editor.EditorFacebookGameObject.onPurchaseCompleteHandler end.*/


        }
    });
    /*Facebook.Unity.Editor.EditorFacebookGameObject end.*/

    /*Facebook.Unity.Gameroom.IGameroomFacebookImplementation start.*/
    Bridge.define("Facebook.Unity.Gameroom.IGameroomFacebookImplementation", {
        inherits: [Facebook.Unity.IFacebook, Facebook.Unity.Gameroom.IGameroomFacebook, Facebook.Unity.IFacebookResultHandler, Facebook.Unity.Gameroom.IGameroomFacebookResultHandler, Facebook.Unity.IPayFacebook],
        $kind: "interface"
    });
    /*Facebook.Unity.Gameroom.IGameroomFacebookImplementation end.*/

    /*Facebook.Unity.Gameroom.GameroomFacebookGameObject start.*/
    Bridge.define("Facebook.Unity.Gameroom.GameroomFacebookGameObject", {
        inherits: [Facebook.Unity.FacebookGameObject],
        props: {
            GameroomFacebookImpl: {
                get: function() {
                    return null;
                }
            }
        },
        methods: {
            /*Facebook.Unity.Gameroom.GameroomFacebookGameObject.WaitForResponse start.*/
            WaitForResponse: function(onCompleteDelegate, callbackId) {},
            /*Facebook.Unity.Gameroom.GameroomFacebookGameObject.WaitForResponse end.*/

            /*Facebook.Unity.Gameroom.GameroomFacebookGameObject.OnAwake start.*/
            OnAwake: function() {},
            /*Facebook.Unity.Gameroom.GameroomFacebookGameObject.OnAwake end.*/


        }
    });
    /*Facebook.Unity.Gameroom.GameroomFacebookGameObject end.*/

    /*Facebook.Unity.ILoginStatusResult start.*/
    Bridge.define("Facebook.Unity.ILoginStatusResult", {
        inherits: [Facebook.Unity.IResult, Facebook.Unity.ILoginResult],
        $kind: "interface"
    });
    /*Facebook.Unity.ILoginStatusResult end.*/

    /*Facebook.Unity.Mobile.MobileFacebookGameObject start.*/
    Bridge.define("Facebook.Unity.Mobile.MobileFacebookGameObject", {
        inherits: [Facebook.Unity.FacebookGameObject, Facebook.Unity.Mobile.IMobileFacebookCallbackHandler],
        props: {
            MobileFacebook: {
                get: function() {
                    return null;
                }
            }
        },
        alias: [
            "OnFetchDeferredAppLinkComplete", "Facebook$Unity$Mobile$IMobileFacebookCallbackHandler$OnFetchDeferredAppLinkComplete",
            "OnRefreshCurrentAccessTokenComplete", "Facebook$Unity$Mobile$IMobileFacebookCallbackHandler$OnRefreshCurrentAccessTokenComplete",
            "OnFriendFinderComplete", "Facebook$Unity$Mobile$IMobileFacebookCallbackHandler$OnFriendFinderComplete",
            "OnUploadImageToMediaLibraryComplete", "Facebook$Unity$Mobile$IMobileFacebookCallbackHandler$OnUploadImageToMediaLibraryComplete",
            "OnUploadVideoToMediaLibraryComplete", "Facebook$Unity$Mobile$IMobileFacebookCallbackHandler$OnUploadVideoToMediaLibraryComplete",
            "OnOnIAPReadyComplete", "Facebook$Unity$Mobile$IMobileFacebookCallbackHandler$OnOnIAPReadyComplete",
            "OnGetCatalogComplete", "Facebook$Unity$Mobile$IMobileFacebookCallbackHandler$OnGetCatalogComplete",
            "OnGetPurchasesComplete", "Facebook$Unity$Mobile$IMobileFacebookCallbackHandler$OnGetPurchasesComplete",
            "OnPurchaseComplete", "Facebook$Unity$Mobile$IMobileFacebookCallbackHandler$OnPurchaseComplete",
            "OnConsumePurchaseComplete", "Facebook$Unity$Mobile$IMobileFacebookCallbackHandler$OnConsumePurchaseComplete",
            "OnInitCloudGameComplete", "Facebook$Unity$Mobile$IMobileFacebookCallbackHandler$OnInitCloudGameComplete",
            "OnScheduleAppToUserNotificationComplete", "Facebook$Unity$Mobile$IMobileFacebookCallbackHandler$OnScheduleAppToUserNotificationComplete",
            "OnLoadInterstitialAdComplete", "Facebook$Unity$Mobile$IMobileFacebookCallbackHandler$OnLoadInterstitialAdComplete",
            "OnShowInterstitialAdComplete", "Facebook$Unity$Mobile$IMobileFacebookCallbackHandler$OnShowInterstitialAdComplete",
            "OnLoadRewardedVideoComplete", "Facebook$Unity$Mobile$IMobileFacebookCallbackHandler$OnLoadRewardedVideoComplete",
            "OnShowRewardedVideoComplete", "Facebook$Unity$Mobile$IMobileFacebookCallbackHandler$OnShowRewardedVideoComplete",
            "OnGetPayloadComplete", "Facebook$Unity$Mobile$IMobileFacebookCallbackHandler$OnGetPayloadComplete",
            "OnPostSessionScoreComplete", "Facebook$Unity$Mobile$IMobileFacebookCallbackHandler$OnPostSessionScoreComplete",
            "OnOpenAppStoreComplete", "Facebook$Unity$Mobile$IMobileFacebookCallbackHandler$OnOpenAppStoreComplete"
        ],
        methods: {
            /*Facebook.Unity.Mobile.MobileFacebookGameObject.OnFetchDeferredAppLinkComplete start.*/
            OnFetchDeferredAppLinkComplete: function(message) {},
            /*Facebook.Unity.Mobile.MobileFacebookGameObject.OnFetchDeferredAppLinkComplete end.*/

            /*Facebook.Unity.Mobile.MobileFacebookGameObject.OnRefreshCurrentAccessTokenComplete start.*/
            OnRefreshCurrentAccessTokenComplete: function(message) {},
            /*Facebook.Unity.Mobile.MobileFacebookGameObject.OnRefreshCurrentAccessTokenComplete end.*/

            /*Facebook.Unity.Mobile.MobileFacebookGameObject.OnFriendFinderComplete start.*/
            OnFriendFinderComplete: function(message) {},
            /*Facebook.Unity.Mobile.MobileFacebookGameObject.OnFriendFinderComplete end.*/

            /*Facebook.Unity.Mobile.MobileFacebookGameObject.OnUploadImageToMediaLibraryComplete start.*/
            OnUploadImageToMediaLibraryComplete: function(message) {},
            /*Facebook.Unity.Mobile.MobileFacebookGameObject.OnUploadImageToMediaLibraryComplete end.*/

            /*Facebook.Unity.Mobile.MobileFacebookGameObject.OnUploadVideoToMediaLibraryComplete start.*/
            OnUploadVideoToMediaLibraryComplete: function(message) {},
            /*Facebook.Unity.Mobile.MobileFacebookGameObject.OnUploadVideoToMediaLibraryComplete end.*/

            /*Facebook.Unity.Mobile.MobileFacebookGameObject.OnOnIAPReadyComplete start.*/
            OnOnIAPReadyComplete: function(message) {},
            /*Facebook.Unity.Mobile.MobileFacebookGameObject.OnOnIAPReadyComplete end.*/

            /*Facebook.Unity.Mobile.MobileFacebookGameObject.OnGetCatalogComplete start.*/
            OnGetCatalogComplete: function(message) {},
            /*Facebook.Unity.Mobile.MobileFacebookGameObject.OnGetCatalogComplete end.*/

            /*Facebook.Unity.Mobile.MobileFacebookGameObject.OnGetPurchasesComplete start.*/
            OnGetPurchasesComplete: function(message) {},
            /*Facebook.Unity.Mobile.MobileFacebookGameObject.OnGetPurchasesComplete end.*/

            /*Facebook.Unity.Mobile.MobileFacebookGameObject.OnPurchaseComplete start.*/
            OnPurchaseComplete: function(message) {},
            /*Facebook.Unity.Mobile.MobileFacebookGameObject.OnPurchaseComplete end.*/

            /*Facebook.Unity.Mobile.MobileFacebookGameObject.OnConsumePurchaseComplete start.*/
            OnConsumePurchaseComplete: function(message) {},
            /*Facebook.Unity.Mobile.MobileFacebookGameObject.OnConsumePurchaseComplete end.*/

            /*Facebook.Unity.Mobile.MobileFacebookGameObject.OnInitCloudGameComplete start.*/
            OnInitCloudGameComplete: function(message) {},
            /*Facebook.Unity.Mobile.MobileFacebookGameObject.OnInitCloudGameComplete end.*/

            /*Facebook.Unity.Mobile.MobileFacebookGameObject.OnScheduleAppToUserNotificationComplete start.*/
            OnScheduleAppToUserNotificationComplete: function(message) {},
            /*Facebook.Unity.Mobile.MobileFacebookGameObject.OnScheduleAppToUserNotificationComplete end.*/

            /*Facebook.Unity.Mobile.MobileFacebookGameObject.OnLoadInterstitialAdComplete start.*/
            OnLoadInterstitialAdComplete: function(message) {},
            /*Facebook.Unity.Mobile.MobileFacebookGameObject.OnLoadInterstitialAdComplete end.*/

            /*Facebook.Unity.Mobile.MobileFacebookGameObject.OnShowInterstitialAdComplete start.*/
            OnShowInterstitialAdComplete: function(message) {},
            /*Facebook.Unity.Mobile.MobileFacebookGameObject.OnShowInterstitialAdComplete end.*/

            /*Facebook.Unity.Mobile.MobileFacebookGameObject.OnLoadRewardedVideoComplete start.*/
            OnLoadRewardedVideoComplete: function(message) {},
            /*Facebook.Unity.Mobile.MobileFacebookGameObject.OnLoadRewardedVideoComplete end.*/

            /*Facebook.Unity.Mobile.MobileFacebookGameObject.OnShowRewardedVideoComplete start.*/
            OnShowRewardedVideoComplete: function(message) {},
            /*Facebook.Unity.Mobile.MobileFacebookGameObject.OnShowRewardedVideoComplete end.*/

            /*Facebook.Unity.Mobile.MobileFacebookGameObject.OnGetPayloadComplete start.*/
            OnGetPayloadComplete: function(message) {},
            /*Facebook.Unity.Mobile.MobileFacebookGameObject.OnGetPayloadComplete end.*/

            /*Facebook.Unity.Mobile.MobileFacebookGameObject.OnPostSessionScoreComplete start.*/
            OnPostSessionScoreComplete: function(message) {},
            /*Facebook.Unity.Mobile.MobileFacebookGameObject.OnPostSessionScoreComplete end.*/

            /*Facebook.Unity.Mobile.MobileFacebookGameObject.OnOpenAppStoreComplete start.*/
            OnOpenAppStoreComplete: function(message) {},
            /*Facebook.Unity.Mobile.MobileFacebookGameObject.OnOpenAppStoreComplete end.*/


        }
    });
    /*Facebook.Unity.Mobile.MobileFacebookGameObject end.*/

    /*FacebookGames.AppRequestRequest start.*/
    Bridge.define("FacebookGames.AppRequestRequest", {
        inherits: [FacebookGames.PipePacketRequest],
        fields: {
            Message: null,
            ActionType: null,
            ObjectId: null,
            To: null,
            Filters: null,
            ExcludeIDs: null,
            MaxRecipients: null,
            Data: null,
            Title: null
        },
        ctors: {
            ctor: function() {
                this.$initialize();
                FacebookGames.PipePacketRequest.$ctor1.call(this, null);
            },
            $ctor1: function(appId, message, actionType, objectId, to, filters, excludeIDs, maxRecipients, data, title) {
                this.$initialize();
                FacebookGames.PipePacketRequest.$ctor1.call(this, null);
            }
        }
    });
    /*FacebookGames.AppRequestRequest end.*/

    /*FacebookGames.AppRequestResponse start.*/
    Bridge.define("FacebookGames.AppRequestResponse", {
        inherits: [FacebookGames.PipePacketResponse],
        fields: {
            RequestObjectId: null,
            To: null
        },
        ctors: {
            ctor: function() {
                this.$initialize();
                FacebookGames.PipePacketResponse.$ctor1.call(this, null, Bridge.getDefaultValue(System.Boolean));
            },
            $ctor1: function(requestObjectId, to, error, cancelled) {
                this.$initialize();
                FacebookGames.PipePacketResponse.$ctor1.call(this, null, Bridge.getDefaultValue(System.Boolean));
            }
        },
        methods: {
            /*FacebookGames.AppRequestResponse.ToDictionary start.*/
            ToDictionary: function() {
                return null;
            },
            /*FacebookGames.AppRequestResponse.ToDictionary end.*/


        }
    });
    /*FacebookGames.AppRequestResponse end.*/

    /*FacebookGames.FeedShareRequest start.*/
    Bridge.define("FacebookGames.FeedShareRequest", {
        inherits: [FacebookGames.PipePacketRequest],
        fields: {
            ToId: null,
            Link: null,
            LinkName: null,
            LinkCaption: null,
            LinkDescription: null,
            PictureLink: null,
            MediaSource: null
        },
        ctors: {
            ctor: function() {
                this.$initialize();
                FacebookGames.PipePacketRequest.$ctor1.call(this, null);
            },
            $ctor1: function(appId, toId, link, linkName, linkCaption, linkDescription, pictureLink, mediaSource) {
                this.$initialize();
                FacebookGames.PipePacketRequest.$ctor1.call(this, null);
            }
        }
    });
    /*FacebookGames.FeedShareRequest end.*/

    /*FacebookGames.FeedShareResponse start.*/
    Bridge.define("FacebookGames.FeedShareResponse", {
        inherits: [FacebookGames.PipePacketResponse],
        fields: {
            PostId: null
        },
        ctors: {
            ctor: function() {
                this.$initialize();
                FacebookGames.PipePacketResponse.$ctor1.call(this, null, Bridge.getDefaultValue(System.Boolean));
            },
            $ctor1: function(postId, error, cancelled) {
                this.$initialize();
                FacebookGames.PipePacketResponse.$ctor1.call(this, null, Bridge.getDefaultValue(System.Boolean));
            }
        },
        methods: {
            /*FacebookGames.FeedShareResponse.ToDictionary start.*/
            ToDictionary: function() {
                return null;
            },
            /*FacebookGames.FeedShareResponse.ToDictionary end.*/


        }
    });
    /*FacebookGames.FeedShareResponse end.*/

    /*FacebookGames.HasLicenseRequest start.*/
    Bridge.define("FacebookGames.HasLicenseRequest", {
        inherits: [FacebookGames.PipePacketRequest],
        ctors: {
            ctor: function() {
                this.$initialize();
                FacebookGames.PipePacketRequest.$ctor1.call(this, null);
            },
            $ctor1: function(appId) {
                this.$initialize();
                FacebookGames.PipePacketRequest.$ctor1.call(this, null);
            }
        }
    });
    /*FacebookGames.HasLicenseRequest end.*/

    /*FacebookGames.HasLicenseResponse start.*/
    Bridge.define("FacebookGames.HasLicenseResponse", {
        inherits: [FacebookGames.PipePacketResponse],
        fields: {
            HasLicense: false
        },
        ctors: {
            ctor: function() {
                this.$initialize();
                FacebookGames.PipePacketResponse.$ctor1.call(this, null, Bridge.getDefaultValue(System.Boolean));
            }
        },
        methods: {
            /*FacebookGames.HasLicenseResponse.ToDictionary start.*/
            ToDictionary: function() {
                return null;
            },
            /*FacebookGames.HasLicenseResponse.ToDictionary end.*/


        }
    });
    /*FacebookGames.HasLicenseResponse end.*/

    /*FacebookGames.LoginRequest start.*/
    Bridge.define("FacebookGames.LoginRequest", {
        inherits: [FacebookGames.PipePacketRequest],
        fields: {
            Permissions: null
        },
        ctors: {
            ctor: function() {
                this.$initialize();
                FacebookGames.PipePacketRequest.$ctor1.call(this, null);
            },
            $ctor1: function(appId, permissions) {
                this.$initialize();
                FacebookGames.PipePacketRequest.$ctor1.call(this, null);
            }
        }
    });
    /*FacebookGames.LoginRequest end.*/

    /*FacebookGames.LoginResponse start.*/
    Bridge.define("FacebookGames.LoginResponse", {
        inherits: [FacebookGames.PipePacketResponse],
        fields: {
            UserId: null,
            AccessToken: null,
            ExpirationTimestamp: null,
            Permissions: null
        },
        ctors: {
            ctor: function() {
                this.$initialize();
                FacebookGames.PipePacketResponse.$ctor1.call(this, null, Bridge.getDefaultValue(System.Boolean));
            },
            $ctor1: function(userId, accessToken, expirationTimestamp, permissions, error, cancelled) {
                this.$initialize();
                FacebookGames.PipePacketResponse.$ctor1.call(this, null, Bridge.getDefaultValue(System.Boolean));
            }
        },
        methods: {
            /*FacebookGames.LoginResponse.ToDictionary start.*/
            ToDictionary: function() {
                return null;
            },
            /*FacebookGames.LoginResponse.ToDictionary end.*/


        }
    });
    /*FacebookGames.LoginResponse end.*/

    /*FacebookGames.PayPremiumRequest start.*/
    Bridge.define("FacebookGames.PayPremiumRequest", {
        inherits: [FacebookGames.PipePacketRequest],
        ctors: {
            ctor: function() {
                this.$initialize();
                FacebookGames.PipePacketRequest.$ctor1.call(this, null);
            },
            $ctor1: function(appId) {
                this.$initialize();
                FacebookGames.PipePacketRequest.$ctor1.call(this, null);
            }
        }
    });
    /*FacebookGames.PayPremiumRequest end.*/

    /*FacebookGames.PayResponse start.*/
    Bridge.define("FacebookGames.PayResponse", {
        inherits: [FacebookGames.PipePacketResponse],
        fields: {
            PaymentId: null,
            Amount: null,
            AppId: null,
            Currency: null,
            DeveloperPayload: null,
            ErrorCode: null,
            ErrorMessage: null,
            ProductId: null,
            PurchaseTime: null,
            PurchaseToken: null,
            Quantity: null,
            RequestId: null,
            Status: null,
            SignedRequest: null
        },
        ctors: {
            ctor: function() {
                this.$initialize();
                FacebookGames.PipePacketResponse.$ctor1.call(this, null, Bridge.getDefaultValue(System.Boolean));
            }
        },
        methods: {
            /*FacebookGames.PayResponse.ToDictionary start.*/
            ToDictionary: function() {
                return null;
            },
            /*FacebookGames.PayResponse.ToDictionary end.*/


        }
    });
    /*FacebookGames.PayResponse end.*/

    /*FacebookGames.PayRequest start.*/
    Bridge.define("FacebookGames.PayRequest", {
        inherits: [FacebookGames.PipePacketRequest],
        fields: {
            Method: null,
            Action: null,
            Product: null,
            ProductId: null,
            Quantity: null,
            QuantityMin: null,
            QuantityMax: null,
            RequestId: null,
            PricepointId: null,
            TestCurrency: null,
            DeveloperPayload: null
        },
        ctors: {
            ctor: function() {
                this.$initialize();
                FacebookGames.PipePacketRequest.$ctor1.call(this, null);
            },
            $ctor1: function(appId, method, action, product, productId, quantity, quantityMin, quantityMax, requestId, pricepointId, testCurrency, developerPayload) {
                this.$initialize();
                FacebookGames.PipePacketRequest.$ctor1.call(this, null);
            }
        }
    });
    /*FacebookGames.PayRequest end.*/

    /*Facebook.Unity.AccessTokenRefreshResult start.*/
    Bridge.define("Facebook.Unity.AccessTokenRefreshResult", {
        inherits: [Facebook.Unity.ResultBase, Facebook.Unity.IAccessTokenRefreshResult],
        props: {
            AccessToken: {
                get: function() {
                    return null;
                }
            }
        },
        alias: ["AccessToken", "Facebook$Unity$IAccessTokenRefreshResult$AccessToken"],
        ctors: {
            ctor: function(resultContainer) {
                this.$initialize();
                Facebook.Unity.ResultBase.ctor.call(this);
            }
        },
        methods: {
            /*Facebook.Unity.AccessTokenRefreshResult.toString start.*/
            toString: function() {
                return null;
            },
            /*Facebook.Unity.AccessTokenRefreshResult.toString end.*/


        },
        overloads: {
            "ToString()": "toString"
        }
    });
    /*Facebook.Unity.AccessTokenRefreshResult end.*/

    /*Facebook.Unity.AppLinkResult start.*/
    Bridge.define("Facebook.Unity.AppLinkResult", {
        inherits: [Facebook.Unity.ResultBase, Facebook.Unity.IAppLinkResult],
        props: {
            Url: {
                get: function() {
                    return null;
                }
            },
            TargetUrl: {
                get: function() {
                    return null;
                }
            },
            Ref: {
                get: function() {
                    return null;
                }
            },
            Extras: {
                get: function() {
                    return null;
                }
            }
        },
        alias: [
            "Url", "Facebook$Unity$IAppLinkResult$Url",
            "TargetUrl", "Facebook$Unity$IAppLinkResult$TargetUrl",
            "Ref", "Facebook$Unity$IAppLinkResult$Ref",
            "Extras", "Facebook$Unity$IAppLinkResult$Extras"
        ],
        ctors: {
            ctor: function(resultContainer) {
                this.$initialize();
                Facebook.Unity.ResultBase.ctor.call(this);
            }
        },
        methods: {
            /*Facebook.Unity.AppLinkResult.toString start.*/
            toString: function() {
                return null;
            },
            /*Facebook.Unity.AppLinkResult.toString end.*/


        },
        overloads: {
            "ToString()": "toString"
        }
    });
    /*Facebook.Unity.AppLinkResult end.*/

    /*Facebook.Unity.AppRequestResult start.*/
    Bridge.define("Facebook.Unity.AppRequestResult", {
        inherits: [Facebook.Unity.ResultBase, Facebook.Unity.IAppRequestResult],
        statics: {
            fields: {
                RequestIDKey: null,
                ToKey: null
            },
            ctors: {
                init: function() {
                    this.RequestIDKey = "";
                    this.ToKey = "";
                }
            }
        },
        props: {
            RequestID: {
                get: function() {
                    return null;
                }
            },
            To: {
                get: function() {
                    return null;
                }
            }
        },
        alias: [
            "RequestID", "Facebook$Unity$IAppRequestResult$RequestID",
            "To", "Facebook$Unity$IAppRequestResult$To"
        ],
        ctors: {
            ctor: function(resultContainer) {
                this.$initialize();
                Facebook.Unity.ResultBase.ctor.call(this);
            }
        },
        methods: {
            /*Facebook.Unity.AppRequestResult.toString start.*/
            toString: function() {
                return null;
            },
            /*Facebook.Unity.AppRequestResult.toString end.*/


        },
        overloads: {
            "ToString()": "toString"
        }
    });
    /*Facebook.Unity.AppRequestResult end.*/

    /*Facebook.Unity.Canvas.CanvasFacebook start.*/
    Bridge.define("Facebook.Unity.Canvas.CanvasFacebook", {
        inherits: [Facebook.Unity.FacebookBase, Facebook.Unity.Canvas.ICanvasFacebook, Facebook.Unity.Canvas.ICanvasFacebookImplementation, Facebook.Unity.Canvas.ICanvasFacebookResultHandler, Facebook.Unity.IPayFacebook],
        statics: {
            fields: {
                MethodAppRequests: null,
                MethodFeed: null,
                MethodPay: null,
                CancelledResponse: null,
                FacebookConnectURL: null
            },
            ctors: {
                init: function() {
                    this.MethodAppRequests = "";
                    this.MethodFeed = "";
                    this.MethodPay = "";
                    this.CancelledResponse = "";
                    this.FacebookConnectURL = "";
                }
            }
        },
        fields: {
            LimitEventUsage: false
        },
        props: {
            SDKName: {
                get: function() {
                    return null;
                }
            },
            SDKVersion: {
                get: function() {
                    return null;
                }
            },
            SDKUserAgent: {
                get: function() {
                    return null;
                }
            }
        },
        alias: [
            "LimitEventUsage", "Facebook$Unity$IFacebook$LimitEventUsage",
            "SDKName", "Facebook$Unity$IFacebook$SDKName",
            "SDKVersion", "Facebook$Unity$IFacebook$SDKVersion",
            "SDKUserAgent", "Facebook$Unity$IFacebook$SDKUserAgent",
            "LogInWithPublishPermissions", "Facebook$Unity$IFacebook$LogInWithPublishPermissions",
            "LogInWithReadPermissions", "Facebook$Unity$IFacebook$LogInWithReadPermissions",
            "LogOut", "Facebook$Unity$IFacebook$LogOut",
            "AppRequest$1", "Facebook$Unity$IFacebook$AppRequest$1",
            "ActivateApp", "Facebook$Unity$IFacebook$ActivateApp",
            "ShareLink", "Facebook$Unity$IFacebook$ShareLink",
            "FeedShare", "Facebook$Unity$IFacebook$FeedShare",
            "Pay", "Facebook$Unity$IPayFacebook$Pay",
            "PayWithProductId", "Facebook$Unity$IPayFacebook$PayWithProductId",
            "PayWithProductId$1", "Facebook$Unity$IPayFacebook$PayWithProductId$1",
            "GetAppLink", "Facebook$Unity$IFacebook$GetAppLink",
            "AppEventsLogEvent", "Facebook$Unity$IFacebook$AppEventsLogEvent",
            "AppEventsLogPurchase", "Facebook$Unity$IFacebook$AppEventsLogPurchase",
            "OnLoginComplete", "Facebook$Unity$IFacebookResultHandler$OnLoginComplete",
            "OnGetAppLinkComplete", "Facebook$Unity$IFacebookResultHandler$OnGetAppLinkComplete",
            "OnFacebookAuthResponseChange", "Facebook$Unity$Canvas$ICanvasFacebookResultHandler$OnFacebookAuthResponseChange",
            "OnPayComplete", "Facebook$Unity$Canvas$ICanvasFacebookResultHandler$OnPayComplete",
            "OnAppRequestsComplete", "Facebook$Unity$IFacebookResultHandler$OnAppRequestsComplete",
            "OnShareLinkComplete", "Facebook$Unity$IFacebookResultHandler$OnShareLinkComplete",
            "OnUrlResponse", "Facebook$Unity$Canvas$ICanvasFacebookResultHandler$OnUrlResponse",
            "OnHideUnity", "Facebook$Unity$Canvas$ICanvasFacebookResultHandler$OnHideUnity"
        ],
        ctors: {
            ctor: function() {
                this.$initialize();
                Facebook.Unity.FacebookBase.ctor.call(this);
            },
            $ctor1: function(canvasJSWrapper, callbackManager) {
                this.$initialize();
                Facebook.Unity.FacebookBase.ctor.call(this);
            }
        },
        methods: {
            /*Facebook.Unity.Canvas.CanvasFacebook.Init$1 start.*/
            Init$1: function(appId, cookie, logging, status, xfbml, channelUrl, authResponse, frictionlessRequests, javascriptSDKLocale, loadDebugJSSDK, hideUnityDelegate, onInitComplete) {},
            /*Facebook.Unity.Canvas.CanvasFacebook.Init$1 end.*/

            /*Facebook.Unity.Canvas.CanvasFacebook.LogInWithPublishPermissions start.*/
            LogInWithPublishPermissions: function(permissions, callback) {},
            /*Facebook.Unity.Canvas.CanvasFacebook.LogInWithPublishPermissions end.*/

            /*Facebook.Unity.Canvas.CanvasFacebook.LogInWithReadPermissions start.*/
            LogInWithReadPermissions: function(permissions, callback) {},
            /*Facebook.Unity.Canvas.CanvasFacebook.LogInWithReadPermissions end.*/

            /*Facebook.Unity.Canvas.CanvasFacebook.LogOut start.*/
            LogOut: function() {},
            /*Facebook.Unity.Canvas.CanvasFacebook.LogOut end.*/

            /*Facebook.Unity.Canvas.CanvasFacebook.AppRequest$1 start.*/
            AppRequest$1: function(message, actionType, objectId, to, filters, excludeIds, maxRecipients, data, title, callback) {},
            /*Facebook.Unity.Canvas.CanvasFacebook.AppRequest$1 end.*/

            /*Facebook.Unity.Canvas.CanvasFacebook.ActivateApp start.*/
            ActivateApp: function(appId) {},
            /*Facebook.Unity.Canvas.CanvasFacebook.ActivateApp end.*/

            /*Facebook.Unity.Canvas.CanvasFacebook.ShareLink start.*/
            ShareLink: function(contentURL, contentTitle, contentDescription, photoURL, callback) {},
            /*Facebook.Unity.Canvas.CanvasFacebook.ShareLink end.*/

            /*Facebook.Unity.Canvas.CanvasFacebook.FeedShare start.*/
            FeedShare: function(toId, link, linkName, linkCaption, linkDescription, picture, mediaSource, callback) {},
            /*Facebook.Unity.Canvas.CanvasFacebook.FeedShare end.*/

            /*Facebook.Unity.Canvas.CanvasFacebook.Pay start.*/
            Pay: function(product, action, quantity, quantityMin, quantityMax, requestId, pricepointId, testCurrency, callback) {},
            /*Facebook.Unity.Canvas.CanvasFacebook.Pay end.*/

            /*Facebook.Unity.Canvas.CanvasFacebook.PayWithProductId start.*/
            PayWithProductId: function(productId, action, quantity, quantityMin, quantityMax, requestId, pricepointId, testCurrency, callback) {},
            /*Facebook.Unity.Canvas.CanvasFacebook.PayWithProductId end.*/

            /*Facebook.Unity.Canvas.CanvasFacebook.PayWithProductId$1 start.*/
            PayWithProductId$1: function(productId, action, developerPayload, testCurrency, callback) {},
            /*Facebook.Unity.Canvas.CanvasFacebook.PayWithProductId$1 end.*/

            /*Facebook.Unity.Canvas.CanvasFacebook.GetAppLink start.*/
            GetAppLink: function(callback) {},
            /*Facebook.Unity.Canvas.CanvasFacebook.GetAppLink end.*/

            /*Facebook.Unity.Canvas.CanvasFacebook.AppEventsLogEvent start.*/
            AppEventsLogEvent: function(logEvent, valueToSum, parameters) {},
            /*Facebook.Unity.Canvas.CanvasFacebook.AppEventsLogEvent end.*/

            /*Facebook.Unity.Canvas.CanvasFacebook.AppEventsLogPurchase start.*/
            AppEventsLogPurchase: function(purchaseAmount, currency, parameters) {},
            /*Facebook.Unity.Canvas.CanvasFacebook.AppEventsLogPurchase end.*/

            /*Facebook.Unity.Canvas.CanvasFacebook.OnLoginComplete start.*/
            OnLoginComplete: function(result) {},
            /*Facebook.Unity.Canvas.CanvasFacebook.OnLoginComplete end.*/

            /*Facebook.Unity.Canvas.CanvasFacebook.OnGetAppLinkComplete start.*/
            OnGetAppLinkComplete: function(message) {},
            /*Facebook.Unity.Canvas.CanvasFacebook.OnGetAppLinkComplete end.*/

            /*Facebook.Unity.Canvas.CanvasFacebook.OnFacebookAuthResponseChange$1 start.*/
            OnFacebookAuthResponseChange$1: function(responseJsonData) {},
            /*Facebook.Unity.Canvas.CanvasFacebook.OnFacebookAuthResponseChange$1 end.*/

            /*Facebook.Unity.Canvas.CanvasFacebook.OnFacebookAuthResponseChange start.*/
            OnFacebookAuthResponseChange: function(resultContainer) {},
            /*Facebook.Unity.Canvas.CanvasFacebook.OnFacebookAuthResponseChange end.*/

            /*Facebook.Unity.Canvas.CanvasFacebook.OnPayComplete$1 start.*/
            OnPayComplete$1: function(responseJsonData) {},
            /*Facebook.Unity.Canvas.CanvasFacebook.OnPayComplete$1 end.*/

            /*Facebook.Unity.Canvas.CanvasFacebook.OnPayComplete start.*/
            OnPayComplete: function(resultContainer) {},
            /*Facebook.Unity.Canvas.CanvasFacebook.OnPayComplete end.*/

            /*Facebook.Unity.Canvas.CanvasFacebook.OnAppRequestsComplete start.*/
            OnAppRequestsComplete: function(resultContainer) {},
            /*Facebook.Unity.Canvas.CanvasFacebook.OnAppRequestsComplete end.*/

            /*Facebook.Unity.Canvas.CanvasFacebook.OnShareLinkComplete start.*/
            OnShareLinkComplete: function(resultContainer) {},
            /*Facebook.Unity.Canvas.CanvasFacebook.OnShareLinkComplete end.*/

            /*Facebook.Unity.Canvas.CanvasFacebook.OnUrlResponse start.*/
            OnUrlResponse: function(url) {},
            /*Facebook.Unity.Canvas.CanvasFacebook.OnUrlResponse end.*/

            /*Facebook.Unity.Canvas.CanvasFacebook.OnHideUnity start.*/
            OnHideUnity: function(isGameShown) {},
            /*Facebook.Unity.Canvas.CanvasFacebook.OnHideUnity end.*/


        },
        overloads: {
            "Init(string, bool, bool, bool, bool, string, string, bool, string, bool, Facebook.Unity.HideUnityDelegate, Facebook.Unity.InitDelegate)": "Init$1",
            "AppRequest(string, System.Nullable<Facebook.Unity.OGActionType>, string, System.Collections.Generic.IEnumerable<string>, System.Collections.Generic.IEnumerable<System.Object>, System.Collections.Generic.IEnumerable<string>, System.Nullable<int>, string, string, Facebook.Unity.FacebookDelegate<Facebook.Unity.IAppRequestResult>)": "AppRequest$1",
            "PayWithProductId(string, string, string, string, Facebook.Unity.FacebookDelegate<Facebook.Unity.IPayResult>)": "PayWithProductId$1",
            "OnFacebookAuthResponseChange(string)": "OnFacebookAuthResponseChange$1",
            "OnPayComplete(string)": "OnPayComplete$1"
        }
    });
    /*Facebook.Unity.Canvas.CanvasFacebook end.*/

    /*Facebook.Unity.CatalogResult start.*/
    Bridge.define("Facebook.Unity.CatalogResult", {
        inherits: [Facebook.Unity.ResultBase, Facebook.Unity.ICatalogResult],
        props: {
            Products: {
                get: function() {
                    return null;
                }
            }
        },
        alias: ["Products", "Facebook$Unity$ICatalogResult$Products"],
        ctors: {
            ctor: function(resultContainer) {
                this.$initialize();
                Facebook.Unity.ResultBase.ctor.call(this);
            }
        },
        methods: {
            /*Facebook.Unity.CatalogResult.toString start.*/
            toString: function() {
                return null;
            },
            /*Facebook.Unity.CatalogResult.toString end.*/


        },
        overloads: {
            "ToString()": "toString"
        }
    });
    /*Facebook.Unity.CatalogResult end.*/

    /*Facebook.Unity.ConsumePurchaseResult start.*/
    Bridge.define("Facebook.Unity.ConsumePurchaseResult", {
        inherits: [Facebook.Unity.ResultBase, Facebook.Unity.IConsumePurchaseResult]
    });
    /*Facebook.Unity.ConsumePurchaseResult end.*/

    /*Facebook.Unity.Editor.EditorFacebook start.*/
    Bridge.define("Facebook.Unity.Editor.EditorFacebook", {
        inherits: [Facebook.Unity.FacebookBase, Facebook.Unity.Mobile.IMobileFacebookImplementation, Facebook.Unity.Mobile.IMobileFacebookResultHandler, Facebook.Unity.Canvas.ICanvasFacebook, Facebook.Unity.Canvas.ICanvasFacebookImplementation, Facebook.Unity.Canvas.ICanvasFacebookResultHandler, Facebook.Unity.IPayFacebook, Facebook.Unity.Mobile.IMobileFacebook],
        statics: {
            props: {
                EditorGameObject: {
                    get: function() {
                        return null;
                    }
                }
            }
        },
        fields: {
            LimitEventUsage: false,
            ShareDialogMode: 0,
            UserID: null
        },
        props: {
            SDKName: {
                get: function() {
                    return null;
                }
            },
            SDKVersion: {
                get: function() {
                    return null;
                }
            }
        },
        alias: [
            "LimitEventUsage", "Facebook$Unity$IFacebook$LimitEventUsage",
            "ShareDialogMode", "Facebook$Unity$Mobile$IMobileFacebook$ShareDialogMode",
            "SDKName", "Facebook$Unity$IFacebook$SDKName",
            "SDKVersion", "Facebook$Unity$IFacebook$SDKVersion",
            "UserID", "Facebook$Unity$Mobile$IMobileFacebook$UserID",
            "UpdateUserProperties", "Facebook$Unity$Mobile$IMobileFacebook$UpdateUserProperties",
            "LogInWithReadPermissions", "Facebook$Unity$IFacebook$LogInWithReadPermissions",
            "LogInWithPublishPermissions", "Facebook$Unity$IFacebook$LogInWithPublishPermissions",
            "LoginWithTrackingPreference", "Facebook$Unity$Mobile$IMobileFacebook$LoginWithTrackingPreference",
            "AppRequest$1", "Facebook$Unity$IFacebook$AppRequest$1",
            "ShareLink", "Facebook$Unity$IFacebook$ShareLink",
            "FeedShare", "Facebook$Unity$IFacebook$FeedShare",
            "ActivateApp", "Facebook$Unity$IFacebook$ActivateApp",
            "GetAppLink", "Facebook$Unity$IFacebook$GetAppLink",
            "AppEventsLogEvent", "Facebook$Unity$IFacebook$AppEventsLogEvent",
            "AppEventsLogPurchase", "Facebook$Unity$IFacebook$AppEventsLogPurchase",
            "IsImplicitPurchaseLoggingEnabled", "Facebook$Unity$Mobile$IMobileFacebook$IsImplicitPurchaseLoggingEnabled",
            "SetAutoLogAppEventsEnabled", "Facebook$Unity$Mobile$IMobileFacebook$SetAutoLogAppEventsEnabled",
            "SetAdvertiserIDCollectionEnabled", "Facebook$Unity$Mobile$IMobileFacebook$SetAdvertiserIDCollectionEnabled",
            "SetAdvertiserTrackingEnabled", "Facebook$Unity$Mobile$IMobileFacebook$SetAdvertiserTrackingEnabled",
            "SetPushNotificationsDeviceTokenString", "Facebook$Unity$Mobile$IMobileFacebook$SetPushNotificationsDeviceTokenString",
            "SetDataProcessingOptions", "Facebook$Unity$Mobile$IMobileFacebook$SetDataProcessingOptions",
            "CurrentAuthenticationToken", "Facebook$Unity$Mobile$IMobileFacebook$CurrentAuthenticationToken",
            "CurrentProfile", "Facebook$Unity$Mobile$IMobileFacebook$CurrentProfile",
            "FetchDeferredAppLink", "Facebook$Unity$Mobile$IMobileFacebook$FetchDeferredAppLink",
            "Pay", "Facebook$Unity$IPayFacebook$Pay",
            "PayWithProductId", "Facebook$Unity$IPayFacebook$PayWithProductId",
            "PayWithProductId$1", "Facebook$Unity$IPayFacebook$PayWithProductId$1",
            "RefreshCurrentAccessToken", "Facebook$Unity$Mobile$IMobileFacebook$RefreshCurrentAccessToken",
            "OnAppRequestsComplete", "Facebook$Unity$IFacebookResultHandler$OnAppRequestsComplete",
            "OnGetAppLinkComplete", "Facebook$Unity$IFacebookResultHandler$OnGetAppLinkComplete",
            "OnLoginComplete", "Facebook$Unity$IFacebookResultHandler$OnLoginComplete",
            "OnShareLinkComplete", "Facebook$Unity$IFacebookResultHandler$OnShareLinkComplete",
            "OnFetchDeferredAppLinkComplete", "Facebook$Unity$Mobile$IMobileFacebookResultHandler$OnFetchDeferredAppLinkComplete",
            "OnPayComplete", "Facebook$Unity$Canvas$ICanvasFacebookResultHandler$OnPayComplete",
            "OnRefreshCurrentAccessTokenComplete", "Facebook$Unity$Mobile$IMobileFacebookResultHandler$OnRefreshCurrentAccessTokenComplete",
            "OnFriendFinderComplete", "Facebook$Unity$Mobile$IMobileFacebookResultHandler$OnFriendFinderComplete",
            "OnUploadImageToMediaLibraryComplete", "Facebook$Unity$Mobile$IMobileFacebookResultHandler$OnUploadImageToMediaLibraryComplete",
            "OnUploadVideoToMediaLibraryComplete", "Facebook$Unity$Mobile$IMobileFacebookResultHandler$OnUploadVideoToMediaLibraryComplete",
            "OnOnIAPReadyComplete", "Facebook$Unity$Mobile$IMobileFacebookResultHandler$OnOnIAPReadyComplete",
            "OnGetCatalogComplete", "Facebook$Unity$Mobile$IMobileFacebookResultHandler$OnGetCatalogComplete",
            "OnGetPurchasesComplete", "Facebook$Unity$Mobile$IMobileFacebookResultHandler$OnGetPurchasesComplete",
            "OnPurchaseComplete", "Facebook$Unity$Mobile$IMobileFacebookResultHandler$OnPurchaseComplete",
            "OnConsumePurchaseComplete", "Facebook$Unity$Mobile$IMobileFacebookResultHandler$OnConsumePurchaseComplete",
            "OnInitCloudGameComplete", "Facebook$Unity$Mobile$IMobileFacebookResultHandler$OnInitCloudGameComplete",
            "OnScheduleAppToUserNotificationComplete", "Facebook$Unity$Mobile$IMobileFacebookResultHandler$OnScheduleAppToUserNotificationComplete",
            "OnLoadInterstitialAdComplete", "Facebook$Unity$Mobile$IMobileFacebookResultHandler$OnLoadInterstitialAdComplete",
            "OnShowInterstitialAdComplete", "Facebook$Unity$Mobile$IMobileFacebookResultHandler$OnShowInterstitialAdComplete",
            "OnLoadRewardedVideoComplete", "Facebook$Unity$Mobile$IMobileFacebookResultHandler$OnLoadRewardedVideoComplete",
            "OnShowRewardedVideoComplete", "Facebook$Unity$Mobile$IMobileFacebookResultHandler$OnShowRewardedVideoComplete",
            "OnGetPayloadComplete", "Facebook$Unity$Mobile$IMobileFacebookResultHandler$OnGetPayloadComplete",
            "OnPostSessionScoreComplete", "Facebook$Unity$Mobile$IMobileFacebookResultHandler$OnPostSessionScoreComplete",
            "OnOpenAppStoreComplete", "Facebook$Unity$Mobile$IMobileFacebookResultHandler$OnOpenAppStoreComplete",
            "OpenFriendFinderDialog", "Facebook$Unity$Mobile$IMobileFacebook$OpenFriendFinderDialog",
            "UploadImageToMediaLibrary", "Facebook$Unity$Mobile$IMobileFacebook$UploadImageToMediaLibrary",
            "UploadVideoToMediaLibrary", "Facebook$Unity$Mobile$IMobileFacebook$UploadVideoToMediaLibrary",
            "OnIAPReady", "Facebook$Unity$Mobile$IMobileFacebook$OnIAPReady",
            "GetCatalog", "Facebook$Unity$Mobile$IMobileFacebook$GetCatalog",
            "GetPurchases", "Facebook$Unity$Mobile$IMobileFacebook$GetPurchases",
            "Purchase", "Facebook$Unity$Mobile$IMobileFacebook$Purchase",
            "ConsumePurchase", "Facebook$Unity$Mobile$IMobileFacebook$ConsumePurchase",
            "InitCloudGame", "Facebook$Unity$Mobile$IMobileFacebook$InitCloudGame",
            "ScheduleAppToUserNotification", "Facebook$Unity$Mobile$IMobileFacebook$ScheduleAppToUserNotification",
            "LoadInterstitialAd", "Facebook$Unity$Mobile$IMobileFacebook$LoadInterstitialAd",
            "ShowInterstitialAd", "Facebook$Unity$Mobile$IMobileFacebook$ShowInterstitialAd",
            "LoadRewardedVideo", "Facebook$Unity$Mobile$IMobileFacebook$LoadRewardedVideo",
            "ShowRewardedVideo", "Facebook$Unity$Mobile$IMobileFacebook$ShowRewardedVideo",
            "GetPayload", "Facebook$Unity$Mobile$IMobileFacebook$GetPayload",
            "PostSessionScore", "Facebook$Unity$Mobile$IMobileFacebook$PostSessionScore",
            "OpenAppStore", "Facebook$Unity$Mobile$IMobileFacebook$OpenAppStore",
            "OnFacebookAuthResponseChange", "Facebook$Unity$Canvas$ICanvasFacebookResultHandler$OnFacebookAuthResponseChange",
            "OnUrlResponse", "Facebook$Unity$Canvas$ICanvasFacebookResultHandler$OnUrlResponse",
            "OnHideUnity", "Facebook$Unity$Canvas$ICanvasFacebookResultHandler$OnHideUnity"
        ],
        ctors: {
            $ctor1: function(wrapper, callbackManager) {
                this.$initialize();
                Facebook.Unity.FacebookBase.ctor.call(this);
            },
            ctor: function() {
                this.$initialize();
                Facebook.Unity.FacebookBase.ctor.call(this);
            }
        },
        methods: {
            /*Facebook.Unity.Editor.EditorFacebook.UpdateUserProperties start.*/
            UpdateUserProperties: function(parameters) {},
            /*Facebook.Unity.Editor.EditorFacebook.UpdateUserProperties end.*/

            /*Facebook.Unity.Editor.EditorFacebook.Init start.*/
            Init: function(onInitComplete) {},
            /*Facebook.Unity.Editor.EditorFacebook.Init end.*/

            /*Facebook.Unity.Editor.EditorFacebook.LogInWithReadPermissions start.*/
            LogInWithReadPermissions: function(permissions, callback) {},
            /*Facebook.Unity.Editor.EditorFacebook.LogInWithReadPermissions end.*/

            /*Facebook.Unity.Editor.EditorFacebook.LogInWithPublishPermissions start.*/
            LogInWithPublishPermissions: function(permissions, callback) {},
            /*Facebook.Unity.Editor.EditorFacebook.LogInWithPublishPermissions end.*/

            /*Facebook.Unity.Editor.EditorFacebook.LoginWithTrackingPreference start.*/
            LoginWithTrackingPreference: function(tracking, permissions, nonce, callback) {},
            /*Facebook.Unity.Editor.EditorFacebook.LoginWithTrackingPreference end.*/

            /*Facebook.Unity.Editor.EditorFacebook.AppRequest$1 start.*/
            AppRequest$1: function(message, actionType, objectId, to, filters, excludeIds, maxRecipients, data, title, callback) {},
            /*Facebook.Unity.Editor.EditorFacebook.AppRequest$1 end.*/

            /*Facebook.Unity.Editor.EditorFacebook.ShareLink start.*/
            ShareLink: function(contentURL, contentTitle, contentDescription, photoURL, callback) {},
            /*Facebook.Unity.Editor.EditorFacebook.ShareLink end.*/

            /*Facebook.Unity.Editor.EditorFacebook.FeedShare start.*/
            FeedShare: function(toId, link, linkName, linkCaption, linkDescription, picture, mediaSource, callback) {},
            /*Facebook.Unity.Editor.EditorFacebook.FeedShare end.*/

            /*Facebook.Unity.Editor.EditorFacebook.ActivateApp start.*/
            ActivateApp: function(appId) {},
            /*Facebook.Unity.Editor.EditorFacebook.ActivateApp end.*/

            /*Facebook.Unity.Editor.EditorFacebook.GetAppLink start.*/
            GetAppLink: function(callback) {},
            /*Facebook.Unity.Editor.EditorFacebook.GetAppLink end.*/

            /*Facebook.Unity.Editor.EditorFacebook.AppEventsLogEvent start.*/
            AppEventsLogEvent: function(logEvent, valueToSum, parameters) {},
            /*Facebook.Unity.Editor.EditorFacebook.AppEventsLogEvent end.*/

            /*Facebook.Unity.Editor.EditorFacebook.AppEventsLogPurchase start.*/
            AppEventsLogPurchase: function(logPurchase, currency, parameters) {},
            /*Facebook.Unity.Editor.EditorFacebook.AppEventsLogPurchase end.*/

            /*Facebook.Unity.Editor.EditorFacebook.IsImplicitPurchaseLoggingEnabled start.*/
            IsImplicitPurchaseLoggingEnabled: function() {
                return Bridge.getDefaultValue(System.Boolean);
            },
            /*Facebook.Unity.Editor.EditorFacebook.IsImplicitPurchaseLoggingEnabled end.*/

            /*Facebook.Unity.Editor.EditorFacebook.SetAutoLogAppEventsEnabled start.*/
            SetAutoLogAppEventsEnabled: function(autoLogAppEventsEnabled) {},
            /*Facebook.Unity.Editor.EditorFacebook.SetAutoLogAppEventsEnabled end.*/

            /*Facebook.Unity.Editor.EditorFacebook.SetAdvertiserIDCollectionEnabled start.*/
            SetAdvertiserIDCollectionEnabled: function(advertiserIDCollectionEnabled) {},
            /*Facebook.Unity.Editor.EditorFacebook.SetAdvertiserIDCollectionEnabled end.*/

            /*Facebook.Unity.Editor.EditorFacebook.SetAdvertiserTrackingEnabled start.*/
            SetAdvertiserTrackingEnabled: function(advertiserTrackingEnabled) {
                return Bridge.getDefaultValue(System.Boolean);
            },
            /*Facebook.Unity.Editor.EditorFacebook.SetAdvertiserTrackingEnabled end.*/

            /*Facebook.Unity.Editor.EditorFacebook.SetPushNotificationsDeviceTokenString start.*/
            SetPushNotificationsDeviceTokenString: function(token) {},
            /*Facebook.Unity.Editor.EditorFacebook.SetPushNotificationsDeviceTokenString end.*/

            /*Facebook.Unity.Editor.EditorFacebook.SetDataProcessingOptions start.*/
            SetDataProcessingOptions: function(options, country, state) {},
            /*Facebook.Unity.Editor.EditorFacebook.SetDataProcessingOptions end.*/

            /*Facebook.Unity.Editor.EditorFacebook.CurrentAuthenticationToken start.*/
            CurrentAuthenticationToken: function() {
                return null;
            },
            /*Facebook.Unity.Editor.EditorFacebook.CurrentAuthenticationToken end.*/

            /*Facebook.Unity.Editor.EditorFacebook.CurrentProfile start.*/
            CurrentProfile: function() {
                return null;
            },
            /*Facebook.Unity.Editor.EditorFacebook.CurrentProfile end.*/

            /*Facebook.Unity.Editor.EditorFacebook.FetchDeferredAppLink start.*/
            FetchDeferredAppLink: function(callback) {},
            /*Facebook.Unity.Editor.EditorFacebook.FetchDeferredAppLink end.*/

            /*Facebook.Unity.Editor.EditorFacebook.Pay start.*/
            Pay: function(product, action, quantity, quantityMin, quantityMax, requestId, pricepointId, testCurrency, callback) {},
            /*Facebook.Unity.Editor.EditorFacebook.Pay end.*/

            /*Facebook.Unity.Editor.EditorFacebook.PayWithProductId start.*/
            PayWithProductId: function(productId, action, quantity, quantityMin, quantityMax, requestId, pricepointId, testCurrency, callback) {},
            /*Facebook.Unity.Editor.EditorFacebook.PayWithProductId end.*/

            /*Facebook.Unity.Editor.EditorFacebook.PayWithProductId$1 start.*/
            PayWithProductId$1: function(productId, action, developerPayload, testCurrency, callback) {},
            /*Facebook.Unity.Editor.EditorFacebook.PayWithProductId$1 end.*/

            /*Facebook.Unity.Editor.EditorFacebook.RefreshCurrentAccessToken start.*/
            RefreshCurrentAccessToken: function(callback) {},
            /*Facebook.Unity.Editor.EditorFacebook.RefreshCurrentAccessToken end.*/

            /*Facebook.Unity.Editor.EditorFacebook.OnAppRequestsComplete start.*/
            OnAppRequestsComplete: function(resultContainer) {},
            /*Facebook.Unity.Editor.EditorFacebook.OnAppRequestsComplete end.*/

            /*Facebook.Unity.Editor.EditorFacebook.OnGetAppLinkComplete start.*/
            OnGetAppLinkComplete: function(resultContainer) {},
            /*Facebook.Unity.Editor.EditorFacebook.OnGetAppLinkComplete end.*/

            /*Facebook.Unity.Editor.EditorFacebook.OnLoginComplete start.*/
            OnLoginComplete: function(resultContainer) {},
            /*Facebook.Unity.Editor.EditorFacebook.OnLoginComplete end.*/

            /*Facebook.Unity.Editor.EditorFacebook.OnShareLinkComplete start.*/
            OnShareLinkComplete: function(resultContainer) {},
            /*Facebook.Unity.Editor.EditorFacebook.OnShareLinkComplete end.*/

            /*Facebook.Unity.Editor.EditorFacebook.OnFetchDeferredAppLinkComplete start.*/
            OnFetchDeferredAppLinkComplete: function(resultContainer) {},
            /*Facebook.Unity.Editor.EditorFacebook.OnFetchDeferredAppLinkComplete end.*/

            /*Facebook.Unity.Editor.EditorFacebook.OnPayComplete start.*/
            OnPayComplete: function(resultContainer) {},
            /*Facebook.Unity.Editor.EditorFacebook.OnPayComplete end.*/

            /*Facebook.Unity.Editor.EditorFacebook.OnRefreshCurrentAccessTokenComplete start.*/
            OnRefreshCurrentAccessTokenComplete: function(resultContainer) {},
            /*Facebook.Unity.Editor.EditorFacebook.OnRefreshCurrentAccessTokenComplete end.*/

            /*Facebook.Unity.Editor.EditorFacebook.OnFriendFinderComplete start.*/
            OnFriendFinderComplete: function(resultContainer) {},
            /*Facebook.Unity.Editor.EditorFacebook.OnFriendFinderComplete end.*/

            /*Facebook.Unity.Editor.EditorFacebook.OnUploadImageToMediaLibraryComplete start.*/
            OnUploadImageToMediaLibraryComplete: function(resultContainer) {},
            /*Facebook.Unity.Editor.EditorFacebook.OnUploadImageToMediaLibraryComplete end.*/

            /*Facebook.Unity.Editor.EditorFacebook.OnUploadVideoToMediaLibraryComplete start.*/
            OnUploadVideoToMediaLibraryComplete: function(resultContainer) {},
            /*Facebook.Unity.Editor.EditorFacebook.OnUploadVideoToMediaLibraryComplete end.*/

            /*Facebook.Unity.Editor.EditorFacebook.OnOnIAPReadyComplete start.*/
            OnOnIAPReadyComplete: function(resultContainer) {},
            /*Facebook.Unity.Editor.EditorFacebook.OnOnIAPReadyComplete end.*/

            /*Facebook.Unity.Editor.EditorFacebook.OnGetCatalogComplete start.*/
            OnGetCatalogComplete: function(resultContainer) {},
            /*Facebook.Unity.Editor.EditorFacebook.OnGetCatalogComplete end.*/

            /*Facebook.Unity.Editor.EditorFacebook.OnGetPurchasesComplete start.*/
            OnGetPurchasesComplete: function(resultContainer) {},
            /*Facebook.Unity.Editor.EditorFacebook.OnGetPurchasesComplete end.*/

            /*Facebook.Unity.Editor.EditorFacebook.OnPurchaseComplete start.*/
            OnPurchaseComplete: function(resultContainer) {},
            /*Facebook.Unity.Editor.EditorFacebook.OnPurchaseComplete end.*/

            /*Facebook.Unity.Editor.EditorFacebook.OnConsumePurchaseComplete start.*/
            OnConsumePurchaseComplete: function(resultContainer) {},
            /*Facebook.Unity.Editor.EditorFacebook.OnConsumePurchaseComplete end.*/

            /*Facebook.Unity.Editor.EditorFacebook.OnInitCloudGameComplete start.*/
            OnInitCloudGameComplete: function(resultContainer) {},
            /*Facebook.Unity.Editor.EditorFacebook.OnInitCloudGameComplete end.*/

            /*Facebook.Unity.Editor.EditorFacebook.OnScheduleAppToUserNotificationComplete start.*/
            OnScheduleAppToUserNotificationComplete: function(resultContainer) {},
            /*Facebook.Unity.Editor.EditorFacebook.OnScheduleAppToUserNotificationComplete end.*/

            /*Facebook.Unity.Editor.EditorFacebook.OnLoadInterstitialAdComplete start.*/
            OnLoadInterstitialAdComplete: function(resultContainer) {},
            /*Facebook.Unity.Editor.EditorFacebook.OnLoadInterstitialAdComplete end.*/

            /*Facebook.Unity.Editor.EditorFacebook.OnShowInterstitialAdComplete start.*/
            OnShowInterstitialAdComplete: function(resultContainer) {},
            /*Facebook.Unity.Editor.EditorFacebook.OnShowInterstitialAdComplete end.*/

            /*Facebook.Unity.Editor.EditorFacebook.OnLoadRewardedVideoComplete start.*/
            OnLoadRewardedVideoComplete: function(resultContainer) {},
            /*Facebook.Unity.Editor.EditorFacebook.OnLoadRewardedVideoComplete end.*/

            /*Facebook.Unity.Editor.EditorFacebook.OnShowRewardedVideoComplete start.*/
            OnShowRewardedVideoComplete: function(resultContainer) {},
            /*Facebook.Unity.Editor.EditorFacebook.OnShowRewardedVideoComplete end.*/

            /*Facebook.Unity.Editor.EditorFacebook.OnGetPayloadComplete start.*/
            OnGetPayloadComplete: function(resultContainer) {},
            /*Facebook.Unity.Editor.EditorFacebook.OnGetPayloadComplete end.*/

            /*Facebook.Unity.Editor.EditorFacebook.OnPostSessionScoreComplete start.*/
            OnPostSessionScoreComplete: function(resultContainer) {},
            /*Facebook.Unity.Editor.EditorFacebook.OnPostSessionScoreComplete end.*/

            /*Facebook.Unity.Editor.EditorFacebook.OnOpenAppStoreComplete start.*/
            OnOpenAppStoreComplete: function(resultContainer) {},
            /*Facebook.Unity.Editor.EditorFacebook.OnOpenAppStoreComplete end.*/

            /*Facebook.Unity.Editor.EditorFacebook.OpenFriendFinderDialog start.*/
            OpenFriendFinderDialog: function(callback) {},
            /*Facebook.Unity.Editor.EditorFacebook.OpenFriendFinderDialog end.*/

            /*Facebook.Unity.Editor.EditorFacebook.UploadImageToMediaLibrary start.*/
            UploadImageToMediaLibrary: function(caption, imageUri, shouldLaunchMediaDialog, callback) {},
            /*Facebook.Unity.Editor.EditorFacebook.UploadImageToMediaLibrary end.*/

            /*Facebook.Unity.Editor.EditorFacebook.UploadVideoToMediaLibrary start.*/
            UploadVideoToMediaLibrary: function(caption, imageUri, callback) {},
            /*Facebook.Unity.Editor.EditorFacebook.UploadVideoToMediaLibrary end.*/

            /*Facebook.Unity.Editor.EditorFacebook.OnIAPReady start.*/
            OnIAPReady: function(callback) {},
            /*Facebook.Unity.Editor.EditorFacebook.OnIAPReady end.*/

            /*Facebook.Unity.Editor.EditorFacebook.GetCatalog start.*/
            GetCatalog: function(callback) {},
            /*Facebook.Unity.Editor.EditorFacebook.GetCatalog end.*/

            /*Facebook.Unity.Editor.EditorFacebook.GetPurchases start.*/
            GetPurchases: function(callback) {},
            /*Facebook.Unity.Editor.EditorFacebook.GetPurchases end.*/

            /*Facebook.Unity.Editor.EditorFacebook.Purchase start.*/
            Purchase: function(productID, callback, developerPayload) {},
            /*Facebook.Unity.Editor.EditorFacebook.Purchase end.*/

            /*Facebook.Unity.Editor.EditorFacebook.ConsumePurchase start.*/
            ConsumePurchase: function(productID, callback) {},
            /*Facebook.Unity.Editor.EditorFacebook.ConsumePurchase end.*/

            /*Facebook.Unity.Editor.EditorFacebook.InitCloudGame start.*/
            InitCloudGame: function(callback) {},
            /*Facebook.Unity.Editor.EditorFacebook.InitCloudGame end.*/

            /*Facebook.Unity.Editor.EditorFacebook.ScheduleAppToUserNotification start.*/
            ScheduleAppToUserNotification: function(title, body, media, timeInterval, payload, callback) {},
            /*Facebook.Unity.Editor.EditorFacebook.ScheduleAppToUserNotification end.*/

            /*Facebook.Unity.Editor.EditorFacebook.LoadInterstitialAd start.*/
            LoadInterstitialAd: function(placementID, callback) {},
            /*Facebook.Unity.Editor.EditorFacebook.LoadInterstitialAd end.*/

            /*Facebook.Unity.Editor.EditorFacebook.ShowInterstitialAd start.*/
            ShowInterstitialAd: function(placementID, callback) {},
            /*Facebook.Unity.Editor.EditorFacebook.ShowInterstitialAd end.*/

            /*Facebook.Unity.Editor.EditorFacebook.LoadRewardedVideo start.*/
            LoadRewardedVideo: function(placementID, callback) {},
            /*Facebook.Unity.Editor.EditorFacebook.LoadRewardedVideo end.*/

            /*Facebook.Unity.Editor.EditorFacebook.ShowRewardedVideo start.*/
            ShowRewardedVideo: function(placementID, callback) {},
            /*Facebook.Unity.Editor.EditorFacebook.ShowRewardedVideo end.*/

            /*Facebook.Unity.Editor.EditorFacebook.GetPayload start.*/
            GetPayload: function(callback) {},
            /*Facebook.Unity.Editor.EditorFacebook.GetPayload end.*/

            /*Facebook.Unity.Editor.EditorFacebook.PostSessionScore start.*/
            PostSessionScore: function(score, callback) {},
            /*Facebook.Unity.Editor.EditorFacebook.PostSessionScore end.*/

            /*Facebook.Unity.Editor.EditorFacebook.OpenAppStore start.*/
            OpenAppStore: function(callback) {},
            /*Facebook.Unity.Editor.EditorFacebook.OpenAppStore end.*/

            /*Facebook.Unity.Editor.EditorFacebook.OnFacebookAuthResponseChange start.*/
            OnFacebookAuthResponseChange: function(resultContainer) {},
            /*Facebook.Unity.Editor.EditorFacebook.OnFacebookAuthResponseChange end.*/

            /*Facebook.Unity.Editor.EditorFacebook.OnUrlResponse start.*/
            OnUrlResponse: function(message) {},
            /*Facebook.Unity.Editor.EditorFacebook.OnUrlResponse end.*/

            /*Facebook.Unity.Editor.EditorFacebook.OnHideUnity start.*/
            OnHideUnity: function(hidden) {},
            /*Facebook.Unity.Editor.EditorFacebook.OnHideUnity end.*/


        },
        overloads: {
            "AppRequest(string, System.Nullable<Facebook.Unity.OGActionType>, string, System.Collections.Generic.IEnumerable<string>, System.Collections.Generic.IEnumerable<System.Object>, System.Collections.Generic.IEnumerable<string>, System.Nullable<int>, string, string, Facebook.Unity.FacebookDelegate<Facebook.Unity.IAppRequestResult>)": "AppRequest$1",
            "PayWithProductId(string, string, string, string, Facebook.Unity.FacebookDelegate<Facebook.Unity.IPayResult>)": "PayWithProductId$1"
        }
    });
    /*Facebook.Unity.Editor.EditorFacebook end.*/

    /*Facebook.Unity.Gameroom.GameroomFacebook start.*/
    Bridge.define("Facebook.Unity.Gameroom.GameroomFacebook", {
        inherits: [Facebook.Unity.FacebookBase, Facebook.Unity.Gameroom.IGameroomFacebook, Facebook.Unity.Gameroom.IGameroomFacebookImplementation, Facebook.Unity.Gameroom.IGameroomFacebookResultHandler, Facebook.Unity.IPayFacebook],
        fields: {
            LimitEventUsage: false
        },
        props: {
            SDKName: {
                get: function() {
                    return null;
                }
            },
            SDKVersion: {
                get: function() {
                    return null;
                }
            }
        },
        alias: [
            "LimitEventUsage", "Facebook$Unity$IFacebook$LimitEventUsage",
            "SDKName", "Facebook$Unity$IFacebook$SDKName",
            "SDKVersion", "Facebook$Unity$IFacebook$SDKVersion",
            "ActivateApp", "Facebook$Unity$IFacebook$ActivateApp",
            "AppEventsLogEvent", "Facebook$Unity$IFacebook$AppEventsLogEvent",
            "AppEventsLogPurchase", "Facebook$Unity$IFacebook$AppEventsLogPurchase",
            "AppRequest$1", "Facebook$Unity$IFacebook$AppRequest$1",
            "FeedShare", "Facebook$Unity$IFacebook$FeedShare",
            "ShareLink", "Facebook$Unity$IFacebook$ShareLink",
            "Pay", "Facebook$Unity$IPayFacebook$Pay",
            "PayWithProductId", "Facebook$Unity$IPayFacebook$PayWithProductId",
            "PayWithProductId$1", "Facebook$Unity$IPayFacebook$PayWithProductId$1",
            "PayPremium", "Facebook$Unity$Gameroom$IGameroomFacebook$PayPremium",
            "HasLicense", "Facebook$Unity$Gameroom$IGameroomFacebook$HasLicense",
            "GetAppLink", "Facebook$Unity$IFacebook$GetAppLink",
            "LogInWithPublishPermissions", "Facebook$Unity$IFacebook$LogInWithPublishPermissions",
            "LogInWithReadPermissions", "Facebook$Unity$IFacebook$LogInWithReadPermissions",
            "OnAppRequestsComplete", "Facebook$Unity$IFacebookResultHandler$OnAppRequestsComplete",
            "OnGetAppLinkComplete", "Facebook$Unity$IFacebookResultHandler$OnGetAppLinkComplete",
            "OnLoginComplete", "Facebook$Unity$IFacebookResultHandler$OnLoginComplete",
            "OnShareLinkComplete", "Facebook$Unity$IFacebookResultHandler$OnShareLinkComplete",
            "HaveReceivedPipeResponse", "Facebook$Unity$Gameroom$IGameroomFacebookImplementation$HaveReceivedPipeResponse",
            "GetPipeResponse", "Facebook$Unity$Gameroom$IGameroomFacebookImplementation$GetPipeResponse"
        ],
        ctors: {
            ctor: function() {
                this.$initialize();
                Facebook.Unity.FacebookBase.ctor.call(this);
            },
            $ctor1: function(gameroomWrapper, callbackManager) {
                this.$initialize();
                Facebook.Unity.FacebookBase.ctor.call(this);
            }
        },
        methods: {
            /*Facebook.Unity.Gameroom.GameroomFacebook.Init$1 start.*/
            Init$1: function(appId, hideUnityDelegate, onInitComplete) {},
            /*Facebook.Unity.Gameroom.GameroomFacebook.Init$1 end.*/

            /*Facebook.Unity.Gameroom.GameroomFacebook.ActivateApp start.*/
            ActivateApp: function(appId) {},
            /*Facebook.Unity.Gameroom.GameroomFacebook.ActivateApp end.*/

            /*Facebook.Unity.Gameroom.GameroomFacebook.AppEventsLogEvent start.*/
            AppEventsLogEvent: function(logEvent, valueToSum, parameters) {},
            /*Facebook.Unity.Gameroom.GameroomFacebook.AppEventsLogEvent end.*/

            /*Facebook.Unity.Gameroom.GameroomFacebook.AppEventsLogPurchase start.*/
            AppEventsLogPurchase: function(logPurchase, currency, parameters) {},
            /*Facebook.Unity.Gameroom.GameroomFacebook.AppEventsLogPurchase end.*/

            /*Facebook.Unity.Gameroom.GameroomFacebook.AppRequest$1 start.*/
            AppRequest$1: function(message, actionType, objectId, to, filters, excludeIds, maxRecipients, data, title, callback) {},
            /*Facebook.Unity.Gameroom.GameroomFacebook.AppRequest$1 end.*/

            /*Facebook.Unity.Gameroom.GameroomFacebook.FeedShare start.*/
            FeedShare: function(toId, link, linkName, linkCaption, linkDescription, picture, mediaSource, callback) {},
            /*Facebook.Unity.Gameroom.GameroomFacebook.FeedShare end.*/

            /*Facebook.Unity.Gameroom.GameroomFacebook.ShareLink start.*/
            ShareLink: function(contentURL, contentTitle, contentDescription, photoURL, callback) {},
            /*Facebook.Unity.Gameroom.GameroomFacebook.ShareLink end.*/

            /*Facebook.Unity.Gameroom.GameroomFacebook.Pay start.*/
            Pay: function(product, action, quantity, quantityMin, quantityMax, requestId, pricepointId, testCurrency, callback) {},
            /*Facebook.Unity.Gameroom.GameroomFacebook.Pay end.*/

            /*Facebook.Unity.Gameroom.GameroomFacebook.PayWithProductId start.*/
            PayWithProductId: function(productId, action, quantity, quantityMin, quantityMax, requestId, pricepointId, testCurrency, callback) {},
            /*Facebook.Unity.Gameroom.GameroomFacebook.PayWithProductId end.*/

            /*Facebook.Unity.Gameroom.GameroomFacebook.PayWithProductId$1 start.*/
            PayWithProductId$1: function(productId, action, developerPayload, testCurrency, callback) {},
            /*Facebook.Unity.Gameroom.GameroomFacebook.PayWithProductId$1 end.*/

            /*Facebook.Unity.Gameroom.GameroomFacebook.PayPremium start.*/
            PayPremium: function(callback) {},
            /*Facebook.Unity.Gameroom.GameroomFacebook.PayPremium end.*/

            /*Facebook.Unity.Gameroom.GameroomFacebook.HasLicense start.*/
            HasLicense: function(callback) {},
            /*Facebook.Unity.Gameroom.GameroomFacebook.HasLicense end.*/

            /*Facebook.Unity.Gameroom.GameroomFacebook.GetAppLink start.*/
            GetAppLink: function(callback) {},
            /*Facebook.Unity.Gameroom.GameroomFacebook.GetAppLink end.*/

            /*Facebook.Unity.Gameroom.GameroomFacebook.LogInWithPublishPermissions start.*/
            LogInWithPublishPermissions: function(scope, callback) {},
            /*Facebook.Unity.Gameroom.GameroomFacebook.LogInWithPublishPermissions end.*/

            /*Facebook.Unity.Gameroom.GameroomFacebook.LogInWithReadPermissions start.*/
            LogInWithReadPermissions: function(scope, callback) {},
            /*Facebook.Unity.Gameroom.GameroomFacebook.LogInWithReadPermissions end.*/

            /*Facebook.Unity.Gameroom.GameroomFacebook.OnAppRequestsComplete start.*/
            OnAppRequestsComplete: function(resultContainer) {},
            /*Facebook.Unity.Gameroom.GameroomFacebook.OnAppRequestsComplete end.*/

            /*Facebook.Unity.Gameroom.GameroomFacebook.OnGetAppLinkComplete start.*/
            OnGetAppLinkComplete: function(resultContainer) {},
            /*Facebook.Unity.Gameroom.GameroomFacebook.OnGetAppLinkComplete end.*/

            /*Facebook.Unity.Gameroom.GameroomFacebook.OnLoginComplete start.*/
            OnLoginComplete: function(resultContainer) {},
            /*Facebook.Unity.Gameroom.GameroomFacebook.OnLoginComplete end.*/

            /*Facebook.Unity.Gameroom.GameroomFacebook.OnShareLinkComplete start.*/
            OnShareLinkComplete: function(resultContainer) {},
            /*Facebook.Unity.Gameroom.GameroomFacebook.OnShareLinkComplete end.*/

            /*Facebook.Unity.Gameroom.GameroomFacebook.OnPayComplete start.*/
            OnPayComplete: function(resultContainer) {},
            /*Facebook.Unity.Gameroom.GameroomFacebook.OnPayComplete end.*/

            /*Facebook.Unity.Gameroom.GameroomFacebook.OnHasLicenseComplete start.*/
            OnHasLicenseComplete: function(resultContainer) {},
            /*Facebook.Unity.Gameroom.GameroomFacebook.OnHasLicenseComplete end.*/

            /*Facebook.Unity.Gameroom.GameroomFacebook.HaveReceivedPipeResponse start.*/
            HaveReceivedPipeResponse: function() {
                return Bridge.getDefaultValue(System.Boolean);
            },
            /*Facebook.Unity.Gameroom.GameroomFacebook.HaveReceivedPipeResponse end.*/

            /*Facebook.Unity.Gameroom.GameroomFacebook.GetPipeResponse start.*/
            GetPipeResponse: function(callbackId) {
                return null;
            },
            /*Facebook.Unity.Gameroom.GameroomFacebook.GetPipeResponse end.*/


        },
        overloads: {
            "Init(string, Facebook.Unity.HideUnityDelegate, Facebook.Unity.InitDelegate)": "Init$1",
            "AppRequest(string, System.Nullable<Facebook.Unity.OGActionType>, string, System.Collections.Generic.IEnumerable<string>, System.Collections.Generic.IEnumerable<System.Object>, System.Collections.Generic.IEnumerable<string>, System.Nullable<int>, string, string, Facebook.Unity.FacebookDelegate<Facebook.Unity.IAppRequestResult>)": "AppRequest$1",
            "PayWithProductId(string, string, string, string, Facebook.Unity.FacebookDelegate<Facebook.Unity.IPayResult>)": "PayWithProductId$1"
        }
    });
    /*Facebook.Unity.Gameroom.GameroomFacebook end.*/

    /*Facebook.Unity.GamingServicesFriendFinderResult start.*/
    Bridge.define("Facebook.Unity.GamingServicesFriendFinderResult", {
        inherits: [Facebook.Unity.ResultBase, Facebook.Unity.IGamingServicesFriendFinderResult]
    });
    /*Facebook.Unity.GamingServicesFriendFinderResult end.*/

    /*Facebook.Unity.GraphResult start.*/
    Bridge.define("Facebook.Unity.GraphResult", {
        inherits: [Facebook.Unity.ResultBase, Facebook.Unity.IGraphResult],
        props: {
            ResultList: {
                get: function() {
                    return null;
                }
            },
            Texture: {
                get: function() {
                    return null;
                }
            }
        },
        alias: [
            "ResultList", "Facebook$Unity$IGraphResult$ResultList",
            "Texture", "Facebook$Unity$IGraphResult$Texture"
        ]
    });
    /*Facebook.Unity.GraphResult end.*/

    /*Facebook.Unity.GroupCreateResult start.*/
    Bridge.define("Facebook.Unity.GroupCreateResult", {
        inherits: [Facebook.Unity.ResultBase, Facebook.Unity.IGroupCreateResult],
        statics: {
            fields: {
                IDKey: null
            },
            ctors: {
                init: function() {
                    this.IDKey = "";
                }
            }
        },
        props: {
            GroupId: {
                get: function() {
                    return null;
                }
            }
        },
        alias: ["GroupId", "Facebook$Unity$IGroupCreateResult$GroupId"],
        ctors: {
            ctor: function(resultContainer) {
                this.$initialize();
                Facebook.Unity.ResultBase.ctor.call(this);
            }
        },
        methods: {
            /*Facebook.Unity.GroupCreateResult.toString start.*/
            toString: function() {
                return null;
            },
            /*Facebook.Unity.GroupCreateResult.toString end.*/


        },
        overloads: {
            "ToString()": "toString"
        }
    });
    /*Facebook.Unity.GroupCreateResult end.*/

    /*Facebook.Unity.GroupJoinResult start.*/
    Bridge.define("Facebook.Unity.GroupJoinResult", {
        inherits: [Facebook.Unity.ResultBase, Facebook.Unity.IGroupJoinResult]
    });
    /*Facebook.Unity.GroupJoinResult end.*/

    /*Facebook.Unity.HasLicenseResult start.*/
    Bridge.define("Facebook.Unity.HasLicenseResult", {
        inherits: [Facebook.Unity.ResultBase, Facebook.Unity.IHasLicenseResult],
        props: {
            HasLicense: {
                get: function() {
                    return Bridge.getDefaultValue(System.Boolean);
                }
            }
        },
        alias: ["HasLicense", "Facebook$Unity$IHasLicenseResult$HasLicense"],
        ctors: {
            ctor: function(resultContainer) {
                this.$initialize();
                Facebook.Unity.ResultBase.ctor.call(this);
            }
        }
    });
    /*Facebook.Unity.HasLicenseResult end.*/

    /*Facebook.Unity.IAPReadyResult start.*/
    Bridge.define("Facebook.Unity.IAPReadyResult", {
        inherits: [Facebook.Unity.ResultBase, Facebook.Unity.IIAPReadyResult]
    });
    /*Facebook.Unity.IAPReadyResult end.*/

    /*Facebook.Unity.InitCloudGameResult start.*/
    Bridge.define("Facebook.Unity.InitCloudGameResult", {
        inherits: [Facebook.Unity.ResultBase, Facebook.Unity.IInitCloudGameResult]
    });
    /*Facebook.Unity.InitCloudGameResult end.*/

    /*Facebook.Unity.InterstitialAdResult start.*/
    Bridge.define("Facebook.Unity.InterstitialAdResult", {
        inherits: [Facebook.Unity.ResultBase, Facebook.Unity.IInterstitialAdResult]
    });
    /*Facebook.Unity.InterstitialAdResult end.*/

    /*Facebook.Unity.LoginResult start.*/
    Bridge.define("Facebook.Unity.LoginResult", {
        inherits: [Facebook.Unity.ResultBase, Facebook.Unity.ILoginResult],
        statics: {
            fields: {
                LastRefreshKey: null,
                UserIdKey: null,
                ExpirationTimestampKey: null,
                PermissionsKey: null,
                AccessTokenKey: null,
                GraphDomain: null,
                AuthTokenString: null,
                AuthNonce: null
            },
            ctors: {
                init: function() {
                    this.LastRefreshKey = "";
                }
            }
        },
        props: {
            AccessToken: {
                get: function() {
                    return null;
                }
            },
            AuthenticationToken: {
                get: function() {
                    return null;
                }
            }
        },
        alias: [
            "AccessToken", "Facebook$Unity$ILoginResult$AccessToken",
            "AuthenticationToken", "Facebook$Unity$ILoginResult$AuthenticationToken"
        ],
        methods: {
            /*Facebook.Unity.LoginResult.toString start.*/
            toString: function() {
                return null;
            },
            /*Facebook.Unity.LoginResult.toString end.*/


        },
        overloads: {
            "ToString()": "toString"
        }
    });
    /*Facebook.Unity.LoginResult end.*/

    /*Facebook.Unity.MediaUploadResult start.*/
    Bridge.define("Facebook.Unity.MediaUploadResult", {
        inherits: [Facebook.Unity.ResultBase, Facebook.Unity.IMediaUploadResult],
        props: {
            MediaId: {
                get: function() {
                    return null;
                }
            }
        },
        alias: ["MediaId", "Facebook$Unity$IMediaUploadResult$MediaId"],
        methods: {
            /*Facebook.Unity.MediaUploadResult.toString start.*/
            toString: function() {
                return null;
            },
            /*Facebook.Unity.MediaUploadResult.toString end.*/


        },
        overloads: {
            "ToString()": "toString"
        }
    });
    /*Facebook.Unity.MediaUploadResult end.*/

    /*Facebook.Unity.Mobile.MobileFacebook start.*/
    Bridge.define("Facebook.Unity.Mobile.MobileFacebook", {
        inherits: [Facebook.Unity.FacebookBase, Facebook.Unity.Mobile.IMobileFacebookImplementation, Facebook.Unity.Mobile.IMobileFacebookResultHandler, Facebook.Unity.Mobile.IMobileFacebook],
        fields: {
            ShareDialogMode: 0
        },
        alias: [
            "ShareDialogMode", "Facebook$Unity$Mobile$IMobileFacebook$ShareDialogMode",
            "OnLoginComplete", "Facebook$Unity$IFacebookResultHandler$OnLoginComplete",
            "OnGetAppLinkComplete", "Facebook$Unity$IFacebookResultHandler$OnGetAppLinkComplete",
            "OnAppRequestsComplete", "Facebook$Unity$IFacebookResultHandler$OnAppRequestsComplete",
            "OnFetchDeferredAppLinkComplete", "Facebook$Unity$Mobile$IMobileFacebookResultHandler$OnFetchDeferredAppLinkComplete",
            "OnShareLinkComplete", "Facebook$Unity$IFacebookResultHandler$OnShareLinkComplete",
            "OnRefreshCurrentAccessTokenComplete", "Facebook$Unity$Mobile$IMobileFacebookResultHandler$OnRefreshCurrentAccessTokenComplete",
            "OpenFriendFinderDialog", "Facebook$Unity$Mobile$IMobileFacebook$OpenFriendFinderDialog",
            "OnFriendFinderComplete", "Facebook$Unity$Mobile$IMobileFacebookResultHandler$OnFriendFinderComplete",
            "OnUploadImageToMediaLibraryComplete", "Facebook$Unity$Mobile$IMobileFacebookResultHandler$OnUploadImageToMediaLibraryComplete",
            "OnUploadVideoToMediaLibraryComplete", "Facebook$Unity$Mobile$IMobileFacebookResultHandler$OnUploadVideoToMediaLibraryComplete",
            "OnOnIAPReadyComplete", "Facebook$Unity$Mobile$IMobileFacebookResultHandler$OnOnIAPReadyComplete",
            "OnGetCatalogComplete", "Facebook$Unity$Mobile$IMobileFacebookResultHandler$OnGetCatalogComplete",
            "OnGetPurchasesComplete", "Facebook$Unity$Mobile$IMobileFacebookResultHandler$OnGetPurchasesComplete",
            "OnPurchaseComplete", "Facebook$Unity$Mobile$IMobileFacebookResultHandler$OnPurchaseComplete",
            "OnConsumePurchaseComplete", "Facebook$Unity$Mobile$IMobileFacebookResultHandler$OnConsumePurchaseComplete",
            "OnInitCloudGameComplete", "Facebook$Unity$Mobile$IMobileFacebookResultHandler$OnInitCloudGameComplete",
            "OnScheduleAppToUserNotificationComplete", "Facebook$Unity$Mobile$IMobileFacebookResultHandler$OnScheduleAppToUserNotificationComplete",
            "OnLoadInterstitialAdComplete", "Facebook$Unity$Mobile$IMobileFacebookResultHandler$OnLoadInterstitialAdComplete",
            "OnShowInterstitialAdComplete", "Facebook$Unity$Mobile$IMobileFacebookResultHandler$OnShowInterstitialAdComplete",
            "OnLoadRewardedVideoComplete", "Facebook$Unity$Mobile$IMobileFacebookResultHandler$OnLoadRewardedVideoComplete",
            "OnShowRewardedVideoComplete", "Facebook$Unity$Mobile$IMobileFacebookResultHandler$OnShowRewardedVideoComplete",
            "OnGetPayloadComplete", "Facebook$Unity$Mobile$IMobileFacebookResultHandler$OnGetPayloadComplete",
            "OnPostSessionScoreComplete", "Facebook$Unity$Mobile$IMobileFacebookResultHandler$OnPostSessionScoreComplete",
            "OnOpenAppStoreComplete", "Facebook$Unity$Mobile$IMobileFacebookResultHandler$OnOpenAppStoreComplete",
            "UploadImageToMediaLibrary", "Facebook$Unity$Mobile$IMobileFacebook$UploadImageToMediaLibrary",
            "UploadVideoToMediaLibrary", "Facebook$Unity$Mobile$IMobileFacebook$UploadVideoToMediaLibrary",
            "OnIAPReady", "Facebook$Unity$Mobile$IMobileFacebook$OnIAPReady",
            "GetCatalog", "Facebook$Unity$Mobile$IMobileFacebook$GetCatalog",
            "GetPurchases", "Facebook$Unity$Mobile$IMobileFacebook$GetPurchases",
            "Purchase", "Facebook$Unity$Mobile$IMobileFacebook$Purchase",
            "ConsumePurchase", "Facebook$Unity$Mobile$IMobileFacebook$ConsumePurchase",
            "InitCloudGame", "Facebook$Unity$Mobile$IMobileFacebook$InitCloudGame",
            "ScheduleAppToUserNotification", "Facebook$Unity$Mobile$IMobileFacebook$ScheduleAppToUserNotification",
            "LoadInterstitialAd", "Facebook$Unity$Mobile$IMobileFacebook$LoadInterstitialAd",
            "ShowInterstitialAd", "Facebook$Unity$Mobile$IMobileFacebook$ShowInterstitialAd",
            "LoadRewardedVideo", "Facebook$Unity$Mobile$IMobileFacebook$LoadRewardedVideo",
            "ShowRewardedVideo", "Facebook$Unity$Mobile$IMobileFacebook$ShowRewardedVideo",
            "GetPayload", "Facebook$Unity$Mobile$IMobileFacebook$GetPayload",
            "PostSessionScore", "Facebook$Unity$Mobile$IMobileFacebook$PostSessionScore",
            "OpenAppStore", "Facebook$Unity$Mobile$IMobileFacebook$OpenAppStore"
        ],
        methods: {
            /*Facebook.Unity.Mobile.MobileFacebook.OnLoginComplete start.*/
            OnLoginComplete: function(resultContainer) {},
            /*Facebook.Unity.Mobile.MobileFacebook.OnLoginComplete end.*/

            /*Facebook.Unity.Mobile.MobileFacebook.OnGetAppLinkComplete start.*/
            OnGetAppLinkComplete: function(resultContainer) {},
            /*Facebook.Unity.Mobile.MobileFacebook.OnGetAppLinkComplete end.*/

            /*Facebook.Unity.Mobile.MobileFacebook.OnAppRequestsComplete start.*/
            OnAppRequestsComplete: function(resultContainer) {},
            /*Facebook.Unity.Mobile.MobileFacebook.OnAppRequestsComplete end.*/

            /*Facebook.Unity.Mobile.MobileFacebook.OnFetchDeferredAppLinkComplete start.*/
            OnFetchDeferredAppLinkComplete: function(resultContainer) {},
            /*Facebook.Unity.Mobile.MobileFacebook.OnFetchDeferredAppLinkComplete end.*/

            /*Facebook.Unity.Mobile.MobileFacebook.OnShareLinkComplete start.*/
            OnShareLinkComplete: function(resultContainer) {},
            /*Facebook.Unity.Mobile.MobileFacebook.OnShareLinkComplete end.*/

            /*Facebook.Unity.Mobile.MobileFacebook.OnRefreshCurrentAccessTokenComplete start.*/
            OnRefreshCurrentAccessTokenComplete: function(resultContainer) {},
            /*Facebook.Unity.Mobile.MobileFacebook.OnRefreshCurrentAccessTokenComplete end.*/

            /*Facebook.Unity.Mobile.MobileFacebook.OpenFriendFinderDialog start.*/
            OpenFriendFinderDialog: function(callback) {},
            /*Facebook.Unity.Mobile.MobileFacebook.OpenFriendFinderDialog end.*/

            /*Facebook.Unity.Mobile.MobileFacebook.OnFriendFinderComplete start.*/
            OnFriendFinderComplete: function(resultContainer) {},
            /*Facebook.Unity.Mobile.MobileFacebook.OnFriendFinderComplete end.*/

            /*Facebook.Unity.Mobile.MobileFacebook.OnUploadImageToMediaLibraryComplete start.*/
            OnUploadImageToMediaLibraryComplete: function(resultContainer) {},
            /*Facebook.Unity.Mobile.MobileFacebook.OnUploadImageToMediaLibraryComplete end.*/

            /*Facebook.Unity.Mobile.MobileFacebook.OnUploadVideoToMediaLibraryComplete start.*/
            OnUploadVideoToMediaLibraryComplete: function(resultContainer) {},
            /*Facebook.Unity.Mobile.MobileFacebook.OnUploadVideoToMediaLibraryComplete end.*/

            /*Facebook.Unity.Mobile.MobileFacebook.OnOnIAPReadyComplete start.*/
            OnOnIAPReadyComplete: function(resultContainer) {},
            /*Facebook.Unity.Mobile.MobileFacebook.OnOnIAPReadyComplete end.*/

            /*Facebook.Unity.Mobile.MobileFacebook.OnGetCatalogComplete start.*/
            OnGetCatalogComplete: function(resultContainer) {},
            /*Facebook.Unity.Mobile.MobileFacebook.OnGetCatalogComplete end.*/

            /*Facebook.Unity.Mobile.MobileFacebook.OnGetPurchasesComplete start.*/
            OnGetPurchasesComplete: function(resultContainer) {},
            /*Facebook.Unity.Mobile.MobileFacebook.OnGetPurchasesComplete end.*/

            /*Facebook.Unity.Mobile.MobileFacebook.OnPurchaseComplete start.*/
            OnPurchaseComplete: function(resultContainer) {},
            /*Facebook.Unity.Mobile.MobileFacebook.OnPurchaseComplete end.*/

            /*Facebook.Unity.Mobile.MobileFacebook.OnConsumePurchaseComplete start.*/
            OnConsumePurchaseComplete: function(resultContainer) {},
            /*Facebook.Unity.Mobile.MobileFacebook.OnConsumePurchaseComplete end.*/

            /*Facebook.Unity.Mobile.MobileFacebook.OnInitCloudGameComplete start.*/
            OnInitCloudGameComplete: function(resultContainer) {},
            /*Facebook.Unity.Mobile.MobileFacebook.OnInitCloudGameComplete end.*/

            /*Facebook.Unity.Mobile.MobileFacebook.OnScheduleAppToUserNotificationComplete start.*/
            OnScheduleAppToUserNotificationComplete: function(resultContainer) {},
            /*Facebook.Unity.Mobile.MobileFacebook.OnScheduleAppToUserNotificationComplete end.*/

            /*Facebook.Unity.Mobile.MobileFacebook.OnLoadInterstitialAdComplete start.*/
            OnLoadInterstitialAdComplete: function(resultContainer) {},
            /*Facebook.Unity.Mobile.MobileFacebook.OnLoadInterstitialAdComplete end.*/

            /*Facebook.Unity.Mobile.MobileFacebook.OnShowInterstitialAdComplete start.*/
            OnShowInterstitialAdComplete: function(resultContainer) {},
            /*Facebook.Unity.Mobile.MobileFacebook.OnShowInterstitialAdComplete end.*/

            /*Facebook.Unity.Mobile.MobileFacebook.OnLoadRewardedVideoComplete start.*/
            OnLoadRewardedVideoComplete: function(resultContainer) {},
            /*Facebook.Unity.Mobile.MobileFacebook.OnLoadRewardedVideoComplete end.*/

            /*Facebook.Unity.Mobile.MobileFacebook.OnShowRewardedVideoComplete start.*/
            OnShowRewardedVideoComplete: function(resultContainer) {},
            /*Facebook.Unity.Mobile.MobileFacebook.OnShowRewardedVideoComplete end.*/

            /*Facebook.Unity.Mobile.MobileFacebook.OnGetPayloadComplete start.*/
            OnGetPayloadComplete: function(resultContainer) {},
            /*Facebook.Unity.Mobile.MobileFacebook.OnGetPayloadComplete end.*/

            /*Facebook.Unity.Mobile.MobileFacebook.OnPostSessionScoreComplete start.*/
            OnPostSessionScoreComplete: function(resultContainer) {},
            /*Facebook.Unity.Mobile.MobileFacebook.OnPostSessionScoreComplete end.*/

            /*Facebook.Unity.Mobile.MobileFacebook.OnOpenAppStoreComplete start.*/
            OnOpenAppStoreComplete: function(resultContainer) {},
            /*Facebook.Unity.Mobile.MobileFacebook.OnOpenAppStoreComplete end.*/

            /*Facebook.Unity.Mobile.MobileFacebook.UploadImageToMediaLibrary start.*/
            UploadImageToMediaLibrary: function(caption, imageUri, shouldLaunchMediaDialog, callback) {},
            /*Facebook.Unity.Mobile.MobileFacebook.UploadImageToMediaLibrary end.*/

            /*Facebook.Unity.Mobile.MobileFacebook.UploadVideoToMediaLibrary start.*/
            UploadVideoToMediaLibrary: function(caption, videoUri, callback) {},
            /*Facebook.Unity.Mobile.MobileFacebook.UploadVideoToMediaLibrary end.*/

            /*Facebook.Unity.Mobile.MobileFacebook.OnIAPReady start.*/
            OnIAPReady: function(callback) {},
            /*Facebook.Unity.Mobile.MobileFacebook.OnIAPReady end.*/

            /*Facebook.Unity.Mobile.MobileFacebook.GetCatalog start.*/
            GetCatalog: function(callback) {},
            /*Facebook.Unity.Mobile.MobileFacebook.GetCatalog end.*/

            /*Facebook.Unity.Mobile.MobileFacebook.GetPurchases start.*/
            GetPurchases: function(callback) {},
            /*Facebook.Unity.Mobile.MobileFacebook.GetPurchases end.*/

            /*Facebook.Unity.Mobile.MobileFacebook.Purchase start.*/
            Purchase: function(productID, callback, developerPayload) {},
            /*Facebook.Unity.Mobile.MobileFacebook.Purchase end.*/

            /*Facebook.Unity.Mobile.MobileFacebook.ConsumePurchase start.*/
            ConsumePurchase: function(purchaseToken, callback) {},
            /*Facebook.Unity.Mobile.MobileFacebook.ConsumePurchase end.*/

            /*Facebook.Unity.Mobile.MobileFacebook.InitCloudGame start.*/
            InitCloudGame: function(callback) {},
            /*Facebook.Unity.Mobile.MobileFacebook.InitCloudGame end.*/

            /*Facebook.Unity.Mobile.MobileFacebook.ScheduleAppToUserNotification start.*/
            ScheduleAppToUserNotification: function(title, body, media, timeInterval, payload, callback) {},
            /*Facebook.Unity.Mobile.MobileFacebook.ScheduleAppToUserNotification end.*/

            /*Facebook.Unity.Mobile.MobileFacebook.LoadInterstitialAd start.*/
            LoadInterstitialAd: function(placementID, callback) {},
            /*Facebook.Unity.Mobile.MobileFacebook.LoadInterstitialAd end.*/

            /*Facebook.Unity.Mobile.MobileFacebook.ShowInterstitialAd start.*/
            ShowInterstitialAd: function(placementID, callback) {},
            /*Facebook.Unity.Mobile.MobileFacebook.ShowInterstitialAd end.*/

            /*Facebook.Unity.Mobile.MobileFacebook.LoadRewardedVideo start.*/
            LoadRewardedVideo: function(placementID, callback) {},
            /*Facebook.Unity.Mobile.MobileFacebook.LoadRewardedVideo end.*/

            /*Facebook.Unity.Mobile.MobileFacebook.ShowRewardedVideo start.*/
            ShowRewardedVideo: function(placementID, callback) {},
            /*Facebook.Unity.Mobile.MobileFacebook.ShowRewardedVideo end.*/

            /*Facebook.Unity.Mobile.MobileFacebook.GetPayload start.*/
            GetPayload: function(callback) {},
            /*Facebook.Unity.Mobile.MobileFacebook.GetPayload end.*/

            /*Facebook.Unity.Mobile.MobileFacebook.PostSessionScore start.*/
            PostSessionScore: function(score, callback) {},
            /*Facebook.Unity.Mobile.MobileFacebook.PostSessionScore end.*/

            /*Facebook.Unity.Mobile.MobileFacebook.OpenAppStore start.*/
            OpenAppStore: function(callback) {},
            /*Facebook.Unity.Mobile.MobileFacebook.OpenAppStore end.*/


        }
    });
    /*Facebook.Unity.Mobile.MobileFacebook end.*/

    /*Facebook.Unity.Mobile.Android.AndroidFacebookGameObject start.*/
    Bridge.define("Facebook.Unity.Mobile.Android.AndroidFacebookGameObject", {
        inherits: [Facebook.Unity.Mobile.MobileFacebookGameObject],
        methods: {
            /*Facebook.Unity.Mobile.Android.AndroidFacebookGameObject.OnAwake start.*/
            OnAwake: function() {},
            /*Facebook.Unity.Mobile.Android.AndroidFacebookGameObject.OnAwake end.*/

            /*Facebook.Unity.Mobile.Android.AndroidFacebookGameObject.onPurchaseCompleteHandler start.*/
            onPurchaseCompleteHandler: function(data) {},
            /*Facebook.Unity.Mobile.Android.AndroidFacebookGameObject.onPurchaseCompleteHandler end.*/

            /*Facebook.Unity.Mobile.Android.AndroidFacebookGameObject.OnLoginStatusRetrieved start.*/
            OnLoginStatusRetrieved: function(message) {},
            /*Facebook.Unity.Mobile.Android.AndroidFacebookGameObject.OnLoginStatusRetrieved end.*/


        }
    });
    /*Facebook.Unity.Mobile.Android.AndroidFacebookGameObject end.*/

    /*Facebook.Unity.Mobile.IOS.IOSFacebookGameObject start.*/
    Bridge.define("Facebook.Unity.Mobile.IOS.IOSFacebookGameObject", {
        inherits: [Facebook.Unity.Mobile.MobileFacebookGameObject]
    });
    /*Facebook.Unity.Mobile.IOS.IOSFacebookGameObject end.*/

    /*Facebook.Unity.OpenAppStoreResult start.*/
    Bridge.define("Facebook.Unity.OpenAppStoreResult", {
        inherits: [Facebook.Unity.ResultBase, Facebook.Unity.IOpenAppStoreResult]
    });
    /*Facebook.Unity.OpenAppStoreResult end.*/

    /*Facebook.Unity.PayloadResult start.*/
    Bridge.define("Facebook.Unity.PayloadResult", {
        inherits: [Facebook.Unity.ResultBase, Facebook.Unity.IPayloadResult],
        props: {
            Payload: {
                get: function() {
                    return null;
                }
            }
        },
        alias: ["Payload", "Facebook$Unity$IPayloadResult$Payload"],
        ctors: {
            ctor: function(resultContainer) {
                this.$initialize();
                Facebook.Unity.ResultBase.ctor.call(this);
            }
        },
        methods: {
            /*Facebook.Unity.PayloadResult.toString start.*/
            toString: function() {
                return null;
            },
            /*Facebook.Unity.PayloadResult.toString end.*/


        },
        overloads: {
            "ToString()": "toString"
        }
    });
    /*Facebook.Unity.PayloadResult end.*/

    /*Facebook.Unity.PayResult start.*/
    Bridge.define("Facebook.Unity.PayResult", {
        inherits: [Facebook.Unity.ResultBase, Facebook.Unity.IPayResult],
        statics: {
            fields: {
                CancelPaymentFlowCode: System.Int64(0)
            },
            ctors: {
                init: function() {
                    this.CancelPaymentFlowCode = System.Int64(1383010);
                }
            }
        },
        props: {
            ErrorCode: {
                get: function() {
                    return Bridge.getDefaultValue(System.Int64);
                }
            }
        },
        alias: ["ErrorCode", "Facebook$Unity$IPayResult$ErrorCode"],
        methods: {
            /*Facebook.Unity.PayResult.toString start.*/
            toString: function() {
                return null;
            },
            /*Facebook.Unity.PayResult.toString end.*/


        },
        overloads: {
            "ToString()": "toString"
        }
    });
    /*Facebook.Unity.PayResult end.*/

    /*Facebook.Unity.PurchaseResult start.*/
    Bridge.define("Facebook.Unity.PurchaseResult", {
        inherits: [Facebook.Unity.ResultBase, Facebook.Unity.IPurchaseResult],
        props: {
            Purchase: {
                get: function() {
                    return null;
                }
            }
        },
        alias: ["Purchase", "Facebook$Unity$IPurchaseResult$Purchase"],
        ctors: {
            ctor: function(resultContainer) {
                this.$initialize();
                Facebook.Unity.ResultBase.ctor.call(this);
            }
        },
        methods: {
            /*Facebook.Unity.PurchaseResult.toString start.*/
            toString: function() {
                return null;
            },
            /*Facebook.Unity.PurchaseResult.toString end.*/


        },
        overloads: {
            "ToString()": "toString"
        }
    });
    /*Facebook.Unity.PurchaseResult end.*/

    /*Facebook.Unity.PurchasesResult start.*/
    Bridge.define("Facebook.Unity.PurchasesResult", {
        inherits: [Facebook.Unity.ResultBase, Facebook.Unity.IPurchasesResult],
        props: {
            Purchases: {
                get: function() {
                    return null;
                }
            }
        },
        alias: ["Purchases", "Facebook$Unity$IPurchasesResult$Purchases"],
        ctors: {
            ctor: function(resultContainer) {
                this.$initialize();
                Facebook.Unity.ResultBase.ctor.call(this);
            }
        },
        methods: {
            /*Facebook.Unity.PurchasesResult.toString start.*/
            toString: function() {
                return null;
            },
            /*Facebook.Unity.PurchasesResult.toString end.*/


        },
        overloads: {
            "ToString()": "toString"
        }
    });
    /*Facebook.Unity.PurchasesResult end.*/

    /*Facebook.Unity.RewardedVideoResult start.*/
    Bridge.define("Facebook.Unity.RewardedVideoResult", {
        inherits: [Facebook.Unity.ResultBase, Facebook.Unity.IRewardedVideoResult]
    });
    /*Facebook.Unity.RewardedVideoResult end.*/

    /*Facebook.Unity.ScheduleAppToUserNotificationResult start.*/
    Bridge.define("Facebook.Unity.ScheduleAppToUserNotificationResult", {
        inherits: [Facebook.Unity.ResultBase, Facebook.Unity.IScheduleAppToUserNotificationResult]
    });
    /*Facebook.Unity.ScheduleAppToUserNotificationResult end.*/

    /*Facebook.Unity.SessionScoreResult start.*/
    Bridge.define("Facebook.Unity.SessionScoreResult", {
        inherits: [Facebook.Unity.ResultBase, Facebook.Unity.ISessionScoreResult]
    });
    /*Facebook.Unity.SessionScoreResult end.*/

    /*Facebook.Unity.ShareResult start.*/
    Bridge.define("Facebook.Unity.ShareResult", {
        inherits: [Facebook.Unity.ResultBase, Facebook.Unity.IShareResult],
        statics: {
            props: {
                PostIDKey: {
                    get: function() {
                        return null;
                    }
                }
            }
        },
        props: {
            PostId: {
                get: function() {
                    return null;
                }
            }
        },
        alias: ["PostId", "Facebook$Unity$IShareResult$PostId"],
        methods: {
            /*Facebook.Unity.ShareResult.toString start.*/
            toString: function() {
                return null;
            },
            /*Facebook.Unity.ShareResult.toString end.*/


        },
        overloads: {
            "ToString()": "toString"
        }
    });
    /*Facebook.Unity.ShareResult end.*/

    /*FacebookGames.PayPremiumResponse start.*/
    Bridge.define("FacebookGames.PayPremiumResponse", {
        inherits: [FacebookGames.PayResponse]
    });
    /*FacebookGames.PayPremiumResponse end.*/

    /*Facebook.Unity.LoginStatusResult start.*/
    Bridge.define("Facebook.Unity.LoginStatusResult", {
        inherits: [Facebook.Unity.LoginResult, Facebook.Unity.ILoginStatusResult],
        statics: {
            fields: {
                FailedKey: null
            }
        },
        props: {
            Failed: {
                get: function() {
                    return Bridge.getDefaultValue(System.Boolean);
                }
            }
        },
        alias: ["Failed", "Facebook$Unity$ILoginStatusResult$Failed"],
        methods: {
            /*Facebook.Unity.LoginStatusResult.toString start.*/
            toString: function() {
                return null;
            },
            /*Facebook.Unity.LoginStatusResult.toString end.*/


        },
        overloads: {
            "ToString()": "toString"
        }
    });
    /*Facebook.Unity.LoginStatusResult end.*/

    /*Facebook.Unity.Mobile.Android.AndroidFacebook start.*/
    Bridge.define("Facebook.Unity.Mobile.Android.AndroidFacebook", {
        inherits: [Facebook.Unity.Mobile.MobileFacebook],
        statics: {
            fields: {
                LoginPermissionsKey: null
            },
            ctors: {
                init: function() {
                    this.LoginPermissionsKey = "";
                }
            }
        },
        fields: {
            LimitEventUsage: false,
            UserID: null
        },
        props: {
            KeyHash: {
                get: function() {
                    return null;
                }
            },
            SDKName: {
                get: function() {
                    return null;
                }
            },
            SDKVersion: {
                get: function() {
                    return null;
                }
            }
        },
        alias: [
            "LimitEventUsage", "Facebook$Unity$IFacebook$LimitEventUsage",
            "UserID", "Facebook$Unity$Mobile$IMobileFacebook$UserID",
            "SDKName", "Facebook$Unity$IFacebook$SDKName",
            "SDKVersion", "Facebook$Unity$IFacebook$SDKVersion",
            "UpdateUserProperties", "Facebook$Unity$Mobile$IMobileFacebook$UpdateUserProperties",
            "SetDataProcessingOptions", "Facebook$Unity$Mobile$IMobileFacebook$SetDataProcessingOptions",
            "SetAutoLogAppEventsEnabled", "Facebook$Unity$Mobile$IMobileFacebook$SetAutoLogAppEventsEnabled",
            "SetAdvertiserIDCollectionEnabled", "Facebook$Unity$Mobile$IMobileFacebook$SetAdvertiserIDCollectionEnabled",
            "SetAdvertiserTrackingEnabled", "Facebook$Unity$Mobile$IMobileFacebook$SetAdvertiserTrackingEnabled",
            "SetPushNotificationsDeviceTokenString", "Facebook$Unity$Mobile$IMobileFacebook$SetPushNotificationsDeviceTokenString",
            "LoginWithTrackingPreference", "Facebook$Unity$Mobile$IMobileFacebook$LoginWithTrackingPreference",
            "LogInWithReadPermissions", "Facebook$Unity$IFacebook$LogInWithReadPermissions",
            "LogInWithPublishPermissions", "Facebook$Unity$IFacebook$LogInWithPublishPermissions",
            "LogOut", "Facebook$Unity$IFacebook$LogOut",
            "CurrentAuthenticationToken", "Facebook$Unity$Mobile$IMobileFacebook$CurrentAuthenticationToken",
            "CurrentProfile", "Facebook$Unity$Mobile$IMobileFacebook$CurrentProfile",
            "AppRequest$1", "Facebook$Unity$IFacebook$AppRequest$1",
            "ShareLink", "Facebook$Unity$IFacebook$ShareLink",
            "FeedShare", "Facebook$Unity$IFacebook$FeedShare",
            "GetAppLink", "Facebook$Unity$IFacebook$GetAppLink",
            "AppEventsLogEvent", "Facebook$Unity$IFacebook$AppEventsLogEvent",
            "AppEventsLogPurchase", "Facebook$Unity$IFacebook$AppEventsLogPurchase",
            "IsImplicitPurchaseLoggingEnabled", "Facebook$Unity$Mobile$IMobileFacebook$IsImplicitPurchaseLoggingEnabled",
            "ActivateApp", "Facebook$Unity$IFacebook$ActivateApp",
            "FetchDeferredAppLink", "Facebook$Unity$Mobile$IMobileFacebook$FetchDeferredAppLink",
            "RefreshCurrentAccessToken", "Facebook$Unity$Mobile$IMobileFacebook$RefreshCurrentAccessToken",
            "OpenFriendFinderDialog", "Facebook$Unity$Mobile$IMobileFacebook$OpenFriendFinderDialog",
            "UploadImageToMediaLibrary", "Facebook$Unity$Mobile$IMobileFacebook$UploadImageToMediaLibrary",
            "UploadVideoToMediaLibrary", "Facebook$Unity$Mobile$IMobileFacebook$UploadVideoToMediaLibrary",
            "OnIAPReady", "Facebook$Unity$Mobile$IMobileFacebook$OnIAPReady",
            "GetCatalog", "Facebook$Unity$Mobile$IMobileFacebook$GetCatalog",
            "GetPurchases", "Facebook$Unity$Mobile$IMobileFacebook$GetPurchases",
            "Purchase", "Facebook$Unity$Mobile$IMobileFacebook$Purchase",
            "ConsumePurchase", "Facebook$Unity$Mobile$IMobileFacebook$ConsumePurchase",
            "InitCloudGame", "Facebook$Unity$Mobile$IMobileFacebook$InitCloudGame",
            "ScheduleAppToUserNotification", "Facebook$Unity$Mobile$IMobileFacebook$ScheduleAppToUserNotification",
            "LoadInterstitialAd", "Facebook$Unity$Mobile$IMobileFacebook$LoadInterstitialAd",
            "ShowInterstitialAd", "Facebook$Unity$Mobile$IMobileFacebook$ShowInterstitialAd",
            "LoadRewardedVideo", "Facebook$Unity$Mobile$IMobileFacebook$LoadRewardedVideo",
            "ShowRewardedVideo", "Facebook$Unity$Mobile$IMobileFacebook$ShowRewardedVideo",
            "GetPayload", "Facebook$Unity$Mobile$IMobileFacebook$GetPayload",
            "PostSessionScore", "Facebook$Unity$Mobile$IMobileFacebook$PostSessionScore",
            "OpenAppStore", "Facebook$Unity$Mobile$IMobileFacebook$OpenAppStore"
        ],
        ctors: {
            ctor: function() {
                this.$initialize();
                Facebook.Unity.Mobile.MobileFacebook.ctor.call(this);
            },
            $ctor1: function(androidWrapper, callbackManager) {
                this.$initialize();
                Facebook.Unity.Mobile.MobileFacebook.ctor.call(this);
            }
        },
        methods: {
            /*Facebook.Unity.Mobile.Android.AndroidFacebook.UpdateUserProperties start.*/
            UpdateUserProperties: function(parameters) {},
            /*Facebook.Unity.Mobile.Android.AndroidFacebook.UpdateUserProperties end.*/

            /*Facebook.Unity.Mobile.Android.AndroidFacebook.SetDataProcessingOptions start.*/
            SetDataProcessingOptions: function(options, country, state) {},
            /*Facebook.Unity.Mobile.Android.AndroidFacebook.SetDataProcessingOptions end.*/

            /*Facebook.Unity.Mobile.Android.AndroidFacebook.SetAutoLogAppEventsEnabled start.*/
            SetAutoLogAppEventsEnabled: function(autoLogAppEventsEnabled) {},
            /*Facebook.Unity.Mobile.Android.AndroidFacebook.SetAutoLogAppEventsEnabled end.*/

            /*Facebook.Unity.Mobile.Android.AndroidFacebook.SetAdvertiserIDCollectionEnabled start.*/
            SetAdvertiserIDCollectionEnabled: function(advertiserIDCollectionEnabled) {},
            /*Facebook.Unity.Mobile.Android.AndroidFacebook.SetAdvertiserIDCollectionEnabled end.*/

            /*Facebook.Unity.Mobile.Android.AndroidFacebook.SetAdvertiserTrackingEnabled start.*/
            SetAdvertiserTrackingEnabled: function(advertiserTrackingEnabled) {
                return Bridge.getDefaultValue(System.Boolean);
            },
            /*Facebook.Unity.Mobile.Android.AndroidFacebook.SetAdvertiserTrackingEnabled end.*/

            /*Facebook.Unity.Mobile.Android.AndroidFacebook.SetPushNotificationsDeviceTokenString start.*/
            SetPushNotificationsDeviceTokenString: function(token) {},
            /*Facebook.Unity.Mobile.Android.AndroidFacebook.SetPushNotificationsDeviceTokenString end.*/

            /*Facebook.Unity.Mobile.Android.AndroidFacebook.Init$1 start.*/
            Init$1: function(appId, hideUnityDelegate, onInitComplete) {},
            /*Facebook.Unity.Mobile.Android.AndroidFacebook.Init$1 end.*/

            /*Facebook.Unity.Mobile.Android.AndroidFacebook.LoginWithTrackingPreference start.*/
            LoginWithTrackingPreference: function(tracking, permissions, nonce, callback) {},
            /*Facebook.Unity.Mobile.Android.AndroidFacebook.LoginWithTrackingPreference end.*/

            /*Facebook.Unity.Mobile.Android.AndroidFacebook.LogInWithReadPermissions start.*/
            LogInWithReadPermissions: function(permissions, callback) {},
            /*Facebook.Unity.Mobile.Android.AndroidFacebook.LogInWithReadPermissions end.*/

            /*Facebook.Unity.Mobile.Android.AndroidFacebook.LogInWithPublishPermissions start.*/
            LogInWithPublishPermissions: function(permissions, callback) {},
            /*Facebook.Unity.Mobile.Android.AndroidFacebook.LogInWithPublishPermissions end.*/

            /*Facebook.Unity.Mobile.Android.AndroidFacebook.LogOut start.*/
            LogOut: function() {},
            /*Facebook.Unity.Mobile.Android.AndroidFacebook.LogOut end.*/

            /*Facebook.Unity.Mobile.Android.AndroidFacebook.CurrentAuthenticationToken start.*/
            CurrentAuthenticationToken: function() {
                return null;
            },
            /*Facebook.Unity.Mobile.Android.AndroidFacebook.CurrentAuthenticationToken end.*/

            /*Facebook.Unity.Mobile.Android.AndroidFacebook.CurrentProfile start.*/
            CurrentProfile: function() {
                return null;
            },
            /*Facebook.Unity.Mobile.Android.AndroidFacebook.CurrentProfile end.*/

            /*Facebook.Unity.Mobile.Android.AndroidFacebook.RetrieveLoginStatus start.*/
            RetrieveLoginStatus: function(callback) {},
            /*Facebook.Unity.Mobile.Android.AndroidFacebook.RetrieveLoginStatus end.*/

            /*Facebook.Unity.Mobile.Android.AndroidFacebook.OnLoginStatusRetrieved start.*/
            OnLoginStatusRetrieved: function(resultContainer) {},
            /*Facebook.Unity.Mobile.Android.AndroidFacebook.OnLoginStatusRetrieved end.*/

            /*Facebook.Unity.Mobile.Android.AndroidFacebook.AppRequest$1 start.*/
            AppRequest$1: function(message, actionType, objectId, to, filters, excludeIds, maxRecipients, data, title, callback) {},
            /*Facebook.Unity.Mobile.Android.AndroidFacebook.AppRequest$1 end.*/

            /*Facebook.Unity.Mobile.Android.AndroidFacebook.ShareLink start.*/
            ShareLink: function(contentURL, contentTitle, contentDescription, photoURL, callback) {},
            /*Facebook.Unity.Mobile.Android.AndroidFacebook.ShareLink end.*/

            /*Facebook.Unity.Mobile.Android.AndroidFacebook.FeedShare start.*/
            FeedShare: function(toId, link, linkName, linkCaption, linkDescription, picture, mediaSource, callback) {},
            /*Facebook.Unity.Mobile.Android.AndroidFacebook.FeedShare end.*/

            /*Facebook.Unity.Mobile.Android.AndroidFacebook.GetAppLink start.*/
            GetAppLink: function(callback) {},
            /*Facebook.Unity.Mobile.Android.AndroidFacebook.GetAppLink end.*/

            /*Facebook.Unity.Mobile.Android.AndroidFacebook.ClearAppLink start.*/
            ClearAppLink: function() {},
            /*Facebook.Unity.Mobile.Android.AndroidFacebook.ClearAppLink end.*/

            /*Facebook.Unity.Mobile.Android.AndroidFacebook.AppEventsLogEvent start.*/
            AppEventsLogEvent: function(logEvent, valueToSum, parameters) {},
            /*Facebook.Unity.Mobile.Android.AndroidFacebook.AppEventsLogEvent end.*/

            /*Facebook.Unity.Mobile.Android.AndroidFacebook.AppEventsLogPurchase start.*/
            AppEventsLogPurchase: function(logPurchase, currency, parameters) {},
            /*Facebook.Unity.Mobile.Android.AndroidFacebook.AppEventsLogPurchase end.*/

            /*Facebook.Unity.Mobile.Android.AndroidFacebook.IsImplicitPurchaseLoggingEnabled start.*/
            IsImplicitPurchaseLoggingEnabled: function() {
                return Bridge.getDefaultValue(System.Boolean);
            },
            /*Facebook.Unity.Mobile.Android.AndroidFacebook.IsImplicitPurchaseLoggingEnabled end.*/

            /*Facebook.Unity.Mobile.Android.AndroidFacebook.ActivateApp start.*/
            ActivateApp: function(appId) {},
            /*Facebook.Unity.Mobile.Android.AndroidFacebook.ActivateApp end.*/

            /*Facebook.Unity.Mobile.Android.AndroidFacebook.FetchDeferredAppLink start.*/
            FetchDeferredAppLink: function(callback) {},
            /*Facebook.Unity.Mobile.Android.AndroidFacebook.FetchDeferredAppLink end.*/

            /*Facebook.Unity.Mobile.Android.AndroidFacebook.RefreshCurrentAccessToken start.*/
            RefreshCurrentAccessToken: function(callback) {},
            /*Facebook.Unity.Mobile.Android.AndroidFacebook.RefreshCurrentAccessToken end.*/

            /*Facebook.Unity.Mobile.Android.AndroidFacebook.OpenFriendFinderDialog start.*/
            OpenFriendFinderDialog: function(callback) {},
            /*Facebook.Unity.Mobile.Android.AndroidFacebook.OpenFriendFinderDialog end.*/

            /*Facebook.Unity.Mobile.Android.AndroidFacebook.UploadImageToMediaLibrary start.*/
            UploadImageToMediaLibrary: function(caption, imageUri, shouldLaunchMediaDialog, callback) {},
            /*Facebook.Unity.Mobile.Android.AndroidFacebook.UploadImageToMediaLibrary end.*/

            /*Facebook.Unity.Mobile.Android.AndroidFacebook.UploadVideoToMediaLibrary start.*/
            UploadVideoToMediaLibrary: function(caption, videoUri, callback) {},
            /*Facebook.Unity.Mobile.Android.AndroidFacebook.UploadVideoToMediaLibrary end.*/

            /*Facebook.Unity.Mobile.Android.AndroidFacebook.OnIAPReady start.*/
            OnIAPReady: function(callback) {},
            /*Facebook.Unity.Mobile.Android.AndroidFacebook.OnIAPReady end.*/

            /*Facebook.Unity.Mobile.Android.AndroidFacebook.GetCatalog start.*/
            GetCatalog: function(callback) {},
            /*Facebook.Unity.Mobile.Android.AndroidFacebook.GetCatalog end.*/

            /*Facebook.Unity.Mobile.Android.AndroidFacebook.GetPurchases start.*/
            GetPurchases: function(callback) {},
            /*Facebook.Unity.Mobile.Android.AndroidFacebook.GetPurchases end.*/

            /*Facebook.Unity.Mobile.Android.AndroidFacebook.Purchase start.*/
            Purchase: function(productID, callback, developerPayload) {},
            /*Facebook.Unity.Mobile.Android.AndroidFacebook.Purchase end.*/

            /*Facebook.Unity.Mobile.Android.AndroidFacebook.ConsumePurchase start.*/
            ConsumePurchase: function(purchaseToken, callback) {},
            /*Facebook.Unity.Mobile.Android.AndroidFacebook.ConsumePurchase end.*/

            /*Facebook.Unity.Mobile.Android.AndroidFacebook.InitCloudGame start.*/
            InitCloudGame: function(callback) {},
            /*Facebook.Unity.Mobile.Android.AndroidFacebook.InitCloudGame end.*/

            /*Facebook.Unity.Mobile.Android.AndroidFacebook.ScheduleAppToUserNotification start.*/
            ScheduleAppToUserNotification: function(title, body, media, timeInterval, payload, callback) {},
            /*Facebook.Unity.Mobile.Android.AndroidFacebook.ScheduleAppToUserNotification end.*/

            /*Facebook.Unity.Mobile.Android.AndroidFacebook.LoadInterstitialAd start.*/
            LoadInterstitialAd: function(placementID, callback) {},
            /*Facebook.Unity.Mobile.Android.AndroidFacebook.LoadInterstitialAd end.*/

            /*Facebook.Unity.Mobile.Android.AndroidFacebook.ShowInterstitialAd start.*/
            ShowInterstitialAd: function(placementID, callback) {},
            /*Facebook.Unity.Mobile.Android.AndroidFacebook.ShowInterstitialAd end.*/

            /*Facebook.Unity.Mobile.Android.AndroidFacebook.LoadRewardedVideo start.*/
            LoadRewardedVideo: function(placementID, callback) {},
            /*Facebook.Unity.Mobile.Android.AndroidFacebook.LoadRewardedVideo end.*/

            /*Facebook.Unity.Mobile.Android.AndroidFacebook.ShowRewardedVideo start.*/
            ShowRewardedVideo: function(placementID, callback) {},
            /*Facebook.Unity.Mobile.Android.AndroidFacebook.ShowRewardedVideo end.*/

            /*Facebook.Unity.Mobile.Android.AndroidFacebook.GetPayload start.*/
            GetPayload: function(callback) {},
            /*Facebook.Unity.Mobile.Android.AndroidFacebook.GetPayload end.*/

            /*Facebook.Unity.Mobile.Android.AndroidFacebook.PostSessionScore start.*/
            PostSessionScore: function(score, callback) {},
            /*Facebook.Unity.Mobile.Android.AndroidFacebook.PostSessionScore end.*/

            /*Facebook.Unity.Mobile.Android.AndroidFacebook.OpenAppStore start.*/
            OpenAppStore: function(callback) {},
            /*Facebook.Unity.Mobile.Android.AndroidFacebook.OpenAppStore end.*/

            /*Facebook.Unity.Mobile.Android.AndroidFacebook.SetShareDialogMode start.*/
            SetShareDialogMode: function(mode) {},
            /*Facebook.Unity.Mobile.Android.AndroidFacebook.SetShareDialogMode end.*/


        },
        overloads: {
            "Init(string, Facebook.Unity.HideUnityDelegate, Facebook.Unity.InitDelegate)": "Init$1",
            "AppRequest(string, System.Nullable<Facebook.Unity.OGActionType>, string, System.Collections.Generic.IEnumerable<string>, System.Collections.Generic.IEnumerable<System.Object>, System.Collections.Generic.IEnumerable<string>, System.Nullable<int>, string, string, Facebook.Unity.FacebookDelegate<Facebook.Unity.IAppRequestResult>)": "AppRequest$1"
        }
    });
    /*Facebook.Unity.Mobile.Android.AndroidFacebook end.*/

    /*Facebook.Unity.Mobile.IOS.IOSFacebook start.*/
    Bridge.define("Facebook.Unity.Mobile.IOS.IOSFacebook", {
        inherits: [Facebook.Unity.Mobile.MobileFacebook],
        fields: {
            LimitEventUsage: false,
            UserID: null
        },
        props: {
            SDKName: {
                get: function() {
                    return null;
                }
            },
            SDKVersion: {
                get: function() {
                    return null;
                }
            },
            LoggedIn: {
                get: function() {
                    return Bridge.getDefaultValue(System.Boolean);
                }
            }
        },
        alias: [
            "LimitEventUsage", "Facebook$Unity$IFacebook$LimitEventUsage",
            "SDKName", "Facebook$Unity$IFacebook$SDKName",
            "SDKVersion", "Facebook$Unity$IFacebook$SDKVersion",
            "UserID", "Facebook$Unity$Mobile$IMobileFacebook$UserID",
            "LoggedIn", "Facebook$Unity$IFacebook$LoggedIn",
            "SetAutoLogAppEventsEnabled", "Facebook$Unity$Mobile$IMobileFacebook$SetAutoLogAppEventsEnabled",
            "SetAdvertiserIDCollectionEnabled", "Facebook$Unity$Mobile$IMobileFacebook$SetAdvertiserIDCollectionEnabled",
            "SetAdvertiserTrackingEnabled", "Facebook$Unity$Mobile$IMobileFacebook$SetAdvertiserTrackingEnabled",
            "SetPushNotificationsDeviceTokenString", "Facebook$Unity$Mobile$IMobileFacebook$SetPushNotificationsDeviceTokenString",
            "UpdateUserProperties", "Facebook$Unity$Mobile$IMobileFacebook$UpdateUserProperties",
            "SetDataProcessingOptions", "Facebook$Unity$Mobile$IMobileFacebook$SetDataProcessingOptions",
            "LoginWithTrackingPreference", "Facebook$Unity$Mobile$IMobileFacebook$LoginWithTrackingPreference",
            "LogInWithReadPermissions", "Facebook$Unity$IFacebook$LogInWithReadPermissions",
            "LogInWithPublishPermissions", "Facebook$Unity$IFacebook$LogInWithPublishPermissions",
            "LogOut", "Facebook$Unity$IFacebook$LogOut",
            "CurrentAuthenticationToken", "Facebook$Unity$Mobile$IMobileFacebook$CurrentAuthenticationToken",
            "CurrentProfile", "Facebook$Unity$Mobile$IMobileFacebook$CurrentProfile",
            "AppRequest$1", "Facebook$Unity$IFacebook$AppRequest$1",
            "ShareLink", "Facebook$Unity$IFacebook$ShareLink",
            "FeedShare", "Facebook$Unity$IFacebook$FeedShare",
            "AppEventsLogEvent", "Facebook$Unity$IFacebook$AppEventsLogEvent",
            "AppEventsLogPurchase", "Facebook$Unity$IFacebook$AppEventsLogPurchase",
            "IsImplicitPurchaseLoggingEnabled", "Facebook$Unity$Mobile$IMobileFacebook$IsImplicitPurchaseLoggingEnabled",
            "ActivateApp", "Facebook$Unity$IFacebook$ActivateApp",
            "FetchDeferredAppLink", "Facebook$Unity$Mobile$IMobileFacebook$FetchDeferredAppLink",
            "GetAppLink", "Facebook$Unity$IFacebook$GetAppLink",
            "OpenFriendFinderDialog", "Facebook$Unity$Mobile$IMobileFacebook$OpenFriendFinderDialog",
            "RefreshCurrentAccessToken", "Facebook$Unity$Mobile$IMobileFacebook$RefreshCurrentAccessToken",
            "UploadImageToMediaLibrary", "Facebook$Unity$Mobile$IMobileFacebook$UploadImageToMediaLibrary",
            "UploadVideoToMediaLibrary", "Facebook$Unity$Mobile$IMobileFacebook$UploadVideoToMediaLibrary"
        ],
        ctors: {
            ctor: function() {
                this.$initialize();
                Facebook.Unity.Mobile.MobileFacebook.ctor.call(this);
            },
            $ctor1: function(iosWrapper, callbackManager) {
                this.$initialize();
                Facebook.Unity.Mobile.MobileFacebook.ctor.call(this);
            }
        },
        methods: {
            /*Facebook.Unity.Mobile.IOS.IOSFacebook.SetAutoLogAppEventsEnabled start.*/
            SetAutoLogAppEventsEnabled: function(autoLogAppEventsEnabled) {},
            /*Facebook.Unity.Mobile.IOS.IOSFacebook.SetAutoLogAppEventsEnabled end.*/

            /*Facebook.Unity.Mobile.IOS.IOSFacebook.SetAdvertiserIDCollectionEnabled start.*/
            SetAdvertiserIDCollectionEnabled: function(advertiserIDCollectionEnabled) {},
            /*Facebook.Unity.Mobile.IOS.IOSFacebook.SetAdvertiserIDCollectionEnabled end.*/

            /*Facebook.Unity.Mobile.IOS.IOSFacebook.SetAdvertiserTrackingEnabled start.*/
            SetAdvertiserTrackingEnabled: function(advertiserTrackingEnabled) {
                return Bridge.getDefaultValue(System.Boolean);
            },
            /*Facebook.Unity.Mobile.IOS.IOSFacebook.SetAdvertiserTrackingEnabled end.*/

            /*Facebook.Unity.Mobile.IOS.IOSFacebook.SetPushNotificationsDeviceTokenString start.*/
            SetPushNotificationsDeviceTokenString: function(token) {},
            /*Facebook.Unity.Mobile.IOS.IOSFacebook.SetPushNotificationsDeviceTokenString end.*/

            /*Facebook.Unity.Mobile.IOS.IOSFacebook.UpdateUserProperties start.*/
            UpdateUserProperties: function(parameters) {},
            /*Facebook.Unity.Mobile.IOS.IOSFacebook.UpdateUserProperties end.*/

            /*Facebook.Unity.Mobile.IOS.IOSFacebook.SetDataProcessingOptions start.*/
            SetDataProcessingOptions: function(options, country, state) {},
            /*Facebook.Unity.Mobile.IOS.IOSFacebook.SetDataProcessingOptions end.*/

            /*Facebook.Unity.Mobile.IOS.IOSFacebook.Init$1 start.*/
            Init$1: function(appId, frictionlessRequests, iosURLSuffix, hideUnityDelegate, onInitComplete) {},
            /*Facebook.Unity.Mobile.IOS.IOSFacebook.Init$1 end.*/

            /*Facebook.Unity.Mobile.IOS.IOSFacebook.LoginWithTrackingPreference start.*/
            LoginWithTrackingPreference: function(tracking, permissions, nonce, callback) {},
            /*Facebook.Unity.Mobile.IOS.IOSFacebook.LoginWithTrackingPreference end.*/

            /*Facebook.Unity.Mobile.IOS.IOSFacebook.LogInWithReadPermissions start.*/
            LogInWithReadPermissions: function(permissions, callback) {},
            /*Facebook.Unity.Mobile.IOS.IOSFacebook.LogInWithReadPermissions end.*/

            /*Facebook.Unity.Mobile.IOS.IOSFacebook.LogInWithPublishPermissions start.*/
            LogInWithPublishPermissions: function(permissions, callback) {},
            /*Facebook.Unity.Mobile.IOS.IOSFacebook.LogInWithPublishPermissions end.*/

            /*Facebook.Unity.Mobile.IOS.IOSFacebook.LogOut start.*/
            LogOut: function() {},
            /*Facebook.Unity.Mobile.IOS.IOSFacebook.LogOut end.*/

            /*Facebook.Unity.Mobile.IOS.IOSFacebook.CurrentAuthenticationToken start.*/
            CurrentAuthenticationToken: function() {
                return null;
            },
            /*Facebook.Unity.Mobile.IOS.IOSFacebook.CurrentAuthenticationToken end.*/

            /*Facebook.Unity.Mobile.IOS.IOSFacebook.CurrentProfile start.*/
            CurrentProfile: function() {
                return null;
            },
            /*Facebook.Unity.Mobile.IOS.IOSFacebook.CurrentProfile end.*/

            /*Facebook.Unity.Mobile.IOS.IOSFacebook.AppRequest$1 start.*/
            AppRequest$1: function(message, actionType, objectId, to, filters, excludeIds, maxRecipients, data, title, callback) {},
            /*Facebook.Unity.Mobile.IOS.IOSFacebook.AppRequest$1 end.*/

            /*Facebook.Unity.Mobile.IOS.IOSFacebook.ShareLink start.*/
            ShareLink: function(contentURL, contentTitle, contentDescription, photoURL, callback) {},
            /*Facebook.Unity.Mobile.IOS.IOSFacebook.ShareLink end.*/

            /*Facebook.Unity.Mobile.IOS.IOSFacebook.FeedShare start.*/
            FeedShare: function(toId, link, linkName, linkCaption, linkDescription, picture, mediaSource, callback) {},
            /*Facebook.Unity.Mobile.IOS.IOSFacebook.FeedShare end.*/

            /*Facebook.Unity.Mobile.IOS.IOSFacebook.AppEventsLogEvent start.*/
            AppEventsLogEvent: function(logEvent, valueToSum, parameters) {},
            /*Facebook.Unity.Mobile.IOS.IOSFacebook.AppEventsLogEvent end.*/

            /*Facebook.Unity.Mobile.IOS.IOSFacebook.AppEventsLogPurchase start.*/
            AppEventsLogPurchase: function(logPurchase, currency, parameters) {},
            /*Facebook.Unity.Mobile.IOS.IOSFacebook.AppEventsLogPurchase end.*/

            /*Facebook.Unity.Mobile.IOS.IOSFacebook.IsImplicitPurchaseLoggingEnabled start.*/
            IsImplicitPurchaseLoggingEnabled: function() {
                return Bridge.getDefaultValue(System.Boolean);
            },
            /*Facebook.Unity.Mobile.IOS.IOSFacebook.IsImplicitPurchaseLoggingEnabled end.*/

            /*Facebook.Unity.Mobile.IOS.IOSFacebook.ActivateApp start.*/
            ActivateApp: function(appId) {},
            /*Facebook.Unity.Mobile.IOS.IOSFacebook.ActivateApp end.*/

            /*Facebook.Unity.Mobile.IOS.IOSFacebook.FetchDeferredAppLink start.*/
            FetchDeferredAppLink: function(callback) {},
            /*Facebook.Unity.Mobile.IOS.IOSFacebook.FetchDeferredAppLink end.*/

            /*Facebook.Unity.Mobile.IOS.IOSFacebook.GetAppLink start.*/
            GetAppLink: function(callback) {},
            /*Facebook.Unity.Mobile.IOS.IOSFacebook.GetAppLink end.*/

            /*Facebook.Unity.Mobile.IOS.IOSFacebook.OpenFriendFinderDialog start.*/
            OpenFriendFinderDialog: function(callback) {},
            /*Facebook.Unity.Mobile.IOS.IOSFacebook.OpenFriendFinderDialog end.*/

            /*Facebook.Unity.Mobile.IOS.IOSFacebook.RefreshCurrentAccessToken start.*/
            RefreshCurrentAccessToken: function(callback) {},
            /*Facebook.Unity.Mobile.IOS.IOSFacebook.RefreshCurrentAccessToken end.*/

            /*Facebook.Unity.Mobile.IOS.IOSFacebook.SetShareDialogMode start.*/
            SetShareDialogMode: function(mode) {},
            /*Facebook.Unity.Mobile.IOS.IOSFacebook.SetShareDialogMode end.*/

            /*Facebook.Unity.Mobile.IOS.IOSFacebook.UploadImageToMediaLibrary start.*/
            UploadImageToMediaLibrary: function(caption, imageUri, shouldLaunchMediaDialog, callback) {},
            /*Facebook.Unity.Mobile.IOS.IOSFacebook.UploadImageToMediaLibrary end.*/

            /*Facebook.Unity.Mobile.IOS.IOSFacebook.UploadVideoToMediaLibrary start.*/
            UploadVideoToMediaLibrary: function(caption, videoUri, callback) {},
            /*Facebook.Unity.Mobile.IOS.IOSFacebook.UploadVideoToMediaLibrary end.*/


        },
        overloads: {
            "Init(string, bool, string, Facebook.Unity.HideUnityDelegate, Facebook.Unity.InitDelegate)": "Init$1",
            "AppRequest(string, System.Nullable<Facebook.Unity.OGActionType>, string, System.Collections.Generic.IEnumerable<string>, System.Collections.Generic.IEnumerable<System.Object>, System.Collections.Generic.IEnumerable<string>, System.Nullable<int>, string, string, Facebook.Unity.FacebookDelegate<Facebook.Unity.IAppRequestResult>)": "AppRequest$1"
        }
    });
    /*Facebook.Unity.Mobile.IOS.IOSFacebook end.*/

    var $m = Bridge.setMetadata,
        $n = ["System", "UnityEngine", "System.Collections.Generic", "UnityEngine.EventSystems", "UnityEngine.UI", "System.Collections", "FacebookGames", "System.IO", "Facebook.Unity", "Facebook.Unity.Mobile", "Facebook.Unity.Gameroom", "Facebook.Unity.Settings", "Facebook.Unity.Mobile.IOS", "Facebook.Unity.Mobile.Android", "Facebook.Unity.Editor", "Facebook.Unity.Canvas", "xgame.sdk", "UnityEngine.Audio", "DG.Tweening.Core", "DG.Tweening", "DG.Tweening.Plugins.Core.PathCore", "DG.Tweening.Plugins.Options"];

    /*CameraPropertyOverrider start.*/
    $m("CameraPropertyOverrider", function() { return { "att": 1048577, "a": 2, "at": [new UnityEngine.RequireComponent.ctor(UnityEngine.Camera)], "m": [{ "a": 2, "isSynthetic": true, "n": ".ctor", "t": 1, "sn": "ctor" }, { "a": 1, "n": "Start", "t": 8, "sn": "Start", "rt": $n[0].Void }, { "a": 2, "n": "UpdateCameraProperty", "t": 8, "sn": "UpdateCameraProperty", "rt": $n[0].Void }, { "a": 1, "n": "RectSize", "t": 16, "rt": $n[1].Rect, "g": { "a": 1, "n": "get_RectSize", "t": 8, "rt": $n[1].Rect, "fg": "RectSize" }, "fn": "RectSize" }, { "a": 1, "n": "SafeSize", "t": 16, "rt": $n[1].Rect, "g": { "a": 1, "n": "get_SafeSize", "t": 8, "rt": $n[1].Rect, "fg": "SafeSize" }, "fn": "SafeSize" }, { "a": 2, "n": "isSafeAreaCamera", "t": 4, "rt": $n[0].Boolean, "sn": "isSafeAreaCamera", "box": function($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString); } }, { "a": 1, "n": "myCamera", "t": 4, "rt": $n[1].Camera, "sn": "myCamera" }, { "a": 2, "n": "useFullSize", "t": 4, "rt": $n[0].Boolean, "sn": "useFullSize", "box": function($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString); } }] }; }, $n);
    /*CameraPropertyOverrider end.*/

    /*CameraSetup start.*/
    $m("CameraSetup", function() { return { "att": 1048577, "a": 2, "m": [{ "a": 2, "isSynthetic": true, "n": ".ctor", "t": 1, "sn": "ctor" }, { "a": 1, "n": "OnEnable", "t": 8, "sn": "OnEnable", "rt": $n[0].Void }, { "a": 1, "n": "Start", "t": 8, "sn": "Start", "rt": $n[0].Void }, { "a": 2, "n": "baseDeco", "t": 4, "rt": $n[1].GameObject, "sn": "baseDeco" }] }; }, $n);
    /*CameraSetup end.*/

    /*ChangeImage start.*/
    $m("ChangeImage", function() { return { "att": 1048577, "a": 2, "m": [{ "a": 2, "isSynthetic": true, "n": ".ctor", "t": 1, "sn": "ctor" }, { "a": 1, "n": "Awake", "t": 8, "sn": "Awake", "rt": $n[0].Void }, { "a": 2, "n": "ChangeImageButton", "t": 8, "pi": [{ "n": "isOn", "pt": $n[0].Boolean, "ps": 0 }], "sn": "ChangeImageButton", "rt": $n[0].Void, "p": [$n[0].Boolean] }, { "a": 1, "n": "images", "t": 4, "rt": System.Array.type(UnityEngine.UI.Image), "sn": "images" }, { "at": [new UnityEngine.SerializeFieldAttribute()], "a": 1, "n": "listIcon", "t": 4, "rt": $n[2].List$1(UnityEngine.Sprite), "sn": "listIcon" }, { "at": [new UnityEngine.SerializeFieldAttribute()], "a": 1, "n": "listbg", "t": 4, "rt": $n[2].List$1(UnityEngine.Sprite), "sn": "listbg" }] }; }, $n);
    /*ChangeImage end.*/

    /*ClickAction start.*/
    $m("ClickAction", function() { return { "att": 1048577, "a": 2, "m": [{ "a": 2, "isSynthetic": true, "n": ".ctor", "t": 1, "sn": "ctor" }, { "a": 2, "n": "OnPointerClick", "t": 8, "pi": [{ "n": "eventData", "pt": $n[3].PointerEventData, "ps": 0 }], "sn": "OnPointerClick", "rt": $n[0].Void, "p": [$n[3].PointerEventData] }, { "at": [new UnityEngine.SerializeFieldAttribute()], "a": 1, "n": "popupClose", "t": 4, "rt": $n[1].GameObject, "sn": "popupClose" }] }; }, $n);
    /*ClickAction end.*/

    /*Decorate start.*/
    $m("Decorate", function() { return { "att": 1048577, "a": 2, "m": [{ "a": 2, "isSynthetic": true, "n": ".ctor", "t": 1, "sn": "ctor" }, { "a": 2, "n": "CheckState", "t": 8, "sn": "CheckState", "rt": $n[0].Void }, { "a": 1, "n": "OnDisable", "t": 8, "sn": "OnDisable", "rt": $n[0].Void }, { "a": 2, "n": "SetEnable", "t": 8, "pi": [{ "n": "id", "pt": $n[0].Int32, "ps": 0 }], "sn": "SetEnable", "rt": $n[0].Void, "p": [$n[0].Int32] }, { "a": 2, "n": "id", "t": 4, "rt": $n[0].Int32, "sn": "id", "box": function($v) { return Bridge.box($v, System.Int32); } }, { "a": 1, "n": "isAnim", "t": 4, "rt": $n[0].Boolean, "sn": "isAnim", "box": function($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString); } }, { "a": 1, "n": "isInit", "t": 4, "rt": $n[0].Boolean, "sn": "isInit", "box": function($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString); } }, { "a": 2, "n": "items", "t": 4, "rt": $n[2].List$1(UnityEngine.GameObject), "sn": "items" }] }; }, $n);
    /*Decorate end.*/

    /*GameManager start.*/
    $m("GameManager", function() { return { "att": 1048577, "a": 2, "m": [{ "a": 2, "isSynthetic": true, "n": ".ctor", "t": 1, "sn": "ctor" }, { "a": 1, "n": "Awake", "t": 8, "sn": "Awake", "rt": $n[0].Void }, { "a": 2, "n": "HideWinFx", "t": 8, "sn": "HideWinFx", "rt": $n[0].Void }, { "a": 2, "n": "NextLevel", "t": 8, "sn": "NextLevel", "rt": $n[0].Void }, { "a": 2, "n": "OnWin", "t": 8, "sn": "OnWin", "rt": $n[0].Void }, { "a": 1, "n": "Start", "t": 8, "sn": "Start", "rt": $n[0].Void }, { "a": 2, "n": "onDataLoaded", "t": 8, "sn": "onDataLoaded", "rt": $n[0].Void }, { "a": 2, "n": "onInitGame", "t": 8, "sn": "onInitGame", "rt": $n[0].Void }, { "a": 2, "n": "onStartGame", "t": 8, "sn": "onStartGame", "rt": $n[0].Void }, { "a": 2, "n": "Instance", "is": true, "t": 4, "rt": GameManager, "sn": "Instance" }, { "a": 2, "n": "IsWait", "t": 4, "rt": $n[0].Boolean, "sn": "IsWait", "box": function($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString); } }, { "a": 2, "n": "IsWin", "t": 4, "rt": $n[0].Boolean, "sn": "IsWin", "box": function($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString); } }, { "a": 2, "n": "fxWin", "t": 4, "rt": $n[1].GameObject, "sn": "fxWin" }, { "a": 2, "n": "isInGame", "t": 4, "rt": $n[0].Boolean, "sn": "isInGame", "box": function($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString); } }] }; }, $n);
    /*GameManager end.*/

    /*GenerateLevel start.*/
    $m("GenerateLevel", function() { return { "att": 1048577, "a": 2, "m": [{ "a": 2, "isSynthetic": true, "n": ".ctor", "t": 1, "sn": "ctor" }, { "a": 2, "n": "CheckFill", "is": true, "t": 8, "pi": [{ "n": "colors", "pt": $n[0].Array.type(System.Int32), "ps": 0 }, { "n": "color", "pt": $n[0].Int32, "ps": 1 }, { "n": "countCheck", "dv": 1, "o": true, "pt": $n[0].Int32, "ps": 2 }], "sn": "CheckFill", "rt": $n[0].Boolean, "p": [$n[0].Array.type(System.Int32), $n[0].Int32, $n[0].Int32], "box": function($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString); } }, { "a": 2, "n": "GenerateData", "is": true, "t": 8, "pi": [{ "n": "level", "pt": $n[0].Int32, "ps": 0 }, { "n": "id", "pt": $n[0].Int32, "ps": 1 }], "sn": "GenerateData", "rt": LevelData, "p": [$n[0].Int32, $n[0].Int32] }, { "a": 2, "n": "GetLastItem", "is": true, "t": 8, "pi": [{ "n": "colors", "pt": $n[0].Array.type(System.Int32), "ps": 0 }], "sn": "GetLastItem", "rt": $n[0].Int32, "p": [$n[0].Array.type(System.Int32)], "box": function($v) { return Bridge.box($v, System.Int32); } }, { "a": 2, "n": "SendColor", "is": true, "t": 8, "pi": [{ "n": "data", "pt": LevelData, "ps": 0 }, { "n": "idx1", "pt": $n[0].Int32, "ps": 1 }, { "n": "idx2", "pt": $n[0].Int32, "ps": 2 }, { "n": "color", "pt": $n[0].Int32, "ps": 3 }], "sn": "SendColor", "rt": $n[0].Void, "p": [LevelData, $n[0].Int32, $n[0].Int32, $n[0].Int32] }] }; }, $n);
    /*GenerateLevel end.*/

    /*LevelData2 start.*/
    $m("LevelData2", function() { return { "att": 1048577, "a": 2, "m": [{ "a": 2, "isSynthetic": true, "n": ".ctor", "t": 1, "sn": "ctor" }, { "a": 2, "n": "data", "t": 4, "rt": $n[0].Array.type(System.Array.type(System.Int32)), "sn": "data" }, { "a": 2, "n": "requireData", "t": 4, "rt": $n[0].Array.type(System.Array.type(System.Int32)), "sn": "requireData" }] }; }, $n);
    /*LevelData2 end.*/

    /*LevelData start.*/
    $m("LevelData", function() { return { "att": 1056769, "a": 2, "at": [new System.SerializableAttribute()], "m": [{ "a": 2, "n": ".ctor", "t": 1, "p": [$n[0].Int32], "pi": [{ "n": "length", "pt": $n[0].Int32, "ps": 0 }], "sn": "ctor" }, { "a": 2, "n": "data", "t": 4, "rt": System.Array.type(Data), "sn": "data" }, { "a": 2, "n": "requireData", "t": 4, "rt": System.Array.type(Data), "sn": "requireData" }] }; }, $n);
    /*LevelData end.*/

    /*Data start.*/
    $m("Data", function() { return { "att": 1056769, "a": 2, "at": [new System.SerializableAttribute()], "m": [{ "a": 2, "isSynthetic": true, "n": ".ctor", "t": 1, "sn": "ctor" }, { "a": 2, "n": "Item", "t": 16, "rt": $n[0].Int32, "p": [$n[0].Int32], "i": true, "ipi": [{ "n": "index", "pt": $n[0].Int32, "ps": 0 }], "g": { "a": 2, "n": "get_Item", "t": 8, "pi": [{ "n": "index", "pt": $n[0].Int32, "ps": 0 }], "sn": "getItem", "rt": $n[0].Int32, "p": [$n[0].Int32], "box": function($v) { return Bridge.box($v, System.Int32); } }, "s": { "a": 2, "n": "set_Item", "t": 8, "pi": [{ "n": "index", "pt": $n[0].Int32, "ps": 0 }, { "n": "value", "pt": $n[0].Int32, "ps": 1 }], "sn": "setItem", "rt": $n[0].Void, "p": [$n[0].Int32, $n[0].Int32] } }, { "a": 2, "n": "_items", "t": 4, "rt": $n[0].Array.type(System.Int32), "sn": "_items" }] }; }, $n);
    /*Data end.*/

    /*LevelManager start.*/
    $m("LevelManager", function() { return { "att": 1048577, "a": 2, "m": [{ "a": 2, "isSynthetic": true, "n": ".ctor", "t": 1, "sn": "ctor" }, { "a": 2, "n": "AddTube", "t": 8, "sn": "AddTube", "rt": $n[0].Void }, { "a": 1, "n": "Awake", "t": 8, "sn": "Awake", "rt": $n[0].Void }, { "a": 2, "n": "BackStep", "t": 8, "sn": "BackStep", "rt": $n[0].Void }, { "a": 2, "n": "CacheAllTube", "t": 8, "pi": [{ "n": "id", "pt": $n[0].Int32, "ps": 0 }, { "n": "step", "pt": $n[0].Int32, "ps": 1 }, { "n": "tub", "pt": Tube, "ps": 2 }], "sn": "CacheAllTube", "rt": $n[0].Void, "p": [$n[0].Int32, $n[0].Int32, Tube] }, { "a": 2, "n": "CheckWin", "t": 8, "pi": [{ "n": "tube", "pt": Tube, "ps": 0 }], "sn": "CheckWin", "rt": $n[0].Boolean, "p": [Tube], "box": function($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString); } }, { "a": 2, "n": "ClickBackStep", "t": 8, "sn": "ClickBackStep", "rt": $n[0].Void }, { "a": 2, "n": "LoadLevel", "t": 8, "pi": [{ "n": "lvID", "pt": $n[0].Int32, "ps": 0 }], "sn": "LoadLevel", "rt": $n[0].Void, "p": [$n[0].Int32] }, { "a": 1, "n": "LoadLevelData", "t": 8, "pi": [{ "n": "lvID", "pt": $n[0].Int32, "ps": 0 }], "sn": "LoadLevelData", "rt": $n[0].Void, "p": [$n[0].Int32] }, { "a": 2, "n": "OnStartGame", "t": 8, "sn": "OnStartGame", "rt": $n[0].Void }, { "a": 2, "n": "SetPositionTubeAdd", "t": 8, "pi": [{ "n": "tub", "pt": Tube, "ps": 0 }, { "n": "i", "pt": $n[0].Int32, "ps": 1 }], "sn": "SetPositionTubeAdd", "rt": $n[0].Void, "p": [Tube, $n[0].Int32] }, { "a": 1, "n": "Update", "t": 8, "sn": "Update", "rt": $n[0].Void }, { "a": 2, "n": "checkLastTubeInData", "t": 8, "sn": "checkLastTubeInData", "rt": $n[0].Void }, { "a": 2, "n": "Instance", "is": true, "t": 4, "rt": LevelManager, "sn": "Instance" }, { "a": 2, "n": "LevelText", "t": 4, "rt": $n[4].Text, "sn": "LevelText" }, { "a": 1, "n": "StepCount", "t": 4, "rt": $n[0].Int32, "sn": "StepCount", "box": function($v) { return Bridge.box($v, System.Int32); } }, { "a": 2, "n": "TubeColors", "t": 4, "rt": $n[2].List$1(UnityEngine.Color), "sn": "TubeColors" }, { "a": 2, "n": "TubeTexture", "t": 4, "rt": $n[2].List$1(UnityEngine.Texture2D), "sn": "TubeTexture" }, { "a": 1, "n": "colorCount", "t": 4, "rt": $n[0].Int32, "sn": "colorCount", "box": function($v) { return Bridge.box($v, System.Int32); } }, { "a": 1, "n": "complete", "t": 4, "rt": $n[2].List$1(System.String), "sn": "complete" }, { "a": 1, "n": "completeTube", "t": 4, "rt": $n[0].Int32, "sn": "completeTube", "box": function($v) { return Bridge.box($v, System.Int32); } }, { "a": 1, "n": "currentColor", "t": 4, "rt": $n[0].Array.type(System.Int32), "sn": "currentColor" }, { "a": 1, "n": "delayStep", "t": 4, "rt": $n[0].Single, "sn": "delayStep", "box": function($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode); } }, { "a": 2, "n": "direct", "t": 4, "rt": $n[0].Int32, "sn": "direct", "box": function($v) { return Bridge.box($v, System.Int32); } }, { "a": 2, "n": "isAddTube", "t": 4, "rt": $n[0].Boolean, "sn": "isAddTube", "box": function($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString); } }, { "a": 2, "n": "isMove", "t": 4, "rt": $n[0].Boolean, "sn": "isMove", "box": function($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString); } }, { "a": 2, "n": "layerMask", "t": 4, "rt": $n[1].LayerMask, "sn": "layerMask" }, { "a": 2, "n": "leveData", "t": 4, "rt": LevelData, "sn": "leveData" }, { "a": 1, "n": "level2Steps", "t": 4, "rt": $n[0].Int32, "sn": "level2Steps", "box": function($v) { return Bridge.box($v, System.Int32); } }, { "a": 1, "n": "mDicTubeColor", "t": 4, "rt": $n[2].Dictionary$2(System.String, System.Int32), "sn": "mDicTubeColor" }, { "a": 1, "n": "posTapFollow", "t": 4, "rt": $n[1].Vector3, "sn": "posTapFollow" }, { "a": 1, "n": "require", "t": 4, "rt": System.Array.type(Data), "sn": "require" }, { "a": 2, "n": "selectTube", "t": 4, "rt": Tube, "sn": "selectTube" }, { "a": 2, "n": "stepBack", "t": 4, "rt": $n[4].Text, "sn": "stepBack" }, { "a": 2, "n": "tapObj", "t": 4, "rt": $n[1].GameObject, "sn": "tapObj" }, { "a": 2, "n": "tubePrefabs", "t": 4, "rt": System.Array.type(Tube), "sn": "tubePrefabs" }, { "a": 1, "n": "tubeRequire", "t": 4, "rt": $n[0].Int32, "sn": "tubeRequire", "box": function($v) { return Bridge.box($v, System.Int32); } }, { "a": 2, "n": "tubes", "t": 4, "rt": $n[2].List$1(Tube), "sn": "tubes" }, { "a": 1, "n": "up", "t": 4, "rt": $n[0].Single, "sn": "up", "box": function($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode); } }] }; }, $n);
    /*LevelManager end.*/

    /*Tube start.*/
    $m("Tube", function() { return { "att": 1048577, "a": 2, "m": [{ "a": 2, "isSynthetic": true, "n": ".ctor", "t": 1, "sn": "ctor" }, { "a": 1, "n": "Awake", "t": 8, "sn": "Awake", "rt": $n[0].Void }, { "a": 2, "n": "CheckComplete", "t": 8, "pi": [{ "n": "require", "pt": $n[0].Array.type(System.Int32), "ps": 0 }], "sn": "CheckComplete", "rt": $n[0].Boolean, "p": [$n[0].Array.type(System.Int32)], "box": function($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString); } }, { "a": 2, "n": "CheckFill", "t": 8, "pi": [{ "n": "tube1", "pt": Tube, "ps": 0 }], "sn": "CheckFill", "rt": $n[0].Boolean, "p": [Tube], "box": function($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString); } }, { "a": 2, "n": "GetFillCount", "t": 8, "pi": [{ "n": "index", "out": true, "pt": $n[0].Int32, "ps": 0 }, { "n": "count", "out": true, "pt": $n[0].Int32, "ps": 1 }], "sn": "GetFillCount", "rt": $n[0].Void, "p": [$n[0].Int32, $n[0].Int32] }, { "a": 2, "n": "GetLastItem", "t": 8, "sn": "GetLastItem", "rt": $n[0].Int32, "box": function($v) { return Bridge.box($v, System.Int32); } }, { "a": 2, "n": "GetLength", "t": 8, "sn": "GetLength", "rt": $n[0].Int32, "box": function($v) { return Bridge.box($v, System.Int32); } }, { "a": 2, "n": "Init", "t": 8, "pi": [{ "n": "col", "dv": true, "o": true, "pt": $n[0].Boolean, "ps": 0 }], "sn": "Init", "rt": $n[0].Void, "p": [$n[0].Boolean] }, { "a": 2, "n": "IsNone", "t": 8, "sn": "IsNone", "rt": $n[0].Boolean, "box": function($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString); } }, { "a": 2, "n": "SendColor", "t": 8, "pi": [{ "n": "tube1", "pt": Tube, "ps": 0 }], "sn": "SendColor", "rt": $n[0].Void, "p": [Tube] }, { "a": 2, "n": "SetFxDir", "t": 8, "pi": [{ "n": "dir", "pt": $n[0].Int32, "ps": 0 }], "sn": "SetFxDir", "rt": $n[0].Void, "p": [$n[0].Int32] }, { "a": 2, "n": "SetReComplete", "t": 8, "pi": [{ "n": "id", "pt": $n[0].Int32, "ps": 0 }], "sn": "SetReComplete", "rt": $n[0].Void, "p": [$n[0].Int32] }, { "a": 2, "n": "SetShadowDown", "t": 8, "sn": "SetShadowDown", "rt": $n[0].Void }, { "a": 2, "n": "SetShadowUp", "t": 8, "sn": "SetShadowUp", "rt": $n[0].Void }, { "a": 2, "n": "ShowFxComplete", "t": 8, "sn": "ShowFxComplete", "rt": $n[0].Void }, { "a": 2, "n": "UpdateTube", "t": 8, "pi": [{ "n": "len", "pt": $n[0].Int32, "ps": 0 }, { "n": "update", "dv": false, "o": true, "pt": $n[0].Boolean, "ps": 1 }], "sn": "UpdateTube", "rt": $n[0].Void, "p": [$n[0].Int32, $n[0].Boolean] }, { "a": 1, "n": "_time", "t": 8, "pi": [{ "n": "i", "pt": $n[0].Int32, "ps": 0 }], "sn": "_time", "rt": $n[5].IEnumerator, "p": [$n[0].Int32] }, { "a": 1, "n": "allMesh", "t": 4, "rt": System.Array.type(UnityEngine.MeshRenderer), "sn": "allMesh" }, { "a": 2, "n": "celeb", "t": 4, "rt": $n[0].Boolean, "sn": "celeb", "box": function($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString); } }, { "at": [new UnityEngine.HideInInspector()], "a": 2, "n": "fill", "t": 4, "rt": System.Array.type(UnityEngine.SpriteRenderer), "sn": "fill" }, { "a": 2, "n": "fillSendCount", "t": 4, "rt": $n[0].Int32, "sn": "fillSendCount", "box": function($v) { return Bridge.box($v, System.Int32); } }, { "a": 2, "n": "fx", "t": 4, "rt": $n[1].ParticleSystem, "sn": "fx" }, { "a": 2, "n": "fxComplete", "t": 4, "rt": $n[1].ParticleSystem, "sn": "fxComplete" }, { "a": 1, "n": "grassFake", "t": 4, "rt": $n[1].MeshRenderer, "sn": "grassFake" }, { "a": 1, "n": "grassFill", "t": 4, "rt": $n[1].MeshRenderer, "sn": "grassFill" }, { "a": 2, "n": "idTube", "t": 4, "rt": $n[0].Int32, "sn": "idTube", "box": function($v) { return Bridge.box($v, System.Int32); } }, { "a": 2, "n": "isReq", "t": 4, "rt": $n[0].Boolean, "sn": "isReq", "box": function($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString); } }, { "a": 2, "n": "iscomplete", "t": 4, "rt": $n[0].Boolean, "sn": "iscomplete", "box": function($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString); } }, { "a": 2, "n": "shadow", "t": 4, "rt": $n[1].GameObject, "sn": "shadow" }, { "a": 2, "n": "tick", "t": 4, "rt": Decorate, "sn": "tick" }, { "a": 2, "n": "tube", "t": 4, "rt": $n[1].GameObject, "sn": "tube" }, { "a": 2, "n": "tube2", "t": 4, "rt": $n[1].GameObject, "sn": "tube2" }, { "at": [new UnityEngine.HideInInspector()], "a": 2, "n": "tubeColors", "t": 4, "rt": $n[0].Array.type(System.Int32), "sn": "tubeColors" }] }; }, $n);
    /*Tube end.*/

    /*MainMenu start.*/
    $m("MainMenu", function() { return { "att": 1048577, "a": 2, "m": [{ "a": 2, "isSynthetic": true, "n": ".ctor", "t": 1, "sn": "ctor" }, { "a": 1, "n": "Awake", "t": 8, "sn": "Awake", "rt": $n[0].Void }, { "a": 2, "n": "OnClickAddTube", "t": 8, "sn": "OnClickAddTube", "rt": $n[0].Void }, { "a": 2, "n": "OnClickClosesMenu", "t": 8, "sn": "OnClickClosesMenu", "rt": $n[0].Void }, { "a": 2, "n": "OnClickInvite", "t": 8, "sn": "OnClickInvite", "rt": $n[0].Void }, { "a": 2, "n": "OnClickMenu", "t": 8, "sn": "OnClickMenu", "rt": $n[0].Void }, { "a": 2, "n": "OnClickNextLevel", "t": 8, "sn": "OnClickNextLevel", "rt": $n[0].Void }, { "a": 2, "n": "OnClickShare", "t": 8, "sn": "OnClickShare", "rt": $n[0].Void }, { "a": 2, "n": "OnClickUndo", "t": 8, "sn": "OnClickUndo", "rt": $n[0].Void }, { "a": 2, "n": "RestartLevel", "t": 8, "sn": "RestartLevel", "rt": $n[0].Void }, { "a": 2, "n": "ShowWin", "t": 8, "sn": "ShowWin", "rt": $n[0].Void }, { "a": 1, "n": "Start", "t": 8, "sn": "Start", "rt": $n[0].Void }, { "a": 2, "n": "hiddenLoadingGame", "t": 8, "sn": "hiddenLoadingGame", "rt": $n[0].Void }, { "a": 2, "n": "Instance", "is": true, "t": 4, "rt": MainMenu, "sn": "Instance" }, { "a": 2, "n": "btnAddTube", "t": 4, "rt": $n[4].Button, "sn": "btnAddTube" }, { "a": 2, "n": "btnCloseMenu", "t": 4, "rt": $n[4].Button, "sn": "btnCloseMenu" }, { "a": 2, "n": "btnInviteFri", "t": 4, "rt": $n[4].Button, "sn": "btnInviteFri" }, { "a": 2, "n": "btnInviteMenu", "t": 4, "rt": $n[4].Button, "sn": "btnInviteMenu" }, { "a": 2, "n": "btnMenu", "t": 4, "rt": $n[4].Button, "sn": "btnMenu" }, { "a": 2, "n": "btnRestart", "t": 4, "rt": $n[4].Button, "sn": "btnRestart" }, { "a": 2, "n": "btnShareGame", "t": 4, "rt": $n[4].Button, "sn": "btnShareGame" }, { "a": 2, "n": "btnShareMenu", "t": 4, "rt": $n[4].Button, "sn": "btnShareMenu" }, { "a": 2, "n": "btnUndo", "t": 4, "rt": $n[4].Button, "sn": "btnUndo" }, { "a": 2, "n": "gotoStore", "t": 4, "rt": $n[4].Button, "sn": "gotoStore" }, { "a": 2, "n": "isPopupOpen", "t": 4, "rt": $n[0].Boolean, "sn": "isPopupOpen", "box": function($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString); } }, { "a": 2, "n": "menuObj", "t": 4, "rt": $n[1].GameObject, "sn": "menuObj" }, { "a": 2, "n": "popupLoadingGame", "t": 4, "rt": $n[1].GameObject, "sn": "popupLoadingGame" }, { "a": 2, "n": "txtLvPopupWin", "t": 4, "rt": $n[4].Text, "sn": "txtLvPopupWin" }, { "a": 2, "n": "winObjV", "t": 4, "rt": $n[1].GameObject, "sn": "winObjV" }] }; }, $n);
    /*MainMenu end.*/

    /*MenuButtonManager start.*/
    $m("MenuButtonManager", function() { return { "att": 1048577, "a": 2, "m": [{ "a": 2, "isSynthetic": true, "n": ".ctor", "t": 1, "sn": "ctor" }, { "a": 1, "n": "OnClickButtonSound", "t": 8, "sn": "OnClickButtonSound", "rt": $n[0].Void }, { "a": 1, "n": "OnClickMusic", "t": 8, "sn": "OnClickMusic", "rt": $n[0].Void }, { "a": 1, "n": "OnClickNoADS", "t": 8, "sn": "OnClickNoADS", "rt": $n[0].Void }, { "a": 1, "n": "OnClickRate", "t": 8, "sn": "OnClickRate", "rt": $n[0].Void }, { "a": 1, "n": "OnDisable", "t": 8, "sn": "OnDisable", "rt": $n[0].Void }, { "a": 1, "n": "Start", "t": 8, "sn": "Start", "rt": $n[0].Void }, { "a": 2, "n": "musicButton", "t": 4, "rt": ChangeImage, "sn": "musicButton" }, { "a": 2, "n": "noADSButton", "t": 4, "rt": ChangeImage, "sn": "noADSButton" }, { "a": 2, "n": "rateButton", "t": 4, "rt": ChangeImage, "sn": "rateButton" }, { "a": 2, "n": "soundButton", "t": 4, "rt": ChangeImage, "sn": "soundButton" }] }; }, $n);
    /*MenuButtonManager end.*/

    /*MoneyFx start.*/
    $m("MoneyFx", function() { return { "att": 1048577, "a": 2, "m": [{ "a": 2, "isSynthetic": true, "n": ".ctor", "t": 1, "sn": "ctor" }, { "a": 1, "n": "OnDisable", "t": 8, "sn": "OnDisable", "rt": $n[0].Void }, { "a": 2, "n": "PlayFx", "t": 8, "sn": "PlayFx", "rt": $n[0].Void }, { "a": 2, "n": "PlayFx2", "t": 8, "sn": "PlayFx2", "rt": $n[0].Void }, { "a": 1, "n": "ResetFx", "t": 8, "sn": "ResetFx", "rt": $n[0].Void }, { "a": 1, "n": "Start", "t": 8, "sn": "Start", "rt": $n[0].Void }, { "a": 1, "n": "Update", "t": 8, "sn": "Update", "rt": $n[0].Void }, { "a": 2, "n": "endPos", "t": 4, "rt": $n[1].Transform, "sn": "endPos" }, { "a": 1, "n": "firstPos", "t": 4, "rt": $n[1].Vector3, "sn": "firstPos" }, { "a": 2, "n": "maxDistance", "t": 4, "rt": $n[0].Single, "sn": "maxDistance", "box": function($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode); } }, { "a": 2, "n": "moneyText", "t": 4, "rt": $n[4].Text, "sn": "moneyText" }, { "a": 2, "n": "moneyTextRw", "t": 4, "rt": $n[4].Text, "sn": "moneyTextRw" }, { "a": 2, "n": "moveTime", "t": 4, "rt": $n[0].Single, "sn": "moveTime", "box": function($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode); } }] }; }, $n);
    /*MoneyFx end.*/

    /*SoundManager start.*/
    $m("SoundManager", function() { return { "att": 1048577, "a": 2, "m": [{ "a": 2, "isSynthetic": true, "n": ".ctor", "t": 1, "sn": "ctor" }, { "a": 1, "n": "Awake", "t": 8, "sn": "Awake", "rt": $n[0].Void }, { "a": 2, "n": "PlayBgMusic", "t": 8, "sn": "PlayBgMusic", "rt": $n[0].Void }, { "a": 2, "n": "PlayMusic", "t": 8, "sn": "PlayMusic", "rt": $n[0].Void }, { "a": 2, "n": "PlayOneShot", "t": 8, "pi": [{ "n": "key", "pt": $n[0].String, "ps": 0 }], "sn": "PlayOneShot", "rt": $n[0].Void, "p": [$n[0].String] }, { "a": 1, "n": "Start", "t": 8, "sn": "Start", "rt": $n[0].Void }, { "a": 2, "n": "StopAllSound", "t": 8, "sn": "StopAllSound", "rt": $n[0].Void }, { "a": 2, "n": "StopAudio", "t": 8, "sn": "StopAudio", "rt": $n[0].Void }, { "a": 2, "n": "StopBgMusic", "t": 8, "sn": "StopBgMusic", "rt": $n[0].Void }, { "a": 2, "n": "StopSound", "t": 8, "sn": "StopSound", "rt": $n[0].Void }, { "a": 2, "n": "Instance", "is": true, "t": 4, "rt": SoundManager, "sn": "Instance" }, { "a": 1, "n": "allCips", "t": 4, "rt": $n[2].Dictionary$2(System.String, UnityEngine.AudioClip), "sn": "allCips" }, { "a": 2, "n": "audioSource", "t": 4, "rt": $n[1].AudioSource, "sn": "audioSource" }, { "a": 2, "n": "clips", "t": 4, "rt": System.Array.type(UnityEngine.AudioClip), "sn": "clips" }, { "a": 2, "n": "soundSource", "t": 4, "rt": $n[1].AudioSource, "sn": "soundSource" }] }; }, $n);
    /*SoundManager end.*/

    /*GameRes start.*/
    $m("GameRes", function() { return { "nested": [Function, Function], "att": 1048577, "a": 2, "m": [{ "a": 2, "isSynthetic": true, "n": ".ctor", "t": 1, "sn": "ctor" }, { "a": 2, "n": "initData", "is": true, "t": 8, "sn": "initData", "rt": $n[0].Void }, { "a": 2, "n": "loadAllData", "is": true, "t": 8, "pi": [{ "n": "arrKey", "pt": $n[0].Array.type(System.String), "ps": 0 }, { "n": "arrVal", "pt": $n[0].Array.type(System.Object), "ps": 1 }, { "n": "cb", "pt": Function, "ps": 2 }, { "n": "cbFailed", "pt": Function, "ps": 3 }], "sn": "loadAllData", "rt": $n[0].Void, "p": [$n[0].Array.type(System.String), $n[0].Array.type(System.Object), Function, Function] }, { "a": 2, "n": "loadDataOk", "is": true, "t": 8, "sn": "loadDataOk", "rt": $n[0].Void }, { "a": 2, "n": "saveDataByKeys", "is": true, "t": 8, "pi": [{ "n": "arrKey", "pt": $n[0].Array.type(System.String), "ps": 0 }], "sn": "saveDataByKeys", "rt": $n[0].Void, "p": [$n[0].Array.type(System.String)] }, { "a": 2, "n": "setLevel", "is": true, "t": 8, "pi": [{ "n": "value", "pt": $n[0].Int32, "ps": 0 }], "sn": "setLevel", "rt": $n[0].Void, "p": [$n[0].Int32] }, { "a": 2, "n": "BackStep", "is": true, "t": 16, "rt": $n[0].Int32, "g": { "a": 2, "n": "get_BackStep", "t": 8, "rt": $n[0].Int32, "fg": "BackStep", "is": true, "box": function($v) { return Bridge.box($v, System.Int32); } }, "s": { "a": 2, "n": "set_BackStep", "t": 8, "p": [$n[0].Int32], "rt": $n[0].Void, "fs": "BackStep", "is": true }, "fn": "BackStep" }, { "a": 2, "n": "CurrentTubeId", "is": true, "t": 16, "rt": $n[0].Int32, "g": { "a": 2, "n": "get_CurrentTubeId", "t": 8, "rt": $n[0].Int32, "fg": "CurrentTubeId", "is": true, "box": function($v) { return Bridge.box($v, System.Int32); } }, "s": { "a": 2, "n": "set_CurrentTubeId", "t": 8, "p": [$n[0].Int32], "rt": $n[0].Void, "fs": "CurrentTubeId", "is": true }, "fn": "CurrentTubeId" }, { "a": 2, "n": "Level", "is": true, "t": 16, "rt": $n[0].Int32, "g": { "a": 2, "n": "get_Level", "t": 8, "rt": $n[0].Int32, "fg": "Level", "is": true, "box": function($v) { return Bridge.box($v, System.Int32); } }, "s": { "a": 2, "n": "set_Level", "t": 8, "p": [$n[0].Int32], "rt": $n[0].Void, "fs": "Level", "is": true }, "fn": "Level" }, { "a": 2, "n": "MusicOn", "is": true, "t": 16, "rt": $n[0].Boolean, "g": { "a": 2, "n": "get_MusicOn", "t": 8, "rt": $n[0].Boolean, "fg": "MusicOn", "is": true, "box": function($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString); } }, "s": { "a": 2, "n": "set_MusicOn", "t": 8, "p": [$n[0].Boolean], "rt": $n[0].Void, "fs": "MusicOn", "is": true }, "fn": "MusicOn" }, { "a": 2, "n": "SoundOn", "is": true, "t": 16, "rt": $n[0].Boolean, "g": { "a": 2, "n": "get_SoundOn", "t": 8, "rt": $n[0].Boolean, "fg": "SoundOn", "is": true, "box": function($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString); } }, "s": { "a": 2, "n": "set_SoundOn", "t": 8, "p": [$n[0].Boolean], "rt": $n[0].Void, "fs": "SoundOn", "is": true }, "fn": "SoundOn" }, { "a": 2, "n": "KEY_BACK_STEP", "is": true, "t": 4, "rt": $n[0].String, "sn": "KEY_BACK_STEP" }, { "a": 2, "n": "KEY_CURR_LEVEL", "is": true, "t": 4, "rt": $n[0].String, "sn": "KEY_CURR_LEVEL" }, { "a": 2, "n": "KEY_CURR_TUBE_ID", "is": true, "t": 4, "rt": $n[0].String, "sn": "KEY_CURR_TUBE_ID" }, { "a": 2, "n": "KEY_MUSIC_ON", "is": true, "t": 4, "rt": $n[0].String, "sn": "KEY_MUSIC_ON" }, { "a": 2, "n": "KEY_SOUND_ON", "is": true, "t": 4, "rt": $n[0].String, "sn": "KEY_SOUND_ON" }, { "a": 1, "n": "__Property__Initializer__BackStep", "is": true, "t": 4, "rt": $n[0].Int32, "sn": "__Property__Initializer__BackStep", "box": function($v) { return Bridge.box($v, System.Int32); } }, { "a": 1, "n": "__Property__Initializer__CurrentTubeId", "is": true, "t": 4, "rt": $n[0].Int32, "sn": "__Property__Initializer__CurrentTubeId", "box": function($v) { return Bridge.box($v, System.Int32); } }, { "a": 1, "n": "_level", "is": true, "t": 4, "rt": $n[0].Int32, "sn": "_level", "box": function($v) { return Bridge.box($v, System.Int32); } }, { "a": 1, "n": "_musicOn", "is": true, "t": 4, "rt": $n[0].Boolean, "sn": "_musicOn", "box": function($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString); } }, { "a": 1, "n": "_soundOn", "is": true, "t": 4, "rt": $n[0].Boolean, "sn": "_soundOn", "box": function($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString); } }, { "a": 1, "n": "mDictionaryData", "is": true, "t": 4, "rt": $n[2].Dictionary$2(System.String, System.Object), "sn": "mDictionaryData" }, { "a": 1, "backing": true, "n": "<BackStep>k__BackingField", "is": true, "t": 4, "rt": $n[0].Int32, "sn": "BackStep", "box": function($v) { return Bridge.box($v, System.Int32); } }, { "a": 1, "backing": true, "n": "<CurrentTubeId>k__BackingField", "is": true, "t": 4, "rt": $n[0].Int32, "sn": "CurrentTubeId", "box": function($v) { return Bridge.box($v, System.Int32); } }] }; }, $n);
    /*GameRes end.*/

    /*IAmAnEmptyScriptJustToMakeCodelessProjectsCompileProperty start.*/
    $m("IAmAnEmptyScriptJustToMakeCodelessProjectsCompileProperty", function() { return { "att": 1048577, "a": 2, "m": [{ "a": 2, "isSynthetic": true, "n": ".ctor", "t": 1, "sn": "ctor" }] }; }, $n);
    /*IAmAnEmptyScriptJustToMakeCodelessProjectsCompileProperty end.*/

    /*System.IO.FileAccess start.*/
    $m("System.IO.FileAccess", function() { return { "att": 1048577, "a": 2, "m": [{ "a": 2, "isSynthetic": true, "n": ".ctor", "t": 1, "sn": "ctor" }] }; }, $n);
    /*System.IO.FileAccess end.*/

    /*FacebookPlatformServiceClient.FacebookNamedPipeClient start.*/
    $m("FacebookPlatformServiceClient.FacebookNamedPipeClient", function() { return { "att": 1048577, "a": 2, "m": [{ "a": 2, "isSynthetic": true, "n": ".ctor", "t": 1, "sn": "ctor" }] }; }, $n);
    /*FacebookPlatformServiceClient.FacebookNamedPipeClient end.*/

    /*FacebookGames.AppRequestRequest start.*/
    $m("FacebookGames.AppRequestRequest", function() { return { "att": 1048577, "a": 2, "m": [{ "a": 2, "n": ".ctor", "t": 1, "sn": "ctor" }, { "a": 2, "n": ".ctor", "t": 1, "p": [$n[0].String, $n[0].String, $n[0].String, $n[0].String, $n[0].String, $n[0].String, $n[0].String, $n[0].String, $n[0].String, $n[0].String], "pi": [{ "n": "appId", "pt": $n[0].String, "ps": 0 }, { "n": "message", "pt": $n[0].String, "ps": 1 }, { "n": "actionType", "pt": $n[0].String, "ps": 2 }, { "n": "objectId", "pt": $n[0].String, "ps": 3 }, { "n": "to", "pt": $n[0].String, "ps": 4 }, { "n": "filters", "pt": $n[0].String, "ps": 5 }, { "n": "excludeIDs", "pt": $n[0].String, "ps": 6 }, { "n": "maxRecipients", "pt": $n[0].String, "ps": 7 }, { "n": "data", "pt": $n[0].String, "ps": 8 }, { "n": "title", "pt": $n[0].String, "ps": 9 }], "sn": "$ctor1" }, { "a": 2, "n": "ActionType", "t": 16, "rt": $n[0].String, "g": { "a": 2, "n": "get_ActionType", "t": 8, "rt": $n[0].String, "fg": "ActionType" }, "s": { "a": 2, "n": "set_ActionType", "t": 8, "p": [$n[0].String], "rt": $n[0].Void, "fs": "ActionType" }, "fn": "ActionType" }, { "a": 2, "n": "Data", "t": 16, "rt": $n[0].String, "g": { "a": 2, "n": "get_Data", "t": 8, "rt": $n[0].String, "fg": "Data" }, "s": { "a": 2, "n": "set_Data", "t": 8, "p": [$n[0].String], "rt": $n[0].Void, "fs": "Data" }, "fn": "Data" }, { "a": 2, "n": "ExcludeIDs", "t": 16, "rt": $n[0].String, "g": { "a": 2, "n": "get_ExcludeIDs", "t": 8, "rt": $n[0].String, "fg": "ExcludeIDs" }, "s": { "a": 2, "n": "set_ExcludeIDs", "t": 8, "p": [$n[0].String], "rt": $n[0].Void, "fs": "ExcludeIDs" }, "fn": "ExcludeIDs" }, { "a": 2, "n": "Filters", "t": 16, "rt": $n[0].String, "g": { "a": 2, "n": "get_Filters", "t": 8, "rt": $n[0].String, "fg": "Filters" }, "s": { "a": 2, "n": "set_Filters", "t": 8, "p": [$n[0].String], "rt": $n[0].Void, "fs": "Filters" }, "fn": "Filters" }, { "a": 2, "n": "MaxRecipients", "t": 16, "rt": $n[0].String, "g": { "a": 2, "n": "get_MaxRecipients", "t": 8, "rt": $n[0].String, "fg": "MaxRecipients" }, "s": { "a": 2, "n": "set_MaxRecipients", "t": 8, "p": [$n[0].String], "rt": $n[0].Void, "fs": "MaxRecipients" }, "fn": "MaxRecipients" }, { "a": 2, "n": "Message", "t": 16, "rt": $n[0].String, "g": { "a": 2, "n": "get_Message", "t": 8, "rt": $n[0].String, "fg": "Message" }, "s": { "a": 2, "n": "set_Message", "t": 8, "p": [$n[0].String], "rt": $n[0].Void, "fs": "Message" }, "fn": "Message" }, { "a": 2, "n": "ObjectId", "t": 16, "rt": $n[0].String, "g": { "a": 2, "n": "get_ObjectId", "t": 8, "rt": $n[0].String, "fg": "ObjectId" }, "s": { "a": 2, "n": "set_ObjectId", "t": 8, "p": [$n[0].String], "rt": $n[0].Void, "fs": "ObjectId" }, "fn": "ObjectId" }, { "a": 2, "n": "Title", "t": 16, "rt": $n[0].String, "g": { "a": 2, "n": "get_Title", "t": 8, "rt": $n[0].String, "fg": "Title" }, "s": { "a": 2, "n": "set_Title", "t": 8, "p": [$n[0].String], "rt": $n[0].Void, "fs": "Title" }, "fn": "Title" }, { "a": 2, "n": "To", "t": 16, "rt": $n[0].String, "g": { "a": 2, "n": "get_To", "t": 8, "rt": $n[0].String, "fg": "To" }, "s": { "a": 2, "n": "set_To", "t": 8, "p": [$n[0].String], "rt": $n[0].Void, "fs": "To" }, "fn": "To" }, { "a": 1, "backing": true, "n": "<ActionType>k__BackingField", "t": 4, "rt": $n[0].String, "sn": "ActionType" }, { "a": 1, "backing": true, "n": "<Data>k__BackingField", "t": 4, "rt": $n[0].String, "sn": "Data" }, { "a": 1, "backing": true, "n": "<ExcludeIDs>k__BackingField", "t": 4, "rt": $n[0].String, "sn": "ExcludeIDs" }, { "a": 1, "backing": true, "n": "<Filters>k__BackingField", "t": 4, "rt": $n[0].String, "sn": "Filters" }, { "a": 1, "backing": true, "n": "<MaxRecipients>k__BackingField", "t": 4, "rt": $n[0].String, "sn": "MaxRecipients" }, { "a": 1, "backing": true, "n": "<Message>k__BackingField", "t": 4, "rt": $n[0].String, "sn": "Message" }, { "a": 1, "backing": true, "n": "<ObjectId>k__BackingField", "t": 4, "rt": $n[0].String, "sn": "ObjectId" }, { "a": 1, "backing": true, "n": "<Title>k__BackingField", "t": 4, "rt": $n[0].String, "sn": "Title" }, { "a": 1, "backing": true, "n": "<To>k__BackingField", "t": 4, "rt": $n[0].String, "sn": "To" }] }; }, $n);
    /*FacebookGames.AppRequestRequest end.*/

    /*FacebookGames.AppRequestResponse start.*/
    $m("FacebookGames.AppRequestResponse", function() { return { "att": 1048577, "a": 2, "m": [{ "a": 2, "n": ".ctor", "t": 1, "sn": "ctor" }, { "a": 2, "n": ".ctor", "t": 1, "p": [$n[0].String, $n[0].String, $n[0].String, $n[0].Boolean], "pi": [{ "n": "requestObjectId", "pt": $n[0].String, "ps": 0 }, { "n": "to", "pt": $n[0].String, "ps": 1 }, { "n": "error", "pt": $n[0].String, "ps": 2 }, { "n": "cancelled", "pt": $n[0].Boolean, "ps": 3 }], "sn": "$ctor1" }, { "ov": true, "a": 2, "n": "ToDictionary", "t": 8, "sn": "ToDictionary", "rt": $n[2].IDictionary$2(System.String, System.Object) }, { "a": 2, "n": "RequestObjectId", "t": 16, "rt": $n[0].String, "g": { "a": 2, "n": "get_RequestObjectId", "t": 8, "rt": $n[0].String, "fg": "RequestObjectId" }, "s": { "a": 2, "n": "set_RequestObjectId", "t": 8, "p": [$n[0].String], "rt": $n[0].Void, "fs": "RequestObjectId" }, "fn": "RequestObjectId" }, { "a": 2, "n": "To", "t": 16, "rt": $n[0].String, "g": { "a": 2, "n": "get_To", "t": 8, "rt": $n[0].String, "fg": "To" }, "s": { "a": 2, "n": "set_To", "t": 8, "p": [$n[0].String], "rt": $n[0].Void, "fs": "To" }, "fn": "To" }, { "a": 1, "backing": true, "n": "<RequestObjectId>k__BackingField", "t": 4, "rt": $n[0].String, "sn": "RequestObjectId" }, { "a": 1, "backing": true, "n": "<To>k__BackingField", "t": 4, "rt": $n[0].String, "sn": "To" }] }; }, $n);
    /*FacebookGames.AppRequestResponse end.*/

    /*FacebookGames.FeedShareRequest start.*/
    $m("FacebookGames.FeedShareRequest", function() { return { "att": 1048577, "a": 2, "m": [{ "a": 2, "n": ".ctor", "t": 1, "sn": "ctor" }, { "a": 2, "n": ".ctor", "t": 1, "p": [$n[0].String, $n[0].String, $n[0].String, $n[0].String, $n[0].String, $n[0].String, $n[0].String, $n[0].String], "pi": [{ "n": "appId", "pt": $n[0].String, "ps": 0 }, { "n": "toId", "pt": $n[0].String, "ps": 1 }, { "n": "link", "pt": $n[0].String, "ps": 2 }, { "n": "linkName", "pt": $n[0].String, "ps": 3 }, { "n": "linkCaption", "pt": $n[0].String, "ps": 4 }, { "n": "linkDescription", "pt": $n[0].String, "ps": 5 }, { "n": "pictureLink", "pt": $n[0].String, "ps": 6 }, { "n": "mediaSource", "pt": $n[0].String, "ps": 7 }], "sn": "$ctor1" }, { "a": 2, "n": "Link", "t": 16, "rt": $n[0].String, "g": { "a": 2, "n": "get_Link", "t": 8, "rt": $n[0].String, "fg": "Link" }, "s": { "a": 2, "n": "set_Link", "t": 8, "p": [$n[0].String], "rt": $n[0].Void, "fs": "Link" }, "fn": "Link" }, { "a": 2, "n": "LinkCaption", "t": 16, "rt": $n[0].String, "g": { "a": 2, "n": "get_LinkCaption", "t": 8, "rt": $n[0].String, "fg": "LinkCaption" }, "s": { "a": 2, "n": "set_LinkCaption", "t": 8, "p": [$n[0].String], "rt": $n[0].Void, "fs": "LinkCaption" }, "fn": "LinkCaption" }, { "a": 2, "n": "LinkDescription", "t": 16, "rt": $n[0].String, "g": { "a": 2, "n": "get_LinkDescription", "t": 8, "rt": $n[0].String, "fg": "LinkDescription" }, "s": { "a": 2, "n": "set_LinkDescription", "t": 8, "p": [$n[0].String], "rt": $n[0].Void, "fs": "LinkDescription" }, "fn": "LinkDescription" }, { "a": 2, "n": "LinkName", "t": 16, "rt": $n[0].String, "g": { "a": 2, "n": "get_LinkName", "t": 8, "rt": $n[0].String, "fg": "LinkName" }, "s": { "a": 2, "n": "set_LinkName", "t": 8, "p": [$n[0].String], "rt": $n[0].Void, "fs": "LinkName" }, "fn": "LinkName" }, { "a": 2, "n": "MediaSource", "t": 16, "rt": $n[0].String, "g": { "a": 2, "n": "get_MediaSource", "t": 8, "rt": $n[0].String, "fg": "MediaSource" }, "s": { "a": 2, "n": "set_MediaSource", "t": 8, "p": [$n[0].String], "rt": $n[0].Void, "fs": "MediaSource" }, "fn": "MediaSource" }, { "a": 2, "n": "PictureLink", "t": 16, "rt": $n[0].String, "g": { "a": 2, "n": "get_PictureLink", "t": 8, "rt": $n[0].String, "fg": "PictureLink" }, "s": { "a": 2, "n": "set_PictureLink", "t": 8, "p": [$n[0].String], "rt": $n[0].Void, "fs": "PictureLink" }, "fn": "PictureLink" }, { "a": 2, "n": "ToId", "t": 16, "rt": $n[0].String, "g": { "a": 2, "n": "get_ToId", "t": 8, "rt": $n[0].String, "fg": "ToId" }, "s": { "a": 2, "n": "set_ToId", "t": 8, "p": [$n[0].String], "rt": $n[0].Void, "fs": "ToId" }, "fn": "ToId" }, { "a": 1, "backing": true, "n": "<Link>k__BackingField", "t": 4, "rt": $n[0].String, "sn": "Link" }, { "a": 1, "backing": true, "n": "<LinkCaption>k__BackingField", "t": 4, "rt": $n[0].String, "sn": "LinkCaption" }, { "a": 1, "backing": true, "n": "<LinkDescription>k__BackingField", "t": 4, "rt": $n[0].String, "sn": "LinkDescription" }, { "a": 1, "backing": true, "n": "<LinkName>k__BackingField", "t": 4, "rt": $n[0].String, "sn": "LinkName" }, { "a": 1, "backing": true, "n": "<MediaSource>k__BackingField", "t": 4, "rt": $n[0].String, "sn": "MediaSource" }, { "a": 1, "backing": true, "n": "<PictureLink>k__BackingField", "t": 4, "rt": $n[0].String, "sn": "PictureLink" }, { "a": 1, "backing": true, "n": "<ToId>k__BackingField", "t": 4, "rt": $n[0].String, "sn": "ToId" }] }; }, $n);
    /*FacebookGames.FeedShareRequest end.*/

    /*FacebookGames.FeedShareResponse start.*/
    $m("FacebookGames.FeedShareResponse", function() { return { "att": 1048577, "a": 2, "m": [{ "a": 2, "n": ".ctor", "t": 1, "sn": "ctor" }, { "a": 2, "n": ".ctor", "t": 1, "p": [$n[0].String, $n[0].String, $n[0].Boolean], "pi": [{ "n": "postId", "pt": $n[0].String, "ps": 0 }, { "n": "error", "pt": $n[0].String, "ps": 1 }, { "n": "cancelled", "pt": $n[0].Boolean, "ps": 2 }], "sn": "$ctor1" }, { "ov": true, "a": 2, "n": "ToDictionary", "t": 8, "sn": "ToDictionary", "rt": $n[2].IDictionary$2(System.String, System.Object) }, { "a": 2, "n": "PostId", "t": 16, "rt": $n[0].String, "g": { "a": 2, "n": "get_PostId", "t": 8, "rt": $n[0].String, "fg": "PostId" }, "s": { "a": 2, "n": "set_PostId", "t": 8, "p": [$n[0].String], "rt": $n[0].Void, "fs": "PostId" }, "fn": "PostId" }, { "a": 1, "backing": true, "n": "<PostId>k__BackingField", "t": 4, "rt": $n[0].String, "sn": "PostId" }] }; }, $n);
    /*FacebookGames.FeedShareResponse end.*/

    /*FacebookGames.HasLicenseRequest start.*/
    $m("FacebookGames.HasLicenseRequest", function() { return { "att": 1048577, "a": 2, "m": [{ "a": 2, "n": ".ctor", "t": 1, "sn": "ctor" }, { "a": 2, "n": ".ctor", "t": 1, "p": [$n[0].String], "pi": [{ "n": "appId", "pt": $n[0].String, "ps": 0 }], "sn": "$ctor1" }] }; }, $n);
    /*FacebookGames.HasLicenseRequest end.*/

    /*FacebookGames.HasLicenseResponse start.*/
    $m("FacebookGames.HasLicenseResponse", function() { return { "att": 1048577, "a": 2, "m": [{ "a": 2, "n": ".ctor", "t": 1, "sn": "ctor" }, { "ov": true, "a": 2, "n": "ToDictionary", "t": 8, "sn": "ToDictionary", "rt": $n[2].IDictionary$2(System.String, System.Object) }, { "a": 2, "n": "HasLicense", "t": 16, "rt": $n[0].Boolean, "g": { "a": 2, "n": "get_HasLicense", "t": 8, "rt": $n[0].Boolean, "fg": "HasLicense", "box": function($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString); } }, "s": { "a": 2, "n": "set_HasLicense", "t": 8, "p": [$n[0].Boolean], "rt": $n[0].Void, "fs": "HasLicense" }, "fn": "HasLicense" }, { "a": 1, "backing": true, "n": "<HasLicense>k__BackingField", "t": 4, "rt": $n[0].Boolean, "sn": "HasLicense", "box": function($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString); } }] }; }, $n);
    /*FacebookGames.HasLicenseResponse end.*/

    /*FacebookGames.LoginRequest start.*/
    $m("FacebookGames.LoginRequest", function() { return { "att": 1048577, "a": 2, "m": [{ "a": 2, "n": ".ctor", "t": 1, "sn": "ctor" }, { "a": 2, "n": ".ctor", "t": 1, "p": [$n[0].String, $n[0].String], "pi": [{ "n": "appId", "pt": $n[0].String, "ps": 0 }, { "n": "permissions", "pt": $n[0].String, "ps": 1 }], "sn": "$ctor1" }, { "a": 2, "n": "Permissions", "t": 16, "rt": $n[0].String, "g": { "a": 2, "n": "get_Permissions", "t": 8, "rt": $n[0].String, "fg": "Permissions" }, "s": { "a": 2, "n": "set_Permissions", "t": 8, "p": [$n[0].String], "rt": $n[0].Void, "fs": "Permissions" }, "fn": "Permissions" }, { "a": 1, "backing": true, "n": "<Permissions>k__BackingField", "t": 4, "rt": $n[0].String, "sn": "Permissions" }] }; }, $n);
    /*FacebookGames.LoginRequest end.*/

    /*FacebookGames.LoginResponse start.*/
    $m("FacebookGames.LoginResponse", function() { return { "att": 1048577, "a": 2, "m": [{ "a": 2, "n": ".ctor", "t": 1, "sn": "ctor" }, { "a": 2, "n": ".ctor", "t": 1, "p": [$n[0].String, $n[0].String, $n[0].String, $n[0].String, $n[0].String, $n[0].Boolean], "pi": [{ "n": "userId", "pt": $n[0].String, "ps": 0 }, { "n": "accessToken", "pt": $n[0].String, "ps": 1 }, { "n": "expirationTimestamp", "pt": $n[0].String, "ps": 2 }, { "n": "permissions", "pt": $n[0].String, "ps": 3 }, { "n": "error", "pt": $n[0].String, "ps": 4 }, { "n": "cancelled", "pt": $n[0].Boolean, "ps": 5 }], "sn": "$ctor1" }, { "ov": true, "a": 2, "n": "ToDictionary", "t": 8, "sn": "ToDictionary", "rt": $n[2].IDictionary$2(System.String, System.Object) }, { "a": 2, "n": "AccessToken", "t": 16, "rt": $n[0].String, "g": { "a": 2, "n": "get_AccessToken", "t": 8, "rt": $n[0].String, "fg": "AccessToken" }, "s": { "a": 2, "n": "set_AccessToken", "t": 8, "p": [$n[0].String], "rt": $n[0].Void, "fs": "AccessToken" }, "fn": "AccessToken" }, { "a": 2, "n": "ExpirationTimestamp", "t": 16, "rt": $n[0].String, "g": { "a": 2, "n": "get_ExpirationTimestamp", "t": 8, "rt": $n[0].String, "fg": "ExpirationTimestamp" }, "s": { "a": 2, "n": "set_ExpirationTimestamp", "t": 8, "p": [$n[0].String], "rt": $n[0].Void, "fs": "ExpirationTimestamp" }, "fn": "ExpirationTimestamp" }, { "a": 2, "n": "Permissions", "t": 16, "rt": $n[0].String, "g": { "a": 2, "n": "get_Permissions", "t": 8, "rt": $n[0].String, "fg": "Permissions" }, "s": { "a": 2, "n": "set_Permissions", "t": 8, "p": [$n[0].String], "rt": $n[0].Void, "fs": "Permissions" }, "fn": "Permissions" }, { "a": 2, "n": "UserId", "t": 16, "rt": $n[0].String, "g": { "a": 2, "n": "get_UserId", "t": 8, "rt": $n[0].String, "fg": "UserId" }, "s": { "a": 2, "n": "set_UserId", "t": 8, "p": [$n[0].String], "rt": $n[0].Void, "fs": "UserId" }, "fn": "UserId" }, { "a": 1, "backing": true, "n": "<AccessToken>k__BackingField", "t": 4, "rt": $n[0].String, "sn": "AccessToken" }, { "a": 1, "backing": true, "n": "<ExpirationTimestamp>k__BackingField", "t": 4, "rt": $n[0].String, "sn": "ExpirationTimestamp" }, { "a": 1, "backing": true, "n": "<Permissions>k__BackingField", "t": 4, "rt": $n[0].String, "sn": "Permissions" }, { "a": 1, "backing": true, "n": "<UserId>k__BackingField", "t": 4, "rt": $n[0].String, "sn": "UserId" }] }; }, $n);
    /*FacebookGames.LoginResponse end.*/

    /*FacebookGames.NamedPipeStream start.*/
    $m("FacebookGames.NamedPipeStream", function() { return { "nested": [$n[6].NamedPipeStream.SECURITY_ATTRIBUTES, $n[6].NamedPipeStream.ServerMode, $n[6].NamedPipeStream.PeerType], "att": 1048577, "a": 2, "m": [{ "a": 2, "n": ".ctor", "t": 1, "p": [$n[0].IntPtr, $n[7].FileAccess], "pi": [{ "n": "handle", "pt": $n[0].IntPtr, "ps": 0 }, { "n": "mode", "pt": $n[7].FileAccess, "ps": 1 }], "sn": "ctor" }, { "a": 2, "n": ".ctor", "t": 1, "p": [$n[0].String, $n[7].FileAccess], "pi": [{ "n": "pipename", "pt": $n[0].String, "ps": 0 }, { "n": "mode", "pt": $n[7].FileAccess, "ps": 1 }], "sn": "$ctor1" }, { "ov": true, "a": 2, "n": "Close", "t": 8, "sn": "Close", "rt": $n[0].Void }, { "a": 4, "n": "ConvertStringSecurityDescriptorToSecurityDescriptor", "is": true, "t": 8, "pi": [{ "n": "StringSecurityDescriptor", "pt": $n[0].String, "ps": 0 }, { "n": "StringSDRevision", "pt": $n[0].UInt32, "ps": 1 }, { "n": "SecurityDescriptor", "ref": true, "pt": $n[0].IntPtr, "ps": 2 }, { "n": "SecurityDescriptorSize", "pt": $n[0].IntPtr, "ps": 3 }], "sn": "ConvertStringSecurityDescriptorToSecurityDescriptor", "rt": $n[0].Boolean, "p": [$n[0].String, $n[0].UInt32, $n[0].IntPtr, $n[0].IntPtr], "box": function($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString); } }, { "a": 2, "n": "Create", "is": true, "t": 8, "pi": [{ "n": "pipeName", "pt": $n[0].String, "ps": 0 }, { "n": "mode", "pt": $n[6].NamedPipeStream.ServerMode, "ps": 1 }, { "n": "lowIntegrity", "pt": $n[0].Boolean, "ps": 2 }, { "n": "maxInstances", "pt": $n[0].UInt32, "ps": 3 }, { "n": "outBufferSize", "pt": $n[0].UInt32, "ps": 4 }, { "n": "inBufferSize", "pt": $n[0].UInt32, "ps": 5 }, { "n": "timeout", "pt": $n[0].UInt32, "ps": 6 }], "sn": "Create", "rt": $n[6].NamedPipeStream, "p": [$n[0].String, $n[6].NamedPipeStream.ServerMode, $n[0].Boolean, $n[0].UInt32, $n[0].UInt32, $n[0].UInt32, $n[0].UInt32] }, { "a": 2, "n": "Disconnect", "t": 8, "sn": "Disconnect", "rt": $n[0].Void }, { "ov": true, "a": 2, "n": "Flush", "t": 8, "sn": "Flush", "rt": $n[0].Void }, { "a": 2, "n": "Listen", "t": 8, "sn": "Listen", "rt": $n[0].Boolean, "box": function($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString); } }, { "a": 2, "n": "Open", "t": 8, "pi": [{ "n": "pipename", "pt": $n[0].String, "ps": 0 }, { "n": "mode", "pt": $n[7].FileAccess, "ps": 1 }], "sn": "Open", "rt": $n[0].Void, "p": [$n[0].String, $n[7].FileAccess] }, { "ov": true, "a": 2, "n": "Read", "t": 8, "pi": [{ "n": "buffer", "pt": $n[0].Array.type(System.Byte), "ps": 0 }, { "n": "offset", "pt": $n[0].Int32, "ps": 1 }, { "n": "count", "pt": $n[0].Int32, "ps": 2 }], "sn": "Read", "rt": $n[0].Int32, "p": [$n[0].Array.type(System.Byte), $n[0].Int32, $n[0].Int32], "box": function($v) { return Bridge.box($v, System.Int32); } }, { "ov": true, "a": 2, "n": "Seek", "t": 8, "pi": [{ "n": "offset", "pt": $n[0].Int64, "ps": 0 }, { "n": "origin", "pt": $n[7].SeekOrigin, "ps": 1 }], "sn": "Seek", "rt": $n[0].Int64, "p": [$n[0].Int64, $n[7].SeekOrigin] }, { "ov": true, "a": 2, "n": "SetLength", "t": 8, "pi": [{ "n": "length", "pt": $n[0].Int64, "ps": 0 }], "sn": "SetLength", "rt": $n[0].Void, "p": [$n[0].Int64] }, { "ov": true, "a": 2, "n": "Write", "t": 8, "pi": [{ "n": "buffer", "pt": $n[0].Array.type(System.Byte), "ps": 0 }, { "n": "offset", "pt": $n[0].Int32, "ps": 1 }, { "n": "count", "pt": $n[0].Int32, "ps": 2 }], "sn": "Write", "rt": $n[0].Void, "p": [$n[0].Array.type(System.Byte), $n[0].Int32, $n[0].Int32] }, { "ov": true, "a": 2, "n": "CanRead", "t": 16, "rt": $n[0].Boolean, "g": { "ov": true, "a": 2, "n": "get_CanRead", "t": 8, "rt": $n[0].Boolean, "fg": "CanRead", "box": function($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString); } }, "fn": "CanRead" }, { "ov": true, "a": 2, "n": "CanSeek", "t": 16, "rt": $n[0].Boolean, "g": { "ov": true, "a": 2, "n": "get_CanSeek", "t": 8, "rt": $n[0].Boolean, "fg": "CanSeek", "box": function($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString); } }, "fn": "CanSeek" }, { "ov": true, "a": 2, "n": "CanWrite", "t": 16, "rt": $n[0].Boolean, "g": { "ov": true, "a": 2, "n": "get_CanWrite", "t": 8, "rt": $n[0].Boolean, "fg": "CanWrite", "box": function($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString); } }, "fn": "CanWrite" }, { "a": 2, "n": "DataAvailable", "t": 16, "rt": $n[0].Boolean, "g": { "a": 2, "n": "get_DataAvailable", "t": 8, "rt": $n[0].Boolean, "fg": "DataAvailable", "box": function($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString); } }, "fn": "DataAvailable" }, { "a": 2, "n": "IsConnected", "t": 16, "rt": $n[0].Boolean, "g": { "a": 2, "n": "get_IsConnected", "t": 8, "rt": $n[0].Boolean, "fg": "IsConnected", "box": function($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString); } }, "fn": "IsConnected" }, { "a": 2, "n": "IsMessageComplete", "t": 16, "rt": $n[0].Boolean, "g": { "a": 2, "n": "get_IsMessageComplete", "t": 8, "rt": $n[0].Boolean, "fg": "IsMessageComplete", "box": function($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString); } }, "fn": "IsMessageComplete" }, { "ov": true, "a": 2, "n": "Length", "t": 16, "rt": $n[0].Int64, "g": { "ov": true, "a": 2, "n": "get_Length", "t": 8, "rt": $n[0].Int64, "fg": "Length" }, "fn": "Length" }, { "ov": true, "a": 2, "n": "Position", "t": 16, "rt": $n[0].Int64, "g": { "ov": true, "a": 2, "n": "get_Position", "t": 8, "rt": $n[0].Int64, "fg": "Position" }, "s": { "ov": true, "a": 2, "n": "set_Position", "t": 8, "p": [$n[0].Int64], "rt": $n[0].Void, "fs": "Position" }, "fn": "Position" }, { "a": 2, "n": "WasOperationAborted", "t": 16, "rt": $n[0].Boolean, "g": { "a": 2, "n": "get_WasOperationAborted", "t": 8, "rt": $n[0].Boolean, "fg": "WasOperationAborted", "box": function($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString); } }, "fn": "WasOperationAborted" }, { "a": 1, "backing": true, "n": "<Position>k__BackingField", "t": 4, "rt": $n[0].Int64, "sn": "Position" }] }; }, $n);
    /*FacebookGames.NamedPipeStream end.*/

    /*FacebookGames.NamedPipeStream+SECURITY_ATTRIBUTES start.*/
    $m("FacebookGames.NamedPipeStream.SECURITY_ATTRIBUTES", function() { return { "td": $n[6].NamedPipeStream, "att": 1048578, "a": 2, "m": [{ "a": 2, "isSynthetic": true, "n": ".ctor", "t": 1, "sn": "ctor" }, { "a": 4, "n": "bInheritHandle", "t": 4, "rt": $n[0].Int32, "sn": "bInheritHandle", "box": function($v) { return Bridge.box($v, System.Int32); } }, { "a": 4, "n": "lpSecurityDescriptor", "t": 4, "rt": $n[0].IntPtr, "sn": "lpSecurityDescriptor" }, { "a": 4, "n": "nLength", "t": 4, "rt": $n[0].Int32, "sn": "nLength", "box": function($v) { return Bridge.box($v, System.Int32); } }] }; }, $n);
    /*FacebookGames.NamedPipeStream+SECURITY_ATTRIBUTES end.*/

    /*FacebookGames.NamedPipeStream+ServerMode start.*/
    $m("FacebookGames.NamedPipeStream.ServerMode", function() { return { "td": $n[6].NamedPipeStream, "att": 258, "a": 2, "m": [{ "a": 2, "isSynthetic": true, "n": ".ctor", "t": 1, "sn": "ctor" }, { "a": 2, "n": "Bidirectional", "is": true, "t": 4, "rt": $n[6].NamedPipeStream.ServerMode, "sn": "Bidirectional", "box": function($v) { return Bridge.box($v, FacebookGames.NamedPipeStream.ServerMode, System.Enum.toStringFn(FacebookGames.NamedPipeStream.ServerMode)); } }, { "a": 2, "n": "InboundOnly", "is": true, "t": 4, "rt": $n[6].NamedPipeStream.ServerMode, "sn": "InboundOnly", "box": function($v) { return Bridge.box($v, FacebookGames.NamedPipeStream.ServerMode, System.Enum.toStringFn(FacebookGames.NamedPipeStream.ServerMode)); } }, { "a": 2, "n": "OutboundOnly", "is": true, "t": 4, "rt": $n[6].NamedPipeStream.ServerMode, "sn": "OutboundOnly", "box": function($v) { return Bridge.box($v, FacebookGames.NamedPipeStream.ServerMode, System.Enum.toStringFn(FacebookGames.NamedPipeStream.ServerMode)); } }] }; }, $n);
    /*FacebookGames.NamedPipeStream+ServerMode end.*/

    /*FacebookGames.NamedPipeStream+PeerType start.*/
    $m("FacebookGames.NamedPipeStream.PeerType", function() { return { "td": $n[6].NamedPipeStream, "att": 258, "a": 2, "m": [{ "a": 2, "isSynthetic": true, "n": ".ctor", "t": 1, "sn": "ctor" }, { "a": 2, "n": "Client", "is": true, "t": 4, "rt": $n[6].NamedPipeStream.PeerType, "sn": "Client", "box": function($v) { return Bridge.box($v, FacebookGames.NamedPipeStream.PeerType, System.Enum.toStringFn(FacebookGames.NamedPipeStream.PeerType)); } }, { "a": 2, "n": "Server", "is": true, "t": 4, "rt": $n[6].NamedPipeStream.PeerType, "sn": "Server", "box": function($v) { return Bridge.box($v, FacebookGames.NamedPipeStream.PeerType, System.Enum.toStringFn(FacebookGames.NamedPipeStream.PeerType)); } }] }; }, $n);
    /*FacebookGames.NamedPipeStream+PeerType end.*/

    /*FacebookGames.PayPremiumRequest start.*/
    $m("FacebookGames.PayPremiumRequest", function() { return { "att": 1048577, "a": 2, "m": [{ "a": 2, "n": ".ctor", "t": 1, "sn": "ctor" }, { "a": 2, "n": ".ctor", "t": 1, "p": [$n[0].String], "pi": [{ "n": "appId", "pt": $n[0].String, "ps": 0 }], "sn": "$ctor1" }] }; }, $n);
    /*FacebookGames.PayPremiumRequest end.*/

    /*FacebookGames.PayPremiumResponse start.*/
    $m("FacebookGames.PayPremiumResponse", function() { return { "att": 1048577, "a": 2, "m": [{ "a": 2, "isSynthetic": true, "n": ".ctor", "t": 1, "sn": "ctor" }] }; }, $n);
    /*FacebookGames.PayPremiumResponse end.*/

    /*FacebookGames.PayRequest start.*/
    $m("FacebookGames.PayRequest", function() { return { "att": 1048577, "a": 2, "m": [{ "a": 2, "n": ".ctor", "t": 1, "sn": "ctor" }, { "a": 2, "n": ".ctor", "t": 1, "p": [$n[0].String, $n[0].String, $n[0].String, $n[0].String, $n[0].String, $n[0].String, $n[0].String, $n[0].String, $n[0].String, $n[0].String, $n[0].String, $n[0].String], "pi": [{ "n": "appId", "pt": $n[0].String, "ps": 0 }, { "n": "method", "pt": $n[0].String, "ps": 1 }, { "n": "action", "pt": $n[0].String, "ps": 2 }, { "n": "product", "pt": $n[0].String, "ps": 3 }, { "n": "productId", "pt": $n[0].String, "ps": 4 }, { "n": "quantity", "pt": $n[0].String, "ps": 5 }, { "n": "quantityMin", "pt": $n[0].String, "ps": 6 }, { "n": "quantityMax", "pt": $n[0].String, "ps": 7 }, { "n": "requestId", "pt": $n[0].String, "ps": 8 }, { "n": "pricepointId", "pt": $n[0].String, "ps": 9 }, { "n": "testCurrency", "pt": $n[0].String, "ps": 10 }, { "n": "developerPayload", "pt": $n[0].String, "ps": 11 }], "sn": "$ctor1" }, { "a": 2, "n": "Action", "t": 16, "rt": $n[0].String, "g": { "a": 2, "n": "get_Action", "t": 8, "rt": $n[0].String, "fg": "Action" }, "s": { "a": 2, "n": "set_Action", "t": 8, "p": [$n[0].String], "rt": $n[0].Void, "fs": "Action" }, "fn": "Action" }, { "a": 2, "n": "DeveloperPayload", "t": 16, "rt": $n[0].String, "g": { "a": 2, "n": "get_DeveloperPayload", "t": 8, "rt": $n[0].String, "fg": "DeveloperPayload" }, "s": { "a": 2, "n": "set_DeveloperPayload", "t": 8, "p": [$n[0].String], "rt": $n[0].Void, "fs": "DeveloperPayload" }, "fn": "DeveloperPayload" }, { "a": 2, "n": "Method", "t": 16, "rt": $n[0].String, "g": { "a": 2, "n": "get_Method", "t": 8, "rt": $n[0].String, "fg": "Method" }, "s": { "a": 2, "n": "set_Method", "t": 8, "p": [$n[0].String], "rt": $n[0].Void, "fs": "Method" }, "fn": "Method" }, { "a": 2, "n": "PricepointId", "t": 16, "rt": $n[0].String, "g": { "a": 2, "n": "get_PricepointId", "t": 8, "rt": $n[0].String, "fg": "PricepointId" }, "s": { "a": 2, "n": "set_PricepointId", "t": 8, "p": [$n[0].String], "rt": $n[0].Void, "fs": "PricepointId" }, "fn": "PricepointId" }, { "a": 2, "n": "Product", "t": 16, "rt": $n[0].String, "g": { "a": 2, "n": "get_Product", "t": 8, "rt": $n[0].String, "fg": "Product" }, "s": { "a": 2, "n": "set_Product", "t": 8, "p": [$n[0].String], "rt": $n[0].Void, "fs": "Product" }, "fn": "Product" }, { "a": 2, "n": "ProductId", "t": 16, "rt": $n[0].String, "g": { "a": 2, "n": "get_ProductId", "t": 8, "rt": $n[0].String, "fg": "ProductId" }, "s": { "a": 2, "n": "set_ProductId", "t": 8, "p": [$n[0].String], "rt": $n[0].Void, "fs": "ProductId" }, "fn": "ProductId" }, { "a": 2, "n": "Quantity", "t": 16, "rt": $n[0].String, "g": { "a": 2, "n": "get_Quantity", "t": 8, "rt": $n[0].String, "fg": "Quantity" }, "s": { "a": 2, "n": "set_Quantity", "t": 8, "p": [$n[0].String], "rt": $n[0].Void, "fs": "Quantity" }, "fn": "Quantity" }, { "a": 2, "n": "QuantityMax", "t": 16, "rt": $n[0].String, "g": { "a": 2, "n": "get_QuantityMax", "t": 8, "rt": $n[0].String, "fg": "QuantityMax" }, "s": { "a": 2, "n": "set_QuantityMax", "t": 8, "p": [$n[0].String], "rt": $n[0].Void, "fs": "QuantityMax" }, "fn": "QuantityMax" }, { "a": 2, "n": "QuantityMin", "t": 16, "rt": $n[0].String, "g": { "a": 2, "n": "get_QuantityMin", "t": 8, "rt": $n[0].String, "fg": "QuantityMin" }, "s": { "a": 2, "n": "set_QuantityMin", "t": 8, "p": [$n[0].String], "rt": $n[0].Void, "fs": "QuantityMin" }, "fn": "QuantityMin" }, { "a": 2, "n": "RequestId", "t": 16, "rt": $n[0].String, "g": { "a": 2, "n": "get_RequestId", "t": 8, "rt": $n[0].String, "fg": "RequestId" }, "s": { "a": 2, "n": "set_RequestId", "t": 8, "p": [$n[0].String], "rt": $n[0].Void, "fs": "RequestId" }, "fn": "RequestId" }, { "a": 2, "n": "TestCurrency", "t": 16, "rt": $n[0].String, "g": { "a": 2, "n": "get_TestCurrency", "t": 8, "rt": $n[0].String, "fg": "TestCurrency" }, "s": { "a": 2, "n": "set_TestCurrency", "t": 8, "p": [$n[0].String], "rt": $n[0].Void, "fs": "TestCurrency" }, "fn": "TestCurrency" }, { "a": 1, "backing": true, "n": "<Action>k__BackingField", "t": 4, "rt": $n[0].String, "sn": "Action" }, { "a": 1, "backing": true, "n": "<DeveloperPayload>k__BackingField", "t": 4, "rt": $n[0].String, "sn": "DeveloperPayload" }, { "a": 1, "backing": true, "n": "<Method>k__BackingField", "t": 4, "rt": $n[0].String, "sn": "Method" }, { "a": 1, "backing": true, "n": "<PricepointId>k__BackingField", "t": 4, "rt": $n[0].String, "sn": "PricepointId" }, { "a": 1, "backing": true, "n": "<Product>k__BackingField", "t": 4, "rt": $n[0].String, "sn": "Product" }, { "a": 1, "backing": true, "n": "<ProductId>k__BackingField", "t": 4, "rt": $n[0].String, "sn": "ProductId" }, { "a": 1, "backing": true, "n": "<Quantity>k__BackingField", "t": 4, "rt": $n[0].String, "sn": "Quantity" }, { "a": 1, "backing": true, "n": "<QuantityMax>k__BackingField", "t": 4, "rt": $n[0].String, "sn": "QuantityMax" }, { "a": 1, "backing": true, "n": "<QuantityMin>k__BackingField", "t": 4, "rt": $n[0].String, "sn": "QuantityMin" }, { "a": 1, "backing": true, "n": "<RequestId>k__BackingField", "t": 4, "rt": $n[0].String, "sn": "RequestId" }, { "a": 1, "backing": true, "n": "<TestCurrency>k__BackingField", "t": 4, "rt": $n[0].String, "sn": "TestCurrency" }] }; }, $n);
    /*FacebookGames.PayRequest end.*/

    /*FacebookGames.PayResponse start.*/
    $m("FacebookGames.PayResponse", function() { return { "att": 1048577, "a": 2, "m": [{ "a": 2, "n": ".ctor", "t": 1, "sn": "ctor" }, { "ov": true, "a": 2, "n": "ToDictionary", "t": 8, "sn": "ToDictionary", "rt": $n[2].IDictionary$2(System.String, System.Object) }, { "a": 2, "n": "Amount", "t": 16, "rt": $n[0].String, "g": { "a": 2, "n": "get_Amount", "t": 8, "rt": $n[0].String, "fg": "Amount" }, "s": { "a": 2, "n": "set_Amount", "t": 8, "p": [$n[0].String], "rt": $n[0].Void, "fs": "Amount" }, "fn": "Amount" }, { "a": 2, "n": "AppId", "t": 16, "rt": $n[0].String, "g": { "a": 2, "n": "get_AppId", "t": 8, "rt": $n[0].String, "fg": "AppId" }, "s": { "a": 2, "n": "set_AppId", "t": 8, "p": [$n[0].String], "rt": $n[0].Void, "fs": "AppId" }, "fn": "AppId" }, { "a": 2, "n": "Currency", "t": 16, "rt": $n[0].String, "g": { "a": 2, "n": "get_Currency", "t": 8, "rt": $n[0].String, "fg": "Currency" }, "s": { "a": 2, "n": "set_Currency", "t": 8, "p": [$n[0].String], "rt": $n[0].Void, "fs": "Currency" }, "fn": "Currency" }, { "a": 2, "n": "DeveloperPayload", "t": 16, "rt": $n[0].String, "g": { "a": 2, "n": "get_DeveloperPayload", "t": 8, "rt": $n[0].String, "fg": "DeveloperPayload" }, "s": { "a": 2, "n": "set_DeveloperPayload", "t": 8, "p": [$n[0].String], "rt": $n[0].Void, "fs": "DeveloperPayload" }, "fn": "DeveloperPayload" }, { "a": 2, "n": "ErrorCode", "t": 16, "rt": $n[0].String, "g": { "a": 2, "n": "get_ErrorCode", "t": 8, "rt": $n[0].String, "fg": "ErrorCode" }, "s": { "a": 2, "n": "set_ErrorCode", "t": 8, "p": [$n[0].String], "rt": $n[0].Void, "fs": "ErrorCode" }, "fn": "ErrorCode" }, { "a": 2, "n": "ErrorMessage", "t": 16, "rt": $n[0].String, "g": { "a": 2, "n": "get_ErrorMessage", "t": 8, "rt": $n[0].String, "fg": "ErrorMessage" }, "s": { "a": 2, "n": "set_ErrorMessage", "t": 8, "p": [$n[0].String], "rt": $n[0].Void, "fs": "ErrorMessage" }, "fn": "ErrorMessage" }, { "a": 2, "n": "PaymentId", "t": 16, "rt": $n[0].String, "g": { "a": 2, "n": "get_PaymentId", "t": 8, "rt": $n[0].String, "fg": "PaymentId" }, "s": { "a": 2, "n": "set_PaymentId", "t": 8, "p": [$n[0].String], "rt": $n[0].Void, "fs": "PaymentId" }, "fn": "PaymentId" }, { "a": 2, "n": "ProductId", "t": 16, "rt": $n[0].String, "g": { "a": 2, "n": "get_ProductId", "t": 8, "rt": $n[0].String, "fg": "ProductId" }, "s": { "a": 2, "n": "set_ProductId", "t": 8, "p": [$n[0].String], "rt": $n[0].Void, "fs": "ProductId" }, "fn": "ProductId" }, { "a": 2, "n": "PurchaseTime", "t": 16, "rt": $n[0].String, "g": { "a": 2, "n": "get_PurchaseTime", "t": 8, "rt": $n[0].String, "fg": "PurchaseTime" }, "s": { "a": 2, "n": "set_PurchaseTime", "t": 8, "p": [$n[0].String], "rt": $n[0].Void, "fs": "PurchaseTime" }, "fn": "PurchaseTime" }, { "a": 2, "n": "PurchaseToken", "t": 16, "rt": $n[0].String, "g": { "a": 2, "n": "get_PurchaseToken", "t": 8, "rt": $n[0].String, "fg": "PurchaseToken" }, "s": { "a": 2, "n": "set_PurchaseToken", "t": 8, "p": [$n[0].String], "rt": $n[0].Void, "fs": "PurchaseToken" }, "fn": "PurchaseToken" }, { "a": 2, "n": "Quantity", "t": 16, "rt": $n[0].String, "g": { "a": 2, "n": "get_Quantity", "t": 8, "rt": $n[0].String, "fg": "Quantity" }, "s": { "a": 2, "n": "set_Quantity", "t": 8, "p": [$n[0].String], "rt": $n[0].Void, "fs": "Quantity" }, "fn": "Quantity" }, { "a": 2, "n": "RequestId", "t": 16, "rt": $n[0].String, "g": { "a": 2, "n": "get_RequestId", "t": 8, "rt": $n[0].String, "fg": "RequestId" }, "s": { "a": 2, "n": "set_RequestId", "t": 8, "p": [$n[0].String], "rt": $n[0].Void, "fs": "RequestId" }, "fn": "RequestId" }, { "a": 2, "n": "SignedRequest", "t": 16, "rt": $n[0].String, "g": { "a": 2, "n": "get_SignedRequest", "t": 8, "rt": $n[0].String, "fg": "SignedRequest" }, "s": { "a": 2, "n": "set_SignedRequest", "t": 8, "p": [$n[0].String], "rt": $n[0].Void, "fs": "SignedRequest" }, "fn": "SignedRequest" }, { "a": 2, "n": "Status", "t": 16, "rt": $n[0].String, "g": { "a": 2, "n": "get_Status", "t": 8, "rt": $n[0].String, "fg": "Status" }, "s": { "a": 2, "n": "set_Status", "t": 8, "p": [$n[0].String], "rt": $n[0].Void, "fs": "Status" }, "fn": "Status" }, { "a": 1, "backing": true, "n": "<Amount>k__BackingField", "t": 4, "rt": $n[0].String, "sn": "Amount" }, { "a": 1, "backing": true, "n": "<AppId>k__BackingField", "t": 4, "rt": $n[0].String, "sn": "AppId" }, { "a": 1, "backing": true, "n": "<Currency>k__BackingField", "t": 4, "rt": $n[0].String, "sn": "Currency" }, { "a": 1, "backing": true, "n": "<DeveloperPayload>k__BackingField", "t": 4, "rt": $n[0].String, "sn": "DeveloperPayload" }, { "a": 1, "backing": true, "n": "<ErrorCode>k__BackingField", "t": 4, "rt": $n[0].String, "sn": "ErrorCode" }, { "a": 1, "backing": true, "n": "<ErrorMessage>k__BackingField", "t": 4, "rt": $n[0].String, "sn": "ErrorMessage" }, { "a": 1, "backing": true, "n": "<PaymentId>k__BackingField", "t": 4, "rt": $n[0].String, "sn": "PaymentId" }, { "a": 1, "backing": true, "n": "<ProductId>k__BackingField", "t": 4, "rt": $n[0].String, "sn": "ProductId" }, { "a": 1, "backing": true, "n": "<PurchaseTime>k__BackingField", "t": 4, "rt": $n[0].String, "sn": "PurchaseTime" }, { "a": 1, "backing": true, "n": "<PurchaseToken>k__BackingField", "t": 4, "rt": $n[0].String, "sn": "PurchaseToken" }, { "a": 1, "backing": true, "n": "<Quantity>k__BackingField", "t": 4, "rt": $n[0].String, "sn": "Quantity" }, { "a": 1, "backing": true, "n": "<RequestId>k__BackingField", "t": 4, "rt": $n[0].String, "sn": "RequestId" }, { "a": 1, "backing": true, "n": "<SignedRequest>k__BackingField", "t": 4, "rt": $n[0].String, "sn": "SignedRequest" }, { "a": 1, "backing": true, "n": "<Status>k__BackingField", "t": 4, "rt": $n[0].String, "sn": "Status" }] }; }, $n);
    /*FacebookGames.PayResponse end.*/

    /*FacebookGames.PipeCommunicationHelper start.*/
    $m("FacebookGames.PipeCommunicationHelper", function() { return { "att": 1048577, "a": 2, "m": [{ "a": 2, "isSynthetic": true, "n": ".ctor", "t": 1, "sn": "ctor" }, { "a": 2, "n": "ReadPacket", "is": true, "t": 8, "pi": [{ "n": "stream", "pt": $n[6].NamedPipeStream, "ps": 0 }], "tpc": 1, "tprm": ["T"], "sn": "ReadPacket", "rt": System.Object, "p": [$n[6].NamedPipeStream] }, { "a": 2, "n": "ReadPacketMessage", "is": true, "t": 8, "pi": [{ "n": "stream", "pt": $n[6].NamedPipeStream, "ps": 0 }], "sn": "ReadPacketMessage", "rt": $n[0].String, "p": [$n[6].NamedPipeStream] }, { "a": 2, "n": "SendPacket", "is": true, "t": 8, "pi": [{ "n": "stream", "pt": $n[6].NamedPipeStream, "ps": 0 }, { "n": "packet", "pt": $n[6].PipePacket, "ps": 1 }], "sn": "SendPacket", "rt": $n[0].Void, "p": [$n[6].NamedPipeStream, $n[6].PipePacket] }] }; }, $n);
    /*FacebookGames.PipeCommunicationHelper end.*/

    /*FacebookGames.PipePacket start.*/
    $m("FacebookGames.PipePacket", function() { return { "att": 1048577, "a": 2, "m": [{ "a": 2, "isSynthetic": true, "n": ".ctor", "t": 1, "sn": "ctor" }, { "a": 2, "n": "Deserialize", "is": true, "t": 8, "pi": [{ "n": "message", "pt": $n[0].String, "ps": 0 }], "tpc": 1, "tprm": ["T"], "sn": "Deserialize", "rt": System.Object, "p": [$n[0].String] }, { "a": 2, "n": "GetMessageType", "is": true, "t": 8, "pi": [{ "n": "message", "pt": $n[0].String, "ps": 0 }], "sn": "GetMessageType", "rt": $n[0].String, "p": [$n[0].String] }, { "a": 2, "n": "Serialize", "t": 8, "sn": "Serialize", "rt": $n[0].String }] }; }, $n);
    /*FacebookGames.PipePacket end.*/

    /*FacebookGames.PipePacketRequest start.*/
    $m("FacebookGames.PipePacketRequest", function() { return { "att": 1048577, "a": 2, "m": [{ "a": 2, "n": ".ctor", "t": 1, "sn": "ctor" }, { "a": 2, "n": ".ctor", "t": 1, "p": [$n[0].String], "pi": [{ "n": "appId", "pt": $n[0].String, "ps": 0 }], "sn": "$ctor1" }, { "a": 2, "n": "AppId", "t": 16, "rt": $n[0].String, "g": { "a": 2, "n": "get_AppId", "t": 8, "rt": $n[0].String, "fg": "AppId" }, "s": { "a": 2, "n": "set_AppId", "t": 8, "p": [$n[0].String], "rt": $n[0].Void, "fs": "AppId" }, "fn": "AppId" }, { "a": 1, "backing": true, "n": "<AppId>k__BackingField", "t": 4, "rt": $n[0].String, "sn": "AppId" }] }; }, $n);
    /*FacebookGames.PipePacketRequest end.*/

    /*FacebookGames.PipePacketResponse start.*/
    $m("FacebookGames.PipePacketResponse", function() { return { "att": 1048577, "a": 2, "m": [{ "a": 2, "n": ".ctor", "t": 1, "sn": "ctor" }, { "a": 2, "n": ".ctor", "t": 1, "p": [$n[0].String, $n[0].Boolean], "pi": [{ "n": "error", "pt": $n[0].String, "ps": 0 }, { "n": "cancelled", "pt": $n[0].Boolean, "ps": 1 }], "sn": "$ctor1" }, { "v": true, "a": 2, "n": "ToDictionary", "t": 8, "sn": "ToDictionary", "rt": $n[2].IDictionary$2(System.String, System.Object) }, { "a": 2, "n": "Cancelled", "t": 16, "rt": $n[0].Boolean, "g": { "a": 2, "n": "get_Cancelled", "t": 8, "rt": $n[0].Boolean, "fg": "Cancelled", "box": function($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString); } }, "s": { "a": 2, "n": "set_Cancelled", "t": 8, "p": [$n[0].Boolean], "rt": $n[0].Void, "fs": "Cancelled" }, "fn": "Cancelled" }, { "a": 2, "n": "Error", "t": 16, "rt": $n[0].String, "g": { "a": 2, "n": "get_Error", "t": 8, "rt": $n[0].String, "fg": "Error" }, "s": { "a": 2, "n": "set_Error", "t": 8, "p": [$n[0].String], "rt": $n[0].Void, "fs": "Error" }, "fn": "Error" }, { "a": 1, "backing": true, "n": "<Cancelled>k__BackingField", "t": 4, "rt": $n[0].Boolean, "sn": "Cancelled", "box": function($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString); } }, { "a": 1, "backing": true, "n": "<Error>k__BackingField", "t": 4, "rt": $n[0].String, "sn": "Error" }] }; }, $n);
    /*FacebookGames.PipePacketResponse end.*/

    /*Facebook.Unity.AccessToken start.*/
    $m("Facebook.Unity.AccessToken", function() { return { "att": 1048577, "a": 2, "m": [{ "a": 2, "isSynthetic": true, "n": ".ctor", "t": 1, "sn": "ctor" }, { "a": 4, "n": "ToJson", "t": 8, "sn": "ToJson", "rt": $n[0].String }, { "ov": true, "a": 2, "n": "ToString", "t": 8, "sn": "toString", "rt": $n[0].String }, { "a": 2, "n": "CurrentAccessToken", "is": true, "t": 16, "rt": $n[8].AccessToken, "g": { "a": 2, "n": "get_CurrentAccessToken", "t": 8, "rt": $n[8].AccessToken, "fg": "CurrentAccessToken", "is": true }, "fn": "CurrentAccessToken" }, { "a": 2, "n": "ExpirationTime", "t": 16, "rt": $n[0].DateTime, "g": { "a": 2, "n": "get_ExpirationTime", "t": 8, "rt": $n[0].DateTime, "fg": "ExpirationTime", "box": function($v) { return Bridge.box($v, System.DateTime, System.DateTime.format); } }, "fn": "ExpirationTime" }, { "a": 2, "n": "GraphDomain", "t": 16, "rt": $n[0].String, "g": { "a": 2, "n": "get_GraphDomain", "t": 8, "rt": $n[0].String, "fg": "GraphDomain" }, "fn": "GraphDomain" }, { "a": 2, "n": "LastRefresh", "t": 16, "rt": $n[0].Nullable$1(System.DateTime), "g": { "a": 2, "n": "get_LastRefresh", "t": 8, "rt": $n[0].Nullable$1(System.DateTime), "fg": "LastRefresh", "box": function($v) { return Bridge.box($v, System.DateTime, System.Nullable.toStringFn(System.DateTime.format), System.Nullable.getHashCode); } }, "fn": "LastRefresh" }, { "a": 2, "n": "Permissions", "t": 16, "rt": $n[2].IEnumerable$1(System.String), "g": { "a": 2, "n": "get_Permissions", "t": 8, "rt": $n[2].IEnumerable$1(System.String), "fg": "Permissions" }, "fn": "Permissions" }, { "a": 2, "n": "TokenString", "t": 16, "rt": $n[0].String, "g": { "a": 2, "n": "get_TokenString", "t": 8, "rt": $n[0].String, "fg": "TokenString" }, "fn": "TokenString" }, { "a": 2, "n": "UserId", "t": 16, "rt": $n[0].String, "g": { "a": 2, "n": "get_UserId", "t": 8, "rt": $n[0].String, "fg": "UserId" }, "fn": "UserId" }] }; }, $n);
    /*Facebook.Unity.AccessToken end.*/

    /*Facebook.Unity.AccessTokenRefreshResult start.*/
    $m("Facebook.Unity.AccessTokenRefreshResult", function() { return { "att": 1048576, "a": 4, "m": [{ "a": 2, "n": ".ctor", "t": 1, "p": [$n[8].ResultContainer], "pi": [{ "n": "resultContainer", "pt": $n[8].ResultContainer, "ps": 0 }], "sn": "ctor" }, { "ov": true, "a": 2, "n": "ToString", "t": 8, "sn": "toString", "rt": $n[0].String }, { "v": true, "a": 2, "n": "AccessToken", "t": 16, "rt": $n[8].AccessToken, "g": { "v": true, "a": 2, "n": "get_AccessToken", "t": 8, "rt": $n[8].AccessToken, "fg": "AccessToken" }, "fn": "AccessToken" }] }; }, $n);
    /*Facebook.Unity.AccessTokenRefreshResult end.*/

    /*Facebook.Unity.AppEventName start.*/
    $m("Facebook.Unity.AppEventName", function() { return { "att": 1048961, "a": 2, "s": true, "m": [{ "a": 4, "n": "AchievedLevel", "is": true, "t": 4, "rt": $n[0].String, "sn": "AchievedLevel" }, { "a": 4, "n": "ActivatedApp", "is": true, "t": 4, "rt": $n[0].String, "sn": "ActivatedApp" }, { "a": 4, "n": "AddedPaymentInfo", "is": true, "t": 4, "rt": $n[0].String, "sn": "AddedPaymentInfo" }, { "a": 4, "n": "AddedToCart", "is": true, "t": 4, "rt": $n[0].String, "sn": "AddedToCart" }, { "a": 4, "n": "AddedToWishlist", "is": true, "t": 4, "rt": $n[0].String, "sn": "AddedToWishlist" }, { "a": 4, "n": "CompletedRegistration", "is": true, "t": 4, "rt": $n[0].String, "sn": "CompletedRegistration" }, { "a": 4, "n": "CompletedTutorial", "is": true, "t": 4, "rt": $n[0].String, "sn": "CompletedTutorial" }, { "a": 4, "n": "InitiatedCheckout", "is": true, "t": 4, "rt": $n[0].String, "sn": "InitiatedCheckout" }, { "a": 4, "n": "Purchased", "is": true, "t": 4, "rt": $n[0].String, "sn": "Purchased" }, { "a": 4, "n": "Rated", "is": true, "t": 4, "rt": $n[0].String, "sn": "Rated" }, { "a": 4, "n": "Searched", "is": true, "t": 4, "rt": $n[0].String, "sn": "Searched" }, { "a": 4, "n": "SpentCredits", "is": true, "t": 4, "rt": $n[0].String, "sn": "SpentCredits" }, { "a": 4, "n": "UnlockedAchievement", "is": true, "t": 4, "rt": $n[0].String, "sn": "UnlockedAchievement" }, { "a": 4, "n": "ViewedContent", "is": true, "t": 4, "rt": $n[0].String, "sn": "ViewedContent" }] }; }, $n);
    /*Facebook.Unity.AppEventName end.*/

    /*Facebook.Unity.AppEventParameterName start.*/
    $m("Facebook.Unity.AppEventParameterName", function() { return { "att": 1048961, "a": 2, "s": true, "m": [{ "a": 4, "n": "ContentID", "is": true, "t": 4, "rt": $n[0].String, "sn": "ContentID" }, { "a": 4, "n": "ContentType", "is": true, "t": 4, "rt": $n[0].String, "sn": "ContentType" }, { "a": 4, "n": "Currency", "is": true, "t": 4, "rt": $n[0].String, "sn": "Currency" }, { "a": 4, "n": "Description", "is": true, "t": 4, "rt": $n[0].String, "sn": "Description" }, { "a": 4, "n": "Level", "is": true, "t": 4, "rt": $n[0].String, "sn": "Level" }, { "a": 4, "n": "MaxRatingValue", "is": true, "t": 4, "rt": $n[0].String, "sn": "MaxRatingValue" }, { "a": 4, "n": "NumItems", "is": true, "t": 4, "rt": $n[0].String, "sn": "NumItems" }, { "a": 4, "n": "PaymentInfoAvailable", "is": true, "t": 4, "rt": $n[0].String, "sn": "PaymentInfoAvailable" }, { "a": 4, "n": "RegistrationMethod", "is": true, "t": 4, "rt": $n[0].String, "sn": "RegistrationMethod" }, { "a": 4, "n": "SearchString", "is": true, "t": 4, "rt": $n[0].String, "sn": "SearchString" }, { "a": 4, "n": "Success", "is": true, "t": 4, "rt": $n[0].String, "sn": "Success" }] }; }, $n);
    /*Facebook.Unity.AppEventParameterName end.*/

    /*Facebook.Unity.AppLinkResult start.*/
    $m("Facebook.Unity.AppLinkResult", function() { return { "att": 1048576, "a": 4, "m": [{ "a": 2, "n": ".ctor", "t": 1, "p": [$n[8].ResultContainer], "pi": [{ "n": "resultContainer", "pt": $n[8].ResultContainer, "ps": 0 }], "sn": "ctor" }, { "ov": true, "a": 2, "n": "ToString", "t": 8, "sn": "toString", "rt": $n[0].String }, { "v": true, "a": 2, "n": "Extras", "t": 16, "rt": $n[2].IDictionary$2(System.String, System.Object), "g": { "v": true, "a": 2, "n": "get_Extras", "t": 8, "rt": $n[2].IDictionary$2(System.String, System.Object), "fg": "Extras" }, "fn": "Extras" }, { "v": true, "a": 2, "n": "Ref", "t": 16, "rt": $n[0].String, "g": { "v": true, "a": 2, "n": "get_Ref", "t": 8, "rt": $n[0].String, "fg": "Ref" }, "fn": "Ref" }, { "v": true, "a": 2, "n": "TargetUrl", "t": 16, "rt": $n[0].String, "g": { "v": true, "a": 2, "n": "get_TargetUrl", "t": 8, "rt": $n[0].String, "fg": "TargetUrl" }, "fn": "TargetUrl" }, { "v": true, "a": 2, "n": "Url", "t": 16, "rt": $n[0].String, "g": { "v": true, "a": 2, "n": "get_Url", "t": 8, "rt": $n[0].String, "fg": "Url" }, "fn": "Url" }] }; }, $n);
    /*Facebook.Unity.AppLinkResult end.*/

    /*Facebook.Unity.AppRequestResult start.*/
    $m("Facebook.Unity.AppRequestResult", function() { return { "att": 1048576, "a": 4, "m": [{ "a": 2, "n": ".ctor", "t": 1, "p": [$n[8].ResultContainer], "pi": [{ "n": "resultContainer", "pt": $n[8].ResultContainer, "ps": 0 }], "sn": "ctor" }, { "ov": true, "a": 2, "n": "ToString", "t": 8, "sn": "toString", "rt": $n[0].String }, { "v": true, "a": 2, "n": "RequestID", "t": 16, "rt": $n[0].String, "g": { "v": true, "a": 2, "n": "get_RequestID", "t": 8, "rt": $n[0].String, "fg": "RequestID" }, "fn": "RequestID" }, { "v": true, "a": 2, "n": "To", "t": 16, "rt": $n[2].IEnumerable$1(System.String), "g": { "v": true, "a": 2, "n": "get_To", "t": 8, "rt": $n[2].IEnumerable$1(System.String), "fg": "To" }, "fn": "To" }, { "a": 4, "n": "RequestIDKey", "is": true, "t": 4, "rt": $n[0].String, "sn": "RequestIDKey" }, { "a": 4, "n": "ToKey", "is": true, "t": 4, "rt": $n[0].String, "sn": "ToKey" }] }; }, $n);
    /*Facebook.Unity.AppRequestResult end.*/

    /*Facebook.Unity.AsyncRequestString start.*/
    $m("Facebook.Unity.AsyncRequestString", function() { return { "att": 1048576, "a": 4, "m": [{ "a": 2, "isSynthetic": true, "n": ".ctor", "t": 1, "sn": "ctor" }, { "a": 4, "n": "Get", "is": true, "t": 8, "pi": [{ "n": "url", "pt": $n[0].Uri, "ps": 0 }, { "n": "formData", "pt": $n[2].Dictionary$2(System.String, System.String), "ps": 1 }, { "n": "callback", "pt": Function, "ps": 2 }], "sn": "Get", "rt": $n[0].Void, "p": [$n[0].Uri, $n[2].Dictionary$2(System.String, System.String), Function] }, { "a": 4, "n": "Post", "is": true, "t": 8, "pi": [{ "n": "url", "pt": $n[0].Uri, "ps": 0 }, { "n": "formData", "pt": $n[2].Dictionary$2(System.String, System.String), "ps": 1 }, { "n": "callback", "pt": Function, "ps": 2 }], "sn": "Post", "rt": $n[0].Void, "p": [$n[0].Uri, $n[2].Dictionary$2(System.String, System.String), Function] }, { "a": 4, "n": "Request", "is": true, "t": 8, "pi": [{ "n": "url", "pt": $n[0].Uri, "ps": 0 }, { "n": "method", "pt": $n[8].HttpMethod, "ps": 1 }, { "n": "formData", "pt": $n[2].IDictionary$2(System.String, System.String), "ps": 2 }, { "n": "callback", "pt": Function, "ps": 3 }], "sn": "Request", "rt": $n[0].Void, "p": [$n[0].Uri, $n[8].HttpMethod, $n[2].IDictionary$2(System.String, System.String), Function] }, { "a": 4, "n": "Request", "is": true, "t": 8, "pi": [{ "n": "url", "pt": $n[0].Uri, "ps": 0 }, { "n": "method", "pt": $n[8].HttpMethod, "ps": 1 }, { "n": "query", "pt": $n[1].WWWForm, "ps": 2 }, { "n": "callback", "pt": Function, "ps": 3 }], "sn": "Request$1", "rt": $n[0].Void, "p": [$n[0].Uri, $n[8].HttpMethod, $n[1].WWWForm, Function] }, { "a": 4, "n": "SetCallback", "t": 8, "pi": [{ "n": "callback", "pt": Function, "ps": 0 }], "sn": "SetCallback", "rt": $n[8].AsyncRequestString, "p": [Function] }, { "a": 4, "n": "SetFormData", "t": 8, "pi": [{ "n": "formData", "pt": $n[2].IDictionary$2(System.String, System.String), "ps": 0 }], "sn": "SetFormData", "rt": $n[8].AsyncRequestString, "p": [$n[2].IDictionary$2(System.String, System.String)] }, { "a": 4, "n": "SetMethod", "t": 8, "pi": [{ "n": "method", "pt": $n[8].HttpMethod, "ps": 0 }], "sn": "SetMethod", "rt": $n[8].AsyncRequestString, "p": [$n[8].HttpMethod] }, { "a": 4, "n": "SetQuery", "t": 8, "pi": [{ "n": "query", "pt": $n[1].WWWForm, "ps": 0 }], "sn": "SetQuery", "rt": $n[8].AsyncRequestString, "p": [$n[1].WWWForm] }, { "a": 4, "n": "SetUrl", "t": 8, "pi": [{ "n": "url", "pt": $n[0].Uri, "ps": 0 }], "sn": "SetUrl", "rt": $n[8].AsyncRequestString, "p": [$n[0].Uri] }, { "a": 4, "n": "Start", "t": 8, "sn": "Start", "rt": $n[5].IEnumerator }] }; }, $n);
    /*Facebook.Unity.AsyncRequestString end.*/

    /*Facebook.Unity.AsyncRequestStringWrapper start.*/
    $m("Facebook.Unity.AsyncRequestStringWrapper", function() { return { "att": 1048576, "a": 4, "m": [{ "a": 2, "isSynthetic": true, "n": ".ctor", "t": 1, "sn": "ctor" }, { "a": 2, "n": "Request", "t": 8, "pi": [{ "n": "url", "pt": $n[0].Uri, "ps": 0 }, { "n": "method", "pt": $n[8].HttpMethod, "ps": 1 }, { "n": "formData", "pt": $n[2].IDictionary$2(System.String, System.String), "ps": 2 }, { "n": "callback", "pt": Function, "ps": 3 }], "sn": "Request", "rt": $n[0].Void, "p": [$n[0].Uri, $n[8].HttpMethod, $n[2].IDictionary$2(System.String, System.String), Function] }, { "a": 2, "n": "Request", "t": 8, "pi": [{ "n": "url", "pt": $n[0].Uri, "ps": 0 }, { "n": "method", "pt": $n[8].HttpMethod, "ps": 1 }, { "n": "query", "pt": $n[1].WWWForm, "ps": 2 }, { "n": "callback", "pt": Function, "ps": 3 }], "sn": "Request$1", "rt": $n[0].Void, "p": [$n[0].Uri, $n[8].HttpMethod, $n[1].WWWForm, Function] }] }; }, $n);
    /*Facebook.Unity.AsyncRequestStringWrapper end.*/

    /*Facebook.Unity.AuthenticationToken start.*/
    $m("Facebook.Unity.AuthenticationToken", function() { return { "att": 1048577, "a": 2, "m": [{ "a": 2, "isSynthetic": true, "n": ".ctor", "t": 1, "sn": "ctor" }, { "a": 4, "n": "ToJson", "t": 8, "sn": "ToJson", "rt": $n[0].String }, { "ov": true, "a": 2, "n": "ToString", "t": 8, "sn": "toString", "rt": $n[0].String }, { "a": 2, "n": "Nonce", "t": 16, "rt": $n[0].String, "g": { "a": 2, "n": "get_Nonce", "t": 8, "rt": $n[0].String, "fg": "Nonce" }, "fn": "Nonce" }, { "a": 2, "n": "TokenString", "t": 16, "rt": $n[0].String, "g": { "a": 2, "n": "get_TokenString", "t": 8, "rt": $n[0].String, "fg": "TokenString" }, "fn": "TokenString" }] }; }, $n);
    /*Facebook.Unity.AuthenticationToken end.*/

    /*Facebook.Unity.CallbackManager start.*/
    $m("Facebook.Unity.CallbackManager", function() { return { "att": 1048576, "a": 4, "m": [{ "a": 2, "isSynthetic": true, "n": ".ctor", "t": 1, "sn": "ctor" }, { "a": 2, "n": "AddFacebookDelegate", "t": 8, "pi": [{ "n": "callback", "pt": Function, "ps": 0 }], "tpc": 1, "tprm": ["T"], "sn": "AddFacebookDelegate", "rt": $n[0].String, "p": [Function] }, { "a": 2, "n": "OnFacebookResponse", "t": 8, "pi": [{ "n": "result", "pt": $n[8].IInternalResult, "ps": 0 }], "sn": "OnFacebookResponse", "rt": $n[0].Void, "p": [$n[8].IInternalResult] }] }; }, $n);
    /*Facebook.Unity.CallbackManager end.*/

    /*Facebook.Unity.CatalogResult start.*/
    $m("Facebook.Unity.CatalogResult", function() { return { "att": 1048576, "a": 4, "m": [{ "a": 2, "n": ".ctor", "t": 1, "p": [$n[8].ResultContainer], "pi": [{ "n": "resultContainer", "pt": $n[8].ResultContainer, "ps": 0 }], "sn": "ctor" }, { "ov": true, "a": 2, "n": "ToString", "t": 8, "sn": "toString", "rt": $n[0].String }, { "v": true, "a": 2, "n": "Products", "t": 16, "rt": $n[2].IList$1(Facebook.Unity.Product), "g": { "v": true, "a": 2, "n": "get_Products", "t": 8, "rt": $n[2].IList$1(Facebook.Unity.Product), "fg": "Products" }, "fn": "Products" }] }; }, $n);
    /*Facebook.Unity.CatalogResult end.*/

    /*Facebook.Unity.CodelessCrawler start.*/
    $m("Facebook.Unity.CodelessCrawler", function() { return { "att": 1048577, "a": 2, "m": [{ "a": 2, "isSynthetic": true, "n": ".ctor", "t": 1, "sn": "ctor" }, { "a": 2, "n": "Awake", "t": 8, "sn": "Awake", "rt": $n[0].Void }, { "a": 2, "n": "CaptureViewHierarchy", "t": 8, "pi": [{ "n": "message", "pt": $n[0].String, "ps": 0 }], "sn": "CaptureViewHierarchy", "rt": $n[0].Void, "p": [$n[0].String] }] }; }, $n);
    /*Facebook.Unity.CodelessCrawler end.*/

    /*Facebook.Unity.CodelessIAPAutoLog start.*/
    $m("Facebook.Unity.CodelessIAPAutoLog", function() { return { "att": 1048576, "a": 4, "m": [{ "a": 2, "isSynthetic": true, "n": ".ctor", "t": 1, "sn": "ctor" }, { "a": 4, "n": "addListenerToGameObject", "is": true, "t": 8, "pi": [{ "n": "gameObject", "pt": $n[1].Object, "ps": 0 }, { "n": "listenerObject", "pt": $n[0].Object, "ps": 1 }], "sn": "addListenerToGameObject", "rt": $n[0].Void, "p": [$n[1].Object, $n[0].Object] }, { "a": 4, "n": "addListenerToIAPButtons", "is": true, "t": 8, "pi": [{ "n": "listenerObject", "pt": $n[0].Object, "ps": 0 }], "sn": "addListenerToIAPButtons", "rt": $n[0].Void, "p": [$n[0].Object] }, { "a": 4, "n": "handlePurchaseCompleted", "is": true, "t": 8, "pi": [{ "n": "data", "pt": $n[0].Object, "ps": 0 }], "sn": "handlePurchaseCompleted", "rt": $n[0].Void, "p": [$n[0].Object] }] }; }, $n);
    /*Facebook.Unity.CodelessIAPAutoLog end.*/

    /*Facebook.Unity.CodelessUIInteractEvent start.*/
    $m("Facebook.Unity.CodelessUIInteractEvent", function() { return { "att": 1048577, "a": 2, "m": [{ "a": 2, "isSynthetic": true, "n": ".ctor", "t": 1, "sn": "ctor" }, { "a": 2, "n": "OnReceiveMapping", "t": 8, "pi": [{ "n": "message", "pt": $n[0].String, "ps": 0 }], "sn": "OnReceiveMapping", "rt": $n[0].Void, "p": [$n[0].String] }, { "a": 4, "n": "eventBindingManager", "t": 16, "rt": $n[8].FBSDKEventBindingManager, "g": { "a": 4, "n": "get_eventBindingManager", "t": 8, "rt": $n[8].FBSDKEventBindingManager, "fg": "eventBindingManager" }, "fn": "eventBindingManager" }] }; }, $n);
    /*Facebook.Unity.CodelessUIInteractEvent end.*/

    /*Facebook.Unity.ComponentFactory start.*/
    $m("Facebook.Unity.ComponentFactory", function() { return { "nested": [$n[8].ComponentFactory.IfNotExist], "att": 1048576, "a": 4, "m": [{ "a": 2, "isSynthetic": true, "n": ".ctor", "t": 1, "sn": "ctor" }, { "a": 2, "n": "AddComponent", "is": true, "t": 8, "tpc": 1, "tprm": ["T"], "sn": "AddComponent", "rt": System.Object }, { "a": 2, "n": "GetComponent", "is": true, "t": 8, "pi": [{ "n": "ifNotExist", "pt": $n[8].ComponentFactory.IfNotExist, "ps": 0 }], "tpc": 1, "tprm": ["T"], "sn": "GetComponent", "rt": System.Object, "p": [$n[8].ComponentFactory.IfNotExist] }, { "a": 4, "n": "FacebookGameObject", "is": true, "t": 16, "rt": $n[1].GameObject, "g": { "a": 4, "n": "get_FacebookGameObject", "t": 8, "rt": $n[1].GameObject, "fg": "FacebookGameObject", "is": true }, "fn": "FacebookGameObject" }, { "a": 4, "n": "GameObjectName", "is": true, "t": 4, "rt": $n[0].String, "sn": "GameObjectName" }] }; }, $n);
    /*Facebook.Unity.ComponentFactory end.*/

    /*Facebook.Unity.ComponentFactory+IfNotExist start.*/
    $m("Facebook.Unity.ComponentFactory.IfNotExist", function() { return { "td": $n[8].ComponentFactory, "att": 258, "a": 2, "m": [{ "a": 2, "isSynthetic": true, "n": ".ctor", "t": 1, "sn": "ctor" }, { "a": 2, "n": "AddNew", "is": true, "t": 4, "rt": $n[8].ComponentFactory.IfNotExist, "sn": "AddNew", "box": function($v) { return Bridge.box($v, Facebook.Unity.ComponentFactory.IfNotExist, System.Enum.toStringFn(Facebook.Unity.ComponentFactory.IfNotExist)); } }, { "a": 2, "n": "ReturnNull", "is": true, "t": 4, "rt": $n[8].ComponentFactory.IfNotExist, "sn": "ReturnNull", "box": function($v) { return Bridge.box($v, Facebook.Unity.ComponentFactory.IfNotExist, System.Enum.toStringFn(Facebook.Unity.ComponentFactory.IfNotExist)); } }] }; }, $n);
    /*Facebook.Unity.ComponentFactory+IfNotExist end.*/

    /*Facebook.Unity.Constants start.*/
    $m("Facebook.Unity.Constants", function() { return { "att": 1048960, "a": 4, "s": true, "m": [{ "a": 2, "n": "CurrentPlatform", "is": true, "t": 16, "rt": $n[8].FacebookUnityPlatform, "g": { "a": 2, "n": "get_CurrentPlatform", "t": 8, "rt": $n[8].FacebookUnityPlatform, "fg": "CurrentPlatform", "is": true, "box": function($v) { return Bridge.box($v, Facebook.Unity.FacebookUnityPlatform, System.Enum.toStringFn(Facebook.Unity.FacebookUnityPlatform)); } }, "s": { "a": 2, "n": "set_CurrentPlatform", "t": 8, "p": [$n[8].FacebookUnityPlatform], "rt": $n[0].Void, "fs": "CurrentPlatform", "is": true }, "fn": "CurrentPlatform" }, { "a": 2, "n": "DebugMode", "is": true, "t": 16, "rt": $n[0].Boolean, "g": { "a": 2, "n": "get_DebugMode", "t": 8, "rt": $n[0].Boolean, "fg": "DebugMode", "is": true, "box": function($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString); } }, "fn": "DebugMode" }, { "a": 2, "n": "GraphApiUserAgent", "is": true, "t": 16, "rt": $n[0].String, "g": { "a": 2, "n": "get_GraphApiUserAgent", "t": 8, "rt": $n[0].String, "fg": "GraphApiUserAgent", "is": true }, "fn": "GraphApiUserAgent" }, { "a": 2, "n": "GraphUrl", "is": true, "t": 16, "rt": $n[0].Uri, "g": { "a": 2, "n": "get_GraphUrl", "t": 8, "rt": $n[0].Uri, "fg": "GraphUrl", "is": true }, "fn": "GraphUrl" }, { "a": 2, "n": "IsEditor", "is": true, "t": 16, "rt": $n[0].Boolean, "g": { "a": 2, "n": "get_IsEditor", "t": 8, "rt": $n[0].Boolean, "fg": "IsEditor", "is": true, "box": function($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString); } }, "fn": "IsEditor" }, { "a": 2, "n": "IsGameroom", "is": true, "t": 16, "rt": $n[0].Boolean, "g": { "a": 2, "n": "get_IsGameroom", "t": 8, "rt": $n[0].Boolean, "fg": "IsGameroom", "is": true, "box": function($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString); } }, "fn": "IsGameroom" }, { "a": 2, "n": "IsMobile", "is": true, "t": 16, "rt": $n[0].Boolean, "g": { "a": 2, "n": "get_IsMobile", "t": 8, "rt": $n[0].Boolean, "fg": "IsMobile", "is": true, "box": function($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString); } }, "fn": "IsMobile" }, { "a": 2, "n": "IsWeb", "is": true, "t": 16, "rt": $n[0].Boolean, "g": { "a": 2, "n": "get_IsWeb", "t": 8, "rt": $n[0].Boolean, "fg": "IsWeb", "is": true, "box": function($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString); } }, "fn": "IsWeb" }, { "a": 2, "n": "UnitySDKUserAgent", "is": true, "t": 16, "rt": $n[0].String, "g": { "a": 2, "n": "get_UnitySDKUserAgent", "t": 8, "rt": $n[0].String, "fg": "UnitySDKUserAgent", "is": true }, "fn": "UnitySDKUserAgent" }, { "a": 2, "n": "UnitySDKUserAgentSuffixLegacy", "is": true, "t": 16, "rt": $n[0].String, "g": { "a": 2, "n": "get_UnitySDKUserAgentSuffixLegacy", "t": 8, "rt": $n[0].String, "fg": "UnitySDKUserAgentSuffixLegacy", "is": true }, "fn": "UnitySDKUserAgentSuffixLegacy" }, { "a": 4, "n": "AccessTokenKey", "is": true, "t": 4, "rt": $n[0].String, "sn": "AccessTokenKey" }, { "a": 4, "n": "CallbackIdKey", "is": true, "t": 4, "rt": $n[0].String, "sn": "CallbackIdKey" }, { "a": 4, "n": "CancelledKey", "is": true, "t": 4, "rt": $n[0].String, "sn": "CancelledKey" }, { "a": 4, "n": "EmailPermission", "is": true, "t": 4, "rt": $n[0].String, "sn": "EmailPermission" }, { "a": 4, "n": "ErrorKey", "is": true, "t": 4, "rt": $n[0].String, "sn": "ErrorKey" }, { "a": 4, "n": "EventBindingKeysAppVersion", "is": true, "t": 4, "rt": $n[0].String, "sn": "EventBindingKeysAppVersion" }, { "a": 4, "n": "EventBindingKeysClassName", "is": true, "t": 4, "rt": $n[0].String, "sn": "EventBindingKeysClassName" }, { "a": 4, "n": "EventBindingKeysDescription", "is": true, "t": 4, "rt": $n[0].String, "sn": "EventBindingKeysDescription" }, { "a": 4, "n": "EventBindingKeysEventName", "is": true, "t": 4, "rt": $n[0].String, "sn": "EventBindingKeysEventName" }, { "a": 4, "n": "EventBindingKeysEventType", "is": true, "t": 4, "rt": $n[0].String, "sn": "EventBindingKeysEventType" }, { "a": 4, "n": "EventBindingKeysHint", "is": true, "t": 4, "rt": $n[0].String, "sn": "EventBindingKeysHint" }, { "a": 4, "n": "EventBindingKeysIndex", "is": true, "t": 4, "rt": $n[0].String, "sn": "EventBindingKeysIndex" }, { "a": 4, "n": "EventBindingKeysMatchBitmask", "is": true, "t": 4, "rt": $n[0].String, "sn": "EventBindingKeysMatchBitmask" }, { "a": 4, "n": "EventBindingKeysPath", "is": true, "t": 4, "rt": $n[0].String, "sn": "EventBindingKeysPath" }, { "a": 4, "n": "EventBindingKeysRow", "is": true, "t": 4, "rt": $n[0].String, "sn": "EventBindingKeysRow" }, { "a": 4, "n": "EventBindingKeysSection", "is": true, "t": 4, "rt": $n[0].String, "sn": "EventBindingKeysSection" }, { "a": 4, "n": "EventBindingKeysTag", "is": true, "t": 4, "rt": $n[0].String, "sn": "EventBindingKeysTag" }, { "a": 4, "n": "EventBindingKeysText", "is": true, "t": 4, "rt": $n[0].String, "sn": "EventBindingKeysText" }, { "a": 4, "n": "ExtrasKey", "is": true, "t": 4, "rt": $n[0].String, "sn": "ExtrasKey" }, { "a": 4, "n": "GraphApiVersion", "is": true, "t": 4, "rt": $n[0].String, "sn": "GraphApiVersion" }, { "a": 4, "n": "GraphUrlFormat", "is": true, "t": 4, "rt": $n[0].String, "sn": "GraphUrlFormat" }, { "a": 4, "n": "HasLicenseKey", "is": true, "t": 4, "rt": $n[0].String, "sn": "HasLicenseKey" }, { "a": 4, "n": "MaxPathDepth", "is": true, "t": 4, "rt": $n[0].Int32, "sn": "MaxPathDepth", "box": function($v) { return Bridge.box($v, System.Int32); } }, { "a": 4, "n": "OnAppRequestsCompleteMethodName", "is": true, "t": 4, "rt": $n[0].String, "sn": "OnAppRequestsCompleteMethodName" }, { "a": 4, "n": "OnGroupCreateCompleteMethodName", "is": true, "t": 4, "rt": $n[0].String, "sn": "OnGroupCreateCompleteMethodName" }, { "a": 4, "n": "OnGroupJoinCompleteMethodName", "is": true, "t": 4, "rt": $n[0].String, "sn": "OnGroupJoinCompleteMethodName" }, { "a": 4, "n": "OnPayCompleteMethodName", "is": true, "t": 4, "rt": $n[0].String, "sn": "OnPayCompleteMethodName" }, { "a": 4, "n": "OnShareCompleteMethodName", "is": true, "t": 4, "rt": $n[0].String, "sn": "OnShareCompleteMethodName" }, { "a": 4, "n": "PublishPagesPermission", "is": true, "t": 4, "rt": $n[0].String, "sn": "PublishPagesPermission" }, { "a": 4, "n": "RefKey", "is": true, "t": 4, "rt": $n[0].String, "sn": "RefKey" }, { "a": 4, "n": "TargetUrlKey", "is": true, "t": 4, "rt": $n[0].String, "sn": "TargetUrlKey" }, { "a": 4, "n": "UrlKey", "is": true, "t": 4, "rt": $n[0].String, "sn": "UrlKey" }, { "a": 4, "n": "UserLikesPermission", "is": true, "t": 4, "rt": $n[0].String, "sn": "UserLikesPermission" }, { "a": 1, "backing": true, "n": "<CurrentPlatform>k__BackingField", "is": true, "t": 4, "rt": $n[8].FacebookUnityPlatform, "sn": "CurrentPlatform", "box": function($v) { return Bridge.box($v, Facebook.Unity.FacebookUnityPlatform, System.Enum.toStringFn(Facebook.Unity.FacebookUnityPlatform)); } }] }; }, $n);
    /*Facebook.Unity.Constants end.*/

    /*Facebook.Unity.ConsumePurchaseResult start.*/
    $m("Facebook.Unity.ConsumePurchaseResult", function() { return { "att": 1048576, "a": 4, "m": [{ "a": 2, "isSynthetic": true, "n": ".ctor", "t": 1, "sn": "ctor" }] }; }, $n);
    /*Facebook.Unity.ConsumePurchaseResult end.*/

    /*Facebook.Unity.FacebookBase start.*/
    $m("Facebook.Unity.FacebookBase", function() { return { "att": 1048704, "a": 4, "m": [{ "a": 3, "isSynthetic": true, "n": ".ctor", "t": 1, "sn": "ctor" }, { "a": 2, "n": "API", "t": 8, "pi": [{ "n": "query", "pt": $n[0].String, "ps": 0 }, { "n": "method", "pt": $n[8].HttpMethod, "ps": 1 }, { "n": "formData", "pt": $n[2].IDictionary$2(System.String, System.String), "ps": 2 }, { "n": "callback", "pt": Function, "ps": 3 }], "sn": "API", "rt": $n[0].Void, "p": [$n[0].String, $n[8].HttpMethod, $n[2].IDictionary$2(System.String, System.String), Function] }, { "a": 2, "n": "API", "t": 8, "pi": [{ "n": "query", "pt": $n[0].String, "ps": 0 }, { "n": "method", "pt": $n[8].HttpMethod, "ps": 1 }, { "n": "formData", "pt": $n[1].WWWForm, "ps": 2 }, { "n": "callback", "pt": Function, "ps": 3 }], "sn": "API$1", "rt": $n[0].Void, "p": [$n[0].String, $n[8].HttpMethod, $n[1].WWWForm, Function] }, { "ab": true, "a": 2, "n": "ActivateApp", "t": 8, "pi": [{ "n": "appId", "pt": $n[0].String, "ps": 0 }], "sn": "ActivateApp", "rt": $n[0].Void, "p": [$n[0].String] }, { "ab": true, "a": 2, "n": "AppEventsLogEvent", "t": 8, "pi": [{ "n": "logEvent", "pt": $n[0].String, "ps": 0 }, { "n": "valueToSum", "pt": $n[0].Nullable$1(System.Single), "ps": 1 }, { "n": "parameters", "pt": $n[2].Dictionary$2(System.String, System.Object), "ps": 2 }], "sn": "AppEventsLogEvent", "rt": $n[0].Void, "p": [$n[0].String, $n[0].Nullable$1(System.Single), $n[2].Dictionary$2(System.String, System.Object)] }, { "ab": true, "a": 2, "n": "AppEventsLogPurchase", "t": 8, "pi": [{ "n": "logPurchase", "pt": $n[0].Single, "ps": 0 }, { "n": "currency", "pt": $n[0].String, "ps": 1 }, { "n": "parameters", "pt": $n[2].Dictionary$2(System.String, System.Object), "ps": 2 }], "sn": "AppEventsLogPurchase", "rt": $n[0].Void, "p": [$n[0].Single, $n[0].String, $n[2].Dictionary$2(System.String, System.Object)] }, { "a": 2, "n": "AppRequest", "t": 8, "pi": [{ "n": "message", "pt": $n[0].String, "ps": 0 }, { "n": "to", "pt": $n[2].IEnumerable$1(System.String), "ps": 1 }, { "n": "filters", "pt": $n[2].IEnumerable$1(System.Object), "ps": 2 }, { "n": "excludeIds", "pt": $n[2].IEnumerable$1(System.String), "ps": 3 }, { "n": "maxRecipients", "pt": $n[0].Nullable$1(System.Int32), "ps": 4 }, { "n": "data", "pt": $n[0].String, "ps": 5 }, { "n": "title", "pt": $n[0].String, "ps": 6 }, { "n": "callback", "pt": Function, "ps": 7 }], "sn": "AppRequest", "rt": $n[0].Void, "p": [$n[0].String, $n[2].IEnumerable$1(System.String), $n[2].IEnumerable$1(System.Object), $n[2].IEnumerable$1(System.String), $n[0].Nullable$1(System.Int32), $n[0].String, $n[0].String, Function] }, { "ab": true, "a": 2, "n": "AppRequest", "t": 8, "pi": [{ "n": "message", "pt": $n[0].String, "ps": 0 }, { "n": "actionType", "pt": $n[0].Nullable$1(Facebook.Unity.OGActionType), "ps": 1 }, { "n": "objectId", "pt": $n[0].String, "ps": 2 }, { "n": "to", "pt": $n[2].IEnumerable$1(System.String), "ps": 3 }, { "n": "filters", "pt": $n[2].IEnumerable$1(System.Object), "ps": 4 }, { "n": "excludeIds", "pt": $n[2].IEnumerable$1(System.String), "ps": 5 }, { "n": "maxRecipients", "pt": $n[0].Nullable$1(System.Int32), "ps": 6 }, { "n": "data", "pt": $n[0].String, "ps": 7 }, { "n": "title", "pt": $n[0].String, "ps": 8 }, { "n": "callback", "pt": Function, "ps": 9 }], "sn": "AppRequest$1", "rt": $n[0].Void, "p": [$n[0].String, $n[0].Nullable$1(Facebook.Unity.OGActionType), $n[0].String, $n[2].IEnumerable$1(System.String), $n[2].IEnumerable$1(System.Object), $n[2].IEnumerable$1(System.String), $n[0].Nullable$1(System.Int32), $n[0].String, $n[0].String, Function] }, { "ab": true, "a": 2, "n": "FeedShare", "t": 8, "pi": [{ "n": "toId", "pt": $n[0].String, "ps": 0 }, { "n": "link", "pt": $n[0].Uri, "ps": 1 }, { "n": "linkName", "pt": $n[0].String, "ps": 2 }, { "n": "linkCaption", "pt": $n[0].String, "ps": 3 }, { "n": "linkDescription", "pt": $n[0].String, "ps": 4 }, { "n": "picture", "pt": $n[0].Uri, "ps": 5 }, { "n": "mediaSource", "pt": $n[0].String, "ps": 6 }, { "n": "callback", "pt": Function, "ps": 7 }], "sn": "FeedShare", "rt": $n[0].Void, "p": [$n[0].String, $n[0].Uri, $n[0].String, $n[0].String, $n[0].String, $n[0].Uri, $n[0].String, Function] }, { "ab": true, "a": 2, "n": "GetAppLink", "t": 8, "pi": [{ "n": "callback", "pt": Function, "ps": 0 }], "sn": "GetAppLink", "rt": $n[0].Void, "p": [Function] }, { "v": true, "a": 2, "n": "Init", "t": 8, "pi": [{ "n": "onInitComplete", "pt": Function, "ps": 0 }], "sn": "Init", "rt": $n[0].Void, "p": [Function] }, { "ab": true, "a": 2, "n": "LogInWithPublishPermissions", "t": 8, "pi": [{ "n": "scope", "pt": $n[2].IEnumerable$1(System.String), "ps": 0 }, { "n": "callback", "pt": Function, "ps": 1 }], "sn": "LogInWithPublishPermissions", "rt": $n[0].Void, "p": [$n[2].IEnumerable$1(System.String), Function] }, { "ab": true, "a": 2, "n": "LogInWithReadPermissions", "t": 8, "pi": [{ "n": "scope", "pt": $n[2].IEnumerable$1(System.String), "ps": 0 }, { "n": "callback", "pt": Function, "ps": 1 }], "sn": "LogInWithReadPermissions", "rt": $n[0].Void, "p": [$n[2].IEnumerable$1(System.String), Function] }, { "v": true, "a": 2, "n": "LogOut", "t": 8, "sn": "LogOut", "rt": $n[0].Void }, { "ab": true, "a": 2, "n": "OnAppRequestsComplete", "t": 8, "pi": [{ "n": "resultContainer", "pt": $n[8].ResultContainer, "ps": 0 }], "sn": "OnAppRequestsComplete", "rt": $n[0].Void, "p": [$n[8].ResultContainer] }, { "v": true, "a": 3, "n": "OnAuthResponse", "t": 8, "pi": [{ "n": "result", "pt": $n[8].LoginResult, "ps": 0 }], "sn": "OnAuthResponse", "rt": $n[0].Void, "p": [$n[8].LoginResult] }, { "ab": true, "a": 2, "n": "OnGetAppLinkComplete", "t": 8, "pi": [{ "n": "resultContainer", "pt": $n[8].ResultContainer, "ps": 0 }], "sn": "OnGetAppLinkComplete", "rt": $n[0].Void, "p": [$n[8].ResultContainer] }, { "v": true, "a": 2, "n": "OnInitComplete", "t": 8, "pi": [{ "n": "resultContainer", "pt": $n[8].ResultContainer, "ps": 0 }], "sn": "OnInitComplete", "rt": $n[0].Void, "p": [$n[8].ResultContainer] }, { "ab": true, "a": 2, "n": "OnLoginComplete", "t": 8, "pi": [{ "n": "resultContainer", "pt": $n[8].ResultContainer, "ps": 0 }], "sn": "OnLoginComplete", "rt": $n[0].Void, "p": [$n[8].ResultContainer] }, { "a": 2, "n": "OnLogoutComplete", "t": 8, "pi": [{ "n": "resultContainer", "pt": $n[8].ResultContainer, "ps": 0 }], "sn": "OnLogoutComplete", "rt": $n[0].Void, "p": [$n[8].ResultContainer] }, { "ab": true, "a": 2, "n": "OnShareLinkComplete", "t": 8, "pi": [{ "n": "resultContainer", "pt": $n[8].ResultContainer, "ps": 0 }], "sn": "OnShareLinkComplete", "rt": $n[0].Void, "p": [$n[8].ResultContainer] }, { "ab": true, "a": 2, "n": "ShareLink", "t": 8, "pi": [{ "n": "contentURL", "pt": $n[0].Uri, "ps": 0 }, { "n": "contentTitle", "pt": $n[0].String, "ps": 1 }, { "n": "contentDescription", "pt": $n[0].String, "ps": 2 }, { "n": "photoURL", "pt": $n[0].Uri, "ps": 3 }, { "n": "callback", "pt": Function, "ps": 4 }], "sn": "ShareLink", "rt": $n[0].Void, "p": [$n[0].Uri, $n[0].String, $n[0].String, $n[0].Uri, Function] }, { "a": 3, "n": "ValidateAppRequestArgs", "t": 8, "pi": [{ "n": "message", "pt": $n[0].String, "ps": 0 }, { "n": "actionType", "pt": $n[0].Nullable$1(Facebook.Unity.OGActionType), "ps": 1 }, { "n": "objectId", "pt": $n[0].String, "ps": 2 }, { "n": "to", "pt": $n[2].IEnumerable$1(System.String), "ps": 3 }, { "n": "filters", "pt": $n[2].IEnumerable$1(System.Object), "ps": 4 }, { "n": "excludeIds", "pt": $n[2].IEnumerable$1(System.String), "ps": 5 }, { "n": "maxRecipients", "pt": $n[0].Nullable$1(System.Int32), "ps": 6 }, { "n": "data", "pt": $n[0].String, "ps": 7 }, { "n": "title", "pt": $n[0].String, "ps": 8 }, { "n": "callback", "pt": Function, "ps": 9 }], "sn": "ValidateAppRequestArgs", "rt": $n[0].Void, "p": [$n[0].String, $n[0].Nullable$1(Facebook.Unity.OGActionType), $n[0].String, $n[2].IEnumerable$1(System.String), $n[2].IEnumerable$1(System.Object), $n[2].IEnumerable$1(System.String), $n[0].Nullable$1(System.Int32), $n[0].String, $n[0].String, Function] }, { "a": 4, "n": "CallbackManager", "t": 16, "rt": $n[8].CallbackManager, "g": { "a": 4, "n": "get_CallbackManager", "t": 8, "rt": $n[8].CallbackManager, "fg": "CallbackManager" }, "fn": "CallbackManager" }, { "v": true, "a": 2, "n": "Initialized", "t": 16, "rt": $n[0].Boolean, "g": { "v": true, "a": 2, "n": "get_Initialized", "t": 8, "rt": $n[0].Boolean, "fg": "Initialized", "box": function($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString); } }, "fn": "Initialized" }, { "ab": true, "a": 2, "n": "LimitEventUsage", "t": 16, "rt": $n[0].Boolean, "g": { "ab": true, "a": 2, "n": "get_LimitEventUsage", "t": 8, "rt": $n[0].Boolean, "fg": "LimitEventUsage", "box": function($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString); } }, "s": { "ab": true, "a": 2, "n": "set_LimitEventUsage", "t": 8, "p": [$n[0].Boolean], "rt": $n[0].Void, "fs": "LimitEventUsage" }, "fn": "LimitEventUsage" }, { "v": true, "a": 2, "n": "LoggedIn", "t": 16, "rt": $n[0].Boolean, "g": { "v": true, "a": 2, "n": "get_LoggedIn", "t": 8, "rt": $n[0].Boolean, "fg": "LoggedIn", "box": function($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString); } }, "fn": "LoggedIn" }, { "ab": true, "a": 2, "n": "SDKName", "t": 16, "rt": $n[0].String, "g": { "ab": true, "a": 2, "n": "get_SDKName", "t": 8, "rt": $n[0].String, "fg": "SDKName" }, "fn": "SDKName" }, { "v": true, "a": 2, "n": "SDKUserAgent", "t": 16, "rt": $n[0].String, "g": { "v": true, "a": 2, "n": "get_SDKUserAgent", "t": 8, "rt": $n[0].String, "fg": "SDKUserAgent" }, "fn": "SDKUserAgent" }, { "ab": true, "a": 2, "n": "SDKVersion", "t": 16, "rt": $n[0].String, "g": { "ab": true, "a": 2, "n": "get_SDKVersion", "t": 8, "rt": $n[0].String, "fg": "SDKVersion" }, "fn": "SDKVersion" }, { "a": 1, "backing": true, "n": "<LimitEventUsage>k__BackingField", "t": 4, "rt": $n[0].Boolean, "sn": "LimitEventUsage", "box": function($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString); } }, { "a": 1, "backing": true, "n": "<SDKName>k__BackingField", "t": 4, "rt": $n[0].String, "sn": "SDKName" }, { "a": 1, "backing": true, "n": "<SDKVersion>k__BackingField", "t": 4, "rt": $n[0].String, "sn": "SDKVersion" }] }; }, $n);
    /*Facebook.Unity.FacebookBase end.*/

    /*Facebook.Unity.FacebookGameObject start.*/
    $m("Facebook.Unity.FacebookGameObject", function() { return { "att": 1048704, "a": 4, "m": [{ "a": 3, "isSynthetic": true, "n": ".ctor", "t": 1, "sn": "ctor" }, { "a": 2, "n": "Awake", "t": 8, "sn": "Awake", "rt": $n[0].Void }, { "a": 2, "n": "OnAppRequestsComplete", "t": 8, "pi": [{ "n": "message", "pt": $n[0].String, "ps": 0 }], "sn": "OnAppRequestsComplete", "rt": $n[0].Void, "p": [$n[0].String] }, { "v": true, "a": 3, "n": "OnAwake", "t": 8, "sn": "OnAwake", "rt": $n[0].Void }, { "a": 2, "n": "OnGetAppLinkComplete", "t": 8, "pi": [{ "n": "message", "pt": $n[0].String, "ps": 0 }], "sn": "OnGetAppLinkComplete", "rt": $n[0].Void, "p": [$n[0].String] }, { "a": 2, "n": "OnInitComplete", "t": 8, "pi": [{ "n": "message", "pt": $n[0].String, "ps": 0 }], "sn": "OnInitComplete", "rt": $n[0].Void, "p": [$n[0].String] }, { "a": 2, "n": "OnLoginComplete", "t": 8, "pi": [{ "n": "message", "pt": $n[0].String, "ps": 0 }], "sn": "OnLoginComplete", "rt": $n[0].Void, "p": [$n[0].String] }, { "a": 2, "n": "OnLogoutComplete", "t": 8, "pi": [{ "n": "message", "pt": $n[0].String, "ps": 0 }], "sn": "OnLogoutComplete", "rt": $n[0].Void, "p": [$n[0].String] }, { "a": 2, "n": "OnShareLinkComplete", "t": 8, "pi": [{ "n": "message", "pt": $n[0].String, "ps": 0 }], "sn": "OnShareLinkComplete", "rt": $n[0].Void, "p": [$n[0].String] }, { "a": 2, "n": "Facebook", "t": 16, "rt": $n[8].IFacebookImplementation, "g": { "a": 2, "n": "get_Facebook", "t": 8, "rt": $n[8].IFacebookImplementation, "fg": "Facebook" }, "s": { "a": 2, "n": "set_Facebook", "t": 8, "p": [$n[8].IFacebookImplementation], "rt": $n[0].Void, "fs": "Facebook" }, "fn": "Facebook" }, { "a": 1, "backing": true, "n": "<Facebook>k__BackingField", "t": 4, "rt": $n[8].IFacebookImplementation, "sn": "Facebook" }] }; }, $n);
    /*Facebook.Unity.FacebookGameObject end.*/

    /*Facebook.Unity.FacebookLogger start.*/
    $m("Facebook.Unity.FacebookLogger", function() { return { "att": 1048960, "a": 4, "s": true, "m": [{ "a": 2, "n": "Error", "is": true, "t": 8, "pi": [{ "n": "msg", "pt": $n[0].String, "ps": 0 }], "sn": "Error", "rt": $n[0].Void, "p": [$n[0].String] }, { "a": 2, "n": "Error", "is": true, "t": 8, "pi": [{ "n": "format", "pt": $n[0].String, "ps": 0 }, { "n": "args", "pt": $n[0].Array.type(System.String), "ps": 1 }], "sn": "Error$1", "rt": $n[0].Void, "p": [$n[0].String, $n[0].Array.type(System.String)] }, { "a": 2, "n": "Info", "is": true, "t": 8, "pi": [{ "n": "msg", "pt": $n[0].String, "ps": 0 }], "sn": "Info", "rt": $n[0].Void, "p": [$n[0].String] }, { "a": 2, "n": "Info", "is": true, "t": 8, "pi": [{ "n": "format", "pt": $n[0].String, "ps": 0 }, { "n": "args", "pt": $n[0].Array.type(System.String), "ps": 1 }], "sn": "Info$1", "rt": $n[0].Void, "p": [$n[0].String, $n[0].Array.type(System.String)] }, { "a": 2, "n": "Log", "is": true, "t": 8, "pi": [{ "n": "msg", "pt": $n[0].String, "ps": 0 }], "sn": "Log", "rt": $n[0].Void, "p": [$n[0].String] }, { "a": 2, "n": "Log", "is": true, "t": 8, "pi": [{ "n": "format", "pt": $n[0].String, "ps": 0 }, { "n": "args", "pt": $n[0].Array.type(System.String), "ps": 1 }], "sn": "Log$1", "rt": $n[0].Void, "p": [$n[0].String, $n[0].Array.type(System.String)] }, { "a": 2, "n": "Warn", "is": true, "t": 8, "pi": [{ "n": "msg", "pt": $n[0].String, "ps": 0 }], "sn": "Warn", "rt": $n[0].Void, "p": [$n[0].String] }, { "a": 2, "n": "Warn", "is": true, "t": 8, "pi": [{ "n": "format", "pt": $n[0].String, "ps": 0 }, { "n": "args", "pt": $n[0].Array.type(System.String), "ps": 1 }], "sn": "Warn$1", "rt": $n[0].Void, "p": [$n[0].String, $n[0].Array.type(System.String)] }, { "a": 4, "n": "Instance", "is": true, "t": 16, "rt": $n[8].IFacebookLogger, "g": { "a": 4, "n": "get_Instance", "t": 8, "rt": $n[8].IFacebookLogger, "fg": "Instance", "is": true }, "fn": "Instance" }] }; }, $n);
    /*Facebook.Unity.FacebookLogger end.*/

    /*Facebook.Unity.FacebookScheduler start.*/
    $m("Facebook.Unity.FacebookScheduler", function() { return { "att": 1048576, "a": 4, "m": [{ "a": 2, "isSynthetic": true, "n": ".ctor", "t": 1, "sn": "ctor" }, { "a": 2, "n": "DelayEvent", "t": 8, "pi": [{ "n": "action", "pt": Function, "ps": 0 }, { "n": "delay", "pt": $n[0].Int64, "ps": 1 }], "sn": "DelayEvent", "rt": $n[5].IEnumerator, "p": [Function, $n[0].Int64] }, { "a": 2, "n": "Schedule", "t": 8, "pi": [{ "n": "action", "pt": Function, "ps": 0 }, { "n": "delay", "pt": $n[0].Int64, "ps": 1 }], "sn": "Schedule", "rt": $n[0].Void, "p": [Function, $n[0].Int64] }] }; }, $n);
    /*Facebook.Unity.FacebookScheduler end.*/

    /*Facebook.Unity.FacebookSchedulerFactory start.*/
    $m("Facebook.Unity.FacebookSchedulerFactory", function() { return { "att": 1048576, "a": 4, "m": [{ "a": 2, "isSynthetic": true, "n": ".ctor", "t": 1, "sn": "ctor" }, { "a": 2, "n": "GetInstance", "t": 8, "sn": "GetInstance", "rt": $n[8].IFacebookScheduler }] }; }, $n);
    /*Facebook.Unity.FacebookSchedulerFactory end.*/

    /*Facebook.Unity.FacebookSdkVersion start.*/
    $m("Facebook.Unity.FacebookSdkVersion", function() { return { "att": 1048577, "a": 2, "m": [{ "a": 2, "isSynthetic": true, "n": ".ctor", "t": 1, "sn": "ctor" }, { "a": 2, "n": "Build", "is": true, "t": 16, "rt": $n[0].String, "g": { "a": 2, "n": "get_Build", "t": 8, "rt": $n[0].String, "fg": "Build", "is": true }, "fn": "Build" }] }; }, $n);
    /*Facebook.Unity.FacebookSdkVersion end.*/

    /*Facebook.Unity.FacebookUnityPlatform start.*/
    $m("Facebook.Unity.FacebookUnityPlatform", function() { return { "att": 256, "a": 4, "m": [{ "a": 2, "isSynthetic": true, "n": ".ctor", "t": 1, "sn": "ctor" }, { "a": 2, "n": "Android", "is": true, "t": 4, "rt": $n[8].FacebookUnityPlatform, "sn": "Android", "box": function($v) { return Bridge.box($v, Facebook.Unity.FacebookUnityPlatform, System.Enum.toStringFn(Facebook.Unity.FacebookUnityPlatform)); } }, { "a": 2, "n": "Gameroom", "is": true, "t": 4, "rt": $n[8].FacebookUnityPlatform, "sn": "Gameroom", "box": function($v) { return Bridge.box($v, Facebook.Unity.FacebookUnityPlatform, System.Enum.toStringFn(Facebook.Unity.FacebookUnityPlatform)); } }, { "a": 2, "n": "IOS", "is": true, "t": 4, "rt": $n[8].FacebookUnityPlatform, "sn": "IOS", "box": function($v) { return Bridge.box($v, Facebook.Unity.FacebookUnityPlatform, System.Enum.toStringFn(Facebook.Unity.FacebookUnityPlatform)); } }, { "a": 2, "n": "Unknown", "is": true, "t": 4, "rt": $n[8].FacebookUnityPlatform, "sn": "Unknown", "box": function($v) { return Bridge.box($v, Facebook.Unity.FacebookUnityPlatform, System.Enum.toStringFn(Facebook.Unity.FacebookUnityPlatform)); } }, { "a": 2, "n": "WebGL", "is": true, "t": 4, "rt": $n[8].FacebookUnityPlatform, "sn": "WebGL", "box": function($v) { return Bridge.box($v, Facebook.Unity.FacebookUnityPlatform, System.Enum.toStringFn(Facebook.Unity.FacebookUnityPlatform)); } }] }; }, $n);
    /*Facebook.Unity.FacebookUnityPlatform end.*/

    /*Facebook.Unity.FB start.*/
    $m("Facebook.Unity.FB", function() { return { "nested": [$n[8].FB.Canvas, $n[8].FB.Mobile, $n[8].FB.Android, $n[8].FB.Gameroom, $n[8].FB.CompiledFacebookLoader], "att": 1048577, "a": 2, "m": [{ "a": 2, "isSynthetic": true, "n": ".ctor", "t": 1, "sn": "ctor" }, { "a": 2, "n": "API", "is": true, "t": 8, "pi": [{ "n": "query", "pt": $n[0].String, "ps": 0 }, { "n": "method", "pt": $n[8].HttpMethod, "ps": 1 }, { "n": "callback", "pt": Function, "ps": 2 }, { "n": "formData", "pt": $n[2].IDictionary$2(System.String, System.String), "ps": 3 }], "sn": "API", "rt": $n[0].Void, "p": [$n[0].String, $n[8].HttpMethod, Function, $n[2].IDictionary$2(System.String, System.String)] }, { "a": 2, "n": "API", "is": true, "t": 8, "pi": [{ "n": "query", "pt": $n[0].String, "ps": 0 }, { "n": "method", "pt": $n[8].HttpMethod, "ps": 1 }, { "n": "callback", "pt": Function, "ps": 2 }, { "n": "formData", "pt": $n[1].WWWForm, "ps": 3 }], "sn": "API$1", "rt": $n[0].Void, "p": [$n[0].String, $n[8].HttpMethod, Function, $n[1].WWWForm] }, { "a": 2, "n": "ActivateApp", "is": true, "t": 8, "sn": "ActivateApp", "rt": $n[0].Void }, { "a": 2, "n": "AppRequest", "is": true, "t": 8, "pi": [{ "n": "message", "pt": $n[0].String, "ps": 0 }, { "n": "actionType", "pt": $n[8].OGActionType, "ps": 1 }, { "n": "objectId", "pt": $n[0].String, "ps": 2 }, { "n": "to", "pt": $n[2].IEnumerable$1(System.String), "ps": 3 }, { "n": "data", "pt": $n[0].String, "ps": 4 }, { "n": "title", "pt": $n[0].String, "ps": 5 }, { "n": "callback", "pt": Function, "ps": 6 }], "sn": "AppRequest$1", "rt": $n[0].Void, "p": [$n[0].String, $n[8].OGActionType, $n[0].String, $n[2].IEnumerable$1(System.String), $n[0].String, $n[0].String, Function] }, { "a": 2, "n": "AppRequest", "is": true, "t": 8, "pi": [{ "n": "message", "pt": $n[0].String, "ps": 0 }, { "n": "to", "pt": $n[2].IEnumerable$1(System.String), "ps": 1 }, { "n": "filters", "pt": $n[2].IEnumerable$1(System.Object), "ps": 2 }, { "n": "excludeIds", "pt": $n[2].IEnumerable$1(System.String), "ps": 3 }, { "n": "maxRecipients", "pt": $n[0].Nullable$1(System.Int32), "ps": 4 }, { "n": "data", "pt": $n[0].String, "ps": 5 }, { "n": "title", "pt": $n[0].String, "ps": 6 }, { "n": "callback", "pt": Function, "ps": 7 }], "sn": "AppRequest$2", "rt": $n[0].Void, "p": [$n[0].String, $n[2].IEnumerable$1(System.String), $n[2].IEnumerable$1(System.Object), $n[2].IEnumerable$1(System.String), $n[0].Nullable$1(System.Int32), $n[0].String, $n[0].String, Function] }, { "a": 2, "n": "AppRequest", "is": true, "t": 8, "pi": [{ "n": "message", "pt": $n[0].String, "ps": 0 }, { "n": "actionType", "pt": $n[8].OGActionType, "ps": 1 }, { "n": "objectId", "pt": $n[0].String, "ps": 2 }, { "n": "filters", "pt": $n[2].IEnumerable$1(System.Object), "ps": 3 }, { "n": "excludeIds", "pt": $n[2].IEnumerable$1(System.String), "ps": 4 }, { "n": "maxRecipients", "pt": $n[0].Nullable$1(System.Int32), "ps": 5 }, { "n": "data", "pt": $n[0].String, "ps": 6 }, { "n": "title", "pt": $n[0].String, "ps": 7 }, { "n": "callback", "pt": Function, "ps": 8 }], "sn": "AppRequest", "rt": $n[0].Void, "p": [$n[0].String, $n[8].OGActionType, $n[0].String, $n[2].IEnumerable$1(System.Object), $n[2].IEnumerable$1(System.String), $n[0].Nullable$1(System.Int32), $n[0].String, $n[0].String, Function] }, { "a": 2, "n": "ClearAppLink", "is": true, "t": 8, "sn": "ClearAppLink", "rt": $n[0].Void }, { "a": 2, "n": "FeedShare", "is": true, "t": 8, "pi": [{ "n": "toId", "pt": $n[0].String, "ps": 0 }, { "n": "link", "pt": $n[0].Uri, "ps": 1 }, { "n": "linkName", "pt": $n[0].String, "ps": 2 }, { "n": "linkCaption", "pt": $n[0].String, "ps": 3 }, { "n": "linkDescription", "pt": $n[0].String, "ps": 4 }, { "n": "picture", "pt": $n[0].Uri, "ps": 5 }, { "n": "mediaSource", "pt": $n[0].String, "ps": 6 }, { "n": "callback", "pt": Function, "ps": 7 }], "sn": "FeedShare", "rt": $n[0].Void, "p": [$n[0].String, $n[0].Uri, $n[0].String, $n[0].String, $n[0].String, $n[0].Uri, $n[0].String, Function] }, { "a": 2, "n": "GetAppLink", "is": true, "t": 8, "pi": [{ "n": "callback", "pt": Function, "ps": 0 }], "sn": "GetAppLink", "rt": $n[0].Void, "p": [Function] }, { "a": 2, "n": "Init", "is": true, "t": 8, "pi": [{ "n": "onInitComplete", "pt": Function, "ps": 0 }, { "n": "onHideUnity", "pt": Function, "ps": 1 }, { "n": "authResponse", "pt": $n[0].String, "ps": 2 }], "sn": "Init", "rt": $n[0].Void, "p": [Function, Function, $n[0].String] }, { "a": 2, "n": "Init", "is": true, "t": 8, "pi": [{ "n": "appId", "pt": $n[0].String, "ps": 0 }, { "n": "clientToken", "pt": $n[0].String, "ps": 1 }, { "n": "cookie", "pt": $n[0].Boolean, "ps": 2 }, { "n": "logging", "pt": $n[0].Boolean, "ps": 3 }, { "n": "status", "pt": $n[0].Boolean, "ps": 4 }, { "n": "xfbml", "pt": $n[0].Boolean, "ps": 5 }, { "n": "frictionlessRequests", "pt": $n[0].Boolean, "ps": 6 }, { "n": "authResponse", "pt": $n[0].String, "ps": 7 }, { "n": "javascriptSDKLocale", "pt": $n[0].String, "ps": 8 }, { "n": "onHideUnity", "pt": Function, "ps": 9 }, { "n": "onInitComplete", "pt": Function, "ps": 10 }], "sn": "Init$1", "rt": $n[0].Void, "p": [$n[0].String, $n[0].String, $n[0].Boolean, $n[0].Boolean, $n[0].Boolean, $n[0].Boolean, $n[0].Boolean, $n[0].String, $n[0].String, Function, Function] }, { "a": 2, "n": "LogAppEvent", "is": true, "t": 8, "pi": [{ "n": "logEvent", "pt": $n[0].String, "ps": 0 }, { "n": "valueToSum", "pt": $n[0].Nullable$1(System.Single), "ps": 1 }, { "n": "parameters", "pt": $n[2].Dictionary$2(System.String, System.Object), "ps": 2 }], "sn": "LogAppEvent", "rt": $n[0].Void, "p": [$n[0].String, $n[0].Nullable$1(System.Single), $n[2].Dictionary$2(System.String, System.Object)] }, { "a": 2, "n": "LogInWithPublishPermissions", "is": true, "t": 8, "pi": [{ "n": "permissions", "pt": $n[2].IEnumerable$1(System.String), "ps": 0 }, { "n": "callback", "pt": Function, "ps": 1 }], "sn": "LogInWithPublishPermissions", "rt": $n[0].Void, "p": [$n[2].IEnumerable$1(System.String), Function] }, { "a": 2, "n": "LogInWithReadPermissions", "is": true, "t": 8, "pi": [{ "n": "permissions", "pt": $n[2].IEnumerable$1(System.String), "ps": 0 }, { "n": "callback", "pt": Function, "ps": 1 }], "sn": "LogInWithReadPermissions", "rt": $n[0].Void, "p": [$n[2].IEnumerable$1(System.String), Function] }, { "a": 2, "n": "LogOut", "is": true, "t": 8, "sn": "LogOut", "rt": $n[0].Void }, { "a": 2, "n": "LogPurchase", "is": true, "t": 8, "pi": [{ "n": "logPurchase", "pt": $n[0].Decimal, "ps": 0 }, { "n": "currency", "pt": $n[0].String, "ps": 1 }, { "n": "parameters", "pt": $n[2].Dictionary$2(System.String, System.Object), "ps": 2 }], "sn": "LogPurchase", "rt": $n[0].Void, "p": [$n[0].Decimal, $n[0].String, $n[2].Dictionary$2(System.String, System.Object)] }, { "a": 2, "n": "LogPurchase", "is": true, "t": 8, "pi": [{ "n": "logPurchase", "pt": $n[0].Single, "ps": 0 }, { "n": "currency", "pt": $n[0].String, "ps": 1 }, { "n": "parameters", "pt": $n[2].Dictionary$2(System.String, System.Object), "ps": 2 }], "sn": "LogPurchase$1", "rt": $n[0].Void, "p": [$n[0].Single, $n[0].String, $n[2].Dictionary$2(System.String, System.Object)] }, { "a": 2, "n": "ShareLink", "is": true, "t": 8, "pi": [{ "n": "contentURL", "pt": $n[0].Uri, "ps": 0 }, { "n": "contentTitle", "pt": $n[0].String, "ps": 1 }, { "n": "contentDescription", "pt": $n[0].String, "ps": 2 }, { "n": "photoURL", "pt": $n[0].Uri, "ps": 3 }, { "n": "callback", "pt": Function, "ps": 4 }], "sn": "ShareLink", "rt": $n[0].Void, "p": [$n[0].Uri, $n[0].String, $n[0].String, $n[0].Uri, Function] }, { "a": 2, "n": "AppId", "is": true, "t": 16, "rt": $n[0].String, "g": { "a": 2, "n": "get_AppId", "t": 8, "rt": $n[0].String, "fg": "AppId", "is": true }, "fn": "AppId" }, { "a": 2, "n": "ClientToken", "is": true, "t": 16, "rt": $n[0].String, "g": { "a": 2, "n": "get_ClientToken", "t": 8, "rt": $n[0].String, "fg": "ClientToken", "is": true }, "fn": "ClientToken" }, { "a": 4, "n": "FacebookDomain", "is": true, "t": 16, "rt": $n[0].String, "g": { "a": 4, "n": "get_FacebookDomain", "t": 8, "rt": $n[0].String, "fg": "FacebookDomain", "is": true }, "fn": "FacebookDomain" }, { "a": 4, "n": "FacebookImpl", "is": true, "t": 16, "rt": $n[8].IFacebook, "g": { "a": 4, "n": "get_FacebookImpl", "t": 8, "rt": $n[8].IFacebook, "fg": "FacebookImpl", "is": true }, "fn": "FacebookImpl" }, { "a": 2, "n": "GraphApiVersion", "is": true, "t": 16, "rt": $n[0].String, "g": { "a": 2, "n": "get_GraphApiVersion", "t": 8, "rt": $n[0].String, "fg": "GraphApiVersion", "is": true }, "s": { "a": 2, "n": "set_GraphApiVersion", "t": 8, "p": [$n[0].String], "rt": $n[0].Void, "fs": "GraphApiVersion", "is": true }, "fn": "GraphApiVersion" }, { "a": 2, "n": "IsInitialized", "is": true, "t": 16, "rt": $n[0].Boolean, "g": { "a": 2, "n": "get_IsInitialized", "t": 8, "rt": $n[0].Boolean, "fg": "IsInitialized", "is": true, "box": function($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString); } }, "fn": "IsInitialized" }, { "a": 2, "n": "IsLoggedIn", "is": true, "t": 16, "rt": $n[0].Boolean, "g": { "a": 2, "n": "get_IsLoggedIn", "t": 8, "rt": $n[0].Boolean, "fg": "IsLoggedIn", "is": true, "box": function($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString); } }, "fn": "IsLoggedIn" }, { "a": 2, "n": "LimitAppEventUsage", "is": true, "t": 16, "rt": $n[0].Boolean, "g": { "a": 2, "n": "get_LimitAppEventUsage", "t": 8, "rt": $n[0].Boolean, "fg": "LimitAppEventUsage", "is": true, "box": function($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString); } }, "s": { "a": 2, "n": "set_LimitAppEventUsage", "t": 8, "p": [$n[0].Boolean], "rt": $n[0].Void, "fs": "LimitAppEventUsage", "is": true }, "fn": "LimitAppEventUsage" }, { "a": 1, "backing": true, "n": "<GraphApiVersion>k__BackingField", "is": true, "t": 4, "rt": $n[0].String, "sn": "GraphApiVersion" }, { "a": 1, "backing": true, "n": "<LimitAppEventUsage>k__BackingField", "is": true, "t": 4, "rt": $n[0].Boolean, "sn": "LimitAppEventUsage", "box": function($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString); } }] }; }, $n);
    /*Facebook.Unity.FB end.*/

    /*Facebook.Unity.FB+Canvas start.*/
    $m("Facebook.Unity.FB.Canvas", function() { return { "td": $n[8].FB, "att": 1048578, "a": 2, "m": [{ "a": 2, "isSynthetic": true, "n": ".ctor", "t": 1, "sn": "ctor" }, { "a": 2, "n": "Pay", "is": true, "t": 8, "pi": [{ "n": "product", "pt": $n[0].String, "ps": 0 }, { "n": "action", "pt": $n[0].String, "ps": 1 }, { "n": "quantity", "pt": $n[0].Int32, "ps": 2 }, { "n": "quantityMin", "pt": $n[0].Nullable$1(System.Int32), "ps": 3 }, { "n": "quantityMax", "pt": $n[0].Nullable$1(System.Int32), "ps": 4 }, { "n": "requestId", "pt": $n[0].String, "ps": 5 }, { "n": "pricepointId", "pt": $n[0].String, "ps": 6 }, { "n": "testCurrency", "pt": $n[0].String, "ps": 7 }, { "n": "callback", "pt": Function, "ps": 8 }], "sn": "Pay", "rt": $n[0].Void, "p": [$n[0].String, $n[0].String, $n[0].Int32, $n[0].Nullable$1(System.Int32), $n[0].Nullable$1(System.Int32), $n[0].String, $n[0].String, $n[0].String, Function] }, { "a": 2, "n": "PayWithProductId", "is": true, "t": 8, "pi": [{ "n": "productId", "pt": $n[0].String, "ps": 0 }, { "n": "action", "pt": $n[0].String, "ps": 1 }, { "n": "developerPayload", "pt": $n[0].String, "ps": 2 }, { "n": "testCurrency", "pt": $n[0].String, "ps": 3 }, { "n": "callback", "pt": Function, "ps": 4 }], "sn": "PayWithProductId$1", "rt": $n[0].Void, "p": [$n[0].String, $n[0].String, $n[0].String, $n[0].String, Function] }, { "a": 2, "n": "PayWithProductId", "is": true, "t": 8, "pi": [{ "n": "productId", "pt": $n[0].String, "ps": 0 }, { "n": "action", "pt": $n[0].String, "ps": 1 }, { "n": "quantity", "pt": $n[0].Int32, "ps": 2 }, { "n": "quantityMin", "pt": $n[0].Nullable$1(System.Int32), "ps": 3 }, { "n": "quantityMax", "pt": $n[0].Nullable$1(System.Int32), "ps": 4 }, { "n": "requestId", "pt": $n[0].String, "ps": 5 }, { "n": "pricepointId", "pt": $n[0].String, "ps": 6 }, { "n": "testCurrency", "pt": $n[0].String, "ps": 7 }, { "n": "callback", "pt": Function, "ps": 8 }], "sn": "PayWithProductId", "rt": $n[0].Void, "p": [$n[0].String, $n[0].String, $n[0].Int32, $n[0].Nullable$1(System.Int32), $n[0].Nullable$1(System.Int32), $n[0].String, $n[0].String, $n[0].String, Function] }, { "a": 4, "n": "FacebookPayImpl", "is": true, "t": 16, "rt": $n[8].IPayFacebook, "g": { "a": 4, "n": "get_FacebookPayImpl", "t": 8, "rt": $n[8].IPayFacebook, "fg": "FacebookPayImpl", "is": true }, "fn": "FacebookPayImpl" }] }; }, $n);
    /*Facebook.Unity.FB+Canvas end.*/

    /*Facebook.Unity.FB+Mobile start.*/
    $m("Facebook.Unity.FB.Mobile", function() { return { "td": $n[8].FB, "att": 1048578, "a": 2, "m": [{ "a": 2, "isSynthetic": true, "n": ".ctor", "t": 1, "sn": "ctor" }, { "a": 2, "n": "CurrentAuthenticationToken", "is": true, "t": 8, "sn": "CurrentAuthenticationToken", "rt": $n[8].AuthenticationToken }, { "a": 2, "n": "CurrentProfile", "is": true, "t": 8, "sn": "CurrentProfile", "rt": $n[8].Profile }, { "a": 2, "n": "FetchDeferredAppLinkData", "is": true, "t": 8, "pi": [{ "n": "callback", "pt": Function, "ps": 0 }], "sn": "FetchDeferredAppLinkData", "rt": $n[0].Void, "p": [Function] }, { "a": 2, "n": "IsImplicitPurchaseLoggingEnabled", "is": true, "t": 8, "sn": "IsImplicitPurchaseLoggingEnabled", "rt": $n[0].Boolean, "box": function($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString); } }, { "a": 2, "n": "LoginWithTrackingPreference", "is": true, "t": 8, "pi": [{ "n": "loginTracking", "pt": $n[8].LoginTracking, "ps": 0 }, { "n": "permissions", "pt": $n[2].IEnumerable$1(System.String), "ps": 1 }, { "n": "nonce", "pt": $n[0].String, "ps": 2 }, { "n": "callback", "pt": Function, "ps": 3 }], "sn": "LoginWithTrackingPreference", "rt": $n[0].Void, "p": [$n[8].LoginTracking, $n[2].IEnumerable$1(System.String), $n[0].String, Function] }, { "a": 2, "n": "RefreshCurrentAccessToken", "is": true, "t": 8, "pi": [{ "n": "callback", "pt": Function, "ps": 0 }], "sn": "RefreshCurrentAccessToken", "rt": $n[0].Void, "p": [Function] }, { "a": 2, "n": "SetAdvertiserIDCollectionEnabled", "is": true, "t": 8, "pi": [{ "n": "advertiserIDCollectionEnabled", "pt": $n[0].Boolean, "ps": 0 }], "sn": "SetAdvertiserIDCollectionEnabled", "rt": $n[0].Void, "p": [$n[0].Boolean] }, { "a": 2, "n": "SetAdvertiserTrackingEnabled", "is": true, "t": 8, "pi": [{ "n": "advertiserTrackingEnabled", "pt": $n[0].Boolean, "ps": 0 }], "sn": "SetAdvertiserTrackingEnabled", "rt": $n[0].Boolean, "p": [$n[0].Boolean], "box": function($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString); } }, { "a": 2, "n": "SetAutoLogAppEventsEnabled", "is": true, "t": 8, "pi": [{ "n": "autoLogAppEventsEnabled", "pt": $n[0].Boolean, "ps": 0 }], "sn": "SetAutoLogAppEventsEnabled", "rt": $n[0].Void, "p": [$n[0].Boolean] }, { "a": 2, "n": "SetDataProcessingOptions", "is": true, "t": 8, "pi": [{ "n": "options", "pt": $n[2].IEnumerable$1(System.String), "ps": 0 }], "sn": "SetDataProcessingOptions", "rt": $n[0].Void, "p": [$n[2].IEnumerable$1(System.String)] }, { "a": 2, "n": "SetDataProcessingOptions", "is": true, "t": 8, "pi": [{ "n": "options", "pt": $n[2].IEnumerable$1(System.String), "ps": 0 }, { "n": "country", "pt": $n[0].Int32, "ps": 1 }, { "n": "state", "pt": $n[0].Int32, "ps": 2 }], "sn": "SetDataProcessingOptions$1", "rt": $n[0].Void, "p": [$n[2].IEnumerable$1(System.String), $n[0].Int32, $n[0].Int32] }, { "a": 2, "n": "SetPushNotificationsDeviceTokenString", "is": true, "t": 8, "pi": [{ "n": "token", "pt": $n[0].String, "ps": 0 }], "sn": "SetPushNotificationsDeviceTokenString", "rt": $n[0].Void, "p": [$n[0].String] }, { "a": 2, "n": "UpdateUserProperties", "is": true, "t": 8, "pi": [{ "n": "parameters", "pt": $n[2].Dictionary$2(System.String, System.String), "ps": 0 }], "sn": "UpdateUserProperties", "rt": $n[0].Void, "p": [$n[2].Dictionary$2(System.String, System.String)] }, { "a": 4, "n": "MobileFacebookImpl", "is": true, "t": 16, "rt": $n[9].IMobileFacebook, "g": { "a": 4, "n": "get_MobileFacebookImpl", "t": 8, "rt": $n[9].IMobileFacebook, "fg": "MobileFacebookImpl", "is": true }, "fn": "MobileFacebookImpl" }, { "a": 2, "n": "ShareDialogMode", "is": true, "t": 16, "rt": $n[8].ShareDialogMode, "g": { "a": 2, "n": "get_ShareDialogMode", "t": 8, "rt": $n[8].ShareDialogMode, "fg": "ShareDialogMode", "is": true, "box": function($v) { return Bridge.box($v, Facebook.Unity.ShareDialogMode, System.Enum.toStringFn(Facebook.Unity.ShareDialogMode)); } }, "s": { "a": 2, "n": "set_ShareDialogMode", "t": 8, "p": [$n[8].ShareDialogMode], "rt": $n[0].Void, "fs": "ShareDialogMode", "is": true }, "fn": "ShareDialogMode" }, { "a": 2, "n": "UserID", "is": true, "t": 16, "rt": $n[0].String, "g": { "a": 2, "n": "get_UserID", "t": 8, "rt": $n[0].String, "fg": "UserID", "is": true }, "s": { "a": 2, "n": "set_UserID", "t": 8, "p": [$n[0].String], "rt": $n[0].Void, "fs": "UserID", "is": true }, "fn": "UserID" }, { "a": 1, "backing": true, "n": "<ShareDialogMode>k__BackingField", "is": true, "t": 4, "rt": $n[8].ShareDialogMode, "sn": "ShareDialogMode", "box": function($v) { return Bridge.box($v, Facebook.Unity.ShareDialogMode, System.Enum.toStringFn(Facebook.Unity.ShareDialogMode)); } }, { "a": 1, "backing": true, "n": "<UserID>k__BackingField", "is": true, "t": 4, "rt": $n[0].String, "sn": "UserID" }] }; }, $n);
    /*Facebook.Unity.FB+Mobile end.*/

    /*Facebook.Unity.FB+Android start.*/
    $m("Facebook.Unity.FB.Android", function() { return { "td": $n[8].FB, "att": 1048578, "a": 2, "m": [{ "a": 2, "isSynthetic": true, "n": ".ctor", "t": 1, "sn": "ctor" }, { "a": 2, "n": "RetrieveLoginStatus", "is": true, "t": 8, "pi": [{ "n": "callback", "pt": Function, "ps": 0 }], "sn": "RetrieveLoginStatus", "rt": $n[0].Void, "p": [Function] }, { "a": 2, "n": "KeyHash", "is": true, "t": 16, "rt": $n[0].String, "g": { "a": 2, "n": "get_KeyHash", "t": 8, "rt": $n[0].String, "fg": "KeyHash", "is": true }, "fn": "KeyHash" }] }; }, $n);
    /*Facebook.Unity.FB+Android end.*/

    /*Facebook.Unity.FB+Gameroom start.*/
    $m("Facebook.Unity.FB.Gameroom", function() { return { "td": $n[8].FB, "att": 1048578, "a": 2, "m": [{ "a": 2, "isSynthetic": true, "n": ".ctor", "t": 1, "sn": "ctor" }, { "a": 2, "n": "HasLicense", "is": true, "t": 8, "pi": [{ "n": "callback", "pt": Function, "ps": 0 }], "sn": "HasLicense", "rt": $n[0].Void, "p": [Function] }, { "a": 2, "n": "PayPremium", "is": true, "t": 8, "pi": [{ "n": "callback", "pt": Function, "ps": 0 }], "sn": "PayPremium", "rt": $n[0].Void, "p": [Function] }, { "a": 4, "n": "GameroomFacebookImpl", "is": true, "t": 16, "rt": $n[10].IGameroomFacebook, "g": { "a": 4, "n": "get_GameroomFacebookImpl", "t": 8, "rt": $n[10].IGameroomFacebook, "fg": "GameroomFacebookImpl", "is": true }, "fn": "GameroomFacebookImpl" }] }; }, $n);
    /*Facebook.Unity.FB+Gameroom end.*/

    /*Facebook.Unity.FB+CompiledFacebookLoader start.*/
    $m("Facebook.Unity.FB.CompiledFacebookLoader", function() { return { "td": $n[8].FB, "att": 1048706, "a": 2, "m": [{ "a": 3, "isSynthetic": true, "n": ".ctor", "t": 1, "sn": "ctor" }, { "a": 2, "n": "Start", "t": 8, "sn": "Start", "rt": $n[0].Void }, { "ab": true, "a": 4, "n": "FBGameObject", "t": 16, "rt": $n[8].FacebookGameObject, "g": { "ab": true, "a": 4, "n": "get_FBGameObject", "t": 8, "rt": $n[8].FacebookGameObject, "fg": "FBGameObject" }, "fn": "FBGameObject" }, { "a": 1, "backing": true, "n": "<FBGameObject>k__BackingField", "t": 4, "rt": $n[8].FacebookGameObject, "sn": "FBGameObject" }] }; }, $n);
    /*Facebook.Unity.FB+CompiledFacebookLoader end.*/

    /*Facebook.Unity.FBGamingServices start.*/
    $m("Facebook.Unity.FBGamingServices", function() { return { "att": 1048577, "a": 2, "m": [{ "a": 2, "isSynthetic": true, "n": ".ctor", "t": 1, "sn": "ctor" }, { "a": 2, "n": "ConsumePurchase", "is": true, "t": 8, "pi": [{ "n": "purchaseToken", "pt": $n[0].String, "ps": 0 }, { "n": "callback", "pt": Function, "ps": 1 }], "sn": "ConsumePurchase", "rt": $n[0].Void, "p": [$n[0].String, Function] }, { "a": 2, "n": "GetCatalog", "is": true, "t": 8, "pi": [{ "n": "callback", "pt": Function, "ps": 0 }], "sn": "GetCatalog", "rt": $n[0].Void, "p": [Function] }, { "a": 2, "n": "GetPayload", "is": true, "t": 8, "pi": [{ "n": "callback", "pt": Function, "ps": 0 }], "sn": "GetPayload", "rt": $n[0].Void, "p": [Function] }, { "a": 2, "n": "GetPurchases", "is": true, "t": 8, "pi": [{ "n": "callback", "pt": Function, "ps": 0 }], "sn": "GetPurchases", "rt": $n[0].Void, "p": [Function] }, { "a": 2, "n": "InitCloudGame", "is": true, "t": 8, "pi": [{ "n": "callback", "pt": Function, "ps": 0 }], "sn": "InitCloudGame", "rt": $n[0].Void, "p": [Function] }, { "a": 2, "n": "LoadInterstitialAd", "is": true, "t": 8, "pi": [{ "n": "placementID", "pt": $n[0].String, "ps": 0 }, { "n": "callback", "pt": Function, "ps": 1 }], "sn": "LoadInterstitialAd", "rt": $n[0].Void, "p": [$n[0].String, Function] }, { "a": 2, "n": "LoadRewardedVideo", "is": true, "t": 8, "pi": [{ "n": "placementID", "pt": $n[0].String, "ps": 0 }, { "n": "callback", "pt": Function, "ps": 1 }], "sn": "LoadRewardedVideo", "rt": $n[0].Void, "p": [$n[0].String, Function] }, { "a": 2, "n": "OnIAPReady", "is": true, "t": 8, "pi": [{ "n": "callback", "pt": Function, "ps": 0 }], "sn": "OnIAPReady", "rt": $n[0].Void, "p": [Function] }, { "a": 2, "n": "OpenAppStore", "is": true, "t": 8, "pi": [{ "n": "callback", "pt": Function, "ps": 0 }], "sn": "OpenAppStore", "rt": $n[0].Void, "p": [Function] }, { "a": 2, "n": "OpenFriendFinderDialog", "is": true, "t": 8, "pi": [{ "n": "callback", "pt": Function, "ps": 0 }], "sn": "OpenFriendFinderDialog", "rt": $n[0].Void, "p": [Function] }, { "a": 2, "n": "PostSessionScore", "is": true, "t": 8, "pi": [{ "n": "score", "pt": $n[0].Int32, "ps": 0 }, { "n": "callback", "pt": Function, "ps": 1 }], "sn": "PostSessionScore", "rt": $n[0].Void, "p": [$n[0].Int32, Function] }, { "a": 2, "n": "Purchase", "is": true, "t": 8, "pi": [{ "n": "productID", "pt": $n[0].String, "ps": 0 }, { "n": "callback", "pt": Function, "ps": 1 }, { "n": "developerPayload", "pt": $n[0].String, "ps": 2 }], "sn": "Purchase", "rt": $n[0].Void, "p": [$n[0].String, Function, $n[0].String] }, { "a": 2, "n": "ScheduleAppToUserNotification", "is": true, "t": 8, "pi": [{ "n": "title", "pt": $n[0].String, "ps": 0 }, { "n": "body", "pt": $n[0].String, "ps": 1 }, { "n": "media", "pt": $n[0].Uri, "ps": 2 }, { "n": "timeInterval", "pt": $n[0].Int32, "ps": 3 }, { "n": "payload", "pt": $n[0].String, "ps": 4 }, { "n": "callback", "pt": Function, "ps": 5 }], "sn": "ScheduleAppToUserNotification", "rt": $n[0].Void, "p": [$n[0].String, $n[0].String, $n[0].Uri, $n[0].Int32, $n[0].String, Function] }, { "a": 2, "n": "ShowInterstitialAd", "is": true, "t": 8, "pi": [{ "n": "placementID", "pt": $n[0].String, "ps": 0 }, { "n": "callback", "pt": Function, "ps": 1 }], "sn": "ShowInterstitialAd", "rt": $n[0].Void, "p": [$n[0].String, Function] }, { "a": 2, "n": "ShowRewardedVideo", "is": true, "t": 8, "pi": [{ "n": "placementID", "pt": $n[0].String, "ps": 0 }, { "n": "callback", "pt": Function, "ps": 1 }], "sn": "ShowRewardedVideo", "rt": $n[0].Void, "p": [$n[0].String, Function] }, { "a": 2, "n": "UploadImageToMediaLibrary", "is": true, "t": 8, "pi": [{ "n": "caption", "pt": $n[0].String, "ps": 0 }, { "n": "imageUri", "pt": $n[0].Uri, "ps": 1 }, { "n": "shouldLaunchMediaDialog", "pt": $n[0].Boolean, "ps": 2 }, { "n": "callback", "pt": Function, "ps": 3 }], "sn": "UploadImageToMediaLibrary", "rt": $n[0].Void, "p": [$n[0].String, $n[0].Uri, $n[0].Boolean, Function] }, { "a": 2, "n": "UploadVideoToMediaLibrary", "is": true, "t": 8, "pi": [{ "n": "caption", "pt": $n[0].String, "ps": 0 }, { "n": "videoUri", "pt": $n[0].Uri, "ps": 1 }, { "n": "callback", "pt": Function, "ps": 2 }], "sn": "UploadVideoToMediaLibrary", "rt": $n[0].Void, "p": [$n[0].String, $n[0].Uri, Function] }, { "a": 4, "n": "MobileFacebookImpl", "is": true, "t": 16, "rt": $n[9].IMobileFacebook, "g": { "a": 4, "n": "get_MobileFacebookImpl", "t": 8, "rt": $n[9].IMobileFacebook, "fg": "MobileFacebookImpl", "is": true }, "fn": "MobileFacebookImpl" }] }; }, $n);
    /*Facebook.Unity.FBGamingServices end.*/

    /*Facebook.Unity.FBSDKCodelessPathComponent start.*/
    $m("Facebook.Unity.FBSDKCodelessPathComponent", function() { return { "att": 1048577, "a": 2, "m": [{ "a": 2, "n": ".ctor", "t": 1, "p": [$n[2].Dictionary$2(System.String, System.Object)], "pi": [{ "n": "dict", "pt": $n[2].Dictionary$2(System.String, System.Object), "ps": 0 }], "sn": "ctor" }, { "a": 2, "n": "className", "t": 16, "rt": $n[0].String, "g": { "a": 2, "n": "get_className", "t": 8, "rt": $n[0].String, "fg": "className" }, "s": { "a": 2, "n": "set_className", "t": 8, "p": [$n[0].String], "rt": $n[0].Void, "fs": "className" }, "fn": "className" }, { "a": 2, "n": "desc", "t": 16, "rt": $n[0].String, "g": { "a": 2, "n": "get_desc", "t": 8, "rt": $n[0].String, "fg": "desc" }, "s": { "a": 2, "n": "set_desc", "t": 8, "p": [$n[0].String], "rt": $n[0].Void, "fs": "desc" }, "fn": "desc" }, { "a": 2, "n": "hint", "t": 16, "rt": $n[0].String, "g": { "a": 2, "n": "get_hint", "t": 8, "rt": $n[0].String, "fg": "hint" }, "s": { "a": 2, "n": "set_hint", "t": 8, "p": [$n[0].String], "rt": $n[0].Void, "fs": "hint" }, "fn": "hint" }, { "a": 2, "n": "index", "t": 16, "rt": $n[0].Int64, "g": { "a": 2, "n": "get_index", "t": 8, "rt": $n[0].Int64, "fg": "index" }, "s": { "a": 2, "n": "set_index", "t": 8, "p": [$n[0].Int64], "rt": $n[0].Void, "fs": "index" }, "fn": "index" }, { "a": 2, "n": "matchBitmask", "t": 16, "rt": $n[0].Int64, "g": { "a": 2, "n": "get_matchBitmask", "t": 8, "rt": $n[0].Int64, "fg": "matchBitmask" }, "s": { "a": 2, "n": "set_matchBitmask", "t": 8, "p": [$n[0].Int64], "rt": $n[0].Void, "fs": "matchBitmask" }, "fn": "matchBitmask" }, { "a": 2, "n": "row", "t": 16, "rt": $n[0].Int64, "g": { "a": 2, "n": "get_row", "t": 8, "rt": $n[0].Int64, "fg": "row" }, "s": { "a": 2, "n": "set_row", "t": 8, "p": [$n[0].Int64], "rt": $n[0].Void, "fs": "row" }, "fn": "row" }, { "a": 2, "n": "section", "t": 16, "rt": $n[0].Int64, "g": { "a": 2, "n": "get_section", "t": 8, "rt": $n[0].Int64, "fg": "section" }, "s": { "a": 2, "n": "set_section", "t": 8, "p": [$n[0].Int64], "rt": $n[0].Void, "fs": "section" }, "fn": "section" }, { "a": 2, "n": "tag", "t": 16, "rt": $n[0].String, "g": { "a": 2, "n": "get_tag", "t": 8, "rt": $n[0].String, "fg": "tag" }, "s": { "a": 2, "n": "set_tag", "t": 8, "p": [$n[0].String], "rt": $n[0].Void, "fs": "tag" }, "fn": "tag" }, { "a": 2, "n": "text", "t": 16, "rt": $n[0].String, "g": { "a": 2, "n": "get_text", "t": 8, "rt": $n[0].String, "fg": "text" }, "s": { "a": 2, "n": "set_text", "t": 8, "p": [$n[0].String], "rt": $n[0].Void, "fs": "text" }, "fn": "text" }, { "a": 1, "backing": true, "n": "<className>k__BackingField", "t": 4, "rt": $n[0].String, "sn": "className" }, { "a": 1, "backing": true, "n": "<desc>k__BackingField", "t": 4, "rt": $n[0].String, "sn": "desc" }, { "a": 1, "backing": true, "n": "<hint>k__BackingField", "t": 4, "rt": $n[0].String, "sn": "hint" }, { "a": 1, "backing": true, "n": "<index>k__BackingField", "t": 4, "rt": $n[0].Int64, "sn": "index" }, { "a": 1, "backing": true, "n": "<matchBitmask>k__BackingField", "t": 4, "rt": $n[0].Int64, "sn": "matchBitmask" }, { "a": 1, "backing": true, "n": "<row>k__BackingField", "t": 4, "rt": $n[0].Int64, "sn": "row" }, { "a": 1, "backing": true, "n": "<section>k__BackingField", "t": 4, "rt": $n[0].Int64, "sn": "section" }, { "a": 1, "backing": true, "n": "<tag>k__BackingField", "t": 4, "rt": $n[0].String, "sn": "tag" }, { "a": 1, "backing": true, "n": "<text>k__BackingField", "t": 4, "rt": $n[0].String, "sn": "text" }] }; }, $n);
    /*Facebook.Unity.FBSDKCodelessPathComponent end.*/

    /*Facebook.Unity.FBSDKEventBinding start.*/
    $m("Facebook.Unity.FBSDKEventBinding", function() { return { "att": 1048577, "a": 2, "m": [{ "a": 2, "n": ".ctor", "t": 1, "p": [$n[2].Dictionary$2(System.String, System.Object)], "pi": [{ "n": "dict", "pt": $n[2].Dictionary$2(System.String, System.Object), "ps": 0 }], "sn": "ctor" }, { "a": 2, "n": "appVersion", "t": 16, "rt": $n[0].String, "g": { "a": 2, "n": "get_appVersion", "t": 8, "rt": $n[0].String, "fg": "appVersion" }, "s": { "a": 2, "n": "set_appVersion", "t": 8, "p": [$n[0].String], "rt": $n[0].Void, "fs": "appVersion" }, "fn": "appVersion" }, { "a": 2, "n": "eventName", "t": 16, "rt": $n[0].String, "g": { "a": 2, "n": "get_eventName", "t": 8, "rt": $n[0].String, "fg": "eventName" }, "s": { "a": 2, "n": "set_eventName", "t": 8, "p": [$n[0].String], "rt": $n[0].Void, "fs": "eventName" }, "fn": "eventName" }, { "a": 2, "n": "eventType", "t": 16, "rt": $n[0].String, "g": { "a": 2, "n": "get_eventType", "t": 8, "rt": $n[0].String, "fg": "eventType" }, "s": { "a": 2, "n": "set_eventType", "t": 8, "p": [$n[0].String], "rt": $n[0].Void, "fs": "eventType" }, "fn": "eventType" }, { "a": 2, "n": "parameters", "t": 16, "rt": $n[2].List$1(System.String), "g": { "a": 2, "n": "get_parameters", "t": 8, "rt": $n[2].List$1(System.String), "fg": "parameters" }, "s": { "a": 2, "n": "set_parameters", "t": 8, "p": [$n[2].List$1(System.String)], "rt": $n[0].Void, "fs": "parameters" }, "fn": "parameters" }, { "a": 2, "n": "path", "t": 16, "rt": $n[2].List$1(Facebook.Unity.FBSDKCodelessPathComponent), "g": { "a": 2, "n": "get_path", "t": 8, "rt": $n[2].List$1(Facebook.Unity.FBSDKCodelessPathComponent), "fg": "path" }, "s": { "a": 2, "n": "set_path", "t": 8, "p": [$n[2].List$1(Facebook.Unity.FBSDKCodelessPathComponent)], "rt": $n[0].Void, "fs": "path" }, "fn": "path" }, { "a": 2, "n": "pathType", "t": 16, "rt": $n[0].String, "g": { "a": 2, "n": "get_pathType", "t": 8, "rt": $n[0].String, "fg": "pathType" }, "s": { "a": 2, "n": "set_pathType", "t": 8, "p": [$n[0].String], "rt": $n[0].Void, "fs": "pathType" }, "fn": "pathType" }, { "a": 1, "backing": true, "n": "<appVersion>k__BackingField", "t": 4, "rt": $n[0].String, "sn": "appVersion" }, { "a": 1, "backing": true, "n": "<eventName>k__BackingField", "t": 4, "rt": $n[0].String, "sn": "eventName" }, { "a": 1, "backing": true, "n": "<eventType>k__BackingField", "t": 4, "rt": $n[0].String, "sn": "eventType" }, { "a": 1, "backing": true, "n": "<parameters>k__BackingField", "t": 4, "rt": $n[2].List$1(System.String), "sn": "parameters" }, { "a": 1, "backing": true, "n": "<path>k__BackingField", "t": 4, "rt": $n[2].List$1(Facebook.Unity.FBSDKCodelessPathComponent), "sn": "path" }, { "a": 1, "backing": true, "n": "<pathType>k__BackingField", "t": 4, "rt": $n[0].String, "sn": "pathType" }] }; }, $n);
    /*Facebook.Unity.FBSDKEventBinding end.*/

    /*Facebook.Unity.FBSDKEventBindingManager start.*/
    $m("Facebook.Unity.FBSDKEventBindingManager", function() { return { "att": 1048577, "a": 2, "m": [{ "a": 2, "n": ".ctor", "t": 1, "p": [$n[2].List$1(System.Object)], "pi": [{ "n": "listDict", "pt": $n[2].List$1(System.Object), "ps": 0 }], "sn": "ctor" }, { "a": 2, "n": "eventBindings", "t": 16, "rt": $n[2].List$1(Facebook.Unity.FBSDKEventBinding), "g": { "a": 2, "n": "get_eventBindings", "t": 8, "rt": $n[2].List$1(Facebook.Unity.FBSDKEventBinding), "fg": "eventBindings" }, "s": { "a": 2, "n": "set_eventBindings", "t": 8, "p": [$n[2].List$1(Facebook.Unity.FBSDKEventBinding)], "rt": $n[0].Void, "fs": "eventBindings" }, "fn": "eventBindings" }, { "a": 1, "backing": true, "n": "<eventBindings>k__BackingField", "t": 4, "rt": $n[2].List$1(Facebook.Unity.FBSDKEventBinding), "sn": "eventBindings" }] }; }, $n);
    /*Facebook.Unity.FBSDKEventBindingManager end.*/

    /*Facebook.Unity.FBSDKViewHiearchy start.*/
    $m("Facebook.Unity.FBSDKViewHiearchy", function() { return { "att": 1048577, "a": 2, "m": [{ "a": 2, "isSynthetic": true, "n": ".ctor", "t": 1, "sn": "ctor" }, { "a": 2, "n": "CheckGameObjectMatchPath", "is": true, "t": 8, "pi": [{ "n": "go", "pt": $n[1].GameObject, "ps": 0 }, { "n": "path", "pt": $n[2].List$1(Facebook.Unity.FBSDKCodelessPathComponent), "ps": 1 }], "sn": "CheckGameObjectMatchPath", "rt": $n[0].Boolean, "p": [$n[1].GameObject, $n[2].List$1(Facebook.Unity.FBSDKCodelessPathComponent)], "box": function($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString); } }, { "a": 2, "n": "CheckPathMatchPath", "is": true, "t": 8, "pi": [{ "n": "goPath", "pt": $n[2].List$1(Facebook.Unity.FBSDKCodelessPathComponent), "ps": 0 }, { "n": "path", "pt": $n[2].List$1(Facebook.Unity.FBSDKCodelessPathComponent), "ps": 1 }], "sn": "CheckPathMatchPath", "rt": $n[0].Boolean, "p": [$n[2].List$1(Facebook.Unity.FBSDKCodelessPathComponent), $n[2].List$1(Facebook.Unity.FBSDKCodelessPathComponent)], "box": function($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString); } }, { "a": 2, "n": "GetAttribute", "is": true, "t": 8, "pi": [{ "n": "obj", "pt": $n[1].GameObject, "ps": 0 }, { "n": "parent", "pt": $n[1].GameObject, "ps": 1 }], "sn": "GetAttribute", "rt": $n[2].Dictionary$2(System.String, System.Object), "p": [$n[1].GameObject, $n[1].GameObject] }, { "a": 2, "n": "GetParent", "is": true, "t": 8, "pi": [{ "n": "go", "pt": $n[1].GameObject, "ps": 0 }], "sn": "GetParent", "rt": $n[1].GameObject, "p": [$n[1].GameObject] }, { "a": 2, "n": "GetPath", "is": true, "t": 8, "pi": [{ "n": "go", "pt": $n[1].GameObject, "ps": 0 }], "sn": "GetPath", "rt": $n[2].List$1(Facebook.Unity.FBSDKCodelessPathComponent), "p": [$n[1].GameObject] }, { "a": 2, "n": "GetPath", "is": true, "t": 8, "pi": [{ "n": "go", "pt": $n[1].GameObject, "ps": 0 }, { "n": "limit", "pt": $n[0].Int32, "ps": 1 }], "sn": "GetPath$1", "rt": $n[2].List$1(Facebook.Unity.FBSDKCodelessPathComponent), "p": [$n[1].GameObject, $n[0].Int32] }] }; }, $n);
    /*Facebook.Unity.FBSDKViewHiearchy end.*/

    /*Facebook.Unity.FBUnityUtility start.*/
    $m("Facebook.Unity.FBUnityUtility", function() { return { "att": 1048960, "a": 4, "s": true, "m": [{ "a": 2, "n": "AsyncRequestStringWrapper", "is": true, "t": 16, "rt": $n[8].IAsyncRequestStringWrapper, "g": { "a": 2, "n": "get_AsyncRequestStringWrapper", "t": 8, "rt": $n[8].IAsyncRequestStringWrapper, "fg": "AsyncRequestStringWrapper", "is": true }, "s": { "a": 2, "n": "set_AsyncRequestStringWrapper", "t": 8, "p": [$n[8].IAsyncRequestStringWrapper], "rt": $n[0].Void, "fs": "AsyncRequestStringWrapper", "is": true }, "fn": "AsyncRequestStringWrapper" }, { "a": 2, "n": "UnityDeviceIdentifier", "is": true, "t": 16, "rt": $n[0].String, "g": { "a": 2, "n": "get_UnityDeviceIdentifier", "t": 8, "rt": $n[0].String, "fg": "UnityDeviceIdentifier", "is": true }, "s": { "a": 2, "n": "set_UnityDeviceIdentifier", "t": 8, "p": [$n[0].String], "rt": $n[0].Void, "fs": "UnityDeviceIdentifier", "is": true }, "fn": "UnityDeviceIdentifier" }, { "a": 1, "backing": true, "n": "<AsyncRequestStringWrapper>k__BackingField", "is": true, "t": 4, "rt": $n[8].IAsyncRequestStringWrapper, "sn": "AsyncRequestStringWrapper" }, { "a": 1, "backing": true, "n": "<UnityDeviceIdentifier>k__BackingField", "is": true, "t": 4, "rt": $n[0].String, "sn": "UnityDeviceIdentifier" }] }; }, $n);
    /*Facebook.Unity.FBUnityUtility end.*/

    /*Facebook.Unity.GamingServicesFriendFinderResult start.*/
    $m("Facebook.Unity.GamingServicesFriendFinderResult", function() { return { "att": 1048576, "a": 4, "m": [{ "a": 2, "isSynthetic": true, "n": ".ctor", "t": 1, "sn": "ctor" }] }; }, $n);
    /*Facebook.Unity.GamingServicesFriendFinderResult end.*/

    /*Facebook.Unity.GraphResult start.*/
    $m("Facebook.Unity.GraphResult", function() { return { "att": 1048576, "a": 4, "m": [{ "a": 2, "isSynthetic": true, "n": ".ctor", "t": 1, "sn": "ctor" }, { "v": true, "a": 2, "n": "ResultList", "t": 16, "rt": $n[2].IList$1(System.Object), "g": { "v": true, "a": 2, "n": "get_ResultList", "t": 8, "rt": $n[2].IList$1(System.Object), "fg": "ResultList" }, "fn": "ResultList" }, { "v": true, "a": 2, "n": "Texture", "t": 16, "rt": $n[1].Texture2D, "g": { "v": true, "a": 2, "n": "get_Texture", "t": 8, "rt": $n[1].Texture2D, "fg": "Texture" }, "fn": "Texture" }] }; }, $n);
    /*Facebook.Unity.GraphResult end.*/

    /*Facebook.Unity.GroupCreateResult start.*/
    $m("Facebook.Unity.GroupCreateResult", function() { return { "att": 1048576, "a": 4, "m": [{ "a": 2, "n": ".ctor", "t": 1, "p": [$n[8].ResultContainer], "pi": [{ "n": "resultContainer", "pt": $n[8].ResultContainer, "ps": 0 }], "sn": "ctor" }, { "ov": true, "a": 2, "n": "ToString", "t": 8, "sn": "toString", "rt": $n[0].String }, { "v": true, "a": 2, "n": "GroupId", "t": 16, "rt": $n[0].String, "g": { "v": true, "a": 2, "n": "get_GroupId", "t": 8, "rt": $n[0].String, "fg": "GroupId" }, "fn": "GroupId" }, { "a": 4, "n": "IDKey", "is": true, "t": 4, "rt": $n[0].String, "sn": "IDKey" }] }; }, $n);
    /*Facebook.Unity.GroupCreateResult end.*/

    /*Facebook.Unity.GroupJoinResult start.*/
    $m("Facebook.Unity.GroupJoinResult", function() { return { "att": 1048576, "a": 4, "m": [{ "a": 2, "isSynthetic": true, "n": ".ctor", "t": 1, "sn": "ctor" }] }; }, $n);
    /*Facebook.Unity.GroupJoinResult end.*/

    /*Facebook.Unity.HasLicenseResult start.*/
    $m("Facebook.Unity.HasLicenseResult", function() { return { "att": 1048576, "a": 4, "m": [{ "a": 2, "n": ".ctor", "t": 1, "p": [$n[8].ResultContainer], "pi": [{ "n": "resultContainer", "pt": $n[8].ResultContainer, "ps": 0 }], "sn": "ctor" }, { "v": true, "a": 2, "n": "HasLicense", "t": 16, "rt": $n[0].Boolean, "g": { "v": true, "a": 2, "n": "get_HasLicense", "t": 8, "rt": $n[0].Boolean, "fg": "HasLicense", "box": function($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString); } }, "fn": "HasLicense" }] }; }, $n);
    /*Facebook.Unity.HasLicenseResult end.*/

    /*Facebook.Unity.HttpMethod start.*/
    $m("Facebook.Unity.HttpMethod", function() { return { "att": 257, "a": 2, "m": [{ "a": 2, "isSynthetic": true, "n": ".ctor", "t": 1, "sn": "ctor" }, { "a": 2, "n": "DELETE", "is": true, "t": 4, "rt": $n[8].HttpMethod, "sn": "DELETE", "box": function($v) { return Bridge.box($v, Facebook.Unity.HttpMethod, System.Enum.toStringFn(Facebook.Unity.HttpMethod)); } }, { "a": 2, "n": "GET", "is": true, "t": 4, "rt": $n[8].HttpMethod, "sn": "GET", "box": function($v) { return Bridge.box($v, Facebook.Unity.HttpMethod, System.Enum.toStringFn(Facebook.Unity.HttpMethod)); } }, { "a": 2, "n": "POST", "is": true, "t": 4, "rt": $n[8].HttpMethod, "sn": "POST", "box": function($v) { return Bridge.box($v, Facebook.Unity.HttpMethod, System.Enum.toStringFn(Facebook.Unity.HttpMethod)); } }] }; }, $n);
    /*Facebook.Unity.HttpMethod end.*/

    /*Facebook.Unity.IAccessTokenRefreshResult start.*/
    $m("Facebook.Unity.IAccessTokenRefreshResult", function() { return { "att": 161, "a": 2, "m": [{ "ab": true, "a": 2, "n": "AccessToken", "t": 16, "rt": $n[8].AccessToken, "g": { "ab": true, "a": 2, "n": "get_AccessToken", "t": 8, "rt": $n[8].AccessToken, "fg": "Facebook$Unity$IAccessTokenRefreshResult$AccessToken" }, "fn": "Facebook$Unity$IAccessTokenRefreshResult$AccessToken" }, { "a": 1, "backing": true, "n": "<AccessToken>k__BackingField", "t": 4, "rt": $n[8].AccessToken, "sn": "Facebook$Unity$IAccessTokenRefreshResult$AccessToken" }] }; }, $n);
    /*Facebook.Unity.IAccessTokenRefreshResult end.*/

    /*Facebook.Unity.IAppLinkResult start.*/
    $m("Facebook.Unity.IAppLinkResult", function() { return { "att": 161, "a": 2, "m": [{ "ab": true, "a": 2, "n": "Extras", "t": 16, "rt": $n[2].IDictionary$2(System.String, System.Object), "g": { "ab": true, "a": 2, "n": "get_Extras", "t": 8, "rt": $n[2].IDictionary$2(System.String, System.Object), "fg": "Facebook$Unity$IAppLinkResult$Extras" }, "fn": "Facebook$Unity$IAppLinkResult$Extras" }, { "ab": true, "a": 2, "n": "Ref", "t": 16, "rt": $n[0].String, "g": { "ab": true, "a": 2, "n": "get_Ref", "t": 8, "rt": $n[0].String, "fg": "Facebook$Unity$IAppLinkResult$Ref" }, "fn": "Facebook$Unity$IAppLinkResult$Ref" }, { "ab": true, "a": 2, "n": "TargetUrl", "t": 16, "rt": $n[0].String, "g": { "ab": true, "a": 2, "n": "get_TargetUrl", "t": 8, "rt": $n[0].String, "fg": "Facebook$Unity$IAppLinkResult$TargetUrl" }, "fn": "Facebook$Unity$IAppLinkResult$TargetUrl" }, { "ab": true, "a": 2, "n": "Url", "t": 16, "rt": $n[0].String, "g": { "ab": true, "a": 2, "n": "get_Url", "t": 8, "rt": $n[0].String, "fg": "Facebook$Unity$IAppLinkResult$Url" }, "fn": "Facebook$Unity$IAppLinkResult$Url" }, { "a": 1, "backing": true, "n": "<Extras>k__BackingField", "t": 4, "rt": $n[2].IDictionary$2(System.String, System.Object), "sn": "Facebook$Unity$IAppLinkResult$Extras" }, { "a": 1, "backing": true, "n": "<Ref>k__BackingField", "t": 4, "rt": $n[0].String, "sn": "Facebook$Unity$IAppLinkResult$Ref" }, { "a": 1, "backing": true, "n": "<TargetUrl>k__BackingField", "t": 4, "rt": $n[0].String, "sn": "Facebook$Unity$IAppLinkResult$TargetUrl" }, { "a": 1, "backing": true, "n": "<Url>k__BackingField", "t": 4, "rt": $n[0].String, "sn": "Facebook$Unity$IAppLinkResult$Url" }] }; }, $n);
    /*Facebook.Unity.IAppLinkResult end.*/

    /*Facebook.Unity.IAppRequestResult start.*/
    $m("Facebook.Unity.IAppRequestResult", function() { return { "att": 161, "a": 2, "m": [{ "ab": true, "a": 2, "n": "RequestID", "t": 16, "rt": $n[0].String, "g": { "ab": true, "a": 2, "n": "get_RequestID", "t": 8, "rt": $n[0].String, "fg": "Facebook$Unity$IAppRequestResult$RequestID" }, "fn": "Facebook$Unity$IAppRequestResult$RequestID" }, { "ab": true, "a": 2, "n": "To", "t": 16, "rt": $n[2].IEnumerable$1(System.String), "g": { "ab": true, "a": 2, "n": "get_To", "t": 8, "rt": $n[2].IEnumerable$1(System.String), "fg": "Facebook$Unity$IAppRequestResult$To" }, "fn": "Facebook$Unity$IAppRequestResult$To" }, { "a": 1, "backing": true, "n": "<RequestID>k__BackingField", "t": 4, "rt": $n[0].String, "sn": "Facebook$Unity$IAppRequestResult$RequestID" }, { "a": 1, "backing": true, "n": "<To>k__BackingField", "t": 4, "rt": $n[2].IEnumerable$1(System.String), "sn": "Facebook$Unity$IAppRequestResult$To" }] }; }, $n);
    /*Facebook.Unity.IAppRequestResult end.*/

    /*Facebook.Unity.IAPReadyResult start.*/
    $m("Facebook.Unity.IAPReadyResult", function() { return { "att": 1048576, "a": 4, "m": [{ "a": 2, "isSynthetic": true, "n": ".ctor", "t": 1, "sn": "ctor" }] }; }, $n);
    /*Facebook.Unity.IAPReadyResult end.*/

    /*Facebook.Unity.IAsyncRequestStringWrapper start.*/
    $m("Facebook.Unity.IAsyncRequestStringWrapper", function() { return { "att": 160, "a": 4, "m": [{ "ab": true, "a": 2, "n": "Request", "t": 8, "pi": [{ "n": "url", "pt": $n[0].Uri, "ps": 0 }, { "n": "method", "pt": $n[8].HttpMethod, "ps": 1 }, { "n": "formData", "pt": $n[2].IDictionary$2(System.String, System.String), "ps": 2 }, { "n": "callback", "pt": Function, "ps": 3 }], "sn": "Facebook$Unity$IAsyncRequestStringWrapper$Request", "rt": $n[0].Void, "p": [$n[0].Uri, $n[8].HttpMethod, $n[2].IDictionary$2(System.String, System.String), Function] }, { "ab": true, "a": 2, "n": "Request", "t": 8, "pi": [{ "n": "url", "pt": $n[0].Uri, "ps": 0 }, { "n": "method", "pt": $n[8].HttpMethod, "ps": 1 }, { "n": "query", "pt": $n[1].WWWForm, "ps": 2 }, { "n": "callback", "pt": Function, "ps": 3 }], "sn": "Facebook$Unity$IAsyncRequestStringWrapper$Request$1", "rt": $n[0].Void, "p": [$n[0].Uri, $n[8].HttpMethod, $n[1].WWWForm, Function] }] }; }, $n);
    /*Facebook.Unity.IAsyncRequestStringWrapper end.*/

    /*Facebook.Unity.ICatalogResult start.*/
    $m("Facebook.Unity.ICatalogResult", function() { return { "att": 161, "a": 2, "m": [{ "ab": true, "a": 2, "n": "Products", "t": 16, "rt": $n[2].IList$1(Facebook.Unity.Product), "g": { "ab": true, "a": 2, "n": "get_Products", "t": 8, "rt": $n[2].IList$1(Facebook.Unity.Product), "fg": "Facebook$Unity$ICatalogResult$Products" }, "fn": "Facebook$Unity$ICatalogResult$Products" }, { "a": 1, "backing": true, "n": "<Products>k__BackingField", "t": 4, "rt": $n[2].IList$1(Facebook.Unity.Product), "sn": "Facebook$Unity$ICatalogResult$Products" }] }; }, $n);
    /*Facebook.Unity.ICatalogResult end.*/

    /*Facebook.Unity.IConsumePurchaseResult start.*/
    $m("Facebook.Unity.IConsumePurchaseResult", function() { return { "att": 161, "a": 2 }; }, $n);
    /*Facebook.Unity.IConsumePurchaseResult end.*/

    /*Facebook.Unity.IFacebook start.*/
    $m("Facebook.Unity.IFacebook", function() { return { "att": 160, "a": 4, "m": [{ "ab": true, "a": 2, "n": "API", "t": 8, "pi": [{ "n": "query", "pt": $n[0].String, "ps": 0 }, { "n": "method", "pt": $n[8].HttpMethod, "ps": 1 }, { "n": "formData", "pt": $n[2].IDictionary$2(System.String, System.String), "ps": 2 }, { "n": "callback", "pt": Function, "ps": 3 }], "sn": "Facebook$Unity$IFacebook$API", "rt": $n[0].Void, "p": [$n[0].String, $n[8].HttpMethod, $n[2].IDictionary$2(System.String, System.String), Function] }, { "ab": true, "a": 2, "n": "API", "t": 8, "pi": [{ "n": "query", "pt": $n[0].String, "ps": 0 }, { "n": "method", "pt": $n[8].HttpMethod, "ps": 1 }, { "n": "formData", "pt": $n[1].WWWForm, "ps": 2 }, { "n": "callback", "pt": Function, "ps": 3 }], "sn": "Facebook$Unity$IFacebook$API$1", "rt": $n[0].Void, "p": [$n[0].String, $n[8].HttpMethod, $n[1].WWWForm, Function] }, { "ab": true, "a": 2, "n": "ActivateApp", "t": 8, "pi": [{ "n": "appId", "pt": $n[0].String, "ps": 0 }], "sn": "Facebook$Unity$IFacebook$ActivateApp", "rt": $n[0].Void, "p": [$n[0].String] }, { "ab": true, "a": 2, "n": "AppEventsLogEvent", "t": 8, "pi": [{ "n": "logEvent", "pt": $n[0].String, "ps": 0 }, { "n": "valueToSum", "pt": $n[0].Nullable$1(System.Single), "ps": 1 }, { "n": "parameters", "pt": $n[2].Dictionary$2(System.String, System.Object), "ps": 2 }], "sn": "Facebook$Unity$IFacebook$AppEventsLogEvent", "rt": $n[0].Void, "p": [$n[0].String, $n[0].Nullable$1(System.Single), $n[2].Dictionary$2(System.String, System.Object)] }, { "ab": true, "a": 2, "n": "AppEventsLogPurchase", "t": 8, "pi": [{ "n": "logPurchase", "pt": $n[0].Single, "ps": 0 }, { "n": "currency", "pt": $n[0].String, "ps": 1 }, { "n": "parameters", "pt": $n[2].Dictionary$2(System.String, System.Object), "ps": 2 }], "sn": "Facebook$Unity$IFacebook$AppEventsLogPurchase", "rt": $n[0].Void, "p": [$n[0].Single, $n[0].String, $n[2].Dictionary$2(System.String, System.Object)] }, { "ab": true, "a": 2, "n": "AppRequest", "t": 8, "pi": [{ "n": "message", "pt": $n[0].String, "ps": 0 }, { "n": "to", "pt": $n[2].IEnumerable$1(System.String), "ps": 1 }, { "n": "filters", "pt": $n[2].IEnumerable$1(System.Object), "ps": 2 }, { "n": "excludeIds", "pt": $n[2].IEnumerable$1(System.String), "ps": 3 }, { "n": "maxRecipients", "pt": $n[0].Nullable$1(System.Int32), "ps": 4 }, { "n": "data", "pt": $n[0].String, "ps": 5 }, { "n": "title", "pt": $n[0].String, "ps": 6 }, { "n": "callback", "pt": Function, "ps": 7 }], "sn": "Facebook$Unity$IFacebook$AppRequest", "rt": $n[0].Void, "p": [$n[0].String, $n[2].IEnumerable$1(System.String), $n[2].IEnumerable$1(System.Object), $n[2].IEnumerable$1(System.String), $n[0].Nullable$1(System.Int32), $n[0].String, $n[0].String, Function] }, { "ab": true, "a": 2, "n": "AppRequest", "t": 8, "pi": [{ "n": "message", "pt": $n[0].String, "ps": 0 }, { "n": "actionType", "pt": $n[0].Nullable$1(Facebook.Unity.OGActionType), "ps": 1 }, { "n": "objectId", "pt": $n[0].String, "ps": 2 }, { "n": "to", "pt": $n[2].IEnumerable$1(System.String), "ps": 3 }, { "n": "filters", "pt": $n[2].IEnumerable$1(System.Object), "ps": 4 }, { "n": "excludeIds", "pt": $n[2].IEnumerable$1(System.String), "ps": 5 }, { "n": "maxRecipients", "pt": $n[0].Nullable$1(System.Int32), "ps": 6 }, { "n": "data", "pt": $n[0].String, "ps": 7 }, { "n": "title", "pt": $n[0].String, "ps": 8 }, { "n": "callback", "pt": Function, "ps": 9 }], "sn": "Facebook$Unity$IFacebook$AppRequest$1", "rt": $n[0].Void, "p": [$n[0].String, $n[0].Nullable$1(Facebook.Unity.OGActionType), $n[0].String, $n[2].IEnumerable$1(System.String), $n[2].IEnumerable$1(System.Object), $n[2].IEnumerable$1(System.String), $n[0].Nullable$1(System.Int32), $n[0].String, $n[0].String, Function] }, { "ab": true, "a": 2, "n": "FeedShare", "t": 8, "pi": [{ "n": "toId", "pt": $n[0].String, "ps": 0 }, { "n": "link", "pt": $n[0].Uri, "ps": 1 }, { "n": "linkName", "pt": $n[0].String, "ps": 2 }, { "n": "linkCaption", "pt": $n[0].String, "ps": 3 }, { "n": "linkDescription", "pt": $n[0].String, "ps": 4 }, { "n": "picture", "pt": $n[0].Uri, "ps": 5 }, { "n": "mediaSource", "pt": $n[0].String, "ps": 6 }, { "n": "callback", "pt": Function, "ps": 7 }], "sn": "Facebook$Unity$IFacebook$FeedShare", "rt": $n[0].Void, "p": [$n[0].String, $n[0].Uri, $n[0].String, $n[0].String, $n[0].String, $n[0].Uri, $n[0].String, Function] }, { "ab": true, "a": 2, "n": "GetAppLink", "t": 8, "pi": [{ "n": "callback", "pt": Function, "ps": 0 }], "sn": "Facebook$Unity$IFacebook$GetAppLink", "rt": $n[0].Void, "p": [Function] }, { "ab": true, "a": 2, "n": "LogInWithPublishPermissions", "t": 8, "pi": [{ "n": "permissions", "pt": $n[2].IEnumerable$1(System.String), "ps": 0 }, { "n": "callback", "pt": Function, "ps": 1 }], "sn": "Facebook$Unity$IFacebook$LogInWithPublishPermissions", "rt": $n[0].Void, "p": [$n[2].IEnumerable$1(System.String), Function] }, { "ab": true, "a": 2, "n": "LogInWithReadPermissions", "t": 8, "pi": [{ "n": "permissions", "pt": $n[2].IEnumerable$1(System.String), "ps": 0 }, { "n": "callback", "pt": Function, "ps": 1 }], "sn": "Facebook$Unity$IFacebook$LogInWithReadPermissions", "rt": $n[0].Void, "p": [$n[2].IEnumerable$1(System.String), Function] }, { "ab": true, "a": 2, "n": "LogOut", "t": 8, "sn": "Facebook$Unity$IFacebook$LogOut", "rt": $n[0].Void }, { "ab": true, "a": 2, "n": "ShareLink", "t": 8, "pi": [{ "n": "contentURL", "pt": $n[0].Uri, "ps": 0 }, { "n": "contentTitle", "pt": $n[0].String, "ps": 1 }, { "n": "contentDescription", "pt": $n[0].String, "ps": 2 }, { "n": "photoURL", "pt": $n[0].Uri, "ps": 3 }, { "n": "callback", "pt": Function, "ps": 4 }], "sn": "Facebook$Unity$IFacebook$ShareLink", "rt": $n[0].Void, "p": [$n[0].Uri, $n[0].String, $n[0].String, $n[0].Uri, Function] }, { "ab": true, "a": 2, "n": "Initialized", "t": 16, "rt": $n[0].Boolean, "g": { "ab": true, "a": 2, "n": "get_Initialized", "t": 8, "rt": $n[0].Boolean, "fg": "Facebook$Unity$IFacebook$Initialized", "box": function($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString); } }, "fn": "Facebook$Unity$IFacebook$Initialized" }, { "ab": true, "a": 2, "n": "LimitEventUsage", "t": 16, "rt": $n[0].Boolean, "g": { "ab": true, "a": 2, "n": "get_LimitEventUsage", "t": 8, "rt": $n[0].Boolean, "fg": "Facebook$Unity$IFacebook$LimitEventUsage", "box": function($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString); } }, "s": { "ab": true, "a": 2, "n": "set_LimitEventUsage", "t": 8, "p": [$n[0].Boolean], "rt": $n[0].Void, "fs": "Facebook$Unity$IFacebook$LimitEventUsage" }, "fn": "Facebook$Unity$IFacebook$LimitEventUsage" }, { "ab": true, "a": 2, "n": "LoggedIn", "t": 16, "rt": $n[0].Boolean, "g": { "ab": true, "a": 2, "n": "get_LoggedIn", "t": 8, "rt": $n[0].Boolean, "fg": "Facebook$Unity$IFacebook$LoggedIn", "box": function($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString); } }, "fn": "Facebook$Unity$IFacebook$LoggedIn" }, { "ab": true, "a": 2, "n": "SDKName", "t": 16, "rt": $n[0].String, "g": { "ab": true, "a": 2, "n": "get_SDKName", "t": 8, "rt": $n[0].String, "fg": "Facebook$Unity$IFacebook$SDKName" }, "fn": "Facebook$Unity$IFacebook$SDKName" }, { "ab": true, "a": 2, "n": "SDKUserAgent", "t": 16, "rt": $n[0].String, "g": { "ab": true, "a": 2, "n": "get_SDKUserAgent", "t": 8, "rt": $n[0].String, "fg": "Facebook$Unity$IFacebook$SDKUserAgent" }, "fn": "Facebook$Unity$IFacebook$SDKUserAgent" }, { "ab": true, "a": 2, "n": "SDKVersion", "t": 16, "rt": $n[0].String, "g": { "ab": true, "a": 2, "n": "get_SDKVersion", "t": 8, "rt": $n[0].String, "fg": "Facebook$Unity$IFacebook$SDKVersion" }, "fn": "Facebook$Unity$IFacebook$SDKVersion" }, { "a": 1, "backing": true, "n": "<Initialized>k__BackingField", "t": 4, "rt": $n[0].Boolean, "sn": "Facebook$Unity$IFacebook$Initialized", "box": function($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString); } }, { "a": 1, "backing": true, "n": "<LimitEventUsage>k__BackingField", "t": 4, "rt": $n[0].Boolean, "sn": "Facebook$Unity$IFacebook$LimitEventUsage", "box": function($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString); } }, { "a": 1, "backing": true, "n": "<LoggedIn>k__BackingField", "t": 4, "rt": $n[0].Boolean, "sn": "Facebook$Unity$IFacebook$LoggedIn", "box": function($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString); } }, { "a": 1, "backing": true, "n": "<SDKName>k__BackingField", "t": 4, "rt": $n[0].String, "sn": "Facebook$Unity$IFacebook$SDKName" }, { "a": 1, "backing": true, "n": "<SDKUserAgent>k__BackingField", "t": 4, "rt": $n[0].String, "sn": "Facebook$Unity$IFacebook$SDKUserAgent" }, { "a": 1, "backing": true, "n": "<SDKVersion>k__BackingField", "t": 4, "rt": $n[0].String, "sn": "Facebook$Unity$IFacebook$SDKVersion" }] }; }, $n);
    /*Facebook.Unity.IFacebook end.*/

    /*Facebook.Unity.IFacebookCallbackHandler start.*/
    $m("Facebook.Unity.IFacebookCallbackHandler", function() { return { "att": 160, "a": 4, "m": [{ "ab": true, "a": 2, "n": "OnAppRequestsComplete", "t": 8, "pi": [{ "n": "message", "pt": $n[0].String, "ps": 0 }], "sn": "Facebook$Unity$IFacebookCallbackHandler$OnAppRequestsComplete", "rt": $n[0].Void, "p": [$n[0].String] }, { "ab": true, "a": 2, "n": "OnGetAppLinkComplete", "t": 8, "pi": [{ "n": "message", "pt": $n[0].String, "ps": 0 }], "sn": "Facebook$Unity$IFacebookCallbackHandler$OnGetAppLinkComplete", "rt": $n[0].Void, "p": [$n[0].String] }, { "ab": true, "a": 2, "n": "OnInitComplete", "t": 8, "pi": [{ "n": "message", "pt": $n[0].String, "ps": 0 }], "sn": "Facebook$Unity$IFacebookCallbackHandler$OnInitComplete", "rt": $n[0].Void, "p": [$n[0].String] }, { "ab": true, "a": 2, "n": "OnLoginComplete", "t": 8, "pi": [{ "n": "message", "pt": $n[0].String, "ps": 0 }], "sn": "Facebook$Unity$IFacebookCallbackHandler$OnLoginComplete", "rt": $n[0].Void, "p": [$n[0].String] }, { "ab": true, "a": 2, "n": "OnLogoutComplete", "t": 8, "pi": [{ "n": "message", "pt": $n[0].String, "ps": 0 }], "sn": "Facebook$Unity$IFacebookCallbackHandler$OnLogoutComplete", "rt": $n[0].Void, "p": [$n[0].String] }, { "ab": true, "a": 2, "n": "OnShareLinkComplete", "t": 8, "pi": [{ "n": "message", "pt": $n[0].String, "ps": 0 }], "sn": "Facebook$Unity$IFacebookCallbackHandler$OnShareLinkComplete", "rt": $n[0].Void, "p": [$n[0].String] }] }; }, $n);
    /*Facebook.Unity.IFacebookCallbackHandler end.*/

    /*Facebook.Unity.IFacebookImplementation start.*/
    $m("Facebook.Unity.IFacebookImplementation", function() { return { "att": 160, "a": 4 }; }, $n);
    /*Facebook.Unity.IFacebookImplementation end.*/

    /*Facebook.Unity.IFacebookLogger start.*/
    $m("Facebook.Unity.IFacebookLogger", function() { return { "att": 160, "a": 4, "m": [{ "ab": true, "a": 2, "n": "Error", "t": 8, "pi": [{ "n": "msg", "pt": $n[0].String, "ps": 0 }], "sn": "Facebook$Unity$IFacebookLogger$Error", "rt": $n[0].Void, "p": [$n[0].String] }, { "ab": true, "a": 2, "n": "Info", "t": 8, "pi": [{ "n": "msg", "pt": $n[0].String, "ps": 0 }], "sn": "Facebook$Unity$IFacebookLogger$Info", "rt": $n[0].Void, "p": [$n[0].String] }, { "ab": true, "a": 2, "n": "Log", "t": 8, "pi": [{ "n": "msg", "pt": $n[0].String, "ps": 0 }], "sn": "Facebook$Unity$IFacebookLogger$Log", "rt": $n[0].Void, "p": [$n[0].String] }, { "ab": true, "a": 2, "n": "Warn", "t": 8, "pi": [{ "n": "msg", "pt": $n[0].String, "ps": 0 }], "sn": "Facebook$Unity$IFacebookLogger$Warn", "rt": $n[0].Void, "p": [$n[0].String] }] }; }, $n);
    /*Facebook.Unity.IFacebookLogger end.*/

    /*Facebook.Unity.IFacebookResultHandler start.*/
    $m("Facebook.Unity.IFacebookResultHandler", function() { return { "att": 160, "a": 4, "m": [{ "ab": true, "a": 2, "n": "OnAppRequestsComplete", "t": 8, "pi": [{ "n": "resultContainer", "pt": $n[8].ResultContainer, "ps": 0 }], "sn": "Facebook$Unity$IFacebookResultHandler$OnAppRequestsComplete", "rt": $n[0].Void, "p": [$n[8].ResultContainer] }, { "ab": true, "a": 2, "n": "OnGetAppLinkComplete", "t": 8, "pi": [{ "n": "resultContainer", "pt": $n[8].ResultContainer, "ps": 0 }], "sn": "Facebook$Unity$IFacebookResultHandler$OnGetAppLinkComplete", "rt": $n[0].Void, "p": [$n[8].ResultContainer] }, { "ab": true, "a": 2, "n": "OnInitComplete", "t": 8, "pi": [{ "n": "resultContainer", "pt": $n[8].ResultContainer, "ps": 0 }], "sn": "Facebook$Unity$IFacebookResultHandler$OnInitComplete", "rt": $n[0].Void, "p": [$n[8].ResultContainer] }, { "ab": true, "a": 2, "n": "OnLoginComplete", "t": 8, "pi": [{ "n": "resultContainer", "pt": $n[8].ResultContainer, "ps": 0 }], "sn": "Facebook$Unity$IFacebookResultHandler$OnLoginComplete", "rt": $n[0].Void, "p": [$n[8].ResultContainer] }, { "ab": true, "a": 2, "n": "OnLogoutComplete", "t": 8, "pi": [{ "n": "resultContainer", "pt": $n[8].ResultContainer, "ps": 0 }], "sn": "Facebook$Unity$IFacebookResultHandler$OnLogoutComplete", "rt": $n[0].Void, "p": [$n[8].ResultContainer] }, { "ab": true, "a": 2, "n": "OnShareLinkComplete", "t": 8, "pi": [{ "n": "resultContainer", "pt": $n[8].ResultContainer, "ps": 0 }], "sn": "Facebook$Unity$IFacebookResultHandler$OnShareLinkComplete", "rt": $n[0].Void, "p": [$n[8].ResultContainer] }] }; }, $n);
    /*Facebook.Unity.IFacebookResultHandler end.*/

    /*Facebook.Unity.IFacebookScheduler start.*/
    $m("Facebook.Unity.IFacebookScheduler", function() { return { "att": 160, "a": 4, "m": [{ "ab": true, "a": 2, "n": "Schedule", "t": 8, "pi": [{ "n": "action", "pt": Function, "ps": 0 }, { "n": "delay", "pt": $n[0].Int64, "ps": 1 }], "sn": "Facebook$Unity$IFacebookScheduler$Schedule", "rt": $n[0].Void, "p": [Function, $n[0].Int64] }] }; }, $n);
    /*Facebook.Unity.IFacebookScheduler end.*/

    /*Facebook.Unity.IFacebookSchedulerFactory start.*/
    $m("Facebook.Unity.IFacebookSchedulerFactory", function() { return { "att": 160, "a": 4, "m": [{ "ab": true, "a": 2, "n": "GetInstance", "t": 8, "sn": "Facebook$Unity$IFacebookSchedulerFactory$GetInstance", "rt": $n[8].IFacebookScheduler }] }; }, $n);
    /*Facebook.Unity.IFacebookSchedulerFactory end.*/

    /*Facebook.Unity.IGamingServicesFriendFinderResult start.*/
    $m("Facebook.Unity.IGamingServicesFriendFinderResult", function() { return { "att": 161, "a": 2 }; }, $n);
    /*Facebook.Unity.IGamingServicesFriendFinderResult end.*/

    /*Facebook.Unity.IGraphResult start.*/
    $m("Facebook.Unity.IGraphResult", function() { return { "att": 161, "a": 2, "m": [{ "ab": true, "a": 2, "n": "ResultList", "t": 16, "rt": $n[2].IList$1(System.Object), "g": { "ab": true, "a": 2, "n": "get_ResultList", "t": 8, "rt": $n[2].IList$1(System.Object), "fg": "Facebook$Unity$IGraphResult$ResultList" }, "fn": "Facebook$Unity$IGraphResult$ResultList" }, { "ab": true, "a": 2, "n": "Texture", "t": 16, "rt": $n[1].Texture2D, "g": { "ab": true, "a": 2, "n": "get_Texture", "t": 8, "rt": $n[1].Texture2D, "fg": "Facebook$Unity$IGraphResult$Texture" }, "fn": "Facebook$Unity$IGraphResult$Texture" }, { "a": 1, "backing": true, "n": "<ResultList>k__BackingField", "t": 4, "rt": $n[2].IList$1(System.Object), "sn": "Facebook$Unity$IGraphResult$ResultList" }, { "a": 1, "backing": true, "n": "<Texture>k__BackingField", "t": 4, "rt": $n[1].Texture2D, "sn": "Facebook$Unity$IGraphResult$Texture" }] }; }, $n);
    /*Facebook.Unity.IGraphResult end.*/

    /*Facebook.Unity.IGroupCreateResult start.*/
    $m("Facebook.Unity.IGroupCreateResult", function() { return { "att": 161, "a": 2, "m": [{ "ab": true, "a": 2, "n": "GroupId", "t": 16, "rt": $n[0].String, "g": { "ab": true, "a": 2, "n": "get_GroupId", "t": 8, "rt": $n[0].String, "fg": "Facebook$Unity$IGroupCreateResult$GroupId" }, "fn": "Facebook$Unity$IGroupCreateResult$GroupId" }, { "a": 1, "backing": true, "n": "<GroupId>k__BackingField", "t": 4, "rt": $n[0].String, "sn": "Facebook$Unity$IGroupCreateResult$GroupId" }] }; }, $n);
    /*Facebook.Unity.IGroupCreateResult end.*/

    /*Facebook.Unity.IGroupJoinResult start.*/
    $m("Facebook.Unity.IGroupJoinResult", function() { return { "att": 161, "a": 2 }; }, $n);
    /*Facebook.Unity.IGroupJoinResult end.*/

    /*Facebook.Unity.IHasLicenseResult start.*/
    $m("Facebook.Unity.IHasLicenseResult", function() { return { "att": 161, "a": 2, "m": [{ "ab": true, "a": 2, "n": "HasLicense", "t": 16, "rt": $n[0].Boolean, "g": { "ab": true, "a": 2, "n": "get_HasLicense", "t": 8, "rt": $n[0].Boolean, "fg": "Facebook$Unity$IHasLicenseResult$HasLicense", "box": function($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString); } }, "fn": "Facebook$Unity$IHasLicenseResult$HasLicense" }, { "a": 1, "backing": true, "n": "<HasLicense>k__BackingField", "t": 4, "rt": $n[0].Boolean, "sn": "Facebook$Unity$IHasLicenseResult$HasLicense", "box": function($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString); } }] }; }, $n);
    /*Facebook.Unity.IHasLicenseResult end.*/

    /*Facebook.Unity.IIAPReadyResult start.*/
    $m("Facebook.Unity.IIAPReadyResult", function() { return { "att": 161, "a": 2 }; }, $n);
    /*Facebook.Unity.IIAPReadyResult end.*/

    /*Facebook.Unity.IInitCloudGameResult start.*/
    $m("Facebook.Unity.IInitCloudGameResult", function() { return { "att": 161, "a": 2 }; }, $n);
    /*Facebook.Unity.IInitCloudGameResult end.*/

    /*Facebook.Unity.IInternalResult start.*/
    $m("Facebook.Unity.IInternalResult", function() { return { "att": 160, "a": 4, "m": [{ "ab": true, "a": 2, "n": "CallbackId", "t": 16, "rt": $n[0].String, "g": { "ab": true, "a": 2, "n": "get_CallbackId", "t": 8, "rt": $n[0].String, "fg": "Facebook$Unity$IInternalResult$CallbackId" }, "fn": "Facebook$Unity$IInternalResult$CallbackId" }, { "a": 1, "backing": true, "n": "<CallbackId>k__BackingField", "t": 4, "rt": $n[0].String, "sn": "Facebook$Unity$IInternalResult$CallbackId" }] }; }, $n);
    /*Facebook.Unity.IInternalResult end.*/

    /*Facebook.Unity.IInterstitialAdResult start.*/
    $m("Facebook.Unity.IInterstitialAdResult", function() { return { "att": 161, "a": 2 }; }, $n);
    /*Facebook.Unity.IInterstitialAdResult end.*/

    /*Facebook.Unity.ILoginResult start.*/
    $m("Facebook.Unity.ILoginResult", function() { return { "att": 161, "a": 2, "m": [{ "ab": true, "a": 2, "n": "AccessToken", "t": 16, "rt": $n[8].AccessToken, "g": { "ab": true, "a": 2, "n": "get_AccessToken", "t": 8, "rt": $n[8].AccessToken, "fg": "Facebook$Unity$ILoginResult$AccessToken" }, "fn": "Facebook$Unity$ILoginResult$AccessToken" }, { "ab": true, "a": 2, "n": "AuthenticationToken", "t": 16, "rt": $n[8].AuthenticationToken, "g": { "ab": true, "a": 2, "n": "get_AuthenticationToken", "t": 8, "rt": $n[8].AuthenticationToken, "fg": "Facebook$Unity$ILoginResult$AuthenticationToken" }, "fn": "Facebook$Unity$ILoginResult$AuthenticationToken" }, { "a": 1, "backing": true, "n": "<AccessToken>k__BackingField", "t": 4, "rt": $n[8].AccessToken, "sn": "Facebook$Unity$ILoginResult$AccessToken" }, { "a": 1, "backing": true, "n": "<AuthenticationToken>k__BackingField", "t": 4, "rt": $n[8].AuthenticationToken, "sn": "Facebook$Unity$ILoginResult$AuthenticationToken" }] }; }, $n);
    /*Facebook.Unity.ILoginResult end.*/

    /*Facebook.Unity.ILoginStatusResult start.*/
    $m("Facebook.Unity.ILoginStatusResult", function() { return { "att": 161, "a": 2, "m": [{ "ab": true, "a": 2, "n": "Failed", "t": 16, "rt": $n[0].Boolean, "g": { "ab": true, "a": 2, "n": "get_Failed", "t": 8, "rt": $n[0].Boolean, "fg": "Facebook$Unity$ILoginStatusResult$Failed", "box": function($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString); } }, "fn": "Facebook$Unity$ILoginStatusResult$Failed" }, { "a": 1, "backing": true, "n": "<Failed>k__BackingField", "t": 4, "rt": $n[0].Boolean, "sn": "Facebook$Unity$ILoginStatusResult$Failed", "box": function($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString); } }] }; }, $n);
    /*Facebook.Unity.ILoginStatusResult end.*/

    /*Facebook.Unity.IMediaUploadResult start.*/
    $m("Facebook.Unity.IMediaUploadResult", function() { return { "att": 161, "a": 2, "m": [{ "ab": true, "a": 2, "n": "MediaId", "t": 16, "rt": $n[0].String, "g": { "ab": true, "a": 2, "n": "get_MediaId", "t": 8, "rt": $n[0].String, "fg": "Facebook$Unity$IMediaUploadResult$MediaId" }, "fn": "Facebook$Unity$IMediaUploadResult$MediaId" }, { "a": 1, "backing": true, "n": "<MediaId>k__BackingField", "t": 4, "rt": $n[0].String, "sn": "Facebook$Unity$IMediaUploadResult$MediaId" }] }; }, $n);
    /*Facebook.Unity.IMediaUploadResult end.*/

    /*Facebook.Unity.InitCloudGameResult start.*/
    $m("Facebook.Unity.InitCloudGameResult", function() { return { "att": 1048576, "a": 4, "m": [{ "a": 2, "isSynthetic": true, "n": ".ctor", "t": 1, "sn": "ctor" }] }; }, $n);
    /*Facebook.Unity.InitCloudGameResult end.*/

    /*Facebook.Unity.InterstitialAdResult start.*/
    $m("Facebook.Unity.InterstitialAdResult", function() { return { "att": 1048576, "a": 4, "m": [{ "a": 2, "isSynthetic": true, "n": ".ctor", "t": 1, "sn": "ctor" }] }; }, $n);
    /*Facebook.Unity.InterstitialAdResult end.*/

    /*Facebook.Unity.IOpenAppStoreResult start.*/
    $m("Facebook.Unity.IOpenAppStoreResult", function() { return { "att": 161, "a": 2 }; }, $n);
    /*Facebook.Unity.IOpenAppStoreResult end.*/

    /*Facebook.Unity.IPayFacebook start.*/
    $m("Facebook.Unity.IPayFacebook", function() { return { "att": 160, "a": 4, "m": [{ "ab": true, "a": 2, "n": "Pay", "t": 8, "pi": [{ "n": "product", "pt": $n[0].String, "ps": 0 }, { "n": "action", "pt": $n[0].String, "ps": 1 }, { "n": "quantity", "pt": $n[0].Int32, "ps": 2 }, { "n": "quantityMin", "pt": $n[0].Nullable$1(System.Int32), "ps": 3 }, { "n": "quantityMax", "pt": $n[0].Nullable$1(System.Int32), "ps": 4 }, { "n": "requestId", "pt": $n[0].String, "ps": 5 }, { "n": "pricepointId", "pt": $n[0].String, "ps": 6 }, { "n": "testCurrency", "pt": $n[0].String, "ps": 7 }, { "n": "callback", "pt": Function, "ps": 8 }], "sn": "Facebook$Unity$IPayFacebook$Pay", "rt": $n[0].Void, "p": [$n[0].String, $n[0].String, $n[0].Int32, $n[0].Nullable$1(System.Int32), $n[0].Nullable$1(System.Int32), $n[0].String, $n[0].String, $n[0].String, Function] }, { "ab": true, "a": 2, "n": "PayWithProductId", "t": 8, "pi": [{ "n": "productId", "pt": $n[0].String, "ps": 0 }, { "n": "action", "pt": $n[0].String, "ps": 1 }, { "n": "developerPayload", "pt": $n[0].String, "ps": 2 }, { "n": "testCurrency", "pt": $n[0].String, "ps": 3 }, { "n": "callback", "pt": Function, "ps": 4 }], "sn": "Facebook$Unity$IPayFacebook$PayWithProductId$1", "rt": $n[0].Void, "p": [$n[0].String, $n[0].String, $n[0].String, $n[0].String, Function] }, { "ab": true, "a": 2, "n": "PayWithProductId", "t": 8, "pi": [{ "n": "productId", "pt": $n[0].String, "ps": 0 }, { "n": "action", "pt": $n[0].String, "ps": 1 }, { "n": "quantity", "pt": $n[0].Int32, "ps": 2 }, { "n": "quantityMin", "pt": $n[0].Nullable$1(System.Int32), "ps": 3 }, { "n": "quantityMax", "pt": $n[0].Nullable$1(System.Int32), "ps": 4 }, { "n": "requestId", "pt": $n[0].String, "ps": 5 }, { "n": "pricepointId", "pt": $n[0].String, "ps": 6 }, { "n": "testCurrency", "pt": $n[0].String, "ps": 7 }, { "n": "callback", "pt": Function, "ps": 8 }], "sn": "Facebook$Unity$IPayFacebook$PayWithProductId", "rt": $n[0].Void, "p": [$n[0].String, $n[0].String, $n[0].Int32, $n[0].Nullable$1(System.Int32), $n[0].Nullable$1(System.Int32), $n[0].String, $n[0].String, $n[0].String, Function] }] }; }, $n);
    /*Facebook.Unity.IPayFacebook end.*/

    /*Facebook.Unity.IPayloadResult start.*/
    $m("Facebook.Unity.IPayloadResult", function() { return { "att": 161, "a": 2, "m": [{ "ab": true, "a": 2, "n": "Payload", "t": 16, "rt": $n[2].IDictionary$2(System.String, System.String), "g": { "ab": true, "a": 2, "n": "get_Payload", "t": 8, "rt": $n[2].IDictionary$2(System.String, System.String), "fg": "Facebook$Unity$IPayloadResult$Payload" }, "fn": "Facebook$Unity$IPayloadResult$Payload" }, { "a": 1, "backing": true, "n": "<Payload>k__BackingField", "t": 4, "rt": $n[2].IDictionary$2(System.String, System.String), "sn": "Facebook$Unity$IPayloadResult$Payload" }] }; }, $n);
    /*Facebook.Unity.IPayloadResult end.*/

    /*Facebook.Unity.IPayResult start.*/
    $m("Facebook.Unity.IPayResult", function() { return { "att": 161, "a": 2, "m": [{ "ab": true, "a": 2, "n": "ErrorCode", "t": 16, "rt": $n[0].Int64, "g": { "ab": true, "a": 2, "n": "get_ErrorCode", "t": 8, "rt": $n[0].Int64, "fg": "Facebook$Unity$IPayResult$ErrorCode" }, "fn": "Facebook$Unity$IPayResult$ErrorCode" }, { "a": 1, "backing": true, "n": "<ErrorCode>k__BackingField", "t": 4, "rt": $n[0].Int64, "sn": "Facebook$Unity$IPayResult$ErrorCode" }] }; }, $n);
    /*Facebook.Unity.IPayResult end.*/

    /*Facebook.Unity.IPurchaseResult start.*/
    $m("Facebook.Unity.IPurchaseResult", function() { return { "att": 161, "a": 2, "m": [{ "ab": true, "a": 2, "n": "Purchase", "t": 16, "rt": $n[8].Purchase, "g": { "ab": true, "a": 2, "n": "get_Purchase", "t": 8, "rt": $n[8].Purchase, "fg": "Facebook$Unity$IPurchaseResult$Purchase" }, "fn": "Facebook$Unity$IPurchaseResult$Purchase" }, { "a": 1, "backing": true, "n": "<Purchase>k__BackingField", "t": 4, "rt": $n[8].Purchase, "sn": "Facebook$Unity$IPurchaseResult$Purchase" }] }; }, $n);
    /*Facebook.Unity.IPurchaseResult end.*/

    /*Facebook.Unity.IPurchasesResult start.*/
    $m("Facebook.Unity.IPurchasesResult", function() { return { "att": 161, "a": 2, "m": [{ "ab": true, "a": 2, "n": "Purchases", "t": 16, "rt": $n[2].IList$1(Facebook.Unity.Purchase), "g": { "ab": true, "a": 2, "n": "get_Purchases", "t": 8, "rt": $n[2].IList$1(Facebook.Unity.Purchase), "fg": "Facebook$Unity$IPurchasesResult$Purchases" }, "fn": "Facebook$Unity$IPurchasesResult$Purchases" }, { "a": 1, "backing": true, "n": "<Purchases>k__BackingField", "t": 4, "rt": $n[2].IList$1(Facebook.Unity.Purchase), "sn": "Facebook$Unity$IPurchasesResult$Purchases" }] }; }, $n);
    /*Facebook.Unity.IPurchasesResult end.*/

    /*Facebook.Unity.IResult start.*/
    $m("Facebook.Unity.IResult", function() { return { "att": 161, "a": 2, "m": [{ "ab": true, "a": 2, "n": "Cancelled", "t": 16, "rt": $n[0].Boolean, "g": { "ab": true, "a": 2, "n": "get_Cancelled", "t": 8, "rt": $n[0].Boolean, "fg": "Facebook$Unity$IResult$Cancelled", "box": function($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString); } }, "fn": "Facebook$Unity$IResult$Cancelled" }, { "ab": true, "a": 2, "n": "Error", "t": 16, "rt": $n[0].String, "g": { "ab": true, "a": 2, "n": "get_Error", "t": 8, "rt": $n[0].String, "fg": "Facebook$Unity$IResult$Error" }, "fn": "Facebook$Unity$IResult$Error" }, { "ab": true, "a": 2, "n": "ErrorDictionary", "t": 16, "rt": $n[2].IDictionary$2(System.String, System.String), "g": { "ab": true, "a": 2, "n": "get_ErrorDictionary", "t": 8, "rt": $n[2].IDictionary$2(System.String, System.String), "fg": "Facebook$Unity$IResult$ErrorDictionary" }, "fn": "Facebook$Unity$IResult$ErrorDictionary" }, { "ab": true, "a": 2, "n": "RawResult", "t": 16, "rt": $n[0].String, "g": { "ab": true, "a": 2, "n": "get_RawResult", "t": 8, "rt": $n[0].String, "fg": "Facebook$Unity$IResult$RawResult" }, "fn": "Facebook$Unity$IResult$RawResult" }, { "ab": true, "a": 2, "n": "ResultDictionary", "t": 16, "rt": $n[2].IDictionary$2(System.String, System.Object), "g": { "ab": true, "a": 2, "n": "get_ResultDictionary", "t": 8, "rt": $n[2].IDictionary$2(System.String, System.Object), "fg": "Facebook$Unity$IResult$ResultDictionary" }, "fn": "Facebook$Unity$IResult$ResultDictionary" }, { "a": 1, "backing": true, "n": "<Cancelled>k__BackingField", "t": 4, "rt": $n[0].Boolean, "sn": "Facebook$Unity$IResult$Cancelled", "box": function($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString); } }, { "a": 1, "backing": true, "n": "<Error>k__BackingField", "t": 4, "rt": $n[0].String, "sn": "Facebook$Unity$IResult$Error" }, { "a": 1, "backing": true, "n": "<ErrorDictionary>k__BackingField", "t": 4, "rt": $n[2].IDictionary$2(System.String, System.String), "sn": "Facebook$Unity$IResult$ErrorDictionary" }, { "a": 1, "backing": true, "n": "<RawResult>k__BackingField", "t": 4, "rt": $n[0].String, "sn": "Facebook$Unity$IResult$RawResult" }, { "a": 1, "backing": true, "n": "<ResultDictionary>k__BackingField", "t": 4, "rt": $n[2].IDictionary$2(System.String, System.Object), "sn": "Facebook$Unity$IResult$ResultDictionary" }] }; }, $n);
    /*Facebook.Unity.IResult end.*/

    /*Facebook.Unity.IRewardedVideoResult start.*/
    $m("Facebook.Unity.IRewardedVideoResult", function() { return { "att": 161, "a": 2 }; }, $n);
    /*Facebook.Unity.IRewardedVideoResult end.*/

    /*Facebook.Unity.IScheduleAppToUserNotificationResult start.*/
    $m("Facebook.Unity.IScheduleAppToUserNotificationResult", function() { return { "att": 161, "a": 2 }; }, $n);
    /*Facebook.Unity.IScheduleAppToUserNotificationResult end.*/

    /*Facebook.Unity.ISessionScoreResult start.*/
    $m("Facebook.Unity.ISessionScoreResult", function() { return { "att": 161, "a": 2 }; }, $n);
    /*Facebook.Unity.ISessionScoreResult end.*/

    /*Facebook.Unity.IShareResult start.*/
    $m("Facebook.Unity.IShareResult", function() { return { "att": 161, "a": 2, "m": [{ "ab": true, "a": 2, "n": "PostId", "t": 16, "rt": $n[0].String, "g": { "ab": true, "a": 2, "n": "get_PostId", "t": 8, "rt": $n[0].String, "fg": "Facebook$Unity$IShareResult$PostId" }, "fn": "Facebook$Unity$IShareResult$PostId" }, { "a": 1, "backing": true, "n": "<PostId>k__BackingField", "t": 4, "rt": $n[0].String, "sn": "Facebook$Unity$IShareResult$PostId" }] }; }, $n);
    /*Facebook.Unity.IShareResult end.*/

    /*Facebook.Unity.LoginResult start.*/
    $m("Facebook.Unity.LoginResult", function() { return { "att": 1048576, "a": 4, "m": [{ "a": 2, "isSynthetic": true, "n": ".ctor", "t": 1, "sn": "ctor" }, { "ov": true, "a": 2, "n": "ToString", "t": 8, "sn": "toString", "rt": $n[0].String }, { "v": true, "a": 2, "n": "AccessToken", "t": 16, "rt": $n[8].AccessToken, "g": { "v": true, "a": 2, "n": "get_AccessToken", "t": 8, "rt": $n[8].AccessToken, "fg": "AccessToken" }, "fn": "AccessToken" }, { "v": true, "a": 2, "n": "AuthenticationToken", "t": 16, "rt": $n[8].AuthenticationToken, "g": { "v": true, "a": 2, "n": "get_AuthenticationToken", "t": 8, "rt": $n[8].AuthenticationToken, "fg": "AuthenticationToken" }, "fn": "AuthenticationToken" }, { "a": 4, "n": "AccessTokenKey", "is": true, "t": 4, "rt": $n[0].String, "sn": "AccessTokenKey", "ro": true }, { "a": 4, "n": "AuthNonce", "is": true, "t": 4, "rt": $n[0].String, "sn": "AuthNonce", "ro": true }, { "a": 4, "n": "AuthTokenString", "is": true, "t": 4, "rt": $n[0].String, "sn": "AuthTokenString", "ro": true }, { "a": 4, "n": "ExpirationTimestampKey", "is": true, "t": 4, "rt": $n[0].String, "sn": "ExpirationTimestampKey", "ro": true }, { "a": 4, "n": "GraphDomain", "is": true, "t": 4, "rt": $n[0].String, "sn": "GraphDomain", "ro": true }, { "a": 4, "n": "LastRefreshKey", "is": true, "t": 4, "rt": $n[0].String, "sn": "LastRefreshKey" }, { "a": 4, "n": "PermissionsKey", "is": true, "t": 4, "rt": $n[0].String, "sn": "PermissionsKey", "ro": true }, { "a": 4, "n": "UserIdKey", "is": true, "t": 4, "rt": $n[0].String, "sn": "UserIdKey", "ro": true }] }; }, $n);
    /*Facebook.Unity.LoginResult end.*/

    /*Facebook.Unity.LoginStatusResult start.*/
    $m("Facebook.Unity.LoginStatusResult", function() { return { "att": 1048576, "a": 4, "m": [{ "a": 2, "isSynthetic": true, "n": ".ctor", "t": 1, "sn": "ctor" }, { "ov": true, "a": 2, "n": "ToString", "t": 8, "sn": "toString", "rt": $n[0].String }, { "v": true, "a": 2, "n": "Failed", "t": 16, "rt": $n[0].Boolean, "g": { "v": true, "a": 2, "n": "get_Failed", "t": 8, "rt": $n[0].Boolean, "fg": "Failed", "box": function($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString); } }, "fn": "Failed" }, { "a": 4, "n": "FailedKey", "is": true, "t": 4, "rt": $n[0].String, "sn": "FailedKey", "ro": true }] }; }, $n);
    /*Facebook.Unity.LoginStatusResult end.*/

    /*Facebook.Unity.LoginTracking start.*/
    $m("Facebook.Unity.LoginTracking", function() { return { "att": 257, "a": 2, "m": [{ "a": 2, "isSynthetic": true, "n": ".ctor", "t": 1, "sn": "ctor" }, { "a": 2, "n": "ENABLED", "is": true, "t": 4, "rt": $n[8].LoginTracking, "sn": "ENABLED", "box": function($v) { return Bridge.box($v, Facebook.Unity.LoginTracking, System.Enum.toStringFn(Facebook.Unity.LoginTracking)); } }, { "a": 2, "n": "LIMITED", "is": true, "t": 4, "rt": $n[8].LoginTracking, "sn": "LIMITED", "box": function($v) { return Bridge.box($v, Facebook.Unity.LoginTracking, System.Enum.toStringFn(Facebook.Unity.LoginTracking)); } }] }; }, $n);
    /*Facebook.Unity.LoginTracking end.*/

    /*Facebook.Unity.MediaUploadResult start.*/
    $m("Facebook.Unity.MediaUploadResult", function() { return { "att": 1048576, "a": 4, "m": [{ "a": 2, "isSynthetic": true, "n": ".ctor", "t": 1, "sn": "ctor" }, { "ov": true, "a": 2, "n": "ToString", "t": 8, "sn": "toString", "rt": $n[0].String }, { "v": true, "a": 2, "n": "MediaId", "t": 16, "rt": $n[0].String, "g": { "v": true, "a": 2, "n": "get_MediaId", "t": 8, "rt": $n[0].String, "fg": "MediaId" }, "fn": "MediaId" }] }; }, $n);
    /*Facebook.Unity.MediaUploadResult end.*/

    /*Facebook.Unity.MethodArguments start.*/
    $m("Facebook.Unity.MethodArguments", function() { return { "att": 1048576, "a": 4, "m": [{ "a": 2, "n": ".ctor", "t": 1, "sn": "ctor" }, { "a": 2, "n": ".ctor", "t": 1, "p": [$n[8].MethodArguments], "pi": [{ "n": "methodArgs", "pt": $n[8].MethodArguments, "ps": 0 }], "sn": "$ctor1" }, { "a": 2, "n": "AddCommaSeparatedList", "t": 8, "pi": [{ "n": "argumentName", "pt": $n[0].String, "ps": 0 }, { "n": "value", "pt": $n[2].IEnumerable$1(System.String), "ps": 1 }], "sn": "AddCommaSeparatedList", "rt": $n[0].Void, "p": [$n[0].String, $n[2].IEnumerable$1(System.String)] }, { "a": 2, "n": "AddDictionary", "t": 8, "pi": [{ "n": "argumentName", "pt": $n[0].String, "ps": 0 }, { "n": "dict", "pt": $n[2].IDictionary$2(System.String, System.Object), "ps": 1 }], "sn": "AddDictionary", "rt": $n[0].Void, "p": [$n[0].String, $n[2].IDictionary$2(System.String, System.Object)] }, { "a": 2, "n": "AddList", "t": 8, "pi": [{ "n": "argumentName", "pt": $n[0].String, "ps": 0 }, { "n": "list", "pt": $n[2].IEnumerable$1(System.Object), "ps": 1 }], "tpc": 1, "tprm": ["T"], "sn": "AddList", "rt": $n[0].Void, "p": [$n[0].String, $n[2].IEnumerable$1(System.Object)] }, { "a": 2, "n": "AddNullablePrimitive", "t": 8, "pi": [{ "n": "argumentName", "pt": $n[0].String, "ps": 0 }, { "n": "nullable", "pt": $n[0].Nullable$1(System.Object), "ps": 1 }], "tpc": 1, "tprm": ["T"], "sn": "AddNullablePrimitive", "rt": $n[0].Void, "p": [$n[0].String, $n[0].Nullable$1(System.Object)] }, { "a": 2, "n": "AddPrimative", "t": 8, "pi": [{ "n": "argumentName", "pt": $n[0].String, "ps": 0 }, { "n": "value", "pt": System.Object, "ps": 1 }], "tpc": 1, "tprm": ["T"], "sn": "AddPrimative", "rt": $n[0].Void, "p": [$n[0].String, System.Object] }, { "a": 2, "n": "AddString", "t": 8, "pi": [{ "n": "argumentName", "pt": $n[0].String, "ps": 0 }, { "n": "value", "pt": $n[0].String, "ps": 1 }], "sn": "AddString", "rt": $n[0].Void, "p": [$n[0].String, $n[0].String] }, { "a": 2, "n": "AddUri", "t": 8, "pi": [{ "n": "argumentName", "pt": $n[0].String, "ps": 0 }, { "n": "uri", "pt": $n[0].Uri, "ps": 1 }], "sn": "AddUri", "rt": $n[0].Void, "p": [$n[0].String, $n[0].Uri] }, { "a": 2, "n": "ToJsonString", "t": 8, "sn": "ToJsonString", "rt": $n[0].String }] }; }, $n);
    /*Facebook.Unity.MethodArguments end.*/

    /*Facebook.Unity.MethodCall$1 start.*/
    $m("Facebook.Unity.MethodCall$1", function(T) { return { "att": 1048704, "a": 4, "m": [{ "a": 2, "n": ".ctor", "t": 1, "p": [$n[8].FacebookBase, $n[0].String], "pi": [{ "n": "facebookImpl", "pt": $n[8].FacebookBase, "ps": 0 }, { "n": "methodName", "pt": $n[0].String, "ps": 1 }], "sn": "ctor" }, { "ab": true, "a": 2, "n": "Call", "t": 8, "pi": [{ "n": "args", "pt": $n[8].MethodArguments, "ps": 0 }], "sn": "Call", "rt": $n[0].Void, "p": [$n[8].MethodArguments] }, { "a": 2, "n": "Callback", "t": 16, "rt": Function, "s": { "a": 2, "n": "set_Callback", "t": 8, "p": [Function], "rt": $n[0].Void, "fs": "Callback" }, "fn": "Callback" }, { "a": 4, "n": "FacebookImpl", "t": 16, "rt": $n[8].FacebookBase, "g": { "a": 4, "n": "get_FacebookImpl", "t": 8, "rt": $n[8].FacebookBase, "fg": "FacebookImpl" }, "fn": "FacebookImpl" }, { "a": 2, "n": "MethodName", "t": 16, "rt": $n[0].String, "g": { "a": 2, "n": "get_MethodName", "t": 8, "rt": $n[0].String, "fg": "MethodName" }, "fn": "MethodName" }, { "a": 4, "n": "Parameters", "t": 16, "rt": $n[8].MethodArguments, "g": { "a": 4, "n": "get_Parameters", "t": 8, "rt": $n[8].MethodArguments, "fg": "Parameters" }, "fn": "Parameters" }] }; }, $n);
    /*Facebook.Unity.MethodCall$1 end.*/

    /*Facebook.Unity.OGActionType start.*/
    $m("Facebook.Unity.OGActionType", function() { return { "att": 257, "a": 2, "m": [{ "a": 2, "isSynthetic": true, "n": ".ctor", "t": 1, "sn": "ctor" }, { "a": 2, "n": "ASKFOR", "is": true, "t": 4, "rt": $n[8].OGActionType, "sn": "ASKFOR", "box": function($v) { return Bridge.box($v, Facebook.Unity.OGActionType, System.Enum.toStringFn(Facebook.Unity.OGActionType)); } }, { "a": 2, "n": "SEND", "is": true, "t": 4, "rt": $n[8].OGActionType, "sn": "SEND", "box": function($v) { return Bridge.box($v, Facebook.Unity.OGActionType, System.Enum.toStringFn(Facebook.Unity.OGActionType)); } }, { "a": 2, "n": "TURN", "is": true, "t": 4, "rt": $n[8].OGActionType, "sn": "TURN", "box": function($v) { return Bridge.box($v, Facebook.Unity.OGActionType, System.Enum.toStringFn(Facebook.Unity.OGActionType)); } }] }; }, $n);
    /*Facebook.Unity.OGActionType end.*/

    /*Facebook.Unity.OpenAppStoreResult start.*/
    $m("Facebook.Unity.OpenAppStoreResult", function() { return { "att": 1048576, "a": 4, "m": [{ "a": 2, "isSynthetic": true, "n": ".ctor", "t": 1, "sn": "ctor" }] }; }, $n);
    /*Facebook.Unity.OpenAppStoreResult end.*/

    /*Facebook.Unity.PayloadResult start.*/
    $m("Facebook.Unity.PayloadResult", function() { return { "att": 1048576, "a": 4, "m": [{ "a": 2, "n": ".ctor", "t": 1, "p": [$n[8].ResultContainer], "pi": [{ "n": "resultContainer", "pt": $n[8].ResultContainer, "ps": 0 }], "sn": "ctor" }, { "ov": true, "a": 2, "n": "ToString", "t": 8, "sn": "toString", "rt": $n[0].String }, { "v": true, "a": 2, "n": "Payload", "t": 16, "rt": $n[2].IDictionary$2(System.String, System.String), "g": { "v": true, "a": 2, "n": "get_Payload", "t": 8, "rt": $n[2].IDictionary$2(System.String, System.String), "fg": "Payload" }, "fn": "Payload" }] }; }, $n);
    /*Facebook.Unity.PayloadResult end.*/

    /*Facebook.Unity.PayResult start.*/
    $m("Facebook.Unity.PayResult", function() { return { "att": 1048576, "a": 4, "m": [{ "a": 2, "isSynthetic": true, "n": ".ctor", "t": 1, "sn": "ctor" }, { "ov": true, "a": 2, "n": "ToString", "t": 8, "sn": "toString", "rt": $n[0].String }, { "v": true, "a": 2, "n": "ErrorCode", "t": 16, "rt": $n[0].Int64, "g": { "v": true, "a": 2, "n": "get_ErrorCode", "t": 8, "rt": $n[0].Int64, "fg": "ErrorCode" }, "fn": "ErrorCode" }, { "a": 4, "n": "CancelPaymentFlowCode", "is": true, "t": 4, "rt": $n[0].Int64, "sn": "CancelPaymentFlowCode" }] }; }, $n);
    /*Facebook.Unity.PayResult end.*/

    /*Facebook.Unity.Product start.*/
    $m("Facebook.Unity.Product", function() { return { "att": 1048577, "a": 2, "m": [{ "a": 2, "isSynthetic": true, "n": ".ctor", "t": 1, "sn": "ctor" }, { "ov": true, "a": 2, "n": "ToString", "t": 8, "sn": "toString", "rt": $n[0].String }, { "a": 2, "n": "Description", "t": 16, "rt": $n[0].String, "g": { "a": 2, "n": "get_Description", "t": 8, "rt": $n[0].String, "fg": "Description" }, "fn": "Description" }, { "a": 2, "n": "ImageURI", "t": 16, "rt": $n[0].String, "g": { "a": 2, "n": "get_ImageURI", "t": 8, "rt": $n[0].String, "fg": "ImageURI" }, "fn": "ImageURI" }, { "a": 2, "n": "Price", "t": 16, "rt": $n[0].String, "g": { "a": 2, "n": "get_Price", "t": 8, "rt": $n[0].String, "fg": "Price" }, "fn": "Price" }, { "a": 2, "n": "PriceCurrencyCode", "t": 16, "rt": $n[0].String, "g": { "a": 2, "n": "get_PriceCurrencyCode", "t": 8, "rt": $n[0].String, "fg": "PriceCurrencyCode" }, "fn": "PriceCurrencyCode" }, { "a": 2, "n": "ProductID", "t": 16, "rt": $n[0].String, "g": { "a": 2, "n": "get_ProductID", "t": 8, "rt": $n[0].String, "fg": "ProductID" }, "fn": "ProductID" }, { "a": 2, "n": "Title", "t": 16, "rt": $n[0].String, "g": { "a": 2, "n": "get_Title", "t": 8, "rt": $n[0].String, "fg": "Title" }, "fn": "Title" }] }; }, $n);
    /*Facebook.Unity.Product end.*/

    /*Facebook.Unity.Profile start.*/
    $m("Facebook.Unity.Profile", function() { return { "att": 1048577, "a": 2, "m": [{ "a": 2, "isSynthetic": true, "n": ".ctor", "t": 1, "sn": "ctor" }, { "ov": true, "a": 2, "n": "ToString", "t": 8, "sn": "toString", "rt": $n[0].String }, { "a": 2, "n": "Email", "t": 16, "rt": $n[0].String, "g": { "a": 2, "n": "get_Email", "t": 8, "rt": $n[0].String, "fg": "Email" }, "fn": "Email" }, { "a": 2, "n": "FirstName", "t": 16, "rt": $n[0].String, "g": { "a": 2, "n": "get_FirstName", "t": 8, "rt": $n[0].String, "fg": "FirstName" }, "fn": "FirstName" }, { "a": 2, "n": "ImageURL", "t": 16, "rt": $n[0].String, "g": { "a": 2, "n": "get_ImageURL", "t": 8, "rt": $n[0].String, "fg": "ImageURL" }, "fn": "ImageURL" }, { "a": 2, "n": "LastName", "t": 16, "rt": $n[0].String, "g": { "a": 2, "n": "get_LastName", "t": 8, "rt": $n[0].String, "fg": "LastName" }, "fn": "LastName" }, { "a": 2, "n": "LinkURL", "t": 16, "rt": $n[0].String, "g": { "a": 2, "n": "get_LinkURL", "t": 8, "rt": $n[0].String, "fg": "LinkURL" }, "fn": "LinkURL" }, { "a": 2, "n": "MiddleName", "t": 16, "rt": $n[0].String, "g": { "a": 2, "n": "get_MiddleName", "t": 8, "rt": $n[0].String, "fg": "MiddleName" }, "fn": "MiddleName" }, { "a": 2, "n": "Name", "t": 16, "rt": $n[0].String, "g": { "a": 2, "n": "get_Name", "t": 8, "rt": $n[0].String, "fg": "Name" }, "fn": "Name" }, { "a": 2, "n": "UserID", "t": 16, "rt": $n[0].String, "g": { "a": 2, "n": "get_UserID", "t": 8, "rt": $n[0].String, "fg": "UserID" }, "fn": "UserID" }] }; }, $n);
    /*Facebook.Unity.Profile end.*/

    /*Facebook.Unity.Purchase start.*/
    $m("Facebook.Unity.Purchase", function() { return { "att": 1048577, "a": 2, "m": [{ "a": 2, "isSynthetic": true, "n": ".ctor", "t": 1, "sn": "ctor" }, { "ov": true, "a": 2, "n": "ToString", "t": 8, "sn": "toString", "rt": $n[0].String }, { "a": 2, "n": "DeveloperPayload", "t": 16, "rt": $n[0].String, "g": { "a": 2, "n": "get_DeveloperPayload", "t": 8, "rt": $n[0].String, "fg": "DeveloperPayload" }, "fn": "DeveloperPayload" }, { "a": 2, "n": "IsConsumed", "t": 16, "rt": $n[0].Boolean, "g": { "a": 2, "n": "get_IsConsumed", "t": 8, "rt": $n[0].Boolean, "fg": "IsConsumed", "box": function($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString); } }, "fn": "IsConsumed" }, { "a": 2, "n": "PaymentID", "t": 16, "rt": $n[0].String, "g": { "a": 2, "n": "get_PaymentID", "t": 8, "rt": $n[0].String, "fg": "PaymentID" }, "fn": "PaymentID" }, { "a": 2, "n": "ProductID", "t": 16, "rt": $n[0].String, "g": { "a": 2, "n": "get_ProductID", "t": 8, "rt": $n[0].String, "fg": "ProductID" }, "fn": "ProductID" }, { "a": 2, "n": "PurchaseTime", "t": 16, "rt": $n[0].DateTime, "g": { "a": 2, "n": "get_PurchaseTime", "t": 8, "rt": $n[0].DateTime, "fg": "PurchaseTime", "box": function($v) { return Bridge.box($v, System.DateTime, System.DateTime.format); } }, "fn": "PurchaseTime" }, { "a": 2, "n": "PurchaseToken", "t": 16, "rt": $n[0].String, "g": { "a": 2, "n": "get_PurchaseToken", "t": 8, "rt": $n[0].String, "fg": "PurchaseToken" }, "fn": "PurchaseToken" }, { "a": 2, "n": "SignedRequest", "t": 16, "rt": $n[0].String, "g": { "a": 2, "n": "get_SignedRequest", "t": 8, "rt": $n[0].String, "fg": "SignedRequest" }, "fn": "SignedRequest" }] }; }, $n);
    /*Facebook.Unity.Purchase end.*/

    /*Facebook.Unity.PurchaseResult start.*/
    $m("Facebook.Unity.PurchaseResult", function() { return { "att": 1048576, "a": 4, "m": [{ "a": 2, "n": ".ctor", "t": 1, "p": [$n[8].ResultContainer], "pi": [{ "n": "resultContainer", "pt": $n[8].ResultContainer, "ps": 0 }], "sn": "ctor" }, { "ov": true, "a": 2, "n": "ToString", "t": 8, "sn": "toString", "rt": $n[0].String }, { "v": true, "a": 2, "n": "Purchase", "t": 16, "rt": $n[8].Purchase, "g": { "v": true, "a": 2, "n": "get_Purchase", "t": 8, "rt": $n[8].Purchase, "fg": "Purchase" }, "fn": "Purchase" }] }; }, $n);
    /*Facebook.Unity.PurchaseResult end.*/

    /*Facebook.Unity.PurchasesResult start.*/
    $m("Facebook.Unity.PurchasesResult", function() { return { "att": 1048576, "a": 4, "m": [{ "a": 2, "n": ".ctor", "t": 1, "p": [$n[8].ResultContainer], "pi": [{ "n": "resultContainer", "pt": $n[8].ResultContainer, "ps": 0 }], "sn": "ctor" }, { "ov": true, "a": 2, "n": "ToString", "t": 8, "sn": "toString", "rt": $n[0].String }, { "v": true, "a": 2, "n": "Purchases", "t": 16, "rt": $n[2].IList$1(Facebook.Unity.Purchase), "g": { "v": true, "a": 2, "n": "get_Purchases", "t": 8, "rt": $n[2].IList$1(Facebook.Unity.Purchase), "fg": "Purchases" }, "fn": "Purchases" }] }; }, $n);
    /*Facebook.Unity.PurchasesResult end.*/

    /*Facebook.Unity.ResultBase start.*/
    $m("Facebook.Unity.ResultBase", function() { return { "att": 1048704, "a": 4, "m": [{ "a": 3, "isSynthetic": true, "n": ".ctor", "t": 1, "sn": "ctor" }, { "a": 3, "n": "Init", "t": 8, "pi": [{ "n": "result", "pt": $n[8].ResultContainer, "ps": 0 }, { "n": "error", "pt": $n[0].String, "ps": 1 }, { "n": "cancelled", "pt": $n[0].Boolean, "ps": 2 }, { "n": "callbackId", "pt": $n[0].String, "ps": 3 }], "sn": "Init", "rt": $n[0].Void, "p": [$n[8].ResultContainer, $n[0].String, $n[0].Boolean, $n[0].String] }, { "ov": true, "a": 2, "n": "ToString", "t": 8, "sn": "toString", "rt": $n[0].String }, { "v": true, "a": 2, "n": "CallbackId", "t": 16, "rt": $n[0].String, "g": { "v": true, "a": 2, "n": "get_CallbackId", "t": 8, "rt": $n[0].String, "fg": "CallbackId" }, "fn": "CallbackId" }, { "v": true, "a": 2, "n": "Cancelled", "t": 16, "rt": $n[0].Boolean, "g": { "v": true, "a": 2, "n": "get_Cancelled", "t": 8, "rt": $n[0].Boolean, "fg": "Cancelled", "box": function($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString); } }, "fn": "Cancelled" }, { "a": 4, "n": "CanvasErrorCode", "t": 16, "rt": $n[0].Nullable$1(System.Int64), "g": { "a": 4, "n": "get_CanvasErrorCode", "t": 8, "rt": $n[0].Nullable$1(System.Int64), "fg": "CanvasErrorCode" }, "fn": "CanvasErrorCode" }, { "v": true, "a": 2, "n": "Error", "t": 16, "rt": $n[0].String, "g": { "v": true, "a": 2, "n": "get_Error", "t": 8, "rt": $n[0].String, "fg": "Error" }, "fn": "Error" }, { "v": true, "a": 2, "n": "ErrorDictionary", "t": 16, "rt": $n[2].IDictionary$2(System.String, System.String), "g": { "v": true, "a": 2, "n": "get_ErrorDictionary", "t": 8, "rt": $n[2].IDictionary$2(System.String, System.String), "fg": "ErrorDictionary" }, "fn": "ErrorDictionary" }, { "v": true, "a": 2, "n": "RawResult", "t": 16, "rt": $n[0].String, "g": { "v": true, "a": 2, "n": "get_RawResult", "t": 8, "rt": $n[0].String, "fg": "RawResult" }, "fn": "RawResult" }, { "v": true, "a": 2, "n": "ResultDictionary", "t": 16, "rt": $n[2].IDictionary$2(System.String, System.Object), "g": { "v": true, "a": 2, "n": "get_ResultDictionary", "t": 8, "rt": $n[2].IDictionary$2(System.String, System.Object), "fg": "ResultDictionary" }, "fn": "ResultDictionary" }, { "a": 4, "n": "CancelDialogCode", "is": true, "t": 4, "rt": $n[0].Int64, "sn": "CancelDialogCode" }, { "a": 4, "n": "ErrorCodeKey", "is": true, "t": 4, "rt": $n[0].String, "sn": "ErrorCodeKey" }, { "a": 4, "n": "ErrorMessageKey", "is": true, "t": 4, "rt": $n[0].String, "sn": "ErrorMessageKey" }] }; }, $n);
    /*Facebook.Unity.ResultBase end.*/

    /*Facebook.Unity.ResultContainer start.*/
    $m("Facebook.Unity.ResultContainer", function() { return { "att": 1048576, "a": 4, "m": [{ "a": 2, "n": ".ctor", "t": 1, "p": [$n[2].IDictionary$2(System.String, System.Object)], "pi": [{ "n": "dictionary", "pt": $n[2].IDictionary$2(System.String, System.Object), "ps": 0 }], "sn": "ctor" }, { "a": 2, "n": ".ctor", "t": 1, "p": [$n[0].String], "pi": [{ "n": "result", "pt": $n[0].String, "ps": 0 }], "sn": "$ctor1" }, { "a": 2, "n": "RawResult", "t": 16, "rt": $n[0].String, "g": { "a": 2, "n": "get_RawResult", "t": 8, "rt": $n[0].String, "fg": "RawResult" }, "fn": "RawResult" }, { "a": 2, "n": "ResultDictionary", "t": 16, "rt": $n[2].IDictionary$2(System.String, System.Object), "g": { "a": 2, "n": "get_ResultDictionary", "t": 8, "rt": $n[2].IDictionary$2(System.String, System.Object), "fg": "ResultDictionary" }, "s": { "a": 2, "n": "set_ResultDictionary", "t": 8, "p": [$n[2].IDictionary$2(System.String, System.Object)], "rt": $n[0].Void, "fs": "ResultDictionary" }, "fn": "ResultDictionary" }, { "a": 1, "backing": true, "n": "<ResultDictionary>k__BackingField", "t": 4, "rt": $n[2].IDictionary$2(System.String, System.Object), "sn": "ResultDictionary" }] }; }, $n);
    /*Facebook.Unity.ResultContainer end.*/

    /*Facebook.Unity.RewardedVideoResult start.*/
    $m("Facebook.Unity.RewardedVideoResult", function() { return { "att": 1048576, "a": 4, "m": [{ "a": 2, "isSynthetic": true, "n": ".ctor", "t": 1, "sn": "ctor" }] }; }, $n);
    /*Facebook.Unity.RewardedVideoResult end.*/

    /*Facebook.Unity.ScheduleAppToUserNotificationResult start.*/
    $m("Facebook.Unity.ScheduleAppToUserNotificationResult", function() { return { "att": 1048576, "a": 4, "m": [{ "a": 2, "isSynthetic": true, "n": ".ctor", "t": 1, "sn": "ctor" }] }; }, $n);
    /*Facebook.Unity.ScheduleAppToUserNotificationResult end.*/

    /*Facebook.Unity.SessionScoreResult start.*/
    $m("Facebook.Unity.SessionScoreResult", function() { return { "att": 1048576, "a": 4, "m": [{ "a": 2, "isSynthetic": true, "n": ".ctor", "t": 1, "sn": "ctor" }] }; }, $n);
    /*Facebook.Unity.SessionScoreResult end.*/

    /*Facebook.Unity.ShareDialogMode start.*/
    $m("Facebook.Unity.ShareDialogMode", function() { return { "att": 257, "a": 2, "m": [{ "a": 2, "isSynthetic": true, "n": ".ctor", "t": 1, "sn": "ctor" }, { "a": 2, "n": "AUTOMATIC", "is": true, "t": 4, "rt": $n[8].ShareDialogMode, "sn": "AUTOMATIC", "box": function($v) { return Bridge.box($v, Facebook.Unity.ShareDialogMode, System.Enum.toStringFn(Facebook.Unity.ShareDialogMode)); } }, { "a": 2, "n": "FEED", "is": true, "t": 4, "rt": $n[8].ShareDialogMode, "sn": "FEED", "box": function($v) { return Bridge.box($v, Facebook.Unity.ShareDialogMode, System.Enum.toStringFn(Facebook.Unity.ShareDialogMode)); } }, { "a": 2, "n": "NATIVE", "is": true, "t": 4, "rt": $n[8].ShareDialogMode, "sn": "NATIVE", "box": function($v) { return Bridge.box($v, Facebook.Unity.ShareDialogMode, System.Enum.toStringFn(Facebook.Unity.ShareDialogMode)); } }, { "a": 2, "n": "WEB", "is": true, "t": 4, "rt": $n[8].ShareDialogMode, "sn": "WEB", "box": function($v) { return Bridge.box($v, Facebook.Unity.ShareDialogMode, System.Enum.toStringFn(Facebook.Unity.ShareDialogMode)); } }] }; }, $n);
    /*Facebook.Unity.ShareDialogMode end.*/

    /*Facebook.Unity.ShareResult start.*/
    $m("Facebook.Unity.ShareResult", function() { return { "att": 1048576, "a": 4, "m": [{ "a": 2, "isSynthetic": true, "n": ".ctor", "t": 1, "sn": "ctor" }, { "ov": true, "a": 2, "n": "ToString", "t": 8, "sn": "toString", "rt": $n[0].String }, { "a": 4, "n": "PostIDKey", "is": true, "t": 16, "rt": $n[0].String, "g": { "a": 4, "n": "get_PostIDKey", "t": 8, "rt": $n[0].String, "fg": "PostIDKey", "is": true }, "fn": "PostIDKey" }, { "v": true, "a": 2, "n": "PostId", "t": 16, "rt": $n[0].String, "g": { "v": true, "a": 2, "n": "get_PostId", "t": 8, "rt": $n[0].String, "fg": "PostId" }, "fn": "PostId" }] }; }, $n);
    /*Facebook.Unity.ShareResult end.*/

    /*Facebook.Unity.Utilities start.*/
    $m("Facebook.Unity.Utilities", function() { return { "nested": [Function], "att": 1048960, "a": 4, "s": true, "m": [{ "a": 2, "n": "AbsoluteUrlOrEmptyString", "is": true, "t": 8, "pi": [{ "n": "uri", "pt": $n[0].Uri, "ps": 0 }], "sn": "AbsoluteUrlOrEmptyString", "rt": $n[0].String, "p": [$n[0].Uri] }, { "a": 2, "n": "AddAllKVPFrom", "is": true, "t": 8, "pi": [{ "n": "dest", "pt": $n[2].IDictionary$2(System.Object, System.Object), "ps": 0 }, { "n": "source", "pt": $n[2].IDictionary$2(System.Object, System.Object), "ps": 1 }], "tpc": 2, "tprm": ["T1", "T2"], "sn": "AddAllKVPFrom", "rt": $n[0].Void, "p": [$n[2].IDictionary$2(System.Object, System.Object), $n[2].IDictionary$2(System.Object, System.Object)] }, { "a": 2, "n": "FormatToString", "is": true, "t": 8, "pi": [{ "n": "baseString", "pt": $n[0].String, "ps": 0 }, { "n": "className", "pt": $n[0].String, "ps": 1 }, { "n": "propertiesAndValues", "pt": $n[2].IDictionary$2(System.String, System.String), "ps": 2 }], "sn": "FormatToString", "rt": $n[0].String, "p": [$n[0].String, $n[0].String, $n[2].IDictionary$2(System.String, System.String)] }, { "a": 2, "n": "FromTimestamp", "is": true, "t": 8, "pi": [{ "n": "timestamp", "pt": $n[0].Int32, "ps": 0 }], "sn": "FromTimestamp", "rt": $n[0].DateTime, "p": [$n[0].Int32], "box": function($v) { return Bridge.box($v, System.DateTime, System.DateTime.format); } }, { "a": 2, "n": "GetUserAgent", "is": true, "t": 8, "pi": [{ "n": "productName", "pt": $n[0].String, "ps": 0 }, { "n": "productVersion", "pt": $n[0].String, "ps": 1 }], "sn": "GetUserAgent", "rt": $n[0].String, "p": [$n[0].String, $n[0].String] }, { "a": 2, "n": "GetValueOrDefault", "is": true, "t": 8, "pi": [{ "n": "dictionary", "pt": $n[2].IDictionary$2(System.String, System.Object), "ps": 0 }, { "n": "key", "pt": $n[0].String, "ps": 1 }, { "n": "logWarning", "pt": $n[0].Boolean, "ps": 2 }], "tpc": 1, "tprm": ["T"], "sn": "GetValueOrDefault", "rt": System.Object, "p": [$n[2].IDictionary$2(System.String, System.Object), $n[0].String, $n[0].Boolean] }, { "a": 2, "n": "ParseAccessTokenFromResult", "is": true, "t": 8, "pi": [{ "n": "resultDictionary", "pt": $n[2].IDictionary$2(System.String, System.Object), "ps": 0 }], "sn": "ParseAccessTokenFromResult", "rt": $n[8].AccessToken, "p": [$n[2].IDictionary$2(System.String, System.Object)] }, { "a": 2, "n": "ParseAuthenticationTokenFromResult", "is": true, "t": 8, "pi": [{ "n": "resultDictionary", "pt": $n[2].IDictionary$2(System.String, System.Object), "ps": 0 }], "sn": "ParseAuthenticationTokenFromResult", "rt": $n[8].AuthenticationToken, "p": [$n[2].IDictionary$2(System.String, System.Object)] }, { "a": 2, "n": "ParseCatalogFromResult", "is": true, "t": 8, "pi": [{ "n": "resultDictionary", "pt": $n[2].IDictionary$2(System.String, System.Object), "ps": 0 }], "sn": "ParseCatalogFromResult", "rt": $n[2].IList$1(Facebook.Unity.Product), "p": [$n[2].IDictionary$2(System.String, System.Object)] }, { "a": 2, "n": "ParseInnerStringDictionary", "is": true, "t": 8, "pi": [{ "n": "resultDictionary", "pt": $n[2].IDictionary$2(System.String, System.Object), "ps": 0 }, { "n": "key", "pt": $n[0].String, "ps": 1 }], "sn": "ParseInnerStringDictionary", "rt": $n[2].IDictionary$2(System.String, System.String), "p": [$n[2].IDictionary$2(System.String, System.Object), $n[0].String] }, { "a": 2, "n": "ParsePurchaseFromResult", "is": true, "t": 8, "pi": [{ "n": "resultDictionary", "pt": $n[2].IDictionary$2(System.String, System.Object), "ps": 0 }], "sn": "ParsePurchaseFromResult", "rt": $n[8].Purchase, "p": [$n[2].IDictionary$2(System.String, System.Object)] }, { "a": 2, "n": "ParsePurchasesFromResult", "is": true, "t": 8, "pi": [{ "n": "resultDictionary", "pt": $n[2].IDictionary$2(System.String, System.Object), "ps": 0 }], "sn": "ParsePurchasesFromResult", "rt": $n[2].IList$1(Facebook.Unity.Purchase), "p": [$n[2].IDictionary$2(System.String, System.Object)] }, { "a": 2, "n": "ParseStringDictionaryFromString", "is": true, "t": 8, "pi": [{ "n": "input", "pt": $n[0].String, "ps": 0 }], "sn": "ParseStringDictionaryFromString", "rt": $n[2].IDictionary$2(System.String, System.String), "p": [$n[0].String] }, { "a": 2, "n": "ToCommaSeparateList", "is": true, "t": 8, "pi": [{ "n": "list", "pt": $n[2].IEnumerable$1(System.String), "ps": 0 }], "sn": "ToCommaSeparateList", "rt": $n[0].String, "p": [$n[2].IEnumerable$1(System.String)] }, { "a": 2, "n": "ToJson", "is": true, "t": 8, "pi": [{ "n": "dictionary", "pt": $n[2].IDictionary$2(System.String, System.Object), "ps": 0 }], "sn": "ToJson", "rt": $n[0].String, "p": [$n[2].IDictionary$2(System.String, System.Object)] }, { "a": 2, "n": "ToStringNullOk", "is": true, "t": 8, "pi": [{ "n": "obj", "pt": $n[0].Object, "ps": 0 }], "sn": "ToStringNullOk", "rt": $n[0].String, "p": [$n[0].Object] }, { "a": 2, "n": "TotalSeconds", "is": true, "t": 8, "pi": [{ "n": "dateTime", "pt": $n[0].DateTime, "ps": 0 }], "sn": "TotalSeconds", "rt": $n[0].Int64, "p": [$n[0].DateTime] }, { "a": 2, "n": "TryGetValue", "is": true, "t": 8, "pi": [{ "n": "dictionary", "pt": $n[2].IDictionary$2(System.String, System.Object), "ps": 0 }, { "n": "key", "pt": $n[0].String, "ps": 1 }, { "n": "value", "out": true, "pt": System.Object, "ps": 2 }], "tpc": 1, "tprm": ["T"], "sn": "TryGetValue", "rt": $n[0].Boolean, "p": [$n[2].IDictionary$2(System.String, System.Object), $n[0].String, System.Object], "box": function($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString); } }, { "a": 2, "n": "CommandLineArguments", "is": true, "t": 16, "rt": $n[2].Dictionary$2(System.String, System.String), "g": { "a": 2, "n": "get_CommandLineArguments", "t": 8, "rt": $n[2].Dictionary$2(System.String, System.String), "fg": "CommandLineArguments", "is": true }, "fn": "CommandLineArguments" }] }; }, $n);
    /*Facebook.Unity.Utilities end.*/

    /*Facebook.Unity.Settings.FacebookSettings start.*/
    $m("Facebook.Unity.Settings.FacebookSettings", function() { return { "nested": [Function, $n[11].FacebookSettings.UrlSchemes], "att": 1048577, "a": 2, "m": [{ "a": 2, "isSynthetic": true, "n": ".ctor", "t": 1, "sn": "ctor" }, { "a": 2, "n": "RegisterChangeEventCallback", "is": true, "t": 8, "pi": [{ "n": "callback", "pt": Function, "ps": 0 }], "sn": "RegisterChangeEventCallback", "rt": $n[0].Void, "p": [Function] }, { "a": 2, "n": "UnregisterChangeEventCallback", "is": true, "t": 8, "pi": [{ "n": "callback", "pt": Function, "ps": 0 }], "sn": "UnregisterChangeEventCallback", "rt": $n[0].Void, "p": [Function] }, { "a": 2, "n": "AdvertiserIDCollectionEnabled", "is": true, "t": 16, "rt": $n[0].Boolean, "g": { "a": 2, "n": "get_AdvertiserIDCollectionEnabled", "t": 8, "rt": $n[0].Boolean, "fg": "AdvertiserIDCollectionEnabled", "is": true, "box": function($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString); } }, "s": { "a": 2, "n": "set_AdvertiserIDCollectionEnabled", "t": 8, "p": [$n[0].Boolean], "rt": $n[0].Void, "fs": "AdvertiserIDCollectionEnabled", "is": true }, "fn": "AdvertiserIDCollectionEnabled" }, { "a": 2, "n": "AndroidKeystorePath", "is": true, "t": 16, "rt": $n[0].String, "g": { "a": 2, "n": "get_AndroidKeystorePath", "t": 8, "rt": $n[0].String, "fg": "AndroidKeystorePath", "is": true }, "s": { "a": 2, "n": "set_AndroidKeystorePath", "t": 8, "p": [$n[0].String], "rt": $n[0].Void, "fs": "AndroidKeystorePath", "is": true }, "fn": "AndroidKeystorePath" }, { "a": 2, "n": "AppId", "is": true, "t": 16, "rt": $n[0].String, "g": { "a": 2, "n": "get_AppId", "t": 8, "rt": $n[0].String, "fg": "AppId", "is": true }, "fn": "AppId" }, { "a": 2, "n": "AppIds", "is": true, "t": 16, "rt": $n[2].List$1(System.String), "g": { "a": 2, "n": "get_AppIds", "t": 8, "rt": $n[2].List$1(System.String), "fg": "AppIds", "is": true }, "s": { "a": 2, "n": "set_AppIds", "t": 8, "p": [$n[2].List$1(System.String)], "rt": $n[0].Void, "fs": "AppIds", "is": true }, "fn": "AppIds" }, { "a": 2, "n": "AppLabels", "is": true, "t": 16, "rt": $n[2].List$1(System.String), "g": { "a": 2, "n": "get_AppLabels", "t": 8, "rt": $n[2].List$1(System.String), "fg": "AppLabels", "is": true }, "s": { "a": 2, "n": "set_AppLabels", "t": 8, "p": [$n[2].List$1(System.String)], "rt": $n[0].Void, "fs": "AppLabels", "is": true }, "fn": "AppLabels" }, { "a": 2, "n": "AppLinkSchemes", "is": true, "t": 16, "rt": $n[2].List$1(Facebook.Unity.Settings.FacebookSettings.UrlSchemes), "g": { "a": 2, "n": "get_AppLinkSchemes", "t": 8, "rt": $n[2].List$1(Facebook.Unity.Settings.FacebookSettings.UrlSchemes), "fg": "AppLinkSchemes", "is": true }, "s": { "a": 2, "n": "set_AppLinkSchemes", "t": 8, "p": [$n[2].List$1(Facebook.Unity.Settings.FacebookSettings.UrlSchemes)], "rt": $n[0].Void, "fs": "AppLinkSchemes", "is": true }, "fn": "AppLinkSchemes" }, { "a": 2, "n": "AutoLogAppEventsEnabled", "is": true, "t": 16, "rt": $n[0].Boolean, "g": { "a": 2, "n": "get_AutoLogAppEventsEnabled", "t": 8, "rt": $n[0].Boolean, "fg": "AutoLogAppEventsEnabled", "is": true, "box": function($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString); } }, "s": { "a": 2, "n": "set_AutoLogAppEventsEnabled", "t": 8, "p": [$n[0].Boolean], "rt": $n[0].Void, "fs": "AutoLogAppEventsEnabled", "is": true }, "fn": "AutoLogAppEventsEnabled" }, { "a": 2, "n": "ChannelUrl", "is": true, "t": 16, "rt": $n[0].String, "g": { "a": 2, "n": "get_ChannelUrl", "t": 8, "rt": $n[0].String, "fg": "ChannelUrl", "is": true }, "fn": "ChannelUrl" }, { "a": 2, "n": "ClientToken", "is": true, "t": 16, "rt": $n[0].String, "g": { "a": 2, "n": "get_ClientToken", "t": 8, "rt": $n[0].String, "fg": "ClientToken", "is": true }, "fn": "ClientToken" }, { "a": 2, "n": "ClientTokens", "is": true, "t": 16, "rt": $n[2].List$1(System.String), "g": { "a": 2, "n": "get_ClientTokens", "t": 8, "rt": $n[2].List$1(System.String), "fg": "ClientTokens", "is": true }, "s": { "a": 2, "n": "set_ClientTokens", "t": 8, "p": [$n[2].List$1(System.String)], "rt": $n[0].Void, "fs": "ClientTokens", "is": true }, "fn": "ClientTokens" }, { "a": 2, "n": "Cookie", "is": true, "t": 16, "rt": $n[0].Boolean, "g": { "a": 2, "n": "get_Cookie", "t": 8, "rt": $n[0].Boolean, "fg": "Cookie", "is": true, "box": function($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString); } }, "s": { "a": 2, "n": "set_Cookie", "t": 8, "p": [$n[0].Boolean], "rt": $n[0].Void, "fs": "Cookie", "is": true }, "fn": "Cookie" }, { "a": 2, "n": "FrictionlessRequests", "is": true, "t": 16, "rt": $n[0].Boolean, "g": { "a": 2, "n": "get_FrictionlessRequests", "t": 8, "rt": $n[0].Boolean, "fg": "FrictionlessRequests", "is": true, "box": function($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString); } }, "s": { "a": 2, "n": "set_FrictionlessRequests", "t": 8, "p": [$n[0].Boolean], "rt": $n[0].Void, "fs": "FrictionlessRequests", "is": true }, "fn": "FrictionlessRequests" }, { "a": 2, "n": "Instance", "is": true, "t": 16, "rt": $n[11].FacebookSettings, "g": { "a": 2, "n": "get_Instance", "t": 8, "rt": $n[11].FacebookSettings, "fg": "Instance", "is": true }, "fn": "Instance" }, { "a": 2, "n": "IosURLSuffix", "is": true, "t": 16, "rt": $n[0].String, "g": { "a": 2, "n": "get_IosURLSuffix", "t": 8, "rt": $n[0].String, "fg": "IosURLSuffix", "is": true }, "s": { "a": 2, "n": "set_IosURLSuffix", "t": 8, "p": [$n[0].String], "rt": $n[0].Void, "fs": "IosURLSuffix", "is": true }, "fn": "IosURLSuffix" }, { "a": 2, "n": "IsValidAppId", "is": true, "t": 16, "rt": $n[0].Boolean, "g": { "a": 2, "n": "get_IsValidAppId", "t": 8, "rt": $n[0].Boolean, "fg": "IsValidAppId", "is": true, "box": function($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString); } }, "fn": "IsValidAppId" }, { "a": 2, "n": "Logging", "is": true, "t": 16, "rt": $n[0].Boolean, "g": { "a": 2, "n": "get_Logging", "t": 8, "rt": $n[0].Boolean, "fg": "Logging", "is": true, "box": function($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString); } }, "s": { "a": 2, "n": "set_Logging", "t": 8, "p": [$n[0].Boolean], "rt": $n[0].Void, "fs": "Logging", "is": true }, "fn": "Logging" }, { "a": 2, "n": "NullableInstance", "is": true, "t": 16, "rt": $n[11].FacebookSettings, "g": { "a": 2, "n": "get_NullableInstance", "t": 8, "rt": $n[11].FacebookSettings, "fg": "NullableInstance", "is": true }, "fn": "NullableInstance" }, { "a": 2, "n": "SelectedAppIndex", "is": true, "t": 16, "rt": $n[0].Int32, "g": { "a": 2, "n": "get_SelectedAppIndex", "t": 8, "rt": $n[0].Int32, "fg": "SelectedAppIndex", "is": true, "box": function($v) { return Bridge.box($v, System.Int32); } }, "s": { "a": 2, "n": "set_SelectedAppIndex", "t": 8, "p": [$n[0].Int32], "rt": $n[0].Void, "fs": "SelectedAppIndex", "is": true }, "fn": "SelectedAppIndex" }, { "a": 2, "n": "Status", "is": true, "t": 16, "rt": $n[0].Boolean, "g": { "a": 2, "n": "get_Status", "t": 8, "rt": $n[0].Boolean, "fg": "Status", "is": true, "box": function($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString); } }, "s": { "a": 2, "n": "set_Status", "t": 8, "p": [$n[0].Boolean], "rt": $n[0].Void, "fs": "Status", "is": true }, "fn": "Status" }, { "a": 2, "n": "UploadAccessToken", "is": true, "t": 16, "rt": $n[0].String, "g": { "a": 2, "n": "get_UploadAccessToken", "t": 8, "rt": $n[0].String, "fg": "UploadAccessToken", "is": true }, "s": { "a": 2, "n": "set_UploadAccessToken", "t": 8, "p": [$n[0].String], "rt": $n[0].Void, "fs": "UploadAccessToken", "is": true }, "fn": "UploadAccessToken" }, { "a": 2, "n": "Xfbml", "is": true, "t": 16, "rt": $n[0].Boolean, "g": { "a": 2, "n": "get_Xfbml", "t": 8, "rt": $n[0].Boolean, "fg": "Xfbml", "is": true, "box": function($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString); } }, "s": { "a": 2, "n": "set_Xfbml", "t": 8, "p": [$n[0].Boolean], "rt": $n[0].Void, "fs": "Xfbml", "is": true }, "fn": "Xfbml" }, { "a": 4, "n": "FacebookSettingsAssetExtension", "is": true, "t": 4, "rt": $n[0].String, "sn": "FacebookSettingsAssetExtension" }, { "a": 4, "n": "FacebookSettingsAssetName", "is": true, "t": 4, "rt": $n[0].String, "sn": "FacebookSettingsAssetName" }, { "a": 4, "n": "FacebookSettingsPath", "is": true, "t": 4, "rt": $n[0].String, "sn": "FacebookSettingsPath" }, { "a": 1, "backing": true, "n": "<AdvertiserIDCollectionEnabled>k__BackingField", "is": true, "t": 4, "rt": $n[0].Boolean, "sn": "AdvertiserIDCollectionEnabled", "box": function($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString); } }, { "a": 1, "backing": true, "n": "<AndroidKeystorePath>k__BackingField", "is": true, "t": 4, "rt": $n[0].String, "sn": "AndroidKeystorePath" }, { "a": 1, "backing": true, "n": "<AppIds>k__BackingField", "is": true, "t": 4, "rt": $n[2].List$1(System.String), "sn": "AppIds" }, { "a": 1, "backing": true, "n": "<AppLabels>k__BackingField", "is": true, "t": 4, "rt": $n[2].List$1(System.String), "sn": "AppLabels" }, { "a": 1, "backing": true, "n": "<AppLinkSchemes>k__BackingField", "is": true, "t": 4, "rt": $n[2].List$1(Facebook.Unity.Settings.FacebookSettings.UrlSchemes), "sn": "AppLinkSchemes" }, { "a": 1, "backing": true, "n": "<AutoLogAppEventsEnabled>k__BackingField", "is": true, "t": 4, "rt": $n[0].Boolean, "sn": "AutoLogAppEventsEnabled", "box": function($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString); } }, { "a": 1, "backing": true, "n": "<ClientTokens>k__BackingField", "is": true, "t": 4, "rt": $n[2].List$1(System.String), "sn": "ClientTokens" }, { "a": 1, "backing": true, "n": "<Cookie>k__BackingField", "is": true, "t": 4, "rt": $n[0].Boolean, "sn": "Cookie", "box": function($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString); } }, { "a": 1, "backing": true, "n": "<FrictionlessRequests>k__BackingField", "is": true, "t": 4, "rt": $n[0].Boolean, "sn": "FrictionlessRequests", "box": function($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString); } }, { "a": 1, "backing": true, "n": "<IosURLSuffix>k__BackingField", "is": true, "t": 4, "rt": $n[0].String, "sn": "IosURLSuffix" }, { "a": 1, "backing": true, "n": "<Logging>k__BackingField", "is": true, "t": 4, "rt": $n[0].Boolean, "sn": "Logging", "box": function($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString); } }, { "a": 1, "backing": true, "n": "<SelectedAppIndex>k__BackingField", "is": true, "t": 4, "rt": $n[0].Int32, "sn": "SelectedAppIndex", "box": function($v) { return Bridge.box($v, System.Int32); } }, { "a": 1, "backing": true, "n": "<Status>k__BackingField", "is": true, "t": 4, "rt": $n[0].Boolean, "sn": "Status", "box": function($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString); } }, { "a": 1, "backing": true, "n": "<UploadAccessToken>k__BackingField", "is": true, "t": 4, "rt": $n[0].String, "sn": "UploadAccessToken" }, { "a": 1, "backing": true, "n": "<Xfbml>k__BackingField", "is": true, "t": 4, "rt": $n[0].Boolean, "sn": "Xfbml", "box": function($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString); } }] }; }, $n);
    /*Facebook.Unity.Settings.FacebookSettings end.*/

    /*Facebook.Unity.Settings.FacebookSettings+UrlSchemes start.*/
    $m("Facebook.Unity.Settings.FacebookSettings.UrlSchemes", function() { return { "td": $n[11].FacebookSettings, "att": 1048578, "a": 2, "m": [{ "a": 2, "n": ".ctor", "t": 1, "p": [$n[2].List$1(System.String)], "pi": [{ "n": "schemes", "pt": $n[2].List$1(System.String), "ps": 0 }], "sn": "ctor" }, { "a": 2, "n": "Schemes", "t": 16, "rt": $n[2].List$1(System.String), "g": { "a": 2, "n": "get_Schemes", "t": 8, "rt": $n[2].List$1(System.String), "fg": "Schemes" }, "s": { "a": 2, "n": "set_Schemes", "t": 8, "p": [$n[2].List$1(System.String)], "rt": $n[0].Void, "fs": "Schemes" }, "fn": "Schemes" }, { "a": 1, "backing": true, "n": "<Schemes>k__BackingField", "t": 4, "rt": $n[2].List$1(System.String), "sn": "Schemes" }] }; }, $n);
    /*Facebook.Unity.Settings.FacebookSettings+UrlSchemes end.*/

    /*Facebook.Unity.Mobile.IMobileFacebook start.*/
    $m("Facebook.Unity.Mobile.IMobileFacebook", function() { return { "att": 160, "a": 4, "m": [{ "ab": true, "a": 2, "n": "ConsumePurchase", "t": 8, "pi": [{ "n": "productToken", "pt": $n[0].String, "ps": 0 }, { "n": "callback", "pt": Function, "ps": 1 }], "sn": "Facebook$Unity$Mobile$IMobileFacebook$ConsumePurchase", "rt": $n[0].Void, "p": [$n[0].String, Function] }, { "ab": true, "a": 2, "n": "CurrentAuthenticationToken", "t": 8, "sn": "Facebook$Unity$Mobile$IMobileFacebook$CurrentAuthenticationToken", "rt": $n[8].AuthenticationToken }, { "ab": true, "a": 2, "n": "CurrentProfile", "t": 8, "sn": "Facebook$Unity$Mobile$IMobileFacebook$CurrentProfile", "rt": $n[8].Profile }, { "ab": true, "a": 2, "n": "FetchDeferredAppLink", "t": 8, "pi": [{ "n": "callback", "pt": Function, "ps": 0 }], "sn": "Facebook$Unity$Mobile$IMobileFacebook$FetchDeferredAppLink", "rt": $n[0].Void, "p": [Function] }, { "ab": true, "a": 2, "n": "GetCatalog", "t": 8, "pi": [{ "n": "callback", "pt": Function, "ps": 0 }], "sn": "Facebook$Unity$Mobile$IMobileFacebook$GetCatalog", "rt": $n[0].Void, "p": [Function] }, { "ab": true, "a": 2, "n": "GetPayload", "t": 8, "pi": [{ "n": "callback", "pt": Function, "ps": 0 }], "sn": "Facebook$Unity$Mobile$IMobileFacebook$GetPayload", "rt": $n[0].Void, "p": [Function] }, { "ab": true, "a": 2, "n": "GetPurchases", "t": 8, "pi": [{ "n": "callback", "pt": Function, "ps": 0 }], "sn": "Facebook$Unity$Mobile$IMobileFacebook$GetPurchases", "rt": $n[0].Void, "p": [Function] }, { "ab": true, "a": 2, "n": "InitCloudGame", "t": 8, "pi": [{ "n": "callback", "pt": Function, "ps": 0 }], "sn": "Facebook$Unity$Mobile$IMobileFacebook$InitCloudGame", "rt": $n[0].Void, "p": [Function] }, { "ab": true, "a": 2, "n": "IsImplicitPurchaseLoggingEnabled", "t": 8, "sn": "Facebook$Unity$Mobile$IMobileFacebook$IsImplicitPurchaseLoggingEnabled", "rt": $n[0].Boolean, "box": function($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString); } }, { "ab": true, "a": 2, "n": "LoadInterstitialAd", "t": 8, "pi": [{ "n": "placementID", "pt": $n[0].String, "ps": 0 }, { "n": "callback", "pt": Function, "ps": 1 }], "sn": "Facebook$Unity$Mobile$IMobileFacebook$LoadInterstitialAd", "rt": $n[0].Void, "p": [$n[0].String, Function] }, { "ab": true, "a": 2, "n": "LoadRewardedVideo", "t": 8, "pi": [{ "n": "placementID", "pt": $n[0].String, "ps": 0 }, { "n": "callback", "pt": Function, "ps": 1 }], "sn": "Facebook$Unity$Mobile$IMobileFacebook$LoadRewardedVideo", "rt": $n[0].Void, "p": [$n[0].String, Function] }, { "ab": true, "a": 2, "n": "LoginWithTrackingPreference", "t": 8, "pi": [{ "n": "tracking", "pt": $n[0].String, "ps": 0 }, { "n": "permissions", "pt": $n[2].IEnumerable$1(System.String), "ps": 1 }, { "n": "nonce", "pt": $n[0].String, "ps": 2 }, { "n": "callback", "pt": Function, "ps": 3 }], "sn": "Facebook$Unity$Mobile$IMobileFacebook$LoginWithTrackingPreference", "rt": $n[0].Void, "p": [$n[0].String, $n[2].IEnumerable$1(System.String), $n[0].String, Function] }, { "ab": true, "a": 2, "n": "OnIAPReady", "t": 8, "pi": [{ "n": "callback", "pt": Function, "ps": 0 }], "sn": "Facebook$Unity$Mobile$IMobileFacebook$OnIAPReady", "rt": $n[0].Void, "p": [Function] }, { "ab": true, "a": 2, "n": "OpenAppStore", "t": 8, "pi": [{ "n": "callback", "pt": Function, "ps": 0 }], "sn": "Facebook$Unity$Mobile$IMobileFacebook$OpenAppStore", "rt": $n[0].Void, "p": [Function] }, { "ab": true, "a": 2, "n": "OpenFriendFinderDialog", "t": 8, "pi": [{ "n": "callback", "pt": Function, "ps": 0 }], "sn": "Facebook$Unity$Mobile$IMobileFacebook$OpenFriendFinderDialog", "rt": $n[0].Void, "p": [Function] }, { "ab": true, "a": 2, "n": "PostSessionScore", "t": 8, "pi": [{ "n": "score", "pt": $n[0].Int32, "ps": 0 }, { "n": "callback", "pt": Function, "ps": 1 }], "sn": "Facebook$Unity$Mobile$IMobileFacebook$PostSessionScore", "rt": $n[0].Void, "p": [$n[0].Int32, Function] }, { "ab": true, "a": 2, "n": "Purchase", "t": 8, "pi": [{ "n": "productID", "pt": $n[0].String, "ps": 0 }, { "n": "callback", "pt": Function, "ps": 1 }, { "n": "developPayload", "pt": $n[0].String, "ps": 2 }], "sn": "Facebook$Unity$Mobile$IMobileFacebook$Purchase", "rt": $n[0].Void, "p": [$n[0].String, Function, $n[0].String] }, { "ab": true, "a": 2, "n": "RefreshCurrentAccessToken", "t": 8, "pi": [{ "n": "callback", "pt": Function, "ps": 0 }], "sn": "Facebook$Unity$Mobile$IMobileFacebook$RefreshCurrentAccessToken", "rt": $n[0].Void, "p": [Function] }, { "ab": true, "a": 2, "n": "ScheduleAppToUserNotification", "t": 8, "pi": [{ "n": "title", "pt": $n[0].String, "ps": 0 }, { "n": "body", "pt": $n[0].String, "ps": 1 }, { "n": "media", "pt": $n[0].Uri, "ps": 2 }, { "n": "timeInterval", "pt": $n[0].Int32, "ps": 3 }, { "n": "payload", "pt": $n[0].String, "ps": 4 }, { "n": "callback", "pt": Function, "ps": 5 }], "sn": "Facebook$Unity$Mobile$IMobileFacebook$ScheduleAppToUserNotification", "rt": $n[0].Void, "p": [$n[0].String, $n[0].String, $n[0].Uri, $n[0].Int32, $n[0].String, Function] }, { "ab": true, "a": 2, "n": "SetAdvertiserIDCollectionEnabled", "t": 8, "pi": [{ "n": "advertiserIDCollectionEnabled", "pt": $n[0].Boolean, "ps": 0 }], "sn": "Facebook$Unity$Mobile$IMobileFacebook$SetAdvertiserIDCollectionEnabled", "rt": $n[0].Void, "p": [$n[0].Boolean] }, { "ab": true, "a": 2, "n": "SetAdvertiserTrackingEnabled", "t": 8, "pi": [{ "n": "advertiserTrackingEnabled", "pt": $n[0].Boolean, "ps": 0 }], "sn": "Facebook$Unity$Mobile$IMobileFacebook$SetAdvertiserTrackingEnabled", "rt": $n[0].Boolean, "p": [$n[0].Boolean], "box": function($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString); } }, { "ab": true, "a": 2, "n": "SetAutoLogAppEventsEnabled", "t": 8, "pi": [{ "n": "autoLogAppEventsEnabled", "pt": $n[0].Boolean, "ps": 0 }], "sn": "Facebook$Unity$Mobile$IMobileFacebook$SetAutoLogAppEventsEnabled", "rt": $n[0].Void, "p": [$n[0].Boolean] }, { "ab": true, "a": 2, "n": "SetDataProcessingOptions", "t": 8, "pi": [{ "n": "options", "pt": $n[2].IEnumerable$1(System.String), "ps": 0 }, { "n": "country", "pt": $n[0].Int32, "ps": 1 }, { "n": "state", "pt": $n[0].Int32, "ps": 2 }], "sn": "Facebook$Unity$Mobile$IMobileFacebook$SetDataProcessingOptions", "rt": $n[0].Void, "p": [$n[2].IEnumerable$1(System.String), $n[0].Int32, $n[0].Int32] }, { "ab": true, "a": 2, "n": "SetPushNotificationsDeviceTokenString", "t": 8, "pi": [{ "n": "token", "pt": $n[0].String, "ps": 0 }], "sn": "Facebook$Unity$Mobile$IMobileFacebook$SetPushNotificationsDeviceTokenString", "rt": $n[0].Void, "p": [$n[0].String] }, { "ab": true, "a": 2, "n": "ShowInterstitialAd", "t": 8, "pi": [{ "n": "placementID", "pt": $n[0].String, "ps": 0 }, { "n": "callback", "pt": Function, "ps": 1 }], "sn": "Facebook$Unity$Mobile$IMobileFacebook$ShowInterstitialAd", "rt": $n[0].Void, "p": [$n[0].String, Function] }, { "ab": true, "a": 2, "n": "ShowRewardedVideo", "t": 8, "pi": [{ "n": "placementID", "pt": $n[0].String, "ps": 0 }, { "n": "callback", "pt": Function, "ps": 1 }], "sn": "Facebook$Unity$Mobile$IMobileFacebook$ShowRewardedVideo", "rt": $n[0].Void, "p": [$n[0].String, Function] }, { "ab": true, "a": 2, "n": "UpdateUserProperties", "t": 8, "pi": [{ "n": "parameters", "pt": $n[2].Dictionary$2(System.String, System.String), "ps": 0 }], "sn": "Facebook$Unity$Mobile$IMobileFacebook$UpdateUserProperties", "rt": $n[0].Void, "p": [$n[2].Dictionary$2(System.String, System.String)] }, { "ab": true, "a": 2, "n": "UploadImageToMediaLibrary", "t": 8, "pi": [{ "n": "caption", "pt": $n[0].String, "ps": 0 }, { "n": "imageUri", "pt": $n[0].Uri, "ps": 1 }, { "n": "shouldLaunchMediaDialog", "pt": $n[0].Boolean, "ps": 2 }, { "n": "callback", "pt": Function, "ps": 3 }], "sn": "Facebook$Unity$Mobile$IMobileFacebook$UploadImageToMediaLibrary", "rt": $n[0].Void, "p": [$n[0].String, $n[0].Uri, $n[0].Boolean, Function] }, { "ab": true, "a": 2, "n": "UploadVideoToMediaLibrary", "t": 8, "pi": [{ "n": "caption", "pt": $n[0].String, "ps": 0 }, { "n": "videoUri", "pt": $n[0].Uri, "ps": 1 }, { "n": "callback", "pt": Function, "ps": 2 }], "sn": "Facebook$Unity$Mobile$IMobileFacebook$UploadVideoToMediaLibrary", "rt": $n[0].Void, "p": [$n[0].String, $n[0].Uri, Function] }, { "ab": true, "a": 2, "n": "ShareDialogMode", "t": 16, "rt": $n[8].ShareDialogMode, "g": { "ab": true, "a": 2, "n": "get_ShareDialogMode", "t": 8, "rt": $n[8].ShareDialogMode, "fg": "Facebook$Unity$Mobile$IMobileFacebook$ShareDialogMode", "box": function($v) { return Bridge.box($v, Facebook.Unity.ShareDialogMode, System.Enum.toStringFn(Facebook.Unity.ShareDialogMode)); } }, "s": { "ab": true, "a": 2, "n": "set_ShareDialogMode", "t": 8, "p": [$n[8].ShareDialogMode], "rt": $n[0].Void, "fs": "Facebook$Unity$Mobile$IMobileFacebook$ShareDialogMode" }, "fn": "Facebook$Unity$Mobile$IMobileFacebook$ShareDialogMode" }, { "ab": true, "a": 2, "n": "UserID", "t": 16, "rt": $n[0].String, "g": { "ab": true, "a": 2, "n": "get_UserID", "t": 8, "rt": $n[0].String, "fg": "Facebook$Unity$Mobile$IMobileFacebook$UserID" }, "s": { "ab": true, "a": 2, "n": "set_UserID", "t": 8, "p": [$n[0].String], "rt": $n[0].Void, "fs": "Facebook$Unity$Mobile$IMobileFacebook$UserID" }, "fn": "Facebook$Unity$Mobile$IMobileFacebook$UserID" }, { "a": 1, "backing": true, "n": "<ShareDialogMode>k__BackingField", "t": 4, "rt": $n[8].ShareDialogMode, "sn": "Facebook$Unity$Mobile$IMobileFacebook$ShareDialogMode", "box": function($v) { return Bridge.box($v, Facebook.Unity.ShareDialogMode, System.Enum.toStringFn(Facebook.Unity.ShareDialogMode)); } }, { "a": 1, "backing": true, "n": "<UserID>k__BackingField", "t": 4, "rt": $n[0].String, "sn": "Facebook$Unity$Mobile$IMobileFacebook$UserID" }] }; }, $n);
    /*Facebook.Unity.Mobile.IMobileFacebook end.*/

    /*Facebook.Unity.Mobile.IMobileFacebookCallbackHandler start.*/
    $m("Facebook.Unity.Mobile.IMobileFacebookCallbackHandler", function() { return { "att": 160, "a": 4, "m": [{ "ab": true, "a": 2, "n": "OnConsumePurchaseComplete", "t": 8, "pi": [{ "n": "message", "pt": $n[0].String, "ps": 0 }], "sn": "Facebook$Unity$Mobile$IMobileFacebookCallbackHandler$OnConsumePurchaseComplete", "rt": $n[0].Void, "p": [$n[0].String] }, { "ab": true, "a": 2, "n": "OnFetchDeferredAppLinkComplete", "t": 8, "pi": [{ "n": "message", "pt": $n[0].String, "ps": 0 }], "sn": "Facebook$Unity$Mobile$IMobileFacebookCallbackHandler$OnFetchDeferredAppLinkComplete", "rt": $n[0].Void, "p": [$n[0].String] }, { "ab": true, "a": 2, "n": "OnFriendFinderComplete", "t": 8, "pi": [{ "n": "message", "pt": $n[0].String, "ps": 0 }], "sn": "Facebook$Unity$Mobile$IMobileFacebookCallbackHandler$OnFriendFinderComplete", "rt": $n[0].Void, "p": [$n[0].String] }, { "ab": true, "a": 2, "n": "OnGetCatalogComplete", "t": 8, "pi": [{ "n": "message", "pt": $n[0].String, "ps": 0 }], "sn": "Facebook$Unity$Mobile$IMobileFacebookCallbackHandler$OnGetCatalogComplete", "rt": $n[0].Void, "p": [$n[0].String] }, { "ab": true, "a": 2, "n": "OnGetPayloadComplete", "t": 8, "pi": [{ "n": "message", "pt": $n[0].String, "ps": 0 }], "sn": "Facebook$Unity$Mobile$IMobileFacebookCallbackHandler$OnGetPayloadComplete", "rt": $n[0].Void, "p": [$n[0].String] }, { "ab": true, "a": 2, "n": "OnGetPurchasesComplete", "t": 8, "pi": [{ "n": "message", "pt": $n[0].String, "ps": 0 }], "sn": "Facebook$Unity$Mobile$IMobileFacebookCallbackHandler$OnGetPurchasesComplete", "rt": $n[0].Void, "p": [$n[0].String] }, { "ab": true, "a": 2, "n": "OnInitCloudGameComplete", "t": 8, "pi": [{ "n": "message", "pt": $n[0].String, "ps": 0 }], "sn": "Facebook$Unity$Mobile$IMobileFacebookCallbackHandler$OnInitCloudGameComplete", "rt": $n[0].Void, "p": [$n[0].String] }, { "ab": true, "a": 2, "n": "OnLoadInterstitialAdComplete", "t": 8, "pi": [{ "n": "message", "pt": $n[0].String, "ps": 0 }], "sn": "Facebook$Unity$Mobile$IMobileFacebookCallbackHandler$OnLoadInterstitialAdComplete", "rt": $n[0].Void, "p": [$n[0].String] }, { "ab": true, "a": 2, "n": "OnLoadRewardedVideoComplete", "t": 8, "pi": [{ "n": "message", "pt": $n[0].String, "ps": 0 }], "sn": "Facebook$Unity$Mobile$IMobileFacebookCallbackHandler$OnLoadRewardedVideoComplete", "rt": $n[0].Void, "p": [$n[0].String] }, { "ab": true, "a": 2, "n": "OnOnIAPReadyComplete", "t": 8, "pi": [{ "n": "message", "pt": $n[0].String, "ps": 0 }], "sn": "Facebook$Unity$Mobile$IMobileFacebookCallbackHandler$OnOnIAPReadyComplete", "rt": $n[0].Void, "p": [$n[0].String] }, { "ab": true, "a": 2, "n": "OnOpenAppStoreComplete", "t": 8, "pi": [{ "n": "message", "pt": $n[0].String, "ps": 0 }], "sn": "Facebook$Unity$Mobile$IMobileFacebookCallbackHandler$OnOpenAppStoreComplete", "rt": $n[0].Void, "p": [$n[0].String] }, { "ab": true, "a": 2, "n": "OnPostSessionScoreComplete", "t": 8, "pi": [{ "n": "message", "pt": $n[0].String, "ps": 0 }], "sn": "Facebook$Unity$Mobile$IMobileFacebookCallbackHandler$OnPostSessionScoreComplete", "rt": $n[0].Void, "p": [$n[0].String] }, { "ab": true, "a": 2, "n": "OnPurchaseComplete", "t": 8, "pi": [{ "n": "message", "pt": $n[0].String, "ps": 0 }], "sn": "Facebook$Unity$Mobile$IMobileFacebookCallbackHandler$OnPurchaseComplete", "rt": $n[0].Void, "p": [$n[0].String] }, { "ab": true, "a": 2, "n": "OnRefreshCurrentAccessTokenComplete", "t": 8, "pi": [{ "n": "message", "pt": $n[0].String, "ps": 0 }], "sn": "Facebook$Unity$Mobile$IMobileFacebookCallbackHandler$OnRefreshCurrentAccessTokenComplete", "rt": $n[0].Void, "p": [$n[0].String] }, { "ab": true, "a": 2, "n": "OnScheduleAppToUserNotificationComplete", "t": 8, "pi": [{ "n": "message", "pt": $n[0].String, "ps": 0 }], "sn": "Facebook$Unity$Mobile$IMobileFacebookCallbackHandler$OnScheduleAppToUserNotificationComplete", "rt": $n[0].Void, "p": [$n[0].String] }, { "ab": true, "a": 2, "n": "OnShowInterstitialAdComplete", "t": 8, "pi": [{ "n": "message", "pt": $n[0].String, "ps": 0 }], "sn": "Facebook$Unity$Mobile$IMobileFacebookCallbackHandler$OnShowInterstitialAdComplete", "rt": $n[0].Void, "p": [$n[0].String] }, { "ab": true, "a": 2, "n": "OnShowRewardedVideoComplete", "t": 8, "pi": [{ "n": "message", "pt": $n[0].String, "ps": 0 }], "sn": "Facebook$Unity$Mobile$IMobileFacebookCallbackHandler$OnShowRewardedVideoComplete", "rt": $n[0].Void, "p": [$n[0].String] }, { "ab": true, "a": 2, "n": "OnUploadImageToMediaLibraryComplete", "t": 8, "pi": [{ "n": "message", "pt": $n[0].String, "ps": 0 }], "sn": "Facebook$Unity$Mobile$IMobileFacebookCallbackHandler$OnUploadImageToMediaLibraryComplete", "rt": $n[0].Void, "p": [$n[0].String] }, { "ab": true, "a": 2, "n": "OnUploadVideoToMediaLibraryComplete", "t": 8, "pi": [{ "n": "message", "pt": $n[0].String, "ps": 0 }], "sn": "Facebook$Unity$Mobile$IMobileFacebookCallbackHandler$OnUploadVideoToMediaLibraryComplete", "rt": $n[0].Void, "p": [$n[0].String] }] }; }, $n);
    /*Facebook.Unity.Mobile.IMobileFacebookCallbackHandler end.*/

    /*Facebook.Unity.Mobile.IMobileFacebookImplementation start.*/
    $m("Facebook.Unity.Mobile.IMobileFacebookImplementation", function() { return { "att": 160, "a": 4 }; }, $n);
    /*Facebook.Unity.Mobile.IMobileFacebookImplementation end.*/

    /*Facebook.Unity.Mobile.IMobileFacebookResultHandler start.*/
    $m("Facebook.Unity.Mobile.IMobileFacebookResultHandler", function() { return { "att": 160, "a": 4, "m": [{ "ab": true, "a": 2, "n": "OnConsumePurchaseComplete", "t": 8, "pi": [{ "n": "resultContainer", "pt": $n[8].ResultContainer, "ps": 0 }], "sn": "Facebook$Unity$Mobile$IMobileFacebookResultHandler$OnConsumePurchaseComplete", "rt": $n[0].Void, "p": [$n[8].ResultContainer] }, { "ab": true, "a": 2, "n": "OnFetchDeferredAppLinkComplete", "t": 8, "pi": [{ "n": "resultContainer", "pt": $n[8].ResultContainer, "ps": 0 }], "sn": "Facebook$Unity$Mobile$IMobileFacebookResultHandler$OnFetchDeferredAppLinkComplete", "rt": $n[0].Void, "p": [$n[8].ResultContainer] }, { "ab": true, "a": 2, "n": "OnFriendFinderComplete", "t": 8, "pi": [{ "n": "resultContainer", "pt": $n[8].ResultContainer, "ps": 0 }], "sn": "Facebook$Unity$Mobile$IMobileFacebookResultHandler$OnFriendFinderComplete", "rt": $n[0].Void, "p": [$n[8].ResultContainer] }, { "ab": true, "a": 2, "n": "OnGetCatalogComplete", "t": 8, "pi": [{ "n": "resultContainer", "pt": $n[8].ResultContainer, "ps": 0 }], "sn": "Facebook$Unity$Mobile$IMobileFacebookResultHandler$OnGetCatalogComplete", "rt": $n[0].Void, "p": [$n[8].ResultContainer] }, { "ab": true, "a": 2, "n": "OnGetPayloadComplete", "t": 8, "pi": [{ "n": "resultContainer", "pt": $n[8].ResultContainer, "ps": 0 }], "sn": "Facebook$Unity$Mobile$IMobileFacebookResultHandler$OnGetPayloadComplete", "rt": $n[0].Void, "p": [$n[8].ResultContainer] }, { "ab": true, "a": 2, "n": "OnGetPurchasesComplete", "t": 8, "pi": [{ "n": "resultContainer", "pt": $n[8].ResultContainer, "ps": 0 }], "sn": "Facebook$Unity$Mobile$IMobileFacebookResultHandler$OnGetPurchasesComplete", "rt": $n[0].Void, "p": [$n[8].ResultContainer] }, { "ab": true, "a": 2, "n": "OnInitCloudGameComplete", "t": 8, "pi": [{ "n": "resultContainer", "pt": $n[8].ResultContainer, "ps": 0 }], "sn": "Facebook$Unity$Mobile$IMobileFacebookResultHandler$OnInitCloudGameComplete", "rt": $n[0].Void, "p": [$n[8].ResultContainer] }, { "ab": true, "a": 2, "n": "OnLoadInterstitialAdComplete", "t": 8, "pi": [{ "n": "resultContainer", "pt": $n[8].ResultContainer, "ps": 0 }], "sn": "Facebook$Unity$Mobile$IMobileFacebookResultHandler$OnLoadInterstitialAdComplete", "rt": $n[0].Void, "p": [$n[8].ResultContainer] }, { "ab": true, "a": 2, "n": "OnLoadRewardedVideoComplete", "t": 8, "pi": [{ "n": "resultContainer", "pt": $n[8].ResultContainer, "ps": 0 }], "sn": "Facebook$Unity$Mobile$IMobileFacebookResultHandler$OnLoadRewardedVideoComplete", "rt": $n[0].Void, "p": [$n[8].ResultContainer] }, { "ab": true, "a": 2, "n": "OnOnIAPReadyComplete", "t": 8, "pi": [{ "n": "resultContainer", "pt": $n[8].ResultContainer, "ps": 0 }], "sn": "Facebook$Unity$Mobile$IMobileFacebookResultHandler$OnOnIAPReadyComplete", "rt": $n[0].Void, "p": [$n[8].ResultContainer] }, { "ab": true, "a": 2, "n": "OnOpenAppStoreComplete", "t": 8, "pi": [{ "n": "resultContainer", "pt": $n[8].ResultContainer, "ps": 0 }], "sn": "Facebook$Unity$Mobile$IMobileFacebookResultHandler$OnOpenAppStoreComplete", "rt": $n[0].Void, "p": [$n[8].ResultContainer] }, { "ab": true, "a": 2, "n": "OnPostSessionScoreComplete", "t": 8, "pi": [{ "n": "resultContainer", "pt": $n[8].ResultContainer, "ps": 0 }], "sn": "Facebook$Unity$Mobile$IMobileFacebookResultHandler$OnPostSessionScoreComplete", "rt": $n[0].Void, "p": [$n[8].ResultContainer] }, { "ab": true, "a": 2, "n": "OnPurchaseComplete", "t": 8, "pi": [{ "n": "resultContainer", "pt": $n[8].ResultContainer, "ps": 0 }], "sn": "Facebook$Unity$Mobile$IMobileFacebookResultHandler$OnPurchaseComplete", "rt": $n[0].Void, "p": [$n[8].ResultContainer] }, { "ab": true, "a": 2, "n": "OnRefreshCurrentAccessTokenComplete", "t": 8, "pi": [{ "n": "resultContainer", "pt": $n[8].ResultContainer, "ps": 0 }], "sn": "Facebook$Unity$Mobile$IMobileFacebookResultHandler$OnRefreshCurrentAccessTokenComplete", "rt": $n[0].Void, "p": [$n[8].ResultContainer] }, { "ab": true, "a": 2, "n": "OnScheduleAppToUserNotificationComplete", "t": 8, "pi": [{ "n": "resultContainer", "pt": $n[8].ResultContainer, "ps": 0 }], "sn": "Facebook$Unity$Mobile$IMobileFacebookResultHandler$OnScheduleAppToUserNotificationComplete", "rt": $n[0].Void, "p": [$n[8].ResultContainer] }, { "ab": true, "a": 2, "n": "OnShowInterstitialAdComplete", "t": 8, "pi": [{ "n": "resultContainer", "pt": $n[8].ResultContainer, "ps": 0 }], "sn": "Facebook$Unity$Mobile$IMobileFacebookResultHandler$OnShowInterstitialAdComplete", "rt": $n[0].Void, "p": [$n[8].ResultContainer] }, { "ab": true, "a": 2, "n": "OnShowRewardedVideoComplete", "t": 8, "pi": [{ "n": "resultContainer", "pt": $n[8].ResultContainer, "ps": 0 }], "sn": "Facebook$Unity$Mobile$IMobileFacebookResultHandler$OnShowRewardedVideoComplete", "rt": $n[0].Void, "p": [$n[8].ResultContainer] }, { "ab": true, "a": 2, "n": "OnUploadImageToMediaLibraryComplete", "t": 8, "pi": [{ "n": "resultContainer", "pt": $n[8].ResultContainer, "ps": 0 }], "sn": "Facebook$Unity$Mobile$IMobileFacebookResultHandler$OnUploadImageToMediaLibraryComplete", "rt": $n[0].Void, "p": [$n[8].ResultContainer] }, { "ab": true, "a": 2, "n": "OnUploadVideoToMediaLibraryComplete", "t": 8, "pi": [{ "n": "resultContainer", "pt": $n[8].ResultContainer, "ps": 0 }], "sn": "Facebook$Unity$Mobile$IMobileFacebookResultHandler$OnUploadVideoToMediaLibraryComplete", "rt": $n[0].Void, "p": [$n[8].ResultContainer] }] }; }, $n);
    /*Facebook.Unity.Mobile.IMobileFacebookResultHandler end.*/

    /*Facebook.Unity.Mobile.MobileFacebook start.*/
    $m("Facebook.Unity.Mobile.MobileFacebook", function() { return { "att": 1048704, "a": 4, "m": [{ "a": 3, "isSynthetic": true, "n": ".ctor", "t": 1, "sn": "ctor" }, { "v": true, "a": 2, "n": "ConsumePurchase", "t": 8, "pi": [{ "n": "purchaseToken", "pt": $n[0].String, "ps": 0 }, { "n": "callback", "pt": Function, "ps": 1 }], "sn": "ConsumePurchase", "rt": $n[0].Void, "p": [$n[0].String, Function] }, { "ab": true, "a": 2, "n": "CurrentAuthenticationToken", "t": 8, "sn": "CurrentAuthenticationToken", "rt": $n[8].AuthenticationToken }, { "ab": true, "a": 2, "n": "CurrentProfile", "t": 8, "sn": "CurrentProfile", "rt": $n[8].Profile }, { "ab": true, "a": 2, "n": "FetchDeferredAppLink", "t": 8, "pi": [{ "n": "callback", "pt": Function, "ps": 0 }], "sn": "FetchDeferredAppLink", "rt": $n[0].Void, "p": [Function] }, { "v": true, "a": 2, "n": "GetCatalog", "t": 8, "pi": [{ "n": "callback", "pt": Function, "ps": 0 }], "sn": "GetCatalog", "rt": $n[0].Void, "p": [Function] }, { "v": true, "a": 2, "n": "GetPayload", "t": 8, "pi": [{ "n": "callback", "pt": Function, "ps": 0 }], "sn": "GetPayload", "rt": $n[0].Void, "p": [Function] }, { "v": true, "a": 2, "n": "GetPurchases", "t": 8, "pi": [{ "n": "callback", "pt": Function, "ps": 0 }], "sn": "GetPurchases", "rt": $n[0].Void, "p": [Function] }, { "v": true, "a": 2, "n": "InitCloudGame", "t": 8, "pi": [{ "n": "callback", "pt": Function, "ps": 0 }], "sn": "InitCloudGame", "rt": $n[0].Void, "p": [Function] }, { "ab": true, "a": 2, "n": "IsImplicitPurchaseLoggingEnabled", "t": 8, "sn": "IsImplicitPurchaseLoggingEnabled", "rt": $n[0].Boolean, "box": function($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString); } }, { "v": true, "a": 2, "n": "LoadInterstitialAd", "t": 8, "pi": [{ "n": "placementID", "pt": $n[0].String, "ps": 0 }, { "n": "callback", "pt": Function, "ps": 1 }], "sn": "LoadInterstitialAd", "rt": $n[0].Void, "p": [$n[0].String, Function] }, { "v": true, "a": 2, "n": "LoadRewardedVideo", "t": 8, "pi": [{ "n": "placementID", "pt": $n[0].String, "ps": 0 }, { "n": "callback", "pt": Function, "ps": 1 }], "sn": "LoadRewardedVideo", "rt": $n[0].Void, "p": [$n[0].String, Function] }, { "ab": true, "a": 2, "n": "LoginWithTrackingPreference", "t": 8, "pi": [{ "n": "tracking", "pt": $n[0].String, "ps": 0 }, { "n": "permissions", "pt": $n[2].IEnumerable$1(System.String), "ps": 1 }, { "n": "nonce", "pt": $n[0].String, "ps": 2 }, { "n": "callback", "pt": Function, "ps": 3 }], "sn": "LoginWithTrackingPreference", "rt": $n[0].Void, "p": [$n[0].String, $n[2].IEnumerable$1(System.String), $n[0].String, Function] }, { "ov": true, "a": 2, "n": "OnAppRequestsComplete", "t": 8, "pi": [{ "n": "resultContainer", "pt": $n[8].ResultContainer, "ps": 0 }], "sn": "OnAppRequestsComplete", "rt": $n[0].Void, "p": [$n[8].ResultContainer] }, { "a": 2, "n": "OnConsumePurchaseComplete", "t": 8, "pi": [{ "n": "resultContainer", "pt": $n[8].ResultContainer, "ps": 0 }], "sn": "OnConsumePurchaseComplete", "rt": $n[0].Void, "p": [$n[8].ResultContainer] }, { "a": 2, "n": "OnFetchDeferredAppLinkComplete", "t": 8, "pi": [{ "n": "resultContainer", "pt": $n[8].ResultContainer, "ps": 0 }], "sn": "OnFetchDeferredAppLinkComplete", "rt": $n[0].Void, "p": [$n[8].ResultContainer] }, { "a": 2, "n": "OnFriendFinderComplete", "t": 8, "pi": [{ "n": "resultContainer", "pt": $n[8].ResultContainer, "ps": 0 }], "sn": "OnFriendFinderComplete", "rt": $n[0].Void, "p": [$n[8].ResultContainer] }, { "ov": true, "a": 2, "n": "OnGetAppLinkComplete", "t": 8, "pi": [{ "n": "resultContainer", "pt": $n[8].ResultContainer, "ps": 0 }], "sn": "OnGetAppLinkComplete", "rt": $n[0].Void, "p": [$n[8].ResultContainer] }, { "a": 2, "n": "OnGetCatalogComplete", "t": 8, "pi": [{ "n": "resultContainer", "pt": $n[8].ResultContainer, "ps": 0 }], "sn": "OnGetCatalogComplete", "rt": $n[0].Void, "p": [$n[8].ResultContainer] }, { "a": 2, "n": "OnGetPayloadComplete", "t": 8, "pi": [{ "n": "resultContainer", "pt": $n[8].ResultContainer, "ps": 0 }], "sn": "OnGetPayloadComplete", "rt": $n[0].Void, "p": [$n[8].ResultContainer] }, { "a": 2, "n": "OnGetPurchasesComplete", "t": 8, "pi": [{ "n": "resultContainer", "pt": $n[8].ResultContainer, "ps": 0 }], "sn": "OnGetPurchasesComplete", "rt": $n[0].Void, "p": [$n[8].ResultContainer] }, { "v": true, "a": 2, "n": "OnIAPReady", "t": 8, "pi": [{ "n": "callback", "pt": Function, "ps": 0 }], "sn": "OnIAPReady", "rt": $n[0].Void, "p": [Function] }, { "a": 2, "n": "OnInitCloudGameComplete", "t": 8, "pi": [{ "n": "resultContainer", "pt": $n[8].ResultContainer, "ps": 0 }], "sn": "OnInitCloudGameComplete", "rt": $n[0].Void, "p": [$n[8].ResultContainer] }, { "a": 2, "n": "OnLoadInterstitialAdComplete", "t": 8, "pi": [{ "n": "resultContainer", "pt": $n[8].ResultContainer, "ps": 0 }], "sn": "OnLoadInterstitialAdComplete", "rt": $n[0].Void, "p": [$n[8].ResultContainer] }, { "a": 2, "n": "OnLoadRewardedVideoComplete", "t": 8, "pi": [{ "n": "resultContainer", "pt": $n[8].ResultContainer, "ps": 0 }], "sn": "OnLoadRewardedVideoComplete", "rt": $n[0].Void, "p": [$n[8].ResultContainer] }, { "ov": true, "a": 2, "n": "OnLoginComplete", "t": 8, "pi": [{ "n": "resultContainer", "pt": $n[8].ResultContainer, "ps": 0 }], "sn": "OnLoginComplete", "rt": $n[0].Void, "p": [$n[8].ResultContainer] }, { "a": 2, "n": "OnOnIAPReadyComplete", "t": 8, "pi": [{ "n": "resultContainer", "pt": $n[8].ResultContainer, "ps": 0 }], "sn": "OnOnIAPReadyComplete", "rt": $n[0].Void, "p": [$n[8].ResultContainer] }, { "a": 2, "n": "OnOpenAppStoreComplete", "t": 8, "pi": [{ "n": "resultContainer", "pt": $n[8].ResultContainer, "ps": 0 }], "sn": "OnOpenAppStoreComplete", "rt": $n[0].Void, "p": [$n[8].ResultContainer] }, { "a": 2, "n": "OnPostSessionScoreComplete", "t": 8, "pi": [{ "n": "resultContainer", "pt": $n[8].ResultContainer, "ps": 0 }], "sn": "OnPostSessionScoreComplete", "rt": $n[0].Void, "p": [$n[8].ResultContainer] }, { "a": 2, "n": "OnPurchaseComplete", "t": 8, "pi": [{ "n": "resultContainer", "pt": $n[8].ResultContainer, "ps": 0 }], "sn": "OnPurchaseComplete", "rt": $n[0].Void, "p": [$n[8].ResultContainer] }, { "a": 2, "n": "OnRefreshCurrentAccessTokenComplete", "t": 8, "pi": [{ "n": "resultContainer", "pt": $n[8].ResultContainer, "ps": 0 }], "sn": "OnRefreshCurrentAccessTokenComplete", "rt": $n[0].Void, "p": [$n[8].ResultContainer] }, { "a": 2, "n": "OnScheduleAppToUserNotificationComplete", "t": 8, "pi": [{ "n": "resultContainer", "pt": $n[8].ResultContainer, "ps": 0 }], "sn": "OnScheduleAppToUserNotificationComplete", "rt": $n[0].Void, "p": [$n[8].ResultContainer] }, { "ov": true, "a": 2, "n": "OnShareLinkComplete", "t": 8, "pi": [{ "n": "resultContainer", "pt": $n[8].ResultContainer, "ps": 0 }], "sn": "OnShareLinkComplete", "rt": $n[0].Void, "p": [$n[8].ResultContainer] }, { "a": 2, "n": "OnShowInterstitialAdComplete", "t": 8, "pi": [{ "n": "resultContainer", "pt": $n[8].ResultContainer, "ps": 0 }], "sn": "OnShowInterstitialAdComplete", "rt": $n[0].Void, "p": [$n[8].ResultContainer] }, { "a": 2, "n": "OnShowRewardedVideoComplete", "t": 8, "pi": [{ "n": "resultContainer", "pt": $n[8].ResultContainer, "ps": 0 }], "sn": "OnShowRewardedVideoComplete", "rt": $n[0].Void, "p": [$n[8].ResultContainer] }, { "a": 2, "n": "OnUploadImageToMediaLibraryComplete", "t": 8, "pi": [{ "n": "resultContainer", "pt": $n[8].ResultContainer, "ps": 0 }], "sn": "OnUploadImageToMediaLibraryComplete", "rt": $n[0].Void, "p": [$n[8].ResultContainer] }, { "a": 2, "n": "OnUploadVideoToMediaLibraryComplete", "t": 8, "pi": [{ "n": "resultContainer", "pt": $n[8].ResultContainer, "ps": 0 }], "sn": "OnUploadVideoToMediaLibraryComplete", "rt": $n[0].Void, "p": [$n[8].ResultContainer] }, { "v": true, "a": 2, "n": "OpenAppStore", "t": 8, "pi": [{ "n": "callback", "pt": Function, "ps": 0 }], "sn": "OpenAppStore", "rt": $n[0].Void, "p": [Function] }, { "v": true, "a": 2, "n": "OpenFriendFinderDialog", "t": 8, "pi": [{ "n": "callback", "pt": Function, "ps": 0 }], "sn": "OpenFriendFinderDialog", "rt": $n[0].Void, "p": [Function] }, { "v": true, "a": 2, "n": "PostSessionScore", "t": 8, "pi": [{ "n": "score", "pt": $n[0].Int32, "ps": 0 }, { "n": "callback", "pt": Function, "ps": 1 }], "sn": "PostSessionScore", "rt": $n[0].Void, "p": [$n[0].Int32, Function] }, { "v": true, "a": 2, "n": "Purchase", "t": 8, "pi": [{ "n": "productID", "pt": $n[0].String, "ps": 0 }, { "n": "callback", "pt": Function, "ps": 1 }, { "n": "developerPayload", "pt": $n[0].String, "ps": 2 }], "sn": "Purchase", "rt": $n[0].Void, "p": [$n[0].String, Function, $n[0].String] }, { "ab": true, "a": 2, "n": "RefreshCurrentAccessToken", "t": 8, "pi": [{ "n": "callback", "pt": Function, "ps": 0 }], "sn": "RefreshCurrentAccessToken", "rt": $n[0].Void, "p": [Function] }, { "v": true, "a": 2, "n": "ScheduleAppToUserNotification", "t": 8, "pi": [{ "n": "title", "pt": $n[0].String, "ps": 0 }, { "n": "body", "pt": $n[0].String, "ps": 1 }, { "n": "media", "pt": $n[0].Uri, "ps": 2 }, { "n": "timeInterval", "pt": $n[0].Int32, "ps": 3 }, { "n": "payload", "pt": $n[0].String, "ps": 4 }, { "n": "callback", "pt": Function, "ps": 5 }], "sn": "ScheduleAppToUserNotification", "rt": $n[0].Void, "p": [$n[0].String, $n[0].String, $n[0].Uri, $n[0].Int32, $n[0].String, Function] }, { "ab": true, "a": 2, "n": "SetAdvertiserIDCollectionEnabled", "t": 8, "pi": [{ "n": "advertiserIDCollectionEnabled", "pt": $n[0].Boolean, "ps": 0 }], "sn": "SetAdvertiserIDCollectionEnabled", "rt": $n[0].Void, "p": [$n[0].Boolean] }, { "ab": true, "a": 2, "n": "SetAdvertiserTrackingEnabled", "t": 8, "pi": [{ "n": "advertiserTrackingEnabled", "pt": $n[0].Boolean, "ps": 0 }], "sn": "SetAdvertiserTrackingEnabled", "rt": $n[0].Boolean, "p": [$n[0].Boolean], "box": function($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString); } }, { "ab": true, "a": 2, "n": "SetAutoLogAppEventsEnabled", "t": 8, "pi": [{ "n": "autoLogAppEventsEnabled", "pt": $n[0].Boolean, "ps": 0 }], "sn": "SetAutoLogAppEventsEnabled", "rt": $n[0].Void, "p": [$n[0].Boolean] }, { "ab": true, "a": 2, "n": "SetDataProcessingOptions", "t": 8, "pi": [{ "n": "options", "pt": $n[2].IEnumerable$1(System.String), "ps": 0 }, { "n": "country", "pt": $n[0].Int32, "ps": 1 }, { "n": "state", "pt": $n[0].Int32, "ps": 2 }], "sn": "SetDataProcessingOptions", "rt": $n[0].Void, "p": [$n[2].IEnumerable$1(System.String), $n[0].Int32, $n[0].Int32] }, { "ab": true, "a": 2, "n": "SetPushNotificationsDeviceTokenString", "t": 8, "pi": [{ "n": "token", "pt": $n[0].String, "ps": 0 }], "sn": "SetPushNotificationsDeviceTokenString", "rt": $n[0].Void, "p": [$n[0].String] }, { "ab": true, "a": 3, "n": "SetShareDialogMode", "t": 8, "pi": [{ "n": "mode", "pt": $n[8].ShareDialogMode, "ps": 0 }], "sn": "SetShareDialogMode", "rt": $n[0].Void, "p": [$n[8].ShareDialogMode] }, { "v": true, "a": 2, "n": "ShowInterstitialAd", "t": 8, "pi": [{ "n": "placementID", "pt": $n[0].String, "ps": 0 }, { "n": "callback", "pt": Function, "ps": 1 }], "sn": "ShowInterstitialAd", "rt": $n[0].Void, "p": [$n[0].String, Function] }, { "v": true, "a": 2, "n": "ShowRewardedVideo", "t": 8, "pi": [{ "n": "placementID", "pt": $n[0].String, "ps": 0 }, { "n": "callback", "pt": Function, "ps": 1 }], "sn": "ShowRewardedVideo", "rt": $n[0].Void, "p": [$n[0].String, Function] }, { "ab": true, "a": 2, "n": "UpdateUserProperties", "t": 8, "pi": [{ "n": "parameters", "pt": $n[2].Dictionary$2(System.String, System.String), "ps": 0 }], "sn": "UpdateUserProperties", "rt": $n[0].Void, "p": [$n[2].Dictionary$2(System.String, System.String)] }, { "v": true, "a": 2, "n": "UploadImageToMediaLibrary", "t": 8, "pi": [{ "n": "caption", "pt": $n[0].String, "ps": 0 }, { "n": "imageUri", "pt": $n[0].Uri, "ps": 1 }, { "n": "shouldLaunchMediaDialog", "pt": $n[0].Boolean, "ps": 2 }, { "n": "callback", "pt": Function, "ps": 3 }], "sn": "UploadImageToMediaLibrary", "rt": $n[0].Void, "p": [$n[0].String, $n[0].Uri, $n[0].Boolean, Function] }, { "v": true, "a": 2, "n": "UploadVideoToMediaLibrary", "t": 8, "pi": [{ "n": "caption", "pt": $n[0].String, "ps": 0 }, { "n": "videoUri", "pt": $n[0].Uri, "ps": 1 }, { "n": "callback", "pt": Function, "ps": 2 }], "sn": "UploadVideoToMediaLibrary", "rt": $n[0].Void, "p": [$n[0].String, $n[0].Uri, Function] }, { "v": true, "a": 2, "n": "ShareDialogMode", "t": 16, "rt": $n[8].ShareDialogMode, "g": { "v": true, "a": 2, "n": "get_ShareDialogMode", "t": 8, "rt": $n[8].ShareDialogMode, "fg": "ShareDialogMode", "box": function($v) { return Bridge.box($v, Facebook.Unity.ShareDialogMode, System.Enum.toStringFn(Facebook.Unity.ShareDialogMode)); } }, "s": { "v": true, "a": 2, "n": "set_ShareDialogMode", "t": 8, "p": [$n[8].ShareDialogMode], "rt": $n[0].Void, "fs": "ShareDialogMode" }, "fn": "ShareDialogMode" }, { "ab": true, "a": 2, "n": "UserID", "t": 16, "rt": $n[0].String, "g": { "ab": true, "a": 2, "n": "get_UserID", "t": 8, "rt": $n[0].String, "fg": "UserID" }, "s": { "ab": true, "a": 2, "n": "set_UserID", "t": 8, "p": [$n[0].String], "rt": $n[0].Void, "fs": "UserID" }, "fn": "UserID" }, { "a": 1, "backing": true, "n": "<ShareDialogMode>k__BackingField", "t": 4, "rt": $n[8].ShareDialogMode, "sn": "ShareDialogMode", "box": function($v) { return Bridge.box($v, Facebook.Unity.ShareDialogMode, System.Enum.toStringFn(Facebook.Unity.ShareDialogMode)); } }, { "a": 1, "backing": true, "n": "<UserID>k__BackingField", "t": 4, "rt": $n[0].String, "sn": "UserID" }] }; }, $n);
    /*Facebook.Unity.Mobile.MobileFacebook end.*/

    /*Facebook.Unity.Mobile.MobileFacebookGameObject start.*/
    $m("Facebook.Unity.Mobile.MobileFacebookGameObject", function() { return { "att": 1048704, "a": 4, "m": [{ "a": 3, "isSynthetic": true, "n": ".ctor", "t": 1, "sn": "ctor" }, { "a": 2, "n": "OnConsumePurchaseComplete", "t": 8, "pi": [{ "n": "message", "pt": $n[0].String, "ps": 0 }], "sn": "OnConsumePurchaseComplete", "rt": $n[0].Void, "p": [$n[0].String] }, { "a": 2, "n": "OnFetchDeferredAppLinkComplete", "t": 8, "pi": [{ "n": "message", "pt": $n[0].String, "ps": 0 }], "sn": "OnFetchDeferredAppLinkComplete", "rt": $n[0].Void, "p": [$n[0].String] }, { "a": 2, "n": "OnFriendFinderComplete", "t": 8, "pi": [{ "n": "message", "pt": $n[0].String, "ps": 0 }], "sn": "OnFriendFinderComplete", "rt": $n[0].Void, "p": [$n[0].String] }, { "a": 2, "n": "OnGetCatalogComplete", "t": 8, "pi": [{ "n": "message", "pt": $n[0].String, "ps": 0 }], "sn": "OnGetCatalogComplete", "rt": $n[0].Void, "p": [$n[0].String] }, { "a": 2, "n": "OnGetPayloadComplete", "t": 8, "pi": [{ "n": "message", "pt": $n[0].String, "ps": 0 }], "sn": "OnGetPayloadComplete", "rt": $n[0].Void, "p": [$n[0].String] }, { "a": 2, "n": "OnGetPurchasesComplete", "t": 8, "pi": [{ "n": "message", "pt": $n[0].String, "ps": 0 }], "sn": "OnGetPurchasesComplete", "rt": $n[0].Void, "p": [$n[0].String] }, { "a": 2, "n": "OnInitCloudGameComplete", "t": 8, "pi": [{ "n": "message", "pt": $n[0].String, "ps": 0 }], "sn": "OnInitCloudGameComplete", "rt": $n[0].Void, "p": [$n[0].String] }, { "a": 2, "n": "OnLoadInterstitialAdComplete", "t": 8, "pi": [{ "n": "message", "pt": $n[0].String, "ps": 0 }], "sn": "OnLoadInterstitialAdComplete", "rt": $n[0].Void, "p": [$n[0].String] }, { "a": 2, "n": "OnLoadRewardedVideoComplete", "t": 8, "pi": [{ "n": "message", "pt": $n[0].String, "ps": 0 }], "sn": "OnLoadRewardedVideoComplete", "rt": $n[0].Void, "p": [$n[0].String] }, { "a": 2, "n": "OnOnIAPReadyComplete", "t": 8, "pi": [{ "n": "message", "pt": $n[0].String, "ps": 0 }], "sn": "OnOnIAPReadyComplete", "rt": $n[0].Void, "p": [$n[0].String] }, { "a": 2, "n": "OnOpenAppStoreComplete", "t": 8, "pi": [{ "n": "message", "pt": $n[0].String, "ps": 0 }], "sn": "OnOpenAppStoreComplete", "rt": $n[0].Void, "p": [$n[0].String] }, { "v": true, "a": 2, "n": "OnPostSessionScoreComplete", "t": 8, "pi": [{ "n": "message", "pt": $n[0].String, "ps": 0 }], "sn": "OnPostSessionScoreComplete", "rt": $n[0].Void, "p": [$n[0].String] }, { "a": 2, "n": "OnPurchaseComplete", "t": 8, "pi": [{ "n": "message", "pt": $n[0].String, "ps": 0 }], "sn": "OnPurchaseComplete", "rt": $n[0].Void, "p": [$n[0].String] }, { "a": 2, "n": "OnRefreshCurrentAccessTokenComplete", "t": 8, "pi": [{ "n": "message", "pt": $n[0].String, "ps": 0 }], "sn": "OnRefreshCurrentAccessTokenComplete", "rt": $n[0].Void, "p": [$n[0].String] }, { "a": 2, "n": "OnScheduleAppToUserNotificationComplete", "t": 8, "pi": [{ "n": "message", "pt": $n[0].String, "ps": 0 }], "sn": "OnScheduleAppToUserNotificationComplete", "rt": $n[0].Void, "p": [$n[0].String] }, { "a": 2, "n": "OnShowInterstitialAdComplete", "t": 8, "pi": [{ "n": "message", "pt": $n[0].String, "ps": 0 }], "sn": "OnShowInterstitialAdComplete", "rt": $n[0].Void, "p": [$n[0].String] }, { "a": 2, "n": "OnShowRewardedVideoComplete", "t": 8, "pi": [{ "n": "message", "pt": $n[0].String, "ps": 0 }], "sn": "OnShowRewardedVideoComplete", "rt": $n[0].Void, "p": [$n[0].String] }, { "a": 2, "n": "OnUploadImageToMediaLibraryComplete", "t": 8, "pi": [{ "n": "message", "pt": $n[0].String, "ps": 0 }], "sn": "OnUploadImageToMediaLibraryComplete", "rt": $n[0].Void, "p": [$n[0].String] }, { "a": 2, "n": "OnUploadVideoToMediaLibraryComplete", "t": 8, "pi": [{ "n": "message", "pt": $n[0].String, "ps": 0 }], "sn": "OnUploadVideoToMediaLibraryComplete", "rt": $n[0].Void, "p": [$n[0].String] }, { "a": 4, "n": "MobileFacebook", "t": 16, "rt": $n[9].IMobileFacebookImplementation, "g": { "a": 4, "n": "get_MobileFacebook", "t": 8, "rt": $n[9].IMobileFacebookImplementation, "fg": "MobileFacebook" }, "fn": "MobileFacebook" }] }; }, $n);
    /*Facebook.Unity.Mobile.MobileFacebookGameObject end.*/

    /*Facebook.Unity.Mobile.IOS.IIOSWrapper start.*/
    $m("Facebook.Unity.Mobile.IOS.IIOSWrapper", function() { return { "att": 160, "a": 4, "m": [{ "ab": true, "a": 2, "n": "AppRequest", "t": 8, "pi": [{ "n": "requestId", "pt": $n[0].Int32, "ps": 0 }, { "n": "message", "pt": $n[0].String, "ps": 1 }, { "n": "actionType", "pt": $n[0].String, "ps": 2 }, { "n": "objectId", "pt": $n[0].String, "ps": 3 }, { "n": "to", "pt": $n[0].Array.type(System.String), "ps": 4 }, { "n": "toLength", "pt": $n[0].Int32, "ps": 5 }, { "n": "filters", "pt": $n[0].String, "ps": 6 }, { "n": "excludeIds", "pt": $n[0].Array.type(System.String), "ps": 7 }, { "n": "excludeIdsLength", "pt": $n[0].Int32, "ps": 8 }, { "n": "hasMaxRecipients", "pt": $n[0].Boolean, "ps": 9 }, { "n": "maxRecipients", "pt": $n[0].Int32, "ps": 10 }, { "n": "data", "pt": $n[0].String, "ps": 11 }, { "n": "title", "pt": $n[0].String, "ps": 12 }], "sn": "Facebook$Unity$Mobile$IOS$IIOSWrapper$AppRequest", "rt": $n[0].Void, "p": [$n[0].Int32, $n[0].String, $n[0].String, $n[0].String, $n[0].Array.type(System.String), $n[0].Int32, $n[0].String, $n[0].Array.type(System.String), $n[0].Int32, $n[0].Boolean, $n[0].Int32, $n[0].String, $n[0].String] }, { "ab": true, "a": 2, "n": "CurrentAuthenticationToken", "t": 8, "sn": "Facebook$Unity$Mobile$IOS$IIOSWrapper$CurrentAuthenticationToken", "rt": $n[8].AuthenticationToken }, { "ab": true, "a": 2, "n": "CurrentProfile", "t": 8, "sn": "Facebook$Unity$Mobile$IOS$IIOSWrapper$CurrentProfile", "rt": $n[8].Profile }, { "ab": true, "a": 2, "n": "FBAdvertiserIDCollectionEnabled", "t": 8, "pi": [{ "n": "advertiserIDCollectionEnabledID", "pt": $n[0].Boolean, "ps": 0 }], "sn": "Facebook$Unity$Mobile$IOS$IIOSWrapper$FBAdvertiserIDCollectionEnabled", "rt": $n[0].Void, "p": [$n[0].Boolean] }, { "ab": true, "a": 2, "n": "FBAdvertiserTrackingEnabled", "t": 8, "pi": [{ "n": "advertiserTrackingEnabled", "pt": $n[0].Boolean, "ps": 0 }], "sn": "Facebook$Unity$Mobile$IOS$IIOSWrapper$FBAdvertiserTrackingEnabled", "rt": $n[0].Boolean, "p": [$n[0].Boolean], "box": function($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString); } }, { "ab": true, "a": 2, "n": "FBAppEventsActivateApp", "t": 8, "sn": "Facebook$Unity$Mobile$IOS$IIOSWrapper$FBAppEventsActivateApp", "rt": $n[0].Void }, { "ab": true, "a": 2, "n": "FBAppEventsSetLimitEventUsage", "t": 8, "pi": [{ "n": "limitEventUsage", "pt": $n[0].Boolean, "ps": 0 }], "sn": "Facebook$Unity$Mobile$IOS$IIOSWrapper$FBAppEventsSetLimitEventUsage", "rt": $n[0].Void, "p": [$n[0].Boolean] }, { "ab": true, "a": 2, "n": "FBAutoLogAppEventsEnabled", "t": 8, "pi": [{ "n": "autoLogAppEventsEnabled", "pt": $n[0].Boolean, "ps": 0 }], "sn": "Facebook$Unity$Mobile$IOS$IIOSWrapper$FBAutoLogAppEventsEnabled", "rt": $n[0].Void, "p": [$n[0].Boolean] }, { "ab": true, "a": 2, "n": "FBGetUserID", "t": 8, "sn": "Facebook$Unity$Mobile$IOS$IIOSWrapper$FBGetUserID", "rt": $n[0].String }, { "ab": true, "a": 2, "n": "FBSdkVersion", "t": 8, "sn": "Facebook$Unity$Mobile$IOS$IIOSWrapper$FBSdkVersion", "rt": $n[0].String }, { "ab": true, "a": 2, "n": "FBSetUserID", "t": 8, "pi": [{ "n": "userID", "pt": $n[0].String, "ps": 0 }], "sn": "Facebook$Unity$Mobile$IOS$IIOSWrapper$FBSetUserID", "rt": $n[0].Void, "p": [$n[0].String] }, { "ab": true, "a": 2, "n": "FeedShare", "t": 8, "pi": [{ "n": "requestId", "pt": $n[0].Int32, "ps": 0 }, { "n": "toId", "pt": $n[0].String, "ps": 1 }, { "n": "link", "pt": $n[0].String, "ps": 2 }, { "n": "linkName", "pt": $n[0].String, "ps": 3 }, { "n": "linkCaption", "pt": $n[0].String, "ps": 4 }, { "n": "linkDescription", "pt": $n[0].String, "ps": 5 }, { "n": "picture", "pt": $n[0].String, "ps": 6 }, { "n": "mediaSource", "pt": $n[0].String, "ps": 7 }], "sn": "Facebook$Unity$Mobile$IOS$IIOSWrapper$FeedShare", "rt": $n[0].Void, "p": [$n[0].Int32, $n[0].String, $n[0].String, $n[0].String, $n[0].String, $n[0].String, $n[0].String, $n[0].String] }, { "ab": true, "a": 2, "n": "FetchDeferredAppLink", "t": 8, "pi": [{ "n": "requestId", "pt": $n[0].Int32, "ps": 0 }], "sn": "Facebook$Unity$Mobile$IOS$IIOSWrapper$FetchDeferredAppLink", "rt": $n[0].Void, "p": [$n[0].Int32] }, { "ab": true, "a": 2, "n": "GetAppLink", "t": 8, "pi": [{ "n": "requestId", "pt": $n[0].Int32, "ps": 0 }], "sn": "Facebook$Unity$Mobile$IOS$IIOSWrapper$GetAppLink", "rt": $n[0].Void, "p": [$n[0].Int32] }, { "ab": true, "a": 2, "n": "Init", "t": 8, "pi": [{ "n": "appId", "pt": $n[0].String, "ps": 0 }, { "n": "frictionlessRequests", "pt": $n[0].Boolean, "ps": 1 }, { "n": "urlSuffix", "pt": $n[0].String, "ps": 2 }, { "n": "unityUserAgentSuffix", "pt": $n[0].String, "ps": 3 }], "sn": "Facebook$Unity$Mobile$IOS$IIOSWrapper$Init", "rt": $n[0].Void, "p": [$n[0].String, $n[0].Boolean, $n[0].String, $n[0].String] }, { "ab": true, "a": 2, "n": "LogAppEvent", "t": 8, "pi": [{ "n": "logEvent", "pt": $n[0].String, "ps": 0 }, { "n": "valueToSum", "pt": $n[0].Double, "ps": 1 }, { "n": "numParams", "pt": $n[0].Int32, "ps": 2 }, { "n": "paramKeys", "pt": $n[0].Array.type(System.String), "ps": 3 }, { "n": "paramVals", "pt": $n[0].Array.type(System.String), "ps": 4 }], "sn": "Facebook$Unity$Mobile$IOS$IIOSWrapper$LogAppEvent", "rt": $n[0].Void, "p": [$n[0].String, $n[0].Double, $n[0].Int32, $n[0].Array.type(System.String), $n[0].Array.type(System.String)] }, { "ab": true, "a": 2, "n": "LogInWithPublishPermissions", "t": 8, "pi": [{ "n": "requestId", "pt": $n[0].Int32, "ps": 0 }, { "n": "scope", "pt": $n[0].String, "ps": 1 }], "sn": "Facebook$Unity$Mobile$IOS$IIOSWrapper$LogInWithPublishPermissions", "rt": $n[0].Void, "p": [$n[0].Int32, $n[0].String] }, { "ab": true, "a": 2, "n": "LogInWithReadPermissions", "t": 8, "pi": [{ "n": "requestId", "pt": $n[0].Int32, "ps": 0 }, { "n": "scope", "pt": $n[0].String, "ps": 1 }], "sn": "Facebook$Unity$Mobile$IOS$IIOSWrapper$LogInWithReadPermissions", "rt": $n[0].Void, "p": [$n[0].Int32, $n[0].String] }, { "ab": true, "a": 2, "n": "LogOut", "t": 8, "sn": "Facebook$Unity$Mobile$IOS$IIOSWrapper$LogOut", "rt": $n[0].Void }, { "ab": true, "a": 2, "n": "LogPurchaseAppEvent", "t": 8, "pi": [{ "n": "logPurchase", "pt": $n[0].Double, "ps": 0 }, { "n": "currency", "pt": $n[0].String, "ps": 1 }, { "n": "numParams", "pt": $n[0].Int32, "ps": 2 }, { "n": "paramKeys", "pt": $n[0].Array.type(System.String), "ps": 3 }, { "n": "paramVals", "pt": $n[0].Array.type(System.String), "ps": 4 }], "sn": "Facebook$Unity$Mobile$IOS$IIOSWrapper$LogPurchaseAppEvent", "rt": $n[0].Void, "p": [$n[0].Double, $n[0].String, $n[0].Int32, $n[0].Array.type(System.String), $n[0].Array.type(System.String)] }, { "ab": true, "a": 2, "n": "LoginWithTrackingPreference", "t": 8, "pi": [{ "n": "requestId", "pt": $n[0].Int32, "ps": 0 }, { "n": "scope", "pt": $n[0].String, "ps": 1 }, { "n": "tracking", "pt": $n[0].String, "ps": 2 }, { "n": "nonce", "pt": $n[0].String, "ps": 3 }], "sn": "Facebook$Unity$Mobile$IOS$IIOSWrapper$LoginWithTrackingPreference", "rt": $n[0].Void, "p": [$n[0].Int32, $n[0].String, $n[0].String, $n[0].String] }, { "ab": true, "a": 2, "n": "OpenFriendFinderDialog", "t": 8, "pi": [{ "n": "requestId", "pt": $n[0].Int32, "ps": 0 }], "sn": "Facebook$Unity$Mobile$IOS$IIOSWrapper$OpenFriendFinderDialog", "rt": $n[0].Void, "p": [$n[0].Int32] }, { "ab": true, "a": 2, "n": "RefreshCurrentAccessToken", "t": 8, "pi": [{ "n": "requestId", "pt": $n[0].Int32, "ps": 0 }], "sn": "Facebook$Unity$Mobile$IOS$IIOSWrapper$RefreshCurrentAccessToken", "rt": $n[0].Void, "p": [$n[0].Int32] }, { "ab": true, "a": 2, "n": "SetDataProcessingOptions", "t": 8, "pi": [{ "n": "options", "pt": $n[0].Array.type(System.String), "ps": 0 }, { "n": "country", "pt": $n[0].Int32, "ps": 1 }, { "n": "state", "pt": $n[0].Int32, "ps": 2 }], "sn": "Facebook$Unity$Mobile$IOS$IIOSWrapper$SetDataProcessingOptions", "rt": $n[0].Void, "p": [$n[0].Array.type(System.String), $n[0].Int32, $n[0].Int32] }, { "ab": true, "a": 2, "n": "SetPushNotificationsDeviceTokenString", "t": 8, "pi": [{ "n": "token", "pt": $n[0].String, "ps": 0 }], "sn": "Facebook$Unity$Mobile$IOS$IIOSWrapper$SetPushNotificationsDeviceTokenString", "rt": $n[0].Void, "p": [$n[0].String] }, { "ab": true, "a": 2, "n": "SetShareDialogMode", "t": 8, "pi": [{ "n": "mode", "pt": $n[0].Int32, "ps": 0 }], "sn": "Facebook$Unity$Mobile$IOS$IIOSWrapper$SetShareDialogMode", "rt": $n[0].Void, "p": [$n[0].Int32] }, { "ab": true, "a": 2, "n": "ShareLink", "t": 8, "pi": [{ "n": "requestId", "pt": $n[0].Int32, "ps": 0 }, { "n": "contentURL", "pt": $n[0].String, "ps": 1 }, { "n": "contentTitle", "pt": $n[0].String, "ps": 2 }, { "n": "contentDescription", "pt": $n[0].String, "ps": 3 }, { "n": "photoURL", "pt": $n[0].String, "ps": 4 }], "sn": "Facebook$Unity$Mobile$IOS$IIOSWrapper$ShareLink", "rt": $n[0].Void, "p": [$n[0].Int32, $n[0].String, $n[0].String, $n[0].String, $n[0].String] }, { "ab": true, "a": 2, "n": "UpdateUserProperties", "t": 8, "pi": [{ "n": "numParams", "pt": $n[0].Int32, "ps": 0 }, { "n": "paramKeys", "pt": $n[0].Array.type(System.String), "ps": 1 }, { "n": "paramVals", "pt": $n[0].Array.type(System.String), "ps": 2 }], "sn": "Facebook$Unity$Mobile$IOS$IIOSWrapper$UpdateUserProperties", "rt": $n[0].Void, "p": [$n[0].Int32, $n[0].Array.type(System.String), $n[0].Array.type(System.String)] }, { "ab": true, "a": 2, "n": "UploadImageToMediaLibrary", "t": 8, "pi": [{ "n": "requestId", "pt": $n[0].Int32, "ps": 0 }, { "n": "caption", "pt": $n[0].String, "ps": 1 }, { "n": "mediaUri", "pt": $n[0].String, "ps": 2 }, { "n": "shouldLaunchMediaDialog", "pt": $n[0].Boolean, "ps": 3 }], "sn": "Facebook$Unity$Mobile$IOS$IIOSWrapper$UploadImageToMediaLibrary", "rt": $n[0].Void, "p": [$n[0].Int32, $n[0].String, $n[0].String, $n[0].Boolean] }, { "ab": true, "a": 2, "n": "UploadVideoToMediaLibrary", "t": 8, "pi": [{ "n": "requestId", "pt": $n[0].Int32, "ps": 0 }, { "n": "caption", "pt": $n[0].String, "ps": 1 }, { "n": "videoUri", "pt": $n[0].String, "ps": 2 }], "sn": "Facebook$Unity$Mobile$IOS$IIOSWrapper$UploadVideoToMediaLibrary", "rt": $n[0].Void, "p": [$n[0].Int32, $n[0].String, $n[0].String] }] }; }, $n);
    /*Facebook.Unity.Mobile.IOS.IIOSWrapper end.*/

    /*Facebook.Unity.Mobile.IOS.IOSFacebook start.*/
    $m("Facebook.Unity.Mobile.IOS.IOSFacebook", function() { return { "nested": [$n[12].IOSFacebook.FBInsightsFlushBehavior], "att": 1048576, "a": 4, "m": [{ "a": 2, "n": ".ctor", "t": 1, "sn": "ctor" }, { "a": 2, "n": ".ctor", "t": 1, "p": [$n[12].IIOSWrapper, $n[8].CallbackManager], "pi": [{ "n": "iosWrapper", "pt": $n[12].IIOSWrapper, "ps": 0 }, { "n": "callbackManager", "pt": $n[8].CallbackManager, "ps": 1 }], "sn": "$ctor1" }, { "ov": true, "a": 2, "n": "ActivateApp", "t": 8, "pi": [{ "n": "appId", "pt": $n[0].String, "ps": 0 }], "sn": "ActivateApp", "rt": $n[0].Void, "p": [$n[0].String] }, { "ov": true, "a": 2, "n": "AppEventsLogEvent", "t": 8, "pi": [{ "n": "logEvent", "pt": $n[0].String, "ps": 0 }, { "n": "valueToSum", "pt": $n[0].Nullable$1(System.Single), "ps": 1 }, { "n": "parameters", "pt": $n[2].Dictionary$2(System.String, System.Object), "ps": 2 }], "sn": "AppEventsLogEvent", "rt": $n[0].Void, "p": [$n[0].String, $n[0].Nullable$1(System.Single), $n[2].Dictionary$2(System.String, System.Object)] }, { "ov": true, "a": 2, "n": "AppEventsLogPurchase", "t": 8, "pi": [{ "n": "logPurchase", "pt": $n[0].Single, "ps": 0 }, { "n": "currency", "pt": $n[0].String, "ps": 1 }, { "n": "parameters", "pt": $n[2].Dictionary$2(System.String, System.Object), "ps": 2 }], "sn": "AppEventsLogPurchase", "rt": $n[0].Void, "p": [$n[0].Single, $n[0].String, $n[2].Dictionary$2(System.String, System.Object)] }, { "ov": true, "a": 2, "n": "AppRequest", "t": 8, "pi": [{ "n": "message", "pt": $n[0].String, "ps": 0 }, { "n": "actionType", "pt": $n[0].Nullable$1(Facebook.Unity.OGActionType), "ps": 1 }, { "n": "objectId", "pt": $n[0].String, "ps": 2 }, { "n": "to", "pt": $n[2].IEnumerable$1(System.String), "ps": 3 }, { "n": "filters", "pt": $n[2].IEnumerable$1(System.Object), "ps": 4 }, { "n": "excludeIds", "pt": $n[2].IEnumerable$1(System.String), "ps": 5 }, { "n": "maxRecipients", "pt": $n[0].Nullable$1(System.Int32), "ps": 6 }, { "n": "data", "pt": $n[0].String, "ps": 7 }, { "n": "title", "pt": $n[0].String, "ps": 8 }, { "n": "callback", "pt": Function, "ps": 9 }], "sn": "AppRequest$1", "rt": $n[0].Void, "p": [$n[0].String, $n[0].Nullable$1(Facebook.Unity.OGActionType), $n[0].String, $n[2].IEnumerable$1(System.String), $n[2].IEnumerable$1(System.Object), $n[2].IEnumerable$1(System.String), $n[0].Nullable$1(System.Int32), $n[0].String, $n[0].String, Function] }, { "ov": true, "a": 2, "n": "CurrentAuthenticationToken", "t": 8, "sn": "CurrentAuthenticationToken", "rt": $n[8].AuthenticationToken }, { "ov": true, "a": 2, "n": "CurrentProfile", "t": 8, "sn": "CurrentProfile", "rt": $n[8].Profile }, { "ov": true, "a": 2, "n": "FeedShare", "t": 8, "pi": [{ "n": "toId", "pt": $n[0].String, "ps": 0 }, { "n": "link", "pt": $n[0].Uri, "ps": 1 }, { "n": "linkName", "pt": $n[0].String, "ps": 2 }, { "n": "linkCaption", "pt": $n[0].String, "ps": 3 }, { "n": "linkDescription", "pt": $n[0].String, "ps": 4 }, { "n": "picture", "pt": $n[0].Uri, "ps": 5 }, { "n": "mediaSource", "pt": $n[0].String, "ps": 6 }, { "n": "callback", "pt": Function, "ps": 7 }], "sn": "FeedShare", "rt": $n[0].Void, "p": [$n[0].String, $n[0].Uri, $n[0].String, $n[0].String, $n[0].String, $n[0].Uri, $n[0].String, Function] }, { "ov": true, "a": 2, "n": "FetchDeferredAppLink", "t": 8, "pi": [{ "n": "callback", "pt": Function, "ps": 0 }], "sn": "FetchDeferredAppLink", "rt": $n[0].Void, "p": [Function] }, { "ov": true, "a": 2, "n": "GetAppLink", "t": 8, "pi": [{ "n": "callback", "pt": Function, "ps": 0 }], "sn": "GetAppLink", "rt": $n[0].Void, "p": [Function] }, { "a": 2, "n": "Init", "t": 8, "pi": [{ "n": "appId", "pt": $n[0].String, "ps": 0 }, { "n": "frictionlessRequests", "pt": $n[0].Boolean, "ps": 1 }, { "n": "iosURLSuffix", "pt": $n[0].String, "ps": 2 }, { "n": "hideUnityDelegate", "pt": Function, "ps": 3 }, { "n": "onInitComplete", "pt": Function, "ps": 4 }], "sn": "Init$1", "rt": $n[0].Void, "p": [$n[0].String, $n[0].Boolean, $n[0].String, Function, Function] }, { "ov": true, "a": 2, "n": "IsImplicitPurchaseLoggingEnabled", "t": 8, "sn": "IsImplicitPurchaseLoggingEnabled", "rt": $n[0].Boolean, "box": function($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString); } }, { "ov": true, "a": 2, "n": "LogInWithPublishPermissions", "t": 8, "pi": [{ "n": "permissions", "pt": $n[2].IEnumerable$1(System.String), "ps": 0 }, { "n": "callback", "pt": Function, "ps": 1 }], "sn": "LogInWithPublishPermissions", "rt": $n[0].Void, "p": [$n[2].IEnumerable$1(System.String), Function] }, { "ov": true, "a": 2, "n": "LogInWithReadPermissions", "t": 8, "pi": [{ "n": "permissions", "pt": $n[2].IEnumerable$1(System.String), "ps": 0 }, { "n": "callback", "pt": Function, "ps": 1 }], "sn": "LogInWithReadPermissions", "rt": $n[0].Void, "p": [$n[2].IEnumerable$1(System.String), Function] }, { "ov": true, "a": 2, "n": "LogOut", "t": 8, "sn": "LogOut", "rt": $n[0].Void }, { "ov": true, "a": 2, "n": "LoginWithTrackingPreference", "t": 8, "pi": [{ "n": "tracking", "pt": $n[0].String, "ps": 0 }, { "n": "permissions", "pt": $n[2].IEnumerable$1(System.String), "ps": 1 }, { "n": "nonce", "pt": $n[0].String, "ps": 2 }, { "n": "callback", "pt": Function, "ps": 3 }], "sn": "LoginWithTrackingPreference", "rt": $n[0].Void, "p": [$n[0].String, $n[2].IEnumerable$1(System.String), $n[0].String, Function] }, { "ov": true, "a": 2, "n": "OpenFriendFinderDialog", "t": 8, "pi": [{ "n": "callback", "pt": Function, "ps": 0 }], "sn": "OpenFriendFinderDialog", "rt": $n[0].Void, "p": [Function] }, { "ov": true, "a": 2, "n": "RefreshCurrentAccessToken", "t": 8, "pi": [{ "n": "callback", "pt": Function, "ps": 0 }], "sn": "RefreshCurrentAccessToken", "rt": $n[0].Void, "p": [Function] }, { "ov": true, "a": 2, "n": "SetAdvertiserIDCollectionEnabled", "t": 8, "pi": [{ "n": "advertiserIDCollectionEnabled", "pt": $n[0].Boolean, "ps": 0 }], "sn": "SetAdvertiserIDCollectionEnabled", "rt": $n[0].Void, "p": [$n[0].Boolean] }, { "ov": true, "a": 2, "n": "SetAdvertiserTrackingEnabled", "t": 8, "pi": [{ "n": "advertiserTrackingEnabled", "pt": $n[0].Boolean, "ps": 0 }], "sn": "SetAdvertiserTrackingEnabled", "rt": $n[0].Boolean, "p": [$n[0].Boolean], "box": function($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString); } }, { "ov": true, "a": 2, "n": "SetAutoLogAppEventsEnabled", "t": 8, "pi": [{ "n": "autoLogAppEventsEnabled", "pt": $n[0].Boolean, "ps": 0 }], "sn": "SetAutoLogAppEventsEnabled", "rt": $n[0].Void, "p": [$n[0].Boolean] }, { "ov": true, "a": 2, "n": "SetDataProcessingOptions", "t": 8, "pi": [{ "n": "options", "pt": $n[2].IEnumerable$1(System.String), "ps": 0 }, { "n": "country", "pt": $n[0].Int32, "ps": 1 }, { "n": "state", "pt": $n[0].Int32, "ps": 2 }], "sn": "SetDataProcessingOptions", "rt": $n[0].Void, "p": [$n[2].IEnumerable$1(System.String), $n[0].Int32, $n[0].Int32] }, { "ov": true, "a": 2, "n": "SetPushNotificationsDeviceTokenString", "t": 8, "pi": [{ "n": "token", "pt": $n[0].String, "ps": 0 }], "sn": "SetPushNotificationsDeviceTokenString", "rt": $n[0].Void, "p": [$n[0].String] }, { "ov": true, "a": 3, "n": "SetShareDialogMode", "t": 8, "pi": [{ "n": "mode", "pt": $n[8].ShareDialogMode, "ps": 0 }], "sn": "SetShareDialogMode", "rt": $n[0].Void, "p": [$n[8].ShareDialogMode] }, { "ov": true, "a": 2, "n": "ShareLink", "t": 8, "pi": [{ "n": "contentURL", "pt": $n[0].Uri, "ps": 0 }, { "n": "contentTitle", "pt": $n[0].String, "ps": 1 }, { "n": "contentDescription", "pt": $n[0].String, "ps": 2 }, { "n": "photoURL", "pt": $n[0].Uri, "ps": 3 }, { "n": "callback", "pt": Function, "ps": 4 }], "sn": "ShareLink", "rt": $n[0].Void, "p": [$n[0].Uri, $n[0].String, $n[0].String, $n[0].Uri, Function] }, { "ov": true, "a": 2, "n": "UpdateUserProperties", "t": 8, "pi": [{ "n": "parameters", "pt": $n[2].Dictionary$2(System.String, System.String), "ps": 0 }], "sn": "UpdateUserProperties", "rt": $n[0].Void, "p": [$n[2].Dictionary$2(System.String, System.String)] }, { "ov": true, "a": 2, "n": "UploadImageToMediaLibrary", "t": 8, "pi": [{ "n": "caption", "pt": $n[0].String, "ps": 0 }, { "n": "imageUri", "pt": $n[0].Uri, "ps": 1 }, { "n": "shouldLaunchMediaDialog", "pt": $n[0].Boolean, "ps": 2 }, { "n": "callback", "pt": Function, "ps": 3 }], "sn": "UploadImageToMediaLibrary", "rt": $n[0].Void, "p": [$n[0].String, $n[0].Uri, $n[0].Boolean, Function] }, { "ov": true, "a": 2, "n": "UploadVideoToMediaLibrary", "t": 8, "pi": [{ "n": "caption", "pt": $n[0].String, "ps": 0 }, { "n": "videoUri", "pt": $n[0].Uri, "ps": 1 }, { "n": "callback", "pt": Function, "ps": 2 }], "sn": "UploadVideoToMediaLibrary", "rt": $n[0].Void, "p": [$n[0].String, $n[0].Uri, Function] }, { "ov": true, "a": 2, "n": "LimitEventUsage", "t": 16, "rt": $n[0].Boolean, "g": { "ov": true, "a": 2, "n": "get_LimitEventUsage", "t": 8, "rt": $n[0].Boolean, "fg": "LimitEventUsage", "box": function($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString); } }, "s": { "ov": true, "a": 2, "n": "set_LimitEventUsage", "t": 8, "p": [$n[0].Boolean], "rt": $n[0].Void, "fs": "LimitEventUsage" }, "fn": "LimitEventUsage" }, { "ov": true, "a": 2, "n": "LoggedIn", "t": 16, "rt": $n[0].Boolean, "g": { "ov": true, "a": 2, "n": "get_LoggedIn", "t": 8, "rt": $n[0].Boolean, "fg": "LoggedIn", "box": function($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString); } }, "fn": "LoggedIn" }, { "ov": true, "a": 2, "n": "SDKName", "t": 16, "rt": $n[0].String, "g": { "ov": true, "a": 2, "n": "get_SDKName", "t": 8, "rt": $n[0].String, "fg": "SDKName" }, "fn": "SDKName" }, { "ov": true, "a": 2, "n": "SDKVersion", "t": 16, "rt": $n[0].String, "g": { "ov": true, "a": 2, "n": "get_SDKVersion", "t": 8, "rt": $n[0].String, "fg": "SDKVersion" }, "fn": "SDKVersion" }, { "ov": true, "a": 2, "n": "UserID", "t": 16, "rt": $n[0].String, "g": { "ov": true, "a": 2, "n": "get_UserID", "t": 8, "rt": $n[0].String, "fg": "UserID" }, "s": { "ov": true, "a": 2, "n": "set_UserID", "t": 8, "p": [$n[0].String], "rt": $n[0].Void, "fs": "UserID" }, "fn": "UserID" }, { "a": 1, "backing": true, "n": "<LimitEventUsage>k__BackingField", "t": 4, "rt": $n[0].Boolean, "sn": "LimitEventUsage", "box": function($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString); } }, { "a": 1, "backing": true, "n": "<UserID>k__BackingField", "t": 4, "rt": $n[0].String, "sn": "UserID" }] }; }, $n);
    /*Facebook.Unity.Mobile.IOS.IOSFacebook end.*/

    /*Facebook.Unity.Mobile.IOS.IOSFacebook+FBInsightsFlushBehavior start.*/
    $m("Facebook.Unity.Mobile.IOS.IOSFacebook.FBInsightsFlushBehavior", function() { return { "td": $n[12].IOSFacebook, "att": 258, "a": 2, "m": [{ "a": 2, "isSynthetic": true, "n": ".ctor", "t": 1, "sn": "ctor" }, { "a": 2, "n": "FBInsightsFlushBehaviorAuto", "is": true, "t": 4, "rt": $n[12].IOSFacebook.FBInsightsFlushBehavior, "sn": "FBInsightsFlushBehaviorAuto", "box": function($v) { return Bridge.box($v, Facebook.Unity.Mobile.IOS.IOSFacebook.FBInsightsFlushBehavior, System.Enum.toStringFn(Facebook.Unity.Mobile.IOS.IOSFacebook.FBInsightsFlushBehavior)); } }, { "a": 2, "n": "FBInsightsFlushBehaviorExplicitOnly", "is": true, "t": 4, "rt": $n[12].IOSFacebook.FBInsightsFlushBehavior, "sn": "FBInsightsFlushBehaviorExplicitOnly", "box": function($v) { return Bridge.box($v, Facebook.Unity.Mobile.IOS.IOSFacebook.FBInsightsFlushBehavior, System.Enum.toStringFn(Facebook.Unity.Mobile.IOS.IOSFacebook.FBInsightsFlushBehavior)); } }] }; }, $n);
    /*Facebook.Unity.Mobile.IOS.IOSFacebook+FBInsightsFlushBehavior end.*/

    /*Facebook.Unity.Mobile.IOS.IOSFacebookGameObject start.*/
    $m("Facebook.Unity.Mobile.IOS.IOSFacebookGameObject", function() { return { "att": 1048576, "a": 4, "m": [{ "a": 2, "isSynthetic": true, "n": ".ctor", "t": 1, "sn": "ctor" }] }; }, $n);
    /*Facebook.Unity.Mobile.IOS.IOSFacebookGameObject end.*/

    /*Facebook.Unity.Mobile.IOS.IOSFacebookLoader start.*/
    $m("Facebook.Unity.Mobile.IOS.IOSFacebookLoader", function() { return { "att": 1048576, "a": 4, "m": [{ "a": 2, "isSynthetic": true, "n": ".ctor", "t": 1, "sn": "ctor" }, { "ov": true, "a": 4, "n": "FBGameObject", "t": 16, "rt": $n[8].FacebookGameObject, "g": { "ov": true, "a": 4, "n": "get_FBGameObject", "t": 8, "rt": $n[8].FacebookGameObject, "fg": "FBGameObject" }, "fn": "FBGameObject" }] }; }, $n);
    /*Facebook.Unity.Mobile.IOS.IOSFacebookLoader end.*/

    /*Facebook.Unity.Mobile.Android.AndroidFacebook start.*/
    $m("Facebook.Unity.Mobile.Android.AndroidFacebook", function() { return { "att": 1048576, "a": 4, "m": [{ "a": 2, "n": ".ctor", "t": 1, "sn": "ctor" }, { "a": 2, "n": ".ctor", "t": 1, "p": [$n[13].IAndroidWrapper, $n[8].CallbackManager], "pi": [{ "n": "androidWrapper", "pt": $n[13].IAndroidWrapper, "ps": 0 }, { "n": "callbackManager", "pt": $n[8].CallbackManager, "ps": 1 }], "sn": "$ctor1" }, { "ov": true, "a": 2, "n": "ActivateApp", "t": 8, "pi": [{ "n": "appId", "pt": $n[0].String, "ps": 0 }], "sn": "ActivateApp", "rt": $n[0].Void, "p": [$n[0].String] }, { "ov": true, "a": 2, "n": "AppEventsLogEvent", "t": 8, "pi": [{ "n": "logEvent", "pt": $n[0].String, "ps": 0 }, { "n": "valueToSum", "pt": $n[0].Nullable$1(System.Single), "ps": 1 }, { "n": "parameters", "pt": $n[2].Dictionary$2(System.String, System.Object), "ps": 2 }], "sn": "AppEventsLogEvent", "rt": $n[0].Void, "p": [$n[0].String, $n[0].Nullable$1(System.Single), $n[2].Dictionary$2(System.String, System.Object)] }, { "ov": true, "a": 2, "n": "AppEventsLogPurchase", "t": 8, "pi": [{ "n": "logPurchase", "pt": $n[0].Single, "ps": 0 }, { "n": "currency", "pt": $n[0].String, "ps": 1 }, { "n": "parameters", "pt": $n[2].Dictionary$2(System.String, System.Object), "ps": 2 }], "sn": "AppEventsLogPurchase", "rt": $n[0].Void, "p": [$n[0].Single, $n[0].String, $n[2].Dictionary$2(System.String, System.Object)] }, { "ov": true, "a": 2, "n": "AppRequest", "t": 8, "pi": [{ "n": "message", "pt": $n[0].String, "ps": 0 }, { "n": "actionType", "pt": $n[0].Nullable$1(Facebook.Unity.OGActionType), "ps": 1 }, { "n": "objectId", "pt": $n[0].String, "ps": 2 }, { "n": "to", "pt": $n[2].IEnumerable$1(System.String), "ps": 3 }, { "n": "filters", "pt": $n[2].IEnumerable$1(System.Object), "ps": 4 }, { "n": "excludeIds", "pt": $n[2].IEnumerable$1(System.String), "ps": 5 }, { "n": "maxRecipients", "pt": $n[0].Nullable$1(System.Int32), "ps": 6 }, { "n": "data", "pt": $n[0].String, "ps": 7 }, { "n": "title", "pt": $n[0].String, "ps": 8 }, { "n": "callback", "pt": Function, "ps": 9 }], "sn": "AppRequest$1", "rt": $n[0].Void, "p": [$n[0].String, $n[0].Nullable$1(Facebook.Unity.OGActionType), $n[0].String, $n[2].IEnumerable$1(System.String), $n[2].IEnumerable$1(System.Object), $n[2].IEnumerable$1(System.String), $n[0].Nullable$1(System.Int32), $n[0].String, $n[0].String, Function] }, { "a": 2, "n": "ClearAppLink", "t": 8, "sn": "ClearAppLink", "rt": $n[0].Void }, { "ov": true, "a": 2, "n": "ConsumePurchase", "t": 8, "pi": [{ "n": "purchaseToken", "pt": $n[0].String, "ps": 0 }, { "n": "callback", "pt": Function, "ps": 1 }], "sn": "ConsumePurchase", "rt": $n[0].Void, "p": [$n[0].String, Function] }, { "ov": true, "a": 2, "n": "CurrentAuthenticationToken", "t": 8, "sn": "CurrentAuthenticationToken", "rt": $n[8].AuthenticationToken }, { "ov": true, "a": 2, "n": "CurrentProfile", "t": 8, "sn": "CurrentProfile", "rt": $n[8].Profile }, { "ov": true, "a": 2, "n": "FeedShare", "t": 8, "pi": [{ "n": "toId", "pt": $n[0].String, "ps": 0 }, { "n": "link", "pt": $n[0].Uri, "ps": 1 }, { "n": "linkName", "pt": $n[0].String, "ps": 2 }, { "n": "linkCaption", "pt": $n[0].String, "ps": 3 }, { "n": "linkDescription", "pt": $n[0].String, "ps": 4 }, { "n": "picture", "pt": $n[0].Uri, "ps": 5 }, { "n": "mediaSource", "pt": $n[0].String, "ps": 6 }, { "n": "callback", "pt": Function, "ps": 7 }], "sn": "FeedShare", "rt": $n[0].Void, "p": [$n[0].String, $n[0].Uri, $n[0].String, $n[0].String, $n[0].String, $n[0].Uri, $n[0].String, Function] }, { "ov": true, "a": 2, "n": "FetchDeferredAppLink", "t": 8, "pi": [{ "n": "callback", "pt": Function, "ps": 0 }], "sn": "FetchDeferredAppLink", "rt": $n[0].Void, "p": [Function] }, { "ov": true, "a": 2, "n": "GetAppLink", "t": 8, "pi": [{ "n": "callback", "pt": Function, "ps": 0 }], "sn": "GetAppLink", "rt": $n[0].Void, "p": [Function] }, { "ov": true, "a": 2, "n": "GetCatalog", "t": 8, "pi": [{ "n": "callback", "pt": Function, "ps": 0 }], "sn": "GetCatalog", "rt": $n[0].Void, "p": [Function] }, { "ov": true, "a": 2, "n": "GetPayload", "t": 8, "pi": [{ "n": "callback", "pt": Function, "ps": 0 }], "sn": "GetPayload", "rt": $n[0].Void, "p": [Function] }, { "ov": true, "a": 2, "n": "GetPurchases", "t": 8, "pi": [{ "n": "callback", "pt": Function, "ps": 0 }], "sn": "GetPurchases", "rt": $n[0].Void, "p": [Function] }, { "a": 2, "n": "Init", "t": 8, "pi": [{ "n": "appId", "pt": $n[0].String, "ps": 0 }, { "n": "hideUnityDelegate", "pt": Function, "ps": 1 }, { "n": "onInitComplete", "pt": Function, "ps": 2 }], "sn": "Init$1", "rt": $n[0].Void, "p": [$n[0].String, Function, Function] }, { "ov": true, "a": 2, "n": "InitCloudGame", "t": 8, "pi": [{ "n": "callback", "pt": Function, "ps": 0 }], "sn": "InitCloudGame", "rt": $n[0].Void, "p": [Function] }, { "ov": true, "a": 2, "n": "IsImplicitPurchaseLoggingEnabled", "t": 8, "sn": "IsImplicitPurchaseLoggingEnabled", "rt": $n[0].Boolean, "box": function($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString); } }, { "ov": true, "a": 2, "n": "LoadInterstitialAd", "t": 8, "pi": [{ "n": "placementID", "pt": $n[0].String, "ps": 0 }, { "n": "callback", "pt": Function, "ps": 1 }], "sn": "LoadInterstitialAd", "rt": $n[0].Void, "p": [$n[0].String, Function] }, { "ov": true, "a": 2, "n": "LoadRewardedVideo", "t": 8, "pi": [{ "n": "placementID", "pt": $n[0].String, "ps": 0 }, { "n": "callback", "pt": Function, "ps": 1 }], "sn": "LoadRewardedVideo", "rt": $n[0].Void, "p": [$n[0].String, Function] }, { "ov": true, "a": 2, "n": "LogInWithPublishPermissions", "t": 8, "pi": [{ "n": "permissions", "pt": $n[2].IEnumerable$1(System.String), "ps": 0 }, { "n": "callback", "pt": Function, "ps": 1 }], "sn": "LogInWithPublishPermissions", "rt": $n[0].Void, "p": [$n[2].IEnumerable$1(System.String), Function] }, { "ov": true, "a": 2, "n": "LogInWithReadPermissions", "t": 8, "pi": [{ "n": "permissions", "pt": $n[2].IEnumerable$1(System.String), "ps": 0 }, { "n": "callback", "pt": Function, "ps": 1 }], "sn": "LogInWithReadPermissions", "rt": $n[0].Void, "p": [$n[2].IEnumerable$1(System.String), Function] }, { "ov": true, "a": 2, "n": "LogOut", "t": 8, "sn": "LogOut", "rt": $n[0].Void }, { "ov": true, "a": 2, "n": "LoginWithTrackingPreference", "t": 8, "pi": [{ "n": "tracking", "pt": $n[0].String, "ps": 0 }, { "n": "permissions", "pt": $n[2].IEnumerable$1(System.String), "ps": 1 }, { "n": "nonce", "pt": $n[0].String, "ps": 2 }, { "n": "callback", "pt": Function, "ps": 3 }], "sn": "LoginWithTrackingPreference", "rt": $n[0].Void, "p": [$n[0].String, $n[2].IEnumerable$1(System.String), $n[0].String, Function] }, { "ov": true, "a": 2, "n": "OnIAPReady", "t": 8, "pi": [{ "n": "callback", "pt": Function, "ps": 0 }], "sn": "OnIAPReady", "rt": $n[0].Void, "p": [Function] }, { "a": 2, "n": "OnLoginStatusRetrieved", "t": 8, "pi": [{ "n": "resultContainer", "pt": $n[8].ResultContainer, "ps": 0 }], "sn": "OnLoginStatusRetrieved", "rt": $n[0].Void, "p": [$n[8].ResultContainer] }, { "ov": true, "a": 2, "n": "OpenAppStore", "t": 8, "pi": [{ "n": "callback", "pt": Function, "ps": 0 }], "sn": "OpenAppStore", "rt": $n[0].Void, "p": [Function] }, { "ov": true, "a": 2, "n": "OpenFriendFinderDialog", "t": 8, "pi": [{ "n": "callback", "pt": Function, "ps": 0 }], "sn": "OpenFriendFinderDialog", "rt": $n[0].Void, "p": [Function] }, { "ov": true, "a": 2, "n": "PostSessionScore", "t": 8, "pi": [{ "n": "score", "pt": $n[0].Int32, "ps": 0 }, { "n": "callback", "pt": Function, "ps": 1 }], "sn": "PostSessionScore", "rt": $n[0].Void, "p": [$n[0].Int32, Function] }, { "ov": true, "a": 2, "n": "Purchase", "t": 8, "pi": [{ "n": "productID", "pt": $n[0].String, "ps": 0 }, { "n": "callback", "pt": Function, "ps": 1 }, { "n": "developerPayload", "pt": $n[0].String, "ps": 2 }], "sn": "Purchase", "rt": $n[0].Void, "p": [$n[0].String, Function, $n[0].String] }, { "ov": true, "a": 2, "n": "RefreshCurrentAccessToken", "t": 8, "pi": [{ "n": "callback", "pt": Function, "ps": 0 }], "sn": "RefreshCurrentAccessToken", "rt": $n[0].Void, "p": [Function] }, { "a": 2, "n": "RetrieveLoginStatus", "t": 8, "pi": [{ "n": "callback", "pt": Function, "ps": 0 }], "sn": "RetrieveLoginStatus", "rt": $n[0].Void, "p": [Function] }, { "ov": true, "a": 2, "n": "ScheduleAppToUserNotification", "t": 8, "pi": [{ "n": "title", "pt": $n[0].String, "ps": 0 }, { "n": "body", "pt": $n[0].String, "ps": 1 }, { "n": "media", "pt": $n[0].Uri, "ps": 2 }, { "n": "timeInterval", "pt": $n[0].Int32, "ps": 3 }, { "n": "payload", "pt": $n[0].String, "ps": 4 }, { "n": "callback", "pt": Function, "ps": 5 }], "sn": "ScheduleAppToUserNotification", "rt": $n[0].Void, "p": [$n[0].String, $n[0].String, $n[0].Uri, $n[0].Int32, $n[0].String, Function] }, { "ov": true, "a": 2, "n": "SetAdvertiserIDCollectionEnabled", "t": 8, "pi": [{ "n": "advertiserIDCollectionEnabled", "pt": $n[0].Boolean, "ps": 0 }], "sn": "SetAdvertiserIDCollectionEnabled", "rt": $n[0].Void, "p": [$n[0].Boolean] }, { "ov": true, "a": 2, "n": "SetAdvertiserTrackingEnabled", "t": 8, "pi": [{ "n": "advertiserTrackingEnabled", "pt": $n[0].Boolean, "ps": 0 }], "sn": "SetAdvertiserTrackingEnabled", "rt": $n[0].Boolean, "p": [$n[0].Boolean], "box": function($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString); } }, { "ov": true, "a": 2, "n": "SetAutoLogAppEventsEnabled", "t": 8, "pi": [{ "n": "autoLogAppEventsEnabled", "pt": $n[0].Boolean, "ps": 0 }], "sn": "SetAutoLogAppEventsEnabled", "rt": $n[0].Void, "p": [$n[0].Boolean] }, { "ov": true, "a": 2, "n": "SetDataProcessingOptions", "t": 8, "pi": [{ "n": "options", "pt": $n[2].IEnumerable$1(System.String), "ps": 0 }, { "n": "country", "pt": $n[0].Int32, "ps": 1 }, { "n": "state", "pt": $n[0].Int32, "ps": 2 }], "sn": "SetDataProcessingOptions", "rt": $n[0].Void, "p": [$n[2].IEnumerable$1(System.String), $n[0].Int32, $n[0].Int32] }, { "ov": true, "a": 2, "n": "SetPushNotificationsDeviceTokenString", "t": 8, "pi": [{ "n": "token", "pt": $n[0].String, "ps": 0 }], "sn": "SetPushNotificationsDeviceTokenString", "rt": $n[0].Void, "p": [$n[0].String] }, { "ov": true, "a": 3, "n": "SetShareDialogMode", "t": 8, "pi": [{ "n": "mode", "pt": $n[8].ShareDialogMode, "ps": 0 }], "sn": "SetShareDialogMode", "rt": $n[0].Void, "p": [$n[8].ShareDialogMode] }, { "ov": true, "a": 2, "n": "ShareLink", "t": 8, "pi": [{ "n": "contentURL", "pt": $n[0].Uri, "ps": 0 }, { "n": "contentTitle", "pt": $n[0].String, "ps": 1 }, { "n": "contentDescription", "pt": $n[0].String, "ps": 2 }, { "n": "photoURL", "pt": $n[0].Uri, "ps": 3 }, { "n": "callback", "pt": Function, "ps": 4 }], "sn": "ShareLink", "rt": $n[0].Void, "p": [$n[0].Uri, $n[0].String, $n[0].String, $n[0].Uri, Function] }, { "ov": true, "a": 2, "n": "ShowInterstitialAd", "t": 8, "pi": [{ "n": "placementID", "pt": $n[0].String, "ps": 0 }, { "n": "callback", "pt": Function, "ps": 1 }], "sn": "ShowInterstitialAd", "rt": $n[0].Void, "p": [$n[0].String, Function] }, { "ov": true, "a": 2, "n": "ShowRewardedVideo", "t": 8, "pi": [{ "n": "placementID", "pt": $n[0].String, "ps": 0 }, { "n": "callback", "pt": Function, "ps": 1 }], "sn": "ShowRewardedVideo", "rt": $n[0].Void, "p": [$n[0].String, Function] }, { "ov": true, "a": 2, "n": "UpdateUserProperties", "t": 8, "pi": [{ "n": "parameters", "pt": $n[2].Dictionary$2(System.String, System.String), "ps": 0 }], "sn": "UpdateUserProperties", "rt": $n[0].Void, "p": [$n[2].Dictionary$2(System.String, System.String)] }, { "ov": true, "a": 2, "n": "UploadImageToMediaLibrary", "t": 8, "pi": [{ "n": "caption", "pt": $n[0].String, "ps": 0 }, { "n": "imageUri", "pt": $n[0].Uri, "ps": 1 }, { "n": "shouldLaunchMediaDialog", "pt": $n[0].Boolean, "ps": 2 }, { "n": "callback", "pt": Function, "ps": 3 }], "sn": "UploadImageToMediaLibrary", "rt": $n[0].Void, "p": [$n[0].String, $n[0].Uri, $n[0].Boolean, Function] }, { "ov": true, "a": 2, "n": "UploadVideoToMediaLibrary", "t": 8, "pi": [{ "n": "caption", "pt": $n[0].String, "ps": 0 }, { "n": "videoUri", "pt": $n[0].Uri, "ps": 1 }, { "n": "callback", "pt": Function, "ps": 2 }], "sn": "UploadVideoToMediaLibrary", "rt": $n[0].Void, "p": [$n[0].String, $n[0].Uri, Function] }, { "a": 2, "n": "KeyHash", "t": 16, "rt": $n[0].String, "g": { "a": 2, "n": "get_KeyHash", "t": 8, "rt": $n[0].String, "fg": "KeyHash" }, "fn": "KeyHash" }, { "ov": true, "a": 2, "n": "LimitEventUsage", "t": 16, "rt": $n[0].Boolean, "g": { "ov": true, "a": 2, "n": "get_LimitEventUsage", "t": 8, "rt": $n[0].Boolean, "fg": "LimitEventUsage", "box": function($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString); } }, "s": { "ov": true, "a": 2, "n": "set_LimitEventUsage", "t": 8, "p": [$n[0].Boolean], "rt": $n[0].Void, "fs": "LimitEventUsage" }, "fn": "LimitEventUsage" }, { "ov": true, "a": 2, "n": "SDKName", "t": 16, "rt": $n[0].String, "g": { "ov": true, "a": 2, "n": "get_SDKName", "t": 8, "rt": $n[0].String, "fg": "SDKName" }, "fn": "SDKName" }, { "ov": true, "a": 2, "n": "SDKVersion", "t": 16, "rt": $n[0].String, "g": { "ov": true, "a": 2, "n": "get_SDKVersion", "t": 8, "rt": $n[0].String, "fg": "SDKVersion" }, "fn": "SDKVersion" }, { "ov": true, "a": 2, "n": "UserID", "t": 16, "rt": $n[0].String, "g": { "ov": true, "a": 2, "n": "get_UserID", "t": 8, "rt": $n[0].String, "fg": "UserID" }, "s": { "ov": true, "a": 2, "n": "set_UserID", "t": 8, "p": [$n[0].String], "rt": $n[0].Void, "fs": "UserID" }, "fn": "UserID" }, { "a": 4, "n": "LoginPermissionsKey", "is": true, "t": 4, "rt": $n[0].String, "sn": "LoginPermissionsKey" }, { "a": 1, "backing": true, "n": "<LimitEventUsage>k__BackingField", "t": 4, "rt": $n[0].Boolean, "sn": "LimitEventUsage", "box": function($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString); } }, { "a": 1, "backing": true, "n": "<UserID>k__BackingField", "t": 4, "rt": $n[0].String, "sn": "UserID" }] }; }, $n);
    /*Facebook.Unity.Mobile.Android.AndroidFacebook end.*/

    /*Facebook.Unity.Mobile.Android.AndroidFacebookGameObject start.*/
    $m("Facebook.Unity.Mobile.Android.AndroidFacebookGameObject", function() { return { "att": 1048576, "a": 4, "m": [{ "a": 2, "isSynthetic": true, "n": ".ctor", "t": 1, "sn": "ctor" }, { "ov": true, "a": 3, "n": "OnAwake", "t": 8, "sn": "OnAwake", "rt": $n[0].Void }, { "a": 2, "n": "OnLoginStatusRetrieved", "t": 8, "pi": [{ "n": "message", "pt": $n[0].String, "ps": 0 }], "sn": "OnLoginStatusRetrieved", "rt": $n[0].Void, "p": [$n[0].String] }, { "a": 2, "n": "onPurchaseCompleteHandler", "t": 8, "pi": [{ "n": "data", "pt": $n[0].Object, "ps": 0 }], "sn": "onPurchaseCompleteHandler", "rt": $n[0].Void, "p": [$n[0].Object] }] }; }, $n);
    /*Facebook.Unity.Mobile.Android.AndroidFacebookGameObject end.*/

    /*Facebook.Unity.Mobile.Android.AndroidFacebookLoader start.*/
    $m("Facebook.Unity.Mobile.Android.AndroidFacebookLoader", function() { return { "att": 1048576, "a": 4, "m": [{ "a": 2, "isSynthetic": true, "n": ".ctor", "t": 1, "sn": "ctor" }, { "ov": true, "a": 4, "n": "FBGameObject", "t": 16, "rt": $n[8].FacebookGameObject, "g": { "ov": true, "a": 4, "n": "get_FBGameObject", "t": 8, "rt": $n[8].FacebookGameObject, "fg": "FBGameObject" }, "fn": "FBGameObject" }] }; }, $n);
    /*Facebook.Unity.Mobile.Android.AndroidFacebookLoader end.*/

    /*Facebook.Unity.Mobile.Android.IAndroidWrapper start.*/
    $m("Facebook.Unity.Mobile.Android.IAndroidWrapper", function() { return { "att": 160, "a": 4, "m": [{ "ab": true, "a": 2, "n": "CallStatic", "t": 8, "pi": [{ "n": "methodName", "pt": $n[0].String, "ps": 0 }], "tpc": 1, "tprm": ["T"], "sn": "Facebook$Unity$Mobile$Android$IAndroidWrapper$CallStatic", "rt": System.Object, "p": [$n[0].String] }, { "ab": true, "a": 2, "n": "CallStatic", "t": 8, "pi": [{ "n": "methodName", "pt": $n[0].String, "ps": 0 }, { "n": "args", "pt": $n[0].Array.type(System.Object), "ps": 1 }], "sn": "Facebook$Unity$Mobile$Android$IAndroidWrapper$CallStatic$1", "rt": $n[0].Void, "p": [$n[0].String, $n[0].Array.type(System.Object)] }] }; }, $n);
    /*Facebook.Unity.Mobile.Android.IAndroidWrapper end.*/

    /*Facebook.Unity.IOS.IOSWrapper start.*/
    $m("Facebook.Unity.IOS.IOSWrapper", function() { return { "att": 1048576, "a": 4, "m": [{ "a": 2, "isSynthetic": true, "n": ".ctor", "t": 1, "sn": "ctor" }, { "a": 2, "n": "AppRequest", "t": 8, "pi": [{ "n": "requestId", "pt": $n[0].Int32, "ps": 0 }, { "n": "message", "pt": $n[0].String, "ps": 1 }, { "n": "actionType", "pt": $n[0].String, "ps": 2 }, { "n": "objectId", "pt": $n[0].String, "ps": 3 }, { "n": "to", "pt": $n[0].Array.type(System.String), "ps": 4 }, { "n": "toLength", "pt": $n[0].Int32, "ps": 5 }, { "n": "filters", "pt": $n[0].String, "ps": 6 }, { "n": "excludeIds", "pt": $n[0].Array.type(System.String), "ps": 7 }, { "n": "excludeIdsLength", "pt": $n[0].Int32, "ps": 8 }, { "n": "hasMaxRecipients", "pt": $n[0].Boolean, "ps": 9 }, { "n": "maxRecipients", "pt": $n[0].Int32, "ps": 10 }, { "n": "data", "pt": $n[0].String, "ps": 11 }, { "n": "title", "pt": $n[0].String, "ps": 12 }], "sn": "AppRequest", "rt": $n[0].Void, "p": [$n[0].Int32, $n[0].String, $n[0].String, $n[0].String, $n[0].Array.type(System.String), $n[0].Int32, $n[0].String, $n[0].Array.type(System.String), $n[0].Int32, $n[0].Boolean, $n[0].Int32, $n[0].String, $n[0].String] }, { "a": 2, "n": "CurrentAuthenticationToken", "t": 8, "sn": "CurrentAuthenticationToken", "rt": $n[8].AuthenticationToken }, { "a": 2, "n": "CurrentProfile", "t": 8, "sn": "CurrentProfile", "rt": $n[8].Profile }, { "a": 2, "n": "FBAdvertiserIDCollectionEnabled", "t": 8, "pi": [{ "n": "advertiserIDCollectionEnabled", "pt": $n[0].Boolean, "ps": 0 }], "sn": "FBAdvertiserIDCollectionEnabled", "rt": $n[0].Void, "p": [$n[0].Boolean] }, { "a": 2, "n": "FBAdvertiserTrackingEnabled", "t": 8, "pi": [{ "n": "advertiserTrackingEnabled", "pt": $n[0].Boolean, "ps": 0 }], "sn": "FBAdvertiserTrackingEnabled", "rt": $n[0].Boolean, "p": [$n[0].Boolean], "box": function($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString); } }, { "a": 2, "n": "FBAppEventsActivateApp", "t": 8, "sn": "FBAppEventsActivateApp", "rt": $n[0].Void }, { "a": 2, "n": "FBAppEventsSetLimitEventUsage", "t": 8, "pi": [{ "n": "limitEventUsage", "pt": $n[0].Boolean, "ps": 0 }], "sn": "FBAppEventsSetLimitEventUsage", "rt": $n[0].Void, "p": [$n[0].Boolean] }, { "a": 2, "n": "FBAutoLogAppEventsEnabled", "t": 8, "pi": [{ "n": "autoLogAppEventsEnabled", "pt": $n[0].Boolean, "ps": 0 }], "sn": "FBAutoLogAppEventsEnabled", "rt": $n[0].Void, "p": [$n[0].Boolean] }, { "a": 2, "n": "FBGetUserID", "t": 8, "sn": "FBGetUserID", "rt": $n[0].String }, { "a": 2, "n": "FBSdkVersion", "t": 8, "sn": "FBSdkVersion", "rt": $n[0].String }, { "a": 2, "n": "FBSetUserID", "t": 8, "pi": [{ "n": "userID", "pt": $n[0].String, "ps": 0 }], "sn": "FBSetUserID", "rt": $n[0].Void, "p": [$n[0].String] }, { "a": 2, "n": "FeedShare", "t": 8, "pi": [{ "n": "requestId", "pt": $n[0].Int32, "ps": 0 }, { "n": "toId", "pt": $n[0].String, "ps": 1 }, { "n": "link", "pt": $n[0].String, "ps": 2 }, { "n": "linkName", "pt": $n[0].String, "ps": 3 }, { "n": "linkCaption", "pt": $n[0].String, "ps": 4 }, { "n": "linkDescription", "pt": $n[0].String, "ps": 5 }, { "n": "picture", "pt": $n[0].String, "ps": 6 }, { "n": "mediaSource", "pt": $n[0].String, "ps": 7 }], "sn": "FeedShare", "rt": $n[0].Void, "p": [$n[0].Int32, $n[0].String, $n[0].String, $n[0].String, $n[0].String, $n[0].String, $n[0].String, $n[0].String] }, { "a": 2, "n": "FetchDeferredAppLink", "t": 8, "pi": [{ "n": "requestId", "pt": $n[0].Int32, "ps": 0 }], "sn": "FetchDeferredAppLink", "rt": $n[0].Void, "p": [$n[0].Int32] }, { "a": 2, "n": "GetAppLink", "t": 8, "pi": [{ "n": "requestId", "pt": $n[0].Int32, "ps": 0 }], "sn": "GetAppLink", "rt": $n[0].Void, "p": [$n[0].Int32] }, { "a": 2, "n": "Init", "t": 8, "pi": [{ "n": "appId", "pt": $n[0].String, "ps": 0 }, { "n": "frictionlessRequests", "pt": $n[0].Boolean, "ps": 1 }, { "n": "urlSuffix", "pt": $n[0].String, "ps": 2 }, { "n": "unityUserAgentSuffix", "pt": $n[0].String, "ps": 3 }], "sn": "Init", "rt": $n[0].Void, "p": [$n[0].String, $n[0].Boolean, $n[0].String, $n[0].String] }, { "a": 2, "n": "LogAppEvent", "t": 8, "pi": [{ "n": "logEvent", "pt": $n[0].String, "ps": 0 }, { "n": "valueToSum", "pt": $n[0].Double, "ps": 1 }, { "n": "numParams", "pt": $n[0].Int32, "ps": 2 }, { "n": "paramKeys", "pt": $n[0].Array.type(System.String), "ps": 3 }, { "n": "paramVals", "pt": $n[0].Array.type(System.String), "ps": 4 }], "sn": "LogAppEvent", "rt": $n[0].Void, "p": [$n[0].String, $n[0].Double, $n[0].Int32, $n[0].Array.type(System.String), $n[0].Array.type(System.String)] }, { "a": 2, "n": "LogInWithPublishPermissions", "t": 8, "pi": [{ "n": "requestId", "pt": $n[0].Int32, "ps": 0 }, { "n": "scope", "pt": $n[0].String, "ps": 1 }], "sn": "LogInWithPublishPermissions", "rt": $n[0].Void, "p": [$n[0].Int32, $n[0].String] }, { "a": 2, "n": "LogInWithReadPermissions", "t": 8, "pi": [{ "n": "requestId", "pt": $n[0].Int32, "ps": 0 }, { "n": "scope", "pt": $n[0].String, "ps": 1 }], "sn": "LogInWithReadPermissions", "rt": $n[0].Void, "p": [$n[0].Int32, $n[0].String] }, { "a": 2, "n": "LogOut", "t": 8, "sn": "LogOut", "rt": $n[0].Void }, { "a": 2, "n": "LogPurchaseAppEvent", "t": 8, "pi": [{ "n": "logPurchase", "pt": $n[0].Double, "ps": 0 }, { "n": "currency", "pt": $n[0].String, "ps": 1 }, { "n": "numParams", "pt": $n[0].Int32, "ps": 2 }, { "n": "paramKeys", "pt": $n[0].Array.type(System.String), "ps": 3 }, { "n": "paramVals", "pt": $n[0].Array.type(System.String), "ps": 4 }], "sn": "LogPurchaseAppEvent", "rt": $n[0].Void, "p": [$n[0].Double, $n[0].String, $n[0].Int32, $n[0].Array.type(System.String), $n[0].Array.type(System.String)] }, { "a": 2, "n": "LoginWithTrackingPreference", "t": 8, "pi": [{ "n": "requestId", "pt": $n[0].Int32, "ps": 0 }, { "n": "scope", "pt": $n[0].String, "ps": 1 }, { "n": "tracking", "pt": $n[0].String, "ps": 2 }, { "n": "nonce", "pt": $n[0].String, "ps": 3 }], "sn": "LoginWithTrackingPreference", "rt": $n[0].Void, "p": [$n[0].Int32, $n[0].String, $n[0].String, $n[0].String] }, { "a": 2, "n": "OpenFriendFinderDialog", "t": 8, "pi": [{ "n": "requestId", "pt": $n[0].Int32, "ps": 0 }], "sn": "OpenFriendFinderDialog", "rt": $n[0].Void, "p": [$n[0].Int32] }, { "a": 2, "n": "RefreshCurrentAccessToken", "t": 8, "pi": [{ "n": "requestId", "pt": $n[0].Int32, "ps": 0 }], "sn": "RefreshCurrentAccessToken", "rt": $n[0].Void, "p": [$n[0].Int32] }, { "a": 2, "n": "SetDataProcessingOptions", "t": 8, "pi": [{ "n": "options", "pt": $n[0].Array.type(System.String), "ps": 0 }, { "n": "country", "pt": $n[0].Int32, "ps": 1 }, { "n": "state", "pt": $n[0].Int32, "ps": 2 }], "sn": "SetDataProcessingOptions", "rt": $n[0].Void, "p": [$n[0].Array.type(System.String), $n[0].Int32, $n[0].Int32] }, { "a": 2, "n": "SetPushNotificationsDeviceTokenString", "t": 8, "pi": [{ "n": "token", "pt": $n[0].String, "ps": 0 }], "sn": "SetPushNotificationsDeviceTokenString", "rt": $n[0].Void, "p": [$n[0].String] }, { "a": 2, "n": "SetShareDialogMode", "t": 8, "pi": [{ "n": "mode", "pt": $n[0].Int32, "ps": 0 }], "sn": "SetShareDialogMode", "rt": $n[0].Void, "p": [$n[0].Int32] }, { "a": 2, "n": "ShareLink", "t": 8, "pi": [{ "n": "requestId", "pt": $n[0].Int32, "ps": 0 }, { "n": "contentURL", "pt": $n[0].String, "ps": 1 }, { "n": "contentTitle", "pt": $n[0].String, "ps": 2 }, { "n": "contentDescription", "pt": $n[0].String, "ps": 3 }, { "n": "photoURL", "pt": $n[0].String, "ps": 4 }], "sn": "ShareLink", "rt": $n[0].Void, "p": [$n[0].Int32, $n[0].String, $n[0].String, $n[0].String, $n[0].String] }, { "a": 2, "n": "UpdateUserProperties", "t": 8, "pi": [{ "n": "numParams", "pt": $n[0].Int32, "ps": 0 }, { "n": "paramKeys", "pt": $n[0].Array.type(System.String), "ps": 1 }, { "n": "paramVals", "pt": $n[0].Array.type(System.String), "ps": 2 }], "sn": "UpdateUserProperties", "rt": $n[0].Void, "p": [$n[0].Int32, $n[0].Array.type(System.String), $n[0].Array.type(System.String)] }, { "a": 2, "n": "UploadImageToMediaLibrary", "t": 8, "pi": [{ "n": "requestId", "pt": $n[0].Int32, "ps": 0 }, { "n": "caption", "pt": $n[0].String, "ps": 1 }, { "n": "imageUri", "pt": $n[0].String, "ps": 2 }, { "n": "shouldLaunchMediaDialog", "pt": $n[0].Boolean, "ps": 3 }], "sn": "UploadImageToMediaLibrary", "rt": $n[0].Void, "p": [$n[0].Int32, $n[0].String, $n[0].String, $n[0].Boolean] }, { "a": 2, "n": "UploadVideoToMediaLibrary", "t": 8, "pi": [{ "n": "requestId", "pt": $n[0].Int32, "ps": 0 }, { "n": "caption", "pt": $n[0].String, "ps": 1 }, { "n": "videoUri", "pt": $n[0].String, "ps": 2 }], "sn": "UploadVideoToMediaLibrary", "rt": $n[0].Void, "p": [$n[0].Int32, $n[0].String, $n[0].String] }] }; }, $n);
    /*Facebook.Unity.IOS.IOSWrapper end.*/

    /*Facebook.Unity.Gameroom.GameroomFacebook start.*/
    $m("Facebook.Unity.Gameroom.GameroomFacebook", function() { return { "nested": [Function], "att": 1048576, "a": 4, "m": [{ "a": 2, "n": ".ctor", "t": 1, "sn": "ctor" }, { "a": 2, "n": ".ctor", "t": 1, "p": [$n[10].IGameroomWrapper, $n[8].CallbackManager], "pi": [{ "n": "gameroomWrapper", "pt": $n[10].IGameroomWrapper, "ps": 0 }, { "n": "callbackManager", "pt": $n[8].CallbackManager, "ps": 1 }], "sn": "$ctor1" }, { "ov": true, "a": 2, "n": "ActivateApp", "t": 8, "pi": [{ "n": "appId", "pt": $n[0].String, "ps": 0 }], "sn": "ActivateApp", "rt": $n[0].Void, "p": [$n[0].String] }, { "ov": true, "a": 2, "n": "AppEventsLogEvent", "t": 8, "pi": [{ "n": "logEvent", "pt": $n[0].String, "ps": 0 }, { "n": "valueToSum", "pt": $n[0].Nullable$1(System.Single), "ps": 1 }, { "n": "parameters", "pt": $n[2].Dictionary$2(System.String, System.Object), "ps": 2 }], "sn": "AppEventsLogEvent", "rt": $n[0].Void, "p": [$n[0].String, $n[0].Nullable$1(System.Single), $n[2].Dictionary$2(System.String, System.Object)] }, { "ov": true, "a": 2, "n": "AppEventsLogPurchase", "t": 8, "pi": [{ "n": "logPurchase", "pt": $n[0].Single, "ps": 0 }, { "n": "currency", "pt": $n[0].String, "ps": 1 }, { "n": "parameters", "pt": $n[2].Dictionary$2(System.String, System.Object), "ps": 2 }], "sn": "AppEventsLogPurchase", "rt": $n[0].Void, "p": [$n[0].Single, $n[0].String, $n[2].Dictionary$2(System.String, System.Object)] }, { "ov": true, "a": 2, "n": "AppRequest", "t": 8, "pi": [{ "n": "message", "pt": $n[0].String, "ps": 0 }, { "n": "actionType", "pt": $n[0].Nullable$1(Facebook.Unity.OGActionType), "ps": 1 }, { "n": "objectId", "pt": $n[0].String, "ps": 2 }, { "n": "to", "pt": $n[2].IEnumerable$1(System.String), "ps": 3 }, { "n": "filters", "pt": $n[2].IEnumerable$1(System.Object), "ps": 4 }, { "n": "excludeIds", "pt": $n[2].IEnumerable$1(System.String), "ps": 5 }, { "n": "maxRecipients", "pt": $n[0].Nullable$1(System.Int32), "ps": 6 }, { "n": "data", "pt": $n[0].String, "ps": 7 }, { "n": "title", "pt": $n[0].String, "ps": 8 }, { "n": "callback", "pt": Function, "ps": 9 }], "sn": "AppRequest$1", "rt": $n[0].Void, "p": [$n[0].String, $n[0].Nullable$1(Facebook.Unity.OGActionType), $n[0].String, $n[2].IEnumerable$1(System.String), $n[2].IEnumerable$1(System.Object), $n[2].IEnumerable$1(System.String), $n[0].Nullable$1(System.Int32), $n[0].String, $n[0].String, Function] }, { "ov": true, "a": 2, "n": "FeedShare", "t": 8, "pi": [{ "n": "toId", "pt": $n[0].String, "ps": 0 }, { "n": "link", "pt": $n[0].Uri, "ps": 1 }, { "n": "linkName", "pt": $n[0].String, "ps": 2 }, { "n": "linkCaption", "pt": $n[0].String, "ps": 3 }, { "n": "linkDescription", "pt": $n[0].String, "ps": 4 }, { "n": "picture", "pt": $n[0].Uri, "ps": 5 }, { "n": "mediaSource", "pt": $n[0].String, "ps": 6 }, { "n": "callback", "pt": Function, "ps": 7 }], "sn": "FeedShare", "rt": $n[0].Void, "p": [$n[0].String, $n[0].Uri, $n[0].String, $n[0].String, $n[0].String, $n[0].Uri, $n[0].String, Function] }, { "ov": true, "a": 2, "n": "GetAppLink", "t": 8, "pi": [{ "n": "callback", "pt": Function, "ps": 0 }], "sn": "GetAppLink", "rt": $n[0].Void, "p": [Function] }, { "a": 2, "n": "GetPipeResponse", "t": 8, "pi": [{ "n": "callbackId", "pt": $n[0].String, "ps": 0 }], "sn": "GetPipeResponse", "rt": $n[0].String, "p": [$n[0].String] }, { "a": 2, "n": "HasLicense", "t": 8, "pi": [{ "n": "callback", "pt": Function, "ps": 0 }], "sn": "HasLicense", "rt": $n[0].Void, "p": [Function] }, { "a": 2, "n": "HaveReceivedPipeResponse", "t": 8, "sn": "HaveReceivedPipeResponse", "rt": $n[0].Boolean, "box": function($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString); } }, { "a": 2, "n": "Init", "t": 8, "pi": [{ "n": "appId", "pt": $n[0].String, "ps": 0 }, { "n": "hideUnityDelegate", "pt": Function, "ps": 1 }, { "n": "onInitComplete", "pt": Function, "ps": 2 }], "sn": "Init$1", "rt": $n[0].Void, "p": [$n[0].String, Function, Function] }, { "ov": true, "a": 2, "n": "LogInWithPublishPermissions", "t": 8, "pi": [{ "n": "scope", "pt": $n[2].IEnumerable$1(System.String), "ps": 0 }, { "n": "callback", "pt": Function, "ps": 1 }], "sn": "LogInWithPublishPermissions", "rt": $n[0].Void, "p": [$n[2].IEnumerable$1(System.String), Function] }, { "ov": true, "a": 2, "n": "LogInWithReadPermissions", "t": 8, "pi": [{ "n": "scope", "pt": $n[2].IEnumerable$1(System.String), "ps": 0 }, { "n": "callback", "pt": Function, "ps": 1 }], "sn": "LogInWithReadPermissions", "rt": $n[0].Void, "p": [$n[2].IEnumerable$1(System.String), Function] }, { "ov": true, "a": 2, "n": "OnAppRequestsComplete", "t": 8, "pi": [{ "n": "resultContainer", "pt": $n[8].ResultContainer, "ps": 0 }], "sn": "OnAppRequestsComplete", "rt": $n[0].Void, "p": [$n[8].ResultContainer] }, { "ov": true, "a": 2, "n": "OnGetAppLinkComplete", "t": 8, "pi": [{ "n": "resultContainer", "pt": $n[8].ResultContainer, "ps": 0 }], "sn": "OnGetAppLinkComplete", "rt": $n[0].Void, "p": [$n[8].ResultContainer] }, { "a": 2, "n": "OnHasLicenseComplete", "t": 8, "pi": [{ "n": "resultContainer", "pt": $n[8].ResultContainer, "ps": 0 }], "sn": "OnHasLicenseComplete", "rt": $n[0].Void, "p": [$n[8].ResultContainer] }, { "ov": true, "a": 2, "n": "OnLoginComplete", "t": 8, "pi": [{ "n": "resultContainer", "pt": $n[8].ResultContainer, "ps": 0 }], "sn": "OnLoginComplete", "rt": $n[0].Void, "p": [$n[8].ResultContainer] }, { "a": 2, "n": "OnPayComplete", "t": 8, "pi": [{ "n": "resultContainer", "pt": $n[8].ResultContainer, "ps": 0 }], "sn": "OnPayComplete", "rt": $n[0].Void, "p": [$n[8].ResultContainer] }, { "ov": true, "a": 2, "n": "OnShareLinkComplete", "t": 8, "pi": [{ "n": "resultContainer", "pt": $n[8].ResultContainer, "ps": 0 }], "sn": "OnShareLinkComplete", "rt": $n[0].Void, "p": [$n[8].ResultContainer] }, { "a": 2, "n": "Pay", "t": 8, "pi": [{ "n": "product", "pt": $n[0].String, "ps": 0 }, { "n": "action", "pt": $n[0].String, "ps": 1 }, { "n": "quantity", "pt": $n[0].Int32, "ps": 2 }, { "n": "quantityMin", "pt": $n[0].Nullable$1(System.Int32), "ps": 3 }, { "n": "quantityMax", "pt": $n[0].Nullable$1(System.Int32), "ps": 4 }, { "n": "requestId", "pt": $n[0].String, "ps": 5 }, { "n": "pricepointId", "pt": $n[0].String, "ps": 6 }, { "n": "testCurrency", "pt": $n[0].String, "ps": 7 }, { "n": "callback", "pt": Function, "ps": 8 }], "sn": "Pay", "rt": $n[0].Void, "p": [$n[0].String, $n[0].String, $n[0].Int32, $n[0].Nullable$1(System.Int32), $n[0].Nullable$1(System.Int32), $n[0].String, $n[0].String, $n[0].String, Function] }, { "a": 2, "n": "PayPremium", "t": 8, "pi": [{ "n": "callback", "pt": Function, "ps": 0 }], "sn": "PayPremium", "rt": $n[0].Void, "p": [Function] }, { "a": 2, "n": "PayWithProductId", "t": 8, "pi": [{ "n": "productId", "pt": $n[0].String, "ps": 0 }, { "n": "action", "pt": $n[0].String, "ps": 1 }, { "n": "developerPayload", "pt": $n[0].String, "ps": 2 }, { "n": "testCurrency", "pt": $n[0].String, "ps": 3 }, { "n": "callback", "pt": Function, "ps": 4 }], "sn": "PayWithProductId$1", "rt": $n[0].Void, "p": [$n[0].String, $n[0].String, $n[0].String, $n[0].String, Function] }, { "a": 2, "n": "PayWithProductId", "t": 8, "pi": [{ "n": "productId", "pt": $n[0].String, "ps": 0 }, { "n": "action", "pt": $n[0].String, "ps": 1 }, { "n": "quantity", "pt": $n[0].Int32, "ps": 2 }, { "n": "quantityMin", "pt": $n[0].Nullable$1(System.Int32), "ps": 3 }, { "n": "quantityMax", "pt": $n[0].Nullable$1(System.Int32), "ps": 4 }, { "n": "requestId", "pt": $n[0].String, "ps": 5 }, { "n": "pricepointId", "pt": $n[0].String, "ps": 6 }, { "n": "testCurrency", "pt": $n[0].String, "ps": 7 }, { "n": "callback", "pt": Function, "ps": 8 }], "sn": "PayWithProductId", "rt": $n[0].Void, "p": [$n[0].String, $n[0].String, $n[0].Int32, $n[0].Nullable$1(System.Int32), $n[0].Nullable$1(System.Int32), $n[0].String, $n[0].String, $n[0].String, Function] }, { "ov": true, "a": 2, "n": "ShareLink", "t": 8, "pi": [{ "n": "contentURL", "pt": $n[0].Uri, "ps": 0 }, { "n": "contentTitle", "pt": $n[0].String, "ps": 1 }, { "n": "contentDescription", "pt": $n[0].String, "ps": 2 }, { "n": "photoURL", "pt": $n[0].Uri, "ps": 3 }, { "n": "callback", "pt": Function, "ps": 4 }], "sn": "ShareLink", "rt": $n[0].Void, "p": [$n[0].Uri, $n[0].String, $n[0].String, $n[0].Uri, Function] }, { "ov": true, "a": 2, "n": "LimitEventUsage", "t": 16, "rt": $n[0].Boolean, "g": { "ov": true, "a": 2, "n": "get_LimitEventUsage", "t": 8, "rt": $n[0].Boolean, "fg": "LimitEventUsage", "box": function($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString); } }, "s": { "ov": true, "a": 2, "n": "set_LimitEventUsage", "t": 8, "p": [$n[0].Boolean], "rt": $n[0].Void, "fs": "LimitEventUsage" }, "fn": "LimitEventUsage" }, { "ov": true, "a": 2, "n": "SDKName", "t": 16, "rt": $n[0].String, "g": { "ov": true, "a": 2, "n": "get_SDKName", "t": 8, "rt": $n[0].String, "fg": "SDKName" }, "fn": "SDKName" }, { "ov": true, "a": 2, "n": "SDKVersion", "t": 16, "rt": $n[0].String, "g": { "ov": true, "a": 2, "n": "get_SDKVersion", "t": 8, "rt": $n[0].String, "fg": "SDKVersion" }, "fn": "SDKVersion" }, { "a": 1, "backing": true, "n": "<LimitEventUsage>k__BackingField", "t": 4, "rt": $n[0].Boolean, "sn": "LimitEventUsage", "box": function($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString); } }] }; }, $n);
    /*Facebook.Unity.Gameroom.GameroomFacebook end.*/

    /*Facebook.Unity.Gameroom.GameroomFacebookGameObject start.*/
    $m("Facebook.Unity.Gameroom.GameroomFacebookGameObject", function() { return { "att": 1048576, "a": 4, "m": [{ "a": 2, "isSynthetic": true, "n": ".ctor", "t": 1, "sn": "ctor" }, { "ov": true, "a": 3, "n": "OnAwake", "t": 8, "sn": "OnAwake", "rt": $n[0].Void }, { "a": 2, "n": "WaitForResponse", "t": 8, "pi": [{ "n": "onCompleteDelegate", "pt": Function, "ps": 0 }, { "n": "callbackId", "pt": $n[0].String, "ps": 1 }], "sn": "WaitForResponse", "rt": $n[0].Void, "p": [Function, $n[0].String] }, { "a": 4, "n": "GameroomFacebookImpl", "t": 16, "rt": $n[10].IGameroomFacebookImplementation, "g": { "a": 4, "n": "get_GameroomFacebookImpl", "t": 8, "rt": $n[10].IGameroomFacebookImplementation, "fg": "GameroomFacebookImpl" }, "fn": "GameroomFacebookImpl" }] }; }, $n);
    /*Facebook.Unity.Gameroom.GameroomFacebookGameObject end.*/

    /*Facebook.Unity.Gameroom.GameroomFacebookLoader start.*/
    $m("Facebook.Unity.Gameroom.GameroomFacebookLoader", function() { return { "att": 1048576, "a": 4, "m": [{ "a": 2, "isSynthetic": true, "n": ".ctor", "t": 1, "sn": "ctor" }, { "ov": true, "a": 4, "n": "FBGameObject", "t": 16, "rt": $n[8].FacebookGameObject, "g": { "ov": true, "a": 4, "n": "get_FBGameObject", "t": 8, "rt": $n[8].FacebookGameObject, "fg": "FBGameObject" }, "fn": "FBGameObject" }] }; }, $n);
    /*Facebook.Unity.Gameroom.GameroomFacebookLoader end.*/

    /*Facebook.Unity.Gameroom.GameroomWrapper start.*/
    $m("Facebook.Unity.Gameroom.GameroomWrapper", function() { return { "att": 1048576, "a": 4, "m": [{ "a": 2, "isSynthetic": true, "n": ".ctor", "t": 1, "sn": "ctor" }, { "a": 2, "n": "DoAppRequestRequest", "t": 8, "pi": [{ "n": "appId", "pt": $n[0].String, "ps": 0 }, { "n": "message", "pt": $n[0].String, "ps": 1 }, { "n": "actionType", "pt": $n[0].String, "ps": 2 }, { "n": "objectId", "pt": $n[0].String, "ps": 3 }, { "n": "to", "pt": $n[0].String, "ps": 4 }, { "n": "filters", "pt": $n[0].String, "ps": 5 }, { "n": "excludeIDs", "pt": $n[0].String, "ps": 6 }, { "n": "maxRecipients", "pt": $n[0].String, "ps": 7 }, { "n": "data", "pt": $n[0].String, "ps": 8 }, { "n": "title", "pt": $n[0].String, "ps": 9 }, { "n": "callbackId", "pt": $n[0].String, "ps": 10 }, { "n": "completeDelegate", "pt": Function, "ps": 11 }], "sn": "DoAppRequestRequest", "rt": $n[0].Void, "p": [$n[0].String, $n[0].String, $n[0].String, $n[0].String, $n[0].String, $n[0].String, $n[0].String, $n[0].String, $n[0].String, $n[0].String, $n[0].String, Function] }, { "a": 2, "n": "DoFeedShareRequest", "t": 8, "pi": [{ "n": "appId", "pt": $n[0].String, "ps": 0 }, { "n": "toId", "pt": $n[0].String, "ps": 1 }, { "n": "link", "pt": $n[0].String, "ps": 2 }, { "n": "linkName", "pt": $n[0].String, "ps": 3 }, { "n": "linkCaption", "pt": $n[0].String, "ps": 4 }, { "n": "linkDescription", "pt": $n[0].String, "ps": 5 }, { "n": "pictureLink", "pt": $n[0].String, "ps": 6 }, { "n": "mediaSource", "pt": $n[0].String, "ps": 7 }, { "n": "callbackId", "pt": $n[0].String, "ps": 8 }, { "n": "completeDelegate", "pt": Function, "ps": 9 }], "sn": "DoFeedShareRequest", "rt": $n[0].Void, "p": [$n[0].String, $n[0].String, $n[0].String, $n[0].String, $n[0].String, $n[0].String, $n[0].String, $n[0].String, $n[0].String, Function] }, { "a": 2, "n": "DoHasLicenseRequest", "t": 8, "pi": [{ "n": "appId", "pt": $n[0].String, "ps": 0 }, { "n": "callbackId", "pt": $n[0].String, "ps": 1 }, { "n": "completeDelegate", "pt": Function, "ps": 2 }], "sn": "DoHasLicenseRequest", "rt": $n[0].Void, "p": [$n[0].String, $n[0].String, Function] }, { "a": 2, "n": "DoLoginRequest", "t": 8, "pi": [{ "n": "appID", "pt": $n[0].String, "ps": 0 }, { "n": "permissions", "pt": $n[0].String, "ps": 1 }, { "n": "callbackId", "pt": $n[0].String, "ps": 2 }, { "n": "completeDelegate", "pt": Function, "ps": 3 }], "sn": "DoLoginRequest", "rt": $n[0].Void, "p": [$n[0].String, $n[0].String, $n[0].String, Function] }, { "a": 2, "n": "DoPayPremiumRequest", "t": 8, "pi": [{ "n": "appId", "pt": $n[0].String, "ps": 0 }, { "n": "callbackId", "pt": $n[0].String, "ps": 1 }, { "n": "completeDelegate", "pt": Function, "ps": 2 }], "sn": "DoPayPremiumRequest", "rt": $n[0].Void, "p": [$n[0].String, $n[0].String, Function] }, { "a": 2, "n": "DoPayRequest", "t": 8, "pi": [{ "n": "appId", "pt": $n[0].String, "ps": 0 }, { "n": "method", "pt": $n[0].String, "ps": 1 }, { "n": "action", "pt": $n[0].String, "ps": 2 }, { "n": "product", "pt": $n[0].String, "ps": 3 }, { "n": "productId", "pt": $n[0].String, "ps": 4 }, { "n": "quantity", "pt": $n[0].String, "ps": 5 }, { "n": "quantityMin", "pt": $n[0].String, "ps": 6 }, { "n": "quantityMax", "pt": $n[0].String, "ps": 7 }, { "n": "requestId", "pt": $n[0].String, "ps": 8 }, { "n": "pricepointId", "pt": $n[0].String, "ps": 9 }, { "n": "testCurrency", "pt": $n[0].String, "ps": 10 }, { "n": "developerPayload", "pt": $n[0].String, "ps": 11 }, { "n": "callbackId", "pt": $n[0].String, "ps": 12 }, { "n": "completeDelegate", "pt": Function, "ps": 13 }], "sn": "DoPayRequest", "rt": $n[0].Void, "p": [$n[0].String, $n[0].String, $n[0].String, $n[0].String, $n[0].String, $n[0].String, $n[0].String, $n[0].String, $n[0].String, $n[0].String, $n[0].String, $n[0].String, $n[0].String, Function] }, { "a": 2, "n": "Init", "t": 8, "pi": [{ "n": "completeDelegate", "pt": Function, "ps": 0 }], "sn": "Init", "rt": $n[0].Void, "p": [Function] }, { "a": 2, "n": "SendRequest", "t": 8, "pi": [{ "n": "request", "pt": System.Object, "ps": 0 }], "tpc": 1, "tprm": ["T"], "sn": "SendRequest", "rt": $n[0].Void, "p": [System.Object] }, { "v": true, "a": 2, "n": "PipeResponse", "t": 16, "rt": $n[2].IDictionary$2(System.String, System.Object), "g": { "v": true, "a": 2, "n": "get_PipeResponse", "t": 8, "rt": $n[2].IDictionary$2(System.String, System.Object), "fg": "PipeResponse" }, "s": { "v": true, "a": 2, "n": "set_PipeResponse", "t": 8, "p": [$n[2].IDictionary$2(System.String, System.Object)], "rt": $n[0].Void, "fs": "PipeResponse" }, "fn": "PipeResponse" }, { "a": 1, "backing": true, "n": "<PipeResponse>k__BackingField", "t": 4, "rt": $n[2].IDictionary$2(System.String, System.Object), "sn": "PipeResponse" }] }; }, $n);
    /*Facebook.Unity.Gameroom.GameroomWrapper end.*/

    /*Facebook.Unity.Gameroom.IGameroomFacebook start.*/
    $m("Facebook.Unity.Gameroom.IGameroomFacebook", function() { return { "att": 160, "a": 4, "m": [{ "ab": true, "a": 2, "n": "HasLicense", "t": 8, "pi": [{ "n": "callback", "pt": Function, "ps": 0 }], "sn": "Facebook$Unity$Gameroom$IGameroomFacebook$HasLicense", "rt": $n[0].Void, "p": [Function] }, { "ab": true, "a": 2, "n": "PayPremium", "t": 8, "pi": [{ "n": "callback", "pt": Function, "ps": 0 }], "sn": "Facebook$Unity$Gameroom$IGameroomFacebook$PayPremium", "rt": $n[0].Void, "p": [Function] }] }; }, $n);
    /*Facebook.Unity.Gameroom.IGameroomFacebook end.*/

    /*Facebook.Unity.Gameroom.IGameroomFacebookImplementation start.*/
    $m("Facebook.Unity.Gameroom.IGameroomFacebookImplementation", function() { return { "att": 160, "a": 4, "m": [{ "ab": true, "a": 2, "n": "GetPipeResponse", "t": 8, "pi": [{ "n": "callbackId", "pt": $n[0].String, "ps": 0 }], "sn": "Facebook$Unity$Gameroom$IGameroomFacebookImplementation$GetPipeResponse", "rt": $n[0].String, "p": [$n[0].String] }, { "ab": true, "a": 2, "n": "HaveReceivedPipeResponse", "t": 8, "sn": "Facebook$Unity$Gameroom$IGameroomFacebookImplementation$HaveReceivedPipeResponse", "rt": $n[0].Boolean, "box": function($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString); } }] }; }, $n);
    /*Facebook.Unity.Gameroom.IGameroomFacebookImplementation end.*/

    /*Facebook.Unity.Gameroom.IGameroomFacebookResultHandler start.*/
    $m("Facebook.Unity.Gameroom.IGameroomFacebookResultHandler", function() { return { "att": 160, "a": 4 }; }, $n);
    /*Facebook.Unity.Gameroom.IGameroomFacebookResultHandler end.*/

    /*Facebook.Unity.Gameroom.IGameroomWrapper start.*/
    $m("Facebook.Unity.Gameroom.IGameroomWrapper", function() { return { "att": 160, "a": 4, "m": [{ "ab": true, "a": 2, "n": "DoAppRequestRequest", "t": 8, "pi": [{ "n": "appId", "pt": $n[0].String, "ps": 0 }, { "n": "message", "pt": $n[0].String, "ps": 1 }, { "n": "actionType", "pt": $n[0].String, "ps": 2 }, { "n": "objectId", "pt": $n[0].String, "ps": 3 }, { "n": "to", "pt": $n[0].String, "ps": 4 }, { "n": "filters", "pt": $n[0].String, "ps": 5 }, { "n": "excludeIDs", "pt": $n[0].String, "ps": 6 }, { "n": "maxRecipients", "pt": $n[0].String, "ps": 7 }, { "n": "data", "pt": $n[0].String, "ps": 8 }, { "n": "title", "pt": $n[0].String, "ps": 9 }, { "n": "callbackID", "pt": $n[0].String, "ps": 10 }, { "n": "completeDelegate", "pt": Function, "ps": 11 }], "sn": "Facebook$Unity$Gameroom$IGameroomWrapper$DoAppRequestRequest", "rt": $n[0].Void, "p": [$n[0].String, $n[0].String, $n[0].String, $n[0].String, $n[0].String, $n[0].String, $n[0].String, $n[0].String, $n[0].String, $n[0].String, $n[0].String, Function] }, { "ab": true, "a": 2, "n": "DoFeedShareRequest", "t": 8, "pi": [{ "n": "appId", "pt": $n[0].String, "ps": 0 }, { "n": "toId", "pt": $n[0].String, "ps": 1 }, { "n": "link", "pt": $n[0].String, "ps": 2 }, { "n": "linkName", "pt": $n[0].String, "ps": 3 }, { "n": "linkCaption", "pt": $n[0].String, "ps": 4 }, { "n": "linkDescription", "pt": $n[0].String, "ps": 5 }, { "n": "pictureLink", "pt": $n[0].String, "ps": 6 }, { "n": "mediaSource", "pt": $n[0].String, "ps": 7 }, { "n": "callbackID", "pt": $n[0].String, "ps": 8 }, { "n": "completeDelegate", "pt": Function, "ps": 9 }], "sn": "Facebook$Unity$Gameroom$IGameroomWrapper$DoFeedShareRequest", "rt": $n[0].Void, "p": [$n[0].String, $n[0].String, $n[0].String, $n[0].String, $n[0].String, $n[0].String, $n[0].String, $n[0].String, $n[0].String, Function] }, { "ab": true, "a": 2, "n": "DoHasLicenseRequest", "t": 8, "pi": [{ "n": "appId", "pt": $n[0].String, "ps": 0 }, { "n": "callbackID", "pt": $n[0].String, "ps": 1 }, { "n": "completeDelegate", "pt": Function, "ps": 2 }], "sn": "Facebook$Unity$Gameroom$IGameroomWrapper$DoHasLicenseRequest", "rt": $n[0].Void, "p": [$n[0].String, $n[0].String, Function] }, { "ab": true, "a": 2, "n": "DoLoginRequest", "t": 8, "pi": [{ "n": "appID", "pt": $n[0].String, "ps": 0 }, { "n": "permissions", "pt": $n[0].String, "ps": 1 }, { "n": "callbackID", "pt": $n[0].String, "ps": 2 }, { "n": "completeDelegate", "pt": Function, "ps": 3 }], "sn": "Facebook$Unity$Gameroom$IGameroomWrapper$DoLoginRequest", "rt": $n[0].Void, "p": [$n[0].String, $n[0].String, $n[0].String, Function] }, { "ab": true, "a": 2, "n": "DoPayPremiumRequest", "t": 8, "pi": [{ "n": "appId", "pt": $n[0].String, "ps": 0 }, { "n": "callbackID", "pt": $n[0].String, "ps": 1 }, { "n": "completeDelegate", "pt": Function, "ps": 2 }], "sn": "Facebook$Unity$Gameroom$IGameroomWrapper$DoPayPremiumRequest", "rt": $n[0].Void, "p": [$n[0].String, $n[0].String, Function] }, { "ab": true, "a": 2, "n": "DoPayRequest", "t": 8, "pi": [{ "n": "appId", "pt": $n[0].String, "ps": 0 }, { "n": "method", "pt": $n[0].String, "ps": 1 }, { "n": "action", "pt": $n[0].String, "ps": 2 }, { "n": "product", "pt": $n[0].String, "ps": 3 }, { "n": "productId", "pt": $n[0].String, "ps": 4 }, { "n": "quantity", "pt": $n[0].String, "ps": 5 }, { "n": "quantityMin", "pt": $n[0].String, "ps": 6 }, { "n": "quantityMax", "pt": $n[0].String, "ps": 7 }, { "n": "requestId", "pt": $n[0].String, "ps": 8 }, { "n": "pricepointId", "pt": $n[0].String, "ps": 9 }, { "n": "testCurrency", "pt": $n[0].String, "ps": 10 }, { "n": "developerPayload", "pt": $n[0].String, "ps": 11 }, { "n": "callbackID", "pt": $n[0].String, "ps": 12 }, { "n": "completeDelegate", "pt": Function, "ps": 13 }], "sn": "Facebook$Unity$Gameroom$IGameroomWrapper$DoPayRequest", "rt": $n[0].Void, "p": [$n[0].String, $n[0].String, $n[0].String, $n[0].String, $n[0].String, $n[0].String, $n[0].String, $n[0].String, $n[0].String, $n[0].String, $n[0].String, $n[0].String, $n[0].String, Function] }, { "ab": true, "a": 2, "n": "Init", "t": 8, "pi": [{ "n": "completeDelegate", "pt": Function, "ps": 0 }], "sn": "Facebook$Unity$Gameroom$IGameroomWrapper$Init", "rt": $n[0].Void, "p": [Function] }, { "ab": true, "a": 2, "n": "PipeResponse", "t": 16, "rt": $n[2].IDictionary$2(System.String, System.Object), "g": { "ab": true, "a": 2, "n": "get_PipeResponse", "t": 8, "rt": $n[2].IDictionary$2(System.String, System.Object), "fg": "Facebook$Unity$Gameroom$IGameroomWrapper$PipeResponse" }, "s": { "ab": true, "a": 2, "n": "set_PipeResponse", "t": 8, "p": [$n[2].IDictionary$2(System.String, System.Object)], "rt": $n[0].Void, "fs": "Facebook$Unity$Gameroom$IGameroomWrapper$PipeResponse" }, "fn": "Facebook$Unity$Gameroom$IGameroomWrapper$PipeResponse" }, { "a": 1, "backing": true, "n": "<PipeResponse>k__BackingField", "t": 4, "rt": $n[2].IDictionary$2(System.String, System.Object), "sn": "Facebook$Unity$Gameroom$IGameroomWrapper$PipeResponse" }] }; }, $n);
    /*Facebook.Unity.Gameroom.IGameroomWrapper end.*/

    /*Facebook.Unity.Editor.EditorFacebook start.*/
    $m("Facebook.Unity.Editor.EditorFacebook", function() { return { "att": 1048576, "a": 4, "m": [{ "a": 2, "n": ".ctor", "t": 1, "sn": "ctor" }, { "a": 2, "n": ".ctor", "t": 1, "p": [$n[14].IEditorWrapper, $n[8].CallbackManager], "pi": [{ "n": "wrapper", "pt": $n[14].IEditorWrapper, "ps": 0 }, { "n": "callbackManager", "pt": $n[8].CallbackManager, "ps": 1 }], "sn": "$ctor1" }, { "ov": true, "a": 2, "n": "ActivateApp", "t": 8, "pi": [{ "n": "appId", "pt": $n[0].String, "ps": 0 }], "sn": "ActivateApp", "rt": $n[0].Void, "p": [$n[0].String] }, { "ov": true, "a": 2, "n": "AppEventsLogEvent", "t": 8, "pi": [{ "n": "logEvent", "pt": $n[0].String, "ps": 0 }, { "n": "valueToSum", "pt": $n[0].Nullable$1(System.Single), "ps": 1 }, { "n": "parameters", "pt": $n[2].Dictionary$2(System.String, System.Object), "ps": 2 }], "sn": "AppEventsLogEvent", "rt": $n[0].Void, "p": [$n[0].String, $n[0].Nullable$1(System.Single), $n[2].Dictionary$2(System.String, System.Object)] }, { "ov": true, "a": 2, "n": "AppEventsLogPurchase", "t": 8, "pi": [{ "n": "logPurchase", "pt": $n[0].Single, "ps": 0 }, { "n": "currency", "pt": $n[0].String, "ps": 1 }, { "n": "parameters", "pt": $n[2].Dictionary$2(System.String, System.Object), "ps": 2 }], "sn": "AppEventsLogPurchase", "rt": $n[0].Void, "p": [$n[0].Single, $n[0].String, $n[2].Dictionary$2(System.String, System.Object)] }, { "ov": true, "a": 2, "n": "AppRequest", "t": 8, "pi": [{ "n": "message", "pt": $n[0].String, "ps": 0 }, { "n": "actionType", "pt": $n[0].Nullable$1(Facebook.Unity.OGActionType), "ps": 1 }, { "n": "objectId", "pt": $n[0].String, "ps": 2 }, { "n": "to", "pt": $n[2].IEnumerable$1(System.String), "ps": 3 }, { "n": "filters", "pt": $n[2].IEnumerable$1(System.Object), "ps": 4 }, { "n": "excludeIds", "pt": $n[2].IEnumerable$1(System.String), "ps": 5 }, { "n": "maxRecipients", "pt": $n[0].Nullable$1(System.Int32), "ps": 6 }, { "n": "data", "pt": $n[0].String, "ps": 7 }, { "n": "title", "pt": $n[0].String, "ps": 8 }, { "n": "callback", "pt": Function, "ps": 9 }], "sn": "AppRequest$1", "rt": $n[0].Void, "p": [$n[0].String, $n[0].Nullable$1(Facebook.Unity.OGActionType), $n[0].String, $n[2].IEnumerable$1(System.String), $n[2].IEnumerable$1(System.Object), $n[2].IEnumerable$1(System.String), $n[0].Nullable$1(System.Int32), $n[0].String, $n[0].String, Function] }, { "a": 2, "n": "ConsumePurchase", "t": 8, "pi": [{ "n": "productID", "pt": $n[0].String, "ps": 0 }, { "n": "callback", "pt": Function, "ps": 1 }], "sn": "ConsumePurchase", "rt": $n[0].Void, "p": [$n[0].String, Function] }, { "a": 2, "n": "CurrentAuthenticationToken", "t": 8, "sn": "CurrentAuthenticationToken", "rt": $n[8].AuthenticationToken }, { "a": 2, "n": "CurrentProfile", "t": 8, "sn": "CurrentProfile", "rt": $n[8].Profile }, { "ov": true, "a": 2, "n": "FeedShare", "t": 8, "pi": [{ "n": "toId", "pt": $n[0].String, "ps": 0 }, { "n": "link", "pt": $n[0].Uri, "ps": 1 }, { "n": "linkName", "pt": $n[0].String, "ps": 2 }, { "n": "linkCaption", "pt": $n[0].String, "ps": 3 }, { "n": "linkDescription", "pt": $n[0].String, "ps": 4 }, { "n": "picture", "pt": $n[0].Uri, "ps": 5 }, { "n": "mediaSource", "pt": $n[0].String, "ps": 6 }, { "n": "callback", "pt": Function, "ps": 7 }], "sn": "FeedShare", "rt": $n[0].Void, "p": [$n[0].String, $n[0].Uri, $n[0].String, $n[0].String, $n[0].String, $n[0].Uri, $n[0].String, Function] }, { "a": 2, "n": "FetchDeferredAppLink", "t": 8, "pi": [{ "n": "callback", "pt": Function, "ps": 0 }], "sn": "FetchDeferredAppLink", "rt": $n[0].Void, "p": [Function] }, { "ov": true, "a": 2, "n": "GetAppLink", "t": 8, "pi": [{ "n": "callback", "pt": Function, "ps": 0 }], "sn": "GetAppLink", "rt": $n[0].Void, "p": [Function] }, { "a": 2, "n": "GetCatalog", "t": 8, "pi": [{ "n": "callback", "pt": Function, "ps": 0 }], "sn": "GetCatalog", "rt": $n[0].Void, "p": [Function] }, { "a": 2, "n": "GetPayload", "t": 8, "pi": [{ "n": "callback", "pt": Function, "ps": 0 }], "sn": "GetPayload", "rt": $n[0].Void, "p": [Function] }, { "a": 2, "n": "GetPurchases", "t": 8, "pi": [{ "n": "callback", "pt": Function, "ps": 0 }], "sn": "GetPurchases", "rt": $n[0].Void, "p": [Function] }, { "ov": true, "a": 2, "n": "Init", "t": 8, "pi": [{ "n": "onInitComplete", "pt": Function, "ps": 0 }], "sn": "Init", "rt": $n[0].Void, "p": [Function] }, { "a": 2, "n": "InitCloudGame", "t": 8, "pi": [{ "n": "callback", "pt": Function, "ps": 0 }], "sn": "InitCloudGame", "rt": $n[0].Void, "p": [Function] }, { "a": 2, "n": "IsImplicitPurchaseLoggingEnabled", "t": 8, "sn": "IsImplicitPurchaseLoggingEnabled", "rt": $n[0].Boolean, "box": function($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString); } }, { "a": 2, "n": "LoadInterstitialAd", "t": 8, "pi": [{ "n": "placementID", "pt": $n[0].String, "ps": 0 }, { "n": "callback", "pt": Function, "ps": 1 }], "sn": "LoadInterstitialAd", "rt": $n[0].Void, "p": [$n[0].String, Function] }, { "a": 2, "n": "LoadRewardedVideo", "t": 8, "pi": [{ "n": "placementID", "pt": $n[0].String, "ps": 0 }, { "n": "callback", "pt": Function, "ps": 1 }], "sn": "LoadRewardedVideo", "rt": $n[0].Void, "p": [$n[0].String, Function] }, { "ov": true, "a": 2, "n": "LogInWithPublishPermissions", "t": 8, "pi": [{ "n": "permissions", "pt": $n[2].IEnumerable$1(System.String), "ps": 0 }, { "n": "callback", "pt": Function, "ps": 1 }], "sn": "LogInWithPublishPermissions", "rt": $n[0].Void, "p": [$n[2].IEnumerable$1(System.String), Function] }, { "ov": true, "a": 2, "n": "LogInWithReadPermissions", "t": 8, "pi": [{ "n": "permissions", "pt": $n[2].IEnumerable$1(System.String), "ps": 0 }, { "n": "callback", "pt": Function, "ps": 1 }], "sn": "LogInWithReadPermissions", "rt": $n[0].Void, "p": [$n[2].IEnumerable$1(System.String), Function] }, { "a": 2, "n": "LoginWithTrackingPreference", "t": 8, "pi": [{ "n": "tracking", "pt": $n[0].String, "ps": 0 }, { "n": "permissions", "pt": $n[2].IEnumerable$1(System.String), "ps": 1 }, { "n": "nonce", "pt": $n[0].String, "ps": 2 }, { "n": "callback", "pt": Function, "ps": 3 }], "sn": "LoginWithTrackingPreference", "rt": $n[0].Void, "p": [$n[0].String, $n[2].IEnumerable$1(System.String), $n[0].String, Function] }, { "ov": true, "a": 2, "n": "OnAppRequestsComplete", "t": 8, "pi": [{ "n": "resultContainer", "pt": $n[8].ResultContainer, "ps": 0 }], "sn": "OnAppRequestsComplete", "rt": $n[0].Void, "p": [$n[8].ResultContainer] }, { "a": 2, "n": "OnConsumePurchaseComplete", "t": 8, "pi": [{ "n": "resultContainer", "pt": $n[8].ResultContainer, "ps": 0 }], "sn": "OnConsumePurchaseComplete", "rt": $n[0].Void, "p": [$n[8].ResultContainer] }, { "a": 2, "n": "OnFacebookAuthResponseChange", "t": 8, "pi": [{ "n": "resultContainer", "pt": $n[8].ResultContainer, "ps": 0 }], "sn": "OnFacebookAuthResponseChange", "rt": $n[0].Void, "p": [$n[8].ResultContainer] }, { "a": 2, "n": "OnFetchDeferredAppLinkComplete", "t": 8, "pi": [{ "n": "resultContainer", "pt": $n[8].ResultContainer, "ps": 0 }], "sn": "OnFetchDeferredAppLinkComplete", "rt": $n[0].Void, "p": [$n[8].ResultContainer] }, { "a": 2, "n": "OnFriendFinderComplete", "t": 8, "pi": [{ "n": "resultContainer", "pt": $n[8].ResultContainer, "ps": 0 }], "sn": "OnFriendFinderComplete", "rt": $n[0].Void, "p": [$n[8].ResultContainer] }, { "ov": true, "a": 2, "n": "OnGetAppLinkComplete", "t": 8, "pi": [{ "n": "resultContainer", "pt": $n[8].ResultContainer, "ps": 0 }], "sn": "OnGetAppLinkComplete", "rt": $n[0].Void, "p": [$n[8].ResultContainer] }, { "a": 2, "n": "OnGetCatalogComplete", "t": 8, "pi": [{ "n": "resultContainer", "pt": $n[8].ResultContainer, "ps": 0 }], "sn": "OnGetCatalogComplete", "rt": $n[0].Void, "p": [$n[8].ResultContainer] }, { "a": 2, "n": "OnGetPayloadComplete", "t": 8, "pi": [{ "n": "resultContainer", "pt": $n[8].ResultContainer, "ps": 0 }], "sn": "OnGetPayloadComplete", "rt": $n[0].Void, "p": [$n[8].ResultContainer] }, { "a": 2, "n": "OnGetPurchasesComplete", "t": 8, "pi": [{ "n": "resultContainer", "pt": $n[8].ResultContainer, "ps": 0 }], "sn": "OnGetPurchasesComplete", "rt": $n[0].Void, "p": [$n[8].ResultContainer] }, { "a": 2, "n": "OnHideUnity", "t": 8, "pi": [{ "n": "hidden", "pt": $n[0].Boolean, "ps": 0 }], "sn": "OnHideUnity", "rt": $n[0].Void, "p": [$n[0].Boolean] }, { "a": 2, "n": "OnIAPReady", "t": 8, "pi": [{ "n": "callback", "pt": Function, "ps": 0 }], "sn": "OnIAPReady", "rt": $n[0].Void, "p": [Function] }, { "a": 2, "n": "OnInitCloudGameComplete", "t": 8, "pi": [{ "n": "resultContainer", "pt": $n[8].ResultContainer, "ps": 0 }], "sn": "OnInitCloudGameComplete", "rt": $n[0].Void, "p": [$n[8].ResultContainer] }, { "a": 2, "n": "OnLoadInterstitialAdComplete", "t": 8, "pi": [{ "n": "resultContainer", "pt": $n[8].ResultContainer, "ps": 0 }], "sn": "OnLoadInterstitialAdComplete", "rt": $n[0].Void, "p": [$n[8].ResultContainer] }, { "a": 2, "n": "OnLoadRewardedVideoComplete", "t": 8, "pi": [{ "n": "resultContainer", "pt": $n[8].ResultContainer, "ps": 0 }], "sn": "OnLoadRewardedVideoComplete", "rt": $n[0].Void, "p": [$n[8].ResultContainer] }, { "ov": true, "a": 2, "n": "OnLoginComplete", "t": 8, "pi": [{ "n": "resultContainer", "pt": $n[8].ResultContainer, "ps": 0 }], "sn": "OnLoginComplete", "rt": $n[0].Void, "p": [$n[8].ResultContainer] }, { "a": 2, "n": "OnOnIAPReadyComplete", "t": 8, "pi": [{ "n": "resultContainer", "pt": $n[8].ResultContainer, "ps": 0 }], "sn": "OnOnIAPReadyComplete", "rt": $n[0].Void, "p": [$n[8].ResultContainer] }, { "a": 2, "n": "OnOpenAppStoreComplete", "t": 8, "pi": [{ "n": "resultContainer", "pt": $n[8].ResultContainer, "ps": 0 }], "sn": "OnOpenAppStoreComplete", "rt": $n[0].Void, "p": [$n[8].ResultContainer] }, { "a": 2, "n": "OnPayComplete", "t": 8, "pi": [{ "n": "resultContainer", "pt": $n[8].ResultContainer, "ps": 0 }], "sn": "OnPayComplete", "rt": $n[0].Void, "p": [$n[8].ResultContainer] }, { "a": 2, "n": "OnPostSessionScoreComplete", "t": 8, "pi": [{ "n": "resultContainer", "pt": $n[8].ResultContainer, "ps": 0 }], "sn": "OnPostSessionScoreComplete", "rt": $n[0].Void, "p": [$n[8].ResultContainer] }, { "a": 2, "n": "OnPurchaseComplete", "t": 8, "pi": [{ "n": "resultContainer", "pt": $n[8].ResultContainer, "ps": 0 }], "sn": "OnPurchaseComplete", "rt": $n[0].Void, "p": [$n[8].ResultContainer] }, { "a": 2, "n": "OnRefreshCurrentAccessTokenComplete", "t": 8, "pi": [{ "n": "resultContainer", "pt": $n[8].ResultContainer, "ps": 0 }], "sn": "OnRefreshCurrentAccessTokenComplete", "rt": $n[0].Void, "p": [$n[8].ResultContainer] }, { "a": 2, "n": "OnScheduleAppToUserNotificationComplete", "t": 8, "pi": [{ "n": "resultContainer", "pt": $n[8].ResultContainer, "ps": 0 }], "sn": "OnScheduleAppToUserNotificationComplete", "rt": $n[0].Void, "p": [$n[8].ResultContainer] }, { "ov": true, "a": 2, "n": "OnShareLinkComplete", "t": 8, "pi": [{ "n": "resultContainer", "pt": $n[8].ResultContainer, "ps": 0 }], "sn": "OnShareLinkComplete", "rt": $n[0].Void, "p": [$n[8].ResultContainer] }, { "a": 2, "n": "OnShowInterstitialAdComplete", "t": 8, "pi": [{ "n": "resultContainer", "pt": $n[8].ResultContainer, "ps": 0 }], "sn": "OnShowInterstitialAdComplete", "rt": $n[0].Void, "p": [$n[8].ResultContainer] }, { "a": 2, "n": "OnShowRewardedVideoComplete", "t": 8, "pi": [{ "n": "resultContainer", "pt": $n[8].ResultContainer, "ps": 0 }], "sn": "OnShowRewardedVideoComplete", "rt": $n[0].Void, "p": [$n[8].ResultContainer] }, { "a": 2, "n": "OnUploadImageToMediaLibraryComplete", "t": 8, "pi": [{ "n": "resultContainer", "pt": $n[8].ResultContainer, "ps": 0 }], "sn": "OnUploadImageToMediaLibraryComplete", "rt": $n[0].Void, "p": [$n[8].ResultContainer] }, { "a": 2, "n": "OnUploadVideoToMediaLibraryComplete", "t": 8, "pi": [{ "n": "resultContainer", "pt": $n[8].ResultContainer, "ps": 0 }], "sn": "OnUploadVideoToMediaLibraryComplete", "rt": $n[0].Void, "p": [$n[8].ResultContainer] }, { "a": 2, "n": "OnUrlResponse", "t": 8, "pi": [{ "n": "message", "pt": $n[0].String, "ps": 0 }], "sn": "OnUrlResponse", "rt": $n[0].Void, "p": [$n[0].String] }, { "a": 2, "n": "OpenAppStore", "t": 8, "pi": [{ "n": "callback", "pt": Function, "ps": 0 }], "sn": "OpenAppStore", "rt": $n[0].Void, "p": [Function] }, { "a": 2, "n": "OpenFriendFinderDialog", "t": 8, "pi": [{ "n": "callback", "pt": Function, "ps": 0 }], "sn": "OpenFriendFinderDialog", "rt": $n[0].Void, "p": [Function] }, { "a": 2, "n": "Pay", "t": 8, "pi": [{ "n": "product", "pt": $n[0].String, "ps": 0 }, { "n": "action", "pt": $n[0].String, "ps": 1 }, { "n": "quantity", "pt": $n[0].Int32, "ps": 2 }, { "n": "quantityMin", "pt": $n[0].Nullable$1(System.Int32), "ps": 3 }, { "n": "quantityMax", "pt": $n[0].Nullable$1(System.Int32), "ps": 4 }, { "n": "requestId", "pt": $n[0].String, "ps": 5 }, { "n": "pricepointId", "pt": $n[0].String, "ps": 6 }, { "n": "testCurrency", "pt": $n[0].String, "ps": 7 }, { "n": "callback", "pt": Function, "ps": 8 }], "sn": "Pay", "rt": $n[0].Void, "p": [$n[0].String, $n[0].String, $n[0].Int32, $n[0].Nullable$1(System.Int32), $n[0].Nullable$1(System.Int32), $n[0].String, $n[0].String, $n[0].String, Function] }, { "a": 2, "n": "PayWithProductId", "t": 8, "pi": [{ "n": "productId", "pt": $n[0].String, "ps": 0 }, { "n": "action", "pt": $n[0].String, "ps": 1 }, { "n": "developerPayload", "pt": $n[0].String, "ps": 2 }, { "n": "testCurrency", "pt": $n[0].String, "ps": 3 }, { "n": "callback", "pt": Function, "ps": 4 }], "sn": "PayWithProductId$1", "rt": $n[0].Void, "p": [$n[0].String, $n[0].String, $n[0].String, $n[0].String, Function] }, { "a": 2, "n": "PayWithProductId", "t": 8, "pi": [{ "n": "productId", "pt": $n[0].String, "ps": 0 }, { "n": "action", "pt": $n[0].String, "ps": 1 }, { "n": "quantity", "pt": $n[0].Int32, "ps": 2 }, { "n": "quantityMin", "pt": $n[0].Nullable$1(System.Int32), "ps": 3 }, { "n": "quantityMax", "pt": $n[0].Nullable$1(System.Int32), "ps": 4 }, { "n": "requestId", "pt": $n[0].String, "ps": 5 }, { "n": "pricepointId", "pt": $n[0].String, "ps": 6 }, { "n": "testCurrency", "pt": $n[0].String, "ps": 7 }, { "n": "callback", "pt": Function, "ps": 8 }], "sn": "PayWithProductId", "rt": $n[0].Void, "p": [$n[0].String, $n[0].String, $n[0].Int32, $n[0].Nullable$1(System.Int32), $n[0].Nullable$1(System.Int32), $n[0].String, $n[0].String, $n[0].String, Function] }, { "a": 2, "n": "PostSessionScore", "t": 8, "pi": [{ "n": "score", "pt": $n[0].Int32, "ps": 0 }, { "n": "callback", "pt": Function, "ps": 1 }], "sn": "PostSessionScore", "rt": $n[0].Void, "p": [$n[0].Int32, Function] }, { "a": 2, "n": "Purchase", "t": 8, "pi": [{ "n": "productID", "pt": $n[0].String, "ps": 0 }, { "n": "callback", "pt": Function, "ps": 1 }, { "n": "developerPayload", "pt": $n[0].String, "ps": 2 }], "sn": "Purchase", "rt": $n[0].Void, "p": [$n[0].String, Function, $n[0].String] }, { "a": 2, "n": "RefreshCurrentAccessToken", "t": 8, "pi": [{ "n": "callback", "pt": Function, "ps": 0 }], "sn": "RefreshCurrentAccessToken", "rt": $n[0].Void, "p": [Function] }, { "a": 2, "n": "ScheduleAppToUserNotification", "t": 8, "pi": [{ "n": "title", "pt": $n[0].String, "ps": 0 }, { "n": "body", "pt": $n[0].String, "ps": 1 }, { "n": "media", "pt": $n[0].Uri, "ps": 2 }, { "n": "timeInterval", "pt": $n[0].Int32, "ps": 3 }, { "n": "payload", "pt": $n[0].String, "ps": 4 }, { "n": "callback", "pt": Function, "ps": 5 }], "sn": "ScheduleAppToUserNotification", "rt": $n[0].Void, "p": [$n[0].String, $n[0].String, $n[0].Uri, $n[0].Int32, $n[0].String, Function] }, { "a": 2, "n": "SetAdvertiserIDCollectionEnabled", "t": 8, "pi": [{ "n": "advertiserIDCollectionEnabled", "pt": $n[0].Boolean, "ps": 0 }], "sn": "SetAdvertiserIDCollectionEnabled", "rt": $n[0].Void, "p": [$n[0].Boolean] }, { "a": 2, "n": "SetAdvertiserTrackingEnabled", "t": 8, "pi": [{ "n": "advertiserTrackingEnabled", "pt": $n[0].Boolean, "ps": 0 }], "sn": "SetAdvertiserTrackingEnabled", "rt": $n[0].Boolean, "p": [$n[0].Boolean], "box": function($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString); } }, { "a": 2, "n": "SetAutoLogAppEventsEnabled", "t": 8, "pi": [{ "n": "autoLogAppEventsEnabled", "pt": $n[0].Boolean, "ps": 0 }], "sn": "SetAutoLogAppEventsEnabled", "rt": $n[0].Void, "p": [$n[0].Boolean] }, { "a": 2, "n": "SetDataProcessingOptions", "t": 8, "pi": [{ "n": "options", "pt": $n[2].IEnumerable$1(System.String), "ps": 0 }, { "n": "country", "pt": $n[0].Int32, "ps": 1 }, { "n": "state", "pt": $n[0].Int32, "ps": 2 }], "sn": "SetDataProcessingOptions", "rt": $n[0].Void, "p": [$n[2].IEnumerable$1(System.String), $n[0].Int32, $n[0].Int32] }, { "a": 2, "n": "SetPushNotificationsDeviceTokenString", "t": 8, "pi": [{ "n": "token", "pt": $n[0].String, "ps": 0 }], "sn": "SetPushNotificationsDeviceTokenString", "rt": $n[0].Void, "p": [$n[0].String] }, { "ov": true, "a": 2, "n": "ShareLink", "t": 8, "pi": [{ "n": "contentURL", "pt": $n[0].Uri, "ps": 0 }, { "n": "contentTitle", "pt": $n[0].String, "ps": 1 }, { "n": "contentDescription", "pt": $n[0].String, "ps": 2 }, { "n": "photoURL", "pt": $n[0].Uri, "ps": 3 }, { "n": "callback", "pt": Function, "ps": 4 }], "sn": "ShareLink", "rt": $n[0].Void, "p": [$n[0].Uri, $n[0].String, $n[0].String, $n[0].Uri, Function] }, { "a": 2, "n": "ShowInterstitialAd", "t": 8, "pi": [{ "n": "placementID", "pt": $n[0].String, "ps": 0 }, { "n": "callback", "pt": Function, "ps": 1 }], "sn": "ShowInterstitialAd", "rt": $n[0].Void, "p": [$n[0].String, Function] }, { "a": 2, "n": "ShowRewardedVideo", "t": 8, "pi": [{ "n": "placementID", "pt": $n[0].String, "ps": 0 }, { "n": "callback", "pt": Function, "ps": 1 }], "sn": "ShowRewardedVideo", "rt": $n[0].Void, "p": [$n[0].String, Function] }, { "a": 2, "n": "UpdateUserProperties", "t": 8, "pi": [{ "n": "parameters", "pt": $n[2].Dictionary$2(System.String, System.String), "ps": 0 }], "sn": "UpdateUserProperties", "rt": $n[0].Void, "p": [$n[2].Dictionary$2(System.String, System.String)] }, { "a": 2, "n": "UploadImageToMediaLibrary", "t": 8, "pi": [{ "n": "caption", "pt": $n[0].String, "ps": 0 }, { "n": "imageUri", "pt": $n[0].Uri, "ps": 1 }, { "n": "shouldLaunchMediaDialog", "pt": $n[0].Boolean, "ps": 2 }, { "n": "callback", "pt": Function, "ps": 3 }], "sn": "UploadImageToMediaLibrary", "rt": $n[0].Void, "p": [$n[0].String, $n[0].Uri, $n[0].Boolean, Function] }, { "a": 2, "n": "UploadVideoToMediaLibrary", "t": 8, "pi": [{ "n": "caption", "pt": $n[0].String, "ps": 0 }, { "n": "imageUri", "pt": $n[0].Uri, "ps": 1 }, { "n": "callback", "pt": Function, "ps": 2 }], "sn": "UploadVideoToMediaLibrary", "rt": $n[0].Void, "p": [$n[0].String, $n[0].Uri, Function] }, { "a": 4, "n": "EditorGameObject", "is": true, "t": 16, "rt": $n[8].IFacebookCallbackHandler, "g": { "a": 4, "n": "get_EditorGameObject", "t": 8, "rt": $n[8].IFacebookCallbackHandler, "fg": "EditorGameObject", "is": true }, "fn": "EditorGameObject" }, { "ov": true, "a": 2, "n": "LimitEventUsage", "t": 16, "rt": $n[0].Boolean, "g": { "ov": true, "a": 2, "n": "get_LimitEventUsage", "t": 8, "rt": $n[0].Boolean, "fg": "LimitEventUsage", "box": function($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString); } }, "s": { "ov": true, "a": 2, "n": "set_LimitEventUsage", "t": 8, "p": [$n[0].Boolean], "rt": $n[0].Void, "fs": "LimitEventUsage" }, "fn": "LimitEventUsage" }, { "ov": true, "a": 2, "n": "SDKName", "t": 16, "rt": $n[0].String, "g": { "ov": true, "a": 2, "n": "get_SDKName", "t": 8, "rt": $n[0].String, "fg": "SDKName" }, "fn": "SDKName" }, { "ov": true, "a": 2, "n": "SDKVersion", "t": 16, "rt": $n[0].String, "g": { "ov": true, "a": 2, "n": "get_SDKVersion", "t": 8, "rt": $n[0].String, "fg": "SDKVersion" }, "fn": "SDKVersion" }, { "v": true, "a": 2, "n": "ShareDialogMode", "t": 16, "rt": $n[8].ShareDialogMode, "g": { "v": true, "a": 2, "n": "get_ShareDialogMode", "t": 8, "rt": $n[8].ShareDialogMode, "fg": "ShareDialogMode", "box": function($v) { return Bridge.box($v, Facebook.Unity.ShareDialogMode, System.Enum.toStringFn(Facebook.Unity.ShareDialogMode)); } }, "s": { "v": true, "a": 2, "n": "set_ShareDialogMode", "t": 8, "p": [$n[8].ShareDialogMode], "rt": $n[0].Void, "fs": "ShareDialogMode" }, "fn": "ShareDialogMode" }, { "v": true, "a": 2, "n": "UserID", "t": 16, "rt": $n[0].String, "g": { "v": true, "a": 2, "n": "get_UserID", "t": 8, "rt": $n[0].String, "fg": "UserID" }, "s": { "v": true, "a": 2, "n": "set_UserID", "t": 8, "p": [$n[0].String], "rt": $n[0].Void, "fs": "UserID" }, "fn": "UserID" }, { "a": 1, "backing": true, "n": "<LimitEventUsage>k__BackingField", "t": 4, "rt": $n[0].Boolean, "sn": "LimitEventUsage", "box": function($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString); } }, { "a": 1, "backing": true, "n": "<ShareDialogMode>k__BackingField", "t": 4, "rt": $n[8].ShareDialogMode, "sn": "ShareDialogMode", "box": function($v) { return Bridge.box($v, Facebook.Unity.ShareDialogMode, System.Enum.toStringFn(Facebook.Unity.ShareDialogMode)); } }, { "a": 1, "backing": true, "n": "<UserID>k__BackingField", "t": 4, "rt": $n[0].String, "sn": "UserID" }] }; }, $n);
    /*Facebook.Unity.Editor.EditorFacebook end.*/

    /*Facebook.Unity.Editor.EditorFacebookGameObject start.*/
    $m("Facebook.Unity.Editor.EditorFacebookGameObject", function() { return { "att": 1048576, "a": 4, "m": [{ "a": 2, "isSynthetic": true, "n": ".ctor", "t": 1, "sn": "ctor" }, { "ov": true, "a": 3, "n": "OnAwake", "t": 8, "sn": "OnAwake", "rt": $n[0].Void }, { "a": 2, "n": "onPurchaseCompleteHandler", "t": 8, "pi": [{ "n": "data", "pt": $n[0].Object, "ps": 0 }], "sn": "onPurchaseCompleteHandler", "rt": $n[0].Void, "p": [$n[0].Object] }] }; }, $n);
    /*Facebook.Unity.Editor.EditorFacebookGameObject end.*/

    /*Facebook.Unity.Editor.EditorFacebookLoader start.*/
    $m("Facebook.Unity.Editor.EditorFacebookLoader", function() { return { "att": 1048576, "a": 4, "m": [{ "a": 2, "isSynthetic": true, "n": ".ctor", "t": 1, "sn": "ctor" }, { "ov": true, "a": 4, "n": "FBGameObject", "t": 16, "rt": $n[8].FacebookGameObject, "g": { "ov": true, "a": 4, "n": "get_FBGameObject", "t": 8, "rt": $n[8].FacebookGameObject, "fg": "FBGameObject" }, "fn": "FBGameObject" }] }; }, $n);
    /*Facebook.Unity.Editor.EditorFacebookLoader end.*/

    /*Facebook.Unity.Editor.EditorFacebookMockDialog start.*/
    $m("Facebook.Unity.Editor.EditorFacebookMockDialog", function() { return { "att": 1048704, "a": 4, "m": [{ "a": 3, "isSynthetic": true, "n": ".ctor", "t": 1, "sn": "ctor" }, { "ab": true, "a": 3, "n": "DoGui", "t": 8, "sn": "DoGui", "rt": $n[0].Void }, { "a": 2, "n": "OnGUI", "t": 8, "sn": "OnGUI", "rt": $n[0].Void }, { "v": true, "a": 3, "n": "SendCancelResult", "t": 8, "sn": "SendCancelResult", "rt": $n[0].Void }, { "v": true, "a": 3, "n": "SendErrorResult", "t": 8, "pi": [{ "n": "errorMessage", "pt": $n[0].String, "ps": 0 }], "sn": "SendErrorResult", "rt": $n[0].Void, "p": [$n[0].String] }, { "ab": true, "a": 3, "n": "SendSuccessResult", "t": 8, "sn": "SendSuccessResult", "rt": $n[0].Void }, { "a": 2, "n": "Start", "t": 8, "sn": "Start", "rt": $n[0].Void }, { "a": 2, "n": "Callback", "t": 16, "rt": Function, "s": { "a": 2, "n": "set_Callback", "t": 8, "p": [Function], "rt": $n[0].Void, "fs": "Callback" }, "fn": "Callback" }, { "a": 2, "n": "CallbackID", "t": 16, "rt": $n[0].String, "s": { "a": 2, "n": "set_CallbackID", "t": 8, "p": [$n[0].String], "rt": $n[0].Void, "fs": "CallbackID" }, "fn": "CallbackID" }, { "ab": true, "a": 4, "n": "DialogTitle", "t": 16, "rt": $n[0].String, "g": { "ab": true, "a": 4, "n": "get_DialogTitle", "t": 8, "rt": $n[0].String, "fg": "DialogTitle" }, "fn": "DialogTitle" }, { "a": 1, "backing": true, "n": "<DialogTitle>k__BackingField", "t": 4, "rt": $n[0].String, "sn": "DialogTitle" }] }; }, $n);
    /*Facebook.Unity.Editor.EditorFacebookMockDialog end.*/

    /*Facebook.Unity.Editor.EditorWrapper start.*/
    $m("Facebook.Unity.Editor.EditorWrapper", function() { return { "att": 1048576, "a": 4, "m": [{ "a": 2, "n": ".ctor", "t": 1, "p": [$n[8].IFacebookCallbackHandler], "pi": [{ "n": "callbackHandler", "pt": $n[8].IFacebookCallbackHandler, "ps": 0 }], "sn": "ctor" }, { "a": 2, "n": "Init", "t": 8, "sn": "Init", "rt": $n[0].Void }, { "a": 2, "n": "ShowAppRequestMockDialog", "t": 8, "pi": [{ "n": "callback", "pt": Function, "ps": 0 }, { "n": "callbackId", "pt": $n[0].String, "ps": 1 }], "sn": "ShowAppRequestMockDialog", "rt": $n[0].Void, "p": [Function, $n[0].String] }, { "a": 2, "n": "ShowGameGroupCreateMockDialog", "t": 8, "pi": [{ "n": "callback", "pt": Function, "ps": 0 }, { "n": "callbackId", "pt": $n[0].String, "ps": 1 }], "sn": "ShowGameGroupCreateMockDialog", "rt": $n[0].Void, "p": [Function, $n[0].String] }, { "a": 2, "n": "ShowGameGroupJoinMockDialog", "t": 8, "pi": [{ "n": "callback", "pt": Function, "ps": 0 }, { "n": "callbackId", "pt": $n[0].String, "ps": 1 }], "sn": "ShowGameGroupJoinMockDialog", "rt": $n[0].Void, "p": [Function, $n[0].String] }, { "a": 2, "n": "ShowLoginMockDialog", "t": 8, "pi": [{ "n": "callback", "pt": Function, "ps": 0 }, { "n": "callbackId", "pt": $n[0].String, "ps": 1 }, { "n": "permsisions", "pt": $n[0].String, "ps": 2 }], "sn": "ShowLoginMockDialog", "rt": $n[0].Void, "p": [Function, $n[0].String, $n[0].String] }, { "a": 2, "n": "ShowMockFriendFinderDialog", "t": 8, "pi": [{ "n": "callback", "pt": Function, "ps": 0 }, { "n": "subTitle", "pt": $n[0].String, "ps": 1 }, { "n": "callbackId", "pt": $n[0].String, "ps": 2 }], "sn": "ShowMockFriendFinderDialog", "rt": $n[0].Void, "p": [Function, $n[0].String, $n[0].String] }, { "a": 2, "n": "ShowMockShareDialog", "t": 8, "pi": [{ "n": "callback", "pt": Function, "ps": 0 }, { "n": "subTitle", "pt": $n[0].String, "ps": 1 }, { "n": "callbackId", "pt": $n[0].String, "ps": 2 }], "sn": "ShowMockShareDialog", "rt": $n[0].Void, "p": [Function, $n[0].String, $n[0].String] }, { "a": 2, "n": "ShowPayMockDialog", "t": 8, "pi": [{ "n": "callback", "pt": Function, "ps": 0 }, { "n": "callbackId", "pt": $n[0].String, "ps": 1 }], "sn": "ShowPayMockDialog", "rt": $n[0].Void, "p": [Function, $n[0].String] }] }; }, $n);
    /*Facebook.Unity.Editor.EditorWrapper end.*/

    /*Facebook.Unity.Editor.IEditorWrapper start.*/
    $m("Facebook.Unity.Editor.IEditorWrapper", function() { return { "att": 160, "a": 4, "m": [{ "ab": true, "a": 2, "n": "Init", "t": 8, "sn": "Facebook$Unity$Editor$IEditorWrapper$Init", "rt": $n[0].Void }, { "ab": true, "a": 2, "n": "ShowAppRequestMockDialog", "t": 8, "pi": [{ "n": "callback", "pt": Function, "ps": 0 }, { "n": "callbackId", "pt": $n[0].String, "ps": 1 }], "sn": "Facebook$Unity$Editor$IEditorWrapper$ShowAppRequestMockDialog", "rt": $n[0].Void, "p": [Function, $n[0].String] }, { "ab": true, "a": 2, "n": "ShowGameGroupCreateMockDialog", "t": 8, "pi": [{ "n": "callback", "pt": Function, "ps": 0 }, { "n": "callbackId", "pt": $n[0].String, "ps": 1 }], "sn": "Facebook$Unity$Editor$IEditorWrapper$ShowGameGroupCreateMockDialog", "rt": $n[0].Void, "p": [Function, $n[0].String] }, { "ab": true, "a": 2, "n": "ShowGameGroupJoinMockDialog", "t": 8, "pi": [{ "n": "callback", "pt": Function, "ps": 0 }, { "n": "callbackId", "pt": $n[0].String, "ps": 1 }], "sn": "Facebook$Unity$Editor$IEditorWrapper$ShowGameGroupJoinMockDialog", "rt": $n[0].Void, "p": [Function, $n[0].String] }, { "ab": true, "a": 2, "n": "ShowLoginMockDialog", "t": 8, "pi": [{ "n": "callback", "pt": Function, "ps": 0 }, { "n": "callbackId", "pt": $n[0].String, "ps": 1 }, { "n": "permissions", "pt": $n[0].String, "ps": 2 }], "sn": "Facebook$Unity$Editor$IEditorWrapper$ShowLoginMockDialog", "rt": $n[0].Void, "p": [Function, $n[0].String, $n[0].String] }, { "ab": true, "a": 2, "n": "ShowMockFriendFinderDialog", "t": 8, "pi": [{ "n": "callback", "pt": Function, "ps": 0 }, { "n": "subTitle", "pt": $n[0].String, "ps": 1 }, { "n": "callbackId", "pt": $n[0].String, "ps": 2 }], "sn": "Facebook$Unity$Editor$IEditorWrapper$ShowMockFriendFinderDialog", "rt": $n[0].Void, "p": [Function, $n[0].String, $n[0].String] }, { "ab": true, "a": 2, "n": "ShowMockShareDialog", "t": 8, "pi": [{ "n": "callback", "pt": Function, "ps": 0 }, { "n": "subTitle", "pt": $n[0].String, "ps": 1 }, { "n": "callbackId", "pt": $n[0].String, "ps": 2 }], "sn": "Facebook$Unity$Editor$IEditorWrapper$ShowMockShareDialog", "rt": $n[0].Void, "p": [Function, $n[0].String, $n[0].String] }, { "ab": true, "a": 2, "n": "ShowPayMockDialog", "t": 8, "pi": [{ "n": "callback", "pt": Function, "ps": 0 }, { "n": "callbackId", "pt": $n[0].String, "ps": 1 }], "sn": "Facebook$Unity$Editor$IEditorWrapper$ShowPayMockDialog", "rt": $n[0].Void, "p": [Function, $n[0].String] }] }; }, $n);
    /*Facebook.Unity.Editor.IEditorWrapper end.*/

    /*Facebook.Unity.Editor.Dialogs.EmptyMockDialog start.*/
    $m("Facebook.Unity.Editor.Dialogs.EmptyMockDialog", function() { return { "att": 1048576, "a": 4, "m": [{ "a": 2, "isSynthetic": true, "n": ".ctor", "t": 1, "sn": "ctor" }, { "ov": true, "a": 3, "n": "DoGui", "t": 8, "sn": "DoGui", "rt": $n[0].Void }, { "ov": true, "a": 3, "n": "SendSuccessResult", "t": 8, "sn": "SendSuccessResult", "rt": $n[0].Void }, { "ov": true, "a": 4, "n": "DialogTitle", "t": 16, "rt": $n[0].String, "g": { "ov": true, "a": 4, "n": "get_DialogTitle", "t": 8, "rt": $n[0].String, "fg": "DialogTitle" }, "fn": "DialogTitle" }, { "a": 2, "n": "EmptyDialogTitle", "t": 16, "rt": $n[0].String, "g": { "a": 2, "n": "get_EmptyDialogTitle", "t": 8, "rt": $n[0].String, "fg": "EmptyDialogTitle" }, "s": { "a": 2, "n": "set_EmptyDialogTitle", "t": 8, "p": [$n[0].String], "rt": $n[0].Void, "fs": "EmptyDialogTitle" }, "fn": "EmptyDialogTitle" }, { "a": 1, "backing": true, "n": "<EmptyDialogTitle>k__BackingField", "t": 4, "rt": $n[0].String, "sn": "EmptyDialogTitle" }] }; }, $n);
    /*Facebook.Unity.Editor.Dialogs.EmptyMockDialog end.*/

    /*Facebook.Unity.Editor.Dialogs.MockLoginDialog start.*/
    $m("Facebook.Unity.Editor.Dialogs.MockLoginDialog", function() { return { "att": 1048576, "a": 4, "m": [{ "a": 2, "isSynthetic": true, "n": ".ctor", "t": 1, "sn": "ctor" }, { "ov": true, "a": 3, "n": "DoGui", "t": 8, "sn": "DoGui", "rt": $n[0].Void }, { "ov": true, "a": 3, "n": "SendSuccessResult", "t": 8, "sn": "SendSuccessResult", "rt": $n[0].Void }, { "ov": true, "a": 4, "n": "DialogTitle", "t": 16, "rt": $n[0].String, "g": { "ov": true, "a": 4, "n": "get_DialogTitle", "t": 8, "rt": $n[0].String, "fg": "DialogTitle" }, "fn": "DialogTitle" }] }; }, $n);
    /*Facebook.Unity.Editor.Dialogs.MockLoginDialog end.*/

    /*Facebook.Unity.Editor.Dialogs.MockShareDialog start.*/
    $m("Facebook.Unity.Editor.Dialogs.MockShareDialog", function() { return { "att": 1048576, "a": 4, "m": [{ "a": 2, "isSynthetic": true, "n": ".ctor", "t": 1, "sn": "ctor" }, { "ov": true, "a": 3, "n": "DoGui", "t": 8, "sn": "DoGui", "rt": $n[0].Void }, { "ov": true, "a": 3, "n": "SendCancelResult", "t": 8, "sn": "SendCancelResult", "rt": $n[0].Void }, { "ov": true, "a": 3, "n": "SendSuccessResult", "t": 8, "sn": "SendSuccessResult", "rt": $n[0].Void }, { "ov": true, "a": 4, "n": "DialogTitle", "t": 16, "rt": $n[0].String, "g": { "ov": true, "a": 4, "n": "get_DialogTitle", "t": 8, "rt": $n[0].String, "fg": "DialogTitle" }, "fn": "DialogTitle" }, { "a": 2, "n": "SubTitle", "t": 16, "rt": $n[0].String, "s": { "a": 2, "n": "set_SubTitle", "t": 8, "p": [$n[0].String], "rt": $n[0].Void, "fs": "SubTitle" }, "fn": "SubTitle" }] }; }, $n);
    /*Facebook.Unity.Editor.Dialogs.MockShareDialog end.*/

    /*Facebook.Unity.Canvas.CanvasFacebook start.*/
    $m("Facebook.Unity.Canvas.CanvasFacebook", function() { return { "att": 1048576, "a": 4, "m": [{ "a": 2, "n": ".ctor", "t": 1, "sn": "ctor" }, { "a": 2, "n": ".ctor", "t": 1, "p": [$n[15].ICanvasJSWrapper, $n[8].CallbackManager], "pi": [{ "n": "canvasJSWrapper", "pt": $n[15].ICanvasJSWrapper, "ps": 0 }, { "n": "callbackManager", "pt": $n[8].CallbackManager, "ps": 1 }], "sn": "$ctor1" }, { "ov": true, "a": 2, "n": "ActivateApp", "t": 8, "pi": [{ "n": "appId", "pt": $n[0].String, "ps": 0 }], "sn": "ActivateApp", "rt": $n[0].Void, "p": [$n[0].String] }, { "ov": true, "a": 2, "n": "AppEventsLogEvent", "t": 8, "pi": [{ "n": "logEvent", "pt": $n[0].String, "ps": 0 }, { "n": "valueToSum", "pt": $n[0].Nullable$1(System.Single), "ps": 1 }, { "n": "parameters", "pt": $n[2].Dictionary$2(System.String, System.Object), "ps": 2 }], "sn": "AppEventsLogEvent", "rt": $n[0].Void, "p": [$n[0].String, $n[0].Nullable$1(System.Single), $n[2].Dictionary$2(System.String, System.Object)] }, { "ov": true, "a": 2, "n": "AppEventsLogPurchase", "t": 8, "pi": [{ "n": "purchaseAmount", "pt": $n[0].Single, "ps": 0 }, { "n": "currency", "pt": $n[0].String, "ps": 1 }, { "n": "parameters", "pt": $n[2].Dictionary$2(System.String, System.Object), "ps": 2 }], "sn": "AppEventsLogPurchase", "rt": $n[0].Void, "p": [$n[0].Single, $n[0].String, $n[2].Dictionary$2(System.String, System.Object)] }, { "ov": true, "a": 2, "n": "AppRequest", "t": 8, "pi": [{ "n": "message", "pt": $n[0].String, "ps": 0 }, { "n": "actionType", "pt": $n[0].Nullable$1(Facebook.Unity.OGActionType), "ps": 1 }, { "n": "objectId", "pt": $n[0].String, "ps": 2 }, { "n": "to", "pt": $n[2].IEnumerable$1(System.String), "ps": 3 }, { "n": "filters", "pt": $n[2].IEnumerable$1(System.Object), "ps": 4 }, { "n": "excludeIds", "pt": $n[2].IEnumerable$1(System.String), "ps": 5 }, { "n": "maxRecipients", "pt": $n[0].Nullable$1(System.Int32), "ps": 6 }, { "n": "data", "pt": $n[0].String, "ps": 7 }, { "n": "title", "pt": $n[0].String, "ps": 8 }, { "n": "callback", "pt": Function, "ps": 9 }], "sn": "AppRequest$1", "rt": $n[0].Void, "p": [$n[0].String, $n[0].Nullable$1(Facebook.Unity.OGActionType), $n[0].String, $n[2].IEnumerable$1(System.String), $n[2].IEnumerable$1(System.Object), $n[2].IEnumerable$1(System.String), $n[0].Nullable$1(System.Int32), $n[0].String, $n[0].String, Function] }, { "ov": true, "a": 2, "n": "FeedShare", "t": 8, "pi": [{ "n": "toId", "pt": $n[0].String, "ps": 0 }, { "n": "link", "pt": $n[0].Uri, "ps": 1 }, { "n": "linkName", "pt": $n[0].String, "ps": 2 }, { "n": "linkCaption", "pt": $n[0].String, "ps": 3 }, { "n": "linkDescription", "pt": $n[0].String, "ps": 4 }, { "n": "picture", "pt": $n[0].Uri, "ps": 5 }, { "n": "mediaSource", "pt": $n[0].String, "ps": 6 }, { "n": "callback", "pt": Function, "ps": 7 }], "sn": "FeedShare", "rt": $n[0].Void, "p": [$n[0].String, $n[0].Uri, $n[0].String, $n[0].String, $n[0].String, $n[0].Uri, $n[0].String, Function] }, { "ov": true, "a": 2, "n": "GetAppLink", "t": 8, "pi": [{ "n": "callback", "pt": Function, "ps": 0 }], "sn": "GetAppLink", "rt": $n[0].Void, "p": [Function] }, { "a": 2, "n": "Init", "t": 8, "pi": [{ "n": "appId", "pt": $n[0].String, "ps": 0 }, { "n": "cookie", "pt": $n[0].Boolean, "ps": 1 }, { "n": "logging", "pt": $n[0].Boolean, "ps": 2 }, { "n": "status", "pt": $n[0].Boolean, "ps": 3 }, { "n": "xfbml", "pt": $n[0].Boolean, "ps": 4 }, { "n": "channelUrl", "pt": $n[0].String, "ps": 5 }, { "n": "authResponse", "pt": $n[0].String, "ps": 6 }, { "n": "frictionlessRequests", "pt": $n[0].Boolean, "ps": 7 }, { "n": "javascriptSDKLocale", "pt": $n[0].String, "ps": 8 }, { "n": "loadDebugJSSDK", "pt": $n[0].Boolean, "ps": 9 }, { "n": "hideUnityDelegate", "pt": Function, "ps": 10 }, { "n": "onInitComplete", "pt": Function, "ps": 11 }], "sn": "Init$1", "rt": $n[0].Void, "p": [$n[0].String, $n[0].Boolean, $n[0].Boolean, $n[0].Boolean, $n[0].Boolean, $n[0].String, $n[0].String, $n[0].Boolean, $n[0].String, $n[0].Boolean, Function, Function] }, { "ov": true, "a": 2, "n": "LogInWithPublishPermissions", "t": 8, "pi": [{ "n": "permissions", "pt": $n[2].IEnumerable$1(System.String), "ps": 0 }, { "n": "callback", "pt": Function, "ps": 1 }], "sn": "LogInWithPublishPermissions", "rt": $n[0].Void, "p": [$n[2].IEnumerable$1(System.String), Function] }, { "ov": true, "a": 2, "n": "LogInWithReadPermissions", "t": 8, "pi": [{ "n": "permissions", "pt": $n[2].IEnumerable$1(System.String), "ps": 0 }, { "n": "callback", "pt": Function, "ps": 1 }], "sn": "LogInWithReadPermissions", "rt": $n[0].Void, "p": [$n[2].IEnumerable$1(System.String), Function] }, { "ov": true, "a": 2, "n": "LogOut", "t": 8, "sn": "LogOut", "rt": $n[0].Void }, { "ov": true, "a": 2, "n": "OnAppRequestsComplete", "t": 8, "pi": [{ "n": "resultContainer", "pt": $n[8].ResultContainer, "ps": 0 }], "sn": "OnAppRequestsComplete", "rt": $n[0].Void, "p": [$n[8].ResultContainer] }, { "a": 2, "n": "OnFacebookAuthResponseChange", "t": 8, "pi": [{ "n": "resultContainer", "pt": $n[8].ResultContainer, "ps": 0 }], "sn": "OnFacebookAuthResponseChange", "rt": $n[0].Void, "p": [$n[8].ResultContainer] }, { "a": 2, "n": "OnFacebookAuthResponseChange", "t": 8, "pi": [{ "n": "responseJsonData", "pt": $n[0].String, "ps": 0 }], "sn": "OnFacebookAuthResponseChange$1", "rt": $n[0].Void, "p": [$n[0].String] }, { "ov": true, "a": 2, "n": "OnGetAppLinkComplete", "t": 8, "pi": [{ "n": "message", "pt": $n[8].ResultContainer, "ps": 0 }], "sn": "OnGetAppLinkComplete", "rt": $n[0].Void, "p": [$n[8].ResultContainer] }, { "a": 2, "n": "OnHideUnity", "t": 8, "pi": [{ "n": "isGameShown", "pt": $n[0].Boolean, "ps": 0 }], "sn": "OnHideUnity", "rt": $n[0].Void, "p": [$n[0].Boolean] }, { "ov": true, "a": 2, "n": "OnLoginComplete", "t": 8, "pi": [{ "n": "result", "pt": $n[8].ResultContainer, "ps": 0 }], "sn": "OnLoginComplete", "rt": $n[0].Void, "p": [$n[8].ResultContainer] }, { "a": 2, "n": "OnPayComplete", "t": 8, "pi": [{ "n": "resultContainer", "pt": $n[8].ResultContainer, "ps": 0 }], "sn": "OnPayComplete", "rt": $n[0].Void, "p": [$n[8].ResultContainer] }, { "a": 2, "n": "OnPayComplete", "t": 8, "pi": [{ "n": "responseJsonData", "pt": $n[0].String, "ps": 0 }], "sn": "OnPayComplete$1", "rt": $n[0].Void, "p": [$n[0].String] }, { "ov": true, "a": 2, "n": "OnShareLinkComplete", "t": 8, "pi": [{ "n": "resultContainer", "pt": $n[8].ResultContainer, "ps": 0 }], "sn": "OnShareLinkComplete", "rt": $n[0].Void, "p": [$n[8].ResultContainer] }, { "a": 2, "n": "OnUrlResponse", "t": 8, "pi": [{ "n": "url", "pt": $n[0].String, "ps": 0 }], "sn": "OnUrlResponse", "rt": $n[0].Void, "p": [$n[0].String] }, { "a": 2, "n": "Pay", "t": 8, "pi": [{ "n": "product", "pt": $n[0].String, "ps": 0 }, { "n": "action", "pt": $n[0].String, "ps": 1 }, { "n": "quantity", "pt": $n[0].Int32, "ps": 2 }, { "n": "quantityMin", "pt": $n[0].Nullable$1(System.Int32), "ps": 3 }, { "n": "quantityMax", "pt": $n[0].Nullable$1(System.Int32), "ps": 4 }, { "n": "requestId", "pt": $n[0].String, "ps": 5 }, { "n": "pricepointId", "pt": $n[0].String, "ps": 6 }, { "n": "testCurrency", "pt": $n[0].String, "ps": 7 }, { "n": "callback", "pt": Function, "ps": 8 }], "sn": "Pay", "rt": $n[0].Void, "p": [$n[0].String, $n[0].String, $n[0].Int32, $n[0].Nullable$1(System.Int32), $n[0].Nullable$1(System.Int32), $n[0].String, $n[0].String, $n[0].String, Function] }, { "a": 2, "n": "PayWithProductId", "t": 8, "pi": [{ "n": "productId", "pt": $n[0].String, "ps": 0 }, { "n": "action", "pt": $n[0].String, "ps": 1 }, { "n": "developerPayload", "pt": $n[0].String, "ps": 2 }, { "n": "testCurrency", "pt": $n[0].String, "ps": 3 }, { "n": "callback", "pt": Function, "ps": 4 }], "sn": "PayWithProductId$1", "rt": $n[0].Void, "p": [$n[0].String, $n[0].String, $n[0].String, $n[0].String, Function] }, { "a": 2, "n": "PayWithProductId", "t": 8, "pi": [{ "n": "productId", "pt": $n[0].String, "ps": 0 }, { "n": "action", "pt": $n[0].String, "ps": 1 }, { "n": "quantity", "pt": $n[0].Int32, "ps": 2 }, { "n": "quantityMin", "pt": $n[0].Nullable$1(System.Int32), "ps": 3 }, { "n": "quantityMax", "pt": $n[0].Nullable$1(System.Int32), "ps": 4 }, { "n": "requestId", "pt": $n[0].String, "ps": 5 }, { "n": "pricepointId", "pt": $n[0].String, "ps": 6 }, { "n": "testCurrency", "pt": $n[0].String, "ps": 7 }, { "n": "callback", "pt": Function, "ps": 8 }], "sn": "PayWithProductId", "rt": $n[0].Void, "p": [$n[0].String, $n[0].String, $n[0].Int32, $n[0].Nullable$1(System.Int32), $n[0].Nullable$1(System.Int32), $n[0].String, $n[0].String, $n[0].String, Function] }, { "ov": true, "a": 2, "n": "ShareLink", "t": 8, "pi": [{ "n": "contentURL", "pt": $n[0].Uri, "ps": 0 }, { "n": "contentTitle", "pt": $n[0].String, "ps": 1 }, { "n": "contentDescription", "pt": $n[0].String, "ps": 2 }, { "n": "photoURL", "pt": $n[0].Uri, "ps": 3 }, { "n": "callback", "pt": Function, "ps": 4 }], "sn": "ShareLink", "rt": $n[0].Void, "p": [$n[0].Uri, $n[0].String, $n[0].String, $n[0].Uri, Function] }, { "ov": true, "a": 2, "n": "LimitEventUsage", "t": 16, "rt": $n[0].Boolean, "g": { "ov": true, "a": 2, "n": "get_LimitEventUsage", "t": 8, "rt": $n[0].Boolean, "fg": "LimitEventUsage", "box": function($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString); } }, "s": { "ov": true, "a": 2, "n": "set_LimitEventUsage", "t": 8, "p": [$n[0].Boolean], "rt": $n[0].Void, "fs": "LimitEventUsage" }, "fn": "LimitEventUsage" }, { "ov": true, "a": 2, "n": "SDKName", "t": 16, "rt": $n[0].String, "g": { "ov": true, "a": 2, "n": "get_SDKName", "t": 8, "rt": $n[0].String, "fg": "SDKName" }, "fn": "SDKName" }, { "ov": true, "a": 2, "n": "SDKUserAgent", "t": 16, "rt": $n[0].String, "g": { "ov": true, "a": 2, "n": "get_SDKUserAgent", "t": 8, "rt": $n[0].String, "fg": "SDKUserAgent" }, "fn": "SDKUserAgent" }, { "ov": true, "a": 2, "n": "SDKVersion", "t": 16, "rt": $n[0].String, "g": { "ov": true, "a": 2, "n": "get_SDKVersion", "t": 8, "rt": $n[0].String, "fg": "SDKVersion" }, "fn": "SDKVersion" }, { "a": 4, "n": "CancelledResponse", "is": true, "t": 4, "rt": $n[0].String, "sn": "CancelledResponse" }, { "a": 4, "n": "FacebookConnectURL", "is": true, "t": 4, "rt": $n[0].String, "sn": "FacebookConnectURL" }, { "a": 4, "n": "MethodAppRequests", "is": true, "t": 4, "rt": $n[0].String, "sn": "MethodAppRequests" }, { "a": 4, "n": "MethodFeed", "is": true, "t": 4, "rt": $n[0].String, "sn": "MethodFeed" }, { "a": 4, "n": "MethodPay", "is": true, "t": 4, "rt": $n[0].String, "sn": "MethodPay" }, { "a": 1, "backing": true, "n": "<LimitEventUsage>k__BackingField", "t": 4, "rt": $n[0].Boolean, "sn": "LimitEventUsage", "box": function($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString); } }] }; }, $n);
    /*Facebook.Unity.Canvas.CanvasFacebook end.*/

    /*Facebook.Unity.Canvas.CanvasFacebookGameObject start.*/
    $m("Facebook.Unity.Canvas.CanvasFacebookGameObject", function() { return { "att": 1048576, "a": 4, "m": [{ "a": 2, "isSynthetic": true, "n": ".ctor", "t": 1, "sn": "ctor" }, { "ov": true, "a": 3, "n": "OnAwake", "t": 8, "sn": "OnAwake", "rt": $n[0].Void }, { "a": 2, "n": "OnFacebookAuthResponseChange", "t": 8, "pi": [{ "n": "message", "pt": $n[0].String, "ps": 0 }], "sn": "OnFacebookAuthResponseChange", "rt": $n[0].Void, "p": [$n[0].String] }, { "a": 2, "n": "OnHideUnity", "t": 8, "pi": [{ "n": "hide", "pt": $n[0].Boolean, "ps": 0 }], "sn": "OnHideUnity", "rt": $n[0].Void, "p": [$n[0].Boolean] }, { "a": 2, "n": "OnPayComplete", "t": 8, "pi": [{ "n": "result", "pt": $n[0].String, "ps": 0 }], "sn": "OnPayComplete", "rt": $n[0].Void, "p": [$n[0].String] }, { "a": 2, "n": "OnUrlResponse", "t": 8, "pi": [{ "n": "message", "pt": $n[0].String, "ps": 0 }], "sn": "OnUrlResponse", "rt": $n[0].Void, "p": [$n[0].String] }, { "a": 4, "n": "CanvasFacebookImpl", "t": 16, "rt": $n[15].ICanvasFacebookImplementation, "g": { "a": 4, "n": "get_CanvasFacebookImpl", "t": 8, "rt": $n[15].ICanvasFacebookImplementation, "fg": "CanvasFacebookImpl" }, "fn": "CanvasFacebookImpl" }] }; }, $n);
    /*Facebook.Unity.Canvas.CanvasFacebookGameObject end.*/

    /*Facebook.Unity.Canvas.CanvasFacebookLoader start.*/
    $m("Facebook.Unity.Canvas.CanvasFacebookLoader", function() { return { "att": 1048576, "a": 4, "m": [{ "a": 2, "isSynthetic": true, "n": ".ctor", "t": 1, "sn": "ctor" }, { "ov": true, "a": 4, "n": "FBGameObject", "t": 16, "rt": $n[8].FacebookGameObject, "g": { "ov": true, "a": 4, "n": "get_FBGameObject", "t": 8, "rt": $n[8].FacebookGameObject, "fg": "FBGameObject" }, "fn": "FBGameObject" }] }; }, $n);
    /*Facebook.Unity.Canvas.CanvasFacebookLoader end.*/

    /*Facebook.Unity.Canvas.CanvasJSWrapper start.*/
    $m("Facebook.Unity.Canvas.CanvasJSWrapper", function() { return { "att": 1048576, "a": 4, "m": [{ "a": 2, "isSynthetic": true, "n": ".ctor", "t": 1, "sn": "ctor" }, { "a": 2, "n": "ActivateApp", "t": 8, "sn": "ActivateApp", "rt": $n[0].Void }, { "a": 2, "n": "DisableFullScreen", "t": 8, "sn": "DisableFullScreen", "rt": $n[0].Void }, { "a": 2, "n": "GetSDKVersion", "t": 8, "sn": "GetSDKVersion", "rt": $n[0].String }, { "a": 2, "n": "Init", "t": 8, "pi": [{ "n": "connectFacebookUrl", "pt": $n[0].String, "ps": 0 }, { "n": "locale", "pt": $n[0].String, "ps": 1 }, { "n": "debug", "pt": $n[0].Int32, "ps": 2 }, { "n": "initParams", "pt": $n[0].String, "ps": 3 }, { "n": "status", "pt": $n[0].Int32, "ps": 4 }], "sn": "Init", "rt": $n[0].Void, "p": [$n[0].String, $n[0].String, $n[0].Int32, $n[0].String, $n[0].Int32] }, { "a": 2, "n": "InitScreenPosition", "t": 8, "sn": "InitScreenPosition", "rt": $n[0].Void }, { "a": 2, "n": "LogAppEvent", "t": 8, "pi": [{ "n": "eventName", "pt": $n[0].String, "ps": 0 }, { "n": "valueToSum", "pt": $n[0].Nullable$1(System.Single), "ps": 1 }, { "n": "parameters", "pt": $n[0].String, "ps": 2 }], "sn": "LogAppEvent", "rt": $n[0].Void, "p": [$n[0].String, $n[0].Nullable$1(System.Single), $n[0].String] }, { "a": 2, "n": "LogPurchase", "t": 8, "pi": [{ "n": "purchaseAmount", "pt": $n[0].Single, "ps": 0 }, { "n": "currency", "pt": $n[0].String, "ps": 1 }, { "n": "parameters", "pt": $n[0].String, "ps": 2 }], "sn": "LogPurchase", "rt": $n[0].Void, "p": [$n[0].Single, $n[0].String, $n[0].String] }, { "a": 2, "n": "Login", "t": 8, "pi": [{ "n": "scope", "pt": $n[2].IEnumerable$1(System.String), "ps": 0 }, { "n": "callback_id", "pt": $n[0].String, "ps": 1 }], "sn": "Login", "rt": $n[0].Void, "p": [$n[2].IEnumerable$1(System.String), $n[0].String] }, { "a": 2, "n": "Logout", "t": 8, "sn": "Logout", "rt": $n[0].Void }, { "a": 2, "n": "Ui", "t": 8, "pi": [{ "n": "x", "pt": $n[0].String, "ps": 0 }, { "n": "uid", "pt": $n[0].String, "ps": 1 }, { "n": "callbackMethodName", "pt": $n[0].String, "ps": 2 }], "sn": "Ui", "rt": $n[0].Void, "p": [$n[0].String, $n[0].String, $n[0].String] }] }; }, $n);
    /*Facebook.Unity.Canvas.CanvasJSWrapper end.*/

    /*Facebook.Unity.Canvas.ICanvasFacebook start.*/
    $m("Facebook.Unity.Canvas.ICanvasFacebook", function() { return { "att": 160, "a": 4 }; }, $n);
    /*Facebook.Unity.Canvas.ICanvasFacebook end.*/

    /*Facebook.Unity.Canvas.ICanvasFacebookCallbackHandler start.*/
    $m("Facebook.Unity.Canvas.ICanvasFacebookCallbackHandler", function() { return { "att": 160, "a": 4, "m": [{ "ab": true, "a": 2, "n": "OnFacebookAuthResponseChange", "t": 8, "pi": [{ "n": "message", "pt": $n[0].String, "ps": 0 }], "sn": "Facebook$Unity$Canvas$ICanvasFacebookCallbackHandler$OnFacebookAuthResponseChange", "rt": $n[0].Void, "p": [$n[0].String] }, { "ab": true, "a": 2, "n": "OnHideUnity", "t": 8, "pi": [{ "n": "hide", "pt": $n[0].Boolean, "ps": 0 }], "sn": "Facebook$Unity$Canvas$ICanvasFacebookCallbackHandler$OnHideUnity", "rt": $n[0].Void, "p": [$n[0].Boolean] }, { "ab": true, "a": 2, "n": "OnPayComplete", "t": 8, "pi": [{ "n": "message", "pt": $n[0].String, "ps": 0 }], "sn": "Facebook$Unity$Canvas$ICanvasFacebookCallbackHandler$OnPayComplete", "rt": $n[0].Void, "p": [$n[0].String] }, { "ab": true, "a": 2, "n": "OnUrlResponse", "t": 8, "pi": [{ "n": "message", "pt": $n[0].String, "ps": 0 }], "sn": "Facebook$Unity$Canvas$ICanvasFacebookCallbackHandler$OnUrlResponse", "rt": $n[0].Void, "p": [$n[0].String] }] }; }, $n);
    /*Facebook.Unity.Canvas.ICanvasFacebookCallbackHandler end.*/

    /*Facebook.Unity.Canvas.ICanvasFacebookImplementation start.*/
    $m("Facebook.Unity.Canvas.ICanvasFacebookImplementation", function() { return { "att": 160, "a": 4 }; }, $n);
    /*Facebook.Unity.Canvas.ICanvasFacebookImplementation end.*/

    /*Facebook.Unity.Canvas.ICanvasFacebookResultHandler start.*/
    $m("Facebook.Unity.Canvas.ICanvasFacebookResultHandler", function() { return { "att": 160, "a": 4, "m": [{ "ab": true, "a": 2, "n": "OnFacebookAuthResponseChange", "t": 8, "pi": [{ "n": "resultContainer", "pt": $n[8].ResultContainer, "ps": 0 }], "sn": "Facebook$Unity$Canvas$ICanvasFacebookResultHandler$OnFacebookAuthResponseChange", "rt": $n[0].Void, "p": [$n[8].ResultContainer] }, { "ab": true, "a": 2, "n": "OnHideUnity", "t": 8, "pi": [{ "n": "hide", "pt": $n[0].Boolean, "ps": 0 }], "sn": "Facebook$Unity$Canvas$ICanvasFacebookResultHandler$OnHideUnity", "rt": $n[0].Void, "p": [$n[0].Boolean] }, { "ab": true, "a": 2, "n": "OnPayComplete", "t": 8, "pi": [{ "n": "resultContainer", "pt": $n[8].ResultContainer, "ps": 0 }], "sn": "Facebook$Unity$Canvas$ICanvasFacebookResultHandler$OnPayComplete", "rt": $n[0].Void, "p": [$n[8].ResultContainer] }, { "ab": true, "a": 2, "n": "OnUrlResponse", "t": 8, "pi": [{ "n": "message", "pt": $n[0].String, "ps": 0 }], "sn": "Facebook$Unity$Canvas$ICanvasFacebookResultHandler$OnUrlResponse", "rt": $n[0].Void, "p": [$n[0].String] }] }; }, $n);
    /*Facebook.Unity.Canvas.ICanvasFacebookResultHandler end.*/

    /*Facebook.Unity.Canvas.ICanvasJSWrapper start.*/
    $m("Facebook.Unity.Canvas.ICanvasJSWrapper", function() { return { "att": 160, "a": 4, "m": [{ "ab": true, "a": 2, "n": "ActivateApp", "t": 8, "sn": "Facebook$Unity$Canvas$ICanvasJSWrapper$ActivateApp", "rt": $n[0].Void }, { "ab": true, "a": 2, "n": "DisableFullScreen", "t": 8, "sn": "Facebook$Unity$Canvas$ICanvasJSWrapper$DisableFullScreen", "rt": $n[0].Void }, { "ab": true, "a": 2, "n": "GetSDKVersion", "t": 8, "sn": "Facebook$Unity$Canvas$ICanvasJSWrapper$GetSDKVersion", "rt": $n[0].String }, { "ab": true, "a": 2, "n": "Init", "t": 8, "pi": [{ "n": "connectFacebookUrl", "pt": $n[0].String, "ps": 0 }, { "n": "locale", "pt": $n[0].String, "ps": 1 }, { "n": "debug", "pt": $n[0].Int32, "ps": 2 }, { "n": "initParams", "pt": $n[0].String, "ps": 3 }, { "n": "status", "pt": $n[0].Int32, "ps": 4 }], "sn": "Facebook$Unity$Canvas$ICanvasJSWrapper$Init", "rt": $n[0].Void, "p": [$n[0].String, $n[0].String, $n[0].Int32, $n[0].String, $n[0].Int32] }, { "ab": true, "a": 2, "n": "InitScreenPosition", "t": 8, "sn": "Facebook$Unity$Canvas$ICanvasJSWrapper$InitScreenPosition", "rt": $n[0].Void }, { "ab": true, "a": 2, "n": "LogAppEvent", "t": 8, "pi": [{ "n": "eventName", "pt": $n[0].String, "ps": 0 }, { "n": "valueToSum", "pt": $n[0].Nullable$1(System.Single), "ps": 1 }, { "n": "parameters", "pt": $n[0].String, "ps": 2 }], "sn": "Facebook$Unity$Canvas$ICanvasJSWrapper$LogAppEvent", "rt": $n[0].Void, "p": [$n[0].String, $n[0].Nullable$1(System.Single), $n[0].String] }, { "ab": true, "a": 2, "n": "LogPurchase", "t": 8, "pi": [{ "n": "purchaseAmount", "pt": $n[0].Single, "ps": 0 }, { "n": "currency", "pt": $n[0].String, "ps": 1 }, { "n": "parameters", "pt": $n[0].String, "ps": 2 }], "sn": "Facebook$Unity$Canvas$ICanvasJSWrapper$LogPurchase", "rt": $n[0].Void, "p": [$n[0].Single, $n[0].String, $n[0].String] }, { "ab": true, "a": 2, "n": "Login", "t": 8, "pi": [{ "n": "scope", "pt": $n[2].IEnumerable$1(System.String), "ps": 0 }, { "n": "callback_id", "pt": $n[0].String, "ps": 1 }], "sn": "Facebook$Unity$Canvas$ICanvasJSWrapper$Login", "rt": $n[0].Void, "p": [$n[2].IEnumerable$1(System.String), $n[0].String] }, { "ab": true, "a": 2, "n": "Logout", "t": 8, "sn": "Facebook$Unity$Canvas$ICanvasJSWrapper$Logout", "rt": $n[0].Void }, { "ab": true, "a": 2, "n": "Ui", "t": 8, "pi": [{ "n": "x", "pt": $n[0].String, "ps": 0 }, { "n": "uid", "pt": $n[0].String, "ps": 1 }, { "n": "callbackMethodName", "pt": $n[0].String, "ps": 2 }], "sn": "Facebook$Unity$Canvas$ICanvasJSWrapper$Ui", "rt": $n[0].Void, "p": [$n[0].String, $n[0].String, $n[0].String] }] }; }, $n);
    /*Facebook.Unity.Canvas.ICanvasJSWrapper end.*/

    /*Facebook.Unity.Canvas.JsBridge start.*/
    $m("Facebook.Unity.Canvas.JsBridge", function() { return { "att": 1048576, "a": 4, "m": [{ "a": 2, "isSynthetic": true, "n": ".ctor", "t": 1, "sn": "ctor" }, { "a": 2, "n": "OnAppRequestsComplete", "t": 8, "pi": [{ "n": "responseJsonData", "pt": $n[0].String, "ps": 0 }], "sn": "OnAppRequestsComplete", "rt": $n[0].Void, "p": [$n[0].String] }, { "a": 2, "n": "OnFacebookAuthResponseChange", "t": 8, "pi": [{ "n": "responseJsonData", "pt": $n[0].String, "ps": 0 }], "sn": "OnFacebookAuthResponseChange", "rt": $n[0].Void, "p": [$n[0].String] }, { "a": 2, "n": "OnFacebookFocus", "t": 8, "pi": [{ "n": "state", "pt": $n[0].String, "ps": 0 }], "sn": "OnFacebookFocus", "rt": $n[0].Void, "p": [$n[0].String] }, { "a": 2, "n": "OnInitComplete", "t": 8, "pi": [{ "n": "responseJsonData", "pt": $n[0].String, "ps": 0 }], "sn": "OnInitComplete", "rt": $n[0].Void, "p": [$n[0].String] }, { "a": 2, "n": "OnLoginComplete", "t": 8, "pi": [{ "n": "responseJsonData", "pt": $n[0].String, "ps": 0 }], "sn": "OnLoginComplete", "rt": $n[0].Void, "p": [$n[0].String] }, { "a": 2, "n": "OnPayComplete", "t": 8, "pi": [{ "n": "responseJsonData", "pt": $n[0].String, "ps": 0 }], "sn": "OnPayComplete", "rt": $n[0].Void, "p": [$n[0].String] }, { "a": 2, "n": "OnShareLinkComplete", "t": 8, "pi": [{ "n": "responseJsonData", "pt": $n[0].String, "ps": 0 }], "sn": "OnShareLinkComplete", "rt": $n[0].Void, "p": [$n[0].String] }, { "a": 2, "n": "OnUrlResponse", "t": 8, "pi": [{ "n": "url", "pt": $n[0].String, "ps": 0 }], "sn": "OnUrlResponse", "rt": $n[0].Void, "p": [$n[0].String] }, { "a": 2, "n": "Start", "t": 8, "sn": "Start", "rt": $n[0].Void }] }; }, $n);
    /*Facebook.Unity.Canvas.JsBridge end.*/

    /*Facebook.Unity.Android.AndroidWrapper start.*/
    $m("Facebook.Unity.Android.AndroidWrapper", function() { return { "att": 1048576, "a": 4, "m": [{ "a": 2, "isSynthetic": true, "n": ".ctor", "t": 1, "sn": "ctor" }, { "a": 2, "n": "CallStatic", "t": 8, "pi": [{ "n": "methodName", "pt": $n[0].String, "ps": 0 }], "tpc": 1, "tprm": ["T"], "sn": "CallStatic", "rt": System.Object, "p": [$n[0].String] }, { "a": 2, "n": "CallStatic", "t": 8, "pi": [{ "n": "methodName", "pt": $n[0].String, "ps": 0 }, { "n": "args", "pt": $n[0].Array.type(System.Object), "ps": 1 }], "sn": "CallStatic$1", "rt": $n[0].Void, "p": [$n[0].String, $n[0].Array.type(System.Object)] }] }; }, $n);
    /*Facebook.Unity.Android.AndroidWrapper end.*/

    /*xgame.sdk.AdsHelper start.*/
    $m("xgame.sdk.AdsHelper", function() { return { "nested": [Function, $n[16].AdsHelper.AD_State], "att": 1048577, "a": 2, "m": [{ "a": 2, "isSynthetic": true, "n": ".ctor", "t": 1, "sn": "ctor" }, { "a": 1, "n": "Awake", "t": 8, "sn": "Awake", "rt": $n[0].Void }, { "a": 1, "n": "Start", "t": 8, "sn": "Start", "rt": $n[0].Void }, { "a": 2, "n": "isFull4Show", "t": 8, "sn": "isFull4Show", "rt": $n[0].Boolean, "box": function($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString); } }, { "a": 2, "n": "isGift4Show", "t": 8, "sn": "isGift4Show", "rt": $n[0].Boolean, "box": function($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString); } }, { "a": 2, "n": "loadFull4ThisTurn", "t": 8, "pi": [{ "n": "cb", "dv": null, "o": true, "pt": Function, "ps": 0 }], "sn": "loadFull4ThisTurn", "rt": $n[0].Void, "p": [Function] }, { "a": 2, "n": "loadGift4ThisTurn", "t": 8, "pi": [{ "n": "cb", "dv": null, "o": true, "pt": Function, "ps": 0 }], "sn": "loadGift4ThisTurn", "rt": $n[0].Void, "p": [Function] }, { "a": 2, "n": "onFullClose", "t": 8, "sn": "onFullClose", "rt": $n[0].Void }, { "a": 2, "n": "onFullLoadFail", "t": 8, "sn": "onFullLoadFail", "rt": $n[0].Void }, { "a": 2, "n": "onFullLoaded", "t": 8, "sn": "onFullLoaded", "rt": $n[0].Void }, { "a": 2, "n": "onFullShow", "t": 8, "sn": "onFullShow", "rt": $n[0].Void }, { "a": 2, "n": "onFullShowFailed", "t": 8, "sn": "onFullShowFailed", "rt": $n[0].Void }, { "a": 2, "n": "onGiftClose", "t": 8, "sn": "onGiftClose", "rt": $n[0].Void }, { "a": 2, "n": "onGiftLoadFail", "t": 8, "sn": "onGiftLoadFail", "rt": $n[0].Void }, { "a": 2, "n": "onGiftLoaded", "t": 8, "sn": "onGiftLoaded", "rt": $n[0].Void }, { "a": 2, "n": "onGiftShow", "t": 8, "sn": "onGiftShow", "rt": $n[0].Void }, { "a": 2, "n": "onGiftShowFailed", "t": 8, "sn": "onGiftShowFailed", "rt": $n[0].Void }, { "a": 2, "n": "showFull", "t": 8, "pi": [{ "n": "cb", "dv": null, "o": true, "pt": Function, "ps": 0 }], "sn": "showFull", "rt": $n[0].Boolean, "p": [Function], "box": function($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString); } }, { "a": 2, "n": "showGift", "t": 8, "pi": [{ "n": "cb", "dv": null, "o": true, "pt": Function, "ps": 0 }], "sn": "showGift", "rt": $n[0].Boolean, "p": [Function], "box": function($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString); } }, { "a": 2, "n": "Instance", "is": true, "t": 4, "rt": $n[16].AdsHelper, "sn": "Instance" }, { "a": 1, "n": "_cbFullLoad", "t": 4, "rt": Function, "sn": "_cbFullLoad" }, { "a": 1, "n": "_cbFullShow", "t": 4, "rt": Function, "sn": "_cbFullShow" }, { "a": 1, "n": "_cbGiftLoad", "t": 4, "rt": Function, "sn": "_cbGiftLoad" }, { "a": 1, "n": "_cbGiftShow", "t": 4, "rt": Function, "sn": "_cbGiftShow" }, { "a": 2, "n": "_isFullLoaded", "t": 4, "rt": $n[0].Boolean, "sn": "_isFullLoaded", "box": function($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString); } }, { "a": 2, "n": "_isFullLoading", "t": 4, "rt": $n[0].Boolean, "sn": "_isFullLoading", "box": function($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString); } }, { "a": 2, "n": "_isGiftLoaded", "t": 4, "rt": $n[0].Boolean, "sn": "_isGiftLoaded", "box": function($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString); } }, { "a": 2, "n": "_isGiftLoading", "t": 4, "rt": $n[0].Boolean, "sn": "_isGiftLoading", "box": function($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString); } }, { "a": 2, "n": "isFullLoadWhenClose", "t": 4, "rt": $n[0].Boolean, "sn": "isFullLoadWhenClose", "box": function($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString); } }, { "a": 2, "n": "isGiftLoadWhenClose", "t": 4, "rt": $n[0].Boolean, "sn": "isGiftLoadWhenClose", "box": function($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString); } }] }; }, $n);
    /*xgame.sdk.AdsHelper end.*/

    /*xgame.sdk.AdsHelper+AD_State start.*/
    $m("xgame.sdk.AdsHelper.AD_State", function() { return { "td": $n[16].AdsHelper, "att": 258, "a": 2, "m": [{ "a": 2, "isSynthetic": true, "n": ".ctor", "t": 1, "sn": "ctor" }, { "a": 2, "n": "AD_CLOSE", "is": true, "t": 4, "rt": $n[16].AdsHelper.AD_State, "sn": "AD_CLOSE", "box": function($v) { return Bridge.box($v, xgame.sdk.AdsHelper.AD_State, System.Enum.toStringFn(xgame.sdk.AdsHelper.AD_State)); } }, { "a": 2, "n": "AD_LOAD_FAIL", "is": true, "t": 4, "rt": $n[16].AdsHelper.AD_State, "sn": "AD_LOAD_FAIL", "box": function($v) { return Bridge.box($v, xgame.sdk.AdsHelper.AD_State, System.Enum.toStringFn(xgame.sdk.AdsHelper.AD_State)); } }, { "a": 2, "n": "AD_LOAD_OK", "is": true, "t": 4, "rt": $n[16].AdsHelper.AD_State, "sn": "AD_LOAD_OK", "box": function($v) { return Bridge.box($v, xgame.sdk.AdsHelper.AD_State, System.Enum.toStringFn(xgame.sdk.AdsHelper.AD_State)); } }, { "a": 2, "n": "AD_NONE", "is": true, "t": 4, "rt": $n[16].AdsHelper.AD_State, "sn": "AD_NONE", "box": function($v) { return Bridge.box($v, xgame.sdk.AdsHelper.AD_State, System.Enum.toStringFn(xgame.sdk.AdsHelper.AD_State)); } }, { "a": 2, "n": "AD_REWARD_FAIL", "is": true, "t": 4, "rt": $n[16].AdsHelper.AD_State, "sn": "AD_REWARD_FAIL", "box": function($v) { return Bridge.box($v, xgame.sdk.AdsHelper.AD_State, System.Enum.toStringFn(xgame.sdk.AdsHelper.AD_State)); } }, { "a": 2, "n": "AD_REWARD_OK", "is": true, "t": 4, "rt": $n[16].AdsHelper.AD_State, "sn": "AD_REWARD_OK", "box": function($v) { return Bridge.box($v, xgame.sdk.AdsHelper.AD_State, System.Enum.toStringFn(xgame.sdk.AdsHelper.AD_State)); } }, { "a": 2, "n": "AD_SHOW", "is": true, "t": 4, "rt": $n[16].AdsHelper.AD_State, "sn": "AD_SHOW", "box": function($v) { return Bridge.box($v, xgame.sdk.AdsHelper.AD_State, System.Enum.toStringFn(xgame.sdk.AdsHelper.AD_State)); } }, { "a": 2, "n": "AD_SHOW_FAIL", "is": true, "t": 4, "rt": $n[16].AdsHelper.AD_State, "sn": "AD_SHOW_FAIL", "box": function($v) { return Bridge.box($v, xgame.sdk.AdsHelper.AD_State, System.Enum.toStringFn(xgame.sdk.AdsHelper.AD_State)); } }] }; }, $n);
    /*xgame.sdk.AdsHelper+AD_State end.*/

    /*xgame.sdk.GameHelper start.*/
    $m("xgame.sdk.GameHelper", function() { return { "att": 1048577, "a": 2, "m": [{ "a": 2, "isSynthetic": true, "n": ".ctor", "t": 1, "sn": "ctor" }, { "a": 2, "n": "InvitePlayGame", "is": true, "t": 8, "pi": [{ "n": "txtTitle", "pt": $n[0].String, "ps": 0 }, { "n": "txtContent", "pt": $n[0].String, "ps": 1 }], "sn": "InvitePlayGame", "rt": $n[0].Void, "p": [$n[0].String, $n[0].String] }, { "a": 2, "n": "ShareGame", "is": true, "t": 8, "pi": [{ "n": "txtShare", "pt": $n[0].String, "ps": 0 }], "sn": "ShareGame", "rt": $n[0].Void, "p": [$n[0].String] }] }; }, $n);
    /*xgame.sdk.GameHelper end.*/

    /*DG.Tweening.DOTweenModuleAudio start.*/
    $m("DG.Tweening.DOTweenModuleAudio", function() { return { "att": 1048961, "a": 2, "s": true, "m": [{ "a": 2, "n": "DOComplete", "is": true, "t": 8, "pi": [{ "n": "target", "pt": $n[17].AudioMixer, "ps": 0 }, { "n": "withCallbacks", "dv": false, "o": true, "pt": $n[0].Boolean, "ps": 1 }], "sn": "DOComplete", "rt": $n[0].Int32, "p": [$n[17].AudioMixer, $n[0].Boolean], "box": function($v) { return Bridge.box($v, System.Int32); } }, { "a": 2, "n": "DOFade", "is": true, "t": 8, "pi": [{ "n": "target", "pt": $n[1].AudioSource, "ps": 0 }, { "n": "endValue", "pt": $n[0].Single, "ps": 1 }, { "n": "duration", "pt": $n[0].Single, "ps": 2 }], "sn": "DOFade", "rt": $n[18].TweenerCore$3(System.Single, System.Single, DG.Tweening.Plugins.Options.FloatOptions), "p": [$n[1].AudioSource, $n[0].Single, $n[0].Single] }, { "a": 2, "n": "DOFlip", "is": true, "t": 8, "pi": [{ "n": "target", "pt": $n[17].AudioMixer, "ps": 0 }], "sn": "DOFlip", "rt": $n[0].Int32, "p": [$n[17].AudioMixer], "box": function($v) { return Bridge.box($v, System.Int32); } }, { "a": 2, "n": "DOGoto", "is": true, "t": 8, "pi": [{ "n": "target", "pt": $n[17].AudioMixer, "ps": 0 }, { "n": "to", "pt": $n[0].Single, "ps": 1 }, { "n": "andPlay", "dv": false, "o": true, "pt": $n[0].Boolean, "ps": 2 }], "sn": "DOGoto", "rt": $n[0].Int32, "p": [$n[17].AudioMixer, $n[0].Single, $n[0].Boolean], "box": function($v) { return Bridge.box($v, System.Int32); } }, { "a": 2, "n": "DOKill", "is": true, "t": 8, "pi": [{ "n": "target", "pt": $n[17].AudioMixer, "ps": 0 }, { "n": "complete", "dv": false, "o": true, "pt": $n[0].Boolean, "ps": 1 }], "sn": "DOKill", "rt": $n[0].Int32, "p": [$n[17].AudioMixer, $n[0].Boolean], "box": function($v) { return Bridge.box($v, System.Int32); } }, { "a": 2, "n": "DOPause", "is": true, "t": 8, "pi": [{ "n": "target", "pt": $n[17].AudioMixer, "ps": 0 }], "sn": "DOPause", "rt": $n[0].Int32, "p": [$n[17].AudioMixer], "box": function($v) { return Bridge.box($v, System.Int32); } }, { "a": 2, "n": "DOPitch", "is": true, "t": 8, "pi": [{ "n": "target", "pt": $n[1].AudioSource, "ps": 0 }, { "n": "endValue", "pt": $n[0].Single, "ps": 1 }, { "n": "duration", "pt": $n[0].Single, "ps": 2 }], "sn": "DOPitch", "rt": $n[18].TweenerCore$3(System.Single, System.Single, DG.Tweening.Plugins.Options.FloatOptions), "p": [$n[1].AudioSource, $n[0].Single, $n[0].Single] }, { "a": 2, "n": "DOPlay", "is": true, "t": 8, "pi": [{ "n": "target", "pt": $n[17].AudioMixer, "ps": 0 }], "sn": "DOPlay", "rt": $n[0].Int32, "p": [$n[17].AudioMixer], "box": function($v) { return Bridge.box($v, System.Int32); } }, { "a": 2, "n": "DOPlayBackwards", "is": true, "t": 8, "pi": [{ "n": "target", "pt": $n[17].AudioMixer, "ps": 0 }], "sn": "DOPlayBackwards", "rt": $n[0].Int32, "p": [$n[17].AudioMixer], "box": function($v) { return Bridge.box($v, System.Int32); } }, { "a": 2, "n": "DOPlayForward", "is": true, "t": 8, "pi": [{ "n": "target", "pt": $n[17].AudioMixer, "ps": 0 }], "sn": "DOPlayForward", "rt": $n[0].Int32, "p": [$n[17].AudioMixer], "box": function($v) { return Bridge.box($v, System.Int32); } }, { "a": 2, "n": "DORestart", "is": true, "t": 8, "pi": [{ "n": "target", "pt": $n[17].AudioMixer, "ps": 0 }], "sn": "DORestart", "rt": $n[0].Int32, "p": [$n[17].AudioMixer], "box": function($v) { return Bridge.box($v, System.Int32); } }, { "a": 2, "n": "DORewind", "is": true, "t": 8, "pi": [{ "n": "target", "pt": $n[17].AudioMixer, "ps": 0 }], "sn": "DORewind", "rt": $n[0].Int32, "p": [$n[17].AudioMixer], "box": function($v) { return Bridge.box($v, System.Int32); } }, { "a": 2, "n": "DOSetFloat", "is": true, "t": 8, "pi": [{ "n": "target", "pt": $n[17].AudioMixer, "ps": 0 }, { "n": "floatName", "pt": $n[0].String, "ps": 1 }, { "n": "endValue", "pt": $n[0].Single, "ps": 2 }, { "n": "duration", "pt": $n[0].Single, "ps": 3 }], "sn": "DOSetFloat", "rt": $n[18].TweenerCore$3(System.Single, System.Single, DG.Tweening.Plugins.Options.FloatOptions), "p": [$n[17].AudioMixer, $n[0].String, $n[0].Single, $n[0].Single] }, { "a": 2, "n": "DOSmoothRewind", "is": true, "t": 8, "pi": [{ "n": "target", "pt": $n[17].AudioMixer, "ps": 0 }], "sn": "DOSmoothRewind", "rt": $n[0].Int32, "p": [$n[17].AudioMixer], "box": function($v) { return Bridge.box($v, System.Int32); } }, { "a": 2, "n": "DOTogglePause", "is": true, "t": 8, "pi": [{ "n": "target", "pt": $n[17].AudioMixer, "ps": 0 }], "sn": "DOTogglePause", "rt": $n[0].Int32, "p": [$n[17].AudioMixer], "box": function($v) { return Bridge.box($v, System.Int32); } }] }; }, $n);
    /*DG.Tweening.DOTweenModuleAudio end.*/

    /*DG.Tweening.DOTweenModulePhysics start.*/
    $m("DG.Tweening.DOTweenModulePhysics", function() { return { "att": 1048961, "a": 2, "s": true, "m": [{ "a": 2, "n": "DOJump", "is": true, "t": 8, "pi": [{ "n": "target", "pt": $n[1].Rigidbody, "ps": 0 }, { "n": "endValue", "pt": $n[1].Vector3, "ps": 1 }, { "n": "jumpPower", "pt": $n[0].Single, "ps": 2 }, { "n": "numJumps", "pt": $n[0].Int32, "ps": 3 }, { "n": "duration", "pt": $n[0].Single, "ps": 4 }, { "n": "snapping", "dv": false, "o": true, "pt": $n[0].Boolean, "ps": 5 }], "sn": "DOJump", "rt": $n[19].Sequence, "p": [$n[1].Rigidbody, $n[1].Vector3, $n[0].Single, $n[0].Int32, $n[0].Single, $n[0].Boolean] }, { "a": 4, "n": "DOLocalPath", "is": true, "t": 8, "pi": [{ "n": "target", "pt": $n[1].Rigidbody, "ps": 0 }, { "n": "path", "pt": $n[20].Path, "ps": 1 }, { "n": "duration", "pt": $n[0].Single, "ps": 2 }, { "n": "pathMode", "dv": 1, "o": true, "pt": $n[19].PathMode, "ps": 3 }], "sn": "DOLocalPath$1", "rt": $n[18].TweenerCore$3(UnityEngine.Vector3, DG.Tweening.Plugins.Core.PathCore.Path, DG.Tweening.Plugins.Options.PathOptions), "p": [$n[1].Rigidbody, $n[20].Path, $n[0].Single, $n[19].PathMode] }, { "a": 2, "n": "DOLocalPath", "is": true, "t": 8, "pi": [{ "n": "target", "pt": $n[1].Rigidbody, "ps": 0 }, { "n": "path", "pt": System.Array.type(UnityEngine.Vector3), "ps": 1 }, { "n": "duration", "pt": $n[0].Single, "ps": 2 }, { "n": "pathType", "dv": 0, "o": true, "pt": $n[19].PathType, "ps": 3 }, { "n": "pathMode", "dv": 1, "o": true, "pt": $n[19].PathMode, "ps": 4 }, { "n": "resolution", "dv": 10, "o": true, "pt": $n[0].Int32, "ps": 5 }, { "n": "gizmoColor", "dv": null, "o": true, "pt": $n[0].Nullable$1(UnityEngine.Color), "ps": 6 }], "sn": "DOLocalPath", "rt": $n[18].TweenerCore$3(UnityEngine.Vector3, DG.Tweening.Plugins.Core.PathCore.Path, DG.Tweening.Plugins.Options.PathOptions), "p": [$n[1].Rigidbody, System.Array.type(UnityEngine.Vector3), $n[0].Single, $n[19].PathType, $n[19].PathMode, $n[0].Int32, $n[0].Nullable$1(UnityEngine.Color)] }, { "a": 2, "n": "DOLookAt", "is": true, "t": 8, "pi": [{ "n": "target", "pt": $n[1].Rigidbody, "ps": 0 }, { "n": "towards", "pt": $n[1].Vector3, "ps": 1 }, { "n": "duration", "pt": $n[0].Single, "ps": 2 }, { "n": "axisConstraint", "dv": 0, "o": true, "pt": $n[19].AxisConstraint, "ps": 3 }, { "n": "up", "dv": null, "o": true, "pt": $n[0].Nullable$1(UnityEngine.Vector3), "ps": 4 }], "sn": "DOLookAt", "rt": $n[18].TweenerCore$3(UnityEngine.Quaternion, UnityEngine.Vector3, DG.Tweening.Plugins.Options.QuaternionOptions), "p": [$n[1].Rigidbody, $n[1].Vector3, $n[0].Single, $n[19].AxisConstraint, $n[0].Nullable$1(UnityEngine.Vector3)] }, { "a": 2, "n": "DOMove", "is": true, "t": 8, "pi": [{ "n": "target", "pt": $n[1].Rigidbody, "ps": 0 }, { "n": "endValue", "pt": $n[1].Vector3, "ps": 1 }, { "n": "duration", "pt": $n[0].Single, "ps": 2 }, { "n": "snapping", "dv": false, "o": true, "pt": $n[0].Boolean, "ps": 3 }], "sn": "DOMove", "rt": $n[18].TweenerCore$3(UnityEngine.Vector3, UnityEngine.Vector3, DG.Tweening.Plugins.Options.VectorOptions), "p": [$n[1].Rigidbody, $n[1].Vector3, $n[0].Single, $n[0].Boolean] }, { "a": 2, "n": "DOMoveX", "is": true, "t": 8, "pi": [{ "n": "target", "pt": $n[1].Rigidbody, "ps": 0 }, { "n": "endValue", "pt": $n[0].Single, "ps": 1 }, { "n": "duration", "pt": $n[0].Single, "ps": 2 }, { "n": "snapping", "dv": false, "o": true, "pt": $n[0].Boolean, "ps": 3 }], "sn": "DOMoveX", "rt": $n[18].TweenerCore$3(UnityEngine.Vector3, UnityEngine.Vector3, DG.Tweening.Plugins.Options.VectorOptions), "p": [$n[1].Rigidbody, $n[0].Single, $n[0].Single, $n[0].Boolean] }, { "a": 2, "n": "DOMoveY", "is": true, "t": 8, "pi": [{ "n": "target", "pt": $n[1].Rigidbody, "ps": 0 }, { "n": "endValue", "pt": $n[0].Single, "ps": 1 }, { "n": "duration", "pt": $n[0].Single, "ps": 2 }, { "n": "snapping", "dv": false, "o": true, "pt": $n[0].Boolean, "ps": 3 }], "sn": "DOMoveY", "rt": $n[18].TweenerCore$3(UnityEngine.Vector3, UnityEngine.Vector3, DG.Tweening.Plugins.Options.VectorOptions), "p": [$n[1].Rigidbody, $n[0].Single, $n[0].Single, $n[0].Boolean] }, { "a": 2, "n": "DOMoveZ", "is": true, "t": 8, "pi": [{ "n": "target", "pt": $n[1].Rigidbody, "ps": 0 }, { "n": "endValue", "pt": $n[0].Single, "ps": 1 }, { "n": "duration", "pt": $n[0].Single, "ps": 2 }, { "n": "snapping", "dv": false, "o": true, "pt": $n[0].Boolean, "ps": 3 }], "sn": "DOMoveZ", "rt": $n[18].TweenerCore$3(UnityEngine.Vector3, UnityEngine.Vector3, DG.Tweening.Plugins.Options.VectorOptions), "p": [$n[1].Rigidbody, $n[0].Single, $n[0].Single, $n[0].Boolean] }, { "a": 4, "n": "DOPath", "is": true, "t": 8, "pi": [{ "n": "target", "pt": $n[1].Rigidbody, "ps": 0 }, { "n": "path", "pt": $n[20].Path, "ps": 1 }, { "n": "duration", "pt": $n[0].Single, "ps": 2 }, { "n": "pathMode", "dv": 1, "o": true, "pt": $n[19].PathMode, "ps": 3 }], "sn": "DOPath$1", "rt": $n[18].TweenerCore$3(UnityEngine.Vector3, DG.Tweening.Plugins.Core.PathCore.Path, DG.Tweening.Plugins.Options.PathOptions), "p": [$n[1].Rigidbody, $n[20].Path, $n[0].Single, $n[19].PathMode] }, { "a": 2, "n": "DOPath", "is": true, "t": 8, "pi": [{ "n": "target", "pt": $n[1].Rigidbody, "ps": 0 }, { "n": "path", "pt": System.Array.type(UnityEngine.Vector3), "ps": 1 }, { "n": "duration", "pt": $n[0].Single, "ps": 2 }, { "n": "pathType", "dv": 0, "o": true, "pt": $n[19].PathType, "ps": 3 }, { "n": "pathMode", "dv": 1, "o": true, "pt": $n[19].PathMode, "ps": 4 }, { "n": "resolution", "dv": 10, "o": true, "pt": $n[0].Int32, "ps": 5 }, { "n": "gizmoColor", "dv": null, "o": true, "pt": $n[0].Nullable$1(UnityEngine.Color), "ps": 6 }], "sn": "DOPath", "rt": $n[18].TweenerCore$3(UnityEngine.Vector3, DG.Tweening.Plugins.Core.PathCore.Path, DG.Tweening.Plugins.Options.PathOptions), "p": [$n[1].Rigidbody, System.Array.type(UnityEngine.Vector3), $n[0].Single, $n[19].PathType, $n[19].PathMode, $n[0].Int32, $n[0].Nullable$1(UnityEngine.Color)] }, { "a": 2, "n": "DORotate", "is": true, "t": 8, "pi": [{ "n": "target", "pt": $n[1].Rigidbody, "ps": 0 }, { "n": "endValue", "pt": $n[1].Vector3, "ps": 1 }, { "n": "duration", "pt": $n[0].Single, "ps": 2 }, { "n": "mode", "dv": 0, "o": true, "pt": $n[19].RotateMode, "ps": 3 }], "sn": "DORotate", "rt": $n[18].TweenerCore$3(UnityEngine.Quaternion, UnityEngine.Vector3, DG.Tweening.Plugins.Options.QuaternionOptions), "p": [$n[1].Rigidbody, $n[1].Vector3, $n[0].Single, $n[19].RotateMode] }] }; }, $n);
    /*DG.Tweening.DOTweenModulePhysics end.*/

    /*DG.Tweening.DOTweenModulePhysics2D start.*/
    $m("DG.Tweening.DOTweenModulePhysics2D", function() { return { "att": 1048961, "a": 2, "s": true, "m": [{ "a": 2, "n": "DOJump", "is": true, "t": 8, "pi": [{ "n": "target", "pt": $n[1].Rigidbody2D, "ps": 0 }, { "n": "endValue", "pt": $n[1].Vector2, "ps": 1 }, { "n": "jumpPower", "pt": $n[0].Single, "ps": 2 }, { "n": "numJumps", "pt": $n[0].Int32, "ps": 3 }, { "n": "duration", "pt": $n[0].Single, "ps": 4 }, { "n": "snapping", "dv": false, "o": true, "pt": $n[0].Boolean, "ps": 5 }], "sn": "DOJump", "rt": $n[19].Sequence, "p": [$n[1].Rigidbody2D, $n[1].Vector2, $n[0].Single, $n[0].Int32, $n[0].Single, $n[0].Boolean] }, { "a": 2, "n": "DOLocalPath", "is": true, "t": 8, "pi": [{ "n": "target", "pt": $n[1].Rigidbody2D, "ps": 0 }, { "n": "path", "pt": System.Array.type(UnityEngine.Vector2), "ps": 1 }, { "n": "duration", "pt": $n[0].Single, "ps": 2 }, { "n": "pathType", "dv": 0, "o": true, "pt": $n[19].PathType, "ps": 3 }, { "n": "pathMode", "dv": 1, "o": true, "pt": $n[19].PathMode, "ps": 4 }, { "n": "resolution", "dv": 10, "o": true, "pt": $n[0].Int32, "ps": 5 }, { "n": "gizmoColor", "dv": null, "o": true, "pt": $n[0].Nullable$1(UnityEngine.Color), "ps": 6 }], "sn": "DOLocalPath", "rt": $n[18].TweenerCore$3(UnityEngine.Vector3, DG.Tweening.Plugins.Core.PathCore.Path, DG.Tweening.Plugins.Options.PathOptions), "p": [$n[1].Rigidbody2D, System.Array.type(UnityEngine.Vector2), $n[0].Single, $n[19].PathType, $n[19].PathMode, $n[0].Int32, $n[0].Nullable$1(UnityEngine.Color)] }, { "a": 2, "n": "DOMove", "is": true, "t": 8, "pi": [{ "n": "target", "pt": $n[1].Rigidbody2D, "ps": 0 }, { "n": "endValue", "pt": $n[1].Vector2, "ps": 1 }, { "n": "duration", "pt": $n[0].Single, "ps": 2 }, { "n": "snapping", "dv": false, "o": true, "pt": $n[0].Boolean, "ps": 3 }], "sn": "DOMove", "rt": $n[18].TweenerCore$3(UnityEngine.Vector2, UnityEngine.Vector2, DG.Tweening.Plugins.Options.VectorOptions), "p": [$n[1].Rigidbody2D, $n[1].Vector2, $n[0].Single, $n[0].Boolean] }, { "a": 2, "n": "DOMoveX", "is": true, "t": 8, "pi": [{ "n": "target", "pt": $n[1].Rigidbody2D, "ps": 0 }, { "n": "endValue", "pt": $n[0].Single, "ps": 1 }, { "n": "duration", "pt": $n[0].Single, "ps": 2 }, { "n": "snapping", "dv": false, "o": true, "pt": $n[0].Boolean, "ps": 3 }], "sn": "DOMoveX", "rt": $n[18].TweenerCore$3(UnityEngine.Vector2, UnityEngine.Vector2, DG.Tweening.Plugins.Options.VectorOptions), "p": [$n[1].Rigidbody2D, $n[0].Single, $n[0].Single, $n[0].Boolean] }, { "a": 2, "n": "DOMoveY", "is": true, "t": 8, "pi": [{ "n": "target", "pt": $n[1].Rigidbody2D, "ps": 0 }, { "n": "endValue", "pt": $n[0].Single, "ps": 1 }, { "n": "duration", "pt": $n[0].Single, "ps": 2 }, { "n": "snapping", "dv": false, "o": true, "pt": $n[0].Boolean, "ps": 3 }], "sn": "DOMoveY", "rt": $n[18].TweenerCore$3(UnityEngine.Vector2, UnityEngine.Vector2, DG.Tweening.Plugins.Options.VectorOptions), "p": [$n[1].Rigidbody2D, $n[0].Single, $n[0].Single, $n[0].Boolean] }, { "a": 2, "n": "DOPath", "is": true, "t": 8, "pi": [{ "n": "target", "pt": $n[1].Rigidbody2D, "ps": 0 }, { "n": "path", "pt": System.Array.type(UnityEngine.Vector2), "ps": 1 }, { "n": "duration", "pt": $n[0].Single, "ps": 2 }, { "n": "pathType", "dv": 0, "o": true, "pt": $n[19].PathType, "ps": 3 }, { "n": "pathMode", "dv": 1, "o": true, "pt": $n[19].PathMode, "ps": 4 }, { "n": "resolution", "dv": 10, "o": true, "pt": $n[0].Int32, "ps": 5 }, { "n": "gizmoColor", "dv": null, "o": true, "pt": $n[0].Nullable$1(UnityEngine.Color), "ps": 6 }], "sn": "DOPath", "rt": $n[18].TweenerCore$3(UnityEngine.Vector3, DG.Tweening.Plugins.Core.PathCore.Path, DG.Tweening.Plugins.Options.PathOptions), "p": [$n[1].Rigidbody2D, System.Array.type(UnityEngine.Vector2), $n[0].Single, $n[19].PathType, $n[19].PathMode, $n[0].Int32, $n[0].Nullable$1(UnityEngine.Color)] }, { "a": 2, "n": "DORotate", "is": true, "t": 8, "pi": [{ "n": "target", "pt": $n[1].Rigidbody2D, "ps": 0 }, { "n": "endValue", "pt": $n[0].Single, "ps": 1 }, { "n": "duration", "pt": $n[0].Single, "ps": 2 }], "sn": "DORotate", "rt": $n[18].TweenerCore$3(System.Single, System.Single, DG.Tweening.Plugins.Options.FloatOptions), "p": [$n[1].Rigidbody2D, $n[0].Single, $n[0].Single] }] }; }, $n);
    /*DG.Tweening.DOTweenModulePhysics2D end.*/

    /*DG.Tweening.DOTweenModuleSprite start.*/
    $m("DG.Tweening.DOTweenModuleSprite", function() { return { "att": 1048961, "a": 2, "s": true, "m": [{ "a": 2, "n": "DOBlendableColor", "is": true, "t": 8, "pi": [{ "n": "target", "pt": $n[1].SpriteRenderer, "ps": 0 }, { "n": "endValue", "pt": $n[1].Color, "ps": 1 }, { "n": "duration", "pt": $n[0].Single, "ps": 2 }], "sn": "DOBlendableColor", "rt": $n[19].Tweener, "p": [$n[1].SpriteRenderer, $n[1].Color, $n[0].Single] }, { "a": 2, "n": "DOColor", "is": true, "t": 8, "pi": [{ "n": "target", "pt": $n[1].SpriteRenderer, "ps": 0 }, { "n": "endValue", "pt": $n[1].Color, "ps": 1 }, { "n": "duration", "pt": $n[0].Single, "ps": 2 }], "sn": "DOColor", "rt": $n[18].TweenerCore$3(UnityEngine.Color, UnityEngine.Color, DG.Tweening.Plugins.Options.ColorOptions), "p": [$n[1].SpriteRenderer, $n[1].Color, $n[0].Single] }, { "a": 2, "n": "DOFade", "is": true, "t": 8, "pi": [{ "n": "target", "pt": $n[1].SpriteRenderer, "ps": 0 }, { "n": "endValue", "pt": $n[0].Single, "ps": 1 }, { "n": "duration", "pt": $n[0].Single, "ps": 2 }], "sn": "DOFade", "rt": $n[18].TweenerCore$3(UnityEngine.Color, UnityEngine.Color, DG.Tweening.Plugins.Options.ColorOptions), "p": [$n[1].SpriteRenderer, $n[0].Single, $n[0].Single] }, { "a": 2, "n": "DOGradientColor", "is": true, "t": 8, "pi": [{ "n": "target", "pt": $n[1].SpriteRenderer, "ps": 0 }, { "n": "gradient", "pt": $n[1].Gradient, "ps": 1 }, { "n": "duration", "pt": $n[0].Single, "ps": 2 }], "sn": "DOGradientColor", "rt": $n[19].Sequence, "p": [$n[1].SpriteRenderer, $n[1].Gradient, $n[0].Single] }] }; }, $n);
    /*DG.Tweening.DOTweenModuleSprite end.*/

    /*DG.Tweening.DOTweenModuleUnityVersion start.*/
    $m("DG.Tweening.DOTweenModuleUnityVersion", function() { return { "att": 1048961, "a": 2, "s": true, "m": [{ "a": 2, "n": "DOGradientColor", "is": true, "t": 8, "pi": [{ "n": "target", "pt": $n[1].Material, "ps": 0 }, { "n": "gradient", "pt": $n[1].Gradient, "ps": 1 }, { "n": "duration", "pt": $n[0].Single, "ps": 2 }], "sn": "DOGradientColor", "rt": $n[19].Sequence, "p": [$n[1].Material, $n[1].Gradient, $n[0].Single] }, { "a": 2, "n": "DOGradientColor", "is": true, "t": 8, "pi": [{ "n": "target", "pt": $n[1].Material, "ps": 0 }, { "n": "gradient", "pt": $n[1].Gradient, "ps": 1 }, { "n": "property", "pt": $n[0].String, "ps": 2 }, { "n": "duration", "pt": $n[0].Single, "ps": 3 }], "sn": "DOGradientColor$1", "rt": $n[19].Sequence, "p": [$n[1].Material, $n[1].Gradient, $n[0].String, $n[0].Single] }, { "a": 2, "n": "WaitForCompletion", "is": true, "t": 8, "pi": [{ "n": "t", "pt": $n[19].Tween, "ps": 0 }, { "n": "returnCustomYieldInstruction", "pt": $n[0].Boolean, "ps": 1 }], "sn": "WaitForCompletion", "rt": $n[1].CustomYieldInstruction, "p": [$n[19].Tween, $n[0].Boolean] }, { "a": 2, "n": "WaitForElapsedLoops", "is": true, "t": 8, "pi": [{ "n": "t", "pt": $n[19].Tween, "ps": 0 }, { "n": "elapsedLoops", "pt": $n[0].Int32, "ps": 1 }, { "n": "returnCustomYieldInstruction", "pt": $n[0].Boolean, "ps": 2 }], "sn": "WaitForElapsedLoops", "rt": $n[1].CustomYieldInstruction, "p": [$n[19].Tween, $n[0].Int32, $n[0].Boolean] }, { "a": 2, "n": "WaitForKill", "is": true, "t": 8, "pi": [{ "n": "t", "pt": $n[19].Tween, "ps": 0 }, { "n": "returnCustomYieldInstruction", "pt": $n[0].Boolean, "ps": 1 }], "sn": "WaitForKill", "rt": $n[1].CustomYieldInstruction, "p": [$n[19].Tween, $n[0].Boolean] }, { "a": 2, "n": "WaitForPosition", "is": true, "t": 8, "pi": [{ "n": "t", "pt": $n[19].Tween, "ps": 0 }, { "n": "position", "pt": $n[0].Single, "ps": 1 }, { "n": "returnCustomYieldInstruction", "pt": $n[0].Boolean, "ps": 2 }], "sn": "WaitForPosition", "rt": $n[1].CustomYieldInstruction, "p": [$n[19].Tween, $n[0].Single, $n[0].Boolean] }, { "a": 2, "n": "WaitForRewind", "is": true, "t": 8, "pi": [{ "n": "t", "pt": $n[19].Tween, "ps": 0 }, { "n": "returnCustomYieldInstruction", "pt": $n[0].Boolean, "ps": 1 }], "sn": "WaitForRewind", "rt": $n[1].CustomYieldInstruction, "p": [$n[19].Tween, $n[0].Boolean] }, { "a": 2, "n": "WaitForStart", "is": true, "t": 8, "pi": [{ "n": "t", "pt": $n[19].Tween, "ps": 0 }, { "n": "returnCustomYieldInstruction", "pt": $n[0].Boolean, "ps": 1 }], "sn": "WaitForStart", "rt": $n[1].CustomYieldInstruction, "p": [$n[19].Tween, $n[0].Boolean] }] }; }, $n);
    /*DG.Tweening.DOTweenModuleUnityVersion end.*/

    /*DG.Tweening.DOTweenCYInstruction start.*/
    $m("DG.Tweening.DOTweenCYInstruction", function() { return { "nested": [$n[19].DOTweenCYInstruction.WaitForCompletion, $n[19].DOTweenCYInstruction.WaitForRewind, $n[19].DOTweenCYInstruction.WaitForKill, $n[19].DOTweenCYInstruction.WaitForElapsedLoops, $n[19].DOTweenCYInstruction.WaitForPosition, $n[19].DOTweenCYInstruction.WaitForStart], "att": 1048961, "a": 2, "s": true }; }, $n);
    /*DG.Tweening.DOTweenCYInstruction end.*/

    /*DG.Tweening.DOTweenCYInstruction+WaitForCompletion start.*/
    $m("DG.Tweening.DOTweenCYInstruction.WaitForCompletion", function() { return { "td": $n[19].DOTweenCYInstruction, "att": 1048578, "a": 2, "m": [{ "a": 2, "n": ".ctor", "t": 1, "p": [$n[19].Tween], "pi": [{ "n": "tween", "pt": $n[19].Tween, "ps": 0 }], "sn": "ctor" }, { "ov": true, "a": 2, "n": "keepWaiting", "t": 16, "rt": $n[0].Boolean, "g": { "ov": true, "a": 2, "n": "get_keepWaiting", "t": 8, "rt": $n[0].Boolean, "fg": "keepWaiting", "box": function($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString); } }, "fn": "keepWaiting" }, { "a": 1, "n": "t", "t": 4, "rt": $n[19].Tween, "sn": "t", "ro": true }] }; }, $n);
    /*DG.Tweening.DOTweenCYInstruction+WaitForCompletion end.*/

    /*DG.Tweening.DOTweenCYInstruction+WaitForRewind start.*/
    $m("DG.Tweening.DOTweenCYInstruction.WaitForRewind", function() { return { "td": $n[19].DOTweenCYInstruction, "att": 1048578, "a": 2, "m": [{ "a": 2, "n": ".ctor", "t": 1, "p": [$n[19].Tween], "pi": [{ "n": "tween", "pt": $n[19].Tween, "ps": 0 }], "sn": "ctor" }, { "ov": true, "a": 2, "n": "keepWaiting", "t": 16, "rt": $n[0].Boolean, "g": { "ov": true, "a": 2, "n": "get_keepWaiting", "t": 8, "rt": $n[0].Boolean, "fg": "keepWaiting", "box": function($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString); } }, "fn": "keepWaiting" }, { "a": 1, "n": "t", "t": 4, "rt": $n[19].Tween, "sn": "t", "ro": true }] }; }, $n);
    /*DG.Tweening.DOTweenCYInstruction+WaitForRewind end.*/

    /*DG.Tweening.DOTweenCYInstruction+WaitForKill start.*/
    $m("DG.Tweening.DOTweenCYInstruction.WaitForKill", function() { return { "td": $n[19].DOTweenCYInstruction, "att": 1048578, "a": 2, "m": [{ "a": 2, "n": ".ctor", "t": 1, "p": [$n[19].Tween], "pi": [{ "n": "tween", "pt": $n[19].Tween, "ps": 0 }], "sn": "ctor" }, { "ov": true, "a": 2, "n": "keepWaiting", "t": 16, "rt": $n[0].Boolean, "g": { "ov": true, "a": 2, "n": "get_keepWaiting", "t": 8, "rt": $n[0].Boolean, "fg": "keepWaiting", "box": function($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString); } }, "fn": "keepWaiting" }, { "a": 1, "n": "t", "t": 4, "rt": $n[19].Tween, "sn": "t", "ro": true }] }; }, $n);
    /*DG.Tweening.DOTweenCYInstruction+WaitForKill end.*/

    /*DG.Tweening.DOTweenCYInstruction+WaitForElapsedLoops start.*/
    $m("DG.Tweening.DOTweenCYInstruction.WaitForElapsedLoops", function() { return { "td": $n[19].DOTweenCYInstruction, "att": 1048578, "a": 2, "m": [{ "a": 2, "n": ".ctor", "t": 1, "p": [$n[19].Tween, $n[0].Int32], "pi": [{ "n": "tween", "pt": $n[19].Tween, "ps": 0 }, { "n": "elapsedLoops", "pt": $n[0].Int32, "ps": 1 }], "sn": "ctor" }, { "ov": true, "a": 2, "n": "keepWaiting", "t": 16, "rt": $n[0].Boolean, "g": { "ov": true, "a": 2, "n": "get_keepWaiting", "t": 8, "rt": $n[0].Boolean, "fg": "keepWaiting", "box": function($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString); } }, "fn": "keepWaiting" }, { "a": 1, "n": "elapsedLoops", "t": 4, "rt": $n[0].Int32, "sn": "elapsedLoops", "ro": true, "box": function($v) { return Bridge.box($v, System.Int32); } }, { "a": 1, "n": "t", "t": 4, "rt": $n[19].Tween, "sn": "t", "ro": true }] }; }, $n);
    /*DG.Tweening.DOTweenCYInstruction+WaitForElapsedLoops end.*/

    /*DG.Tweening.DOTweenCYInstruction+WaitForPosition start.*/
    $m("DG.Tweening.DOTweenCYInstruction.WaitForPosition", function() { return { "td": $n[19].DOTweenCYInstruction, "att": 1048578, "a": 2, "m": [{ "a": 2, "n": ".ctor", "t": 1, "p": [$n[19].Tween, $n[0].Single], "pi": [{ "n": "tween", "pt": $n[19].Tween, "ps": 0 }, { "n": "position", "pt": $n[0].Single, "ps": 1 }], "sn": "ctor" }, { "ov": true, "a": 2, "n": "keepWaiting", "t": 16, "rt": $n[0].Boolean, "g": { "ov": true, "a": 2, "n": "get_keepWaiting", "t": 8, "rt": $n[0].Boolean, "fg": "keepWaiting", "box": function($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString); } }, "fn": "keepWaiting" }, { "a": 1, "n": "position", "t": 4, "rt": $n[0].Single, "sn": "position", "ro": true, "box": function($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode); } }, { "a": 1, "n": "t", "t": 4, "rt": $n[19].Tween, "sn": "t", "ro": true }] }; }, $n);
    /*DG.Tweening.DOTweenCYInstruction+WaitForPosition end.*/

    /*DG.Tweening.DOTweenCYInstruction+WaitForStart start.*/
    $m("DG.Tweening.DOTweenCYInstruction.WaitForStart", function() { return { "td": $n[19].DOTweenCYInstruction, "att": 1048578, "a": 2, "m": [{ "a": 2, "n": ".ctor", "t": 1, "p": [$n[19].Tween], "pi": [{ "n": "tween", "pt": $n[19].Tween, "ps": 0 }], "sn": "ctor" }, { "ov": true, "a": 2, "n": "keepWaiting", "t": 16, "rt": $n[0].Boolean, "g": { "ov": true, "a": 2, "n": "get_keepWaiting", "t": 8, "rt": $n[0].Boolean, "fg": "keepWaiting", "box": function($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString); } }, "fn": "keepWaiting" }, { "a": 1, "n": "t", "t": 4, "rt": $n[19].Tween, "sn": "t", "ro": true }] }; }, $n);
    /*DG.Tweening.DOTweenCYInstruction+WaitForStart end.*/

    /*DG.Tweening.DOTweenModuleUtils start.*/
    $m("DG.Tweening.DOTweenModuleUtils", function() { return { "nested": [$n[19].DOTweenModuleUtils.Physics], "att": 1048961, "a": 2, "s": true, "m": [{ "a": 2, "n": "Init", "is": true, "t": 8, "sn": "Init", "rt": $n[0].Void }, { "a": 1, "n": "_initialized", "is": true, "t": 4, "rt": $n[0].Boolean, "sn": "_initialized", "box": function($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString); } }] }; }, $n);
    /*DG.Tweening.DOTweenModuleUtils end.*/

    /*DG.Tweening.DOTweenModuleUtils+Physics start.*/
    $m("DG.Tweening.DOTweenModuleUtils.Physics", function() { return { "td": $n[19].DOTweenModuleUtils, "att": 1048962, "a": 2, "s": true, "m": [{ "a": 2, "n": "CreateDOTweenPathTween", "is": true, "t": 8, "pi": [{ "n": "target", "pt": $n[1].MonoBehaviour, "ps": 0 }, { "n": "tweenRigidbody", "pt": $n[0].Boolean, "ps": 1 }, { "n": "isLocal", "pt": $n[0].Boolean, "ps": 2 }, { "n": "path", "pt": $n[20].Path, "ps": 3 }, { "n": "duration", "pt": $n[0].Single, "ps": 4 }, { "n": "pathMode", "pt": $n[19].PathMode, "ps": 5 }], "sn": "CreateDOTweenPathTween", "rt": $n[18].TweenerCore$3(UnityEngine.Vector3, DG.Tweening.Plugins.Core.PathCore.Path, DG.Tweening.Plugins.Options.PathOptions), "p": [$n[1].MonoBehaviour, $n[0].Boolean, $n[0].Boolean, $n[20].Path, $n[0].Single, $n[19].PathMode] }, { "a": 2, "n": "HasRigidbody", "is": true, "t": 8, "pi": [{ "n": "target", "pt": $n[1].Component, "ps": 0 }], "sn": "HasRigidbody", "rt": $n[0].Boolean, "p": [$n[1].Component], "box": function($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString); } }, { "a": 2, "n": "HasRigidbody2D", "is": true, "t": 8, "pi": [{ "n": "target", "pt": $n[1].Component, "ps": 0 }], "sn": "HasRigidbody2D", "rt": $n[0].Boolean, "p": [$n[1].Component], "box": function($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString); } }, { "a": 2, "n": "SetOrientationOnPath", "is": true, "t": 8, "pi": [{ "n": "options", "pt": $n[21].PathOptions, "ps": 0 }, { "n": "t", "pt": $n[19].Tween, "ps": 1 }, { "n": "newRot", "pt": $n[1].Quaternion, "ps": 2 }, { "n": "trans", "pt": $n[1].Transform, "ps": 3 }], "sn": "SetOrientationOnPath", "rt": $n[0].Void, "p": [$n[21].PathOptions, $n[19].Tween, $n[1].Quaternion, $n[1].Transform] }] }; }, $n);
    /*DG.Tweening.DOTweenModuleUtils+Physics end.*/

});