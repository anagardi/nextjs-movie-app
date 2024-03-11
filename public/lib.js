export function convertToTitleCase(str, join_by) {
    if (!str) {
        return "";
    }
    return str.toLowerCase().split("-").map((word, i) => {
        return word.charAt(0).toUpperCase().concat(word.substr(1));
    }).join(join_by);
}