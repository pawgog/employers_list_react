const size = {
    sm: '576px',
    md: '780px',
    lg: '970px',
    xl: '1200px',
};

const device = (Object.keys(size) as Array<keyof typeof size>).reduce((acc, key) => {
    acc[key] = (style: TemplateStringsArray) => `@media (min-width: ${size[key]}) { ${style} }`;
    return acc;
}, {} as { [index: string]: (style: TemplateStringsArray) => string });

export default device;
