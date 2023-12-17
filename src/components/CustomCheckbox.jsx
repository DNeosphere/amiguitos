import "./styles/customcheckbox.scss";

function CustomCheckbox({ label, value, onChange }) {
  return (
    <div className="checkbox">
      <label className="checkbox__label">
        <input
          className="checkbox__input"
          type="checkbox"
          checked={value}
          onChange={onChange}
        />
        {label}
      </label>
    </div>
  );
}

export default CustomCheckbox;
