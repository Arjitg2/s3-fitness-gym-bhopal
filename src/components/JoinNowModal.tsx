import React, { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Send } from "lucide-react";

export default function JoinNowModal({ children }: { children: React.ReactElement }) {
  const [open, setOpen] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would submit to an API
    alert("Thank you! Our team will contact you shortly.");
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger render={children} />
      <DialogContent className="bg-charcoal border-neon/20 text-white sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="text-2xl font-black text-white">START YOUR <span className="text-neon">JOURNEY</span></DialogTitle>
          <DialogDescription className="text-white/60">
            Fill out this quick form and we'll get you set up with the perfect plan.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4 mt-4">
          <div className="space-y-2">
            <Label htmlFor="name" className="text-white/80">Full Name</Label>
            <Input id="name" required placeholder="Rahul Sharma" className="bg-black border-white/10 focus-visible:ring-neon text-white" />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="age" className="text-white/80">Age</Label>
              <Input id="age" type="number" required min="14" max="100" placeholder="25" className="bg-black border-white/10 focus-visible:ring-neon text-white" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone" className="text-white/80">Phone Number</Label>
              <Input id="phone" type="tel" required placeholder="9876543210" className="bg-black border-white/10 focus-visible:ring-neon text-white" />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="goal" className="text-white/80">Primary Goal</Label>
            <Select required>
              <SelectTrigger className="bg-black border-white/10 focus:ring-neon text-white">
                <SelectValue placeholder="Select your goal" />
              </SelectTrigger>
              <SelectContent className="bg-charcoal border-white/10 text-white">
                <SelectItem value="lose-fat">Lose Fat</SelectItem>
                <SelectItem value="gain-mass">Gain Mass</SelectItem>
                <SelectItem value="increase-endurance">Increase Endurance</SelectItem>
                <SelectItem value="yoga">Yoga & Flexibility</SelectItem>
                <SelectItem value="general">General Fitness</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <Button type="submit" className="w-full bg-neon text-black hover:bg-neon/90 font-black text-lg py-6 mt-4 group">
            JOIN NOW
            <Send className="ml-2 w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
