export {};

declare global {
  type ITag = {
    name: string;
  };

  type IMix = {
    slug: string;
    name: string;
    tags: ITag[];
  };

  type IMixesProviderProps = {
    children: React.ReactNode;
    mixes: IMix[];
  };

  type ISearchModalProps = {
    searchText: string;
  };
}
