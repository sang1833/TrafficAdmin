import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setPageTitle } from "../../features/common/headerSlice";
import Fine from "../../features/fine/index";

function InternalPage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setPageTitle({ title: "Mức phạt" }));
  }, [dispatch]);

  return (
    <section className="">
      <Fine />
    </section>
  );
}

export default InternalPage;
