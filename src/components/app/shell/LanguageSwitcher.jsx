import { useTranslation } from "react-i18next";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const handleChange = (e) => {
    i18n.changeLanguage(e.target.value);
  };

  const currentLang = i18n.language?.split("-")[0] || "en";

  return (
    <Select
      value={currentLang}
      onChange={handleChange}
      size="small"
      sx={{ color: "white", minWidth: 100 }}
    >
      <MenuItem value="en">English</MenuItem>
      <MenuItem value="es">Español</MenuItem>
      <MenuItem value="fr">Français</MenuItem>
    </Select>
  );
};

export default LanguageSwitcher;
