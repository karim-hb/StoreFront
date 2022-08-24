import Resturant from "@/components/resturants";
import type { NextPage } from "next";
import { useEffect } from "react";
import { get, responseValidator } from "@/scripts/api";
import { API } from "@/components/api";
import { addUserDataAction } from "redux/action/action";
import { authToken } from "@/scripts/storage";
import { useDispatch } from "react-redux";
const Home: NextPage = ({ products }: any) => {
  console.log(products, "productsproducts");
  const dispatch: any = useDispatch();
  useEffect(() => {
    if (authToken.get()) {
      get(API.user.userData).then((res: any) => {
        if (responseValidator(res) && res.data) {
          dispatch(addUserDataAction(res.data));
        }
      });
    }
  }, []);
  return (
    <>
      <Resturant />
    </>
  );
};

export default Home;
/* export async function getServerSideProps() {
  const res = await fetch(`http://localhost:8000/store/products/`, {
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
  });
  console.log(res,'resss')
  const products = await res.json();

  return {
    props: {
      products,
    },
    revalidate: 100,
  };
}
 */