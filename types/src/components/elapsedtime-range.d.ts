import * as React from 'react';
import { InputEvent } from '../types';
import { setTime } from '../actions';
interface Props {
    settime: number;
    timeLength: number;
    min: number;
    step: number;
    actions: {
        setTime: typeof setTime;
    };
    id: string;
    className: string;
}
export default class ElapsedTimeRange extends React.Component<Props> {
    static defaultProps: {
        min: number;
        step: number;
        className: string;
    };
    setTime(e: InputEvent): void;
    render(): JSX.Element;
}
export {};
