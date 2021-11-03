var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i532 = root || request.c( 'UnityEngine.JointSpring' )
  var i533 = data
  i532.spring = i533[0]
  i532.damper = i533[1]
  i532.targetPosition = i533[2]
  return i532
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i534 = root || request.c( 'UnityEngine.JointMotor' )
  var i535 = data
  i534.m_TargetVelocity = i535[0]
  i534.m_Force = i535[1]
  i534.m_FreeSpin = i535[2]
  return i534
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i536 = root || request.c( 'UnityEngine.JointLimits' )
  var i537 = data
  i536.m_Min = i537[0]
  i536.m_Max = i537[1]
  i536.m_Bounciness = i537[2]
  i536.m_BounceMinVelocity = i537[3]
  i536.m_ContactDistance = i537[4]
  i536.minBounce = i537[5]
  i536.maxBounce = i537[6]
  return i536
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i538 = root || request.c( 'UnityEngine.JointDrive' )
  var i539 = data
  i538.m_PositionSpring = i539[0]
  i538.m_PositionDamper = i539[1]
  i538.m_MaximumForce = i539[2]
  return i538
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i540 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i541 = data
  i540.m_Spring = i541[0]
  i540.m_Damper = i541[1]
  return i540
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i542 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i543 = data
  i542.m_Limit = i543[0]
  i542.m_Bounciness = i543[1]
  i542.m_ContactDistance = i543[2]
  return i542
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i544 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i545 = data
  i544.m_ExtremumSlip = i545[0]
  i544.m_ExtremumValue = i545[1]
  i544.m_AsymptoteSlip = i545[2]
  i544.m_AsymptoteValue = i545[3]
  i544.m_Stiffness = i545[4]
  return i544
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i546 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i547 = data
  i546.m_LowerAngle = i547[0]
  i546.m_UpperAngle = i547[1]
  return i546
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i548 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i549 = data
  i548.m_MotorSpeed = i549[0]
  i548.m_MaximumMotorTorque = i549[1]
  return i548
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i550 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i551 = data
  i550.m_DampingRatio = i551[0]
  i550.m_Frequency = i551[1]
  i550.m_Angle = i551[2]
  return i550
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i552 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i553 = data
  i552.m_LowerTranslation = i553[0]
  i552.m_UpperTranslation = i553[1]
  return i552
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i554 = root || new pc.UnityMaterial()
  var i555 = data
  i554.name = i555[0]
  request.r(i555[1], i555[2], 0, i554, 'shader')
  i554.renderQueue = i555[3]
  i554.enableInstancing = !!i555[4]
  var i557 = i555[5]
  var i556 = []
  for(var i = 0; i < i557.length; i += 1) {
    i556.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i557[i + 0]) );
  }
  i554.floatParameters = i556
  var i559 = i555[6]
  var i558 = []
  for(var i = 0; i < i559.length; i += 1) {
    i558.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i559[i + 0]) );
  }
  i554.colorParameters = i558
  var i561 = i555[7]
  var i560 = []
  for(var i = 0; i < i561.length; i += 1) {
    i560.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i561[i + 0]) );
  }
  i554.vectorParameters = i560
  var i563 = i555[8]
  var i562 = []
  for(var i = 0; i < i563.length; i += 1) {
    i562.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i563[i + 0]) );
  }
  i554.textureParameters = i562
  var i565 = i555[9]
  var i564 = []
  for(var i = 0; i < i565.length; i += 1) {
    i564.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i565[i + 0]) );
  }
  i554.materialFlags = i564
  return i554
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i568 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i569 = data
  i568.name = i569[0]
  i568.value = i569[1]
  return i568
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i572 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i573 = data
  i572.name = i573[0]
  i572.value = new pc.Color(i573[1], i573[2], i573[3], i573[4])
  return i572
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i576 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i577 = data
  i576.name = i577[0]
  i576.value = new pc.Vec4( i577[1], i577[2], i577[3], i577[4] )
  return i576
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i580 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i581 = data
  i580.name = i581[0]
  request.r(i581[1], i581[2], 0, i580, 'value')
  return i580
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i584 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i585 = data
  i584.name = i585[0]
  i584.enabled = !!i585[1]
  return i584
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i586 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i587 = data
  i586.name = i587[0]
  i586.width = i587[1]
  i586.height = i587[2]
  i586.mipmapCount = i587[3]
  i586.anisoLevel = i587[4]
  i586.filterMode = i587[5]
  i586.hdr = !!i587[6]
  i586.format = i587[7]
  i586.wrapMode = i587[8]
  i586.alphaIsTransparency = !!i587[9]
  i586.alphaSource = i587[10]
  return i586
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i588 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i589 = data
  i588.useSafeMode = !!i589[0]
  i588.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i589[1], i588.safeModeOptions)
  i588.timeScale = i589[2]
  i588.useSmoothDeltaTime = !!i589[3]
  i588.maxSmoothUnscaledTime = i589[4]
  i588.rewindCallbackMode = i589[5]
  i588.showUnityEditorReport = !!i589[6]
  i588.logBehaviour = i589[7]
  i588.drawGizmos = !!i589[8]
  i588.defaultRecyclable = !!i589[9]
  i588.defaultAutoPlay = i589[10]
  i588.defaultUpdateType = i589[11]
  i588.defaultTimeScaleIndependent = !!i589[12]
  i588.defaultEaseType = i589[13]
  i588.defaultEaseOvershootOrAmplitude = i589[14]
  i588.defaultEasePeriod = i589[15]
  i588.defaultAutoKill = !!i589[16]
  i588.defaultLoopType = i589[17]
  i588.debugMode = !!i589[18]
  i588.debugStoreTargetId = !!i589[19]
  i588.showPreviewPanel = !!i589[20]
  i588.storeSettingsLocation = i589[21]
  i588.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i589[22], i588.modules)
  i588.showPlayingTweens = !!i589[23]
  i588.showPausedTweens = !!i589[24]
  return i588
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i590 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i591 = data
  i590.nestedTweenFailureBehaviour = i591[0]
  return i590
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i592 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i593 = data
  i592.showPanel = !!i593[0]
  i592.audioEnabled = !!i593[1]
  i592.physicsEnabled = !!i593[2]
  i592.physics2DEnabled = !!i593[3]
  i592.spriteEnabled = !!i593[4]
  i592.uiEnabled = !!i593[5]
  i592.textMeshProEnabled = !!i593[6]
  i592.tk2DEnabled = !!i593[7]
  i592.deAudioEnabled = !!i593[8]
  i592.deUnityExtendedEnabled = !!i593[9]
  return i592
}

Deserializers["Luna.Replay.Settings.HudSettings"] = function (request, data, root) {
  var i594 = root || request.c( 'Luna.Replay.Settings.HudSettings' )
  var i595 = data
  i594.captureHudAnchor = i595[0]
  i594.showTouchDebug = !!i595[1]
  return i594
}

Deserializers["Luna.Replay.Settings.PlaygroundCredentials"] = function (request, data, root) {
  var i596 = root || request.c( 'Luna.Replay.Settings.PlaygroundCredentials' )
  var i597 = data
  i596.UserEmail = i597[0]
  i596.UserPassword = i597[1]
  i596.PackageId = i597[2]
  i596.ApplicationName = i597[3]
  i596.UserId = i597[4]
  i596.UserToken = i597[5]
  i596.UserRole = i597[6]
  i596.ApplicationId = i597[7]
  return i596
}

Deserializers["Luna.Replay.Settings.ReplaySettings"] = function (request, data, root) {
  var i598 = root || request.c( 'Luna.Replay.Settings.ReplaySettings' )
  var i599 = data
  i598.targetFps = i599[0]
  var i601 = i599[1]
  var i600 = []
  for(var i = 0; i < i601.length; i += 1) {
    i600.push( request.d('Luna.Replay.Settings.VideoSet', i601[i + 0]) );
  }
  i598.videoSets = i600
  var i603 = i599[2]
  var i602 = []
  for(var i = 0; i < i603.length; i += 1) {
    i602.push( request.d('Luna.Replay.DTO.Legacy.Axis', i603[i + 0]) );
  }
  i598.inputAxes = i602
  i598.videoCodec = i599[3]
  i598.removeScreenshotsAlpha = !!i599[4]
  i598.version = i599[5]
  i598.captureImmediately = !!i599[6]
  i598.setCaptureDefaultName = !!i599[7]
  i598.captureDefaultNamePrefix = i599[8]
  i598.stabilizeCaptureFramerate = !!i599[9]
  i598.debugRandomsOnCapture = !!i599[10]
  i598.debugRandomsOnReplay = !!i599[11]
  i598.debugPlayerPrefsOnCapture = !!i599[12]
  i598.debugPlayerPrefsOnReplay = !!i599[13]
  i598.startCaptureHotKey = i599[14]
  i598.stopCaptureHotKey = i599[15]
  i598.lockFocus = !!i599[16]
  i598.replayTraceData = request.d('Luna.Replay.Settings.ReplaySettings+ReplayTrace', i599[17], i598.replayTraceData)
  i598.replayTraceUrl = i599[18]
  i598.replayName = i599[19]
  i598.videoPath = i599[20]
  i598.replayId = System.Int64(i599[21])
  i598.captureMode = i599[22]
  i598.serverEnvironment = i599[23]
  return i598
}

Deserializers["Luna.Replay.Settings.VideoSet"] = function (request, data, root) {
  var i606 = root || request.c( 'Luna.Replay.Settings.VideoSet' )
  var i607 = data
  var i609 = i607[0]
  var i608 = []
  for(var i = 0; i < i609.length; i += 1) {
    i608.push( i609[i + 0] );
  }
  i606.systemLanguages = i608
  var i611 = i607[1]
  var i610 = []
  for(var i = 0; i < i611.length; i += 1) {
    i610.push( request.d('Luna.Replay.Settings.Resolution', i611[i + 0]) );
  }
  i606.resolutions = i610
  var i613 = i607[2]
  var i612 = []
  for(var i = 0; i < i613.length; i += 1) {
    i612.push( request.d('Luna.Replay.Playground.LunaPlaygroundField', i613[i + 0]) );
  }
  i606.fieldSets = i612
  return i606
}

Deserializers["Luna.Replay.DTO.Legacy.Axis"] = function (request, data, root) {
  var i616 = root || request.c( 'Luna.Replay.DTO.Legacy.Axis' )
  var i617 = data
  i616.name = i617[0]
  i616.value = i617[1]
  i616.negativeButton = i617[2]
  i616.positiveButton = i617[3]
  i616.altNegativeButton = i617[4]
  i616.altPositiveButton = i617[5]
  return i616
}

