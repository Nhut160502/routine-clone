import { toast as reactToastify } from "react-toastify";

const config = {
  position: "top-right",
  autoClose: 5000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  theme: "light",
};
const toast = {
  success: (title) => {
    reactToastify.success(title, config);
  },
  warning: (title) => {
    reactToastify.warning(title, config);
  },
  error: (title) => {
    reactToastify.error(title, config);
  },
};

export default toast;
