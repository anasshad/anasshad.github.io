import { useCountUp } from "react-countup";

import Gauge from "./Gauge";

export default function Languages(props) {
  const { countUp, start, pauseResume, reset, update } = useCountUp({
    start: 0,
    end: props.value,
    delay: props.delay,
    duration: 3,
    onReset: () => console.log("Resetted!"),
    onUpdate: () => console.log("Updated!"),
    onPauseResume: () => console.log("Paused or resumed!"),
    onStart: ({ pauseResume }) => console.log(pauseResume),
    onEnd: ({ pauseResume }) => console.log(pauseResume),
  });

  return (
    <div>
      <Gauge
        value={countUp}
        color={props.color}
        label={props.label}
        logo={props.logo}
      />
    </div>
  );
}
