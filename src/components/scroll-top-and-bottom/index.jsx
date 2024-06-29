import { useRef } from "react";
import useFetch from "../use-fetch";

export default function ScrollToTopAndBottom() {
  const { data, error, pending } = useFetch(
    "https://dummyjson.com/products?limit=100",
    {}
  );

  const bottomRef = useRef(null);

  if (error) {
    return <h1>Error Occurred! Please Try Again.</h1>;
  }

  if (pending) {
    return <h1>Data is Loading! Please wait.</h1>;
  }

  function handleScrollToTop() {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }

  function handleScrollToBottom() {
    bottomRef.current.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <div>
      <h1>Scroll to top and Down Feature</h1>
      <h3>This is the Top Section</h3>
      <button onClick={handleScrollToBottom}>Scroll To Bottom</button>
      {data && data.products && data.products.length > 0
        ? data.products.map((dataItem) => (
            <ul style={{ listStyle: "none" }}>
              <li key={dataItem.key}>{dataItem.title}</li>
            </ul>
          ))
        : null}

      <h3>This is the Bottom Section</h3>
      <div ref={bottomRef}></div>
      <button onClick={handleScrollToTop}>Scroll To Top</button>
    </div>
  );
}
