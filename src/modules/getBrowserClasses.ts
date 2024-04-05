export const getBrowserClasses = () => {
    const elements = document.getElementsByTagName("*");

    const classNames = new Set();

    for (let i = 0; i < elements.length; i++) {
        const classes = elements[i].className.split(" ");

        for (let j = 0; j < classes.length; j++) {
            classNames.add(classes[j]);
        }
    }

    const uniqueClassNames = Array.from(classNames);

    return uniqueClassNames
}
