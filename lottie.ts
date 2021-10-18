export enum BlendMode {
  Normal,
  Multiply,
  Screen,
  Overlay,
  Darken,
  Lighten,
  ColorDodge,
  ColorBurn,
  HardLight,
  SoftLight,
  Difference,
  Exclusion,
  Hue,
  Saturation,
  Color,
  Luminosity,
}

export enum MatteMode {
  Normal,
  Alpha,
  InvertedAlpha,
  Luma,
  InvertedLuma,
}

export enum Layer3DMode {
  Off,
  On,
}

export enum AutoOrientMode {
  Off,
  On,
}

export type Layer = {
  /** 3d layer flag */
  ddd?: Layer3DMode;
  /** Hidden layer */
  hd?: boolean;
  /** Layer type */
  ty: LayerType;
  /** After Effects Layer Name */
  nm?: string;
  /** Layer Parent */
  parent?: number;
  /** Layer Time Stretching */
  sr?: number;
  /** Transform properties */
  ks: Transform;
  /** Auto-Orient along path AE property */
  ao?: AutoOrientMode;
  /** In Point of layer */
  ip: number;
  /** Out Point of layer */
  op: number;
  /** Start Time of layer */
  st: number;
  /** Blend Mode */
  bm?: BlendMode;
  /** Matte mode, the layer will inherit the transparency from the layer above */
  tt?: MatteMode;
  /** Layer index in AE */
  ind?: number;
  /** Whether the layer has some masks applied */
  hasMask?: boolean;
  /** List of Masks */
  masksProperties?: Array<any>;
  /** List of Effects */
  ef?: Array<any>;
  /** matte_target */
  td?: number;
};

export enum LayerType {
  precomp,
  solid,
  still,
  nullLayer,
  shape,
  text,
  audio,
  pholderVideo,
  imageSeq,
  video,
  pholderStill,
  guide,
  adjustment,
  camera,
  light,
}

export type Transform = {
  /** Transform Anchor Point. */
  a: MultiDimensional;
  /** Transform Position. */
  p: PositionValue;
  /** Transform Scale. */
  s: MultiDimensional;
  /** Transform Rotation. */
  r: Value;
  /** Transform Opacity. */
  o: Value;
  /** Transform Skew. */
  sk?: Value;
  /** Transform Skew Axis. */
  sa?: Value;
};

export type PrecompLayer = Layer & {
  /** Reference ID (in assets list) */
  refId: string;
};

export type ShapeLayer = Layer & {
  /** Shape list of items. */
  shapes: ShapeElement[];
};

export type SolidColorLayer = Layer & {
  /** Color of the layer as a #rrggbb hex. */
  sc: string;
  /** Height of the layer. */
  sh: number;
  /** Width of the layer. */
  sw: number;
};

export type ImageLayer = Layer & {
  /** id pointing to the source image defined on 'assets' object. */
  refId: string;
};

export type TextAnimatorDataProperty = {
  /** Transform Anchor Point. */
  a?: MultiDimensional;
  /** Transform Position. */
  p?: PositionValue;
  /** Transform Scale. */
  s?: MultiDimensional;
  /** Transform Rotation. */
  r?: Value;
  /** Transform Opacity. */
  o?: Value;
  /** Transform Skew. */
  sk?: Value;
  /** Transform Skew Axis. */
  sa?: Value;
  /** Angle? */
  rx?: Value;
  /** Angle? */
  ry?: Value;
  /** Stroke width. */
  sw?: Value;
  /** Stroke color. */
  sc?: MultiDimensional;
  /** Fill color. */
  fc?: MultiDimensional;
  /**  fh */
  fh?: Value;
  /** 0-100? */
  fs?: Value;
  /** 0-100? */
  fb?: Value;
  /** Tracking. */
  t?: Value;
};

export enum TextJustify {
  Left = 0,
  Right,
  Center,
}

export type TextDocument = {
  /** Font family. */
  f: string;
  /** Text color. */
  fc: number[];
  /** Font Size. */
  s: number;
  /** Line height when wrapping. */
  lh: number;
  /** Size of the box containing the text */
  sz?: number[];
  /** Text. */
  t: string;
  /** Text alignment. */
  j: TextJustify;
  /** Character anchor? */
  ca: number;
  /** Line shift? positive moves text up */
  ls: number;
  /** Position? */
  ps: number[];
  /** Tracking */
  tr: number;
};

