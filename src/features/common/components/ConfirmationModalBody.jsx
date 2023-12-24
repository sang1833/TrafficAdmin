/* eslint-disable react/prop-types */
import { useDispatch } from "react-redux";
import { CONFIRMATION_MODAL_CLOSE_TYPES } from "../../../utils/globalConstantUtil";
import { deleteDecree } from "../../decree/decreeSlice";
import { showNotification } from "../headerSlice";
import axios from "axios";

function ConfirmationModalBody({ extraObject, closeModal }) {
  const dispatch = useDispatch();

  // eslint-disable-next-line no-unused-vars
  const { message, type, _id, index } = extraObject;

  const proceedWithYes = async () => {
    if (type === CONFIRMATION_MODAL_CLOSE_TYPES.DECREE_DELETE) {
      const response = await axios.delete(`/decree/deleteDecree/${_id}`);
      console.log("response", response);
      if (response.data) {
        // window.location.reload();
        dispatch(showNotification({ message: "Xoá thành công!", status: 1 }));
        dispatch(deleteDecree({ index }));
      } else {
        dispatch(showNotification({ message: "Xoá thất bại!", status: 0 }));
      }
    }
    closeModal();
  };

  return (
    <>
      <p className=" text-xl mt-8 text-center">{message}</p>

      <div className="modal-action mt-12">
        <button className="btn btn-outline   " onClick={() => closeModal()}>
          Cancel
        </button>

        <button
          className="btn btn-primary w-36"
          onClick={() => proceedWithYes()}
        >
          Yes
        </button>
      </div>
    </>
  );
}

export default ConfirmationModalBody;