Deserializers["Luna.Replay.Settings.ReplaySettings+ReplayTrace"] = function (request, data, root) {
  var i618 = root || request.c( 'Luna.Replay.Settings.ReplaySettings+ReplayTrace' )
  var i619 = data
  i618.guid = i619[0]
  return i618
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i620 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i621 = data
  i620.position = new pc.Vec3( i621[0], i621[1], i621[2] )
  i620.scale = new pc.Vec3( i621[3], i621[4], i621[5] )
  i620.rotation = new pc.Quat(i621[6], i621[7], i621[8], i621[9])
  return i620
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Light"] = function (request, data, root) {
  var i622 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Light' )
  var i623 = data
  i622.enabled = !!i623[0]
  i622.type = i623[1]
  i622.color = new pc.Color(i623[2], i623[3], i623[4], i623[5])
  i622.cullingMask = i623[6]
  i622.intensity = i623[7]
  i622.range = i623[8]
  i622.spotAngle = i623[9]
  i622.shadows = i623[10]
  i622.shadowNormalBias = i623[11]
  i622.shadowBias = i623[12]
  i622.shadowStrength = i623[13]
  i622.lightmapBakeType = i623[14]
  i622.renderMode = i623[15]
  request.r(i623[16], i623[17], 0, i622, 'cookie')
  i622.cookieSize = i623[18]
  return i622
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i624 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i625 = data
  i624.name = i625[0]
  i624.tag = i625[1]
  i624.enabled = !!i625[2]
  i624.isStatic = !!i625[3]
  i624.layer = i625[4]
  return i624
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i626 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i627 = data
  request.r(i627[0], i627[1], 0, i626, 'm_FirstSelected')
  i626.m_sendNavigationEvents = !!i627[2]
  i626.m_DragThreshold = i627[3]
  return i626
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i628 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i629 = data
  i628.m_HorizontalAxis = i629[0]
  i628.m_VerticalAxis = i629[1]
  i628.m_SubmitButton = i629[2]
  i628.m_CancelButton = i629[3]
  i628.m_InputActionsPerSecond = i629[4]
  i628.m_RepeatDelay = i629[5]
  i628.m_ForceModuleActive = !!i629[6]
  return i628
}

Deserializers["UnityEngine.EventSystems.BaseInput"] = function (request, data, root) {
  var i630 = root || request.c( 'UnityEngine.EventSystems.BaseInput' )
  var i631 = data
  return i630
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i632 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i633 = data
  i632.enabled = !!i633[0]
  i632.aspect = i633[1]
  i632.orthographic = !!i633[2]
  i632.orthographicSize = i633[3]
  i632.backgroundColor = new pc.Color(i633[4], i633[5], i633[6], i633[7])
  i632.nearClipPlane = i633[8]
  i632.farClipPlane = i633[9]
  i632.fieldOfView = i633[10]
  i632.depth = i633[11]
  i632.clearFlags = i633[12]
  i632.cullingMask = i633[13]
  i632.rect = i633[14]
  request.r(i633[15], i633[16], 0, i632, 'targetTexture')
  return i632
}

