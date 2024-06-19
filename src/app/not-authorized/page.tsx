import { Card } from "@/components/ui/card";

export default function NotAuthorized() {
  return (
    <main>
      <Card className="rounded-2xl bg-slate-950 shadow-2xl text-white text-center h-[760px]">
        <div className="mx-auto max-w-[683px] mt-[215px]">
          <h1 className="text-6xl font-bold leading-tight">not authorized</h1>
        </div>
      </Card>
    </main>
  );
}
