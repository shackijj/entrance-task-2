import * as React from 'react';
import Timeline from './Timeline';
import Room from './Room';
import RoomTimeline from './RoomTimeline';
import EventTooltip from './EventTooltip';
import * as classNames from 'classnames';
import { Floor } from './MainPage';
import { HOUR_START, HOUR_END } from '../constants';

import './EventsDiagram.css';

interface EventsDiagramProps {
  floors: Floor[];
  classes: string[];
  dateCurrent?: Date;
}

type Tooltip = {
  id: string;
  style: React.CSSProperties;
};

interface EventsDiagramState {
  tooltip: Tooltip | null;
}

class EventsDiagram extends React.Component<EventsDiagramProps, EventsDiagramState> {
  public onEventClick: (id: string, divEvent: HTMLDivElement) => void;
  private _container: HTMLDivElement | null;
  private _tooltip: HTMLDivElement | null;
  constructor(props: EventsDiagramProps) {
    super(props);
    this.state = {
      tooltip: null
    };
    this.onEventClick = this._onEventClick.bind(this);
  }

  public render() {
    const {floors, classes, dateCurrent} = this.props;
    const { tooltip }  = this.state;
    return (
      <div className={classNames('EventsDiagram', classes)} ref={div => this._container = div}>
        <div className="EventsDiagram-HorizontalScrollContainer">
          <Timeline 
            classes={['EventsDiagram-Timeline']}
            hourStart={HOUR_START}
            hourEnd={HOUR_END}
            dateCurrent={dateCurrent}
          />

          <div className="EventsDiagram-VerticalScrollContainer">
            {floors.map((floor, floorIdx) => (
              <div className="EventDiagram-Floor" key={floorIdx}>
                <div className="EventDiagram-FloorTitle">{floor.floor} этаж</div>
                {
                  floor.rooms.map((room, roomIdx) => (
                    <div className="EventDiagram-Room" key={roomIdx}>
                      <Room {...room}/>
                      <RoomTimeline
                        dateCurrent={dateCurrent}
                        hourStart={HOUR_START}
                        hourEnd={HOUR_END}
                        onEventClick={this.onEventClick}
                        {...room}
                      />
                    </div>
                  ))
                }
              </div>
            ))}
          </div>
        </div>
        <div
          className="EventsDiagram-TooltipContainer"
          ref={div => this._tooltip = div}
          style={tooltip && tooltip.style || {}}
        >
          {tooltip && <EventTooltip {...tooltip}/>}
        </div>
      </div>
    );
  }

  private _onEventClick(id: string, divEvent: HTMLDivElement) {
    if (this._container && this._tooltip) {
      const er = divEvent.getBoundingClientRect();

      const cr = this._container.getBoundingClientRect();
      const tr = this._tooltip.getBoundingClientRect();
      let left = er.left - cr.left + er.width / 2 + this._container.scrollLeft - tr.width / 2;
      let top = er.top - cr.top + er.height + this._container.scrollTop;

      const rightOffset = cr.width - (left + tr.width) + this._container.scrollLeft;
      const leftOffset = left - this._container.scrollLeft;

      if (rightOffset < 0) {
        left = left + rightOffset;
      }
      if (leftOffset < 0)  {
        left = left - leftOffset;
      }
      if (top + tr.height > cr.height) {
        top = top - tr.height - er.height;
      }
      this.setState({
        tooltip: {
          id,
          style: {
            top,
            left,
          }
        }
      });
    }
  }
}

export default EventsDiagram;