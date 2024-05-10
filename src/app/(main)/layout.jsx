import Header from "@/components/layout/Header";

export default function LayoutMain({ children }) {
  return (
    <main>
      <Header />
      {children}
    </main>
  );
}
