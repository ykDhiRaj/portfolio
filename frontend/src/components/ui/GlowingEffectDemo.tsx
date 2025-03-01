"use client";

import { ArrowRight } from "lucide-react";
import { GlowingEffect } from "./glowing-effect";
import { cn } from "@/lib/utils";

export function GlowingEffectDemo() {
  return (
    <ul className="grid grid-cols-1 grid-rows-none gap-4 md:grid-cols-12 md:grid-rows-3 lg:gap-4 xl:max-h-[34rem] xl:grid-rows-2">
      <GridItem
        area="md:[grid-area:1/1/2/7] xl:[grid-area:1/1/2/5]"
        icon={<ArrowRight className="h-4 w-4" />}
        title="Gameverse"
        description="Where user can manage their games and see the reviews."
        link="https://gameverse-r1ui.onrender.com/"
      />
      <GridItem
        area="md:[grid-area:1/7/2/13] xl:[grid-area:2/1/3/5]"
        icon={<ArrowRight className="h-4 w-4" />}
        title="FOG"
        description="Buying styling essentials made easy."
        link="https://fog-ecommerce.vercel.app/"
      />
      <GridItem
        area="md:[grid-area:2/1/3/7] xl:[grid-area:1/5/3/8]"
        icon={<ArrowRight className="h-4 w-4" />}
        title="ToDo"
        description="A todo app showing the power of redux"
        link="https://taskmaster-seven-tan.vercel.app/"
        
      />
      <GridItem
        area="md:[grid-area:2/7/3/13] xl:[grid-area:1/8/2/13]"
        icon={<ArrowRight className="h-4 w-4" />}
        title="Medicare"
        description="Seamless appoinment booking with the hospital."
        link="https://github.com/ykDhiRaj/Mern-medicare"
      />
      <GridItem
        area="md:[grid-area:3/1/4/13] xl:[grid-area:2/8/3/13]"
        icon={<ArrowRight className="h-4 w-4" />}
        title="Chat - socket.io"
        description="A real time chat app demo using socket io"
        link="https://github.com/ykDhiRaj/chat-socket.io"
      />
    </ul>
  );
}

const handleClick = (link: string)=>{
  window.open(link, "_blank");
}

interface GridItemProps {
  area: string;
  icon: React.ReactNode;
  title: string;
  description: React.ReactNode;
  link:string;
}

const GridItem = ({ area, icon, title, description, link }: GridItemProps) => {
  return (
    <li className={cn("min-h-[14rem] list-none", area)}>
      <div
        className="relative h-full rounded-[1.25rem] border-[0.75px] border-border p-2 md:rounded-[1.5rem] md:p-3 cursor-pointer"
        onClick={() => handleClick(link)}
      >
        <GlowingEffect
          spread={40}
          glow={true}
          disabled={false}
          proximity={64}
          inactiveZone={0.01}
          borderWidth={3}
        />
        <div className="relative flex h-full flex-col justify-between gap-6 overflow-hidden rounded-xl border-[0.75px] bg-background p-6 shadow-sm dark:shadow-[0px_0px_27px_0px_rgba(45,45,45,0.3)] md:p-6">
          <div className="relative flex flex-1 flex-col justify-between gap-3">
            <div className="w-fit rounded-lg border-[0.75px] border-border bg-muted p-2">
              {icon}
            </div>
            <div className="space-y-3">
              <h3 className="pt-0.5 text-xl leading-[1.375rem] font-semibold font-sans tracking-[-0.04em] md:text-2xl md:leading-[1.875rem] text-balance text-foreground">
                {title}
              </h3>
              <h2 className="[&_b]:md:font-semibold [&_strong]:md:font-semibold font-sans text-sm leading-[1.125rem] md:text-base md:leading-[1.375rem] text-muted-foreground">
                {description}
              </h2>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};
