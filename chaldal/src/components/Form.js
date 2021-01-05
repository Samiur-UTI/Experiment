import React, {useState} from "react";
import {useForm} from "react-hook-form";

const Form = () => {
    const [formData, setFormData] = useState({
      tier: "",
      startDate: 0,
      endDate: 0
    });
    const { register, handleSubmit } = useForm();
    const onSubmit = ({ Date1, Date2, tier }) => {
      setFormData({
        tier,
        startDate: Date1,
        endDate: Date2
      });
      console.log(formData);
    };
    return (
      <div>
        <form
          style={{ marginTop: 100 }}
          className="ui form"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="ui container">
            <div className="fields">
              <div className="field">
                <label>Input interval of days in Date format</label>
                <input
                  type="date"
                  name="Date1"
                  placeholder="Example: 26/06/16"
                  ref={register}
                />
                <input
                  type="date"
                  name="Date2"
                  placeholder="Example: 03/07/16"
                  ref={register}
                />
              </div>
              <div className="field">
                <select
                  className="ui fluid search dropdown"
                  name="tier"
                  ref={register}
                >
                  <option value="">Tier</option>
                  <option value="Active">Active</option>
                  <option value="Superactive">Superactive</option>
                  <option value="Bored">Bored</option>
                </select>
              </div>
            </div>
            <input type="submit" value="Submit" className="ui submit button" />
          </div>
        </form>
      </div>
    );
  };
export default Form;
