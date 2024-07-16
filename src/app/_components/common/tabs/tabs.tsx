import { Tabs } from "@radix-ui/themes";
import { RadixTabsParams } from "@/types/common/tabs/tabs";

export default async function LadixTabs({
  className,
  defaultValue,
  tabs,
}: Readonly<RadixTabsParams>) {
  return (
    <Tabs.Root className={className} defaultValue={defaultValue}>
      <Tabs.List>
        {tabs.map((tab, index) => (
          <Tabs.Trigger key={index} value={tab.value}>
            {tab.title}
          </Tabs.Trigger>
        ))}
      </Tabs.List>
      <div className="p-4">
        {tabs.map((tab, index) => (
          <Tabs.Content key={index} value={tab.value}>
            {tab.content}
          </Tabs.Content>
        ))}
      </div>
    </Tabs.Root>
  );
}
