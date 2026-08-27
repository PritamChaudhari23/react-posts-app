import "../appPage.scss";

const PageBody = ({ children, className, ...props }) => (
  <section className={`page-body ${className || ""}`} {...props}>
    {children}
  </section>
);

export default PageBody;
