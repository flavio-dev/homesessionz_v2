export {};

declare global {
  type ITag = {
    name: string;
  };

  type IMix = {
    slug: string;
    name: string;
    tags: ITag[];
    pictures: IMixPicture;
  };

  type IMixPicture = {
    extra_large: string;
  };

  type IMixesProviderProps = {
    children: React.ReactNode;
    mixes: IMix[];
  };

  type ISearchModalProps = {
    searchText: string;
    clearInput: () => void;
  };

  type ICloudCastProps = {
    mix: IMix;
  };
}
