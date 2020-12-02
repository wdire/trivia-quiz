export const decodeHtml = (html:any) => {
    var txt = document.createElement("textarea");
    txt.innerHTML = html;
    return txt.value;
}

export const shuffleArray = (array: any[]) => {
    return [...array].sort(() => Math.random() - 0.5);
};