export type TextDataKeyframe = {
  /** Start value of keyframe segment. */
  s: TextDocument;
  /** Start time of keyframe segment. */
  t: number;
};

export type TextDocumentData = {
  k: TextDataKeyframe[];
};

export type TextMoreOptions = any;
export type MaskedPath = any;

export type RangeSelector = {
  /** number/enum */
  t: number;
  /** ??? */
  xe: Value;
  /** ??? */
  ne: Value;
  /** ??? */
  a: Value;
  /** number/enum */
  b: number;
  /** number/enum */
  rn: number;
  /** number/enum */
  sh: number;
  /** number/enum */
  r: number;
};

export type TextAnimator = {
  /** Name */
  nm?: string;
  /** Range selector */
  s?: RangeSelector;
  /** Animated properties */
  a: TextAnimatorDataProperty;
};

export type TextData = {
  a: TextAnimator[];
  d: TextDocumentData;
  m?: TextMoreOptions;
  p?: MaskedPath;
};

export type TextLayer = Layer & {
  /** Text Data. */
  t: TextData;
};

export type Point = { x: number; y: number };

export type Matrix4 = [
  number,
  number,
  number,
  number,

  number,
  number,
  number,
  number,

  number,
  number,
  number,
  number,

  number,
  number,
  number,
  number
];

export type Matrix3 = [
  number,
  number,
  number,

  number,
  number,
  number,

  number,
  number,
  number
];

export type Node3D = {
  transform: Matrix4;
  children: Node3D[];
};

export type Context = {
  anchor: number[];
  position: number[];
  rotation: number;
  opacity: number;
  scale: number[];
  points: Array<Point>;
  fill: number[];
};

export enum ShapeType {
  Group = 'gr',
  Rect = 'rc',
  Ellipse = 'el',
  Fill = 'fl',
  TransformShape = 'tr',
  Path = 'sh',
}

export type ShapeElement = {
  /** Hide element. */
  hd: boolean;

  /** After Effect's Name. */
  nm: string;

  /** Shape type. */
  ty: ShapeType;

  /** Property index. */
  cix: number;

  /** ??? */
  bm: number;
};

export type GroupShapeElement = ShapeElement & {
  /** Group number of properties. */
  np: number;
  /** Group list of items.  */
  it: Array<ShapeElement>;
};

export type Bezier = {
  /** Closed property of shape. */
  c: boolean;
  /** Cubic bezier handles for the segments before each vertex. */
  i: number[][];
  /** Cubic bezier handles for the segments after each vertex. */
  o: number[][];
  /** Bezier curve vertices. */
  v: number[][];
};

export type ShapePropKeyframe = {
  /** Start time of keyframe segment. */
  t: number;
  /** Bezier curve easing in value. */
  i: KeyframeBezierHandle;
  /** Bezier curve easing out value. */
  o: KeyframeBezierHandle;
  /** [0-1] Jump to the end value. */
  h: number;
  /** or list of Bezier	Start value of keyframe segment. */
  s: Bezier;
  /** or list of Bezier	End value of keyframe segment. */
  e: Bezier;
};

export type ShapeProperty = {
  /**
   * Bezier: Non-animated value.
   * ShapePropKeyframe[]: Keyframe list.
   */
  k: Bezier | ShapePropKeyframe[];
  /** Property index. */
  ix: number;
  /** [0-1] Whether it's animated. */
  a?: number;
};

export type PathShape = ShapeElement & {
  /** Shape's vertices. */
  ks: ShapeProperty;
  /** index  */
  ind: number;
};

export type MultiDimensional = {
  /**
   * number[]: Non-animated value.
   * OffsetKeyframe[]: Animated keyframes.
   */
  k: number[] | OffsetKeyframe[];
  /** Property index. */
  ix?: number;
  /** [0-1] Whether it's animated. */
  a?: number;
  /** ??? */
  l?: number;
};

export type Value = {
  /**
   * number | number[]: Non-animated value.
   * OffsetKeyframe[]: Animated keyframes.
   */
  k: number | number[] | OffsetKeyframe[];
  /** Property index. */
  ix?: number;
  /** [0-1] Whether it's animated. */
  a?: number;
  /** Split values (???) */
  s?: boolean;
};

