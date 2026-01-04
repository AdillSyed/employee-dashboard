import Modal from "./Modal";

export default function ConfirmDialog({
  title,
  message,
  onConfirm,
  onCancel,
}) {
  return (
    <Modal title={title} onClose={onCancel}>
      <p className="text-sm text-slate-600">{message}</p>

      <div className="flex justify-end gap-2 mt-6">
        <button
          onClick={onCancel}
          className="px-4 py-2 text-sm"
        >
          Cancel
        </button>
        <button
          onClick={onConfirm}
          className="px-4 py-2 rounded-md bg-red-500 text-white text-sm"
        >
          Delete
        </button>
      </div>
    </Modal>
  );
}
