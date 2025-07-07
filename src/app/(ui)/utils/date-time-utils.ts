export function getDisplayTime(time: string, now: Date) {
    const waitTimeInMinutes = Math.ceil((new Date(time).getTime() - now.getTime()) / 60_000);
    return waitTimeInMinutes == 0 ? 'now' :
        waitTimeInMinutes <= 10
            ? `${waitTimeInMinutes} min`
            : new Date(time).toLocaleString('bs-BA', {timeStyle: 'short'});
}