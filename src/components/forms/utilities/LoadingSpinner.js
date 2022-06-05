import { FadeLoader, BarLoader } from "react-spinners";
import { css } from "@emotion/react";

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
  width: 100%;
`;

export const BarLoadingSpinner = ({ loading }) => {
  return (
    <BarLoader color={"#BB2E45"} loading={loading} size={100} css={override} />
  );
};

export const FadeLoadingSpinner = ({ loading }) => {
  return (
    <FadeLoader color={"#BB2E45"} loading={loading} size={100} css={override} />
  );
};