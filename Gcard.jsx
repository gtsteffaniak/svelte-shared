import { createSignal } from 'solid-js';

function GCard(props) {
  let hidden = props.hidden || false;
  let lightmode = props.lightmode || false;
  let header = props.header || "";
  let bordered = props.bordered || false;

  const [isHidden, setIsHidden] = createSignal(hidden);

  function toggleHidden() {
    setIsHidden(!isHidden());
  }

  return (
    <div classList={{
        'gcard': true,
        'lightmode': lightmode,
        'hide': isHidden(),
        'bordered': bordered
      }} onClick={toggleHidden}>
      {header !== "" && (
        <div class="card-header">{header}</div>
      )}
      {header !== "" && (
        <div class="ui divider" />
      )}
      <slot />
    </div>
  );
}

export default GCard;
