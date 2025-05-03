import { useEffect, useState } from "react";
import CustomerDetailsPage from "../../components/template/CustomerDetailsPage";
import { useRouter } from "next/router";

function Index() {
  const [data, setData] = useState(null);
  const router = useRouter();
  const {
    query: { customerId },
    isReady,
  } = router;

  useEffect(() => {}, []);

  useEffect(() => {
    if (isReady) {
      fetch(`/api/customer/${customerId}`)
        .then((res) => res.json())
        .then((data) => setData(data.data));
    }
  }, [isReady]);
  if (data) return <CustomerDetailsPage data={data} />;
}

export default Index;
