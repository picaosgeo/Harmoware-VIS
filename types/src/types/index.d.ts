import * as Actions from '../actions';
declare type ActionType = typeof Actions;
declare type ElementEventTemplate<E> = {
    target: E;
} & Event;
export declare type InputEvent = ElementEventTemplate<HTMLInputElement>;
export interface Viewport {
    longitude?: number;
    latitude?: number;
    zoom?: number;
    maxZoom?: number;
    minZoom?: number;
    pitch?: number;
    bearing?: number;
    width?: number;
    height?: number;
    lookAt?: Array<number>;
    distance?: number;
    minDistance?: number;
    maxDistance?: number;
    rotationX?: number;
    rotationY?: number;
    fov?: number;
}
export interface LightSettings {
    lightsPosition?: Array<number>;
    ambientRatio?: number;
    diffuseRatio?: number;
    specularRatio?: number;
    lightsStrength?: Array<number>;
    numberOfLights?: number;
}
export interface Bounds {
    westlongitiude: number;
    eastlongitiude: number;
    southlatitude: number;
    northlatitude: number;
}
export interface Movesbase {
    departuretime: number;
    arrivaltime: number;
    operation: Array<{
        elapsedtime: number;
        longitude: number;
        latitude: number;
        position: Array<number>;
        color: void | Array<number>;
        normal: void | Array<number>;
    }>;
}
export interface AnalyzedBaseData {
    timeBegin: number;
    timeLength: number;
    bounds: Bounds;
    movesbase: Array<Movesbase>;
    viewport: Viewport;
}
export interface MovesbaseFile {
    timeBegin: number;
    timeLength: number;
    bounds: Bounds;
    movesbase: Array<Movesbase>;
}
export interface Depotsbase {
    longitude: number;
    latitude: number;
    position: Array<number>;
}
export interface ClickedObject {
    object: {
        movesbaseidx: number;
    };
    layer: {
        id: string;
    };
}
export interface LineData {
    sourcePosition: Array<number>;
    targetPosition: Array<number>;
    color: Array<number>;
}
export interface RoutePaths {
    movesbaseidx: number;
    sourcePosition: Array<number>;
    targetPosition: Array<number>;
    color: Array<number>;
}
export interface LineMapData {
    sourcePosition: Array<number>;
    targetPosition: Array<number>;
    color: Array<number>;
}
export interface MovedData {
    movesbaseidx: number;
    position: Array<number>;
}
export interface DepotsData {
    position: Array<number>;
}
export interface BasedState {
    animatePause: boolean;
    animateReverse: boolean;
    beforeFrameTimestamp: number;
    bounds: Bounds;
    clickedObject: null | Array<ClickedObject>;
    defaultPitch: number;
    defaultZoom: number;
    depotsBase: Array<Depotsbase>;
    depotsBaseOriginal: string;
    depotsData: Array<DepotsData>;
    getDepotsOptionFunc: null | ((props: any, i: number) => any);
    getMovesOptionFunc: null | ((props: any, i: number, j: number) => any);
    leading: number;
    lightSettings: LightSettings;
    loopTime: number;
    movedData: Array<MovedData>;
    movesbase: Array<Movesbase>;
    nonmapView: boolean;
    routePaths: Array<RoutePaths>;
    secperhour: number;
    settime: number;
    starttimestamp: number;
    timeBegin: number;
    timeLength: number;
    trailing: number;
    viewport: Viewport;
    linemapData: Array<LineMapData>;
    linemapDataOriginal: string;
    loading: boolean;
    inputFileName: Object;
}
export interface BasedProps extends BasedState {
    actions: ActionType;
}
export declare type GetDepotsOptionFunc = ((props: BasedProps, i: number) => any);
export declare type GetMovesOptionFunc = ((props: BasedProps, i: number, j: number) => any);
export declare type BaseActions = ActionType;
export interface Position {
    position: Array<number>;
}
export interface Radius {
    radius: number;
}
export interface DataOption {
    color?: Array<number>;
    optColor?: Array<number>;
    optElevation?: Array<number>;
    normal?: Array<number>;
}
export interface Context {
    shaderCache: any;
    gl: any;
    viewport: {
        distanceScales: {
            degreesPerPixel: Array<number>;
            pixelsPerMeter: Array<number>;
        };
        getDistanceScales: Function;
    };
}
export interface ActionTypes {
    type: string;
    min?: number;
    props?: BasedProps;
    time?: number;
    leading?: number;
    trailing?: number;
    viewport?: Viewport;
    lightSettings?: LightSettings;
    base?: Array<Movesbase> | MovesbaseFile;
    depotsBase?: Array<Depotsbase>;
    pause?: boolean;
    reverse?: boolean;
    secperhour?: number;
    clickedObject?: null | Array<ClickedObject>;
    paths?: Array<RoutePaths>;
    defaultZoom?: number;
    defaultPitch?: number;
    func?: GetMovesOptionFunc | GetDepotsOptionFunc;
    nonmapView?: boolean;
    linemapData?: Array<LineMapData>;
    loading?: boolean;
    inputFileName?: Object;
}
export {};