Deserializers["Tube"] = function (request, data, root) {
  var i634 = root || request.c( 'Tube' )
  var i635 = data
  i634.isReq = !!i635[0]
  i634.iscomplete = !!i635[1]
  i634.idTube = i635[2]
  i634.tubeColors = i635[3]
  var i637 = i635[4]
  var i636 = []
  for(var i = 0; i < i637.length; i += 2) {
  request.r(i637[i + 0], i637[i + 1], 2, i636, '')
  }
  i634.fill = i636
  request.r(i635[5], i635[6], 0, i634, 'shadow')
  request.r(i635[7], i635[8], 0, i634, 'tick')
  request.r(i635[9], i635[10], 0, i634, 'tube')
  request.r(i635[11], i635[12], 0, i634, 'tube2')
  request.r(i635[13], i635[14], 0, i634, 'fx')
  request.r(i635[15], i635[16], 0, i634, 'fxComplete')
  i634.fillSendCount = i635[17]
  i634.celeb = !!i635[18]
  return i634
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider"] = function (request, data, root) {
  var i640 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider' )
  var i641 = data
  i640.center = new pc.Vec3( i641[0], i641[1], i641[2] )
  i640.size = new pc.Vec3( i641[3], i641[4], i641[5] )
  i640.enabled = !!i641[6]
  i640.isTrigger = !!i641[7]
  request.r(i641[8], i641[9], 0, i640, 'material')
  return i640
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshFilter"] = function (request, data, root) {
  var i642 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshFilter' )
  var i643 = data
  request.r(i643[0], i643[1], 0, i642, 'sharedMesh')
  return i642
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshRenderer"] = function (request, data, root) {
  var i644 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshRenderer' )
  var i645 = data
  request.r(i645[0], i645[1], 0, i644, 'additionalVertexStreams')
  i644.enabled = !!i645[2]
  request.r(i645[3], i645[4], 0, i644, 'sharedMaterial')
  var i647 = i645[5]
  var i646 = []
  for(var i = 0; i < i647.length; i += 2) {
  request.r(i647[i + 0], i647[i + 1], 2, i646, '')
  }
  i644.sharedMaterials = i646
  i644.receiveShadows = !!i645[6]
  i644.shadowCastingMode = i645[7]
  i644.sortingLayerID = i645[8]
  i644.sortingOrder = i645[9]
  i644.lightmapIndex = i645[10]
  i644.lightmapSceneIndex = i645[11]
  i644.lightmapScaleOffset = new pc.Vec4( i645[12], i645[13], i645[14], i645[15] )
  i644.lightProbeUsage = i645[16]
  i644.reflectionProbeUsage = i645[17]
  return i644
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i650 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i651 = data
  i650.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i651[0], i650.main)
  i650.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i651[1], i650.colorBySpeed)
  i650.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i651[2], i650.colorOverLifetime)
  i650.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i651[3], i650.emission)
  i650.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i651[4], i650.rotationBySpeed)
  i650.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i651[5], i650.rotationOverLifetime)
  i650.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i651[6], i650.shape)
  i650.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i651[7], i650.sizeBySpeed)
  i650.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i651[8], i650.sizeOverLifetime)
  i650.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i651[9], i650.textureSheetAnimation)
  i650.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i651[10], i650.velocityOverLifetime)
  i650.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i651[11], i650.noise)
  i650.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i651[12], i650.inheritVelocity)
  i650.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i651[13], i650.forceOverLifetime)
  i650.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i651[14], i650.limitVelocityOverLifetime)
  return i650
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i652 = root || new pc.ParticleSystemMain()
  var i653 = data
  i652.duration = i653[0]
  i652.loop = !!i653[1]
  i652.prewarm = !!i653[2]
  i652.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i653[3], i652.startDelay)
  i652.startDelayMultiplier = i653[4]
  i652.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i653[5], i652.startLifetime)
  i652.startLifetimeMultiplier = i653[6]
  i652.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i653[7], i652.startSpeed)
  i652.startSpeedMultiplier = i653[8]
  i652.startSize3D = !!i653[9]
  i652.startSize = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i653[10], i652.startSize)
  i652.startSizeMultiplier = i653[11]
  i652.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i653[12], i652.startSizeX)
  i652.startSizeXMultiplier = i653[13]
  i652.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i653[14], i652.startSizeY)
  i652.startSizeYMultiplier = i653[15]
  i652.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i653[16], i652.startSizeZ)
  i652.startSizeZMultiplier = i653[17]
  i652.startRotation3D = !!i653[18]
  i652.startRotation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i653[19], i652.startRotation)
  i652.startRotationMultiplier = i653[20]
  i652.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i653[21], i652.startRotationX)
  i652.startRotationXMultiplier = i653[22]
  i652.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i653[23], i652.startRotationY)
  i652.startRotationYMultiplier = i653[24]
  i652.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i653[25], i652.startRotationZ)
  i652.startRotationZMultiplier = i653[26]
  i652.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i653[27], i652.startColor)
  i652.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i653[28], i652.gravityModifier)
  i652.gravityModifierMultiplier = i653[29]
  i652.simulationSpace = i653[30]
  request.r(i653[31], i653[32], 0, i652, 'customSimulationSpace')
  i652.simulationSpeed = i653[33]
  i652.useUnscaledTime = !!i653[34]
  i652.scalingMode = i653[35]
  i652.playOnAwake = !!i653[36]
  i652.maxParticles = i653[37]
  i652.emitterVelocityMode = i653[38]
  return i652
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i654 = root || new pc.MinMaxCurve()
  var i655 = data
  i654.m_Mode = i655[0]
  i654.m_CurveMin = new pc.AnimationCurve( { keys_flow: i655[1] } )
  i654.m_CurveMax = new pc.AnimationCurve( { keys_flow: i655[2] } )
  i654.m_CurveMultiplier = i655[3]
  i654.m_ConstantMin = i655[4]
  i654.m_ConstantMax = i655[5]
  return i654
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i656 = root || new pc.MinMaxGradient()
  var i657 = data
  i656.m_Mode = i657[0]
  i656.m_GradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i657[1], i656.m_GradientMin)
  i656.m_GradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i657[2], i656.m_GradientMax)
  i656.m_ColorMin = new pc.Color(i657[3], i657[4], i657[5], i657[6])
  i656.m_ColorMax = new pc.Color(i657[7], i657[8], i657[9], i657[10])
  return i656
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i658 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i659 = data
  i658.mode = i659[0]
  var i661 = i659[1]
  var i660 = []
  for(var i = 0; i < i661.length; i += 1) {
    i660.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i661[i + 0]) );
  }
  i658.colorKeys = i660
  var i663 = i659[2]
  var i662 = []
  for(var i = 0; i < i663.length; i += 1) {
    i662.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i663[i + 0]) );
  }
  i658.alphaKeys = i662
  return i658
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i664 = root || new pc.ParticleSystemColorBySpeed()
  var i665 = data
  i664.enabled = !!i665[0]
  i664.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i665[1], i664.color)
  i664.range = new pc.Vec2( i665[2], i665[3] )
  return i664
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i668 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i669 = data
  i668.color = new pc.Color(i669[0], i669[1], i669[2], i669[3])
  i668.time = i669[4]
  return i668
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i672 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i673 = data
  i672.alpha = i673[0]
  i672.time = i673[1]
  return i672
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i674 = root || new pc.ParticleSystemColorOverLifetime()
  var i675 = data
  i674.enabled = !!i675[0]
  i674.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i675[1], i674.color)
  return i674
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i676 = root || new pc.ParticleSystemEmitter()
  var i677 = data
  i676.enabled = !!i677[0]
  i676.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i677[1], i676.rateOverTime)
  i676.rateOverTimeMultiplier = i677[2]
  i676.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i677[3], i676.rateOverDistance)
  i676.rateOverDistanceMultiplier = i677[4]
  var i679 = i677[5]
  var i678 = []
  for(var i = 0; i < i679.length; i += 1) {
    i678.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i679[i + 0]) );
  }
  i676.bursts = i678
  return i676
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i682 = root || new pc.ParticleSystemBurst()
  var i683 = data
  i682.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i683[0], i682.count)
  i682.cycleCount = i683[1]
  i682.minCount = i683[2]
  i682.maxCount = i683[3]
  i682.repeatInterval = i683[4]
  i682.time = i683[5]
  return i682
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i684 = root || new pc.ParticleSystemRotationBySpeed()
  var i685 = data
  i684.enabled = !!i685[0]
  i684.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i685[1], i684.x)
  i684.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i685[2], i684.y)
  i684.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i685[3], i684.z)
  i684.xMultiplier = i685[4]
  i684.yMultiplier = i685[5]
  i684.zMultiplier = i685[6]
  i684.separateAxes = !!i685[7]
  i684.range = new pc.Vec2( i685[8], i685[9] )
  return i684
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i686 = root || new pc.ParticleSystemRotationOverLifetime()
  var i687 = data
  i686.enabled = !!i687[0]
  i686.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i687[1], i686.x)
  i686.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i687[2], i686.y)
  i686.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i687[3], i686.z)
  i686.xMultiplier = i687[4]
  i686.yMultiplier = i687[5]
  i686.zMultiplier = i687[6]
  i686.separateAxes = !!i687[7]
  return i686
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i688 = root || new pc.ParticleSystemShape()
  var i689 = data
  i688.enabled = !!i689[0]
  i688.shapeType = i689[1]
  i688.randomDirectionAmount = i689[2]
  i688.sphericalDirectionAmount = i689[3]
  i688.randomPositionAmount = i689[4]
  i688.alignToDirection = !!i689[5]
  i688.radius = i689[6]
  i688.radiusMode = i689[7]
  i688.radiusSpread = i689[8]
  i688.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i689[9], i688.radiusSpeed)
  i688.radiusSpeedMultiplier = i689[10]
  i688.radiusThickness = i689[11]
  i688.angle = i689[12]
  i688.length = i689[13]
  i688.boxThickness = new pc.Vec3( i689[14], i689[15], i689[16] )
  i688.meshShapeType = i689[17]
  request.r(i689[18], i689[19], 0, i688, 'mesh')
  request.r(i689[20], i689[21], 0, i688, 'meshRenderer')
  request.r(i689[22], i689[23], 0, i688, 'skinnedMeshRenderer')
  i688.useMeshMaterialIndex = !!i689[24]
  i688.meshMaterialIndex = i689[25]
  i688.useMeshColors = !!i689[26]
  i688.normalOffset = i689[27]
  i688.arc = i689[28]
  i688.arcMode = i689[29]
  i688.arcSpread = i689[30]
  i688.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i689[31], i688.arcSpeed)
  i688.arcSpeedMultiplier = i689[32]
  i688.donutRadius = i689[33]
  i688.position = new pc.Vec3( i689[34], i689[35], i689[36] )
  i688.rotation = new pc.Vec3( i689[37], i689[38], i689[39] )
  i688.scale = new pc.Vec3( i689[40], i689[41], i689[42] )
  return i688
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i690 = root || new pc.ParticleSystemSizeBySpeed()
  var i691 = data
  i690.enabled = !!i691[0]
  i690.size = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i691[1], i690.size)
  i690.sizeMultiplier = i691[2]
  i690.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i691[3], i690.x)
  i690.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i691[4], i690.y)
  i690.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i691[5], i690.z)
  i690.xMultiplier = i691[6]
  i690.yMultiplier = i691[7]
  i690.zMultiplier = i691[8]
  i690.separateAxes = !!i691[9]
  i690.range = new pc.Vec2( i691[10], i691[11] )
  return i690
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i692 = root || new pc.ParticleSystemSizeOverLifetime()
  var i693 = data
  i692.enabled = !!i693[0]
  i692.size = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i693[1], i692.size)
  i692.sizeMultiplier = i693[2]
  i692.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i693[3], i692.x)
  i692.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i693[4], i692.y)
  i692.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i693[5], i692.z)
  i692.xMultiplier = i693[6]
  i692.yMultiplier = i693[7]
  i692.zMultiplier = i693[8]
  i692.separateAxes = !!i693[9]
  return i692
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i694 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i695 = data
  i694.enabled = !!i695[0]
  i694.mode = i695[1]
  i694.animation = i695[2]
  i694.numTilesX = i695[3]
  i694.numTilesY = i695[4]
  i694.useRandomRow = !!i695[5]
  i694.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i695[6], i694.frameOverTime)
  i694.frameOverTimeMultiplier = i695[7]
  i694.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i695[8], i694.startFrame)
  i694.startFrameMultiplier = i695[9]
  i694.cycleCount = i695[10]
  i694.rowIndex = i695[11]
  i694.flipU = i695[12]
  i694.flipV = i695[13]
  i694.spriteCount = i695[14]
  return i694
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i696 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i697 = data
  i696.enabled = !!i697[0]
  i696.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i697[1], i696.x)
  i696.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i697[2], i696.y)
  i696.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i697[3], i696.z)
  i696.xMultiplier = i697[4]
  i696.yMultiplier = i697[5]
  i696.zMultiplier = i697[6]
  i696.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i697[7], i696.speedModifier)
  i696.speedModifierMultiplier = i697[8]
  i696.space = i697[9]
  return i696
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i698 = root || new pc.ParticleSystemNoise()
  var i699 = data
  i698.enabled = !!i699[0]
  i698.separateAxes = !!i699[1]
  i698.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i699[2], i698.strengthX)
  i698.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i699[3], i698.strengthY)
  i698.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i699[4], i698.strengthZ)
  i698.strengthXMultiplier = i699[5]
  i698.strengthYMultiplier = i699[6]
  i698.strengthZMultiplier = i699[7]
  i698.frequency = i699[8]
  i698.damping = !!i699[9]
  i698.octaveCount = i699[10]
  i698.octaveMultiplier = i699[11]
  i698.octaveScale = i699[12]
  i698.quality = i699[13]
  i698.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i699[14], i698.scrollSpeed)
  i698.scrollSpeedMultiplier = i699[15]
  i698.remapEnabled = !!i699[16]
  i698.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i699[17], i698.remapX)
  i698.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i699[18], i698.remapY)
  i698.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i699[19], i698.remapZ)
  i698.remapXMultiplier = i699[20]
  i698.remapYMultiplier = i699[21]
  i698.remapZMultiplier = i699[22]
  i698.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i699[23], i698.positionAmount)
  i698.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i699[24], i698.rotationAmount)
  i698.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i699[25], i698.sizeAmount)
  return i698
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i700 = root || new pc.ParticleSystemInheritVelocity()
  var i701 = data
  i700.enabled = !!i701[0]
  i700.mode = i701[1]
  i700.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i701[2], i700.curve)
  i700.curveMultiplier = i701[3]
  return i700
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i702 = root || new pc.ParticleSystemForceOverLifetime()
  var i703 = data
  i702.enabled = !!i703[0]
  i702.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i703[1], i702.x)
  i702.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i703[2], i702.y)
  i702.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i703[3], i702.z)
  i702.xMultiplier = i703[4]
  i702.yMultiplier = i703[5]
  i702.zMultiplier = i703[6]
  i702.space = i703[7]
  i702.randomized = !!i703[8]
  return i702
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i704 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i705 = data
  i704.enabled = !!i705[0]
  i704.limit = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i705[1], i704.limit)
  i704.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i705[2], i704.limitX)
  i704.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i705[3], i704.limitY)
  i704.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i705[4], i704.limitZ)
  i704.limitMultiplier = i705[5]
  i704.limitXMultiplier = i705[6]
  i704.limitYMultiplier = i705[7]
  i704.limitZMultiplier = i705[8]
  i704.dampen = i705[9]
  i704.separateAxes = !!i705[10]
  i704.space = i705[11]
  i704.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i705[12], i704.drag)
  i704.dragMultiplier = i705[13]
  i704.multiplyDragByParticleSize = !!i705[14]
  i704.multiplyDragByParticleVelocity = !!i705[15]
  return i704
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i706 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i707 = data
  i706.enabled = !!i707[0]
  request.r(i707[1], i707[2], 0, i706, 'sharedMaterial')
  var i709 = i707[3]
  var i708 = []
  for(var i = 0; i < i709.length; i += 2) {
  request.r(i709[i + 0], i709[i + 1], 2, i708, '')
  }
  i706.sharedMaterials = i708
  i706.receiveShadows = !!i707[4]
  i706.shadowCastingMode = i707[5]
  i706.sortingLayerID = i707[6]
  i706.sortingOrder = i707[7]
  i706.lightmapIndex = i707[8]
  i706.lightmapSceneIndex = i707[9]
  i706.lightmapScaleOffset = new pc.Vec4( i707[10], i707[11], i707[12], i707[13] )
  i706.lightProbeUsage = i707[14]
  i706.reflectionProbeUsage = i707[15]
  request.r(i707[16], i707[17], 0, i706, 'mesh')
  i706.meshCount = i707[18]
  i706.activeVertexStreamsCount = i707[19]
  i706.alignment = i707[20]
  i706.renderMode = i707[21]
  i706.sortMode = i707[22]
  i706.lengthScale = i707[23]
  i706.velocityScale = i707[24]
  i706.cameraVelocityScale = i707[25]
  i706.normalDirection = i707[26]
  i706.sortingFudge = i707[27]
  i706.minParticleSize = i707[28]
  i706.maxParticleSize = i707[29]
  i706.pivot = new pc.Vec3( i707[30], i707[31], i707[32] )
  request.r(i707[33], i707[34], 0, i706, 'trailMaterial')
  return i706
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i710 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i711 = data
  i710.enabled = !!i711[0]
  request.r(i711[1], i711[2], 0, i710, 'sharedMaterial')
  var i713 = i711[3]
  var i712 = []
  for(var i = 0; i < i713.length; i += 2) {
  request.r(i713[i + 0], i713[i + 1], 2, i712, '')
  }
  i710.sharedMaterials = i712
  i710.receiveShadows = !!i711[4]
  i710.shadowCastingMode = i711[5]
  i710.sortingLayerID = i711[6]
  i710.sortingOrder = i711[7]
  i710.lightmapIndex = i711[8]
  i710.lightmapSceneIndex = i711[9]
  i710.lightmapScaleOffset = new pc.Vec4( i711[10], i711[11], i711[12], i711[13] )
  i710.lightProbeUsage = i711[14]
  i710.reflectionProbeUsage = i711[15]
  i710.color = new pc.Color(i711[16], i711[17], i711[18], i711[19])
  request.r(i711[20], i711[21], 0, i710, 'sprite')
  i710.flipX = !!i711[22]
  i710.flipY = !!i711[23]
  i710.drawMode = i711[24]
  i710.size = new pc.Vec2( i711[25], i711[26] )
  i710.tileMode = i711[27]
  i710.adaptiveModeThreshold = i711[28]
  i710.maskInteraction = i711[29]
  i710.spriteSortPoint = i711[30]
  return i710
}

