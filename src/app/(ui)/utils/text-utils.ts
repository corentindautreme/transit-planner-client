export function shortenStopName(stopName: string) {
    return stopName.split(' ')
        .filter(s => s.charAt(0) === s.charAt(0).toUpperCase())
        .map((s, index) => (index == 0 ? shortenBosnianName(s, 3) : shortenBosnianName(s, 1)) + (s.length > 1 ? '.' : ''))
        .join(' ');
}

const bosnianLetters = ['lj', 'nj', 'dž'];

function shortenBosnianName(name: string, size: number) {
    if (name.length < size) {
        return name;
    }
    if (bosnianLetters.includes(name.substring(size - 1, size + 1).toLowerCase())) {
        return name.substring(0, size + 1);
    }
    return name.substring(0, size);
}