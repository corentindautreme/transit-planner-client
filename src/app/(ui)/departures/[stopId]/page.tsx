import DeparturesList from '@/app/(ui)/departures/components/departures-list';

export default async function Page(props: { params: Promise<{ stopId: number }>; }) {
    const params = await props.params;
    const stopId = params.stopId;

    return (
        <DeparturesList stopId={stopId}/>
    );
}