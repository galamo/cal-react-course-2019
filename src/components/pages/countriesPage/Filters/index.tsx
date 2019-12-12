import React, { useState } from "react";

export default function(props: { key?: string }) {
  const [state, setState] = useState(1);
  return (
    <div>
      <h1>filters {state}</h1>
    </div>
  );
}
