import { FC } from "react";
import Typography from "@mui/material/Typography";

interface PageHeaderProps {
  title: String;
  description: String;
}

const PageHeader: FC<PageHeaderProps> = ({ title, description }) => {
  return (
    <section id="page-header" className="page-header">
      <Typography variant="h6">{title}</Typography>
      <Typography variant="h6">{description}</Typography>
    </section>
  );
};

export default PageHeader;
