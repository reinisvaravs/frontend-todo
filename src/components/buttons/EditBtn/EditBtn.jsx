import { fetchData } from "../RefreshBtn/RefreshBtn";
const API_BASE_URL = import.meta.env.VITE_API_URL;

function EditBtn({
  name,
  value,
  setContent,
  setButtonText,
  setName,
  setValue,
}) {
  const handleEdit = async () => {
    if (!name.trim() || !value.trim()) {
      console.error("Name or value is empty.");
      setName("");
      setValue("");
      return;
    }

    try {
      const res = await fetch(`${API_BASE_URL}/changevalue`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, newValue: value }),
      });

      if (!res.ok) {
        const data = await res.json();
        console.error("Error editing person:", data.error);
        setName("");
        setValue("");
        return;
      }

      const updatedContent = await fetchData();
      setContent(updatedContent);
      setName("");
      setValue("");
    } catch (error) {
      console.error("Error editing person:", error);
    }
  };

  return <button onClick={handleEdit}>Edit</button>;
}

export default EditBtn;
