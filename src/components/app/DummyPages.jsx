import Page from "./page/Page";
import Typography from "@mui/material/Typography";

export const Friends = () => {
  return (
    <Page>
      <div>
        <Typography variant="subtitle1" gutterBottom>
          Friends
        </Typography>
      </div>
    </Page>
  );
};

const DummyPages = {
  Friends,
};

export default DummyPages;
