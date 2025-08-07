import { ConnectionsByLineType, GroupedConnectionsStop, Stop } from '@/app/model/stop';
import { LineAndDirectionSign } from '@/app/(ui)/lines/components/line-and-direction-sign';
import Link from 'next/link';
import { ChevronLeft } from 'lucide-react';
import { Junction, LineStop } from '@/app/(ui)/lines/components/line-stop';
import { LineType } from '@/app/model/line-type';
import { fetch } from '@/app/(ui)/utils/fetch';

export default async function Page(props: { params: Promise<{ name: string }>; }) {
    const params = await props.params;
    const lineName = params.name;

    const line = await fetch(`${process.env.BACKEND_URL}/lines/describe-line?name=${lineName}`).then(res => res.json());

    const d1Stops: GroupedConnectionsStop[] = line.routes[0].stops.map((s: Stop) => ({
        ...s,
        connections: s.connections.reduce((connectionByLineType, c) => {
            if (!(c.type in connectionByLineType)) {
                connectionByLineType[c.type as LineType] = [];
            }
            connectionByLineType[c.type as LineType].push(c);
            return connectionByLineType;
        }, {} as ConnectionsByLineType)
    }));
    const d2Stops: GroupedConnectionsStop[] = line.routes[1].stops.reverse().map((s: Stop) => ({
        ...s,
        connections: s.connections.reduce((connectionByLineType, c) => {
            if (!(c.type in connectionByLineType)) {
                connectionByLineType[c.type as LineType] = [];
            }
            connectionByLineType[c.type as LineType].push(c);
            return connectionByLineType;
        }, {} as ConnectionsByLineType)
    }));

    const stopMap: (GroupedConnectionsStop | GroupedConnectionsStop[][])[] = [];

    let idxD1 = 0, idxD2 = 0;
    while (true) {
        while (idxD1 < d1Stops.length && idxD2 < d2Stops.length && d1Stops[idxD1].id === d2Stops[idxD2].id) {
            stopMap.push(d1Stops[idxD1]);
            idxD1++;
            idxD2++;
        }
        if (idxD1 >= d1Stops.length && idxD2 >= d2Stops.length) {
            break;
        }
        stopMap.push([[], []]);
        // while we find stops on D1 that are not on D2
        while (idxD1 < d1Stops.length && !d2Stops.some((stop: GroupedConnectionsStop) => stop.id === d1Stops[idxD1].id)) {
            (stopMap[stopMap.length - 1] as GroupedConnectionsStop[][])[0].push(d1Stops[idxD1]);
            idxD1++;
        }
        // while we find stops on D2 that are not on D1
        while (idxD2 < d2Stops.length && !d1Stops.some((stop: GroupedConnectionsStop) => stop.id === d2Stops[idxD2].id)) {
            (stopMap[stopMap.length - 1] as GroupedConnectionsStop[][])[1].push(d2Stops[idxD2]);
            idxD2++;
        }
    }

    return (
        <div className="h-full bg-white rounded-xl py-3 px-1 flex flex-col mx-auto overflow-hidden">
            <div className="flex items-center mb-3">
                <Link href="/lines"><ChevronLeft/></Link>
                <LineAndDirectionSign name={line.name} type={line.type} direction={line.directions.join(' – ')}/>
            </div>
            <div className="flex flex-col overflow-hidden overflow-y-scroll">
                {stopMap.reverse().map((stopOrSegment, index) => {
                    if (typeof stopOrSegment === 'object' && 'name' in stopOrSegment) {
                        const stop = stopOrSegment as GroupedConnectionsStop;
                        return <LineStop
                            key={`${stop.name}-${stop.name}`}
                            name={stop.name}
                            type={line.type}
                            connections={stop.connections}
                            start={index == 0}
                            end={index == stopMap.length - 1}
                            labelSide={'left'}
                        />;
                    } else {
                        if ((stopOrSegment as GroupedConnectionsStop[][]).every(segment => segment.length <= 1)) {
                            return (stopOrSegment as GroupedConnectionsStop[][])
                                .map((segment, segmentIndex) => {
                                        if (segment.length == 0) return;
                                        const stop = segment[0];
                                        return <LineStop
                                            key={`${stop.name}-${stop.name}`}
                                            name={stop.name}
                                            type={line.type}
                                            connections={stop.connections}
                                            start={index == 0}
                                            end={index == stopMap.length - 1}
                                            labelSide={segmentIndex == 1 ? 'left' : 'right'}
                                            oneWay={segmentIndex == 0 ? 'up' : 'down'}
                                        />;
                                    }
                                )
                                ;
                        } else {
                            return <Junction key={`${index}-junction`} segments={stopOrSegment} type={line.type}/>
                        }
                    }
                })}
            </div>
        </div>
    );
}