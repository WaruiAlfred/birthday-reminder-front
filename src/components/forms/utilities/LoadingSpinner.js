import BarLoader from "react-spinners/BarLoader";
import { css } from "@emotion/react";

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
  width: 100%;
`;

const LoadingSpinner = (props) => {
  return (
    <BarLoader
      color={"#BB2E45"}
      loading={props.loading}
      size={100}
      css={override}
    />
  );
};

export default LoadingSpinner;