Deserializers["Decorate"] = function (request, data, root) {
  var i714 = root || request.c( 'Decorate' )
  var i715 = data
  var i717 = i715[0]
  var i716 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.GameObject')))
  for(var i = 0; i < i717.length; i += 2) {
  request.r(i717[i + 0], i717[i + 1], 1, i716, '')
  }
  i714.items = i716
  i714.id = i715[1]
  return i714
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animation"] = function (request, data, root) {
  var i720 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animation' )
  var i721 = data
  i720.playAutomatically = !!i721[0]
  request.r(i721[1], i721[2], 0, i720, 'clip')
  var i723 = i721[3]
  var i722 = []
  for(var i = 0; i < i723.length; i += 2) {
  request.r(i723[i + 0], i723[i + 1], 2, i722, '')
  }
  i720.clips = i722
  i720.enabled = !!i721[4]
  return i720
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i726 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i727 = data
  i726.name = i727[0]
  i726.halfPrecision = !!i727[1]
  i726.vertexCount = i727[2]
  i726.aabb = i727[3]
  var i729 = i727[4]
  var i728 = []
  for(var i = 0; i < i729.length; i += 1) {
    i728.push( !!i729[i + 0] );
  }
  i726.streams = i728
  i726.vertices = i727[5]
  var i731 = i727[6]
  var i730 = []
  for(var i = 0; i < i731.length; i += 1) {
    i730.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i731[i + 0]) );
  }
  i726.subMeshes = i730
  var i733 = i727[7]
  var i732 = []
  for(var i = 0; i < i733.length; i += 16) {
    i732.push( new pc.Mat4().setData(i733[i + 0], i733[i + 1], i733[i + 2], i733[i + 3],  i733[i + 4], i733[i + 5], i733[i + 6], i733[i + 7],  i733[i + 8], i733[i + 9], i733[i + 10], i733[i + 11],  i733[i + 12], i733[i + 13], i733[i + 14], i733[i + 15]) );
  }
  i726.bindposes = i732
  var i735 = i727[8]
  var i734 = []
  for(var i = 0; i < i735.length; i += 1) {
    i734.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i735[i + 0]) );
  }
  i726.blendShapes = i734
  return i726
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i740 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i741 = data
  i740.triangles = i741[0]
  return i740
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i746 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i747 = data
  i746.name = i747[0]
  var i749 = i747[1]
  var i748 = []
  for(var i = 0; i < i749.length; i += 1) {
    i748.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i749[i + 0]) );
  }
  i746.frames = i748
  return i746
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Cubemap"] = function (request, data, root) {
  var i750 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Cubemap' )
  var i751 = data
  i750.name = i751[0]
  i750.atlasId = i751[1]
  i750.mipmapCount = i751[2]
  i750.hdr = !!i751[3]
  i750.size = i751[4]
  i750.anisoLevel = i751[5]
  i750.filterMode = i751[6]
  i750.wrapMode = i751[7]
  var i753 = i751[8]
  var i752 = []
  for(var i = 0; i < i753.length; i += 4) {
    i752.push( UnityEngine.Rect.MinMaxRect(i753[i + 0], i753[i + 1], i753[i + 2], i753[i + 3]) );
  }
  i750.rects = i752
  return i750
}

Deserializers["LevelManager"] = function (request, data, root) {
  var i756 = root || request.c( 'LevelManager' )
  var i757 = data
  var i759 = i757[0]
  var i758 = []
  for(var i = 0; i < i759.length; i += 2) {
  request.r(i759[i + 0], i759[i + 1], 2, i758, '')
  }
  i756.tubePrefabs = i758
  request.r(i757[1], i757[2], 0, i756, 'tapObj')
  var i761 = i757[3]
  var i760 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Color')))
  for(var i = 0; i < i761.length; i += 4) {
    i760.add(new pc.Color(i761[i + 0], i761[i + 1], i761[i + 2], i761[i + 3]));
  }
  i756.TubeColors = i760
  var i763 = i757[4]
  var i762 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Texture2D')))
  for(var i = 0; i < i763.length; i += 2) {
  request.r(i763[i + 0], i763[i + 1], 1, i762, '')
  }
  i756.TubeTexture = i762
  i756.layerMask = UnityEngine.LayerMask.FromIntegerValue( i757[5] )
  request.r(i757[6], i757[7], 0, i756, 'selectTube')
  var i765 = i757[8]
  var i764 = new (System.Collections.Generic.List$1(Bridge.ns('Tube')))
  for(var i = 0; i < i765.length; i += 2) {
  request.r(i765[i + 0], i765[i + 1], 1, i764, '')
  }
  i756.tubes = i764
  i756.leveData = request.d('LevelData', i757[9], i756.leveData)
  i756.isMove = !!i757[10]
  i756.isAddTube = !!i757[11]
  request.r(i757[12], i757[13], 0, i756, 'stepBack')
  request.r(i757[14], i757[15], 0, i756, 'LevelText')
  i756.direct = i757[16]
  return i756
}

Deserializers["LevelData"] = function (request, data, root) {
  var i774 = root || request.c( 'LevelData' )
  var i775 = data
  var i777 = i775[0]
  var i776 = []
  for(var i = 0; i < i777.length; i += 1) {
    i776.push( request.d('Data', i777[i + 0]) );
  }
  i774.requireData = i776
  var i779 = i775[1]
  var i778 = []
  for(var i = 0; i < i779.length; i += 1) {
    i778.push( request.d('Data', i779[i + 0]) );
  }
  i774.data = i778
  return i774
}

Deserializers["Data"] = function (request, data, root) {
  var i782 = root || request.c( 'Data' )
  var i783 = data
  i782._items = i783[0]
  return i782
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i784 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i785 = data
  request.r(i785[0], i785[1], 0, i784, 'animatorController')
  i784.updateMode = i785[2]
  var i787 = i785[3]
  var i786 = []
  for(var i = 0; i < i787.length; i += 2) {
  request.r(i787[i + 0], i787[i + 1], 2, i786, '')
  }
  i784.humanBones = i786
  i784.enabled = !!i785[4]
  return i784
}

Deserializers["GameManager"] = function (request, data, root) {
  var i790 = root || request.c( 'GameManager' )
  var i791 = data
  request.r(i791[0], i791[1], 0, i790, 'fxWin')
  i790.IsWin = !!i791[2]
  i790.IsWait = !!i791[3]
  i790.isInGame = !!i791[4]
  return i790
}

Deserializers["SoundManager"] = function (request, data, root) {
  var i792 = root || request.c( 'SoundManager' )
  var i793 = data
  request.r(i793[0], i793[1], 0, i792, 'audioSource')
  request.r(i793[2], i793[3], 0, i792, 'soundSource')
  var i795 = i793[4]
  var i794 = []
  for(var i = 0; i < i795.length; i += 2) {
  request.r(i795[i + 0], i795[i + 1], 2, i794, '')
  }
  i792.clips = i794
  return i792
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i798 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i799 = data
  request.r(i799[0], i799[1], 0, i798, 'clip')
  i798.playOnAwake = !!i799[2]
  i798.loop = !!i799[3]
  i798.enabled = !!i799[4]
  return i798
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i800 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i801 = data
  i800.pivot = new pc.Vec2( i801[0], i801[1] )
  i800.anchorMin = new pc.Vec2( i801[2], i801[3] )
  i800.anchorMax = new pc.Vec2( i801[4], i801[5] )
  i800.sizeDelta = new pc.Vec2( i801[6], i801[7] )
  i800.anchoredPosition3D = new pc.Vec3( i801[8], i801[9], i801[10] )
  i800.rotation = new pc.Quat(i801[11], i801[12], i801[13], i801[14])
  i800.scale = new pc.Vec3( i801[15], i801[16], i801[17] )
  return i800
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i802 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i803 = data
  i802.enabled = !!i803[0]
  i802.planeDistance = i803[1]
  i802.referencePixelsPerUnit = i803[2]
  i802.isFallbackOverlay = !!i803[3]
  i802.renderMode = i803[4]
  i802.renderOrder = i803[5]
  i802.sortingLayerName = i803[6]
  i802.sortingOrder = i803[7]
  i802.scaleFactor = i803[8]
  request.r(i803[9], i803[10], 0, i802, 'worldCamera')
  i802.overrideSorting = !!i803[11]
  i802.pixelPerfect = !!i803[12]
  i802.targetDisplay = i803[13]
  i802.overridePixelPerfect = !!i803[14]
  return i802
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i804 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i805 = data
  i804.m_UiScaleMode = i805[0]
  i804.m_ReferencePixelsPerUnit = i805[1]
  i804.m_ScaleFactor = i805[2]
  i804.m_ReferenceResolution = new pc.Vec2( i805[3], i805[4] )
  i804.m_ScreenMatchMode = i805[5]
  i804.m_MatchWidthOrHeight = i805[6]
  i804.m_PhysicalUnit = i805[7]
  i804.m_FallbackScreenDPI = i805[8]
  i804.m_DefaultSpriteDPI = i805[9]
  i804.m_DynamicPixelsPerUnit = i805[10]
  return i804
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i806 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i807 = data
  i806.m_IgnoreReversedGraphics = !!i807[0]
  i806.m_BlockingObjects = i807[1]
  i806.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i807[2] )
  return i806
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i808 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i809 = data
  i808.cullTransparentMesh = !!i809[0]
  return i808
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i810 = root || request.c( 'UnityEngine.UI.Image' )
  var i811 = data
  request.r(i811[0], i811[1], 0, i810, 'm_Sprite')
  i810.m_Type = i811[2]
  i810.m_PreserveAspect = !!i811[3]
  i810.m_FillCenter = !!i811[4]
  i810.m_FillMethod = i811[5]
  i810.m_FillAmount = i811[6]
  i810.m_FillClockwise = !!i811[7]
  i810.m_FillOrigin = i811[8]
  i810.m_UseSpriteMesh = !!i811[9]
  i810.m_PixelsPerUnitMultiplier = i811[10]
  request.r(i811[11], i811[12], 0, i810, 'm_Material')
  i810.m_Maskable = !!i811[13]
  i810.m_Color = new pc.Color(i811[14], i811[15], i811[16], i811[17])
  i810.m_RaycastTarget = !!i811[18]
  return i810
}

Deserializers["UnityEngine.UI.Text"] = function (request, data, root) {
  var i812 = root || request.c( 'UnityEngine.UI.Text' )
  var i813 = data
  i812.m_FontData = request.d('UnityEngine.UI.FontData', i813[0], i812.m_FontData)
  i812.m_Text = i813[1]
  request.r(i813[2], i813[3], 0, i812, 'm_Material')
  i812.m_Maskable = !!i813[4]
  i812.m_Color = new pc.Color(i813[5], i813[6], i813[7], i813[8])
  i812.m_RaycastTarget = !!i813[9]
  return i812
}

Deserializers["UnityEngine.UI.FontData"] = function (request, data, root) {
  var i814 = root || request.c( 'UnityEngine.UI.FontData' )
  var i815 = data
  request.r(i815[0], i815[1], 0, i814, 'm_Font')
  i814.m_FontSize = i815[2]
  i814.m_FontStyle = i815[3]
  i814.m_BestFit = !!i815[4]
  i814.m_MinSize = i815[5]
  i814.m_MaxSize = i815[6]
  i814.m_Alignment = i815[7]
  i814.m_AlignByGeometry = !!i815[8]
  i814.m_RichText = !!i815[9]
  i814.m_HorizontalOverflow = i815[10]
  i814.m_VerticalOverflow = i815[11]
  i814.m_LineSpacing = i815[12]
  return i814
}

