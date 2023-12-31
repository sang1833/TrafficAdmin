import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setPageTitle } from "../../features/common/headerSlice";
import Question from "../../features/question/index";

function InternalPage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setPageTitle({ title: "Câu hỏi" }));
  }, [dispatch]);

  return (
    <section className="">
      <Question />
    </section>
  );
}

export default InternalPage;
