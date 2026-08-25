import { RxCross2 } from "react-icons/rx";
import "./ShortlistToast.css";

function ShortlistToast({ show, title, description, onClose }) {
  if (!show) return null;

  return (
    <div className="shortlist-toast">
      <div className="toast-bar"></div>

      <div className="toast-content">
        <strong>{title}</strong>
        <p>{description}</p>
      </div>

      <span className="toast-close" onClick={onClose}>
        <RxCross2 />
      </span>
    </div>
  );
}

export default ShortlistToast;
