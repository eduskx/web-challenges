import Link from "../components/Link";
import QuickActions from "../components/QuickActions";

export default function Actions({
  turnOffLights,
  turnOnLights,
  amountLightsOn,
  amountLightsOff,
}) {
  return (
    <>
      <Link href="/">← Back home</Link>
      <h1>Quick Actions</h1>
      <QuickActions
        turnOffLights={turnOffLights}
        turnOnLights={turnOnLights}
        amountLightsOn={amountLightsOn}
        amountLightsOff={amountLightsOff}
      />
    </>
  );
}
