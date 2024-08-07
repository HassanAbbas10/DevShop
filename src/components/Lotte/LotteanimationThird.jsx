import Lottie from 'react-lottie';
import animationData from '../../lib/animate2.json';

const LottieAnimationThird = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  return <Lottie options={defaultOptions} height={200} width={200} />;
};

export default LottieAnimationThird;
