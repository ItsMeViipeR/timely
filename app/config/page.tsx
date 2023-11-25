import { Form } from "@/components/Form";
import { config } from "@/config/getConfig";

export default function Config() {
  return (
    <div className="text-center">
      <h1 className="text-3xl font-extrabold text-center pt-6">
        Here you can edit your Timely configuration
      </h1>

      <hr className="mt-24" />

      <h1 className="text-xl font-extrabold text-center pt-16">
        Database configuration
      </h1>

      <Form config={config} />

      <p className="pt-6">
        <span className="text-red-600">Edit it if you know what you do</span>
      </p>
    </div>
  );
}
