import ClientDashboard from "../../components/ClientDashboard";
import { redirect } from "next/navigation";
import { cookies } from "next/headers";

export default function DashboardPage() {
  // Basic gate for SSR navigation: check localStorage-like via cookie fallback if present later.
  // Since we're using client-side localStorage, we cannot verify on the server.
  // Keep client-side protection in ClientDashboard; SSR just renders shell.
  return <ClientDashboard />;
}
