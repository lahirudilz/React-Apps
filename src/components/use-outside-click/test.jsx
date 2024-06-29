import { useRef, useState } from "react";
import useOutsideClick from ".";

export default function UseOnClickOutsideTest() {
  const ref = useRef();
  const [showContent, setShowContent] = useState(false);
  useOutsideClick(ref, () => setShowContent(false));

  return (
    <div>
      {showContent ? (
        <div ref={ref}>
          <h1>This is a random content</h1>
          <p>
            Please click the outside to close this. It won't close if you click
            inside
          </p>
        </div>
      ) : (
        <button onClick={() => setShowContent(true)}>Show Content</button>
      )}
    </div>
  );
}
