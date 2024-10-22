let Heading = ({ content, classes }) => (
    <div className={classes}>
        {/* {content} */}
        <h2>{content}</h2>
    </div>
);

let Button = ({ content, classes }) => (
    <a href="#" className={classes}>{content}</a>
);

export { Heading, Button };