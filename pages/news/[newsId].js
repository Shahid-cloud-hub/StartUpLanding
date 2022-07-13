import React from "react";
import { useRouter } from "next/router";

const DetailsPage = () => {
  const router = useRouter();
  console.log(router.query.newsId);
  return <div>The Details Page</div>;
};

export default DetailsPage;
