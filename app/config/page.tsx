import { Form } from "@/components/Form";
import { config } from "@/config/getConfig";

export default function Config() {
  return <Form config={config} />;
}