Deserializers["MainMenu"] = function (request, data, root) {
  var i816 = root || request.c( 'MainMenu' )
  var i817 = data
  request.r(i817[0], i817[1], 0, i816, 'gotoStore')
  request.r(i817[2], i817[3], 0, i816, 'btnMenu')
  request.r(i817[4], i817[5], 0, i816, 'btnRestart')
  request.r(i817[6], i817[7], 0, i816, 'btnUndo')
  request.r(i817[8], i817[9], 0, i816, 'btnAddTube')
  request.r(i817[10], i817[11], 0, i816, 'btnCloseMenu')
  request.r(i817[12], i817[13], 0, i816, 'winObjV')
  request.r(i817[14], i817[15], 0, i816, 'menuObj')
  request.r(i817[16], i817[17], 0, i816, 'popupLoadingGame')
  request.r(i817[18], i817[19], 0, i816, 'txtLvPopupWin')
  request.r(i817[20], i817[21], 0, i816, 'btnInviteFri')
  request.r(i817[22], i817[23], 0, i816, 'btnShareGame')
  request.r(i817[24], i817[25], 0, i816, 'btnInviteMenu')
  request.r(i817[26], i817[27], 0, i816, 'btnShareMenu')
  i816.isPopupOpen = !!i817[28]
  return i816
}

Deserializers["UnityEngine.UI.HorizontalLayoutGroup"] = function (request, data, root) {
  var i818 = root || request.c( 'UnityEngine.UI.HorizontalLayoutGroup' )
  var i819 = data
  i818.m_Spacing = i819[0]
  i818.m_ChildForceExpandWidth = !!i819[1]
  i818.m_ChildForceExpandHeight = !!i819[2]
  i818.m_ChildControlWidth = !!i819[3]
  i818.m_ChildControlHeight = !!i819[4]
  i818.m_ChildScaleWidth = !!i819[5]
  i818.m_ChildScaleHeight = !!i819[6]
  i818.m_Padding = UnityEngine.RectOffset.FromPaddings(i819[7], i819[8], i819[9], i819[10])
  i818.m_ChildAlignment = i819[11]
  return i818
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i820 = root || request.c( 'UnityEngine.UI.Button' )
  var i821 = data
  i820.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i821[0], i820.m_OnClick)
  i820.m_Navigation = request.d('UnityEngine.UI.Navigation', i821[1], i820.m_Navigation)
  i820.m_Transition = i821[2]
  i820.m_Colors = request.d('UnityEngine.UI.ColorBlock', i821[3], i820.m_Colors)
  i820.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i821[4], i820.m_SpriteState)
  i820.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i821[5], i820.m_AnimationTriggers)
  i820.m_Interactable = !!i821[6]
  request.r(i821[7], i821[8], 0, i820, 'm_TargetGraphic')
  return i820
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i822 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i823 = data
  i822.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i823[0], i822.m_PersistentCalls)
  return i822
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i824 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i825 = data
  var i827 = i825[0]
  var i826 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i827.length; i += 1) {
    i826.add(request.d('UnityEngine.Events.PersistentCall', i827[i + 0]));
  }
  i824.m_Calls = i826
  return i824
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i830 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i831 = data
  request.r(i831[0], i831[1], 0, i830, 'm_Target')
  i830.m_MethodName = i831[2]
  i830.m_Mode = i831[3]
  i830.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i831[4], i830.m_Arguments)
  i830.m_CallState = i831[5]
  return i830
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i832 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i833 = data
  i832.m_Mode = i833[0]
  request.r(i833[1], i833[2], 0, i832, 'm_SelectOnUp')
  request.r(i833[3], i833[4], 0, i832, 'm_SelectOnDown')
  request.r(i833[5], i833[6], 0, i832, 'm_SelectOnLeft')
  request.r(i833[7], i833[8], 0, i832, 'm_SelectOnRight')
  return i832
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i834 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i835 = data
  i834.m_NormalColor = new pc.Color(i835[0], i835[1], i835[2], i835[3])
  i834.m_HighlightedColor = new pc.Color(i835[4], i835[5], i835[6], i835[7])
  i834.m_PressedColor = new pc.Color(i835[8], i835[9], i835[10], i835[11])
  i834.m_SelectedColor = new pc.Color(i835[12], i835[13], i835[14], i835[15])
  i834.m_DisabledColor = new pc.Color(i835[16], i835[17], i835[18], i835[19])
  i834.m_ColorMultiplier = i835[20]
  i834.m_FadeDuration = i835[21]
  return i834
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i836 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i837 = data
  request.r(i837[0], i837[1], 0, i836, 'm_HighlightedSprite')
  request.r(i837[2], i837[3], 0, i836, 'm_PressedSprite')
  request.r(i837[4], i837[5], 0, i836, 'm_SelectedSprite')
  request.r(i837[6], i837[7], 0, i836, 'm_DisabledSprite')
  return i836
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i838 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i839 = data
  i838.m_NormalTrigger = i839[0]
  i838.m_HighlightedTrigger = i839[1]
  i838.m_PressedTrigger = i839[2]
  i838.m_SelectedTrigger = i839[3]
  i838.m_DisabledTrigger = i839[4]
  return i838
}

Deserializers["MoneyFx"] = function (request, data, root) {
  var i840 = root || request.c( 'MoneyFx' )
  var i841 = data
  request.r(i841[0], i841[1], 0, i840, 'endPos')
  request.r(i841[2], i841[3], 0, i840, 'moneyText')
  request.r(i841[4], i841[5], 0, i840, 'moneyTextRw')
  i840.moveTime = i841[6]
  i840.maxDistance = i841[7]
  return i840
}

Deserializers["MenuButtonManager"] = function (request, data, root) {
  var i842 = root || request.c( 'MenuButtonManager' )
  var i843 = data
  request.r(i843[0], i843[1], 0, i842, 'soundButton')
  request.r(i843[2], i843[3], 0, i842, 'musicButton')
  request.r(i843[4], i843[5], 0, i842, 'rateButton')
  request.r(i843[6], i843[7], 0, i842, 'noADSButton')
  return i842
}

Deserializers["UnityEngine.UI.VerticalLayoutGroup"] = function (request, data, root) {
  var i844 = root || request.c( 'UnityEngine.UI.VerticalLayoutGroup' )
  var i845 = data
  i844.m_Spacing = i845[0]
  i844.m_ChildForceExpandWidth = !!i845[1]
  i844.m_ChildForceExpandHeight = !!i845[2]
  i844.m_ChildControlWidth = !!i845[3]
  i844.m_ChildControlHeight = !!i845[4]
  i844.m_ChildScaleWidth = !!i845[5]
  i844.m_ChildScaleHeight = !!i845[6]
  i844.m_Padding = UnityEngine.RectOffset.FromPaddings(i845[7], i845[8], i845[9], i845[10])
  i844.m_ChildAlignment = i845[11]
  return i844
}

Deserializers["ChangeImage"] = function (request, data, root) {
  var i846 = root || request.c( 'ChangeImage' )
  var i847 = data
  var i849 = i847[0]
  var i848 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Sprite')))
  for(var i = 0; i < i849.length; i += 2) {
  request.r(i849[i + 0], i849[i + 1], 1, i848, '')
  }
  i846.listIcon = i848
  var i851 = i847[1]
  var i850 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Sprite')))
  for(var i = 0; i < i851.length; i += 2) {
  request.r(i851[i + 0], i851[i + 1], 1, i850, '')
  }
  i846.listbg = i850
  return i846
}

