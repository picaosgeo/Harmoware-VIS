import * as React from 'react';
interface Props {
    timeBegin: number;
    settime: number;
    caption: string;
    locales: string;
    options: any;
    className: string;
}
export default class SimulationDateTime extends React.Component<Props> {
    static defaultProps: {
        caption: string;
        locales: string;
        options: {
            year: string;
            month: string;
            day: string;
            hour: string;
            minute: string;
            second: string;
            weekday: string;
        };
        className: string;
    };
    render(): JSX.Element;
}
export {};
