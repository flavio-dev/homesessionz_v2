export {};

declare global {
  type IMix = {
    slug: string;
  };

  type IMixesProviderProps = {
    children: React.ReactNode;
    mixes: IMix[];
  };
}
