const aliasList = {
  // avoid unnecessary fallback and suppress errors in console
  '/.*/_sidebar.md': '/_sidebar.md',
  '/.*/_navbar.md': '/_navbar.md',
  // other languages FIXME: not working
  'jp/(.*)': '/jp/$1',
  'kr/(.*)': '/kr/$1',
  'zh-tw/(.*)': '/zh-tw/$1',
  'zh-cn/(.*)': '/zh-cn/$1',

  // Resonite Mod Loader articles
  '/modding/resoniteModLoader/README': 'https://raw.githubusercontent.com/resonite-modding-group/ResoniteModLoader/main/README.md',
  // FIXME: Write separate js that replaces the links in markdown
  // '/modding/ResoniteModLoader/img/(.*)': 'https://raw.githubusercontent.com/resonite-modding-group/ResoniteModLoader/main/doc/img/$1',
  '/doc/(.*)': '/modding/resoniteModLoader/$1',
  '/modding/resoniteModLoader/(.*)': 'https://raw.githubusercontent.com/resonite-modding-group/ResoniteModLoader/main/doc/$1.md',


  // a backticks "`" need to be url encoded "%60"
  '/protoflux/ProtoFlux.Runtimes.Execution.Nodes.Actions.DynamicImpulseReceiverWithValue%601': '/protoflux/actions.md',
  '/protoflux/ProtoFlux.Runtimes.Execution.Nodes.Actions.AsyncDynamicImpulseReceiverWithValue%601': '/protoflux/actions.md',
  '/protoflux/ProtoFlux.Runtimes.Execution.Nodes.Actions.DynamicImpulseTriggerWithValue%601': '/protoflux/actions.md',
  '/protoflux/ProtoFlux.Runtimes.Execution.Nodes.Actions.AsyncDynamicImpulseTriggerWithValue%601': '/protoflux/actions.md',
  '/protoflux/ProtoFlux.Runtimes.Execution.Nodes.Actions.FireOnTrue': '/protoflux/actions.md',
  '/protoflux/ProtoFlux.Runtimes.Execution.Nodes.Actions.FireWhileTrue': '/protoflux/actions.md',
  '/protoflux/ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Animation.TweenValue%601': '/protoflux/actions.md',
  '/protoflux/ProtoFlux.Runtimes.Execution.Nodes.ValueWriteLatch%602': '/protoflux/actions.md',

  '/protoflux/ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Assets.AttachAudioClip': '/protoflux/assets.md',
  '/protoflux/ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Assets.AttachMesh': '/protoflux/assets.md',
  '/protoflux/ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Assets.AttachSprite': '/protoflux/assets.md',
  '/protoflux/ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Assets.AttachTexture2D': '/protoflux/assets.md',
  '/protoflux/ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Assets.BakeMeshes': '/protoflux/assets.md',

  '/protoflux/ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Audio.PlayOneShot': '/protoflux/audio.md',

  '/protoflux/ProtoFlux.Runtimes.Execution.Nodes.Color.ColorAlphaBlend': '/protoflux/colors.md',

  '/protoflux/ProtoFlux.Runtimes.Execution.Nodes.If': '/protoflux/flow.md',

  '/protoflux/ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Physics.ApplyCharacterForce': '/protoflux/physics.md',
  '/protoflux/ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Physics.ApplyCharacterImpulse': '/protoflux/physics.md',
  '/protoflux/ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Physics.AsCharacterController': '/protoflux/physics.md',

  '/protoflux/ProtoFlux.Runtimes.Execution.Nodes.Operators.Pack_Bool3': '/protoflux/operators/packing.md',

  '/protoflux/ProtoFlux.Runtimes.Execution.Nodes.ValueConditional%601': '/protoflux/operators/README.md',
  '/protoflux/ProtoFlux.Runtimes.Execution.Nodes.Operators.Distance_Float': '/protoflux/operators/README.md',
  '/protoflux/ProtoFlux.Runtimes.Execution.Nodes.Operators.Mask_Uint2': '/protoflux/operators/README.md',

  '/protoflux/ProtoFlux.Runtimes.Execution.Nodes.Operators.Magnitude_Uint2': '/protoflux/operators/vectors.md',
  '/protoflux/ProtoFlux.Runtimes.Execution.Nodes.Operators.SqrMagnitude_Uint2': '/protoflux/operators/vectors.md',

  '/protoflux/ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Transform.GetBackward': '/protoflux/transform/direction.md',

  '/protoflux/ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Users.LocalUser': '/protoflux/users/README.md',
  '/protoflux/ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Users.Roots.ActiveUserRootUser': '/protoflux/users/userRoot.md',

};

window.$docsify.alias = {
  ...window.$docsify.alias,
  ...aliasList
}
