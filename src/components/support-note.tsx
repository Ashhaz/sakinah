import { HeartHandshake, ShieldAlert } from "lucide-react";

export function SupportNote({ text }: { text: string }) {
  return (
    <aside className="support-note">
      <div className="support-icon"><HeartHandshake size={20} /></div>
      <div><h3>Support is part of caring for yourself.</h3><p>{text}</p></div>
    </aside>
  );
}

export function UrgentSupportNote() {
  return (
    <aside className="urgent-note">
      <ShieldAlert size={19} />
      <p><strong>If you may be in immediate danger or might harm yourself:</strong> please tell a trusted person now, stay with someone, and contact local emergency or crisis services. You deserve immediate human support.</p>
    </aside>
  );
}