Deserializers["xgame.sdk.AdsHelper"] = function (request, data, root) {
  var i854 = root || request.c( 'xgame.sdk.AdsHelper' )
  var i855 = data
  i854._isFullLoading = !!i855[0]
  i854._isFullLoaded = !!i855[1]
  i854.isFullLoadWhenClose = !!i855[2]
  i854._isGiftLoading = !!i855[3]
  i854._isGiftLoaded = !!i855[4]
  i854.isGiftLoadWhenClose = !!i855[5]
  return i854
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i856 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i857 = data
  i856.name = i857[0]
  i856.index = i857[1]
  i856.startup = !!i857[2]
  return i856
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i858 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i859 = data
  i858.ambientIntensity = i859[0]
  i858.reflectionIntensity = i859[1]
  i858.ambientMode = i859[2]
  i858.ambientLight = new pc.Color(i859[3], i859[4], i859[5], i859[6])
  i858.ambientSkyColor = new pc.Color(i859[7], i859[8], i859[9], i859[10])
  i858.ambientGroundColor = new pc.Color(i859[11], i859[12], i859[13], i859[14])
  i858.ambientEquatorColor = new pc.Color(i859[15], i859[16], i859[17], i859[18])
  i858.fogColor = new pc.Color(i859[19], i859[20], i859[21], i859[22])
  i858.fogEndDistance = i859[23]
  i858.fogStartDistance = i859[24]
  i858.fogDensity = i859[25]
  i858.fog = !!i859[26]
  request.r(i859[27], i859[28], 0, i858, 'skybox')
  i858.fogMode = i859[29]
  var i861 = i859[30]
  var i860 = []
  for(var i = 0; i < i861.length; i += 1) {
    i860.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i861[i + 0]) );
  }
  i858.lightmaps = i860
  i858.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i859[31], i858.lightProbes)
  i858.lightmapsMode = i859[32]
  i858.environmentLightingMode = i859[33]
  i858.ambientProbe = new pc.SphericalHarmonicsL2(i859[34])
  request.r(i859[35], i859[36], 0, i858, 'customReflection')
  request.r(i859[37], i859[38], 0, i858, 'defaultReflection')
  i858.defaultReflectionMode = i859[39]
  i858.defaultReflectionResolution = i859[40]
  i858.sunLightObjectId = i859[41]
  i858.pixelLightCount = i859[42]
  i858.defaultReflectionHDR = !!i859[43]
  i858.hasLightDataAsset = !!i859[44]
  i858.hasManualGenerate = !!i859[45]
  return i858
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i864 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i865 = data
  request.r(i865[0], i865[1], 0, i864, 'lightmapColor')
  request.r(i865[2], i865[3], 0, i864, 'lightmapDirection')
  return i864
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i866 = root || new UnityEngine.LightProbes()
  var i867 = data
  return i866
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i874 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i875 = data
  i874.name = i875[0]
  var i877 = i875[1]
  var i876 = []
  for(var i = 0; i < i877.length; i += 1) {
    i876.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i877[i + 0]) );
  }
  i874.passes = i876
  var i879 = i875[2]
  var i878 = []
  for(var i = 0; i < i879.length; i += 1) {
    i878.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i879[i + 0]) );
  }
  i874.defaultParameterValues = i878
  return i874
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i882 = root || new pc.UnityShaderPass()
  var i883 = data
  i882.passType = i883[0]
  i882.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i883[1], i882.zTest)
  i882.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i883[2], i882.zWrite)
  i882.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i883[3], i882.culling)
  i882.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i883[4], i882.blending)
  i882.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i883[5], i882.alphaBlending)
  i882.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i883[6], i882.colorWriteMask)
  i882.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i883[7], i882.offsetUnits)
  i882.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i883[8], i882.offsetFactor)
  i882.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i883[9], i882.stencilRef)
  i882.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i883[10], i882.stencilReadMask)
  i882.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i883[11], i882.stencilWriteMask)
  i882.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i883[12], i882.stencilOp)
  i882.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i883[13], i882.stencilOpFront)
  i882.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i883[14], i882.stencilOpBack)
  var i885 = i883[15]
  var i884 = []
  for(var i = 0; i < i885.length; i += 1) {
    i884.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i885[i + 0]) );
  }
  i882.tags = i884
  var i887 = i883[16]
  var i886 = []
  for(var i = 0; i < i887.length; i += 1) {
    i886.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i887[i + 0]) );
  }
  i882.variants = i886
  return i882
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i888 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i889 = data
  i888.val = i889[0]
  i888.name = i889[1]
  return i888
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i890 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i891 = data
  i890.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i891[0], i890.src)
  i890.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i891[1], i890.dst)
  i890.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i891[2], i890.op)
  return i890
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i892 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i893 = data
  i892.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i893[0], i892.pass)
  i892.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i893[1], i892.fail)
  i892.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i893[2], i892.zFail)
  i892.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i893[3], i892.comp)
  return i892
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i896 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i897 = data
  i896.name = i897[0]
  i896.value = i897[1]
  return i896
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i900 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i901 = data
  var i903 = i901[0]
  var i902 = []
  for(var i = 0; i < i903.length; i += 1) {
    i902.push( i903[i + 0] );
  }
  i900.keywords = i902
  i900.vertexProgram = i901[1]
  i900.fragmentProgram = i901[2]
  return i900
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i908 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i909 = data
  i908.name = i909[0]
  i908.type = i909[1]
  i908.value = new pc.Vec4( i909[2], i909[3], i909[4], i909[5] )
  i908.textureValue = i909[6]
  return i908
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i910 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i911 = data
  i910.name = i911[0]
  request.r(i911[1], i911[2], 0, i910, 'texture')
  i910.aabb = i911[3]
  i910.vertices = i911[4]
  i910.triangles = i911[5]
  i910.textureRect = UnityEngine.Rect.MinMaxRect(i911[6], i911[7], i911[8], i911[9])
  i910.packedRect = UnityEngine.Rect.MinMaxRect(i911[10], i911[11], i911[12], i911[13])
  i910.border = new pc.Vec4( i911[14], i911[15], i911[16], i911[17] )
  i910.transparency = i911[18]
  i910.bounds = i911[19]
  i910.pixelsPerUnit = i911[20]
  i910.textureWidth = i911[21]
  i910.textureHeight = i911[22]
  i910.nativeSize = new pc.Vec2( i911[23], i911[24] )
  i910.pivot = new pc.Vec2( i911[25], i911[26] )
  i910.textureRectOffset = new pc.Vec2( i911[27], i911[28] )
  return i910
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i912 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i913 = data
  i912.name = i913[0]
  return i912
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i914 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i915 = data
  i914.name = i915[0]
  i914.wrapMode = i915[1]
  i914.isLooping = !!i915[2]
  i914.length = i915[3]
  var i917 = i915[4]
  var i916 = []
  for(var i = 0; i < i917.length; i += 1) {
    i916.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i917[i + 0]) );
  }
  i914.curves = i916
  var i919 = i915[5]
  var i918 = []
  for(var i = 0; i < i919.length; i += 1) {
    i918.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i919[i + 0]) );
  }
  i914.events = i918
  i914.halfPrecision = !!i915[6]
  return i914
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i922 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i923 = data
  i922.path = i923[0]
  i922.componentType = i923[1]
  i922.property = i923[2]
  i922.keys = i923[3]
  var i925 = i923[4]
  var i924 = []
  for(var i = 0; i < i925.length; i += 1) {
    i924.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i925[i + 0]) );
  }
  i922.objectReferenceKeys = i924
  return i922
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i928 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i929 = data
  i928.time = i929[0]
  request.r(i929[1], i929[2], 0, i928, 'value')
  return i928
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i932 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i933 = data
  i932.functionName = i933[0]
  i932.floatParameter = i933[1]
  i932.intParameter = i933[2]
  i932.stringParameter = i933[3]
  request.r(i933[4], i933[5], 0, i932, 'objectReferenceParameter')
  i932.time = i933[6]
  return i932
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i934 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i935 = data
  i934.name = i935[0]
  i934.ascent = i935[1]
  i934.originalLineHeight = i935[2]
  i934.fontSize = i935[3]
  var i937 = i935[4]
  var i936 = []
  for(var i = 0; i < i937.length; i += 1) {
    i936.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i937[i + 0]) );
  }
  i934.characterInfo = i936
  request.r(i935[5], i935[6], 0, i934, 'texture')
  i934.originalFontSize = i935[7]
  return i934
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i940 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i941 = data
  i940.index = i941[0]
  i940.advance = i941[1]
  i940.bearing = i941[2]
  i940.glyphWidth = i941[3]
  i940.glyphHeight = i941[4]
  i940.minX = i941[5]
  i940.maxX = i941[6]
  i940.minY = i941[7]
  i940.maxY = i941[8]
  i940.uvBottomLeftX = i941[9]
  i940.uvBottomLeftY = i941[10]
  i940.uvBottomRightX = i941[11]
  i940.uvBottomRightY = i941[12]
  i940.uvTopLeftX = i941[13]
  i940.uvTopLeftY = i941[14]
  i940.uvTopRightX = i941[15]
  i940.uvTopRightY = i941[16]
  return i940
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i942 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i943 = data
  i942.name = i943[0]
  var i945 = i943[1]
  var i944 = []
  for(var i = 0; i < i945.length; i += 1) {
    i944.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i945[i + 0]) );
  }
  i942.states = i944
  var i947 = i943[2]
  var i946 = []
  for(var i = 0; i < i947.length; i += 1) {
    i946.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i947[i + 0]) );
  }
  i942.layers = i946
  var i949 = i943[3]
  var i948 = []
  for(var i = 0; i < i949.length; i += 1) {
    i948.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i949[i + 0]) );
  }
  i942.parameters = i948
  return i942
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i952 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i953 = data
  i952.cycleOffset = i953[0]
  i952.cycleOffsetParameter = i953[1]
  i952.cycleOffsetParameterActive = !!i953[2]
  i952.mirror = !!i953[3]
  i952.mirrorParameter = i953[4]
  i952.mirrorParameterActive = !!i953[5]
  i952.motionId = i953[6]
  i952.nameHash = i953[7]
  i952.fullPathHash = i953[8]
  i952.speed = i953[9]
  i952.speedParameter = i953[10]
  i952.speedParameterActive = !!i953[11]
  i952.tag = i953[12]
  i952.name = i953[13]
  i952.writeDefaultValues = !!i953[14]
  var i955 = i953[15]
  var i954 = []
  for(var i = 0; i < i955.length; i += 1) {
    i954.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i955[i + 0]) );
  }
  i952.transitions = i954
  var i957 = i953[16]
  var i956 = []
  for(var i = 0; i < i957.length; i += 2) {
  request.r(i957[i + 0], i957[i + 1], 2, i956, '')
  }
  i952.behaviours = i956
  return i952
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i960 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i961 = data
  i960.fullPath = i961[0]
  i960.canTransitionToSelf = !!i961[1]
  i960.duration = i961[2]
  i960.exitTime = i961[3]
  i960.hasExitTime = !!i961[4]
  i960.hasFixedDuration = !!i961[5]
  i960.interruptionSource = i961[6]
  i960.offset = i961[7]
  i960.orderedInterruption = !!i961[8]
  i960.destinationStateNameHash = i961[9]
  i960.destinationStateMachineId = i961[10]
  i960.isExit = !!i961[11]
  i960.mute = !!i961[12]
  i960.solo = !!i961[13]
  var i963 = i961[14]
  var i962 = []
  for(var i = 0; i < i963.length; i += 1) {
    i962.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i963[i + 0]) );
  }
  i960.conditions = i962
  return i960
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i968 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i969 = data
  i968.blendingMode = i969[0]
  i968.defaultWeight = i969[1]
  i968.name = i969[2]
  i968.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i969[3], i968.stateMachine)
  return i968
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i970 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i971 = data
  i970.id = i971[0]
  i970.defaultStateNameHash = i971[1]
  var i973 = i971[2]
  var i972 = []
  for(var i = 0; i < i973.length; i += 1) {
    i972.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i973[i + 0]) );
  }
  i970.entryTransitions = i972
  var i975 = i971[3]
  var i974 = []
  for(var i = 0; i < i975.length; i += 1) {
    i974.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i975[i + 0]) );
  }
  i970.anyStateTransitions = i974
  return i970
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i978 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i979 = data
  i978.destinationStateNameHash = i979[0]
  i978.destinationStateMachineId = i979[1]
  i978.isExit = !!i979[2]
  i978.mute = !!i979[3]
  i978.solo = !!i979[4]
  var i981 = i979[5]
  var i980 = []
  for(var i = 0; i < i981.length; i += 1) {
    i980.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i981[i + 0]) );
  }
  i978.conditions = i980
  return i978
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i984 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i985 = data
  i984.defaultBool = !!i985[0]
  i984.defaultFloat = i985[1]
  i984.defaultInt = i985[2]
  i984.name = i985[3]
  i984.nameHash = i985[4]
  i984.type = i985[5]
  return i984
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i986 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i987 = data
  i986.name = i987[0]
  i986.bytes64 = i987[1]
  i986.data = i987[2]
  return i986
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i988 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i989 = data
  var i991 = i989[0]
  var i990 = []
  for(var i = 0; i < i991.length; i += 1) {
    i990.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i991[i + 0]) );
  }
  i988.files = i990
  i988.componentToPrefabIds = i989[1]
  return i988
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i994 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i995 = data
  i994.path = i995[0]
  request.r(i995[1], i995[2], 0, i994, 'unityObject')
  return i994
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i996 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i997 = data
  var i999 = i997[0]
  var i998 = []
  for(var i = 0; i < i999.length; i += 1) {
    i998.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i999[i + 0]) );
  }
  i996.scriptsExecutionOrder = i998
  var i1001 = i997[1]
  var i1000 = []
  for(var i = 0; i < i1001.length; i += 1) {
    i1000.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i1001[i + 0]) );
  }
  i996.sortingLayers = i1000
  var i1003 = i997[2]
  var i1002 = []
  for(var i = 0; i < i1003.length; i += 1) {
    i1002.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i1003[i + 0]) );
  }
  i996.cullingLayers = i1002
  i996.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i997[3], i996.timeSettings)
  i996.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i997[4], i996.physicsSettings)
  i996.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i997[5], i996.physics2DSettings)
  i996.removeShadows = !!i997[6]
  i996.autoInstantiatePrefabs = !!i997[7]
  i996.enableAutoInstancing = !!i997[8]
  i996.lightmapEncodingQuality = i997[9]
  i996.desiredColorSpace = i997[10]
  return i996
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i1006 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i1007 = data
  i1006.name = i1007[0]
  i1006.value = i1007[1]
  return i1006
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i1010 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i1011 = data
  i1010.id = i1011[0]
  i1010.name = i1011[1]
  i1010.value = i1011[2]
  return i1010
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i1014 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i1015 = data
  i1014.id = i1015[0]
  i1014.name = i1015[1]
  return i1014
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i1016 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i1017 = data
  i1016.fixedDeltaTime = i1017[0]
  i1016.maximumDeltaTime = i1017[1]
  i1016.timeScale = i1017[2]
  i1016.maximumParticleTimestep = i1017[3]
  return i1016
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i1018 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i1019 = data
  i1018.gravity = new pc.Vec3( i1019[0], i1019[1], i1019[2] )
  i1018.defaultSolverIterations = i1019[3]
  i1018.autoSyncTransforms = !!i1019[4]
  i1018.autoSimulation = !!i1019[5]
  var i1021 = i1019[6]
  var i1020 = []
  for(var i = 0; i < i1021.length; i += 1) {
    i1020.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i1021[i + 0]) );
  }
  i1018.collisionMatrix = i1020
  return i1018
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i1024 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i1025 = data
  i1024.enabled = !!i1025[0]
  i1024.layerId = i1025[1]
  i1024.otherLayerId = i1025[2]
  return i1024
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i1026 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i1027 = data
  request.r(i1027[0], i1027[1], 0, i1026, 'material')
  i1026.gravity = new pc.Vec2( i1027[2], i1027[3] )
  i1026.positionIterations = i1027[4]
  i1026.velocityIterations = i1027[5]
  i1026.velocityThreshold = i1027[6]
  i1026.maxLinearCorrection = i1027[7]
  i1026.maxAngularCorrection = i1027[8]
  i1026.maxTranslationSpeed = i1027[9]
  i1026.maxRotationSpeed = i1027[10]
  i1026.timeToSleep = i1027[11]
  i1026.linearSleepTolerance = i1027[12]
  i1026.angularSleepTolerance = i1027[13]
  i1026.defaultContactOffset = i1027[14]
  i1026.autoSimulation = !!i1027[15]
  i1026.queriesHitTriggers = !!i1027[16]
  i1026.queriesStartInColliders = !!i1027[17]
  i1026.callbacksOnDisable = !!i1027[18]
  i1026.reuseCollisionCallbacks = !!i1027[19]
  i1026.autoSyncTransforms = !!i1027[20]
  var i1029 = i1027[21]
  var i1028 = []
  for(var i = 0; i < i1029.length; i += 1) {
    i1028.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i1029[i + 0]) );
  }
  i1026.collisionMatrix = i1028
  return i1026
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i1032 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i1033 = data
  i1032.enabled = !!i1033[0]
  i1032.layerId = i1033[1]
  i1032.otherLayerId = i1033[2]
  return i1032
}

