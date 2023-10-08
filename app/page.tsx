import { CardWithForm } from '@/components/Pages/Home/Card';
import { Button } from '@/components/ui/button';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Button variant={'secondary'}>Click me</Button>
      <CardWithForm/>
    </main>
  )
}
