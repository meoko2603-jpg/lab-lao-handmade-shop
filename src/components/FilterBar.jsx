import { useState } from "react";
import { categories } from "../data.js";

function FilterBar() {
  const [value, setValue] = useState("all");
  const options = ["all", ...categories];
  return (
    <div className="filter-row">
      {options.map((c) => (
        <button
          key={c}
          className={"filter-btn" + (value === c ? " active" : "")}
          onClick={() => setValue(c)}
        >
          {c === "all" ? "ທັງໝົດ" : c}
        </button>
      ))}
    </div>
  );
}

export default FilterBar;
