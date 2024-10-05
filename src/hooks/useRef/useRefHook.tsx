import React from "react";

const UseRefHook = () => {
  const emailRef = React.useRef<HTMLInputElement>(null);

  const submitHandler = () => {
    if (emailRef.current) {
      console.log(emailRef.current.value);
    }
  };

  return (
    <div>
      <input
        type="email"
        placeholder="Email"
        ref={emailRef} // Attach the ref to the input element
      />
      <button onClick={submitHandler}>Submit</button>
    </div>
  );
};

export default UseRefHook;
