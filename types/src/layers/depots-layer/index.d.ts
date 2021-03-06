import { CompositeLayer, ScatterplotLayer, GridCellLayer } from 'deck.gl';
import CubeiconLayer from '../cubeicon-layer';
import { DepotsData, LightSettings, Position, Radius, DataOption } from '../../types';
interface Props {
    layerRadiusScale: number;
    layerOpacity: number;
    depotsData: Array<DepotsData>;
    optionVisible: boolean;
    optionChange: boolean;
    optionOpacity: number;
    optionCellSize: number;
    optionElevationScale: number;
    lightSettings: LightSettings;
    getColor: (x: any) => Array<number>;
    getRadius: (x: any) => number;
    getColor1: (x: any) => Array<number>;
    getColor2: (x: any) => Array<number>;
    getColor3: (x: any) => Array<number>;
    getColor4: (x: any) => Array<number>;
    getElevation1: (x: any) => number;
    getElevation2: (x: any) => number;
    getElevation3: (x: any) => number;
    getElevation4: (x: any) => number;
    i18n: {
        error: string;
    };
}
export default class DepotsLayer extends CompositeLayer<Props> {
    static layerName: string;
    static defaultProps: {
        layerRadiusScale: number;
        layerOpacity: number;
        optionVisible: boolean;
        optionChange: boolean;
        optionOpacity: number;
        optionCellSize: number;
        optionElevationScale: number;
        getColor: (x: DataOption) => number[];
        getColor1: (x: DataOption) => number | number[];
        getColor2: (x: DataOption) => number | number[];
        getColor3: (x: DataOption) => number | number[];
        getColor4: (x: DataOption) => number | number[];
        getElevation1: (x: DataOption) => number;
        getElevation2: (x: DataOption) => number;
        getElevation3: (x: DataOption) => number;
        getElevation4: (x: DataOption) => number;
        i18n: {
            error: string;
        };
    };
    renderLayers(): (CubeiconLayer | ScatterplotLayer<{
        id: string;
        data: DepotsData[];
        radiusScale: number;
        getPosition: (x: Position) => number[];
        getColor: (x: any) => number[];
        getRadius: (x: any) => number;
        opacity: number;
        pickable: boolean;
        radiusMinPixels: number;
    }, {}> | GridCellLayer<{
        id: string;
        data: DepotsData[];
        visible: boolean;
        getPosition: (x: Position & Radius) => number[];
        getColor: (x: any) => number[];
        getElevation: (x: any) => number;
        opacity: number;
        pickable: boolean;
        cellSize: number;
        elevationScale: number;
        lightSettings: LightSettings;
    }, {}>)[];
}
export {};
