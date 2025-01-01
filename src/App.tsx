import "boxicons/css/boxicons.min.css";
import Dialog from "./components/general/Dialog";
export default function App() {
  return (
    <div className="min-h-screen flex justify-center items-center bg-black relative">
      <div>
        <Dialog
          title="Edit profile"
          description="Make changes to your profile here. Click save when you're done."
          data={[
            { label: "Name", placeholder: "PedroDuarte", type: "text" },
            {
              label: "Username",
              placeholder: "@pedurate",
              type: "text",
            },
          ]}
        />
      </div>
    </div>
  );
}
