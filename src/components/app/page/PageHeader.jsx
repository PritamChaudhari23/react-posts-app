import Typography from "@mui/material/Typography";
import "../appPage.scss";

const PageHeader = ({ title, description, children, className, ...props }) => (
  <section className={`page-header ${className || ""}`} {...props}>
    <Typography variant="h6">{title}</Typography>
    {description && <Typography variant="body2">{description}</Typography>}
    {children}
  </section>
);

export default PageHeader;
