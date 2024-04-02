import { TailSpin } from 'react-loader-spinner';

const loaderStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
};

export const Loader = ({ width, height }) => {
  return (
    <TailSpin
      visible={true}
      height={height}
      width={width}
      color="#738f43"
      ariaLabel="tail-spin-loading"
      radius="1"
      wrapperStyle={loaderStyle}
    />
  );
};
