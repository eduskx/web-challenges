import styled from "styled-components";
import Button from "../Button";

const StyledQuickActions = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export default function QuickActions({
  turnOffLights,
  turnOnLights,
  amountLightsOn,
  amountLightsOff,
}) {
  return (
    <StyledQuickActions>
      <Button
        type="button"
        onClick={turnOffLights}
        disabled={amountLightsOn === 0}
      >
        Turn all lights off
      </Button>
      <Button
        type="button"
        onClick={turnOnLights}
        disabled={amountLightsOff === 0}
      >
        Turn all lights on
      </Button>
    </StyledQuickActions>
  );
}
