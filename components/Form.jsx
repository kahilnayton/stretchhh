import React from "react";
import { useForm, Controller } from "react-hook-form";
import Input from "@material-ui/core/Input";

export default function Form() {
  const { control, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Controller
        name="firstName"
        control={control}
        defaultValue=""
        render={({ field }) => <input {...field} />}
      />
      <Controller
        name="iceCreamType"
        control={control}
        render={() => <Input 
        />}
      />
      <input type="submit" />
    </form>
  );
};