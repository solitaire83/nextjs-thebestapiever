export function DateFormat(){
    const now = new Date();
    const z = n => n.toString().padStart(2, '0');

    const day = z(now.getDate());
    const month = z(now.getMonth() + 1);
    const year = now.getFullYear();
    const hours = z(now.getHours());
    const minutes = z(now.getMinutes());
    return `${day}-${month}-${year}/${hours}:${minutes}`;
}