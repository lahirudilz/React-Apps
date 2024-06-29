export default function Suggestions({ data, handleClick }) {
  return (
    <ul>
      {data && data.length
        ? data.map((item, index) => (
            <li
              onClick={handleClick}
              key={index}
              style={{ listStyleType: "none" }}
            >
              {item}
            </li>
          ))
        : null}
    </ul>
  );
}
