import React from "react";

import { send } from "emailjs-com";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "./style.scss";

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    send("service_euqyhc9", "template_u6813r7", data, "VBoqRy26exf_iT0WI")
      .then((Response) => {
        console.log("Success!", Response.status, Response.text);
        formSuccess();
      })
      .catch((err) => {
        console.log("Failed...", err);
      });
  };

  const formSuccess = () => {
    toast("Thanks for submiting your query!");
    document.getElementById("queryFrom").reset();
  };

  return (
    <div className="query-form">
      <ToastContainer />
      <form id="queryFrom" onSubmit={handleSubmit(onSubmit)}>
        <div className="input-field">
          <input
            type="text"
            name="from_name"
            placeholder="Name"
            {...register("from_name", {
              required: "Name is required",
            })}
          />
          {errors.from_name?.message && (
            <p className="errors">{errors.from_name?.message}</p>
          )}
        </div>

        <div className="input-field">
          <input
            type="text"
            name="reply_to"
            placeholder="Email"
            {...register("reply_to", {
              required: "Email is required",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-0.-]+\.[A-z]{2,}$/i,
                message: "Invalid email address",
              },
            })}
          />
          {errors.reply_to?.message && (
            <p className="errors">{errors.reply_to?.message}</p>
          )}
        </div>

        <div className="input-field">
          <input
            type="text"
            name="phone_number"
            placeholder="Phone"
            {...register("phone_number", {
              required: "Phone number is required",
              minLength: {
                value: 11,
                message: "Phone number is not valid",
              },
            })}
          />

          {errors.phone_number?.message && (
            <p className="errors">{errors.phone_number?.message}</p>
          )}
        </div>

        <div className="input-field">
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            {...register("subject", {
              required: "subject is required",
              minLength: {
                value: 10,
                message: "Minimum 10 characters required",
              },
            })}
          />

          {errors.subject?.message && (
            <p className="errors">{errors.subject?.message}</p>
          )}
        </div>

        <div className="input-field full-width">
          <textarea
            className="textarea"
            name="message"
            placeholder="Your message"
            {...register("message", {
              required: "Message is required",
              minLength: {
                value: 20,
                message: "Minimum 20 characters required",
              },
              maxLength: {
                value: 500,
                message: "Maximum 500 characters allowed",
              },
            })}
          />

          {errors.message?.message && (
            <p className="errors">{errors.message?.message}</p>
          )}
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Form;
