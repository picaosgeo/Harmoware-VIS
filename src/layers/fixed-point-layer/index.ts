

import { CompositeLayer, COORDINATE_SYSTEM } from 'deck.gl';
import FrontScatterplotLayer from '../front-scatterplot-layer';
import { COLOR4 } from '../../constants/settings';
import { DepotsData, Position, DataOption, Radius } from '../../types';

interface Props {
  layerOpacity?: number,
  depotsData: Array<DepotsData>,
  getColor?: (x: any) => Array<number>,
  getRadius?: (x: any) => number,
  onHover?: (el: any) => void,
  onClick?: (el: any) => void,
}

export default class FixedPointLayer extends CompositeLayer<Props> {

  static defaultProps = {
    layerOpacity: 0.75,
    getColor: (x: DataOption) => x.color || COLOR4
  };

  static layerName = 'FixedPointLayer';

  renderLayers() {
    const { layerOpacity,
      depotsData, getColor, getRadius: propGetRadius } = this.props;

    if (!depotsData) {
      return null;
    }

    const getPosition = (x: Position) => x.position;
    const getRadius = propGetRadius || ((x: Radius) => (x.radius || 2));

    return [
      new FrontScatterplotLayer({
        id: 'fixed-point',
        data: depotsData,
        projectionMode: COORDINATE_SYSTEM.IDENTITY,
        getPosition,
        getColor,
        getRadius,
        opacity: layerOpacity,
        pickable: true,
        radiusScale: 0.1
      }),
    ];
  }
}
