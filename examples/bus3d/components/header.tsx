import * as React from 'react';
import CanvasComponent from './canvas-component';
import { p02d, p04d, delaycolor, hsvToRgb } from '../library';
import { Actions, Bus3dProps, AddMinutesButton, PlayButton, PauseButton, ReverseButton, ForwardButton,
  ElapsedTimeRange, ElapsedTimeValue, SpeedRange, SpeedValue, NavigationButton } from '../types';


const weekDayList = ['日', '月', '火', '水', '木', '金', '土'];
const CANVAS_WIDTH = 240;
const CANVAS_HEIGHT = 20;

interface Props extends Bus3dProps{
  date: number,
}

export default class Header extends React.Component<Props> {

  onBusReleaseClick() {
    const { actions } = this.props;
    actions.setClicked(null);
    actions.setRoutePaths([]);
  }

  setDelayHeight(e) {
    const { actions, clickedObject } = this.props;
    actions.setDelayHeight(e.target.value);
    actions.updateRoute(clickedObject, false);
  }

  setScaleElevation(e) {
    this.props.actions.setScaleElevation(e.target.value);
  }

  render() {
    const {
      date, movedData, busoption, bsoptFname, elevationScale,
      clickedObject, delayrange, delayheight } = this.props;
    const d = new Date(date);
    const year = d.getFullYear();
    const month = d.getMonth() + 1;
    const day = d.getDate();
    const wday = weekDayList[d.getDay()];
    const hour = d.getHours();
    const min = d.getMinutes();
    const sec = d.getSeconds();
    const flg = clickedObject ? clickedObject[0].object.name.match(/^\d+-[12]/) : null;
    const canvasProps = {
      width: CANVAS_WIDTH,
      height: CANVAS_HEIGHT,
      updateCanvas: (context) => {
        const cont = context;
        const hMin = 0;
        const hMax = 120;
        const unit = CANVAS_WIDTH / hMax;
        for (let h = hMin; h <= hMax; h += 1) {
          cont.fillStyle = `rgb(${hsvToRgb(h, 1, 1).join(',')})`;
          cont.fillRect((hMax - h) * unit, 0, unit, CANVAS_HEIGHT);
        }
      },
    };
    const getClickedInfo = movedData.find((element) => {
      if (clickedObject && clickedObject[0].object &&
        clickedObject[0].object.movesbaseidx === element.movesbaseidx) {
        return true;
      }
      return false;
    });
    return (
      <div className="harmovis_header container" id="header_area">
        <span className="harmovis_header__spacer">{`${year}/${p02d(month)}/${p02d(day)}(${wday})${p02d(hour)}:${p02d(min)}:${p02d(sec)}`}</span>
        <span id="bus_count" className="harmovis_header__spacer">{movedData.length} 台運行中</span>
        {Object.keys(busoption).length <= 0 ?
          <span className="harmovis_header__spacer">バス拡張情報なし</span> :
          <span className="harmovis_header__spacer">{`バス拡張情報：${bsoptFname}`}</span>
        }
        {Object.keys(busoption).length > 0 &&
          (busoption.busmovesoption || busoption.busstopsoption) &&
          <input
            className="harmovis_header__input"
            type="range" value={elevationScale} min="1" max="20" step="1"
            onChange={this.setScaleElevation.bind(this)}
          />}
        <br />
        <span className="harmovis_header__spacer">遅延 0分</span>
        <CanvasComponent {...canvasProps} />
        <span className="harmovis_header__spacer">～{delayrange}分</span>
        {flg && clickedObject && <span className="harmovis_header__spacer">３Ｄ表示</span>}
        {flg && clickedObject &&
          <span className="harmovis_header__spacer">
            <input
              className="harmovis_header__input"
              type="range" value={delayheight} min="0" max="10" step="1"
              onChange={this.setDelayHeight.bind(this)}
            />
          </span>
        }
        {getClickedInfo &&
          <div>
            <span className="harmovis_header__spacer">
            選択バス情報&nbsp;
              <button onClick={this.onBusReleaseClick.bind(this)} className="harmovis_button" style={{ width: '80px' }}>解除</button>
            </span>
            <span className="harmovis_header__spacer">
              {getClickedInfo.code} {getClickedInfo.name} {getClickedInfo.memo}
            </span>
          </div>
        }
      </div>
    );
  }
}
