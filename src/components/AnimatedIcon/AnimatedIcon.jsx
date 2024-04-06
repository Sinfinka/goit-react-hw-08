import { BsCircleSquare } from 'react-icons/bs';
import { useSpring, animated } from 'react-spring';

export default function AnimatedIcon() {
  const props = useSpring({
    to: { opacity: 1, transform: 'scale(1)',  color: 'var(--green-color)' },
    from: { opacity: 0, transform: 'scale(0)' },
    config: { duration: 1000 },
  });

  return <animated.div style={props}>< BsCircleSquare /></animated.div>;
}