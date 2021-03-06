import { CompositeLayer, LineLayer } from 'deck.gl';
import { LineMapData, LineData } from '../../types';
interface Props {
    layerOpacity: number;
    linemapData: Array<LineMapData>;
    strokeWidth: number;
    getColor: (x: any) => Array<number>;
}
export default class LineMapLayer extends CompositeLayer<Props> {
    static defaultProps: {
        layerOpacity: number;
        strokeWidth: number;
        getColor: (x: LineData) => number[];
    };
    static layerName: string;
    renderLayers(): LineLayer<{
        id: string;
        data: LineMapData[];
        projectionMode: any;
        getSourcePosition: (x: LineData) => number[];
        getTargetPosition: (x: LineData) => number[];
        getColor: (x: any) => number[];
        opacity: number;
        pickable: boolean;
        strokeWidth: number;
    }, {}>[];
}
export {};
