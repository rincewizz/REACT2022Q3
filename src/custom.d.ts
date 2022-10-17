declare module '*.svg' {
  const content: string;
  export default content;
}
declare module '*.jpg' {
  const content: string;
  export default value;
}
declare module '*.scss' {
  interface IClassNames {
    [className: string]: string;
  }
  const classNames: IClassNames;
  export = classNames;
}
