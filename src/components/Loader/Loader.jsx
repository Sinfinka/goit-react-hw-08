import { Hourglass } from "react-loader-spinner";

const Loader = () => {
  return (
    <Hourglass
      visible={true}
      height="80"
      width="80"
      ariaLabel="hourglass-loading"
      wrapperStyle={{}}
      wrapperClass=""
      colors={["var(--green-color)", "var(--middle-green-color)" ]}
    />
  );
};

export default Loader;
