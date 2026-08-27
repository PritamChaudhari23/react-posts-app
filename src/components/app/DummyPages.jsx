import AppPage from "../components/AppPage/AppPage";
import Typography from "@mui/material/Typography";

export const Friends = () => {
  return (
    <AppPage title={""} description={""}>
      <div>
        <Typography variant="subtitle1" gutterBottom>
          Friends
        </Typography>
      </div>
    </AppPage>
  );
};

const DummyPages = {
  Friends,
};

export default DummyPages;
