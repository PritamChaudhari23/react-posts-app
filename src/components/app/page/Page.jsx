import "../appPage.scss";

const Page = ({ children, className, ...props }) => (
  <main id="app-body" className={`app-body ${className || ""}`} {...props}>
    {children}
  </main>
);

export default Page;