Deserializers["Luna.Replay.Settings.Resolution"] = function (request, data, root) {
  var i1038 = root || request.c( 'Luna.Replay.Settings.Resolution' )
  var i1039 = data
  i1038.width = i1039[0]
  i1038.height = i1039[1]
  i1038.scalingStrategy = i1039[2]
  i1038.scaleOptions = request.d('Luna.Replay.Recording.DefaultScalerOptions', i1039[3], i1038.scaleOptions)
  i1038.separateOptionsForUIInput = !!i1039[4]
  i1038.uiScaleOptions = request.d('Luna.Replay.Recording.DefaultScalerOptions', i1039[5], i1038.uiScaleOptions)
  i1038.aspectRatioHandling = i1039[6]
  i1038.videoBitrate = i1039[7]
  i1038.audioBitrate = i1039[8]
  return i1038
}

Deserializers["Luna.Replay.Playground.LunaPlaygroundField"] = function (request, data, root) {
  var i1042 = root || request.c( 'Luna.Replay.Playground.LunaPlaygroundField' )
  var i1043 = data
  i1042.ownerTypeName = i1043[0]
  i1042.isSerializationCallbackImplemented = !!i1043[1]
  i1042.fieldName = i1043[2]
  i1042.playgroundValue = request.d('Luna.Replay.Playground.FieldValue', i1043[3], i1042.playgroundValue)
  return i1042
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i1046 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i1047 = data
  i1046.weight = i1047[0]
  i1046.vertices = i1047[1]
  i1046.normals = i1047[2]
  i1046.tangents = i1047[3]
  return i1046
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i1048 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i1049 = data
  request.r(i1049[0], i1049[1], 0, i1048, 'm_ObjectArgument')
  i1048.m_ObjectArgumentAssemblyTypeName = i1049[2]
  i1048.m_IntArgument = i1049[3]
  i1048.m_FloatArgument = i1049[4]
  i1048.m_StringArgument = i1049[5]
  i1048.m_BoolArgument = !!i1049[6]
  return i1048
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i1052 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i1053 = data
  i1052.mode = i1053[0]
  i1052.parameter = i1053[1]
  i1052.threshold = i1053[2]
  return i1052
}

Deserializers["Luna.Replay.Recording.DefaultScalerOptions"] = function (request, data, root) {
  var i1054 = root || request.c( 'Luna.Replay.Recording.DefaultScalerOptions' )
  var i1055 = data
  i1054.anchors = request.d('Luna.Replay.Recording.Anchors', i1055[0], i1054.anchors)
  i1054.leftPosition = request.d('Luna.Replay.Recording.PositionOptions', i1055[1], i1054.leftPosition)
  i1054.topPosition = request.d('Luna.Replay.Recording.PositionOptions', i1055[2], i1054.topPosition)
  i1054.rightPosition = request.d('Luna.Replay.Recording.PositionOptions', i1055[3], i1054.rightPosition)
  i1054.bottomPosition = request.d('Luna.Replay.Recording.PositionOptions', i1055[4], i1054.bottomPosition)
  i1054.advancedOffsetOptions = !!i1055[5]
  return i1054
}

Deserializers["Luna.Replay.Playground.FieldValue"] = function (request, data, root) {
  var i1056 = root || request.c( 'Luna.Replay.Playground.FieldValue' )
  var i1057 = data
  i1056.longValue = System.Int64(i1057[0])
  i1056.boolValue = !!i1057[1]
  i1056.doubleValue = i1057[2]
  i1056.stringValue = i1057[3]
  i1056.colorValue = new pc.Color(i1057[4], i1057[5], i1057[6], i1057[7])
  i1056.vector2Value = new pc.Vec2( i1057[8], i1057[9] )
  i1056.vector3Value = new pc.Vec3( i1057[10], i1057[11], i1057[12] )
  i1056.vector4Value = new pc.Vec4( i1057[13], i1057[14], i1057[15], i1057[16] )
  return i1056
}

Deserializers["Luna.Replay.Recording.Anchors"] = function (request, data, root) {
  var i1058 = root || request.c( 'Luna.Replay.Recording.Anchors' )
  var i1059 = data
  var i1061 = i1059[0]
  var i1060 = []
  for(var i = 0; i < i1061.length; i += 1) {
    i1060.push( !!i1061[i + 0] );
  }
  i1058.anchors = i1060
  return i1058
}

