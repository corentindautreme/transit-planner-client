import DeparturesList from '@/app/(ui)/departures/components/departures-list';

export default async function Page(props: { params: Promise<{ stop: string }>; }) {
    const params = await props.params;
    const stop = decodeURIComponent(params.stop);

    return (
        <DeparturesList stop={stop}/>
    );
}