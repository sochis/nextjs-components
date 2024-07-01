export interface RadixTabsParams {
  className?: string;
  defaultValue: string;
  tabs: { value: string; title: React.ReactNode; content: React.ReactNode }[];
}
