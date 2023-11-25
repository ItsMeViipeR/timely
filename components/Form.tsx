"use client";

import { DBCredentials } from "@/types/DB";
import { FormEvent } from "react";

interface FormProps {
  config: DBCredentials;
}

export function Form(props: FormProps) {
  const { config } = props;

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const data = {
      username: formData.get("username"),
      password: formData.get("password"),
      serverAddress: formData.get("serverAddress"),
      port: formData.get("port"),
      dbName: formData.get("dbName"),
    };

    fetch("/api/edit-config", {
      method: "POST",
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((res) => console.log(res));
  };

  return (
    <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
      <form
        action="/api/edit-config"
        method="POST"
        className="mx-auto mb-0 mt-8 max-w-md space-y-4"
        onSubmit={(e) => handleSubmit(e)}
      >
        <div>
          <label htmlFor="email" className="sr-only">
            Username
          </label>

          <div className="relative">
            <input
              type="text"
              className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm text-gray-900"
              placeholder="Enter email"
              name="username"
              id="username"
              defaultValue={config.username}
            />
          </div>
        </div>

        <div>
          <label htmlFor="password" className="sr-only">
            Password
          </label>

          <div className="relative">
            <input
              type="text"
              className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm text-gray-900 password-input"
              placeholder="Enter password"
              name="password"
              id="password"
              defaultValue={config.password}
            />
          </div>
        </div>

        <div>
          <label htmlFor="password" className="sr-only">
            Server address
          </label>

          <div className="relative">
            <input
              type="text"
              className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm text-gray-900 password-input"
              placeholder="Enter password"
              name="serverAddress"
              id="serverAddress"
              defaultValue={config.serverAddress}
            />
          </div>
        </div>

        <div>
          <label htmlFor="password" className="sr-only">
            Port
          </label>

          <div className="relative">
            <input
              type="text"
              className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm text-gray-900 password-input"
              placeholder="Enter password"
              name="port"
              id="port"
              defaultValue={config.port}
            />
          </div>
        </div>

        <div>
          <label htmlFor="password" className="sr-only">
            Database name
          </label>

          <div className="relative">
            <input
              type="text"
              className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm text-gray-900 password-input"
              placeholder="Enter password"
              name="dbName"
              id="dbName"
              defaultValue={config.dbName}
            />
          </div>
        </div>

        <div className="flex items-center justify-between">
          <button
            type="submit"
            className="inline-block rounded-lg bg-blue-500 px-5 py-3 text-sm font-medium text-white ml-auto mr-auto"
          >
            Edit
          </button>
        </div>
      </form>
    </div>
  );
}
