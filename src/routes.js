import ChatIcon from '@mui/icons-material/Chat';
import HistoryIcon from '@mui/icons-material/History';
import SettingsIcon from '@mui/icons-material/Settings';


export const routes = [
  {
    name: "chat",
    link: "/",
    icon: <ChatIcon />
  },
  {
    name: "settings",
    link: "/settings",
    icon: <SettingsIcon />
  },
  {
    name: "Chat history",
    link: "/history",
    icon: <HistoryIcon />
  },
  
]