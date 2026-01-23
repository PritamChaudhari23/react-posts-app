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

export const Memories = () => {
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

export const Interests = () => {
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

export const Places = () => {
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

export const Events = () => {
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

export const Profile = () => {
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

export const Settings = () => {
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

export const Help = () => {
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

export const Logout = () => {
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
