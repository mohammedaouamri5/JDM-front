import React, { useState } from "react";
import { Setting } from "../interface";
import { sendSetting } from "../send/Setting";

const SettingForm: React.FC = () => {
  const [setting, setSetting] = useState<Setting>({ PATH: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newSetting = {
      ...setting,
      PATH: e.target.value,
    };
    setSetting(newSetting);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    sendSetting(setting);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        PATH:
        <input type="text" value={setting.PATH} onChange={handleChange} />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
};

export default SettingForm;
