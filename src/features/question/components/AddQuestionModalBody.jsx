/* eslint-disable react/prop-types */
import { useState } from "react";
import { useDispatch } from "react-redux";
import InputText from "../../../components/Input/InputText";
import ErrorText from "../../../components/Typography/ErrorText";
import CheckBox from "../../../components/Input/CheckBox";
import { showNotification } from "../../common/headerSlice";
import axios from "axios";

const INITIAL_LEAD_OBJ = {
  QuestionContent: "",
  QuestionMedia: "",
  Important: false,
  Explanation: "",
};

function AddQuestionModalBody({ closeModal }) {
  const dispatch = useDispatch();
  // eslint-disable-next-line no-unused-vars
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [leadObj, setLeadObj] = useState(INITIAL_LEAD_OBJ);

  const AddDecree = async () => {
    setLoading(true);
    const date = new Date();
    let newDecreeObj = {
      Id: "string",
      LicenseTitleId: "string",
      QuestionContent: leadObj.QuestionContent,
      QuestionMedia: "string",
      Important: leadObj.Important,
    };
    const response = await axios.post("/decree/createDecree", newDecreeObj);
    console.log("response", response);
    // dispatch(addNewDecree({ newDecreeObj }));
    window.location.reload();
    dispatch(showNotification({ message: "Thêm mới thành công!", status: 1 }));
    closeModal();
    setLoading(false);
  };

  const saveNewLead = async () => {
    if (leadObj.QuestionContent.trim() === "")
      return setErrorMessage("Phải có tên!");
    else if (leadObj.QuestionNumber.trim() === "")
      return setErrorMessage("Phải có số hiệu nghị định!");
    else {
      AddDecree();
    }
  };

  const updateFormValue = ({ updateType, value }) => {
    setErrorMessage("");
    setLeadObj({ ...leadObj, [updateType]: value });
  };

  return (
    <>
      <InputText
        type="text"
        defaultValue={leadObj.QuestionContent}
        updateType="QuestionContent"
        containerStyle="mt-4"
        labelTitle="Nội dung câu hỏi"
        updateFormValue={updateFormValue}
      />

      <InputText
        type="text"
        defaultValue={leadObj.Explanation}
        updateType="Explanation"
        containerStyle="mt-4"
        labelTitle="Giải thích"
        updateFormValue={updateFormValue}
      />

      <CheckBox
        type="checkbox"
        defaultValue={leadObj.Important}
        updateType="Important"
        containerStyle="mt-4"
        labelTitle="Điểm liệt"
        updateFormValue={updateFormValue}
      />

      <ErrorText styleClass="mt-16">{errorMessage}</ErrorText>
      <div className="modal-action">
        <button className="btn btn-ghost" onClick={() => closeModal()}>
          Huỷ
        </button>
        <button className="btn btn-primary px-6" onClick={() => saveNewLead()}>
          Lưu
        </button>
      </div>
    </>
  );
}

export default AddQuestionModalBody;