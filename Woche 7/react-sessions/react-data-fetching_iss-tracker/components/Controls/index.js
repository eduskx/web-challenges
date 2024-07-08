import {
  ControlsContainer,
  ControlsButton,
  ControlsDisplay,
} from "./Controls.styled";

export default function Controls({ longitude, latitude, onRefresh }) {
  return (
    <ControlsContainer>
      <ControlsDisplay>Long: {longitude.toFixed(5)}</ControlsDisplay>
      <ControlsDisplay>Lat: {latitude.toFixed(5)}</ControlsDisplay>
      <ControlsButton type="button" onClick={onRefresh}>
        Refresh
      </ControlsButton>
    </ControlsContainer>
  );
}
