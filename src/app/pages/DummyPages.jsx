import { FC } from "react";
import AppPage from "../components/AppPage/AppPage";
import Typography from "@mui/material/Typography";

export const Friends: FC = () => {
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

export const Memories: FC = () => {
  return (
    <AppPage title={""} description={""}>
      <div>
        <Typography variant="subtitle1" gutterBottom>
          Memories
        </Typography>
      </div>
    </AppPage>
  );
};

export const Interests: FC = () => {
  return (
    <AppPage title={""} description={""}>
      <div>
        <Typography variant="subtitle1" gutterBottom>
          Interests
        </Typography>
      </div>
    </AppPage>
  );
};

export const Places: FC = () => {
  return (
    <AppPage title={""} description={""}>
      <div>
        <Typography variant="subtitle1" gutterBottom>
          Places
        </Typography>
      </div>
    </AppPage>
  );
};

export const Events: FC = () => {
  return (
    <AppPage title={""} description={""}>
      <div>
        <Typography variant="subtitle1" gutterBottom>
          Events
        </Typography>
      </div>
    </AppPage>
  );
};

export const Profile: FC = () => {
  return (
    <AppPage title={""} description={""}>
      <div>
        <Typography variant="subtitle1" gutterBottom>
          Profile
        </Typography>
      </div>
    </AppPage>
  );
};

export const Settings: FC = () => {
  return (
    <AppPage title={""} description={""}>
      <div>
        <Typography variant="subtitle1" gutterBottom>
          Settings & Privacy
        </Typography>
      </div>
    </AppPage>
  );
};

export const Help: FC = () => {
  return (
    <AppPage title={""} description={""}>
      <div>
        <Typography variant="subtitle1" gutterBottom>
          Help & Support
        </Typography>
      </div>
    </AppPage>
  );
};

export const Logout: FC = () => {
  return (
    <AppPage title={""} description={""}>
      <div>
        <Typography variant="subtitle1" gutterBottom>
          Logout
        </Typography>
      </div>
    </AppPage>
  );
};

const DummyPages = {
  Friends,
  Memories,
  Interests,
  Places,
  Events,
  Profile,
  Settings,
  Help,
  Logout,
};

export default DummyPages;