Deserializers["Luna.Replay.Recording.PositionOptions"] = function (request, data, root) {
  var i1062 = root || request.c( 'Luna.Replay.Recording.PositionOptions' )
  var i1063 = data
  i1062.offset = i1063[0]
  i1062.manualOffset = i1063[1]
  return i1062
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.Light":{"enabled":0,"type":1,"color":2,"cullingMask":6,"intensity":7,"range":8,"spotAngle":9,"shadows":10,"shadowNormalBias":11,"shadowBias":12,"shadowStrength":13,"lightmapBakeType":14,"renderMode":15,"cookie":16,"cookieSize":18},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tag":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"enabled":0,"aspect":1,"orthographic":2,"orthographicSize":3,"backgroundColor":4,"nearClipPlane":8,"farClipPlane":9,"fieldOfView":10,"depth":11,"clearFlags":12,"cullingMask":13,"rect":14,"targetTexture":15},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider":{"center":0,"size":3,"enabled":6,"isTrigger":7,"material":8},"Luna.Unity.DTO.UnityEngine.Components.MeshFilter":{"sharedMesh":0},"Luna.Unity.DTO.UnityEngine.Components.MeshRenderer":{"additionalVertexStreams":0,"enabled":2,"sharedMaterial":3,"sharedMaterials":5,"receiveShadows":6,"shadowCastingMode":7,"sortingLayerID":8,"sortingOrder":9,"lightmapIndex":10,"lightmapSceneIndex":11,"lightmapScaleOffset":12,"lightProbeUsage":16,"reflectionProbeUsage":17},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystem":{"main":0,"colorBySpeed":1,"colorOverLifetime":2,"emission":3,"rotationBySpeed":4,"rotationOverLifetime":5,"shape":6,"sizeBySpeed":7,"sizeOverLifetime":8,"textureSheetAnimation":9,"velocityOverLifetime":10,"noise":11,"inheritVelocity":12,"forceOverLifetime":13,"limitVelocityOverLifetime":14},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule":{"duration":0,"loop":1,"prewarm":2,"startDelay":3,"startDelayMultiplier":4,"startLifetime":5,"startLifetimeMultiplier":6,"startSpeed":7,"startSpeedMultiplier":8,"startSize3D":9,"startSize":10,"startSizeMultiplier":11,"startSizeX":12,"startSizeXMultiplier":13,"startSizeY":14,"startSizeYMultiplier":15,"startSizeZ":16,"startSizeZMultiplier":17,"startRotation3D":18,"startRotation":19,"startRotationMultiplier":20,"startRotationX":21,"startRotationXMultiplier":22,"startRotationY":23,"startRotationYMultiplier":24,"startRotationZ":25,"startRotationZMultiplier":26,"startColor":27,"gravityModifier":28,"gravityModifierMultiplier":29,"simulationSpace":30,"customSimulationSpace":31,"simulationSpeed":33,"useUnscaledTime":34,"scalingMode":35,"playOnAwake":36,"maxParticles":37,"emitterVelocityMode":38},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve":{"m_Mode":0,"m_CurveMin":1,"m_CurveMax":2,"m_CurveMultiplier":3,"m_ConstantMin":4,"m_ConstantMax":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient":{"m_Mode":0,"m_GradientMin":1,"m_GradientMax":2,"m_ColorMin":3,"m_ColorMax":7},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient":{"mode":0,"colorKeys":1,"alphaKeys":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule":{"enabled":0,"color":1,"range":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey":{"color":0,"time":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey":{"alpha":0,"time":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule":{"enabled":0,"color":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule":{"enabled":0,"rateOverTime":1,"rateOverTimeMultiplier":2,"rateOverDistance":3,"rateOverDistanceMultiplier":4,"bursts":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst":{"count":0,"cycleCount":1,"minCount":2,"maxCount":3,"repeatInterval":4,"time":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"xMultiplier":4,"yMultiplier":5,"zMultiplier":6,"separateAxes":7,"range":8},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"xMultiplier":4,"yMultiplier":5,"zMultiplier":6,"separateAxes":7},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule":{"enabled":0,"shapeType":1,"randomDirectionAmount":2,"sphericalDirectionAmount":3,"randomPositionAmount":4,"alignToDirection":5,"radius":6,"radiusMode":7,"radiusSpread":8,"radiusSpeed":9,"radiusSpeedMultiplier":10,"radiusThickness":11,"angle":12,"length":13,"boxThickness":14,"meshShapeType":17,"mesh":18,"meshRenderer":20,"skinnedMeshRenderer":22,"useMeshMaterialIndex":24,"meshMaterialIndex":25,"useMeshColors":26,"normalOffset":27,"arc":28,"arcMode":29,"arcSpread":30,"arcSpeed":31,"arcSpeedMultiplier":32,"donutRadius":33,"position":34,"rotation":37,"scale":40},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule":{"enabled":0,"size":1,"sizeMultiplier":2,"x":3,"y":4,"z":5,"xMultiplier":6,"yMultiplier":7,"zMultiplier":8,"separateAxes":9,"range":10},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule":{"enabled":0,"size":1,"sizeMultiplier":2,"x":3,"y":4,"z":5,"xMultiplier":6,"yMultiplier":7,"zMultiplier":8,"separateAxes":9},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule":{"enabled":0,"mode":1,"animation":2,"numTilesX":3,"numTilesY":4,"useRandomRow":5,"frameOverTime":6,"frameOverTimeMultiplier":7,"startFrame":8,"startFrameMultiplier":9,"cycleCount":10,"rowIndex":11,"flipU":12,"flipV":13,"spriteCount":14},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"xMultiplier":4,"yMultiplier":5,"zMultiplier":6,"speedModifier":7,"speedModifierMultiplier":8,"space":9},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule":{"enabled":0,"separateAxes":1,"strengthX":2,"strengthY":3,"strengthZ":4,"strengthXMultiplier":5,"strengthYMultiplier":6,"strengthZMultiplier":7,"frequency":8,"damping":9,"octaveCount":10,"octaveMultiplier":11,"octaveScale":12,"quality":13,"scrollSpeed":14,"scrollSpeedMultiplier":15,"remapEnabled":16,"remapX":17,"remapY":18,"remapZ":19,"remapXMultiplier":20,"remapYMultiplier":21,"remapZMultiplier":22,"positionAmount":23,"rotationAmount":24,"sizeAmount":25},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule":{"enabled":0,"mode":1,"curve":2,"curveMultiplier":3},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"xMultiplier":4,"yMultiplier":5,"zMultiplier":6,"space":7,"randomized":8},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule":{"enabled":0,"limit":1,"limitX":2,"limitY":3,"limitZ":4,"limitMultiplier":5,"limitXMultiplier":6,"limitYMultiplier":7,"limitZMultiplier":8,"dampen":9,"separateAxes":10,"space":11,"drag":12,"dragMultiplier":13,"multiplyDragByParticleSize":14,"multiplyDragByParticleVelocity":15},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer":{"enabled":0,"sharedMaterial":1,"sharedMaterials":3,"receiveShadows":4,"shadowCastingMode":5,"sortingLayerID":6,"sortingOrder":7,"lightmapIndex":8,"lightmapSceneIndex":9,"lightmapScaleOffset":10,"lightProbeUsage":14,"reflectionProbeUsage":15,"mesh":16,"meshCount":18,"activeVertexStreamsCount":19,"alignment":20,"renderMode":21,"sortMode":22,"lengthScale":23,"velocityScale":24,"cameraVelocityScale":25,"normalDirection":26,"sortingFudge":27,"minParticleSize":28,"maxParticleSize":29,"pivot":30,"trailMaterial":33},"Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer":{"enabled":0,"sharedMaterial":1,"sharedMaterials":3,"receiveShadows":4,"shadowCastingMode":5,"sortingLayerID":6,"sortingOrder":7,"lightmapIndex":8,"lightmapSceneIndex":9,"lightmapScaleOffset":10,"lightProbeUsage":14,"reflectionProbeUsage":15,"color":16,"sprite":20,"flipX":22,"flipY":23,"drawMode":24,"size":25,"tileMode":27,"adaptiveModeThreshold":28,"maskInteraction":29,"spriteSortPoint":30},"Luna.Unity.DTO.UnityEngine.Components.Animation":{"playAutomatically":0,"clip":1,"clips":3,"enabled":4},"Luna.Unity.DTO.UnityEngine.Assets.Mesh":{"name":0,"halfPrecision":1,"vertexCount":2,"aabb":3,"streams":4,"vertices":5,"subMeshes":6,"bindposes":7,"blendShapes":8},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh":{"triangles":0},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape":{"name":0,"frames":1},"Luna.Unity.DTO.UnityEngine.Textures.Cubemap":{"name":0,"atlasId":1,"mipmapCount":2,"hdr":3,"size":4,"anisoLevel":5,"filterMode":6,"wrapMode":7,"rects":8},"Luna.Unity.DTO.UnityEngine.Components.Animator":{"animatorController":0,"updateMode":2,"humanBones":3,"enabled":4},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"playOnAwake":2,"loop":3,"enabled":4},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"enabled":0,"planeDistance":1,"referencePixelsPerUnit":2,"isFallbackOverlay":3,"renderMode":4,"renderOrder":5,"sortingLayerName":6,"sortingOrder":7,"scaleFactor":8,"worldCamera":9,"overrideSorting":11,"pixelPerfect":12,"targetDisplay":13,"overridePixelPerfect":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"environmentLightingMode":33,"ambientProbe":34,"customReflection":35,"defaultReflection":37,"defaultReflectionMode":39,"defaultReflectionResolution":40,"sunLightObjectId":41,"pixelLightCount":42,"defaultReflectionHDR":43,"hasLightDataAsset":44,"hasManualGenerate":45},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"name":0,"passes":1,"defaultParameterValues":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"passType":0,"zTest":1,"zWrite":2,"culling":3,"blending":4,"alphaBlending":5,"colorWriteMask":6,"offsetUnits":7,"offsetFactor":8,"stencilRef":9,"stencilReadMask":10,"stencilWriteMask":11,"stencilOp":12,"stencilOpFront":13,"stencilOpBack":14,"tags":15,"variants":16},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"keywords":0,"vertexProgram":1,"fragmentProgram":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip":{"name":0,"wrapMode":1,"isLooping":2,"length":3,"curves":4,"events":5,"halfPrecision":6},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve":{"path":0,"componentType":1,"property":2,"keys":3,"objectReferenceKeys":4},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey":{"time":0,"value":1},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent":{"functionName":0,"floatParameter":1,"intParameter":2,"stringParameter":3,"objectReferenceParameter":4,"time":6},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController":{"name":0,"states":1,"layers":2,"parameters":3},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState":{"cycleOffset":0,"cycleOffsetParameter":1,"cycleOffsetParameterActive":2,"mirror":3,"mirrorParameter":4,"mirrorParameterActive":5,"motionId":6,"nameHash":7,"fullPathHash":8,"speed":9,"speedParameter":10,"speedParameterActive":11,"tag":12,"name":13,"writeDefaultValues":14,"transitions":15,"behaviours":16},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition":{"fullPath":0,"canTransitionToSelf":1,"duration":2,"exitTime":3,"hasExitTime":4,"hasFixedDuration":5,"interruptionSource":6,"offset":7,"orderedInterruption":8,"destinationStateNameHash":9,"destinationStateMachineId":10,"isExit":11,"mute":12,"solo":13,"conditions":14},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer":{"blendingMode":0,"defaultWeight":1,"name":2,"stateMachine":3},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine":{"id":0,"defaultStateNameHash":1,"entryTransitions":2,"anyStateTransitions":3},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition":{"destinationStateNameHash":0,"destinationStateMachineId":1,"isExit":2,"mute":3,"solo":4,"conditions":5},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter":{"defaultBool":0,"defaultFloat":1,"defaultInt":2,"name":3,"nameHash":4,"type":5},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"removeShadows":6,"autoInstantiatePrefabs":7,"enableAutoInstancing":8,"lightmapEncodingQuality":9,"desiredColorSpace":10},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"autoSyncTransforms":4,"autoSimulation":5,"collisionMatrix":6},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"timeToSleep":11,"linearSleepTolerance":12,"angularSleepTolerance":13,"defaultContactOffset":14,"autoSimulation":15,"queriesHitTriggers":16,"queriesStartInColliders":17,"callbacksOnDisable":18,"reuseCollisionCallbacks":19,"autoSyncTransforms":20,"collisionMatrix":21},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame":{"weight":0,"vertices":1,"normals":2,"tangents":3},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition":{"mode":0,"parameter":1,"threshold":2}}

Deserializers.requiredComponents = {"54":[55],"56":[55],"57":[55],"58":[55],"59":[55],"60":[55],"61":[62],"63":[11],"64":[65],"66":[65],"67":[65],"68":[65],"69":[65],"70":[65],"71":[65],"72":[73],"74":[73],"75":[73],"76":[73],"77":[73],"78":[73],"79":[73],"80":[73],"81":[73],"82":[73],"83":[73],"84":[73],"85":[73],"86":[11],"87":[21],"88":[89],"90":[89],"39":[38],"91":[11],"92":[38],"93":[42,38],"41":[39],"43":[42,38],"94":[38],"40":[39],"95":[38],"96":[38],"47":[38],"97":[38],"98":[38],"99":[38],"51":[38],"100":[38],"101":[42,38],"102":[42,38],"103":[38],"104":[38],"105":[38],"106":[38],"30":[42,38],"107":[38],"108":[8],"109":[8],"9":[8],"110":[8],"111":[11],"112":[11]}

Deserializers.types = ["UnityEngine.Shader","DG.Tweening.Core.DOTweenSettings","Luna.Replay.Settings.HudSettings","Luna.Replay.Settings.PlaygroundCredentials","Luna.Replay.Settings.ReplaySettings","UnityEngine.Transform","UnityEngine.Light","UnityEngine.EventSystems.UIBehaviour","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","UnityEngine.EventSystems.BaseInput","UnityEngine.Camera","UnityEngine.AudioListener","UnityEngine.MonoBehaviour","Tube","UnityEngine.GameObject","Decorate","UnityEngine.ParticleSystem","UnityEngine.BoxCollider","UnityEngine.MeshFilter","UnityEngine.Mesh","UnityEngine.MeshRenderer","UnityEngine.Material","UnityEngine.ParticleSystemRenderer","UnityEngine.SpriteRenderer","UnityEngine.Animation","UnityEngine.AnimationClip","UnityEngine.Texture2D","UnityEngine.Cubemap","LevelManager","UnityEngine.UI.Text","UnityEngine.Sprite","UnityEngine.Animator","UnityEditor.Animations.AnimatorController","GameManager","SoundManager","UnityEngine.AudioSource","UnityEngine.AudioClip","UnityEngine.RectTransform","UnityEngine.Canvas","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.CanvasRenderer","UnityEngine.UI.Image","UnityEngine.Font","MainMenu","UnityEngine.UI.Button","UnityEngine.UI.HorizontalLayoutGroup","MoneyFx","MenuButtonManager","ChangeImage","UnityEngine.UI.VerticalLayoutGroup","xgame.sdk.AdsHelper","UnityEngine.TextAsset","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.ConstantForce","UnityEngine.Rigidbody","UnityEngine.Joint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","CameraPropertyOverrider","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.ScrollRect","UnityEngine.UI.Scrollbar","UnityEngine.UI.Slider","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster"]

Deserializers.unityVersion = "2019.4.18f1";

Deserializers.applicationIdentifier = "com.DefaultCompany.Sortit";

Deserializers.disableAntiAliasing = false;

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

