export function emphasizeString(string, magnitude) {
    for (let i = 0; i < magnitude; i++) {
        string += "1";
    }
    return string;
}