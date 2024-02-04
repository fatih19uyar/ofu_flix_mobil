import {RootState} from '..';

export interface ContentItem {
  id: string;
  title: string;
  image: string;
  desc?: string;
  rate?: number
}
export interface ContentState {
  myList: ContentItem[];
  previews: ContentItem[];
  dumpData: ContentItem[];
  selectedContent: ContentItem | null;
}

export interface AsyncThunkConfig {
  state: RootState;
}
