import { Link } from "react-router-dom";

const ErrorHandler = ({ error }) => {
  console.log(error);
  if (!error.message || !error.status) {
    return (
      <>
        <h2>oops looks like you're lost</h2>
        <Link to="/">
          <p>Go back to Home Page</p>
        </Link>
      </>
    );
  } else {
    return (
      <>
        <img
          src="data:image/png;base64,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"
          alt="ALERT!"
        ></img>
        <h2>Error: {error.status}</h2>
        <i>{error.message}</i>
        <Link to="/">
          <p>Go back to Home Page</p>
        </Link>
      </>
    );
  }
};

export default ErrorHandler;
