import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setPageTitle } from "../../features/common/headerSlice";
import SignType from "../../features/signType/index";

function InternalPage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setPageTitle({ title: "Loại biển báo" }));
  }, [dispatch]);

  return (
    <section className="">
      <SignType />
    </section>
  );
}

export default InternalPage;