export type PositionValue = {
  /**
   * number | number[]: Non-animated value.
   * OffsetKeyframe[]: Animated keyframes.
   */
  k: number | number[] | OffsetKeyframe[];
  /** Property index. */
  ix?: number;
  /** [0-1] Whether it's animated. */
  a?: number;
  /** ??? */
  l?: number;
};

export type KeyframeBezierHandle = {
  /** x position of the handle. */
  x: number | number[];
  /** y position of the handle. */
  y: number | number[];
};

export type OffsetKeyframe = {
  /** Start time of keyframe segment. */
  t: number;
  /** Bezier curve easing in value. */
  i?: KeyframeBezierHandle;
  /** Bezier curve easing out value. */
  o?: KeyframeBezierHandle;
  /** [0-1] Jump to the end value. */
  h?: number;
  /** Start value of keyframe segment. */
  s: number[];
  /** End value of keyframe segment. */
  e?: number[];
  /** In Spatial Tangent. Only for spatial properties. */
  ti?: number[];
  /** Out Spatial Tangent. Only for spatial properties. */
  to?: number[];
};

export type RectShape = ShapeElement & {
  /** After Effect's Direction. */
  d: number;
  /** Rect's position. */
  p: MultiDimensional;
  /** Rect's size. */
  s: MultiDimensional;
  /** Rect's rounded corners. */
  r: Value;
};

export type TransformShape = ShapeElement & {
  /** Anchor point */
  a: MultiDimensional;
  /** Transform Position. */
  p: PositionValue;
  /** Transform Scale. */
  s: MultiDimensional;
  /** Transform Rotation. */
  r: Value;
  /** Transform Opacity. */
  o: Value;
  /** Transform Skew. */
  sk: Value;
  /** Transform Skew Axis. */
  sa: Value;
};

export type ColorValue = {
  /**
   * number[]: Non-animated value.
   * OffsetKeyframe[]: Animated keyframes.
   */
  k: number[] | OffsetKeyframe[];
  /** Property index. */
  ix: number;
  /** [0-1] Whether it's animated. */
  a?: number;
};

export enum FillRule {
  NonZero = 1,
  EvenOdd,
}

export type FillShape = ShapeElement & {
  /** Fill Opacity. */
  o: Value;
  /** Fill Color. */
  c: ColorValue;
  /** Fill rule. */
  r: FillRule;
};

export type Asset = ImageAsset | PrecompAsset;

interface AssetInterface {
  /** Id used to reference in a precomp layer */
  id: string;
}

export type ImageAsset = AssetInterface & {
  /** URL base */
  u: string;
  /** Path relative to URL base (asset.u) */
  p: string;
  /** [non standard]: URL */
  _p: string;
  /** Width */
  w: number;
  /** Height */
  h: number;
};

export type PrecompAsset = AssetInterface & {
  /** Layers */
  layers: Layer[];
};

export enum FontPathOrigin {
  CssUrl = 1,
  ScriptUrl,
  FontUrl,
}

export type Font = {
  /** ascent */
  ascent: number;
  /** font_family */
  fFamily: string;
  /** name */
  fName: string;
  /** font_style */
  fStyle: string;
  /** ??? */
  fClass?: string;
  /** path */
  fPath: string;
  /** weight */
  fWeight: string;
  /** origin */
  origin: FontPathOrigin;
};

export type FontList = {
  list: Font[];
};

export type CharData = {
  shapes: ShapeElement[];
};

export type Chars = {
  /** Character Value. */
  ch: string;
  /** Character Font Family. */
  fFamily: string;
  /** Character Font Size. */
  size: number;
  /** Character Font Style. */
  style: string;
  /** Character Width. */
  w: number;
  /** Character Data. */
  data: CharData;
};

export type LottieData = {
  /** List of Composition Layers. */
  layers: Layer[];
  /** Bodymovin Version. */
  v: string;
  /** Frames per second. */
  fr: number;
  /** The time when the composition work area begins, in frames. */
  ip: number;
  /** The time when the composition work area ends. */
  op: number;
  /** Composition Width. */
  w: number;
  /** Composition Height. */
  h: number;
  /** Composition name. */
  nm?: string;
  /** [0-1] Composition has 3-D layers. */
  ddd?: number;
  /** source items that can be used in multiple places. */
  assets: Asset[];
  /** Available fonts. */
  fonts?: FontList;
  /** Source chars for text layers.  */
  chars?: Chars[];
};
