import { useState, FormEvent } from "react";
import { Input } from "./ui/input";

interface NameFormProps {
  onSubmit: (name: string) => void;
}

const NameForm: React.FC<NameFormProps> = ({ onSubmit }) => {
  const [name, setName] = useState<string>("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (name) {
      onSubmit(name);
      setName("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <Input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter a name"
        required
      />
      <button
        className="p-2 px-4 my-2 bg-green-600 hover:text-white rounded hover:rounded-full transition"
        type="submit"
      >
        Submit
      </button>
    </form>
  );
};

export default NameForm;
