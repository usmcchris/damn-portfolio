import {
    faTrash,
    faSignOutAlt,
    faEdit,
    faSpinner,
    faPlusCircle,
    faSquarePhone,
    faPaperPlane,
    faMap

} from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";


const Icons = () => {
return library.add(faTrash, faSignOutAlt, faEdit, faSpinner, faPlusCircle, faSquarePhone, faPaperPlane, faMap);
};

export default Icons;