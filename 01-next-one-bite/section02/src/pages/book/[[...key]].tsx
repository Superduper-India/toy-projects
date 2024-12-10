import { useRouter } from "next/router";

export default function Page() {
  const router = useRouter();
  const {
    query: { key },
  } = router;

  return <h1>Book {key}</h1>;
}
