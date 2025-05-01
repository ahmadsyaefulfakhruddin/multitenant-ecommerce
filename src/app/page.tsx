import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import { Textarea } from "@/components/ui/textarea";

export default function Home() {
  return (
    <div className="p-4">
      <div className="flex flex-col gap-4 justify-start">
        <Button variant={"elevated"}>I am button</Button>
        <Input placeholder="I am input" />
        <Textarea placeholder="i am textarea" />
        <Progress value={50} />
        <Checkbox />
      </div>
    </div>
  );
}
