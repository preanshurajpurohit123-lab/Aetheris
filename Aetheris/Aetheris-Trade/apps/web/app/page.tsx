import { Button, Input, Card } from "@repo/ui";

export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-[#050816]">
      <Card hover padding="lg" className="w-[420px] space-y-4">
        <h1 className="text-white text-2xl font-bold">
          Aetheris UI
        </h1>

        <Input
          placeholder="Enter your email"
          helperText="Reusable UI Package"
        />

        <Button fullWidth>
          Continue
        </Button>
      </Card>
    </main>
  );
}