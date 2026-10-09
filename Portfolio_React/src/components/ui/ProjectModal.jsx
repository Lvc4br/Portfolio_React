import { useEffect, useRef } from "react";

export default function ProjectModal({ project, onClose }) {
  const closeButtonRef = useRef(null);
  const panelRef = useRef(null);
  const onCloseRef = useRef(onClose);

  useEffect(() => {
    onCloseRef.current = onClose;
  }, [onClose]);

  useEffect(() => {
    const previousFocus = document.activeElement;
    closeButtonRef.current?.focus();

    function handleKeyDown(event) {
      if (event.key === "Escape") {
        onCloseRef.current();
        return;
      }

      if (event.key !== "Tab") return;

      const focusableElements = panelRef.current?.querySelectorAll(
        'button:not([disabled]), a[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])'
      );
      const focusable = Array.from(focusableElements ?? []).filter(
        (element) => element.getClientRects().length > 0
      );

      if (focusable.length === 0) {
        event.preventDefault();
        panelRef.current?.focus();
        return;
      }

      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (!panelRef.current?.contains(document.activeElement)) {
        event.preventDefault();
        (event.shiftKey ? last : first).focus();
      } else if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    }

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);

      if (previousFocus instanceof HTMLElement) {
        previousFocus.focus();
      }
    };
  }, []);

  return (
    <div
      className="modal"
      role="dialog"
      aria-modal="true"
      aria-labelledby="project-modal-title"
      onMouseDown={(event) =>
        event.target === event.currentTarget && onClose()
      }
    >
      <div className="modal__panel" ref={panelRef} tabIndex="-1">
        <button
          ref={closeButtonRef}
          className="modal__close"
          type="button"
          onClick={onClose}
        >
          Close ×
        </button>
        <div className={`modal__visual ${project.visual}`}>
          {project.image ? (
            <img src={project.image} alt={project.title} />
          ) : (
            <span className="modal__placeholder" aria-hidden="true" />
          )}
          <span>{project.number}</span>
        </div>
        <p className="eyebrow">{project.category}</p>
        <h2 id="project-modal-title">{project.title}</h2>
        <p className="modal__copy">{project.description}</p>
        <div className="tag-row">
          {project.tools.map((t) => (
            <span key={t}>{t}</span>
          ))}
        </div>
        <div className="modal__note">
          Detailed case study coming soon.
        </div>
      </div>
    </div>
  );
}