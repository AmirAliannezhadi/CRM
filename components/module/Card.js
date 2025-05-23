import Link from "next/link";
import { useRouter } from "next/router";

function Card({ customer }) {
  const router = useRouter();
  const deleteHandler = async (id) => {
    const res = await fetch(`/api/delete/${id}`, {
      method: "DELETE",
    });
    const data = await res.json();
    console.log(data);
    if (data.status === "Success") {
      router.reload();
    }
  };
  return (
    <div className="card">
      <div className="card__details">
        <p>
          {customer.name} {customer.lastName}
        </p>
        <p>{customer.email}</p>
      </div>
      <div className="card__buttons">
        <button onClick={(e) => deleteHandler(customer._id)}>Delete</button>
        <Link href={`/edit/${customer._id}`}>Edit</Link>
        <Link href={`/customer/${customer._id}`}>Details</Link>
      </div>
    </div>
  );
}

export default Card;
