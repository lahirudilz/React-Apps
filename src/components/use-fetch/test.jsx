import useFetch from ".";

export default function UseFetchHookTest() {
  const { data, error, pending } = useFetch(
    "https://dummyjson.com/products",
    {}
  );

  return (
    <div>
      <h1>Use Fetch Hook</h1>
      {pending ? <h3>Data is Loading! Please Wait...</h3> : null}
      {error ? <h3>{error}</h3> : null}
      {data && data.products && data.products.length
        ? data.products.map((dataItem) => (
            <p key={dataItem.key}>{dataItem.title}</p>
          ))
        : null}
    </div>
  );
}
